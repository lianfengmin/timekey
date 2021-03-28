<template>
  <div class="tz-active-wrap content-center">
    <!--    头部-->
    <common-abstract title="限时抢购" />

    <!--    倒计时-->
    <ul class="timer-list tz-flex-wrap border-radius-6">
      <li
        class="tz-flex-wrap"
        @click="handleActive(-1, true)"
        :class="{ checked: isActive == -1 }"
      >
        <div class="time_spiking">
          <p class="title">
            <svg
              v-show="isActive == -1"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="icon-spike"
              data-v-d6678290=""
              style=""
            >
              <desc data-v-d6678290="">Created with Sketch.</desc>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                data-v-d6678290=""
              >
                <g
                  id="电商首页/控件"
                  transform="translate(-680.000000, -4916.000000)"
                  data-v-d6678290=""
                >
                  <g
                    id="秒杀"
                    transform="translate(680.000000, 4916.000000)"
                    data-v-d6678290=""
                  >
                    <g id="编组-54" data-v-d6678290="">
                      <g id="编组-55" data-v-d6678290="">
                        <rect
                          id="矩形"
                          fill="#FE5C4B"
                          opacity="0"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          data-v-d6678290=""
                        ></rect>
                        <path
                          d="M15.4560742,16.4926738 C17.1891922,14.9441462 18.1788457,12.7294217 18.1762415,10.4052813 C18.1762415,5.88921484 14.5133594,2.22769141 9.99864648,2.22769141 C5.48395117,2.22769141 1.81925798,5.89056836 1.81925798,10.4052813 C1.81662635,12.640931 2.73106544,14.7798197 4.34908984,16.3225879 L3.235375,17.6500352 C2.94584888,17.996628 2.99153786,18.5121822 3.33750391,18.802457 C3.68410141,19.0919789 4.1996561,19.046282 4.48992578,18.7003105 L5.64053711,17.3278457 C6.94522006,18.1500858 8.45648273,18.5851328 9.99864648,18.5824141 C11.5079043,18.5824141 12.9226621,18.1742852 14.1367129,17.4583457 L15.0780918,18.6724141 C15.2400742,18.8816465 15.4826172,18.989207 15.7251602,18.989207 C16.0370779,18.9894235 16.3219443,18.8121526 16.4595242,18.532216 C16.5971041,18.2522795 16.5634254,17.9184538 16.3727031,17.6716387 L15.4560742,16.4926738 L15.4560742,16.4926738 Z M8.36069922,15.312373 L9.17878516,11.2233496 L6.72635547,11.2233496 L11.6329902,5.49862891 L10.8149219,9.58719531 L13.2673516,9.58719531 L8.36069922,15.312373 Z M1.81926367,5.59896505 C1.52344991,5.59917269 1.25059306,5.43958355 1.10576158,5.18165009 C0.960930101,4.92371663 0.966713495,4.607669 1.12088477,4.35520703 C1.98633251,2.94004235 3.24069059,1.80377861 4.73426172,1.08201953 C4.92935473,0.987510311 5.15402878,0.974486115 5.35873555,1.04581923 C5.56344232,1.11715234 5.73136704,1.2669834 5.82547656,1.46226953 C5.91984369,1.65731058 5.93279498,1.88186785 5.86147687,2.08646476 C5.79015877,2.29106166 5.64042334,2.45890982 5.44526172,2.55302734 C4.23402197,3.13737369 3.21693092,4.05853038 2.51583203,5.20614648 C2.36841113,5.44994136 2.10414746,5.59879806 1.81924609,5.59852539 L1.81926367,5.59896505 Z M18.1744434,5.59898287 C17.8892865,5.60015916 17.6243192,5.45196954 17.4760645,5.20837891 C16.7756477,4.0608658 15.7591597,3.13969212 14.5484453,2.55527734 C14.3532837,2.46115982 14.2035483,2.29331166 14.1322302,2.08871476 C14.0609121,1.88411785 14.0738633,1.65956058 14.1682305,1.46451953 C14.2623417,1.26935171 14.4301871,1.11960851 14.6347847,1.04828359 C14.8393822,0.976958675 15.0639429,0.989904816 15.2589883,1.08426953 C16.751768,1.80612015 18.0060269,2.94121698 18.8728223,4.35476758 C19.0272351,4.60725292 19.0331501,4.9234727 18.8882877,5.1815561 C18.7434252,5.4396395 18.4704029,5.59929152 18.1744434,5.59898287 L18.1744434,5.59898287 Z"
                          id="形状"
                          fill="#FFFFFF"
                          fill-rule="nonzero"
                          data-v-d6678290=""
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              v-show="isActive !== -1"
              width="20px"
              height="20px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="icon-spike"
              style=""
              data-v-d6678290=""
            >
              <desc data-v-d6678290="">Created with Sketch.</desc>
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                data-v-d6678290=""
              >
                <g
                  id="电商首页/控件"
                  transform="translate(-645.000000, -4546.000000)"
                  data-v-d6678290=""
                >
                  <g
                    id="秒杀"
                    transform="translate(645.000000, 4546.000000)"
                    data-v-d6678290=""
                  >
                    <g id="编组-53" data-v-d6678290="">
                      <rect
                        id="矩形"
                        fill="#D8D8D8"
                        opacity="0"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        data-v-d6678290=""
                      ></rect>
                      <path
                        d="M15.4550141,16.4923139 C17.1881321,14.9437862 18.1777856,12.7290618 18.1751814,10.4049213 C18.1751814,5.88885491 14.5122993,2.22733147 9.99758638,2.22733147 C5.48289106,2.22733147 1.81819787,5.89020842 1.81819787,10.4049213 C1.81556624,12.6405711 2.73000534,14.7794597 4.34802973,16.322228 L3.23431489,17.6496752 C2.94478877,17.9962681 2.99047775,18.5118223 3.3364438,18.8020971 C3.6830413,19.091619 4.19859599,19.0459221 4.48886567,18.6999506 L5.639477,17.3274858 C6.94415995,18.1497259 8.45542263,18.5847729 9.99758638,18.5820541 C11.5068442,18.5820541 12.921602,18.1739252 14.1356528,17.4579858 L15.0770317,18.6720541 C15.2390141,18.8812865 15.4815571,18.9888471 15.7241,18.9888471 C16.0360177,18.9890636 16.3208842,18.8117926 16.4584641,18.5318561 C16.596044,18.2519196 16.5623653,17.9180939 16.371643,17.6712787 L15.4550141,16.4923139 L15.4550141,16.4923139 Z M8.35963911,15.3120131 L9.17772505,11.2229897 L6.72529536,11.2229897 L11.6319301,5.49826897 L10.8138618,9.58683538 L13.2662915,9.58683538 L8.35963911,15.3120131 Z M1.81820356,5.59860511 C1.5223898,5.59881275 1.24953295,5.43922361 1.10470147,5.18129015 C0.959869991,4.9233567 0.965653386,4.60730907 1.11982466,4.3548471 C1.9852724,2.93968241 3.23963048,1.80341868 4.73320161,1.0816596 C4.92829462,0.987150377 5.15296867,0.974126181 5.35767544,1.04545929 C5.56238221,1.1167924 5.73030694,1.26662347 5.82441645,1.4619096 C5.91878358,1.65695065 5.93173487,1.88150792 5.86041676,2.08610482 C5.78909866,2.29070173 5.63936323,2.45854989 5.44420161,2.55266741 C4.23296187,3.13701376 3.21587081,4.05817045 2.51477192,5.20578655 C2.36735102,5.44958142 2.10308735,5.59843813 1.81818598,5.59816546 L1.81820356,5.59860511 Z M18.1733833,5.59862294 C17.8882264,5.59979922 17.6232591,5.4516096 17.4750043,5.20801897 C16.7745875,4.06050587 15.7580996,3.13933218 14.5473852,2.55491741 C14.3522236,2.46079989 14.2024882,2.29295173 14.1311701,2.08835482 C14.0598519,1.88375792 14.0728032,1.65920065 14.1671704,1.4641596 C14.2612815,1.26899177 14.429127,1.11924858 14.6337245,1.04792366 C14.8383221,0.976598741 15.0628828,0.989544882 15.2579282,1.0839096 C16.7507078,1.80576021 18.0049668,2.94085704 18.8717622,4.35440764 C19.026175,4.60689298 19.03209,4.92311276 18.8872276,5.18119616 C18.7423651,5.43927956 18.4693428,5.59893159 18.1733833,5.59862294 L18.1733833,5.59862294 Z"
                        id="形状"
                        fill="#FE5C4B"
                        fill-rule="nonzero"
                        data-v-d6678290=""
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <span>抢购中</span>
          </p>
          <p class="time">
            <label>距结束</label>
            <span>{{ activitData.hours }}</span>
            <em>:</em>
            <span>{{ activitData.minutes }}</span>
            <em>:</em>
            <span>{{ activitData.seconds }}</span>
          </p>
        </div>
      </li>
      <li
        class=""
        v-for="(item, index) in timeList"
        :key="index"
        @click="handleActive(index, item.today)"
        :class="{ checked: isActive == index }"
      >
        <div class="time_comming">
          <label>{{ item && item.today ? "即将开始" : "明天" }}</label>
          <span>{{ item && item.time }}</span>
        </div>
      </li>
    </ul>

    <!--    活动列表-->
    <div class="active-list tz-flex-wrap">
      <commonCard v-for="(item, index) in reqInfo" :key="index" :info="item">
      </commonCard>
    </div>
  </div>
