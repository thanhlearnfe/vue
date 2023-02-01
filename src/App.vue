<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <img style="width: 100%" src="./assets/imgs/banner.png" fit="cover" />
      </el-header>
      <el-main>
        <input
          type="search"
          class="search"
          placeholder="Tìm kiếm sản phẩm"
          @keyup="search(this)"
          v-model="keySearch"
        />
        <el-button style="margin-left:30px" type="primary" @click="openForm = true" >Login</el-button>
        <el-button style="margin-left:30px" type="primary"><RouterLink to="/">Home  </RouterLink></el-button>
        <el-button style="margin-left:30px" type="primary"  ><RouterLink to="/cart">Cart</RouterLink></el-button>

        
        <Form :isShow="openForm" @isShow="update" />
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>
<script >
import { RouterLink, RouterView } from 'vue-router'
import Form from "./components/Form.vue";

export default {
  data() {
    return {
      keySearch:'',
      openForm:false,
    };
  },
  methods: {
    search() {
      let itemNames = document.querySelectorAll(".item-name");
      let items = document.querySelectorAll(".item");
      const key = this.keySearch.toLowerCase();
      // console.log(key);
      
      itemNames.forEach(function(e,index){
        // console.log((e.innerText.toLowerCase()));
        // console.log(key.toLowerCase());
        if(e.innerText.toLowerCase().includes(key.toLowerCase())){
            items[index].classList.remove('hide');
        }else{
          items[index].classList.add('hide');
        }
      })
    },
    update(e) {
      this.openForm = e;
    }
   
  },
 
  components: {
    // Product,
    Form
  },
};
</script>

<style >
a{
  text-decoration: none;
  color: #fff;
}
.el-header {
  height: inherit;
  width: 100%;
  padding: 0;
}
.item {
  text-align: center;
  margin-bottom: 60px;
  width: 80%;
  border: 1px solid #ccc;
  padding-bottom: 10px;
}
.item.hide{
  display: none;
}
.btn-add-cart {
  border-radius: 20px;
  height: 40px;
}
input.search {
  width: 800px;
  height: 40px;
  border-radius: 9px;
}
/* .demo-ruleForm{
  display: none;
}
.demo-ruleForm.active{
  display: block; */
/* } */
</style>
