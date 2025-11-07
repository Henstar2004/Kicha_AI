package controller;

import Mainpack.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
public class aicontroller  {
    @Autowired
    private AiService aiService;

    @GetMapping("/ask")
    public AiResponse ask(@RequestParam String question) {
        return aiService.getAiReply(question);
    }
}