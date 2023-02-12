
<template>
  <el-container class="main is-vertical">
      <Header  title="Bán Hàng"  />
      <el-container>
        <Aside />
        <Main />
      </el-container>
    </el-container>
</template>

<script>
import Main from '../components/Main.vue'
import Aside from '../components/Aside.vue'
import Header from '../components/Header.vue'

export default {
  components:{
    Main,Header,Aside
  }
}
</script>

<style >
body{
  margin: 0;
}
.main{
  height: 100vh;
  overflow: hidden;
}
.el-header{
  box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%) ;
  z-index: 1;
  padding-top: 10px !important;
}
.title {
    font-weight: 700;
    padding-top: 10px;
}
.el-aside{
  box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%) ;
}
.el-menu{
  border-right: transparent !important;
}
a {
    text-decoration: none;
    color: #000;
}
</style>
