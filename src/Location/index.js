'use strict'
import parseURL from './parseURL';
var Location = function(url){
    var location = window.location;
    if(typeof url === 'string'){
        location = parseURL(url);
    }
}
export default Location;