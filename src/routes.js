import login from './views/login.vue'
import NotFound from './views/404.vue'
import home from './views/home.vue'
import main from './views/main.vue'
import resourceMan from './views/cheetah/resourceMan.vue'
import synchronization from './views/cheetah/synchronization.vue'
import collector from './views/cheetah/collector.vue'
import qualityAnalysis from './views/zebra/qualityAnalysis.vue'
import design from './views/rhinos/design.vue'
import configuration from './views/rhinos/configuration.vue'
import hippoIndex from './views/hippo/hippoIndex.vue'
import kinship from './views/hippo/kinship.vue'
import user from './views/griffin/user.vue'
import permission from './views/griffin/permission.vue'
import auditlogs from './views/griffin/auditlogs.vue'

let routes = [
    {
        path: '/login',
        component: login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: home,
        name: '数据集成',
        iconCls: 'fa fa-list-ul',//图标样式class
        children: [
            { path: '/main', component: main, name: '主页', hidden: true },
            { path: '/resourceMan', component: resourceMan, name: '资源目录', iconCls:'fa fa-columns' },
            { path: '/synchronization', component: synchronization, name: '数据导入', iconCls:'fa fa-upload'},
            { path: '/collector', component: collector, name: '采集器' , iconCls:'fa fa-flask'}
        ]
    },
    {
        path: '/',
        component: home,
        name: '数据治理',
        iconCls: 'fa fa-medkit',
        children: [
            { path: '/qualityAnalysis', component: qualityAnalysis, iconClds: 'fa fa-medkit', name: '质量分析', iconCls:'fa fa-eye'}
        ]
    },
    {
        path: '/',
        component: home,
        name: '数据分析',
        iconCls: 'fa fa-object-group',
        // leaf: true,//只有一个节点
        children: [
            { path: '/design', component: design, name: '流程管理',iconCls:'fa fa-sitemap'},
            { path: '/configuration', component: configuration, name: '配置',iconCls:'fa fa-cogs'}
        ]
    },
    {
        path: '/',
        component: home,
        name: '数据监控',
        iconCls: 'fa fa-assistive-listening-systems',
        children: [
            { path: '/hippoIndex', component: hippoIndex, name: '运维管控' , iconCls:'fa fa-bar-chart-o'},
            { path: '/kinship', component: kinship, name: '血缘分析', iconCls:'fa fa-eyedropper'}
        ]
    },
    {
        path: '/',
        component: home,
        name: '5A认证',
        iconCls: 'fa fa-drivers-license-o',
        children: [
            { path: '/user', component: user, name: '用户', iconCls:'fa fa-user-o'},
            { path: '/permission', component: permission, name: '权限', iconCls:'fa fa-key'},
            { path: '/auditlogs', component: auditlogs, name: '审计' , iconCls:'fa fa-legal'}
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;