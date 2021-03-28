<template>
  <!-- 通用card组件-->
  <div class="card-course">
    <a :href="/course/+info.courseId" class="course-content">
      <div class="card-img border-radius-6">
        <img :src="info.courseImage" alt="" width="100%">
<!--        <p v-if="info.nextStartTime">{{info.nextStartTime}}上课</p>-->
      </div>
      <div class="card-info">
        <p class="card-title ellipsis">{{info.titleTop}}</p>
        <div class="card-btm tz-flex-wrap">
          <p class="card-price">
            <span class="price-now" v-if="info.lowPrice">¥{{info.lowPrice}}</span>
            <span class="price-free" v-else>免费</span>
            <span class="price-origin" v-if="info.originPrice">¥{{info.originPrice}}</span>
          </p>

          <div
            v-if="info.activityRulesId"
            class="card-btn tz-flex-wrap">

            <p v-if="info.isCurrent" class="course-num tz-flex-wrap">
              {{info.stockNum ? "仅剩" : "已售馨"}}
              <span v-if="info.stockNum" style="font-weight: bold">
              {{info.stockNum}}门
                </span>
            </p>

            <p v-else>敬请期待</p>

          </div>
          <div v-else
               class="card-more"
               :class="{apply_hot:info.applyNumNewType==0}">
            <span v-if="info.isRecommend">
               {{info.applyNumNew+` 人在学`}}
            </span>
            <span v-else>
               {{(info.applyNumNewType==0)? info.applyNumNew :(info.applyNum)+(`人推荐`)}}
            </span>


          </div>
        </div>
      </div>

    </a>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      info: {
        type: Object,
        default: () => ({})
      }
    },
    created() {
    }
  }
</script>

<style lang="less" scoped>
  @media screen and (max-width: 1440px) {
    .card-course {
      width: 180px !important;

      .card-img {
        height: 103px !important;
      }
    }

  }

  .card-course {
    width: 228px;
    margin-bottom: 20px;
    cursor: pointer;

    .course-content {
      display: block;
      position: relative;
      width: 100%;
      transition: all .2s;

      .card-img {
        width: 100%;
        height: 137px;
        overflow: hidden;
        margin-bottom: 1px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .card-info {
        box-sizing: border-box !important;

        .card-title {
          font-size: 14px;
          color: #303943;
          line-height: 24px;
          margin-bottom: 4px;
          transform: translate3d(0, 0, 0);
        }

        .card-btm {
          justify-content: space-between;
          align-items: center;
          width: 100%;
          line-height: 21px;
          font-size: 14px;
          transform: translate3d(0, 0, 0);

          .card-price {
            .price-free {
              color: #21af08;
            }

            .price-now {
              color: #ff433d;
              font-size: 16px;
              margin-right: 5px;
            }

            .price-origin {
              color: #a1a1a3;
              font-size: 12px;
              text-decoration: line-through;

            }
          }

          .card-btn {
            justify-content: center;
            align-items: center;
            width: 66px;
            height: 26px;
            background: #ff4c46;
            border-radius: 14px;
            font-size: 12px;
            color: #fff;

            .course-num {
              justify-content: center;
            }
          }

          .card-more {
            color: #a1a1a3;
            font-size: 12px;
          }

          .apply_hot {
            color: #ff433d;
            font-size: 12px;
          }
        }
      }
    }

    &:hover {
      .course-content {
        transform: translateY(-10px);

        .card-title {
          color: #3073f4 !important;
        }
      }
    }

  }

</style>
