package Mainpack;

import modal.aichats;
import repositry.airepositry;

import com.theokanning.openai.OpenAiService;
import com.theokanning.openai.completion.CompletionRequest;
import com.theokanning.openai.completion.CompletionResult;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AiService {

    private final airepositry chatRepo;
    private final OpenAiService openAiService;

    public AiService(airepositry chatRepo,
                     @Value("${openai.api.key}") String apiKey) {
        this.chatRepo = chatRepo;
        this.openAiService = new OpenAiService(apiKey);
    }

    // 🧠 Generate AI Reply
    public AiResponse getAiReply(String prompt) {
        try {
            CompletionRequest request = CompletionRequest.builder()
                    .model("gpt-4o-mini")
                    .prompt(prompt)
                    .maxTokens(300)
                    .build();

            CompletionResult result = openAiService.createCompletion(request);
            String reply = result.getChoices().get(0).getText().trim();

            // Save to DB
            aichats chat = new aichats();
            chat.setPrompt(prompt);
            chat.setReply(reply);
            chatRepo.save(chat);

            return new AiResponse(true, "AI reply generated", prompt, reply);

        } catch (Exception e) {
            return new AiResponse(false, e.getMessage(), prompt, null);
        }
    }

    // 📂 Chat history
    public List<aichats> getAllHistory() {
        return chatRepo.findAll();
    }
}
