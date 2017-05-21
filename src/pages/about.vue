<template>
   <div class="layui-main">
        <div v-show="!showLayer">
            <div class="layui-elem-quote" style="margin-top: 20px;">
                <p>我是谁？</p>
            </div>
            <div class="article-body"  id="ym-about">
                <p>我也不知道我是谁</p>
                <p>我只知道我曾经来过</p>
                <p>在此留下一点足迹</p>
            </div>
       </div>
        <ym-layer :options="options" v-if="showLayer"></ym-layer>
    </div>
</template>
<script>
import YmLayer from '../components/YmLayer'
import common from '../utils/common'
    export default {
        components:{
        YmLayer
        },
        data(){
            return {
                options:{},
                showLayer:false
            }
        },
        created(){
            let self=this;
            if(screen.availWidth>1000){
                self.$nextTick(()=>{
                    let html=document.getElementById('ym-about').outerHTML
                    self.options={            
                        type:1,
                        shade:0,
                        skin:'layui-layer-molv',
                        anim: 4,
                        offset:['40%','40%'],
                        area: ['300px', '200px'],
                        title:'我是谁？',
                        content:html,
                        cancel:function(){
                            self.showLayer=false;
                        }
                    }
                    self.showLayer=true;                                
                    common.showMsg();
                })
            }
        },
        destroyed(){
            let self=this;
            layer.closeAll()
        }
    }
</script>
