import Hello from './views/Hello'
import Test from './views/Test'
import Login from './views/login'

var routers=[
    {
      path: '/',
      name: 'login',
      component:Login
    },
    {
      path:'/index',
      name:'index',
      component(resolve){
        require.ensure(['./views/App.vue'], () => {
          resolve(require('./views/App.vue'));
        });
      },
      children: [
        {
          path:'',
          component:Hello
        },
        {
          path:'test',
          name:'test',
          component:Test
        },
        {
          path:'hello',
          name:'hello',
          component:Hello
        },{
          path:'Notifi',
          name:'Notifi',
          component(resolve){
            require.ensure(['./views/demo/Notifi.vue'], () => {
              resolve(require('./views/demo/Notifi.vue'));
            });
          }
        },{
          path:'MessageBox',
          name:'MessageBox',
          component(resolve){
            require.ensure(['./views/demo/MsgBox.vue'], () => {
              resolve(require('./views/demo/MsgBox.vue'));
            });
          }
        },{
          path:'Tabs',
          name:'Tabs',
          component(resolve){
            require.ensure(['./views/demo/Tabs.vue'], () => {
              resolve(require('./views/demo/Tabs.vue'));
            });
          }
        },{
          path:'form',
          name:'form',
          component(resolve){
            require.ensure(['./views/demo/form.vue'], () => {
              resolve(require('./views/demo/form.vue'));
            });
          }
        },
        {
          path:'Pagination',
          name:'Pagination',
          component(resolve){
            require.ensure(['./views/demo/Pagination.vue'], () => {
              resolve(require('./views/demo/Pagination.vue'));
            });
          }
        },
        {
          path:'table',
          name:'table',
          component(resolve){
            require.ensure(['./views/demo/table.vue'], () => {
              resolve(require('./views/demo/table.vue'));
            });
          }
        }


      ]

    }
  ];

export  default routers;
