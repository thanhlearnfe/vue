<template>
  <el-main>
    <el-row>
      <el-col :span="10">
        <img :src="product.image" class="image" />
      </el-col>

      <el-col :span="10" :offset="2">
        <h2>{{ product.name }}</h2>
        <p>Giá : {{ product.price }} 000 đồng</p>
        <el-rate v-model="rate" disabled show-score text-color="#ff9900" />
        <p>Địa chỉ : {{ product.adress }}</p>
        <el-input-number
          v-model="num"
          :min="1"
          :max="10"
          @change="handleChange"
        />
        <el-button type="primary" class="d-block" @click="addItem(product)"
          ><el-icon style="margin-right: 10px"><ShoppingTrolley /></el-icon>
          Thêm sản phẩm</el-button
        >
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { ElNotification } from "element-plus";

export default {
  data() {
    return {
      num: 1,
      rate: 3.8,
    };
  },
  computed: {
    product() {
      return this.$store.state.a.product;
    },
  },
  methods: {
    handleChange(e) {
      // console.log(e);
    },
    addItem(e) {
      this.axios
        .post("http://localhost:3000/cart/", {
          type_prd: e.type_prd,
          type: e.type,
          name: e.name,
          adress: e.adress,
          price: e.price,
          image: e.image,
          num:this.num,
          total:this.num*e.price
        })
        .then((response) => {
          ElNotification({
          title: "Success",
          message: "Thêm vào giỏ thành công",
          type: "success",
      });
        });
    },
  },
  created() {
    this.$store.dispatch("axoiData", { id: this.$route.params.id });
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
