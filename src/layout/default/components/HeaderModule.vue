<template>
    <div class="header">
        <div class="logo"><router-link to="/"><span>红星小样式编辑器</span></router-link></div>
        <div class="sidebar-content">
          <el-menu class="el-menu-panel"
          :collapse="isCollapse"
          background-color="#252a2f"
          text-color="#fff"
          active-text-color="#fff"
          >
            <el-menu-item v-for="(item,index) in navList" v-bind:class="item.isOn?'is-active':''" v-bind:tabindex="index" v-bind:key="index" v-on:click="changeEditorType(item.type)"><i v-bind:class="item.icon"></i><span slot="title">{{item.name}}</span></el-menu-item>
          </el-menu>
        </div>
        <!-- <toggle-sidebar-menu v-bind:is-collapse="sidebar.opened" v-on:toggleClick="toggleSidebar" /> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ToggleSidebarMenu from '@/components/ToggleSidebarMenu';
export default {
    name:"HeaderModule",
    components:{
        ToggleSidebarMenu,
    },
    data:function(){
        return{
        navList:[
            {type:'title',name:'标题',icon:'el-icon-s-tools',isOn:true},
            {type:'article',name:'正文',icon:'el-icon-document',isOn:false},
            {type:'image',name:'图文',icon:'el-icon-picture',isOn:false},
            {type:'button',name:'按钮',icon:'el-icon-open',isOn:false},
            {type:'table',name:'表格',icon:'el-icon-s-grid',isOn:false},
        ]
        }
    },
    beforeCreate:function(){
        this.$nextTick(function () {
        var types = this.type;
        this.navList.forEach(function(item,index){
            if(item.type == types){
            item.isOn = true;
            }else{
            item.isOn = false;
            }
        });
        console.log("侧边栏的type:" + this.type);
        })
    },
    computed:{
        ...mapGetters([
            'sidebar',
            'editorType'
        ]),
        isCollapse() {
            return !this.sidebar.opened;
        },
        type:function(){
            return this.editorType;
        },
    },
    methods:{
        toggleSidebar() {
            this.$store.dispatch('header/toggleSideBar');
        },
        changeEditorType(value){
            var typeValue = value;
            this.navList.forEach(function(item,index){
                if(item.type== typeValue){
                    item.isOn = true;
                }else{
                    item.isOn = false;
                }
            });
            this.$store.dispatch('editorType/changeEditorType',typeValue);
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width:100%;
    height:64px;
    background: #252a2f;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    position: relative;
    z-index: 1;
    .logo{
        display: block;
        float:left;
        height:64px;
        a{
            padding:16px 20px;
            display: block;
            height:100%;
            overflow: hidden;
            position: relative;
            font-size:0;
            span{
                display: inline-block;
                height:100%;
                line-height: 32px;
                overflow: hidden;
                vertical-align: middle;
                font-size:20px;
                color: $white;
            }
        }
    }
    .sidebar-content{
        height: 64px;
        float:left;
        transition: transform .25s ease-out;
        position: relative;
    }
    .el-menu-panel{
        border-right:none!important;
        transition: transform .25s ease-out;
        height: 64px;
        float:left;
    }
    .el-menu-item{
        float:left;
        height: 64px;
        line-height: 64px;
    }
    .el-menu-item.is-active{
        color: rgb(255, 255, 255)!important; background-color: rgb(30, 34, 38)!important;
    }
}
</style>


