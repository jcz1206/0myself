<template>
    <div id="app" >
        {{text}}
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './todo/header.vue' 
import Footer from './todo/footer.jsx' 
import Todo from './todo/todo.vue' 
export default {
    data(){
        return {
            text:'abcd'
        }
    }//, //vue的开发模式是，
    // render(){
    //     createElement() //遍历template中所有节点创建
    // }
    ,
    components:{
        Header,
        Footer,
        Todo,
    }
}
</script>
<style lang="stylus" scoped>
#app{
    color:#333;
}
</style>
