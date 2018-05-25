function toDou(n){
return n<10?'0'+n:n;
}
let str = '';
let str2 = str.replace(/^/gm,'<p>').replace(/$/gm,'</p>')
module.exports={
    time2date:function(timestamp){
        let oDate = new Date();
        oDate.setTime(timestamp*1000);
    }
}