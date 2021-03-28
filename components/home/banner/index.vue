<template>
  <div class="tz-banner">

    <!--    top-->
    <div class="content-center tz-flex-wrap tz-banner-top">

      <!--  big-img    top-left-->
      <div class="tz-banner-wrap border-radius-10">

        <el-carousel trigger="click" height="100%">
          <el-carousel-item v-for="(item,index) in banners" :key="index">
            <a href="#">
              <img :src="item" alt="">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>

      <!--      top-right-->
      <div class="tz-banner-login border-radius-6">
        <!--        avatar-->
        <div class="tz-banner-avatar">

        </div>
        <!--        welcome-->
        <p class="tz-userinfo-txt">欢迎来到潭州课堂</p>
        <!--        login/register-->
        <p class="tz-userinfo-btn">
          <span>登录</span>/
          <span>注册</span>
        </p>
        <!--        app download-->
        <div class="tz-userinfo-app">
          <a href="#">
            <img src="https://res.shiguangkey.com/file/2020/4/15/15869291501996781643614.png" alt="">
          </a>
        </div>
      </div>
    </div>

    <!-- btm-->
    <div class="tz-banner-extension">
      <ul class="content-center tz-flex-wrap tz-banner-extension-list">
        <li v-for="(item,index) in extension"
            :key="index"
            class="border-radius-6 tz-banner-extension-item">
          <a href="#">
            <img :src="item" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
  export default {
    name: "HomeBanner",
    data: function () {
      return {
        extension: [
          "images/extension1.png",
          "images/extension2.png",
          "images/extension3.png",
          "images/extension4.png",
          "images/extension5.png"
        ],
        banners: [
          "images/banner1.jpg",
          "images/banner2.jpg",
          "images/banner3.jpg",
          "images/banner4.jpg",
          "images/banner5.jpg",
          "images/banner6.jpg",
          "images/banner7.jpg"
        ]
      }
    }
  }
</script>

<style lang="less" scoped>

  @import "../assets/banner.less";


</style>
