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
    var content = [
    {
      title: "一部独特的穿越日剧《仁医》",
      content: "《仁医》讲述的是现代脑外科医生南方仁通过穿越时空回到了幕末时期，在救治病人的过程中遇到当时的不同英雄人物，并渐渐地被卷入了激荡的历史大潮之中的故事...",
      imgSrc: "/images/background/renyi-1.png",
      detail: "该剧讲述的是17岁就去世的染谷航太和成长为24岁的今野芽衣之间展开的幻想爱情罗曼史",
      dateTime: "24小时前",
      headImgSrc: "",
      author:"她和她的猫",
      date: "Sept 18 2020",
      avatar:"/images/avatar/5.png",
      postId: 3, 
      reading:112,
      collection:96
      
    },
    {
      title: "唯美悲伤纯爱的故事《只有我是十七岁的世界》",
      content: "该剧讲述的是17岁就去世的染谷航太和成长为24岁的今野芽衣之间展开的故事。航太没有告诉人们自己的想法就离开了这个世界。时隔7年，回到故乡的芽衣，在不合季节开花的樱花树下遇到了航太...",
      imgSrc: "/images/background/onlyme17-3.jpg",
      detail: "该剧讲述的是17岁就去世的染谷航太和成长为24岁的今野芽衣之间展开的幻想爱情罗曼史",
      dateTime: "24小时前",
      headImgSrc: "",
      author:"猫是猫的猫",
      date: "Nov 20 2020",
      avatar:"/images/avatar/4.png",
      postId: 3, 
      reading:102,
      collection:92
      
    }
  
    ]
    this.setData({
      posts:content
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