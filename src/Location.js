'use strict'
import Parser from './Parser';

/**
 * redefine history
 */
var historyAction;

var historyGo = history.go;
var historyBack = history.back;
var historyForword = history.forward;


history.go = function (delta) {
    historyAction = {
        action: 'go',
        delta
    }
    historyGo.call(history, delta);
}
history.back = function () {
    historyAction = {
        action: 'back',
        delta: -1
    }
    historyBack.call(history);
}
history.forward = function () {
    historyAction = {
        action: 'forback',
        delta: 1
    }
    historyForword.call(history)
}

/**
 * redefine history end
 */


/**
 * simple event emitter
 */
var CHANGE = 'change';
var CHANGE_CALLBACKS = [];
function Event(type, bundle) {
    return {
        type,
        ...bundle
    }
}
function emit(type, event) {
    for (var i = 0; i < CHANGE_CALLBACKS.length; i++) {
        CHANGE_CALLBACKS[i].call(null, event)
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

/**
 * simple event emitter end
 */

/**
 * function
 */

function push(hash) {
    location.hash = hash;
}
function go(delta) {
    history.go(delta)
}
function back() {
    history.back();
}
function forward() {
    history.forward();
}

/**
 * function end
 */

/**
 * uri states
 */

var URI_STATES = [];
var CURRENT_INDEX = 0;
/**
 * uri states end
 */

/**
 * Location
 */
var Location = {
    uri: Parser.hashToURI(location.hash),
    referrer: {},
    push,
    go,
    back,
    forward,
    on,
    off
}

URI_STATES.push(Location.uri);
CURRENT_INDEX = 0;

if (Location.uri == undefined) {
    location.hash = '#/';
}





window.addEventListener('hashchange', function (e) {
    var oldUri = Location.uri;
    var newUri = Parser.URI(e.newURL);
    var nextUri = URI_STATES[CURRENT_INDEX + 1];
    var preUri = URI_STATES[CURRENT_INDEX - 1];
    if (!historyAction) {
        if (preUri && preUri.key == newUri.key) {
            historyAction = {
                action: 'back',
                delta: -1
            }
        } else if (nextUri && nextUri.key == newUri.key) {
            historyAction = {
                action: 'forward',
                delta: 1
            }
        } else {
            historyAction = {
                action: 'push',
                delta: 1
            }
            URI_STATES.length = CURRENT_INDEX+1;
            URI_STATES.push(newUri);            
        }
    }
    Location.uri = newUri;
    CURRENT_INDEX += historyAction.delta;
    URI_STATES.length  = CURRENT_INDEX+1;
    
    emit(CHANGE, Event(CHANGE, {
        oldUri,
        newUri,
        action: historyAction.action,
        delta: historyAction.delta
    }));
    historyAction = undefined;
}, false);


export default Location;