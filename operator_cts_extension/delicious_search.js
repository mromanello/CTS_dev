var delicious_search_related_tags = {
    description: "Find pertinent bookmarks on del.icio.us",
    shortDescription: "del.icio.us",
    icon: "http://del.icio.us/favicon.ico",
    scope: {
        semantic: {
            "ctauthor" : "projid"
        }
    },
    
    doAction: function (semanticObject, semanticObjectType) {
        if (semanticObject.projid) {
            return "http://del.icio.us/tag/" + encodeURIComponent(semanticObject.projid);
        }
        return null;
    }
};

SemanticActions.add("delicious_search_tags", delicious_search_related_tags);≈
