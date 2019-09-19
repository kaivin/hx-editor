<template>
    <div class="sidebar-menu">
        <span v-bind:class="isCollapse?'el-icon-s-fold':'el-icon-s-unfold'" v-on:click="toggleClick"></span>
    </div>
</template>

<script>
export default {
    name: 'ToggleSidebarMenu',
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleClick() {
            this.$emit('toggleClick');
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar-menu{
    width:64px;
    height:64px;
    float:left;
    span{
        display: block;
        width:100%;
        height:100%;
        text-align: center;
        line-height: 64px;
        background: #fff;
        font-size:28px;
        cursor: pointer;
        transition: background .3s;
        &:hover{
            background: rgba(0,0,0,.025);
        }
    }
}
</style>
