'use strict'
var i = 0;
var STATE_PROTOCOL = ++i;
var STATE_HOST = ++i;
var STATE_PATH_NAME = ++i;
var STATE_SEARCH = ++i;
var STATE_HASH = ++i;

var PATH_SEPARATOR = '/';
var COLON = ':';
var HASH_KEY = '#';
var SEARCH_KEY = '?';

function parseURL(url) {
    url = location.href
    var href = url;
    var state = 1;
    var i = 0, l = href.length;
    var protocol = '',
        host = '',
        hostname = '',
        origin = '',
        hash = '',
        pathname = '/',
        search = '';
    var code;

    var state = STATE_PROTOCOL;
    while (i < l) {
        code = href[i];
        switch (state) {
            case STATE_PROTOCOL:
                if (code === COLON
                    && href[i + 1] === PATH_SEPARATOR
                    && href[i + 2] === PATH_SEPARATOR) {
                    i = i + 3;
                    state = STATE_HOST;
                    protocol += code;
                } else {
                    protocol += code;
                    i++;
                }
                break;
            case STATE_HOST:
                if (code === COLON) {
                    hostname = host;
                    i++;
                } else if (code === PATH_SEPARATOR) {
                    if (hostname === '') {
                        hostname = host;
                    }
                    i++;
                    state = STATE_PATH_NAME;
                } else {
                    host += code;
                    i++;
                }
                break;
            case STATE_PATH_NAME:
                if (code === SEARCH_KEY ) {
                    state = STATE_SEARCH;  
                    i++;                 
                } else if(code == HASH_KEY){
                    state = STATE_HASH;  
                    i++;
                }else{
                    i++;
                    pathname += code;
                }
                break;
            case STATE_SEARCH:
                if (code === HASH_KEY) {
                    i++;
                    state = STATE_HASH;
                } else {
                    i++;
                    search += code;
                }
                break;
            case STATE_HASH:
                hash = href.slice(i-1, l);
                i = l;
                break;
        }
    }
    search = search!==''?'?'+search:search;    
    origin = protocol + '\/\/' + host;
    return {
        search,
        origin,
        href,
        host,
        hostname,
        pathname,
        hash,
        protocol
    }
}
export default parseURL;