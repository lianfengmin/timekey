<template>
  <!--  通用组件 title-->
  <div class="tz-title-wrap content-center tz-flex-wrap">
    <div class="tz-title-left tz-flex-wrap">
      <h3 class="tz-title">{{title}}</h3>
      <slot name="subtitle"></slot>
    </div>
   <slot name="more"></slot>
  </div>
</template>

<script>
  export default {
    name: "HomeAbstract",
    props: ["title"]
  }
</script>

<style lang="less" scoped>
  .tz-title-wrap {
    justify-content: space-between;
    align-items: center;
    height: 24px;
    margin-bottom: 30px;

    .tz-title-left {
      align-items: center;
      line-height: 24px;

      .tz-title {
        font-size: 28px;
        color: #303943;
      }

      p {
        font-size: 18px;
        color: #a1a1a3;
        margin-left: 12px;
      }
    }
    a{
      text-align: right;
      font-size: 14px;
      color: #a1a1a3;
      cursor: pointer;
      text-decoration: none;
      &:hover{
        color: #007aff;
      }
    }
  }
</style>
