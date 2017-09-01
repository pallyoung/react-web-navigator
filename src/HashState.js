'use strict'
window.addEventListener('hashchange',function(e){

},false);
const CHANGE_CALLBACKS = [];
function addEventListener(type,callback){
    CHANGE_CALLBACKS.push(callback);
}
function removeEventListener(type,callback){
    for(var i = 0,l = CHANGE_CALLBACKS.length;i<l;i++){
        if(callback === CHANGE_CALLBACKS[i]){
            CHANGE_CALLBACKS.splice(i,1);
            return;
        }
    }
}   


export default {
    CHANGE:'change',
    addEventListener,
    removeEventListener
}