<template>
  <!--主页-->
  <div class="container">
    <h1>潭州教育</h1>
    <!--主页头部导航-->
    <home-head></home-head>
    <!--    轮播区-->
    <home-banner></home-banner>
    <!--    限时抢购区-->
    <home-active></home-active>

    <!--    中间区-->
    <div class="tz-middle-content">
      <!--      精品小课-->
      <home-excellent></home-excellent>

      <!--      名师讲堂-->
      <home-bigCoffee></home-bigCoffee>
    </div>

    <!--    为你推荐-->
    <home-recommend></home-recommend>

    <!--    进阶体系-->
    <home-advance></home-advance>

    <!--    乐学魔方-->
    <home-cube></home-cube>


    <!--    底部-->
    <home-footer></home-footer>
  </div>


</template>

<script>
  export default {
    components: {}
  }
</script>

<style lang="less" scoped>
  .tz-middle-content {
    padding: 50px 0;
    background-color: #f7f8fa;
    margin-bottom: 50px;
  }

  @media screen  and (max-width: 1440px) {
    .tz-middle-content {
      padding: 45px 0;
      margin-bottom: 45px;
    }
  }
</style>
