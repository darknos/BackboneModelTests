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
        "URL": "http://4girls.com.ua/api/index/?access_key=326afdb44edbb12e0c4bb6954adcf454&method=GetFeeds",
        "debug": 0, //debug mode enabled
        "useStrictValidation":0, // validates each item if all columns are present
        "parentNode" : "result",
        "adapter" : {
            "type" : "sqlrest",
            "collection_name" : "article",
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

