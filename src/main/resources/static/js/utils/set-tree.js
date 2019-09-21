$(function () {
    $.ajax({
        url: "/test/treeData",
        type: "GET",
        data: {},
        dataType: "json",
        success: function (data) {
            var treeData = data.list;
            $('#divGroup').treeview({
                color: "#428bca",
                enableLinks: false, //是否使用超链接
                data: treeData,
                onNodeSelected: function (event, node) {
                    //存treeId，pid
                    $("#treeId").val(String(node.treeId));
                    $("#pid").val(String(node.pid));
                    //菜单下的书签id集合
                    var bookIds = String(node.bookIds);
                    if (bookIds != "") {
                        //清空
                        $('#bookmarksBody').html("");
                        var bookIdArr = bookIds.split(",");
                        bookIdArr.forEach(function (value, index, array) {
                            getBookMark(value);
                        });
                    }
                }
            });
        }
    });
});

//点击书签修改
$("ul#bookmarksBody").on("click", "li", function () {
    var bkId = $(this).find('div').eq(0).text();
    var bkUrl = $(this).find('div').eq(1).text();
    var bkContent = $(this).find('div').eq(2).text();
    $("#bkModalLabel").text("修改书签");
    $('#bkContent').val(bkContent);
    $('#bkUrl').val(bkUrl);
    $('#bkId').val(bkId);
    $('#bkModal').modal();
});

//通过书签id获取详情
function getBookMark(id) {
    $.ajax({
        url: "/test/bookmark/" + id,
        type: "GET",
        data: {},
        async: false,
        dataType: "json",
        success: function (data) {
            var content = data.content;
            var url = data.url;
            $('#bookmarksBody').append('<li class="list-group-item"><div class="hidden">' + id + '</div><div class="hidden">' + url + '</div><div>' + content + '</div></li>');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            alert("异常...")
        }
    });
}

function saveBookMark() {
    $.ajax({
        url: "/test/bookmark",
        type: "POST",
        data: {
            "content" : String($('#bkContent').val()),
            "url" : String($('#bkUrl').val()),
            "id" : String($('#bkId').val())
        },
        async: false,
        dataType: "json",
        success: function (data) {
            var code = data.code;
            if (code == 0) {
                console.log(data.list);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
            alert("异常...")
        }
    });
}

$("#btnInsert").click(function () {
    $("#bkModalLabel").text("新增书签");
    var treeId = $("#treeId").val();
    var pid = $("#pid").val();
    if (treeId == "") {
        alert("请先点击左侧树菜单,作为新书签上级")
    } else {
        console.log(treeId +","+ pid);
        $('#bkModal').modal();
    }
});