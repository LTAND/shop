import http from "../util/http"


export const product = {
/**
 * @route   GET /
 * @desc    查询 最新商品
 * @access  public
 */
  getDetailInfo(count){
    return http.get(`product/recent?count=${count}`)
  },


  /**
   * @route   GET /:id
   * @desc    获取商品详情
   * @access  public
   */
  getProduct(id){
    return http.get(`product/${id}`)
  }
}

