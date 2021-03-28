<template>
  <div class="study-cube-container">

    <common-abstract
      title="乐学魔方">
      <p slot="subtitle">新手入门带你玩转学习</p>
    </common-abstract>

    <div class="cube-list content-center tz-flex-wrap">
      <div class="course-container-left tz-flex-wrap">
        <div class="cube-item border-radius-6"
             v-for="item in cubeLeftData"
             :key="item.id">
          <a
            :href="item.jumpUrl"
            target="_blank">

            <img :src="item.cover" alt="">

          </a>
        </div>
      </div>
      <div class="course-container-right tz-flex-wrap">
        <div class="cube-item border-radius-6"
             v-for="item in cubeRightData"
             :key="item.id">
          <a
            :href="item.jumpUrl"
            target="_blank">

            <img :src="item.cover" alt="">

          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { happyLearningList } from "~/api/home.js"

  export default {
    name: "Cube",
    data: function () {
      return {
        cubeLeftData: [],
        cubeRightData: [],
      }
    },
    methods: {
      async getInfo() {
        try {
          let {happyHorizontalList, happyVerticalList} = await happyLearningList({num: 10})
          this.cubeRightData = happyHorizontalList
          this.cubeLeftData = happyVerticalList
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
  .study-cube-container {
    padding: 50px 0;

    .cube-list {
      justify-content: space-between;

      a {
        border-radius: 6px;
        overflow: hidden;
        transition: all 0.2s;

        img {
          width: 100%;
          height: 100%;
        }
      }


      .course-container-left {
        width: 550px;
        justify-content: space-between;
        flex-wrap: nowrap;


        .cube-item {
          width: 265px;
          height: 331px;

          a {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }

      }


      .course-container-right {
        width: 650px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;


        .cube-item {
          height: 155px;
          width: 315px;

          a {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .cube-item:hover a {
      transform: translateY(-8px);
      box-shadow: 0 5px 6px 1px #eee;
    }
  }

  @media screen and (max-width: 1440px) {
    .study-cube-container {
      padding: 45px 0;

      .course-container-left {
        width: 450px !important;

        .cube-item {
          height: 266px !important;
          width: 217px !important;
        }
      }

      .course-container-right {
        width: 535px !important;
        height: 266px !important;

        .cube-item {
          height: 125px !important;
          width: 260px !important;
        }
      }
    }

  }


</style>
