<template>
    <div style="width:100%;height:100%;" class="layui-tab-brief">
        <ul class="layui-tab-title site-demo-title" style="margin-bottom:10px;">
            <li class="layui-this">{{pageTitle}}管理</li>
        </ul>
        <div style="margin:10px;">
            <router-link :to="{path:'/admin/article/'+artType+'/edit/add?title='+pageTitle}" class="layui-btn layui-btn-small">
                <i class="layui-icon"></i> 添加{{pageTitle}}
            </router-link>
            <a class="layui-btn layui-btn-small" @click="openEditLayer">
                <i class="layui-icon"></i> 添加{{pageTitle}}层
            </a>
        </div>
        <fieldset class="layui-elem-field">
            <legend>{{pageTitle}}列表</legend>
            <div class="layui-field-box">
                <ym-table>
                    <thead slot="thead">
                        <tr>
                            <th>序号</th>
                            <th width="180">标题</th>
                            <th>作者</th>
                            <th>是否启用</th>
                            <th>来源</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody slot="tbody">
                        <tr v-for="item,index in pageSize">
                            <td v-text="getIndex(index,pageIndex,pageSize)"></td>
                            <td>
                                列可以拖动的哟
                            </td>
                            <td>佚名</td>
                            <td>
                                <bdi class="label label-success">是</bdi>
                            </td>
                            <td>
                                <a href="http://m.wufazhuce.com/question/1516" target="_blank">one·一个</a>
                            </td>
                            <td>
                                <button class="layui-btn layui-btn-small" :onclick="'javascript:layer.msg('+item+')'"><i class="layui-icon"></i></button>
                                <button class="layui-btn layui-btn-danger layui-btn-small" :onclick="'javascript:layer.msg('+item+')'"><i class="layui-icon"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </ym-table>
                <ym-pager :page-index="pageIndex" totalPage="3" groups="10" @pageHandler="loadData"></ym-pager>
            </div>
        </fieldset>
    </div>
</template>
<script>
    import YmPager from '../components/YmPager'
    import YmTable from '../components/YmTable'
    import config from '../config'
    export default {
        components:{
            YmTable,
            YmPager
        },
        data(){
            return {
                artType:null,
                pageTitle:'',
                pageIndex:1,
                pageSize:config.defPageSize,
                items:[]
            }
        },
        created(){
            this.pageIndex=1;
        },
        watch:{
            '$route':'loadData'
        },
        methods:{
            loadData(page){
                this.artType=this.$route.params.type
                this.pageTitle=this.$route.query.title||'列表页'
                // console.log(page)
                this.pageIndex=page>0?page:1;
                console.log(`加载${this.$route.fullPath}第${this.pageIndex}页数据`)
            },
            getIndex(index,pageIndex,pageSize){
                return (pageIndex-1)*pageSize+(index+1)
            },
            openEditLayer(){
                layer.open({
                    type:2,
                    shade:0,
                    maxmin:true,
                    area:['600px','550px'],
                    title:'添加'+this.pageTitle,
                    content:'#/admin/article/'+this.artType+'/edit/add?title=文章&readyShowContent=true'
                })
            }
        }
    }
</script>