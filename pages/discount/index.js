// pages/discount/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    floorstatus: false,
    statusBarHeight: getApp().globalData.statusBarHeight,
    shopList: [
      {
        img: '../images/mangguo.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "5.00",
        currentPrice: "0.50",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜芒果",
        rank:1,
      },
      {
        img: '../images/wogan.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "10.00",
        currentPrice: "1.00",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜沃柑",
        rank:2,
      },
      {
        img: '../images/xigua.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "100.00",
        currentPrice: "10.00",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜的内蒙古大西瓜",
        rank:3,
      },
      {
        img: '../images/guiyuan.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "8.00",
        currentPrice: "0.80",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜桂圆",
        rank:4,
      },
      {
        img: '../images/mangguo.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "5.00",
        currentPrice: "0.50",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜芒果",
        rank:5,
      },
      {
        img: '../images/wogan.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "10.00",
        currentPrice: "1.00",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜沃柑",
        rank:6,
      },
      {
        img: '../images/xigua.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "100.00",
        currentPrice: "10.00",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜的内蒙古大西瓜",
        rank:7,
      },
      {
        img: '../images/guiyuan.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "8.00",
        currentPrice: "0.80",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜桂圆",
        rank:8,
      },
    ]
  },
  addCar(e) {
    let i = e.target.dataset.index;
    let item = e.target.dataset.item;
    let sItem = 'shopList[' + i + ']';
    item.nums++;
    this.setData({
      [sItem]: item,
    })
  },
  corNums(e) {
    // console.log(e.target.dataset)
    let type = e.target.dataset.type;
    let i = e.target.dataset.index;
    let item = e.target.dataset.item;
    let sItem = 'shopList[' + i + ']';
    if (type == "add") {
      item.nums++;
      this.setData({
        [sItem]: item,
      })
    }
    if (type == "reduce") {
      item.nums--;
      this.setData({
        [sItem]: item,
      })
    }
  },
  jump(e) {
    let params;
    if (Object.keys(e.detail).length == 2) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    wx.navigateTo({
      url: '../details/index',
    })
  },
  // 返回上一层
  reBack() {
    wx.navigateBack()
  },

  //检测当前页面滚动情况
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  // 返回顶部
  toTop() {
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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