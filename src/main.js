/**
 * 项目的启动入口
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 加载全局样式文件
import './styles/index.less'

// 创建Vue根实例
// 把router配置到根实例中
// 通过render方法把APP根组件渲染到#app入口节点

createApp(App).use(router).mount('#app')
