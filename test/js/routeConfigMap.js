'use strict'
import Home from './pages/Home';
import Main from './pages/Main';
import UserCenter from './pages/UserCenter';
import PageList from './pages/PageList';

export default {
    home:{
        name:'home',
        path:'/home',
        component:Home
    },
    main:{
        name:'main',
        path:'/main',
        component:Main
    },
    usercenter:{
        name:'usercenter',
        path:'/usercenter',
        component:UserCenter
    },
    pagelist:{
        name:'pagelist',
        path:'/pagelist',
        component:PageList 
    }
}