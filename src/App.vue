<template> 
  <h1 :class="selector">{{model1.id}}</h1>
  <h1>Hola {{ miNombre  }} y tendre {{ miEdad+1 }}</h1>
  <button @click="saludar(miNombre)">Entrar </button>
  <button @click="decremento">-</button>
  <span :class="miColor">{{ contador }}</span>
  <button @click="incremento">+</button>
  <div v-if="contador<0">Escribe una cantidad mayor de 0</div>
  <div v-else-if="contador>5">Cantidad Correcta</div>
  <div v-show="comprobacion">No esta permitido el numero 0</div>
  <img :src="imagen1"/>
 </template>
 
 <script setup lang="ts">
 import { JsonDemo } from "./models/models_demo";
 
 const model1:JsonDemo = {
   userId: 100,
     id: 200,
     title: "Titulo",
     completed: false,
     data:"sd",
     web:"https://yt3.ggpht.com/s4cUbevAGAhSoDDF5pJHTeSKepSOkdJB2IhnebmuK5nIXz3sRa2FIXZom9sEjtrkYA2zOYHByyQ=s48-c-k-c0x00ffffff-no-rj"
 
 }
 
 const imagen1= model1.web;
 import {computed,ref}  from "vue";
 let contador=ref(0);
 let miColor= ref("text_color");
 const  decremento = ()=>{
    contador.value--;
    if (contador.value<0){
       miColor.value= "rojo"
    }
 }
 const incremento = ()=>{
   contador.value++;
   if(contador.value>5){
     miColor.value= "verde"
   }
 }
 
 const  miNombre= "Jab"
 const miEdad=18
 const selector="text_color"
 const saludar=(nombre: string)  =>{
      console.log(`Hola ${nombre}`)
 }
 const comprobacion=computed(()=>{
   if(contador.value<6 && contador.value>-1){
     miColor.value= "text_color"
   }
   return contador.value===0;
 })
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
 .text_color
 {
   color:blue
 }
 .span_t{
   padding:0 5px;
 }
 .rojo{
  color: crimson;
 }
 .verde{
   color: chartreuse;
 
 }
 </style>