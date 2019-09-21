package org.cth.blog.utils;

import org.cth.blog.model.Tree;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author cth
 * @date 2019/09/21
 */
public class MenuTree {
    private List<Tree> menuList;
    private static final String BASE_PID = "0";

    public MenuTree(List<Tree> menuList) {
        this.menuList = menuList;
    }

    /** 获取根节点 */
    private List<Tree> getRootNode() {
        List<Tree> rootMenuList = new ArrayList<>();
        for (Tree menuNode : menuList) {
            if (menuNode.getPid().equals(BASE_PID)) {
                rootMenuList.add(menuNode);
            }
        }
        return rootMenuList;
    }

    /** 建立子树形结构 */
    private Tree createChildTree(Tree pNode) {
        List<Tree> childMenus = new ArrayList<>();
        for (Tree menuNode : menuList) {
            if (menuNode.getPid().equals(pNode.getTreeId())) {
                childMenus.add(createChildTree(menuNode));
            }
        }
        pNode.setNodes(childMenus);
        return pNode;
    }

    /** 建立完整树形结构 */
    public List<Tree> createTree() {
        List<Tree> treeMenus = new ArrayList<>();
        for (Tree menuNode : getRootNode()) {
            menuNode = createChildTree(menuNode);
            treeMenus.add(menuNode);
        }
        return treeMenus;
    }
}
