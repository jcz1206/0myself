<template>
    <div :class="['todo-item',todo.completed?'completed':'']">
        <input
            type="checkbox" 
            class="toggle" 
            v-model="todo.completed"
        />
        <label>
            {{todo.content}}
        </label>
        <button class="destroy" @click="deleteTodo">x</button>    
    </div>
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
        deleteTodo(id){
            this.$emit('del',id)
        }
    }
}
</script>
<style lang="stylus" scoped>
.destroy{

}
.completed{
  background-color yellow; }
</style>
