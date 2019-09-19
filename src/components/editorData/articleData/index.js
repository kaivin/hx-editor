

function getArticleData(){
    const modulesFiles = require.context('./modules', false, /\.js$/);
    const articleModules = modulesFiles.keys().reduce((articleModules, modulePath) => {
        // set './header.js' => 'header'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
        const value = modulesFiles(modulePath);
        articleModules[moduleName] = value.title();
        return articleModules;
    }, {});
    console.log(articleModules);
    var articleModulesArray = [];    
    for(var item in articleModules){
        var titleObj = {};
        titleObj = articleModules[item];
        articleModulesArray.push(titleObj);
    }
    return articleModulesArray;
}
export {getArticleData};