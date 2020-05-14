<template>
    <div class="page-root">
      <div class="filter-panel" v-bind:class="isOpen?'is-open':'is-close'">
        <div class="arrow-panel" v-on:click="toggleFilterClick"><span></span></div>
        <el-scrollbar style="height:100%;">
          <!-- <div class="btn-panel" v-bind:class="tType=='web'?'is-pc':'is-wap'"><span v-bind:class="tType=='web'?'on':''" v-on:click="changeTerminalType('web')">PC端</span><span v-bind:class="tType=='wap'?'on':''" v-on:click="changeTerminalType('wap')">移动端</span></div> -->
          <div class="filter-wrap public-panel">
            <dl class="filter-item fst-panel">
              <dt>适用网站</dt>
              <dd><el-checkbox v-for="(item,index) in publicFilteringData.siteType" v-bind:key="index" v-model="item.isSelected" v-bind:label="item.name" border v-bind:size="size" v-on:change="filteringSiteTypeChange(item)"><span>{{item.name}}</span></el-checkbox></dd>
            </dl>
            <h2>筛选色系</h2>
            <dl class="filter-item">
              <dt>模式</dt>
              <dd>
                <el-radio v-for="(item,index) in publicFilteringData.filteringColorModeData" v-bind:key="index" v-model="currentFiltering.filteringColorMode" v-bind:label="item.key" border v-bind:size="size" v-on:change="filteringModeChange">{{item.name}}</el-radio>
              </dd>
              <dt>色谱</dt>
              <dd>
                  <el-checkbox v-for="(item,index) in publicFilteringData.colorData" v-bind:key="index" v-model="item.isSelected" v-bind:label="item.name" border v-bind:size="size" v-on:change="filteringColorChange"><span class="bg-color" v-bind:class="item.styleClass">{{item.name}}</span></el-checkbox>
              </dd>
            </dl>
            <dl class="filter-item">
              <dt>视觉特效</dt>
              <dd><el-radio v-for="(item,index) in publicFilteringData.filteringEffectData" v-bind:key="index" v-model="currentFiltering.effect" v-bind:label="item.key" border v-bind:size="size" v-on:change="filteringEffectChange">{{item.name}}</el-radio></dd>
            </dl>
          </div>
          <div class="filter-wrap title-panel" v-if="eType=='title'">
            <dl class="filter-item">
              <dt>对齐方式</dt>
              <dd><el-radio v-for="(item,index) in publicFilteringData.filteringAlignData" v-bind:key="index" v-model="currentFiltering.align" v-bind:label="item.key" border v-bind:size="size" v-on:change="filteringAlignChange">{{item.name}}</el-radio></dd>
            </dl>
            <dl class="filter-item">
              <dt>附加样式</dt>
              <dd><el-radio v-for="(item,index) in publicFilteringData.filteringStyleData" v-bind:key="index" v-model="currentFiltering.style" v-bind:label="item.key" border v-bind:size="size" v-on:change="filteringStyleChange">{{item.name}}</el-radio></dd>
            </dl>
          </div>
          <div class="filter-wrap article-panel" v-else-if="eType=='article'"></div>
          <div class="filter-wrap img-panel" v-else-if="eType=='image'"></div>
          <div class="filter-wrap button-panel" v-else-if="eType=='button'"></div>
          <div class="filter-wrap table-panel" v-else></div>
        </el-scrollbar>
      </div>
      <div class="style-wrapper" v-bind:class="isOpen?'is-open':'is-close'">
        <p v-bind:class="isSingle?'single-panel':''"><span v-if="tType!='wap'">web站点预览</span><span v-if="tType!='web'">wap站点预览</span></p>
        <div class="style-list">
          <div class="scroll-wrap">
            <div class="item-list" v-bind:class="isSingle?'single-panel':''">
              <div class="item-wrapper" v-for="(item,index) in currentData" v-bind:key="index">
                <div class="file-panel"><span>后台文件名：{{item.fileName}}</span></div>
                <div class="item-wrap is-pc" v-if="tType!='wap'">
                  <div class="item-content" v-html="item.htmlStringCopy"></div>
                </div>
                <div class="item-wrap is-wap" v-if="tType!='web'">
                  <div class="item-content" v-html="item.htmlStringCopy"></div>
                </div>
                <div class="edit-panel">
                  <span v-clipboard:copy="item.htmlString" v-clipboard:success="onCopy" v-clipboard:error="onError">复制代码</span>
                  <span v-clipboard:copy="item.styleWebCode" v-clipboard:success="onCopy" v-clipboard:error="onError" v-if="tType!='wap'">复制web样式</span>
                  <span v-clipboard:copy="item.styleWapCode" v-clipboard:success="onCopy" v-clipboard:error="onError" v-if="tType!='web'">复制wap样式</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {getTitleData} from '@/components/editorData/titleData/index.js';
