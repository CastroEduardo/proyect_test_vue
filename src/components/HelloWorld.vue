<template>
  <h1>{{model1.title}}</h1>
</template>



<script lang="ts" setup>

import { JsonDemo } from "../models/models_demo";

const model1:JsonDemo = {
  userId: 100,
    id: 200,
    title: "Titulo",
    completed: false,
    data:"sd"

}
</script>


<style scoped>

h1{
 
}
</style>


