const getters = {
    sidebar: state => state.header.sidebar,
    editorType: state => state.editorType.editorType,
    terminalType: state => state.editorType.terminalType
    // visitedViews: state => state.tagsView.visitedViews,
    // cachedViews: state => state.tagsView.cachedViews,
};
export default getters;