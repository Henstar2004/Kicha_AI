package Kicha_Ai_Spring.modal;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class user_login {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String kmail;
    private String password;
    private int status;


    public void setStatus(int status) {
        this.status = status;
    }
    public int getStatus() {
        return status;
    }

//    public void setId(int id) {
//        this.id = id;
//    }

    public void setKmail(String kmail) {
        this.kmail = kmail;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public String getKmail() {
        return kmail;
    }

    public String getPassword() {
        return password;
    }
}
