package Kicha_Ai_Spring.modal;

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

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDiscription() { return discription; }
    public void setDiscription( String discription) { this.discription = discription; }
    
}
