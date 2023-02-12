<template>
  <RouterView />
</template>
<style>
.d-block{
    display: block !important;
    margin-top:20px;
}
.scroll{
  height: calc(100vh - 70px);
  overflow: scroll !important;
}
.scroll::-webkit-scrollbar { 
  width: 0 !important;
  display: none; 
}
</style>
