<template>
    <form @submit.prevent="saveTask()">
        <input type="text" placeholder="write a title" v-model="task.title"/>
        <input type="text" placeholder="write a title" v-model="task.description"/>
        <button>Save</button>
    </form>
</template>
<script lang="ts">
import {defineComponent } from 'vue';
import {Task} from '../interfaces/Task';
import {createTask} from '../services/TaskService';

export default  defineComponent({
    data(){
        return{
            task: {} as Task
        };
    },
    methods:{
       async saveTask (){
            const res = await createTask(this.task);
            console.log(res);
        },
    },
});
</script>