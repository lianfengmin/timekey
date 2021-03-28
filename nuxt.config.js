export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '潭州课堂',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: '潭州课堂是潭州教育旗下的在线教育直播平台，集教学管理、在线授课听课、作业考试、互动学习功能于一体，支持web、PC、app、h5、小程序等多端同时在线互动直播。现已服务数百万学员在线学习，遍布欧美、东南亚、韩日、港澳台等多个国家和地区。现已开设300多门课程，涵盖编程、营销、设计、公考、艺术、语言、学历等多个科目，并实现万人同时在线互动学习。上网学习，就来潭州！'
      }

    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'https://res.shiguangkey.com/res/images/pc_office.ico'}

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    "~/assets/base.less",
    "swiper/dist/css/swiper.min.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    //插件地址
    {
      src: `@/plugins/vue-swiper.js`,
      ssr: false
    },{
      mode: 'server',
      src: `@/plugins/axios.js`
    }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    // prefix: "/api",
    credentials: true,
  },
  proxy: {
    "/api/pcweb": {
      target: "https://open.shiguangkey.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/pcweb": "/api/pcweb",
      }
    },
    "/api": {
      target: "https://www.shiguangkey.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api",
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
