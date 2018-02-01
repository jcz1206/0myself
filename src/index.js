import Vue from 'vue'
import App from './app.vue'

// import './assets/styles/test.css'
// import './assets/images/banner1.jpg'
import './assets/styles/global.styl'

const root=document.createElement('div');
document.body.appendChild(root);

new Vue({
    // render:(h)=> h(App)  
    render:h=>h(App)  
    // render:function(h){
    //     return h(App)
    // }
    // render:function(createElement){
    //     createElement(App)
    // }

}).$mount(root)    




