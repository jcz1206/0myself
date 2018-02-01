<template>
    <section class="real-app">
      <input type="text" class="add-input" autofocus="autofocus" placeholder="接下来要做什么？" 
      @keyup.enter="addTodo">
    </section>
</template>
<script>
export default {
    props:{
        todo:{
            type:Object,
            required:true,
        }
    },
    methods:{
        deleteTodo(){
            
        },
        addTodo(){

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
