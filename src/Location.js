'use strict'
import Parser from './Parser';
var uri = Parser.hashToURI(location.hash);
var CHANGE = 'change';
window.addEventListener('hashchange', function (e) {
    var oldUri = uri;
    var newUri = Parser.URI(e.newURL)
    emit(CHANGE,{
        type:CHANGE,
        oldUri,
        newUri
    })
    Location.uri = newUri;

}, false);
var CHANGE_CALLBACKS = [];
function emit(type,event) {
    for(var i = 0;i<CHANGE_CALLBACKS.length;i++){
        CHANGE_CALLBACKS[i].call(null,event)
    }
}
function on(type, callback) {
    CHANGE_CALLBACKS.push(callback);
}
function off(type, callback) {
    for (var i = 0, l = CHANGE_CALLBACKS.length; i < l; i++) {
        if (callback === CHANGE_CALLBACKS[i]) {
            CHANGE_CALLBACKS.splice(i, 1);
            return;
        }
    }
}
function push(hash) {
    location.hash = hash;
}
function goBack(index) {
    history.go(index)
}

var Location = {
    push,
    goBack,
    uri:uri,
    on,
    off
}

export default Location;