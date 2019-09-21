package org.cth.blog.controller.cth;

import org.cth.blog.controller.BaseController;
import org.cth.blog.model.Tree;
import org.cth.blog.utils.MenuTree;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author cth
 * @date 2019/09/21
 */
@RestController
@RequestMapping("test")
public class TestController extends BaseController {

    @GetMapping("blog")
    public String testGet() {
        log.info(">>>blog");
        return "success blog";
    }

    @GetMapping("bookmark/{id}")
    public Map<String, String> testGet(@PathVariable("id") String id) {
        System.out.println("获取数据...");
        Map<String, String> result = new HashMap<>();
        result.put("code", "0");
        result.put("content", "书签:" + id);
        result.put("url", "url:" + id);
        return result;
    }

    @GetMapping("treeData")
    public Map<String, Object> getTreeData() {
        List<Tree> menuList = new ArrayList<>();
        menuList.add(new Tree("Z001", "0", "菜单1", ""));
        menuList.add(new Tree("Z002", "0", "菜单2", ""));
        menuList.add(new Tree("Z003", "0", "菜单3", ""));
        menuList.add(new Tree("Z004", "Z001", "子菜单1", "1,2,3"));
        menuList.add(new Tree("Z005", "Z002", "子菜单2", ""));
        menuList.add(new Tree("Z006", "Z003", "子菜单3", "4,5,6"));
        menuList.add(new Tree("Z007", "Z005", "子菜单4", "7,8,9"));
        MenuTree menu = new MenuTree(menuList);
        menuList = menu.createTree();
        Map<String, Object> result = new HashMap<>();
        result.put("code", "0");
        result.put("list", menuList);
        return result;
    }

    @PostMapping("bookmark")
    public Map<String, Object> saveBookMark(String id, String url, String content) {
        String list = "返回:" + id + url + content;
        Map<String, Object> result = new HashMap<>();
        result.put("code", "0");
        result.put("list", list);
        return result;
    }
}
