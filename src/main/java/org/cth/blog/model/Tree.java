package org.cth.blog.model;

import lombok.Data;

import java.util.List;

/**
 *
 * @author cth
 * @date 2019/09/21
 */
@Data
public class Tree {
    /** 树id */
    private String treeId;
    /** 父id */
    private String pid;
    /** 名称 */
    private String text;
    /** 书签id集合，逗号隔开 */
    private String bookIds;
    /** 子节点 */
    private List<Tree> nodes;

    public Tree(){}

    public Tree(String treeId, String pid, String text, String bookIds){
        this.treeId = treeId;
        this.pid = pid;
        this.text = text;
        this.bookIds = bookIds;
    }
}
