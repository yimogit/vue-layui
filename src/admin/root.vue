<template>
    <div class="layui-layout layui-layout-admin">
        <div class="layui-header ymheader" v-if="!readyShowContent">
            <a href="#/admin"><img class="logo" src="../assets/images/logo2.png"></a>
            <div class="user-action">
                <a href="javascript:;">admin</a>
                <router-link :to="{name:'home'}" class="layui-btn layui-btn-small">首页</router-link>
                <button class="layui-btn layui-btn-small" onclick="javascript:layer.msg('刷新')">刷新</button>
                <button class="layui-btn layui-btn-small" onclick="javascript:layer.msg('退出')">退出</button>
            </div>
        </div>
        <div class="layui-side layui-bg-black" v-if="!readyShowContent">
            <div class="layui-side-scroll">
                <ym-header :menuType="1" :menuModel="adminMenus"></ym-header>
            </div>
        </div>
        <div class="layui-body layui-tab-content" style="bottom:0" :style="readyShowContent?'top:0;left:0;':''">
            <router-view></router-view>
        </div>
    </div>
</template>
<style>
    .ymheader{
        background: #393D49
    }
    .ymheader .user-action {
        position: absolute;
        right: 15px;
        top: 25px;
    }
    .ymheader .user-action a{
        color:#fff;
        font-size: 16px;
    }
    .ymheader .logo {
        height: 65px;
    }
</style>
<script>
import YmHeader from '../components/YmHeader'
import adminMenus from '../config/adminMenus'
export default {
    components:{
        YmHeader
    },
    data (){
      return {
          readyShowContent:false,
          adminMenus:[]
      }
    },
    methods:{
    },
    created(){
      this.adminMenus=adminMenus;
    }
}
</script>