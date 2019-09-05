$(function(){
    var groupTreeData = '[\n' +
        '    {\n' +
        '        "groupDesc":"移动门户描述",\n' +
        '        "text":"移动门户",\n' +
        '        "groupType":1,\n' +
        '        "href":"#7CF98E8FE9870991E0530100007F9288",\n' +
        '        "parentSeq":"0",\n' +
        '        "seq":"7CF98E8FE9870991E0530100007F9288",\n' +
        '        "nodes":[\n' +
        '            {\n' +
        '                "groupDesc":"文章收藏描述",\n' +
        '                "text":"文章收藏",\n' +
        '                "groupType":1,\n' +
        '                "href":"#7CF98E8FE9880991E0530100007F9288",\n' +
        '                "parentSeq":"7CF98E8FE9870991E0530100007F9288",\n' +
        '                "seq":"7CF98E8FE9880991E0530100007F9288",\n' +
        '                "nodes":[\n' +
        '\n' +
        '                ]\n' +
        '            }\n' +
        '        ]\n' +
        '    },\n' +
        '    {\n' +
        '        "groupDesc":"测试",\n' +
        '        "text":"网上申办",\n' +
        '        "groupType":1,\n' +
        '        "href":"#7CF946FFABE8083FE0530100007FF726",\n' +
        '        "parentSeq":"0",\n' +
        '        "seq":"7CF946FFABE8083FE0530100007FF726",\n' +
        '        "nodes":[\n' +
        '\n' +
        '        ]\n' +
        '    }\n' +
        ']';
    $('#div_group').treeview({
        color : "#428bca",
        enableLinks: true,
        data : groupTreeData,
        onNodeSelected : function(event, node) {
            document.getElementById(node.seq).scrollIntoView();
        },
        onNodeUnselected:function (event, node) {
            // var anh = $('#top').offset().top;
            // debugger
            // $("#content").stop().animate({scrollTop:anh},400);
        }
    });
    $("ul#test").on("click","li",function(){      //只需要找到你点击的是哪个ul里面的就行
        alert($(this).text());
    });
});
