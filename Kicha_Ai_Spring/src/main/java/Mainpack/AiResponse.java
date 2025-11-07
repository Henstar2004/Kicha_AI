 package Mainpack;
 class searchResponse {


  
    private boolean success;
    private String discrption;
    private String name;

    public searchResponse(boolean success,String name, String discrption) {
        this.success = success;
        this.name = name;
        this.discrption = discrption;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getname() {
        return name;
    }
    public String getdiscrption() {
        return discrption;
    }

    
}



public class AiResponse {
    private boolean success;
    private String message;
    private String prompt;
    private String reply;

    public AiResponse() {}

    public AiResponse(boolean success, String message, String prompt, String reply) {
        this.success = success;
        this.message = message;
        this.prompt = prompt;
        this.reply = reply;
    }

    // Getters and Setters
    public boolean isSuccess() {
        return success;
    }
    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

    public String getPrompt() {
        return prompt;
    }
    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }

    public String getReply() {
        return reply;
    }
    public void setReply(String reply) {
        this.reply = reply;
    }
}
