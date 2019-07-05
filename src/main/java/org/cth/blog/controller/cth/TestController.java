package org.cth.blog.controller.cth;

import org.cth.blog.controller.BaseController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test")
public class TestController extends BaseController {

    @GetMapping("blog")
    public String testGet() {
        log.info(">>>blog");
        return "success blog";
    }
}
