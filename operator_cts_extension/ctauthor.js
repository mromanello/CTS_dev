    EXPORTED_SYMBOLS = ["ctauthor"];


function ctauthor(node) {
    if (node) {
        Microformats.parser.newMicroformat(this, node, "ctauthor");
    }
}

ctauthor.prototype.toString = function () {
    var author_name = this.name;
    return author_name += " (" + this.abbr + ")";
}

var ctauthor_definition = {
    mfVersion: 0.8,
    description: "Canonical Text Author(s)",
    mfObject: ctauthor,
    className: "ctauthor",
    properties: {
        "projid" : {
        },
        "name" : {
        },
        "abbr" : {
            virtual: true,
            virtualGetter: function (mfnode) {
                var abbr = Microformats.getElementsByClassName(mfnode, "name");
                return abbr[0].textContent;
            }
        }
    }
};

Microformats.add("ctauthor", ctauthor_definition);

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

SemanticActions.add("delicious_search_tags", delicious_search_related_tags);