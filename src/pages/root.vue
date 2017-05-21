<template>
    <div class="layui-layout">
        <ym-loading :typeOne="showLoading"></ym-loading>
        <ym-header :menuType="2" :menuModel="siteMenus"></ym-header>
        <router-view></router-view>
    </div>
</template>
<script>
import YmHeader from '../components/YmHeader'
import YmLoading from '../components/YmLoading'
import YmLayer from '../components/YmLayer'
import siteMenus from '../config/siteMenus'
import config from '../config'
export default {
    components:{
        YmHeader,
        YmLoading,
        YmLayer
    },
    data (){
      return {
          siteMenus:[],
          showLoading:false,
          showMsg:false,
          showMsgId:null,
      }
    },
    methods:{
        showMsg(){
            let self=this;
            if(this.showMsgId==null && screen.availWidth>1000){
            this.showMsgId= layer.open({            
                        type:2,
                        shade:0,
                        skin:'layui-layer-molv',
                        anim: 4,
                        offset:'rb',
                        area: ['400px', '500px'],
                        title:'我是谁？',
                        content:'http://www.mxmsg.com/msg.html',
                        cancel:function(l){
                            self.showMsgId=null;
                            console.log(self.showMsgId)
                        }         
                    })
            }
        }
    },
    created(){
      this.siteMenus=siteMenus;
    }
}
</script>