package Kicha_Ai_Spring.Mainpack.normalresponse;

public class Response<T> {

    private boolean res;
    private String message;
    private T data;

    public Response() {
    }

    public Response(boolean res, String message, T data) {
        this.res = res;
        this.message = message;
        this.data = data;
    }

    public boolean isRes() {
        return res;
    }

    public void setRes(boolean res) {
        this.res = res;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
