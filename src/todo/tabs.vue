<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength()}} items left</span>
    <div class="tabs">
        <span v-for="state in states" :key="state" 
        :class="[state,filter1==state?'actived':'']" 
        @click="toggleFilter(state)" 
        >{{state}}</span>
    </div>
    <span class="clear" @click="clearAllCompleted">clearAllCompleted</span>
  </div>
</template>
<script>
export default {
  props:{
    filter1:{
      type:String,
      required:true,
    }
  },
  data(){
    return {
      states:['all','active','completed']
    }
  },
  computed:{
    unFinishedTodoLength(){
      // return this.todos.filter(todo=>!todo.completed).length
      return 0;
    }
  },
  methods:{
    toggleFilter(state){
      this.$emit('toggle',state)
    },
    clearAllCompleted:()=>{
      
    }
  }
}
</script>
<style lang="stylus" scoped>
  .helper{
    border-top:solid 1px #ddd;
    margin-top:20px
    }
  .left,.tabs,.clear{
    display inline-block
    margin:10px 20px;
  }
  .tabs span{
    margin:0 10px;
    }
    .tabs span.actived{
      color:blue;
      }
</style>


