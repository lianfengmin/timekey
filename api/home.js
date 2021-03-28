import api   from "./api"
import axios from "axios"

let {homeUrl} = api


axios.interceptors.response.use(res => {
    // if (res.data.status !== "0") {
    //   console.log("请求失败")
    //   return
    // }
    return res.data.data
  }
)

/**
 * 导航分类
 * @return promise 对象
 */
export function getCategory() {
  return axios.get(homeUrl.category)
}

/**
 * 活动分类
 * @return promise 对象
 */
export function getActiveCourse(data) {
  return axios.get(homeUrl.ActiveCourse, {params: data})
}

/**
 * 搜索提示关键字
 * @return promise 对象
 */
export function getSearchKey() {
  return axios.get(homeUrl.SearchKey)
}


/**
 * 精品小课
 * @params params 参数对象 {num: 10}
 * @return promise 对象
 */
export function getQuality(params) {
  return axios.get(homeUrl.quality, {
    params
  })
}

/**
 * 名师讲堂
 * @params data 参数对象 {num: 10}
 * @return promise 对象
 */
export function bigCoffeeList(data) {
  return axios.get(homeUrl.bigCoffeeList, {
    params: data
  })
}

/**
 * 推荐内容
 * @params data 参数对象 {num: 10,uuid:2020-08-08T08:30:13.807Z}
 * @return promise 对象
 */
export function remmendList(data) {
  return axios.get(homeUrl.remmendList, {
    params: data
  })
}

/**
 * 高级模块
 * @params data 参数对象 {num: 10}
 * @return promise 对象
 */
export function advanceModuleList(data) {
  return axios.get(homeUrl.advanceModuleList, {
    params: data
  })
}

/**
 * 乐学模块
 * @params data 参数对象 {num: 10}
 * @return promise 对象
 */
export function happyLearningList(data) {
  return axios.get(homeUrl.happyLearningList, {
    params: data
  })
}
