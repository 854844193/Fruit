// pages/cart/index.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    totalPrice: 0,
    totalNums:0,
    payText:"",
    totalChecked: false,
    floorstatus: false,
    shopList: [
      {
        img: '../images/mangguo.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "5.00",
        currentPrice: "0.50",
        nums: 1,
        checked: false,
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
        nums: 1,
        checked: false,
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
        nums: 3,
        checked: true,
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
        nums: 1,
        checked: false,
        totalPrice: 0,
        fname: "新鲜桂圆"
      },
    ],
    wannerList: [
      {
        img: '../images/mangguo.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "5.00",
        currentPrice: "0.50",
        nums: 0,
        checked: false,
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
        checked: false,
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
        checked: false,
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
        checked: false,
        totalPrice: 0,
        fname: "新鲜桂圆"
      },
    ]
  },
  // 计算价格
  getTotalPrice() {
    let cartList = this.data.shopList;
    let allNums=0;
    let totalPrice = this.data.totalPrice = 0;
    // console.log(totalPrice, "false")
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].checked) {
        totalPrice += cartList[i].nums * cartList[i].currentPrice * 100;   //乘100单位转换“元”->“分”
        allNums+=cartList[i].nums
      }
    }
    // console.log(totalPrice)
    this.setData({
      totalPrice: totalPrice,
      totalNums:allNums,
      payText:"去支付"+"("+allNums+")"
    })
  },

  // 单选
  onChange(e) {
    let cartList = this.data.shopList;
    let allCheck = this.data.totalCheck;
    let ind = e.target.dataset.index;
    cartList[ind].checked = e.detail;
    this.setData({
      shopList: cartList,
    });
    // 改变全选状态
    if (allCheck) {
      // 当状态为全选时，每个元素其中有一个为false，则取消全选
      for (let i = 0; i < cartList.length; i++) {
        if (!cartList[i].checked) {
          this.setData({
            totalChecked: false
          })
        }
      }
    } else { // 当状态为非全选时，每个元素都为true，则全选
      for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].checked) {
          this.setData({
            totalChecked: true
          })
        } else {
          this.setData({
            totalChecked: false
          })
        }
      }
    }
    this.getTotalPrice();
  },
  // 全选
  totalCheck(e) {
    let cartList = this.data.shopList;
    let totalChecked = e.detail;
    for (let i = 0; i < cartList.length; i++) {
      if (!totalChecked) {
        cartList[i].checked = false
      }
      if (totalChecked) {
        cartList[i].checked = true;
      }
    }
    this.setData({
      totalChecked: totalChecked,
      shopList: cartList,
    });
    this.getTotalPrice();
  },
  // 添加购物车
  addCar(e) {
    let i = e.target.dataset.index;
    let item = e.target.dataset.item;
    let sItem = 'wannerList[' + i + ']';
    item.nums++;
    this.setData({
      [sItem]: item,
    })
  },
  // 增加、减少商品数量
  corNums(e) {
    // console.log(e.target.dataset)
    let type = e.target.dataset.type;
    let ctype = e.target.dataset.cate;
    let i = e.target.dataset.index;
    let item = e.target.dataset.item;
    if (ctype == "cart") {
      let sItem = 'shopList[' + i + ']';
      if (type == "add") {
        item.nums++;
        this.setData({
          [sItem]: item,
        })
      }
      if (type == "reduce") {
        if (item.nums > 1) {
          item.nums--;
          this.setData({
            [sItem]: item,
          })
        } else {
          Dialog.confirm({
            message: '确定移除当前商品？',
          })
            .then(() => {
              item.nums--;
              this.setData({
                [sItem]: item,
              })
            })
            .catch(() => {
              // on cancel
            });
        }
      }
      this.getTotalPrice();
    }
    if (ctype == "wanner") {
      let sItem = 'wannerList[' + i + ']';
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
    }
  },
  //商品详情
  toDetails(e){
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
  //去支付页面
  toPay(){
    wx.navigateTo({
      url: '../pay/index',
    })
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
    this.getTotalPrice();
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