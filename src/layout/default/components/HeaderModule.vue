<template>
    <div class="header">
        <toggle-sidebar-menu v-bind:is-collapse="sidebar.opened" v-on:toggleClick="toggleSidebar" />
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
    computed:{
        ...mapGetters([
            'sidebar',
        ]),
    },
    methods:{
        toggleSidebar() {
            this.$store.dispatch('header/toggleSideBar');
        },
    }
}
</script>

<style lang="scss" scoped>
.header{
    width:100%;
    height:64px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    position: relative;
    z-index: 1;
}
</style>


