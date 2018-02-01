<template>
    <section class="real-app">
      <input type="text" class="add-input" autofocus="autofocus" placeholder="接下来要做什么？" 
      @keyup.enter="addTodo">
      <Item 
      v-for="todo in todos" 
      :todo="todo" 
      :key="todo.id" 
      @del="deleteTodo" 
      ></Item>
      <tabs 
      :filter1="filter1" 
      :todos="todos" 
      @toggle="toggleFilter"
      ></tabs>
    </section>
</template>
<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
var id=0;
export default {
  data(){
      return {
        todos:[],
        todo:{
          id:0,
          content:"",
          completed:false
        },
        filter1:"all",
      }
  },
    components:{
      Item,
      Tabs,
    },
    methods:{
        addTodo(e){
            this.todos.unshift({
              id:id++,
              content:e.target.value.trim(),
              completed:false
            })
            e.target.value=''
        },
        deleteTodo(id){
            console.log("====");
          this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1)
        },
        toggleFilter(state){
          this.filter1=state;
        }
    }
}
</script>
<style lang="stylus" scoped>
#app{
    color:red;
}
.add-input{
  color:#666;
  }
</style>
