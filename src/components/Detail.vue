<template>
  <div v-if="transtion">
    <h1>{{ transtion.id }}</h1>
    <h1>{{ transtion.name }}</h1>
    <h1>{{ transtion.email }}</h1>
  </div>
</template>

<script>
import axios from "axios";

  export default {
    computed:{
      transtion(){
        return this.$store.state.transtion;
      }
    },
    created(){
      this.$store.dispatch("axoiData",{id:this.$route.params.id})
    }
  }
</script>
