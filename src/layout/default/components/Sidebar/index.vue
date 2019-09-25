<template>
    <el-aside v-bind:class="!isCollapse?'':'hideSideBar'">
        <div class="logo"><router-link to="/"><span>红星编辑器</span></router-link></div>
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
    </el-aside>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Sidebar',
  data:function(){
    return{
      navList:[
        {type:'title',name:'标题',icon:'el-icon-s-tools',isOn:true},
        {type:'article',name:'正文',icon:'el-icon-document',isOn:false},
        {type:'image',name:'图文',icon:'el-icon-picture',isOn:false},
        {type:'button',name:'按钮',icon:'el-icon-open',isOn:false},
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
.hideSideBar.el-aside{
  width:64px!important;
  .logo{
    a{
      span{
        overflow: hidden;
        visibility: hidden;
      }
    }
  }
}
.el-aside{
  background: #252a2f;
  transition: width .25s ease-out;
  width:160px!important;
  .logo{
      width:100%;
      height:64px;
      a{
          padding:16px 20px;
          display: block;
          width:100%;
          height:100%;
          overflow: hidden;
          position: relative;
          font-size:0;
          span{
              display: inline-block;
              width:100%;
              height:100%;
              line-height: 32px;
              overflow: hidden;
              vertical-align: middle;
              font-size:24px;
              color: $white;
          }
      }
  }
}
.sidebar-content{
    height:calc(100% - 64px);
    overflow-y: auto;
    transition: transform .25s ease-out;
    position: relative;
    &::-webkit-scrollbar {
        width: 4px
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 4px
    }
    &:hover::-webkit-scrollbar-thumb {
        background: hsla(0,0%,53%,.4)
    }
    &:hover::-webkit-scrollbar-track {
        background: hsla(0,0%,53%,.1)
    }
}
 
  .el-menu-panel{
    border-right:none!important;
    transition: transform .25s ease-out;
    width:100%;
  }
  .el-menu-item.is-active{
    color: rgb(255, 255, 255)!important; background-color: rgb(30, 34, 38)!important;
  }
@keyframes rotateMove
{
  0%{
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
  }
  80%{
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
  100%{
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
}

@-webkit-keyframes rotateMove /*Safari and Chrome*/
{
  0%{
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
  }
  80%{
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
  100%{
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
  }
}

@keyframes opacityMove1
{
  0%{
    opacity: .4;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: .4;
  }
}

@-webkit-keyframes opacityMove1
{
    0%{
        opacity: .4;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: .4;
    }
}
@keyframes opacityMove2
{
  0%{
    opacity: .6;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: .6;
  }
}

@-webkit-keyframes opacityMove2
{
    0%{
        opacity: .6;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: .6;
    }
}
@keyframes opacityMove3
{
  0%{
    opacity: .8;
  }
  50%{
    opacity: .4;
  }
  100%{
    opacity: .8;
  }
}

@-webkit-keyframes opacityMove3
{
    0%{
        opacity: .8;
    }
    50%{
        opacity: .4;
    }
    100%{
        opacity: .8;
    }
}
@keyframes opacityMove4
{
  0%{
    opacity: 1;
  }
  50%{
    opacity: .4;
  }
  100%{
    opacity: 1;
  }
}

@-webkit-keyframes opacityMove4
{
    0%{
        opacity: 1;
    }
    50%{
        opacity: .4;
    }
    100%{
        opacity: 1;
    }
}
</style>
