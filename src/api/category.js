import http from "../util/http"

export const category={
  /*获得所有分类*/
  getCategoryType(){
    return http.get(`category`)
  },

  /*获得某种分类的商品*/
  getProductsByCategory(id) {
    return http.get(`category/${id}`)
  }
}