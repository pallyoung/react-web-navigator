'use strict'

function get(key){
    return key._instantce;
}
function set(key,value){
    key._instantce = value;
}
function remove(key){
    key._instantce = undefined;
}

export default {
    get,
    set,
    remove
}