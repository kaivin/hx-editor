

function getVideoData(){
    const modulesFiles = require.context('./modules', false, /\.js$/);
    const videoModules = modulesFiles.keys().reduce((videoModules, modulePath) => {
        // set './header.js' => 'header'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
        const value = modulesFiles(modulePath);
        videoModules[moduleName] = value.getHtmlData();
        return videoModules;
    }, {});
    console.log(videoModules);
    var videoModulesArray = [];
    for(var item in videoModules){
        var videoObj = {};
        videoObj = videoModules[item];
        videoModulesArray.push(videoObj);
    }
    return videoModulesArray;
}
export {getVideoData};