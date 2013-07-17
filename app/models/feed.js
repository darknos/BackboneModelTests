exports.definition = {
	config: {
		columns: {
		    "id":"INTEGER PRIMARY KEY",
		    "title": "text",
		    "text_short": "text",
		    "text_full": "text",
		    "date_pub": "text",
		    "article_image": "text",
		},
		indexes : [
		  'date_pub'   
		],
        "URL": "http://edipresse.ua/woodwing/api/access_key/5b0f362882ba1a9e7f71a85ace239aa6/source/viva/task/articles/page/1/limit/1000",
        URLTransform: function(url, params) {
            return url.replace(/%1/, params.page).replace(/%2/, params.limit);
            return url;
        },
        "debug": 0, //debug mode enabled
        "useStrictValidation":0, // validates each item if all columns are present
        "parentNode" : "articles",
        "adapter" : {
            "type" : "sqlrest",
            "collection_name" : "feed",
            "idAttribute" : "id",
            //optimise the amount of data transfer from remote server to app
            //"lastModifiedColumn": "modified"
        },

        //optional
        "headers": { //your custom headers
//            "Accept": "application/vnd.stackmob+json; version=0",
//            "X-StackMob-API-Key": "your-stackmob-key"
        },		
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
            transform : function() {
                Ti.API.info(this);
                var o = this.toJSON();
                o.title1 = "!!!!!!!!" + title;
                return o;
            }
			// extended functions and properties go here
		});
        Ti.API.info('CALLED EXTEND MODEL!!!!')
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
			next: function(m) {
			    
			}
		});
        		
		return Collection;
	}
}

