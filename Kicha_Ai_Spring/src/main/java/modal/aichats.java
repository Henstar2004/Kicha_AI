package modal;

import jakarta.persistence.*;


@Entity
@Table(name = "aichats")
public class aichats {

     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String discription;

    // getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPrompt() { return name; }
    public void setPrompt(String name) { this.name = name; }

    public String getReply() { return discription; }
    public void setReply( String discription) { this.discription = discription; }
    
}
