// pages/pay/index.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    btmShow: false,
    floorstatus: false,
    orderInfo: "请输入",
    totalPrice: 0,
    total: 0,
    person: {
      id: "001",
      name: "赵光光",
      phone: "13112597878",
      checked: true,
      add: "云南省昆明市五华区高新区"
    },
    shopList: [
      {
        img: '../images/mangguo.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "5.00",
        currentPrice: "0.50",
        nums: 2,
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
        nums: 2,
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
        nums: 1,
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
        nums: 5,
        totalPrice: 0,
        fname: "新鲜桂圆"
      },
      {
        img: '../images/mangguo.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "5.00",
        currentPrice: "0.50",
        nums: 2,
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
        nums: 2,
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
        nums: 1,
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
        nums: 5,
        totalPrice: 0,
        fname: "新鲜桂圆"
      },
    ]
  },
  // 展示底部确认信息
  onSubmit() {
    this.setData({
      btmShow: true
    })
  },
  // 关闭底部确认信息
  onBtmClose() {
    this.setData({
      btmShow: false
    })
  },
  //切换地址
  toEdit(e) {
    let params;
    if (Object.keys(e.detail).length == 2) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    wx.navigateTo({
      url: '../editPersonInfo/index?person=' + JSON.stringify(params.person),
    })
  },
  // 填写或修改备注
  toInput(e) {
    let params, self = this;
    if (Object.keys(e.detail).length == 2) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    let info = params.info;
    if (info != "请输入") {
      wx.navigateTo({
        url: '../editorderInfo/index?orderInfo=' + info,
      })
    } else {
      wx.navigateTo({
        url: '../editorderInfo/index',
      })
    }

  },
  //确认支付
  confirmPay() {
    Toast({
      onClose: () => {
        this.setData({
          btmShow: false
        })
        wx.switchTab({
          url: '../index/index',
        })
      },
    });

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
  computeTotal() {
    let sList = this.data.shopList;
    let allPrice = 0, allNums = 0;
    for (let i = 0; i < sList.length; i++) {
      allPrice += sList[i].nums * sList[i].currentPrice * 100;   //乘100单位转换“元”->“分”
      allNums += sList[i].nums
    }
    this.setData({
      totalPrice: allPrice,
      total: allNums,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (Object.keys(options)) {
      this.setData({
        orderInfo: options.orderInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.computeTotal()
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