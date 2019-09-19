<template>
    <div class="page-root">
      <link rel="stylesheet" v-bind:href="styleUrl" />
      <div class="btn-panel" v-bind:class="tType=='web'?'is-pc':''"><span v-bind:class="tType=='web'?'on':''" v-on:click="changeTerminalType('web')">PC端</span><span v-bind:class="tType=='wap'?'on':''" v-on:click="changeTerminalType('wap')">移动端</span></div>
      <div class="style-list" v-bind:class="tType=='web'?'is-pc':''">
        <el-scrollbar style="height:100%;">
          <div class="item-list">
              <div class="item-wrap" v-for="(item,index) in currentData" v-bind:key="index">
                <div class="item-content" v-html="item.htmlString"></div>
                <div class="edit-panel"><span v-clipboard:copy="item.htmlString" v-clipboard:success="onCopy" v-clipboard:error="onError">复制代码</span></div>
              </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
import {getTitleData} from '@/components/editorData/titleData/index.js';
import {getArticleData} from '@/components/editorData/articleData/index.js';
import {getImageData} from '@/components/editorData/imageData/index.js';
export default {
  name: 'editorModelPage',
  data: function () {
    return{
      styleUrl:'@/styles/pc.scss',
      titleData:[],
      articleData:[],
      imageData:[],
    }
  },
  beforeCreate:function(){
    var modulesTitleData = getTitleData();
    var modulesArticleData = getArticleData();
    var modulesImageData = getImageData();
    this.$nextTick(function () {
      this.titleData = modulesTitleData;
      this.articleData = modulesArticleData;
      this.imageData = modulesImageData;
    });
  },
  computed:{
      ...mapGetters([
          'editorType',
          'terminalType'
      ]),
      eType:function(){
        return this.editorType;
      },
      tType:function(){
        return this.terminalType;
      },
      currentData:function(){
        var eType = this.editorType;
        var tType = this.terminalType;
        if(eType=='title'){
          return this.getCurrentData(eType,tType,this.titleData);
        }else if(eType=='article'){
          return this.getCurrentData(eType,tType,this.articleData);
        }else{
          return this.getCurrentData(eType,tType,this.imageData);
        }
      }
  },
   methods: {
    onCopy: function (e) {
      this.$message({
          message: '恭喜你，复制成功！',
          type: 'success'
        });
    },
    onError: function (e) {
      this.$message.error('很遗憾，复制失败!');
    },
    changeTerminalType(value){
      var typeValue = value;
      this.$store.dispatch('editorType/changeTerminalType',typeValue);
    },
    getCurrentData:function(a,b,c){
      var eType = a;
      var tType = b;
      var currentAllData = c;
      var currentData = [];
      currentAllData.forEach(function(item,index){
        if(item.type == tType||item.type==''){
          currentData.push(item);
        }
      });
      return currentData;
      console.log(currentData);
    }
  }
}
</script>

<style lang="scss">
.page-root{
    padding-top: 60px;
}
.style-list{
  width:750px;
  margin: 0 auto;
  height:100%;
  overflow: hidden;
  background: #fff;
}
.style-list.is-pc{
  width:1024px;
}
.btn-panel.is-pc{
  width:1024px;
  margin-left: -512px;
}
.btn-panel{
  width: 750px;
  margin: 0 auto;
  height:50px;
  position: absolute;
  left:50%;
  top: 0;
  margin-left: -375px;
  span{
    display: block;
    height: 50px;
    line-height: 48px;
    width:50%;
    float:left;
    border-radius:0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    overflow: hidden;
    background: #fff;
    text-align: center;
    color: #606266;
    font-size: 14px;
    border: 1px solid #dcdfe6;
    border-right:0;
    cursor: pointer;
  }
  span.on{
    border:1px solid #409eff;
    background: #409eff;
    color: #fff;
  }
  span+span{
    border: 1px solid #dcdfe6;
    border-left:0;
    border-radius:0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}

.el-scrollbar__wrap{
  overflow-y: scroll!important;
  overflow-x: hidden!important;
}
.item-list{
  width:100%;
  overflow: hidden;
  .item-wrap{
    width:100%;
    overflow: hidden;
    position: relative;
    &:hover{
      .edit-panel{
        display: block;
      }
    }
    .item-content{
      width:100%;
      overflow: hidden;
    }
    .edit-panel{
      position: absolute;
      width:100%;
      height: 24px;
      line-height: 0;
      z-index: 10;
      bottom:0;
      right:0;
      text-align: right;
      display: none;
      span{
        display: inline-block;
        height: 24px;
        vertical-align: middle;
        line-height: 24px;
        padding: 0 10px;
        background: rgba(0,0,0,.5);
        font-size: 14px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .item-wrap+.item-wrap{
    border-top: 10px solid #f5f5f5;
  }
}
</style>
