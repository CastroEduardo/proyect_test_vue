

<template> 
 <HelloWorld msg="Vite + Vue" />
 <h1>{{model1}}</h1>
 <h1> Hola {{ miNombre  }} y tendre {{ miEdad+1 }}</h1>
</template>

<script setup lang="ts">
import { JsonDemo } from "./models/models_demo";

const model1:JsonDemo = {
  userId: 100,
    id: 200,
    title: "Titulo",
    completed: false,
    data:"sd"

}
const miNombre= "Jab"
const miEdad=18
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
