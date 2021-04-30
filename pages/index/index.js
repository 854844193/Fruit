// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tipText: "",
    floorstatus: false,
    statusBarHeight: app.globalData.statusBarHeight,
    fruitList: ["沃柑", "西瓜", "香蕉", "石榴", "桂圆", "哈密瓜", "木瓜", "火龙果"],
    tabList: ["热销", "特价", "生鲜水果", "果干", "其他", "沃柑", "西瓜", "香蕉", "石榴", "桂圆", "哈密瓜", "木瓜", "火龙果"],
    bannerList: [
      '../images/banner01.jpg',
      '../images/banner02.jpg',
      '../images/banner03.jpg',
      '../images/banner04.jpg',
    ],
    newUserShop: [
      {
        img: '../images/mangguo.jpg',
        oldPrice: "5.00",
        currentPrice: "0.50",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜芒果"
      },
      {
        img: '../images/wogan.jpg',
        oldPrice: "10.00",
        currentPrice: "1.00",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜沃柑"
      },
      {
        img: '../images/xigua.jpg',
        oldPrice: "100.00",
        currentPrice: "10.00",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜的内蒙古大西瓜"
      },
      {
        img: '../images/guiyuan.jpg',
        oldPrice: "8.00",
        currentPrice: "0.80",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜桂圆"
      },
      {
        img: '../images/mangguo.jpg',
        oldPrice: "5.00",
        currentPrice: "0.50",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜芒果"
      },
      {
        img: '../images/wogan.jpg',
        oldPrice: "10.00",
        currentPrice: "1.00",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜沃柑"
      },
      {
        img: '../images/xigua.jpg',
        oldPrice: "100.00",
        currentPrice: "10.00",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜的内蒙古大西瓜"
      },
      {
        img: '../images/guiyuan.jpg',
        oldPrice: "8.00",
        currentPrice: "0.80",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜桂圆"
      },
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,

  },
  setText() {
    let fNameList = this.data.fruitList;
    let len = this.data.fruitList.length;
    if (len != 0) {
      let i = Math.ceil(len * Math.random());
      this.setData({
        tipText: fNameList[i]
      });
      len--;
    } else {
      return false;
    }
    setTimeout(this.setText, 3000);
  },
  addCar(e) {
    let i = e.target.dataset.index;
    let item = e.target.dataset.item;
    let sItem = 'newUserShop[' + i + ']';
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
    let sItem = 'newUserShop[' + i + ']';
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

    console.log(params)
    if (params.num == 1) {
      let text = params.text;
      console.log("--------跳转至'搜索页'!---------")
      wx.navigateTo({
        url: '../search/index?text=' + text,
      })
    }
    if (params.num == 2) {
      console.log("--------跳转至'更多页'!---------")
      // wx.navigateTo({
      //   url: '#',
      // })
    }
    if (params.num == 3) {
      wx.navigateTo({
        url: '../details/index',
      })
    }
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
  onLoad: function (options) {

  },
  onShow: function () {
    //自定义头部方法
    this.setText();
  }
})
