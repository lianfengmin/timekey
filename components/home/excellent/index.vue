<template>
  <!--主页-->
  <div class="content-center">
    <CommonAbstract
      title="精品小课">
      <p slot="subtitle">
        小课充电引爆你的学习力
      </p>
      <a href="#" slot="more">
        查看更多 >
      </a>
    </CommonAbstract>
    <div class="excellent-course-content">
      <ul class="excellent-course-list tz-flex-wrap">
        <li v-for="(item,index) in courses"
            :key="item.courseId">
          <CommonCard :info="item"></CommonCard>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
  import { getQuality } from "~/api/home.js"

  export default {
    name: "Excellent",
    data: function () {
      return {
        courses: []
      }
    },
    methods: {
      async getInfo() {
        try {
          let data = await getQuality({num: 10})
          this.courses = data.results.map(item => {
            return {
              ...item,
              lowPrice: (+item.price).toFixed(2),
              courseImage: "https://res.shiguangkey.com/" + item.cover,
              titleTop: item.title
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
  .excellent-course-list {
    width: 100%;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
  }
</style>
