<template>
  <div class="content-center recommend-content">
    <!--    头部-->
    <common-abstract
      title="为你推荐">
      <p slot="subtitle">精准提升你的专业技能</p>
      <p slot="more" class="intention-set">设置意向 ></p>
    </common-abstract>
    <!--    内容列表-->
    <div class="recommend-list tz-flex-wrap">
      <common-card
        v-for="(item,index) in recommendData"
        :key="item.courseId"
        :info="item">

      </common-card>
    </div>
  </div>
</template>

<script>
  import { remmendList } from "~/api/home.js"

  export default {
    name: "Recommend",
    data: function () {
      return {
        recommendData: [],
      }
    },
    methods: {
      async getInfo() {
        try {
          let {results} = await remmendList({num: 10, uuid: new Date()})
          this.recommendData = results.map(item => {
            return {
              ...item,
              courseImage: "https://res.shiguangkey.com/" + item.cover,
              titleTop: item.title,
              lowPrice: item.price && item.price.toFixed(2),
              isRecommend: item.applyNumNewType == 1
            }
          })
        } catch (e) {
          console.log(e)
        }
      }
    },
    created() {
      this.getInfo()
    }
  }
</script>

<style lang="less" scoped>
  /*意向设置的样式*/
  .intention-set {
    height: 32px;
    width: 98px;
    border-radius: 16px;
    background-color: #f6f8fa;
    line-height: 32px;
    font-size: 14px;
    color: #a1a1a3;
    text-align: center;
    margin-left: 20px;
    cursor: pointer;
    flex: none;

    &:hover {
      background-color: #3073f4;
      color: #fff;
    }
  }

  /*主体样式*/
  .recommend-content {
    margin-bottom: 30px;

    .recommend-list {
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 1440px) {
    .recommend-content {
      margin-bottom: 25px;
    }

  }
</style>
