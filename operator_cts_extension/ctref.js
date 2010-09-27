EXPORTED_SYMBOLS = [ "ctref" ];

function ctref(node) {
    if (node) {
        Microformats.parser.newMicroformat(this, node, "ctref");
    }
}

ctref.prototype.toString = function () {
    var name = "";

if (this .ctauthor) {
    name += this .ctauthor.name;
    name += ",";
}

if (this .ctwork) {
name += " ";
name += this .ctwork.title;
}

if (this .range_abbr) {
name += " ";
name += this .range_abbr;
}

if (this .edition) {
name += " (ed. ";
name += this .edition.description;
name += ")";
}

return name;
}

var ctref_definition = {
mfVersion: 0.8,
description: "Canonical Text Reference(s)",
mfObject: ctref,
className: "ctref",
properties: {
"ctauthor" : {
    datatype: "microformat",
    microformat: "ctauthor"
},

"ctwork" : {
    datatype: "microformat",
    microformat: "ctwork"
},

"edition" : {
    subproperties: {
        "projid" : {
        },
        "description" : {
        }
    }
},
"range" : {
},
"range_abbr" : {
    virtual : true,
    virtualGetter: function (mfnode) {
        var range = Microformats.getElementsByClassName(mfnode, "range");
        return range[0].textContent;
    }
}
}
};

Microformats.add("ctref", ctref_definition);