// pages/movie-detail/movie-detail.js
const app = getApp()
import {convertToCastString,converToCastInfos} from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const mid = options.mid
    wx.request({
      url: app.gBaseUrl + "/subject/"+mid,
      success:(res)=>{
        console.log(res.data)
        this.processMovieData(res.data)
        // this.setData({
        //   movie:res.data
        // })
      }
    })
  },

  processMovieData(movie){
    // 数据预处理，一个一个的处理灵活性更大。防止页面出现undefined
    const data = {}
    data.directors = convertToCastString(movie.directors)
    data.casts = convertToCastString(movie.casts)
    data.image = movie.images.large
    data.title = movie.title
    data.subtitle = movie.countries[0]+'.'+movie.year
    data.wishCount = movie.wish_count
    data.commentsCount = movie.comments_count
    data.rating = movie.rating.stars/10
    data.average = movie.rating.average
    data.genres = movie.genres.join('、') //js的内置函数
    data.summary = movie.summary
    data.castsInfo = converToCastInfos(movie.casts)
    this.setData({
      movie:data
    })
  },
  onViewPost(event){

    //图片预览
    wx.previewImage({
      //可以接收多张图片
      urls: [this.data.movie.images.large],
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})