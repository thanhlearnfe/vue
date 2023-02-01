

<template>
  <div>
    <h1>{{items[id].name}}</h1>
    <p>Money :{{items[id].coin  }} </p>
    <p>description :{{items[id].description  }} </p>
    <img :src=items[id].url  width="500"/>

  </div>
</template>

<script >
export default {
  data() {
    return {
      id:this.$route.query.id,
      items: [
        {
          id: 1,
          name: "Eline",
          coin: 300000,
          description: "Mo ta 1 ",
          url: "/src/assets/imgs/item2.jpg",
        },
        {
          id: 2,
          name: "Omasd",
          coin: 400000,
          description: "Mo ta 2 ",
          url: "/src/assets/imgs/item2.jpg",
        },
        {
          id: 3,
          name: "Shila",
          coin: 500000,
          description: "Mo ta 3 ",
          url: "/src/assets/imgs/item2.jpg",
        },
        {
          id: 4,
          name: "Bralo",
          coin: 600000,
          description: "Mo ta 4 ",
          url: "/src/assets/imgs/item2.jpg",
        },
        {
          id: 5,
          name: "Holase",
          coin: 700000,
          description: "Mo ta 5 ",
          url: "/src/assets/imgs/item2.jpg",
        },
      ],
    };
  },
  methods: {
  
  },
};
</script>
