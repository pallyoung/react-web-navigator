'use strict'
class NavigatorWrapper{
    constructor(navigator){
        this.navigator = navigator;
        this.children = [];
        this.routeStacks = [];
        this.uri = [];
    }
    addChild(navigator){
        this.children.push(navigator);
    }
    _getRouteConfig(name) {
        var navigator = this.navigator;
        return navigator.props.routeConfigMap && navigator.routeConfigMap[name] || null;
    }
    removeChild(navigator){
        var index = this.children.indexOf(navigator);
        if(index){
            this.children.splice(index,1);
        }
    }
    removeChildren(){
        this.children.length = 0;
    }
    update(){
        
    }
}
export default NavigatorWrapper;