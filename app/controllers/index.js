Alloy.Collections.feed.fetch({
    localOnly: false,
    sql: {
        offset: 0,
        limit: 1000,
        orderBy: "date_pub desc",
    },
    urlparams : {
        offset:0,
        limit:1000,
        category_id: 44,
    },
    success: function(data) {
        Ti.API.timestamp('GOT DATA');
    }
    
});
$.index.open();




function rowClick(e) {
    var model = Alloy.Collections.feed.get(e.row.article_id);
    if (!$.detailController) {
        $.detailController = Alloy.createController("detail", {"$model": model});
    } else {
        $.detailController.updateBindings(model);
    }
    $.nav.open($.detailController.getView());
}