// pages/post-detail/post-detail.js
import {
  postList
} from '../../data/data.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 做数据绑定就不加下划线，加_的变量不做数据绑定
    postData: {},
    collected: false,
    isPlaying: false,
    _pid: null,
    _postsCollected: {},
    _mgr: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const postData = postList[options.pid];
    //暂时中转，保存pid
    this.data._pid = options.pid;

    //初始化的时候从缓存读取一下是否收藏
    let postsCollected = wx.getStorageSync('posts_collected')
    //console.log("typeof:"+typeof(postsCollected)+","+postsCollected)    //typeof:string,
    //如果postsCollectedd对象不存在，从缓存中获取的是字符串。需要将它转换为对象类型
    if (postsCollected == '') {
      postsCollected = {}
    }
    this.data._postsCollected = postsCollected
    let collected = postsCollected[this.data._pid]
    // console.log(collected) 如果id号不存在，则为undefined
    //如果undefined 说明文章从来没被收藏过
    if (collected === undefined) {
      collected = false
    }
    this.setData({
      postData,
      collected,
      isPlaying:app.gIsPlayingMusic
    })
    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr //为什么不把它写在setData里呢？因为这是不需要做数据绑定的变量
    // 监听背景音频播放事件,就是微信开发工具底部的黑色播放框
    mgr.onPlay(this.onMusicStart)
    mgr.onPause(this.onMusicStop)  //
  },
  onCollection() {
    //假设 未收藏  -> 收藏
    //考虑哪篇文章被收藏
    //数据结构 多篇文章是否被收藏
    //如何实现这种结构？
    // {
    //   id:  true,  //1 :true 1号文章被收藏
    //   id2: false
    // }
    // const postsCollected = {}   //每次点击都产生一个对象，如果收藏多篇文章，会出现缓存覆盖问题
    const postsCollected = this.data._postsCollected //直接读取缓存里的
    postsCollected[this.data._pid] = !this.data.collected

    this.setData({
      //获取原来的状态再取反,做数据绑定,间接改变了collected的值
      collected: !this.data.collected
    })
    wx.setStorageSync('posts_collected', postsCollected)

    wx.showToast({
      title: this.data.collected ? '收藏成功' : '收藏取消',
      duration: 3000
    })


  },

  onShare(event) {
    // 仅仅展示底部菜单界面，功能还没有实现
    wx.showActionSheet({
      itemList: ['分享到QQ', '分析到微信', '分享到'],
    })
  },

  /**
   * 音乐停止,显示start状态
   * 音乐播放,显示stop状态
   */
  onMusicStart(event) {
    const mgr = this.data._mgr
    const music = postList[this.data._pid].music
    mgr.src = music.url
    mgr.title = music.title

    app.gIsPlayingMusic = true

    this.setData({
      isPlaying: true
    })
  },

  onMusicStop(event) {
    const mgr = this.data._mgr
    mgr.stop()
    app.gIsPlayingMusic = false
    this.setData({
      isPlaying: false
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