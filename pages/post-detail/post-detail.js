// pages/post-detail/post-detail.js
import {postList} from '../../data/data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    _pid:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const postData = postList[options.pid];
      //暂时中转，保存pid
      this.data._pid = options.pid;
      this.setData({
        postData
      })
  },

  onCollection(){
    //假设 未收藏  -> 收藏
    //考虑哪篇文章被收藏
    //数据结构 多篇文章是否被收藏
    //如何实现这种结构？
    // {
    //   id: true  //1 :true 1号文章被收藏
    // }
    const postsCollected = {}
    postsCollected[this.data._pid] = true
    wx.setStorageSync('posts_collected',postsCollected)

    //这种写法不可以！！
    // wx.setStorageSync('posts_collected',{
    //   this.data._pid: true
    // })
    
   
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