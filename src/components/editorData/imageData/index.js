

function getImageData(){
    const modulesFiles = require.context('./modules', false, /\.js$/);
    const imageModules = modulesFiles.keys().reduce((imageModules, modulePath) => {
        // set './header.js' => 'header'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
        const value = modulesFiles(modulePath);
        imageModules[moduleName] = value.getHtmlData();
        return imageModules;
    }, {});
    console.log(imageModules);
    var imageModulesArray = [];    
    for(var item in imageModules){
        var imageObj = {};
        imageObj = imageModules[item];
        imageModulesArray.push(imageObj);
    }
    return imageModulesArray;
}
export {getImageData};