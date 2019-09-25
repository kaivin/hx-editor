

function getArticleData(){
    const modulesFiles = require.context('./modules', false, /\.js$/);
    const articleModules = modulesFiles.keys().reduce((articleModules, modulePath) => {
        // set './header.js' => 'header'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
        const value = modulesFiles(modulePath);
        articleModules[moduleName] = value.getHtmlData();
        return articleModules;
    }, {});
    console.log(articleModules);
    var articleModulesArray = [];    
    for(var item in articleModules){
        var articleObj = {};
        articleObj = articleModules[item];
        articleModulesArray.push(articleObj);
    }
    return articleModulesArray;
}
export {getArticleData};