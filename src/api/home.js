import http from "../util/http"


export const home = {

  /*banner图片信息*/
  getBannerData() {
    return http.get(`banner/1`)
  },

  // 查询banner详情
  getBannerDetail(id) {
    return http.get(`banner/items/${id}`)
  },

  /*首页主题*/
  getThemeData() {
    return http.get(`theme?ids=1,2,3`)
  },

  /*首页部分商品*/
  getProductorData(params) {
    return http.get('product/recent',{
      params,
    })
  }
}