package Kicha_Ai_Spring.Mainpack;

import Kicha_Ai_Spring.modal.aichats;
import Kicha_Ai_Spring.repositry.airepositry;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class AiService {

    private final airepositry chatRepo;
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    // ✅ CORRECT & WORKING GEMINI ENDPOINT
    private static final String GEMINI_URL ="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=";

    public AiService(airepositry chatRepo) {
        this.chatRepo = chatRepo;
    }

    // 🧠 Ask AI
    public AiResponse getAiReply(String prompt) {
        try {
            String reply = callGemini(prompt);

            aichats chat = new aichats();
            chat.setName(prompt);
            chat.setDiscription(reply);
            chatRepo.save(chat);

            return new AiResponse(true, "AI reply generated", prompt, reply);
        } catch (Exception e) {
            return new AiResponse(false, e.getMessage(), prompt, null);
        }
    }

    // 🔍 Search AI
    public AiResponse getSearchReply(String prompt) {
        try {
            String reply = callGemini(prompt);

//            aichats chat = new aichats();
//            chat.setName(prompt);
//            chat.setDiscription(reply);
//            chatRepo.save(chat);

            return new AiResponse(true, "AI reply for search", prompt, reply);
        } catch (Exception e) {
            return new AiResponse(false, e.getMessage(), prompt, null);
        }
    }

    // 📂 Chat History
    public List<aichats> getAllHistory() {
        return chatRepo.findAll();
    }

    // 🔥 Gemini API Call
    private String callGemini(String prompt) {

        String url = GEMINI_URL + geminiApiKey;

        Map<String, Object> body = Map.of(
                "contents", List.of(
                        Map.of(
                                "parts", List.of(
                                        Map.of("text", prompt)
                                )
                        )
                )
        );

        Map response = restTemplate.postForObject(url, body, Map.class);

        List candidates = (List) response.get("candidates");
        Map content = (Map) ((Map) candidates.get(0)).get("content");
        List parts = (List) content.get("parts");
        Map textPart = (Map) parts.get(0);

        return textPart.get("text").toString();
    }
}
