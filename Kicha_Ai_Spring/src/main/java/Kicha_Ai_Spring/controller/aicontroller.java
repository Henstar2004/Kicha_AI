package Kicha_Ai_Spring.controller;

import Kicha_Ai_Spring.Mainpack.AiResponse;
import Kicha_Ai_Spring.Mainpack.AiService;
import Kicha_Ai_Spring.modal.aichats;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
//@RequestMapping("/api/ai")
//@CrossOrigin(origins = "*")
public class aicontroller {

    @Autowired
    private AiService aiService;

    // For normal AI chat
    @PostMapping("/ask")
    public AiResponse ask(@RequestBody Map<String, String> body) {
        String prompt = body.get("prompt");
        return aiService.getAiReply(prompt);
    }

    // For search
    @PostMapping("/search")
    public AiResponse search(@RequestBody Map<String, String> body) {
        String prompt = body.get("prompt");
        return aiService.getSearchReply(prompt);
    }

    @GetMapping("/listchat")
    public List<aichats> listchat() {
        System.out.println(aiService.getAllHistory());
        return aiService.getAllHistory();
    }


}

