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
   * 点击之后做什么事情，组件的开发者不应该决定。
   * 应该由组件使用者决定
   */
  methods: {
    //自定义组件被点击之后会产生新的事件，哪里使用这个自定义组件就在哪里监听
    onTap(event){
      const pid = this.properties.res.postId;
      //自定义事件
     this.triggerEvent('posttap',{
       pid,
     })
    },
  

  }
})
