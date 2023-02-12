<template>
    <HomeView />

</template>

<script >
import HomeView from './views/HomeView.vue'
export default {
  components:{
    HomeView
  },
  unmounted(){
    //Dùng hủy bỏ thư viện thứ 3
  }
}
</script>



