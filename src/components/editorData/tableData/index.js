/*
 * @Author: your name
 * @Date: 2020-01-07 10:43:30
 * @LastEditTime : 2020-01-07 10:44:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hx-editor\src\components\editorData\tableData\index.js
 */


function getTableData(){
    const modulesFiles = require.context('./modules', false, /\.js$/);
    const tableModules = modulesFiles.keys().reduce((tableModules, modulePath) => {
        // set './header.js' => 'header'
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
        const value = modulesFiles(modulePath);
        tableModules[moduleName] = value.getHtmlData();
        return tableModules;
    }, {});
    console.log(tableModules);
    var tableModulesArray = [];    
    for(var item in tableModules){
        var tableObj = {};
        tableObj = tableModules[item];
        tableModulesArray.push(tableObj);
    }
    return tableModulesArray;
}
export {getTableData};