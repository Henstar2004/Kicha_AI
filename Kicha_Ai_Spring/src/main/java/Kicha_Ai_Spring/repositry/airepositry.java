package Kicha_Ai_Spring.repositry;
import Kicha_Ai_Spring.modal.aichats;
import org.springframework.data.jpa.repository.JpaRepository;

public interface airepositry extends JpaRepository<aichats, Long> {
    
}
