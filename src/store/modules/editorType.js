import Cookies from 'js-cookie';

const state = {
    editorType: Cookies.get('editorType') ? Cookies.get('editorType') : 'title',
    terminalType: Cookies.get('terminalType') ? Cookies.get('terminalType') : 'web',
};
  
  
const mutations = {
    changeEditorType(state,editorType){
        state.editorType = editorType;
        Cookies.set('editorType', editorType);
        console.log("调用vuex后的type:" + editorType);
    },
    changeTerminalType(state,terminalType){
        state.terminalType = terminalType;
        Cookies.set('terminalType', terminalType);
        console.log("调用vuex后的type:" + terminalType);
    }
};

const actions = {
    changeEditorType(ctx,editorType) {
        ctx.commit('changeEditorType',editorType);
    },
    changeTerminalType(ctx,terminalType){
        ctx.commit('changeTerminalType',terminalType);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};