<template>
  <el-container>
    <el-container>
      <el-header>
        <header-module />
      </el-header>
      <el-main>
        <transition 
          name="fade-transform"
          mode="out-in">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import { HeaderModule } from './components';
export default {
  name: 'Layout',
  components: {
    HeaderModule,
  },
  computed:{
  },
  methods: {
  }
}
</script>

<style>
.el-header{
  background: none;
  padding:0!important;
  height:64px!important;
}
.el-main {
  background-color: #f5f5f5;
  color: #333;
  overflow: hidden!important;
  padding:0!important;
}
</style>
