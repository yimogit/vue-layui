<template>
    <div class="layui-main" style="width: 100%;overflow:hidden;">
        <div class="layui-elem-quote" style="margin-top:10px;float:left;width: 100%;">
            <p v-text="currentInfo.Title"></p>
        </div>
        <div v-html="currentInfo.Content" class="article-body"></div>        
        <div class="footerart">
            <button  class="layui-btn" style="float:left">
                <router-link :to="{path:'/article/'+currentInfo.Type+'/'+prevId}">
                    上一篇
                </router-link> 
            </button>
            <button  class="layui-btn" style="float:right">
                <router-link :to="{path:'/article/'+currentInfo.Type+'/'+nextId}" >
                    下一篇
                </router-link> 
            </button>
        </div>
  </div>
</template>
<script>
import articleService from '../api/articleService'
import common from '../utils/common'
export default {
    data(){
        return {
            currentInfo:{
                Id:0,
                Title:'',
                Content:'',
                Type:''
            },
            prevId:0,
            nextId:0,
        }
    },
    created(){
       this.fetchData();
    },
    watch:{
        '$route':'fetchData'
    },
    methods:{
        fetchData(){
            this.currentInfo.Id=this.$route.params.id
            this.$parent.showLoading=true;
            let type= this.$route.params.type
            let id=parseInt(this.$route.params.id)
            this.loadData(type,id);
        },
        loadData(type,id){
            let self=this;
            self.currentInfo.Type=type
            self.prevId=id-1
            self.nextId=id+1
            articleService.getArticleDetail(type,id).then(result=>{
                let resp=eval('('+result+')');
                if(resp && resp.Status==1 && resp.Data){
                    self.currentInfo.Title=resp.Data.Title
                    self.currentInfo.Content=resp.Data.Content
                    window.scroll(0,0)
                }
                else{
                    layer.msg(resp.Msg)
                }
                self.$parent.showLoading=false
            })
        }
    }
    

}
</script>