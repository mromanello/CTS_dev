EXPORTED_SYMBOLS = ["ctwork"];

function ctwork(node) {
    if (node) {
        Microformats.parser.newMicroformat(this, node, "ctwork");
    }
}

ctwork.prototype.toString = function () {
    var work_title = this.title;
    return work_title += " (" + this.abbr + ")";
}

var ctwork_definition = {
    mfVersion: 0.8,
    description: "Canonical Text Work(s)",
    mfObject: ctwork,
    className: "ctwork",
    properties: {
        "projid" : {
        },
        "title" : {
        },
         "abbr" : {
            virtual: true,
            virtualGetter: function (mfnode) {
                var abbr = Microformats.getElementsByClassName(mfnode, "title");
                return abbr[0].textContent;
            }
        }
    }
};

Microformats.add("ctwork", ctwork_definition);

var delicious_search_related_tags = {
    description: "Find pertinent bookmarks on del.icio.us",
    shortDescription: "del.icio.us",
    icon: "http://del.icio.us/favicon.ico",
    scope: {
        semantic: {
            "ctwork" : "projid"
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