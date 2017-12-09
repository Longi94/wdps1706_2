package nl.vu.wdps1706.webapp.repository;

import nl.vu.wdps1706.webapp.entity.Text;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author lngtr
 * @since 2017-12-09
 */
public interface TextRepository extends JpaRepository<Text, String> {
}
