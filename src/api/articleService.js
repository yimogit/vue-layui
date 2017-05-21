import common from '../utils/common'
import config from '../config'
export default {
    getArticleByType(type,pageIndex){
       return new Promise(function(resolve, reject){
           common.ajaxGet(`${config.apiAddress}/api/ObtainData/GetList?artType=${type}&pageIndex=${pageIndex}`).then(resp=>{
                 resolve(resp.currentTarget.response)
            }).catch(function(err){
                layer.msg('加载数据失败')
                reject(err);
            })
       });
    },
    getArticleDetail(type,id){
       return new Promise(function(resolve, reject){
           common.ajaxGet(`${config.apiAddress}/api/ObtainData/GetDetail?artType=${type}&id=${id}`).then(resp=>{
                 resolve(resp.currentTarget.response)
            }).catch(function(err){
                layer.msg('加载数据失败')
                reject(err);
            })
       });
    }
}