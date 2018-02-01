<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLength}} items selected</span>
    <div class="tabs">
        <span v-for="state in states" :key="state" 
        :class="[state,filter1==state?'actived':'']" 
        @click="toggleFilter(state)" 
        >{{state}}</span>
    </div>
    <span class="clear" @click="clearAllCompleted()">clearAllCompleted</span>
  </div>
</template>
<script>
export default {
  props:{
    filter1:{
      type:String,
      required:true,
    },
    todos:{
      type:Array
    }
  },
  data(){
    return {
      states:['all','active','completed']
    }
  },
  computed:{
    unFinishedTodoLength(){
      return this.todos.filter(todo=>todo.completed).length
    }
  },
  methods:{
    toggleFilter(state){
      this.$emit('toggle',state)
    },
    clearAllCompleted(){
      this.$emit('clearAllCompleted')
    }
    // clearAllCompleted:()=>{
    //   this.$emit('clearAllCompleted')
    // }
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


