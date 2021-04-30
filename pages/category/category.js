// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    floorstatus: false,
    active: 0,
    currentTab: 0,
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
        fname: "新鲜芒果"
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
        fname: "新鲜沃柑"
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
        fname: "新鲜的内蒙古大西瓜"
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
        fname: "新鲜桂圆"
      },
    ],
    navList: [
      { navTitle: '满3件9折', id: '001' },
      { navTitle: "热销水果", id: '002' },
      { navTitle: "当季水果", id: '003' },
      { navTitle: "热量水果", id: '004' },
      { navTitle: "低卡水果", id: '005' },
      { navTitle: "进口水果", id: '006' },
      { navTitle: "新产品水果", id: '007' },
    ]
  },


  switchNav: function (e) {
    var id = e.target.dataset.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      this.setData({
        currentTab: id
      });
    }
    this.setData({
      active: id
    });
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

  jump() {
    wx.navigateTo({
      url: '../details/index',
    })
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