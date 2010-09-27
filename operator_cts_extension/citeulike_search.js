var citeulike_search_related_articles = {
    description: "Find related articles on CIteULike",
    shortDescription: "CiteULike",
    scope: {
        semantic: {
            "ctauthor" : "projid"
        }
    },
    doAction: function (semanticObject, semanticObjectType) {
                var projid = semanticObject.projid;
                
                var CULize = function(urn){
                    var tmp = urn;
                    var dash = /\ - /;
                    tmp = tmp.replace(dash, '--');
                    var dot = /\./g;
                    tmp = tmp.replace(dot, '-');
                    return tmp.replace(/:/g, '-');
            }
            
            
            //return "http://www.citeulike.org/search/all?q=" + encodeURIComponent(CULize(projid));
        
        return "http://www.citeulike.org/search/all?q=" + CULize(projid);
    }
};

SemanticActions.add("citeulike_search_articles ", citeulike_search_related_articles );