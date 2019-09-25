

function getButtonData(){
    const modulesFiles = require.context('./modules', false, /\.js$/);
    const buttonModules = modulesFiles.keys().reduce((buttonModules, modulePath) => {
        // set './header.js' => 'header'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
        const value = modulesFiles(modulePath);
        buttonModules[moduleName] = value.getHtmlData();
        return buttonModules;
    }, {});
    console.log(buttonModules);
    var buttonModulesArray = [];    
    for(var item in buttonModules){
        var buttonObj = {};
        buttonObj = buttonModules[item];
        buttonModulesArray.push(buttonObj);
    }
    return buttonModulesArray;
}
export {getButtonData};