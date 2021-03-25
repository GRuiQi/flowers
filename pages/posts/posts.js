// 生命周期函数由小程序自己调用
// 钩子函数  hook funcion
Page({

  /**
   * 页面的初始数据
   * 定义的变量可以在wxml里显示
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var content = {
      title: "日剧推荐《只有我是十七岁的世界》",
      content: "该剧讲述的是17岁就去世的染谷航太和成长为24岁的今野芽衣之间展开的幻想爱情罗曼史。航太没有告诉人们自己的想法就离开了这个世界，在时隔7年回到故乡的芽衣面前，只出现在不合季节的樱花开放的期间",
      imgSrc: "/images/background/onlyme17-3.jpg",
      reading: "102",
      detail: "该剧讲述的是17岁就去世的染谷航太和成长为24岁的今野芽衣之间展开的幻想爱情罗曼史",
      collection: "92",
      dateTime: "24小时前",
      headImgSrc: "",
      author:"猫是猫的猫",
      date: "Nov 20 2020",
      avatar:"/images/avatar/4.png",
      postId: 3
    }
    this.setData(content)
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