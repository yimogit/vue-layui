export default {
    getRandomString(prefix){
        prefix=prefix||''
        return prefix+Date.now()+Math.floor(Math.random () * 1000);
    },
    ajaxGet(url){
        return new Promise(function(resolve, reject){
            var xml = new XMLHttpRequest();
            xml.open('get',url,true);
            xml.onload = resolve;
            xml.onerror = reject;
            xml.send();
        } )
    },
    showMsg(){
        layer.open({            
            type:2,
            shade:0,
            skin:'layui-layer-molv',
            anim: 4,
            offset:'rb',
            area: ['400px', '500px'],
            title:'我是谁？',
            content:'/static/msg.html'});
    }
}