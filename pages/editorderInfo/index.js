// pages/editorderInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoText: "",
    maxlength: 50,
    inputLength: 0,
    isTap: true,
    inputList: [
      { con: "麻烦您帮我送到楼下超市，我有空会过去取。", isDelete: false },
      { con: "麻烦送到楼下的时候给打个电话，我下楼取就好了，谢谢。", isDelete: false }
    ],
  },
  // 输入字数统计
  bindText(e) {
    let inputVal = e.detail.value;
    let len = parseInt(inputVal.length);
    this.setData({//更新备注内容到vue缓存
      infoText: inputVal,
      inputLength: len
    })
  },
  // 根据编辑和保存改变快捷输入每项的删除状态
  checkItem() {
    let self = this, isTap = self.data.isTap, list = self.data.inputList;
    for (let i = 0; i < list.length; i++) {
      if (isTap) {
        list[i].isDelete = false;
      } else {
        list[i].isDelete = true;
      }
    }
    self.setData({
      inputList: list
    })
  },
  // 保存和编辑的切换
  rightTap(e) {
    let params, self = this;
    if (Object.keys(e.detail).length == 2) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    if (params.num == 1) {
      self.setData({
        isTap: false
      })
    }
    if (params.num == 2) {
      self.setData({
        isTap: true
      })
    }
    this.checkItem();
  },
  // 删除快捷输入的对应项
  deletItem(e) {
    let params, self = this;
    if (!e.detail) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    let list = self.data.inputList;
    for (let i = 0; i < list.length; i++) {
      if (list[i].con == params.item.con) {
        list.splice(i, 1)
      }
    }
    self.setData({
      inputList: list
    })
  },
  // 选中一项
  checked(e) {
    let params, self = this;
    if (Object.keys(e.detail).length == 2) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    self.setData({
      infoText: params.con,
      inputLength: params.con.length
    })
  },
  // 确认
  confirm() {
    let orderinfo = this.data.infoText;
    wx.navigateTo({
      url: '../pay/index?orderInfo=' + orderinfo,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = this.data.inputList;
    let newItem = { con: options.orderInfo, isDelete: false }
    list.unshift(newItem);
    if (Object.keys(options).length) {
      this.setData({
        infoText: options.orderInfo,
        inputLength: options.orderInfo.length,
        inputList: list
      })
    }
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