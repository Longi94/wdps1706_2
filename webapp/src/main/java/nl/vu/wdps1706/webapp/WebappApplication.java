package nl.vu.wdps1706.webapp;

import nl.vu.wdps1706.webapp.entity.Text;
import nl.vu.wdps1706.webapp.repository.TextRepository;
import org.apache.commons.text.StringEscapeUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Stream;

@SpringBootApplication
public class WebappApplication implements CommandLineRunner {

    private static final Logger logger = LogManager.getLogger(WebappApplication.class);

    private final TextRepository textRepository;

    @Autowired
    public WebappApplication(TextRepository textRepository) {
        this.textRepository = textRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(WebappApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        if (args.length > 0) {
            textRepository.deleteAll();

            logger.info("loading texts into database...");
            AtomicInteger count = new AtomicInteger();

            try (Stream<String> stream = Files.lines(Paths.get(args[0]))) {
                stream.forEach(line -> {
                    String[] split = line.split(",", 2);

                    Text text = new Text();
                    text.setId(split[0]);
                    text.setText(StringEscapeUtils.unescapeCsv(split[1]));

                    textRepository.save(text);
                    count.getAndIncrement();
                });
            }


            logger.info("loaded " + count.get() + " texts into database...");
        }
    }
}
