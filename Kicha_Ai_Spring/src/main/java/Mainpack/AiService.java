package Mainpack;

import com.theokanning.openai.service.OpenAiService;

import modal.aichats;
import repositry.airepositry;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.List;

@Service
public class AiService {

    private final airepositry chatRepo;
    private final OpenAiService openAiService;

    // Inject repository + load your API key from application.properties
    public AiService(airepositry chatRepo, 
                     @Value("${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}") String apiKey) {
        this.chatRepo = chatRepo;
        this.openAiService = new OpenAiService(apiKey, Duration.ofSeconds(30));
    }

    // 🧠 Get AI reply directly from OpenAI API
    public AiResponse getAiReply(String prompt) {
        try{
        ChatMessage message = new ChatMessage("user", prompt);

        ChatCompletionRequest request = ChatCompletionRequest.builder()
                .model("gpt-3.5-turbo")  // You can also use "gpt-4o-mini"
                .messages(List.of(message))
                .maxTokens(200)
                .build();

        String reply = openAiService.createChatCompletion(request)
                .getChoices()
                .get(0)
                .getMessage()
                .getContent();

        // Optional: save chat in database
        aichats chat = new aichats();
        chat.setPrompt(prompt);
        chat.setReply(reply);
        chatRepo.save(chat);

         return new AiResponse(true, "AI reply generated successfully", prompt, reply);

    } catch (Exception e) {
        return new AiResponse(false, "Error: " + e.getMessage(), prompt, null);
    }
}
    // 🗂 Get all saved chat history
    public List<aichats> getAllHistory() {
        return chatRepo.findAll();
    }
}