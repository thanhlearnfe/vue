<template>
  <el-header>
    <div class="title">
      {{title}} <el-icon><KnifeFork /></el-icon>
    </div>
    <div class="account">
      <div class="demo-type">
        <div>
           <el-button type="primary" plain @click="openModel">Đăng nhập</el-button>
          <el-avatar> user </el-avatar>
        </div>
      </div>
    </div>
  </el-header>
  <Form :isShow="isShow" @isShow="updateModel"/>
</template>
<script>
import Form from './Form.vue'
  export default {
    props:{
      title: String,
    },
    data(){
      return{
        isShow:null
      }
    },  
    methods:{
      openModel(){
        this.isShow = true;
      },
      updateModel(e){
        this.isShow = false;
      }
    },
    components:{
      Form
     },
  }
</script>
<style scoped>
header.el-header {
  display: flex;
  justify-content: space-between;
}

</style>
