function getUID(){
    var ret = "";
    for(var i=1; i<12; i++){
        var r = parseInt(Math.random()*256);
        if(i % 4 == 0){
            ret += "-";
        } else{
            ret += r.toString(16) || 0 ;
        }
        
    }
    return ret;
}
var brider = {
    user:localStorage.getItem("brider_uname"),
    session:getUID()
};