</template>
<script>
import { getActiveCourse } from "~/api/home";

export default {
  name: "Active",
  data() {
    return {
      reqInfo: {},
      activitData: {
        //倒计时初始时间
        hours: `00`,
        minutes: `00`,
        seconds: `00`,
      },
      activityId:599,
      activityRulesId: 599, // 活动id(接口id)
      isActivity: true, // 是不是活动时间
      isActive: -1, // 当前激活的li
      timeList: [], // 更加当前时间过滤后的数据
      isToday: true, //是不是今天的活动
      activityHour: undefined, //活动开始时间
      currentHour: undefined, //现在小时
      currentTime: undefined, //现在的时间（秒）
      timer: null, //倒计时定时器
      timerId: null, //每隔一段时间获取后端数据 更新视图
      timeNode: [
        // 完整的数据
        {
          today: true,
          hours: 0,
          time: "00:00",
        },
        {
          today: true,
          hours: 12,
          time: "12:00",
        },
        {
          today: true,
          hours: 18,
          time: "18:00",
        },
        {
          today: false,
          hours: 24,
          time: "00:00",
        },
        {
          today: false,
          hours: 12,
          time: "12:00",
        },
        {
          today: false,
          hours: 18,
          time: "18:00",
        },
      ],
    };
  },
  methods: {
    async getInfo() {
      //访问接口获取数据

      let activityRulesId = this.activityRulesId;

      try {
        //调用接口获取数据
        let {
          courseList,
          localDateTime,
          activityStartTime,
          activityEndTime,
        } = await getActiveCourse({ activityRulesId }); //获取时间

        if (!courseList) {
          this.$message.error("数据请求失败");
        }

        //只保留当前时间段活动的 时间信息 来设置倒计时
        if (this.isActivity && this.isActive === -1) {
          //获取当前活动结束的时间 小时
          this.activityHour = new Date(activityEndTime).getHours();
          //获取活动结束时间与现在时间差 （秒）
          this.currentTime = Math.floor(
            (activityEndTime - localDateTime) / 1000
          );
          //获取现在时间的小时数
          this.currentHour = new Date(localDateTime).getHours();

          this.isActivity = false;
        }

        //重整获取的数据
        this.reqInfo = courseList.map((item) => {
          return {
            ...item,
            courseImage: item.courseCoverImage,
            titleTop: item.courseName,
            lowPrice: item.courseLowPrice.toFixed(2),
            originPrice: item.coursePrice.toFixed(2),
            isCurrent: this.isToday && this.isActive === -1, //判断是不是当天 并且是当前时间的活动
          };
        });
      } catch (e) {
        console.log(e);
      }
    },
    handleActive(index, result) {
      //点击切换不同时间的活动 重新访问接口 得到对应的时间活动
      this.isActive = index;
      this.isToday = result;
      this.activityRulesId = this.activityId + index + 1;
      this.getInfo();
    },
    initTime() {
      if (this.currentTime <= 0) {
        this.currentTime = undefined;
        clearInterval(this.timer);
      }
      //初始化时间格式
      let hours = parseInt(this.currentTime / 3600);
      let minutes = parseInt(this.currentTime / 60) % 60;
      let seconds = parseInt(this.currentTime % 60);
      this.activitData.hours = hours >= 10 ? hours : "0" + hours;
      this.activitData.minutes = minutes >= 10 ? minutes : "0" + minutes;
      this.activitData.seconds = seconds >= 10 ? seconds : "0" + seconds;
    },
    realTime() {
      let currentTime = new Date();
      let hour = currentTime.getHours();
      //判断当前时间是不是在初始化时请求595接口返回的 活动时间内
      //若当前时间 已过了595接口活动时间 则重新请求接口 并再一次判断
      if (this.activityHour < hour && this.isToday) {
        this.activityRulesId++;
        this.isActivity = true;
        this.getInfo();
      } else {
        //如果现在的时间 正式请求的接口活动时间内
        //则改变初始接口，并做倒计时
        this.activityId = this.activityRulesId;
        this.timer = setInterval(() => {
          this.currentTime -= 1;
        }, 1000);
      }
    },
  },
  created() {
    //调用接口获取当前时间
    this.getInfo();
  },

  beforeMount() {},

  updated() {},

  beforeDestroy() {
    clearInterval(this.timer);
  },

  watch: {
    activityHour() {
      this.timeList = this.timeNode.filter(item => {
        return !item.today || item.hours >= this.activityHour;
      });
       this.realTime();
    },
    currentTime() {
      this.initTime();
    },
  },

  computed: {},
};
</script>
<style lang="less" scoped>
@import "../assets/active.less";

.big {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background-color: red;
  overflow: hidden;
}

.list {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  background-color: #fff;
}

.left {
  display: inline-block;
  width: 100px;
  height: 100%;
  flex-shrink: 0;
  background-color: blue;
  margin-right: 20px;
}

.small {
  flex-shrink: 0;
  width: 90px;
  height: 130px;
  background-color: green;
}
</style>
