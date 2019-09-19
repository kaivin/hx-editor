

function getImageData(){
    const modulesFiles = require.context('./modules', false, /\.js$/);
    const imageModules = modulesFiles.keys().reduce((imageModules, modulePath) => {
        // set './header.js' => 'header'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
        const value = modulesFiles(modulePath);
        imageModules[moduleName] = value.title();
        return imageModules;
    }, {});
    console.log(imageModules);
    var imageModulesArray = [];    
    for(var item in imageModules){
        var titleObj = {};
        titleObj = imageModules[item];
        imageModulesArray.push(titleObj);
    }
    return imageModulesArray;
}
export {getImageData};