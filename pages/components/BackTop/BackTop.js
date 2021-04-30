// pages/components/BackTop/BackTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    floorstatus: {
      type: Boolean,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: false
    }
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
    //回到顶部
    goTop: function () {  // 一键回到顶部
      this.triggerEvent('change');
    },
  }
})
