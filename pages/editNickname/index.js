// pages/editNickname/index.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    errorMsg: "",
  },
  usernameChange(e) {
    const self = this;
    const reg = /^([a-zA-Z]|[\u2E80-\u9FFF])\S{3,15}$/;
    let username = self.data.username;
    username = e.detail;
    self.setData({ username, username }); //需要将数据先赋值给data中的phoneNumber
    let errorMsg = self.data.errorMsg;
    if (!self.data.username) {
      errorMsg = '用户名不能为空';
      self.setData({ errorMsg, errorMsg })
    } else if (!reg.test(self.data.username)) {
      errorMsg = '用户名格式不正确';
      self.setData({ errorMsg, errorMsg })
    } else {
      errorMsg = null;
      self.setData({ errorMsg, errorMsg })
    }
  },
  confirm() {
    getApp().globalData.uname=this.data.username;
    Toast({
      type: 'success',
      message: '修改成功！',
      onClose: () => {
        wx.switchTab({
          url: '../mine/mine'
        })
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: options.uname
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