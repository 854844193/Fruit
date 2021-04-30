// pages/search/index.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchVal: "",
    // tipText: "水果",
    tipText: "请输入要搜索的水果",
    historyList: ['草莓', "榴莲", "菠萝"],
    searchList: ['草莓', "榴莲", "菠萝", "西瓜", "香蕉", "苹果", "樱桃", "猕猴桃", "柚子", "哈密瓜", "木瓜", "芒果", "荔枝", "橘子", "芒果", "沃柑", "橙子", "青枣", "人参果"]
  },

  onChange(e) {
    // console.log(e.detail)
    this.setData({
      searchVal: e.detail,
    });
  },

  onSearch: function () {
    let inputVal = this.data.searchVal, tip = this.data.tipText;
    if (!inputVal && tip != '请输入要搜索的水果') {
      inputVal = tip;
      this.setData({
        searchVal: inputVal
      })
    }
    wx.navigateTo({
      url: '../searchDetail/index?text=' + this.data.searchVal,
    })
  },
  checkItem(e) {
    let params;
    if (Object.keys(e.detail).length == 2) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    console.log(params);
    this.setData({
      searchVal: params.text
    })
  },
  deleteHistory() {
    let arr = [];
    Dialog.confirm({
      title: '删除历史搜索？',
    }).then(() => {
      this.setData({
        historyList: arr,
      })
    })
      .catch(() => { });
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (Object.keys(options).length) {
      this.setData({
        tipText: options.text
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