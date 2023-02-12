<template>
  <el-main class="scroll">
    <el-input
      v-model="searchQuery"
      class="w-50 m-2"
      size="large"
      placeholder="Tìm kiếm sản phẩm"
      :prefix-icon="Search"
    />
    <el-row>
      <el-col
        v-for="(drink, index) in data"
        :key="index"
        :span="5"
        :offset="index % 4 != 0 ? 1 : 0"
        class="item"
        v-show="isTyping"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img :src="drink.image" class="image" />
          <div style="padding: 14px">
            <h3 class="item-name">{{ drink.name }}</h3>
            <h3>{{ drink.price }}</h3>

            <div class="bottom">
              <el-rate
                v-model="rate"
                disabled
                show-score
                text-color="#ff9900"
              />
              <el-button type="primary" round @click="addItem(drink)"
                ><el-icon><ShoppingTrolley /></el-icon> Thêm sản phẩm</el-button
              >
              <el-button type="info" round
                ><el-icon><View /></el-icon
                ><RouterLink :to="{ name: 'detail', params: { id: drink.id } }"
                  >Xem sản phẩm
                </RouterLink>
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
import { Search } from "@element-plus/icons-vue";
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      data: [],
      rate: 3.8,
      searchQuery: "",
      isTyping: true,
      Search,
    };
  },
  computed: {
    chechData() {
      return this.data.length > 0 ? "Yes" : "No";
    },
  },
  created() {
    this.axios.get("http://localhost:3000/drink/").then((response) => {
      this.data = response.data;
    });
  },
  methods: {
    addItem(e) {
      ElNotification({
        title: "Success",
        message: "Thêm vào giỏ thành công",
        type: "success",
      });
      this.axios.post("http://localhost:3000/cart/",{
        "type_prd": e.type_prd,
        "type": e.type,
        "name": e.name,
        "adress": e.adress,
        "price": e.price,
        "image": e.image
        } )
        .then((response) => {
          console.log(response);
        });
    },
  },
  watch: {
    searchQuery: function (query) {
      setTimeout(function () {
        let itemNames = document.querySelectorAll(".item-name");
        let items = document.querySelectorAll(".item");
        const key = query.toLowerCase();

        itemNames.forEach(function (e, index) {
          if (e.innerText.toLowerCase().includes(key)) {
            items[index].classList.remove("hide");
          } else {
            items[index].classList.add("hide");
          }
        });
      }, 500);
    },
  },
  mounted() {
    // console.log(this.$refs);
  },
};
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}
.el-col {
  margin-bottom: 20px;
}
i.el-icon {
  margin-right: 15px;
}
.el-button.is-round {
  display: block;
  margin-top: 10px;
}
.el-button + .el-button {
  margin-left: 0px !important;
}
.el-button--info {
  --el-button-hover-bg-color: #ef6327;
}
.el-input {
  margin-bottom: 20px;
  padding-right: 64px;
}
.item.hide {
  display: none;
}
</style>
