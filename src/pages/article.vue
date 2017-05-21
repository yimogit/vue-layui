<template>
  <div class="layui-main" style="width: 100%;">
      <ul class="ym-list-ui" style="margin:20px;float:left;width: 100%;overflow:hidden;">
        <li v-for="(item,index) in dataValue" style="float:left;margin-right:50px;">
          <router-link :to="{path:'/article/'+artType+'/'+item.Id}">
            {{item.Title}}
          </router-link>          
        </li>
      </ul>
      <div class="layui-flow-more" style="clear:both;" @click="loadData()"><a href="javascript:;"><cite v-text="loadText"></cite></a></div>
  </div>
</template>
<script>
import siteMenus from '../config/siteMenus'
import YmPager from '../components/YmPager'
import YmLayer from '../components/YmLayer'
import articleService from '../api/articleService'
import common from '../utils/common'
export default {
    components:{
      YmLayer,
      YmPager
    },
    data (){
      return {
          isLoad:true,
          dataValue:[],
          pageIndex:1,
          artType:'',
          loadText:'加载更多'
      }
    },
    methods:{
      loadData(){
        let self=this;
        if(self.loadText=="加载完毕"){
          return;
        }
        let pageIndex=self.pageIndex++
        let type=self.artType;
        articleService.getArticleByType(type,pageIndex).then(resp=>{
          if(resp){
            let model=eval('('+resp+')')
            if(model && model.Status==1 && model.Data && model.Data.length>=0){
              this.loadText="加载更多"
              if(model.Data.length==0){
                self.loadText="加载完毕"
              }
              model.Data.forEach(item=>{
                if(item.Title!="Bad Request"){
                  self.dataValue.push(item)
                }
              })
            }
          }          
        });
      },
      fetchData(){
        this.loadText="加载中"
        this.pageIndex=1;
        this.artType=this.$route.params.type;
        this.dataValue=[]
        this.loadData();
        this.loadData();
      }
    },
    watch:{
        '$route':'fetchData'
    },
    created(){
      this.fetchData();
    },
    destroyed(){
      this.pageIndex=1;
    }
}
</script>