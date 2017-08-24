var buildTheTree =  function (listObj) {
    var root = [];
    var theObj = {};
    for (i = 0; i < listObj.length; i++) { 
        if (!listObj[i].parent) root = listObj[i]; 
        theObj[listObj[i].uid] = listObj[i];
        listObj[i].children = [];
        roots.push(root); 
    }   
    for (i = 0; i < listObj.length; i++) {
        if (theObj[listObj[i].parent])
        theObj[listObj[i].parent].children.push(litObj[i]);
    }
    return root;
}

var getDepth = function (obj) {
    var depth = 0;
    if (obj.children) {
        obj.children.forEach(function (d) {
            var tmpDepth = getDepth(d)
            if (tmpDepth > depth) {
                depth = tmpDepth
            }
        })
    }
    return depth
}

var filterNodes = function(theTree){
    for (i = 0; i < theTree.length; i++) {
        var count = getDepth(theTree[i]); 
        if (count <= 3) finalList.push(theTree[i]);
    }
}

var finalList = [];
var roots = [];


var startTheApp = function(listObj) {
    var theTree = buildTheTree(listObj); 
    filterNodes(theTree); 

    for (i=0; i < finalList.length; i++ ) {
        console.log (finalList[i].category); 
    }
}

startTheApp(Large_list_of_nodes);






