exports.updateBindings = function(model) {
    $model = model;
    _.each(this.__views, function(n,i) {
        if (n.dataBind) {
            if (n.bindAttr) {
                n[n.bindAttr] = $model.get(n.dataBind);
            }
        }
    });
}

//$.text.text = fields.get("text");

$model = _.extend({}, $model, {
    transform : function() {
        Ti.API.info(this);
        var o = this.toJSON();
        o.title = "!!!!!!!!" + title;
        return o;
    }
});

function next() {
    var feeds = Alloy.Collections.instance("feed");
    var ind = feeds.indexOf($model);
    $.updateBindings(feeds.at(ind+1));  
}
