<template>
  <div class="layui-main" style="width: 100%;">
    <div :id="tmodel.id" v-for="tmodel in pageModel" v-show="!showLayer">
      <ul class="ym-ul">
        <li v-for="item in tmodel.dataValue">
          <router-link :to="{path:'/article/'+tmodel.key+'/'+item.Id}">
            {{item.Title}}
          </router-link>          
        </li>
      </ul>
    </div>
    <ym-layer v-for="item in layerOptions" v-show="showLayer" :options="item"></ym-layer>
  </div>
</template>
<script>
import siteMenus from '../config/siteMenus'
import YmLayer from '../components/YmLayer'
import articleService from '../api/articleService'
export default {
    components:{
      YmLayer
    },
    data (){
      return {
          siteMenus:[],
          layerOptions:[],
          isLoad:true,
          showLayer:false,
          pageModel:[
            {
              id:'home_blogs',
              key:'blogs',
              title:'文章精选',
              dataValue:[]
            },
            {
              id:'home_jokes',
              key:'jokes',
              title:'笑话精选',
              dataValue:[]
            },
            {
              id:'home_news',
              key:'news',
              title:'新闻精选',
              dataValue:[]
            }
          ]
      }
    },
    methods:{
      loadData(item,index,callback){
        let self=this;
        let pageIndex=0;
        articleService.getArticleByType(item.key,pageIndex).then(resp=>{
          if(resp){
            let model=eval('('+resp+')')
            if(model && model.Status==1 && model.Data && model.Data.length>0){
              callback(model.Data);
              self.pageModel[index].dataValue=model.Data
            }
          }          
        });
      },
      preLoadData(item,index){    
        let self=this    
        let data=sessionStorage.getItem(item.id)
        if(data){
          item.dataValue=eval(data);
        }
        else{
          self.loadData(item,index,function(result){
            sessionStorage.setItem(item.id,JSON.stringify(result))
          })
        }
      },
      checkCache(){
        let self=this
        if(self.$route.query.clear==true){
          sessionStorage.clear()
          // localStorage.clear();
        }
      }
    },
    created(){
      let self=this
      // self.checkCache();
      this.siteMenus=siteMenus;
      self.layerOptions=[];
      self.showLayer=true;
      self.$parent.showLoading=true
      this.pageModel.forEach((item,index)=>{
        self.preLoadData(item,index);  
        self.$nextTick(()=>{
            if(screen.availWidth>1000){
                  let html=document.getElementById(item.id).innerHTML            
                  self.layerOptions.push({            
                      type:1,
                      anim: 4,
                      skin:'layui-layer-molv',
                      shade:0,
                      offset: ['100px', (index*400+100)+'px'],
                      area:['300px','450px'],
                      key:item.key,
                      title:item.title,
                      content:html,
                      cancel:function(l){
                        document.getElementById('home_'+this.key).style.display='block'
                      }
                  })
                  if(index==2){
                    self.$parent.showLoading=false
                  }
                  self.showLayer=true;
            }
            else{
              self.showLayer=false;
              self.$parent.showLoading=false
            }
        });   
      })
    },
    destroyed(){
      this.$parent.showMsgId=null;
      layer.closeAll()
    }
}
</script>
