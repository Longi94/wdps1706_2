package nl.vu.wdps1706.webapp.controller;

import nl.vu.wdps1706.webapp.repository.TextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @author lngtr
 * @since 2017-12-09
 */
@Controller
public class RestApiController {

    private final TextRepository textRepository;

    @Autowired
    public RestApiController(TextRepository textRepository) {
        this.textRepository = textRepository;
    }

    @GetMapping("/text")
    public String getText(@RequestParam("id") String id) {
        return textRepository.findOne(id).getText();
    }
}
