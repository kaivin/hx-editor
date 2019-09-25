

function getTitleData(){
    const modulesFiles = require.context('./modules', false, /\.js$/);
    const titleModules = modulesFiles.keys().reduce((titleModules, modulePath) => {
        // set './header.js' => 'header'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
        const value = modulesFiles(modulePath);
        titleModules[moduleName] = value.getHtmlData();
        return titleModules;
    }, {});
    console.log(titleModules);
    var titleModulesArray = [];    
    for(var item in titleModules){
        var titleObj = {};
        titleObj = titleModules[item];
        titleModulesArray.push(titleObj);
    }
    return titleModulesArray;
}
export {getTitleData};