import {postList} from '../../data/data.js'
// var postData = require("../../data/data.js")
// console.log(postList)
Page({

  /**
   * 页面的初始数据
   * 定义的变量可以在wxml里显示
   */
  data: {
    res:{
      text:"123"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad(options){

    this.setData({
       postList
    })
  },

  onGoToDetail(event){
    let pid = null
    if(event.currentTarget.dataset.postId===undefined){
       pid = event.detail.pid
    }else{
      pid = event.currentTarget.dataset.postId
    }
    //const pid = event.currentTarget.dataset.postId || event.detail.pid;
    wx.navigateTo({
      // 在url传递查询参数
      url: '/pages/post-detail/post-detail?pid='+pid

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