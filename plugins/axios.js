export default ({$axios, redirect}) => {
  $axios.onResponse(res => {
    return res.data
  })
  $axios.onRequest(req => {
    return req
  })
  $axios.onError(err => {
    console.log(err)
  })
}
