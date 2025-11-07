package repositry;
import org.springframework.data.jpa.repository.JpaRepository;

import modal.*;

public interface airepositry extends JpaRepository<aichats, Long> {
    
}
