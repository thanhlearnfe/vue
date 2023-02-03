<template>
  <div v-if="transions">
    <div v-for="(transion,index) in transions" :key="index">
      <router-link :to="{
        name:'homeDetail',
        params:{id:index+1}
      }"> 
      {{ transion.id }}
      
    </router-link>
      {{ transion.name }}
      {{ transion.email }}

    </div>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    data(){
      return {
        transions:null,
      }
    },
    created(){
      // fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      //   .then((response ) => response.json())
      //   .then((data) => (this.transions= data));
      axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then(response => (this.transions= response.data))
      
    }
  }
</script>
