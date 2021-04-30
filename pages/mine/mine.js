// pages/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    floorstatus: false,
    username: "PZW216796747",
    headImg: "https://img.yzcdn.cn/vant/cat.jpeg",
    orderTypeList: [
      {
        icon: "pending-payment",
        name: "待支付",
        info: "1"
      },
      {
        icon: "paid",
        name: "待收货",
        info: "10"
      },
      {
        icon: "comment-o",
        name: "待评价",
        info: "110"
      },
      {
        icon: "smile-comment-o",
        name: "退款/售后",
        info: ""
      },
      {
        icon: "balance-list-o",
        name: "全部订单",
        info: ""
      },
    ],
    actList: [
      {
        icon: "chat-o",
        title: "邀请有礼",
        desc: "多邀多赚",
        color: "#ef4136"
      },
      {
        icon: "friends",
        title: "邀请拼团",
        desc: "限时抢购",
        color: "#009ad6"
      },
      {
        icon: "bill",
        title: "天天拿红包",
        desc: "红包可抵现",
        color: "#ef4136"
      },
      {
        icon: "gift-card",
        title: "0元领鸡蛋",
        desc: "10个鸡蛋",
        color: "#ffc20e"
      },
      {
        icon: "shop",
        title: "免费领水果",
        desc: "1箱水果",
        color: "#00ae9d"
      },
      {
        icon: "gold-coin",
        title: "签到领钱",
        desc: "每天都有",
        color: "#c37e00"
      },
      {
        icon: "like",
        title: "走路赚钱",
        desc: "步数可换钱",
        color: "#33a3dc"
      },
    ],
    bottomList: [
      {
        icon: "chat-o",
        desc: "消息提醒",
        dot: false,
        info: "11"
      },
      {
        icon: "star-o",
        desc: "收藏",
        dot: false,
        info: ""
      },
      {
        icon: "envelop-o",
        desc: "意见反馈",
        dot: false,
        info: "100",
      },
      {
        icon: "records",
        desc: "问卷调研",
        dot: true,
        info: "",
      },
      {
        icon: "user-circle-o",
        desc: "加入我们",
        dot: "",
        info: "",
      },
      {
        icon: "service-o",
        desc: "联系客服",
        dot: "",
        info: "",
      },
      {
        icon: "setting-o",
        desc: "设置",
        dot: true,
        info: "",
      },
      {
        icon: "vip-card-o",
        desc: "成为会员",
        dot: "",
        info: "",
      },
      {
        icon: "friends-o",
        desc: "商家入驻",
        dot: "",
        info: "",
      },
      {
        icon: "wap-home-o",
        desc: "仓配合作",
        dot: "",
        info: "",
      },
      {
        icon: "hotel-o",
        desc: "城市合作商",
        dot: "",
        info: "",
      },
      {
        icon: "cluster-o",
        desc: "网格站合作",
        dot: "",
        info: "",
      },
    ]
  },
  toPersonal() {
    let uname = this.data.username, hImg = this.data.headImg;
    wx.navigateTo({
      url: '../personalInfo/index?data=' + [uname, hImg],
    })
  },
  toOrder(e) {
    console.log(e);
    let ind = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../orderType/index?index=' + ind,
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
    // console.log(options)
    if (Object.keys(options).length) {
      this.setData({
        username: options.uname
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
    let uname = getApp().globalData.uname;
    if (uname) {
      this.setData({
        username: uname
      })
    }
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