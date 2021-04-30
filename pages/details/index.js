// pages/details/index.js
const djs = require('../../utils/daojishi.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: null,
    djsTime: {},
    dImgList: [
      "../images/guiyuan.jpg",
      "../images/mangguo.jpg",
      "../images/wogan.jpg",
      "../images/xigua.jpg",
    ],
    proShow: false,
    floorstatus: false,
    actions: [
      {
        name: '闪电退款',
        subname: '诚信用户申请退款，经团长/平台审核退款通过后，享受闪电退款到账服务'
      },
      {
        name: '48小时无忧退',
        subname: '满足退货条件（如商品包装完好、配件齐全等）且不影响二次销售的商品，可在商品送达后48小时内申请无忧退'
      },
      {
        name: '价格保护',
        subname: '如购买的商品当日23点前降价（不含商品活动降价），商品送达后48 小时内，可在订单详情申请退还差价红包',
      },
    ],
  },
  onProShow() {
    this.setData({
      proShow: true
    })
  },
  onProClose() {
    this.setData({ proShow: false });
  },
  // 返回
  returnBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  // 倒计时
  djsShow() {
    // 设置目标时间
    let curDate = new Date();
    let curDateArr = curDate.toLocaleDateString().split('/');
    curDateArr[curDateArr.length - 1] = Number(curDateArr[curDateArr.length - 1]) + 1 + '';
    let flagTime = curDateArr.join("/") + " " + "12" + ":" + "00" + ":" + "00";
    // console.log(flagTime);
    let Timer = setInterval(() => { //注意箭头函数！！
      this.setData({
        djsTime: djs.getDjs(flagTime)//使用了util.getTimeLeft
      });
      if (this.data.djsTime == {}) {
        clearInterval(Timer);
        this.setData({
          timer:null
        })
      }
    }, 1000)
    this.setData({
      djsTime: djs.getDjs(flagTime),//使用了util.getTimeLeft
      timer: Timer
    });
  },
  // 查看特惠榜
  toDiscount(e){
    wx.navigateTo({
      url: '../discount/index',
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
    this.djsShow()
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