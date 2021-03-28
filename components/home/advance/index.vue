<template>
  <div class="advance-container">
    <!--    头部-->
    <CommonAbstract
      title="进阶体系">
      <p slot="subtitle">5大课程体系，系统化学习路径</p>
    </CommonAbstract>
    <div class="content-center advance-list-content tz-flex-wrap">
      <div v-for="(item) in advanceData"
           :key="item.id"
           class="advance-item">
        <a href="#">
          <div class="course-cover border-radius-6">
            <img :src="item.cover" alt="">
          </div>
          <div class="description">
            <h4 class="title">{{item.title}}</h4>
            <p class="subtitle ellipsis">
              {{item.subtitle}}
            </p>
          </div>
        </a>

      </div>
    </div>
  </div>
</template>


<script>
  import { advanceModuleList } from "~/api/home"

  export default {
    name: "Advance",
    data: function () {
      return {
        advanceData: []
      }
    },
    methods: {
      async getInfo() {
        try {
          let {results} = await advanceModuleList({num: 5})
          this.advanceData = results.map(item => {
            return {
              ...item
            }
          })
        } catch (e) {
          console.log(e)
        }
      }
    },
    created() {
      this.getInfo()
    },
  }
</script>

<style lang="less" scoped>
  @media screen and(max-width: 1440px) {
    .advance-container {
      padding: 45px 0;

      .advance-list-content {

        height: 248px !important;

        .advance-item {
          width: 188px !important;

          .course-cover {

            height: 229px !important;
          }

          .description {
            width: 165px !important;
            height: 55px !important;
          }
        }
      }

    }


  }

  .advance-container {
    padding: 50px 0;
    background-color: #f7f8fa;

    .advance-list-content {

      justify-content: space-between;
      height: 300px;

      .advance-item {
        position: relative;
        width: 228px;
        height: 100%;

        a {
          display: block;

          .course-cover {
            height: 278px;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              transition: all 0.2s;
            }
          }

          .description {
            position: absolute;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            left: 0;
            right: 0;
            bottom: 2px;
            height: 64px;
            width: 198px;
            margin: auto;
            background-color: #fff;
            border-radius: 4px;
            text-align: center;

            .title {
              font-size: 16px;
              line-height: 16px;
              height: 16px;
              color: #303943;
              margin-bottom: 8px;
            }

            .subtitle {
              width: 80%;
              display: inline-block;
              text-align: center;
              font-size: 12px;
              line-height: 12px;
              height: 12px;
              color: #a1a1a3;
            }
          }
        }

        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }


    }
  }

</style>