import {getArticleData} from '@/components/editorData/articleData/index.js';
import {getImageData} from '@/components/editorData/imageData/index.js';
import {getButtonData} from '@/components/editorData/buttonData/index.js';
import {getTableData} from '@/components/editorData/tableData/index.js';
import {getVideoData} from '@/components/editorData/videoData/index.js';
export default {
  name: 'editorModelPage',
  data: function () {
    return{
      titleData:[],
      articleData:[],
      imageData:[],
      buttonData:[],
      tableData:[],
      videoData:[],
      size: 'small',
      isOpen: false,
      isSingle: false,
      publicFilteringData:{
        selectedSiteType:'',
        siteType:[
          {key:'web',name:'PC网站',isSelected:true},
          {key:'wap',name:'移动网站',isSelected:true}
        ],
        filteringColorModeData:[
          {key:"sum",name:'并集'},
          {key:"intersection",name:'交集'}
        ],
        colorData:[
          {isSelected:false,name:'红色',styleClass:'is-red'},
          {isSelected:false,name:'橙色',styleClass:'is-orange'},
          {isSelected:false,name:'蓝色',styleClass:'is-blue'},
          {isSelected:false,name:'绿色',styleClass:'is-green'},
          {isSelected:false,name:'棕色',styleClass:'is-brown'},
          {isSelected:false,name:'黄色',styleClass:'is-yellow'},
          {isSelected:false,name:'紫色',styleClass:'is-purple'},
          {isSelected:false,name:'粉色',styleClass:'is-pink'},
          {isSelected:false,name:'黑色',styleClass:'is-black'},
          {isSelected:false,name:'青色',styleClass:'is-cyan'},
          {isSelected:false,name:'灰色',styleClass:'is-gray'},
        ],
        filteringAlignData:[
          {key:'all',name:'全部'},
          {key:'left',name:'左对齐'},
          {key:'center',name:'居中对齐'},
          {key:'right',name:'右对齐'},
        ],
        filteringStyleData:[
          {key:'all',name:'全部'},
          {key:'icon',name:'图标'},
          {key:'number',name:'数字'},
          {key:'other',name:'其他'},
        ],
        filteringEffectData:[
          {key:'all',name:'全部'},
          {key:'dynamic',name:'动态'},
          {key:'static',name:'静态'},
        ],
      },
      currentFiltering:{
        filteringColorMode:'sum',
        color:[],
        effect:'all',
        align:'all',
        style:'all',
      }
    }
  },
  beforeCreate:function(){
    var modulesTitleData = getTitleData();
    var modulesArticleData = getArticleData();
    var modulesImageData = getImageData();
    var modulesButtonData = getButtonData();
    var modulesTableData = getTableData();
    var modulesVideoData = getVideoData();
    this.$nextTick(function () {
      this.titleData = modulesTitleData;
      this.articleData = modulesArticleData;
      this.imageData = modulesImageData;
      this.buttonData = modulesButtonData;
      this.tableData = modulesTableData;
      this.videoData = modulesVideoData;
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
        console.log(eType);
        var currentData = [];
        if(eType=='title'){
          currentData = this.getCurrentData(eType,tType,this.titleData);
        }else if(eType=='article'){
          currentData = this.getCurrentData(eType,tType,this.articleData);
        }else if(eType=='image'){
          currentData = this.getCurrentData(eType,tType,this.imageData);
        }else if(eType=='button'){
          currentData = this.getCurrentData(eType,tType,this.buttonData);
        }else if(eType=='table'){
          currentData = this.getCurrentData(eType,tType,this.tableData);
        }else{
          currentData = this.getCurrentData(eType,tType,this.videoData);
        }
        console.log(currentData,8888);
        if(currentData.length>0){
          currentData.forEach(function(item,index){
            var srcReg = /src=([\'\"]?([^\'\"]*)[\'\"]?)/ig;
            var allSrc = item.htmlString.match(srcReg);
            console.log(allSrc);
            item.htmlStringCopy = item.htmlString;
            if(allSrc&&allSrc.length>0){
              allSrc.forEach(function(items,indexs){
                var itemsUrl = items.split('"')[1];
                if(itemsUrl.indexOf('/images/insidestyle')!=-1){
                  var itemImgUrl = require('@/assets'+itemsUrl);
                  item.htmlStringCopy = item.htmlStringCopy.replace(items,'src='+itemImgUrl);
                }
              });
            }
          });
        }
        return currentData;
      }
  },
   methods: {
    // 代码复制成功提示
    onCopy: function (e) {
      this.$message({
          message: '恭喜你，复制成功！',
          type: 'success'
        });
    },
    // 代码复制失败提示
    onError: function (e) {
      this.$message.error('很遗憾，复制失败!');
    },
    // 搜索条件隐藏开启点击事件
    toggleFilterClick:function(){
      var $this = this;
      $this.isOpen = !$this.isOpen;
    },
    // pc和移动端切换事件
    changeTerminalType(value){
      var typeValue = value;
      this.$store.dispatch('editorType/changeTerminalType',typeValue);
    },
    // pc和移动端适用点击事件
    filteringSiteTypeChange:function(items){
      var $this = this;
      $this.publicFilteringData.selectedSiteType = '';
      if(items.key == 'web'&& !items.isSelected){
        $this.publicFilteringData.siteType.forEach(function(item,index){
          if(!item.isSelected&&item.key=='wap'){
            item.isSelected = true;
          }
        });
      }
      if(items.key == 'wap'&& !items.isSelected){
        $this.publicFilteringData.siteType.forEach(function(item,index){
          if(!item.isSelected&&item.key=='web'){
            item.isSelected = true;
          }
        });
      }
      $this.publicFilteringData.siteType.forEach(function(item,index){
        if(item.isSelected){
          $this.publicFilteringData.selectedSiteType += item.key;
        }
      });
      if($this.publicFilteringData.selectedSiteType == 'webwap'){
        $this.publicFilteringData.selectedSiteType = '';
      }
      if($this.publicFilteringData.selectedSiteType == ''){
        $this.isSingle = false;
      }else{
        $this.isSingle = true;
      }
      console.log($this.publicFilteringData.selectedSiteType);
      $this.$store.dispatch('editorType/changeTerminalType',$this.publicFilteringData.selectedSiteType);
    },
    // 获取当前筛选条件数据
    getCurrentData:function(a,b,c){
      var $this = this;
      var eType = a;
      var tType = b;
      var currentAllData = c;
      var currentData = [];
      if(eType == 'title'){
        if($this.currentFiltering.filteringColorMode == 'sum'){// 并集
          currentAllData.forEach(function(item,index){
            var colorArray = item.color.split(',');
            if(colorArray.length>0){ // 模块色值
              colorArray.forEach(function(item1,index1){
                if($this.currentFiltering.color.length>0){// 筛选色值
                  $this.currentFiltering.color.forEach(function(item2,index2){
                    if(item1==item2&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)&&($this.currentFiltering.align=='all'||$this.currentFiltering.align==item.align)&&($this.currentFiltering.style=='all'||$this.currentFiltering.style==item.style)){
                      currentData.push(item);
                    }
                  });
                }else{// 未选中任何色系
                  if((item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)&&($this.currentFiltering.align=='all'||$this.currentFiltering.align==item.align)&&($this.currentFiltering.style=='all'||$this.currentFiltering.style==item.style)){
                    currentData.push(item);
                  }
                }
              });
            }
          });
        }else{// 交集
          currentAllData.forEach(function(item,index){
            var colorArray = item.color.split(',');
            if($this.currentFiltering.color.length>0){// 筛选色值
              if($this.currentFiltering.color.length==1){ // 只筛选一个颜色
                if(colorArray.length>0){
                  colorArray.forEach(function(item1,index1){
                    if(item1==$this.currentFiltering.color[0]&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)&&($this.currentFiltering.align=='all'||$this.currentFiltering.align==item.align)&&($this.currentFiltering.style=='all'||$this.currentFiltering.style==item.style)){
                        currentData.push(item);
                      }
                  });
                }
              }else{// 多个筛选色值
                if($this.isContained(colorArray,$this.currentFiltering.color)&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)&&($this.currentFiltering.align=='all'||$this.currentFiltering.align==item.align)&&($this.currentFiltering.style=='all'||$this.currentFiltering.style==item.style)){
                  currentData.push(item);
                }
              }
            }else{// 未选中任何色系
              if((item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)&&($this.currentFiltering.align=='all'||$this.currentFiltering.align==item.align)&&($this.currentFiltering.style=='all'||$this.currentFiltering.style==item.style)){
                currentData.push(item);
              }
            }
          });
        }
      }else if(eType == 'article'){
        if($this.currentFiltering.filteringColorMode == 'sum'){// 并集
          currentAllData.forEach(function(item,index){
            var colorArray = item.color.split(',');
            if(colorArray.length>0){ // 模块色值
              colorArray.forEach(function(item1,index1){
                if($this.currentFiltering.color.length>0){// 筛选色值
                  $this.currentFiltering.color.forEach(function(item2,index2){
                    if(item1==item2&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                      currentData.push(item);
                    }
                  });
                }else{// 未选中任何色系
                  if((item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                    currentData.push(item);
                  }
                }
              });
            }
          });
        }else{// 交集
          currentAllData.forEach(function(item,index){
            var colorArray = item.color.split(',');
            if($this.currentFiltering.color.length>0){// 筛选色值
              if($this.currentFiltering.color.length==1){ // 只筛选一个颜色
                if(colorArray.length>0){
                  colorArray.forEach(function(item1,index1){
                    if(item1==$this.currentFiltering.color[0]&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                        currentData.push(item);
                      }
                  });
                }
              }else{// 多个筛选色值
                if($this.isContained(colorArray,$this.currentFiltering.color)&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                  currentData.push(item);
                }
              }
            }else{// 未选中任何色系
              if((item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                currentData.push(item);
              }
            }
          });
        }
      }else if(eType == 'image'){
        if($this.currentFiltering.filteringColorMode == 'sum'){// 并集
          currentAllData.forEach(function(item,index){
            var colorArray = item.color.split(',');
            if(colorArray.length>0){ // 模块色值
              colorArray.forEach(function(item1,index1){
                if($this.currentFiltering.color.length>0){// 筛选色值
                  $this.currentFiltering.color.forEach(function(item2,index2){
                    if(item1==item2&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                      currentData.push(item);
                    }
                  });
                }else{// 未选中任何色系
                  if((item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                    currentData.push(item);
                  }
                }
              });
            }
          });
        }else{// 交集
          currentAllData.forEach(function(item,index){
            var colorArray = item.color.split(',');
            if($this.currentFiltering.color.length>0){// 筛选色值
              if($this.currentFiltering.color.length==1){ // 只筛选一个颜色
                if(colorArray.length>0){
                  colorArray.forEach(function(item1,index1){
                    if(item1==$this.currentFiltering.color[0]&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                        currentData.push(item);
                      }
                  });
                }
              }else{// 多个筛选色值
                if($this.isContained(colorArray,$this.currentFiltering.color)&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                  currentData.push(item);
                }
              }
            }else{// 未选中任何色系
              if((item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                currentData.push(item);
              }
            }
          });
        }
      }else{
        if($this.currentFiltering.filteringColorMode == 'sum'){// 并集
          currentAllData.forEach(function(item,index){
            var colorArray = item.color.split(',');
            if(colorArray.length>0){ // 模块色值
              colorArray.forEach(function(item1,index1){
                if($this.currentFiltering.color.length>0){// 筛选色值
                  $this.currentFiltering.color.forEach(function(item2,index2){
                    if(item1==item2&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                      currentData.push(item);
                    }
                  });
                }else{// 未选中任何色系
                  if((item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                    currentData.push(item);
                  }
                }
              });
            }
          });
        }else{// 交集
          currentAllData.forEach(function(item,index){
            var colorArray = item.color.split(',');
            if($this.currentFiltering.color.length>0){// 筛选色值
              if($this.currentFiltering.color.length==1){ // 只筛选一个颜色
                if(colorArray.length>0){
                  colorArray.forEach(function(item1,index1){
                    if(item1==$this.currentFiltering.color[0]&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                        currentData.push(item);
                      }
                  });
                }
              }else{// 多个筛选色值
                if($this.isContained(colorArray,$this.currentFiltering.color)&&(item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                  currentData.push(item);
                }
              }
            }else{// 未选中任何色系
              if((item.type == tType)&&currentData.indexOf(item)==-1&&($this.currentFiltering.effect=='all'||$this.currentFiltering.effect==item.effect)){
                currentData.push(item);
              }
            }
          });
        }
      }
      return currentData;
      console.log(currentData,999);
    },
    // 筛选模式切换事件
    filteringModeChange:function(value){
      var $this = this;
      $this.currentFiltering.filteringColorMode = value;
      console.log(value);
    },
    // 色系筛选点击事件
    filteringColorChange:function(value){
      var $this = this;
      var colorData = [];
      $this.publicFilteringData.colorData.forEach(function(item,index){
        if(item.isSelected){
          colorData.push(item.name);
        }
      });
      $this.currentFiltering.color = colorData;
      console.log($this.currentFiltering.color);
    },
    // 对齐方式点击事件
    filteringAlignChange:function(value){
      var $this = this;
      $this.currentFiltering.align = value;
      console.log($this.currentFiltering.align);
    },
    // 附加样式点击事件
    filteringStyleChange:function(value){
      var $this = this;
      $this.currentFiltering.style = value;
      console.log($this.currentFiltering.style);
    },
    // 视觉特效点击事件
    filteringEffectChange:function(value){
      var $this = this;
      $this.currentFiltering.effect = value;
      console.log($this.currentFiltering.effect);
    },
    // 判断一个数组是否包含另一个数组
    isContained:function(a,b){// a: 数据包含颜色值 b: 筛选所选颜色值
      if(!(a instanceof Array) || !(b instanceof Array) || (a.length<b.length)){
        return false;
      }
      for(var i = 0; i < b.length; i++){
        var flag = false;
        for(var j = 0; j < a.length; j++){
          if(a[j] == b[i]){
            flag = true;
            break;
          }
        }
        if(flag == false){
          return flag;
        }
      }
      return true;
    }
  }
}
</script>

<style lang="scss">
.scroll-wrap{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.page-root{
  position: relative;
  height: calc(100vh - 64px);
}
.filter-panel.is-open{
  left:0;
}
.filter-panel.is-close{
  left:-324px;
  .arrow-panel{
    span{
      -webkit-transform: rotate(180deg) translateX(-16px);
      transform: rotate(180deg) translateX(-16px);
    }
  }
}
.filter-panel{
  width:324px;
  background: #fff;
  height:100%;
  position: absolute;
  top:0;
  background: #fff;
  z-index: 100;
  -webkit-box-shadow: 10px 0 10px rgba(0,0,0,.1);
  box-shadow: 10px 0 10px rgba(0,0,0,.1);
  transition: all .3s linear;
  .arrow-panel{
    width: 48px;
    height: 48px;
    position: absolute;
    right: -48px;
    top: 8px;
    border-radius: 0 4px 4px 0;
    background: #fff;
  -webkit-box-shadow: 10px 0 10px rgba(0,0,0,.1);
  box-shadow: 10px 0 10px rgba(0,0,0,.1);
  cursor: pointer;
  span{
    display: block;
    width: 3px;
    height: 20px;
    background: $primary;
    left: 12px;
    top: 13px;
    position: absolute;
    &:before{
      content:'';
      display: block;
      width: 16px;
      height: 16px;
      right: -24px;
      top: 2px;
      border-top: 3px solid $primary;
      border-left: 3px solid $primary;
      position: absolute;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  }
  }
  .fst-panel{
    margin-top: 10px;
  }
  .filter-wrap{
    width:100%;
    padding: 10px;
    >h2{
      width:100%;
      line-height: 36px;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      margin-top: 20px;
    }
    .filter-item{
      width:100%;
      overflow: hidden;
      border-bottom:1px solid #ddd;
      dt{
        width:100%;
        overflow: hidden;
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      dd{
        width:100%;
        overflow: hidden;
        margin-bottom: 20px;
        label{
          margin-right: 5px;
          margin-left: 5px;
          margin-top: 10px;
          span.bg-color{
            display: inline-block;
            position: relative;
            padding-right: 18px;
            &:before{
              content:'';
              display: block;
              width:12px;
              height: 12px;
              position: absolute;
              right:0;
              top:1px;
            }
          }
          span.is-red{
            &:before{
              background: red;
            }
          }
          span.is-orange{
            &:before{
              background: orange;
            }
          }
          span.is-blue{
            &:before{
              background: blue;
            }
          }
          span.is-green{
            &:before{
              background: green;
            }
          }
          span.is-brown{
            &:before{
              background: brown;
            }
          }
          span.is-yellow{
            &:before{
              background: yellow;
            }
          }
          span.is-purple{
            &:before{
              background: purple;
            }
          }
          span.is-pink{
            &:before{
              background: pink;
            }
          }
          span.is-black{
            &:before{
              background: black;
            }
          }
          span.is-cyan{
            &:before{
              background: cyan;
            }
          }
          span.is-gray{
            &:before{
              background: gray;
            }
          }
        }
        label+label{
          margin-left:5px!important;
        }
      }
    }
    .filter-item+.filter-item{
      margin-top: 20px;
    }
  }
}
.style-list{
  height:100%;
  overflow: hidden;
  background: #fff;
}


.style-wrapper{
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 64px 8px 8px 56px;
  transition: all .3s linear;
  >p.single-panel{
    span{
      float:none;
      margin: 0 auto;
    }
  }
  >p{
    display: block;
    height: 48px;
    position: absolute;
    left:56px;
    top:8px;
    right: 8px;
    background: #fff;
  transition: all .3s linear;
    span{
      width: 50%;
      float:left;
      display: block;
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 18px;
      color: $primary;
      font-weight: bold;
    }
  }
}
.btn-panel{
  width: 100%;
  margin: 0 auto;
  height:50px;
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
.item-list.single-panel{
  
  .item-wrap{
    margin-left:auto;
    margin-right: auto;
  }
  .item-wrap.is-pc,.item-wrap.is-wap{
    float:none;
  }
}
.item-list{
  width:100%;
  overflow: hidden;
  .item-wrapper{
    width: 100%;
    overflow: hidden;
    position: relative;
    &:before{
      content:'';
      display: block;
      width: 10px;
      height: 100%;
      top:0;
      bottom: 0;
      background: #f5f5f5;
      right: 760px;
      position: absolute;
    }
    &:hover{
      .edit-panel,.file-panel{
        display: block;
      }
    }
    .file-panel{
      position: absolute;
      width:100%;
      height: 24px;
      line-height: 0;
      z-index: 10;
      top:0;
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
  .item-wrap{
    overflow: hidden;
    position: relative;
    .item-content{
      width:100%;
      @extend %clearfix;
      background: url(../../assets/images/bg_mark.jpg) left top repeat;
      position:relative;
      z-index: 1;
    }
  }
  .item-wrap.is-pc{
    width: calc(100% - 780px);
    float:left;
  }
  .item-wrap.is-wap{
    width: 750px;
    float:right;
  }
  .item-wrapper+.item-wrapper{
    border-top: 8px solid #f5f5f5;
  }
}
</style>
