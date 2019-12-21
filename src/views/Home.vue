<template>
  <div class="home">
    <van-button type="default" size="large">默认按钮</van-button>
    <van-button round type="primary" size="normal">主要按钮</van-button>
    <van-button type="info" size="small">信息按钮</van-button>
    <van-button type="warning" size="mini">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
  }
};
</script>
