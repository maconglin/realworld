/**
 * Nuxt.js配置文件
 */
module.exports = {
  router: {
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
     routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children:[
            {
              path:'', // 默认路由
              name:'home',
              component:resolve(__dirname,'pages/home/')
            },
            {
              path:'/login', // 默认路由
              name:'login',
              component:resolve(__dirname,'pages/login/')
            },
            {
              path:'/register', // 默认路由
              name:'register',
              component:resolve(__dirname,'pages/login/')
            },
            {
              path:'/profile/:username',
              name:'profile',
              component:resolve(__dirname,'pages/profile/')
            },
            {
              path:'/settings',
              name:'settings',
              component:resolve(__dirname,'pages/settings/')
            },
            {
              path:'/editor/:slug?',
              name:'editor',
              component:resolve(__dirname,'pages/editor/')
            },
            {
              path:'/article/:slug',
              name:'article',
              component:resolve(__dirname,'pages/article/')
            }
          ]
        }
      ])
    }
  },
  server: {
    host: '0.0.0.0',// 监听所有外网地址。在生产环境服务器上外网环境就能访问到了，在本地的话，局域网都能访问到了
    port: 2000
  },
  plugins:[   //注册插件
    '~/plugins/request.js',
    '~/plugins/day.js'
  ]
}