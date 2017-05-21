<template>
    <div style="width:100%;height:100%;" class="layui-tab-brief">
        <ul class="layui-tab-title site-demo-title" style="margin-bottom:10px;">
            <li class="layui-this">欢迎页</li>
        </ul>
        <div style="width:100%;height:100%;" >
            <div v-for="item in menus" class="welcome layui-circle" :style="color()">
                <router-link :to="{path:item.MenuUrl}">{{item.MenuName}}</router-link>
            </div>
            
        </div>
    </div>
</template>
<style>
    .welcome{
        width:200px;
        height:200px;
        margin:5px;
        float: left;
        text-align: center;
        position: relative;
    }
    .welcome a{
        position: relative;
        top:50%;
        height:20px;
        color: white;
        margin-top:-10px;
        display: block;
        font-size: 18px;
        text-shadow:  1px 1px
    }
</style>
<script>
import adminMenus from '../config/adminMenus'
export default {
    data(){
        return {
             colorValue:'',
             menus:[]
        }
    },
    created(){
        let self=this
        self.menus=[];
        adminMenus.forEach(item=>{
            if(item.ChildrenMenu && item.ChildrenMenu.length>0){
                item.ChildrenMenu.forEach(item2=>{
                    self.menus.push(item2)
                })
            }
            else{
                    self.menus.push(item)
            }
        })
    },
    methods:{
        color(){
            let rseed=[]
            for(var i=1;i<10;i++){
                rseed.push(i);
            }
            let color='rgba('
            color+=Math.floor(Math.random () * 300)+','
            color+=Math.floor(Math.random () * 300)+','
            color+=Math.floor(Math.random () * 300)+','
            color+='0.8)';
            return {'background-color':color}
        }
    }
}
</script>