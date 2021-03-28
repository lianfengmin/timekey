<template>
  <client-only>
    <div class="big-coffee">
      <common-abstract
        title="名人讲堂">
        <p slot="subtitle">名人讲堂 即学即用</p>
      </common-abstract>
      <div class="swiper-container coffee-content content-center"
           @mouseenter="on_in" @mouseleave="on_out">
        <template>
          <swiper
            v-if="coffeeInfo.length>1"
            ref="mySwiper"
            :options="swiperOptions"
            class="tz-flex-wrap">

            <swiper-slide
              v-for="item in coffeeInfo"
              :key="item.id"
              class="advance-item">
              <a :href="/course/+item.courseId">
                <img :src="item.cover" alt="" class="big-img">
                <div class="info-more">
                  <p class="name-title">{{item.title}}</p>
                  <p class="info-honor">{{item.honor}}</p>
                  <p class="info-introduce">{{item.introduce}}</p>
                  <div class="course-card tz-flex-wrap">
                    <img :src="item.bigCourseCover" alt="">
                    <div class="card-info">
                      <p class="course-title">{{item.courseTitle}}</p>
                      <p class="course-price">¥{{item.bigPrice}}</p>
                    </div>

                  </div>
                </div>
              </a>

            </swiper-slide>

          </swiper>
        </template>
        <div class="swiper-button-next">
          <svg data-v-8ed3f028="" width="22px" height="22px" viewBox="0 0 22 22" version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               class="swiper-button-next-arrow">
            <desc data-v-8ed3f028="">Created with Sketch.</desc>
            <g data-v-8ed3f028="" id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g data-v-8ed3f028="" id="电商首页/控件" transform="translate(-173.000000, -4562.000000)" fill="#FFFFFF"
                 fill-rule="nonzero">
                <g data-v-8ed3f028="" id="编组-6"
                   transform="translate(181.000000, 4573.000000) scale(-1, 1) translate(-181.000000, -4573.000000) translate(161.000000, 4550.000000)">
                  <g data-v-8ed3f028="" id="编组-31" transform="translate(6.000000, 12.000000)">
                    <path data-v-8ed3f028=""
                          d="M19.0533573,6.99857549 C19.6048553,6.96910707 20.0280439,6.49814073 19.9985755,5.94664272 C19.9691071,5.3951447 19.4981407,4.9719561 18.9466427,5.00142451 L10.361435,5.46016137 C9.33449268,5.45873685 8.45873685,6.33449268 8.45873685,7.41479225 L8.00142451,15.9466427 C7.9719561,16.4981407 8.3951447,16.9691071 8.94664272,16.9985755 C9.49814073,17.0280439 9.96910707,16.6048553 9.99857549,16.0533573 L10.4560241,7.4565405 L19.0533573,6.99857549 Z"
                          id="路径"
                          transform="translate(14.000000, 11.000000) rotate(-45.000000) translate(-14.000000, -11.000000) "></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>

        </div>
        <div class="swiper-button-prev">
          <svg data-v-8ed3f028="" width="22px" height="22px" viewBox="0 0 22 22" version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               class="swiper-button-prev-arrow">
            <desc data-v-8ed3f028="">Created with Sketch.</desc>
            <g data-v-8ed3f028="" id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g data-v-8ed3f028="" id="电商首页/控件" transform="translate(-97.000000, -4562.000000)">
                <g data-v-8ed3f028="" id="编组-6" transform="translate(91.000000, 4550.000000)">
                  <g data-v-8ed3f028="" id="编组-27" transform="translate(6.000000, 12.000000)">
                    <g data-v-8ed3f028="" id="编组-30">
                      <rect data-v-8ed3f028="" id="矩形" fill="#D8D8D8" opacity="0" x="0" y="0" width="22"
                            height="22"></rect>
                      <path data-v-8ed3f028=""
                            d="M18.053383,6.99860117 C18.604881,6.96913276 19.0280696,6.49816642 18.9986012,5.9466684 C18.9691328,5.39517039 18.4981664,4.97198179 17.9466684,5.0014502 L9.36146066,5.46018706 C8.33451837,5.45876254 7.45876254,6.33451837 7.45876254,7.41481794 L7.0014502,15.9466684 C6.97198179,16.4981664 7.39517039,16.9691328 7.9466684,16.9986012 C8.49816642,17.0280696 8.96913276,16.604881 8.99860117,16.053383 L9.45604978,7.45656619 L18.053383,6.99860117 Z"
                            id="路径" fill-opacity="0.9" fill="#FFFFFF" fill-rule="nonzero"
                            transform="translate(13.000026, 11.000026) rotate(-45.000000) translate(-13.000026, -11.000026) "></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
  import Swiper from "swiper"

  let mySwiper = new Swiper()

  import { bigCoffeeList } from "~/api/home"

  export default {
    name: "BigCoffee",
    data() {
      return {
        swiperOptions: {
          initialSlide: 0,
          slidesPerView: 5,
          spaceBetween: 20,
          slidesPerGroup: 1,
          loop: true,
          speed: 500,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        coffeeInfo: [],
      }

    },
    computed: {
      mySwiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      async getBigCoffeeInfo() {
        try {
          let {results} = await bigCoffeeList({num: 10})
          this.coffeeInfo = results.map(item => {
            return {
              ...item,
              bigPrice: (+item.price).toFixed(2),
              bigCourseCover: "https://res.shiguangkey.com/" + item.courseCover
            }
          })

        } catch (e) {
          console.log(e)
        }
      },
      on_in(){
        this.mySwiper.autoplay.stop()
      },
      on_out(){
        this.mySwiper.autoplay.start()
      }
    },
    created() {
      this.getBigCoffeeInfo()
    },
    mounted() {

    }
  }
</script>

<style lang="less" scoped>
  .big-coffee {
    background-color: #f7f8fa;

    .swiper-container {
      .swiper-button-next,
      .swiper-button-prev {
        width: 40px;
        height: 46px;
        background: #303943;
        opacity: .4;
        line-height: 56px;
        text-align: center;
        outline: none;

        .swiper-button-next-arrow {
          width: 22px;
          height: 22px;
          opacity: .9;
          margin-left: 6px;
        }

        &:hover {
          opacity: .7;
        }
      }

      .swiper-button-next {
        border-radius: 50% 0 0 50%;
        right: 0;
      }

      .swiper-button-prev {
        left: 0;
        border-radius: 0 50% 50% 0;
      }

      .swiper-wrapper {
        justify-content: space-between;

        .advance-item {
          position: relative;
          width: 228px;
          height: 278px;
          border-radius: 6px;
          overflow: hidden;

          a {
            display: block;
            width: 100%;
            height: 100%;

            .info-more {
              position: absolute;
              top: 218px;
              width: 100%;
              height: 100%;
              font-size: 12px;
              text-align: center;
              background: rgba(46, 52, 67, .8);
              color: #fff;
              transform: translate3d(0, 0, 0);
              transition: .2s;

              .name-title {
                font-size: 14px;
                line-height: 19px;
                padding: 11px 14px 0 20px;
                transform: translate3d(0, 0, 0)
              }

              .info-honor {
                font-size: 12px;
                line-height: 16px;
                padding: 2px 14px 9px 20px;
                transform: translate3d(0, 0, 0)
              }

              .info-introduce {
                height: 102px;
                line-height: 22px;
                text-align: left;
                padding: 0 14px 0 20px;
                margin-bottom: 16px;
                transform: translate3d(0, 0, 0)
              }

              .course-card {
                position: relative;
                width: 200px;
                height: 64px;
                padding: 6px;
                background-color: #fff;
                margin: 0 auto;
                border-radius: 4px;
                transform: translate3d(0, 0, 0);

                img {
                  width: 88px;
                  height: 52px;
                  transform: translate3d(0, 0, 0)
                }

                .card-info {
                  margin-left: 4px;
                  text-align: left;
                  transform: translate3d(0, 0, 0);

                  .course-title {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    height: 32px;
                    line-height: 16px;
                    text-align: left;
                    color: #303943;
                    transform: translate3d(0, 0, 0)
                  }

                  .course-price {
                    margin-top: 2px;
                    color: #ff433d;
                    font-size: 14px;
                    line-height: 19px;
                    transform: translate3d(0, 0, 0)

                  }
                }
              }
            }
          }

          &:hover {
            .big-img {
              filter: blur(15px);
            }

            .info-more {
              transform: translateY(-218px);
            }

            .name-title {
              margin-top: 18px;
              font-size: 16px !important;
              font-weight: 700;
            }

            .info-honor {
              padding-top: 7px !important;
            }


          }


        }


      }
    }
  }
</style>
