

<template>
  <!-- <h1 style="text-align: center">Sản phẩm</h1> -->

  <el-row>
    <el-col
      v-for="(item, i) in items"
      :key="i"
      :span="6"
      :xs="{ span: 12 }"
      class="item"
    >
      <div>
        <img style="width: 100%" :src="item.url" alt="" />
        <p class="item-name">{{ item.name }}</p>
        <p class="">{{ item.coin }}</p>
        <el-button
          type="primary"
          class="btn-show-cart"
          @click="detailCart(item.id)"
          >Xem sản phẩm</el-button
        >
        <el-button type="danger" class="btn-add-cart"
          >Thêm vào giỏ hàng</el-button
        >
      </div>
    </el-col>
  </el-row>
</template>

<script >
export default {
  data() {
    return {
      openForm: false,
      items: [
        {
          id: 0,
          name: "Eline",
          coin: 300000,
          description: "Mo ta 1 ",
          url: "/src/assets/imgs/item2.jpg",
        },
        {
          id: 1,
          name: "Omasd",
          coin: 400000,
          description: "Mo ta 2 ",
          url: "/src/assets/imgs/item2.jpg",
        },
        {
          id: 2,
          name: "Shila",
          coin: 500000,
          description: "Mo ta 3 ",
          url: "/src/assets/imgs/item2.jpg",
        },
        {
          id: 3,
          name: "Bralo",
          coin: 600000,
          description: "Mo ta 4 ",
          url: "/src/assets/imgs/item2.jpg",
        },
        {
          id: 4,
          name: "Holase",
          coin: 700000,
          description: "Mo ta 5 ",
          url: "/src/assets/imgs/item2.jpg",
        },
      ],
    };
  },
  methods: {
    update(e) {
      this.openForm = e;
    },
    detailCart(e) {
      console.log(this.items[e - 1]);
      this.$router.push({path: '/detail', query: { id:e}});
    },
  },
};
</script>
