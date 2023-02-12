<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    ref="tableRef"
    v-show="isShow"
  >
    <el-table-column label="Sản Phẩm" prop="name" />
    <el-table-column label="Giá" prop="price" />
    <el-table-column label="Số lượng" prop="num" />
    <el-table-column label="Tổng Tiền" prop="total" />

    <el-table-column align="center" width:20px>
      <template #default="scope">
        <img :src="scope.row.image" />
      </template>
    </el-table-column>

    <el-table-column align="center">
      <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row.id)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>Bạn có muốn xóa sản phẩm khỏi giỏ hàng?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Hủy</el-button>
        <el-button type="primary" @click="submitDelete"> Đồng Ý </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ElNotification } from "element-plus";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      idDelete: null,
      isShow: true,
    };
  },
  created() {
    this.axios.get("http://localhost:3000/cart").then((response) => {
      this.tableData = response.data;
    });
  },
  methods: {
    handleDelete(index) {
      this.dialogVisible = true;
      this.idDelete = index;
    },
    submitDelete() {
      this.dialogVisible = false;
      const id = this.idDelete;
      const vm = this;
      //   this.isShow = false;

      this.axios.delete(`http://localhost:3000/cart/${id}`).then((response) => {
        this.axios.get("http://localhost:3000/cart").then((response) => {
          vm.tableData = response.data;
          ElNotification({
          title: "Success",
          message: "Xóa khỏi giỏ hàng thành công",
          type: "error",
        });
        });
      });
    },
  },
};
</script>
<style scoped>
.el-table--fit {
  margin: 10px 20px;
}
img {
  width: 100px;
}
</style>
