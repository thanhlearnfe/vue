<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <!-- <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column> -->
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="">
      <img src="/src/assets/imgs/item2.jpg" width="100"/>
    </el-table-column>
    <el-table-column
      prop="coin"
      label="Coin">
    </el-table-column>
    <el-table-column
      prop="quantily"
      label="quantily">
    </el-table-column>
    <el-table-column
      prop="description"
      label="description">
    </el-table-column>
    <el-table-column
      prop="total"
      label="Total">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        test : this.$route.query,
        tableData : [
        {
          name: 'Eline',
          coin:300000,
          quantily:2,
          total:600000,
          description: 'Mo ta 1 ',
          url:'/src/assets/imgs/item2.jpg'
        },
        {
          name: 'Omasd',
          coin:400000,
          quantily:2,
          total:800000,
          description: 'Mo ta 2 ',
          url:'/src/assets/imgs/item2.jpg'
        },
        {
          name: 'Shila',
          coin:500000,
          quantily:1,
          total:500000,
          description: 'Mo ta 3 ',
          url:'/src/assets/imgs/item2.jpg'
        },
        {
          name: 'Bralo',
          coin:600000,
          quantily:3,
          total:1800000,
          description: 'Mo ta 4 ',
          url:'/src/assets/imgs/item2.jpg'
        },
        {
          name: 'Holase',
          coin:700000,
          quantily:1,
          total:700000,
          description: 'Mo ta 5 ',
          url:'/src/assets/imgs/item2.jpg'
        },
       
        ]
      }
    },
    methods: {
        // console.log(1234567)
    },
  }
</script>