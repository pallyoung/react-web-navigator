'use strict'
import Home from './pages/Home';
import Main from './pages/Main';
import UserCenter from './pages/UserCenter';
import PageList from './pages/PageList';
import Login from './pages/Login';
import Register from './pages/Register';

export default {
    home:{
        path:'/home',
        component:Home
    },
    main:{
        path:'/main',
        component:Main
    },
    usercenter:{
        path:'/usercenter',
        component:UserCenter
    },
    pagelist:{
        path:'/pagelist',
        component:PageList 
    },
    login:{
        path:'/login',
        component:Login
    },
    register:{
        path:'/register',
        component:Register
    },
}