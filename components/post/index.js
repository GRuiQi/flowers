// components/post/index.js
Component({
  /**
   * 组件的属性列表
   * 不需要在data里也能够做数据绑定
   */
  properties: {
   res:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGoToDetail(event){
      const pid = event.currentTarget.dataset.postId;
      wx.navigateTo({
        // 在url传递查询参数
        url: '/pages/post-detail/post-detail?pid='+pid
  
      })
    },
  

  }
})
