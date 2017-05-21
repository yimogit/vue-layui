<template>
    <div class="layui-tab-brief">
        <blockquote class="layui-elem-quote">
            请填写{{pageTitle}}信息
        </blockquote>
        <fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
            <legend>响应式的表单集合</legend>
        </fieldset>
        <div>
            <div class="layui-form-item">
                <label class="layui-form-label">单行输入框</label>
                <div class="layui-input-block">
                    <input type="text" name="title" placeholder="单行输入框" v-model="model.InputTxt" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">日期输入</label>
                <div class="layui-input-block">
                    <ym-date v-model="model.InputDate" :isTime="false" dateFormat="YYYY-MM-DD"></ym-date>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">单行选择框</label>
                <div class="layui-input-block">
                    <ym-select v-model="model.SelectValue" :options="selectOptions"></ym-select>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">复选框</label>
                <div class="layui-input-block">
                    <ym-checkbox v-model="model.CheckValue" :text="model.CheckValue?'启用':'禁用'"></ym-checkbox>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">开关</label>
                <div class="layui-input-block">
                    <ym-switch v-model="model.SwitchValue"></ym-switch>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">单选框</label>
                <div class="layui-input-block">
                    <ym-radio v-model="model.RadioValue" :options="radioOptions"></ym-radio>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">普通文本域</label>
                <div class="layui-input-block">
                <textarea placeholder="请输入内容" class="layui-textarea" v-model="model.TextAreaTxt"></textarea>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">上传图片</label>
                <div class="layui-input-block">
                    <ym-upload v-model="model.ImgPath" ></ym-upload>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">富文本编辑器</label>
                <div class="layui-input-block">
                    <ym-editor v-model="model.EditorTxt" :options="{height:100}"></ym-editor>
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">富文本编辑器</label>
                <div class="layui-input-block">
                    <ym-editor v-model="model.EditorTxt2" :options="{height:120}"></ym-editor>
                </div>
            </div>
            
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button class="layui-btn" @click="save">立即提交</button>
                    <button class="layui-btn layui-btn-primary" @click="$router.go(-1)">返回</button>
                </div>
            </div>       
             <pre class="layui-code" v-if="isSubmit" height="100" id="codeJson">
                {{JSON.stringify(model)}}
             </pre>     
        </div>
        <ym-layer v-if="isSubmit" :options="layerOptions" @cancelHandler="cancelHandler" >
            <div>
                <ul class="layui-tab-title site-demo-title" style="margin-bottom:10px;">
                    <li class="layui-this">提交的数据</li>
                </ul>
                <pre class="layui-code" v-if="isSubmit" height="100" id="codeJson">
                    {{JSON.stringify(model)}}
                </pre> 
            </div>
        </ym-layer>
        <!--<ym-loading :show="isSubmit" :type="0"></ym-loading>-->
    </div>
</template>
<script>
    import YmDate from '../components/YmDate'
    import YmSelect from '../components/YmSelect'
    import YmCheckbox from '../components/YmCheckbox'
    import YmRadio from '../components/YmRadio'
    import YmSwitch from '../components/YmSwitch'
    import YmEditor from '../components/YmEditor'
    import YmUpload from '../components/YmUpload'
    import YmLayer from '../components/YmLayer'
    import YmLoading from '../components/YmLoading'
    export default {
        components:{
            YmDate,
            YmSelect,
            YmCheckbox,
            YmSwitch,
            YmRadio,
            YmEditor,
            YmUpload,
            YmLayer,
            YmLoading
        },
        data(){
            return {
                model:{                    
                    InputTxt:'我是文本框的值',//必须有初始化值
                    InputDate:'2016-11-29',
                    SelectValue:2,
                    CheckValue:true,
                    SwitchValue:true,
                    RadioValue:1,
                    TextAreaTxt:'我是文本域的值',
                    ImgPath:'/static/images/mo.png',
                    EditorTxt:'<b>我是富文本编辑器的值</b>',
                    EditorTxt2:'233'
                },
                selectOptions:[
                    {
                        Text:'选项一',
                        Value:1
                    },
                    {
                        Text:'选项二',
                        Value:2
                    }
                ],
                radioOptions:[
                    {
                        Text:'选项一',
                        Value:1
                    },
                    {
                        Text:'选项二',
                        Value:2
                    }
                ],
                layerOptions:{
                    title:'提交的信息'
                },
                isSubmit:false,
                pageTitle:'',
            }
        },
        created(){
            this.setTitle()
        },
        watch:{
            '$route':function(){
                this.setTitle()
            }
        },
        methods:{
            setTitle(){
                let self=this;
                self.pageTitle=self.$route.query.title||''
                self.$parent.readyShowContent=self.$route.query.readyShowContent
            },
            save(){
                let self=this;
                self.isSubmit=true
                console.log(self.model);
                
            },
            cancelHandler(){
                console.log('关闭')
            },
            endHandler(){
                // layer.msg("加载完成")
            }
        }
    }
</script>