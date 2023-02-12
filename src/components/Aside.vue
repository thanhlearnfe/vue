<template>
        <el-aside width="250px">
          <el-scrollbar>
        <el-menu :default-openeds="['1']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Menu /></el-icon>Navigator  
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><RouterLink to="/"><el-icon><House /></el-icon> Trang chủ </RouterLink></el-menu-item>
              <el-menu-item index="1-2"><el-icon><Watermelon /></el-icon> Sản Phẩm</el-menu-item>
              <el-menu-item index="1-3"><RouterLink to="/cart"><el-icon><ShoppingTrolley /></el-icon> Giỏ hàng</RouterLink></el-menu-item>
              <el-menu-item index="1-4"><el-icon><Present /></el-icon> Thanh Toán</el-menu-item>

            </el-menu-item-group>
          
           
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
        </el-aside>
</template>
<script>
</script>