// pages/editPersonInfo/index.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isconfirm: true,
    isEdit: false,
    duration: "2",
    overShow: false,
    phoneError: null,
    nameError: null,
    addError: null,
    person: {
      id: "",
      name: "",
      phone: "",
      add: "",
      checked: false
    },
  },
  // 设为默认的开关
  switchChange(e) {
    console.log(e);
    let person = this.data.person;
    person.checked = e.detail.value
    this.setData({
      person: person
    })
  },
  // 姓名验证
  nameChange(e) {
    const self = this;
    let person = self.data.person;
    // console.log(e)
    let inputVal = e.detail;
    if (!inputVal) {
      self.setData({ nameError: "收货人姓名不能为空!" })
    } else {
      person.name = inputVal;
      self.setData(
        {
          nameError: null,
          person: person
        }
      )
    }
    self.checkIsConfirm();
  },
  // 手机号码验证
  phoneChange(e) {
    const self = this;
    const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    let person = self.data.person;
    // console.log(e)
    let inputVal = e.detail;
    if (!inputVal) {
      self.setData({ phoneError: "手机号码不能为空!" })
    }
    else if (!reg.test(inputVal)) {
      self.setData({ phoneError: "手机号码格式不正确!" })
    } else {
      person.phone = inputVal;
      self.setData(
        {
          phoneError: null,
          person: person
        }
      )
    }
    self.checkIsConfirm();
  },
  // 地址验证
  addChange(e) {
    const self = this;
    let person = self.data.person;
    // console.log(e)
    let inputVal = e.detail;
    if (!inputVal) {
      self.setData({ addError: "收货地址不能为空!" })
    } else {
      person.add = inputVal;
      self.setData(
        {
          addError: null,
          person: person
        }
      )
    }
    self.checkIsConfirm();
  },
  // 检查是否可以保存
  checkIsConfirm() {
    let person = this.data.person;
    if (person.name && person.phone && person.add) {
      this.setData({
        isconfirm: false,
      })
    }
  },
  // 删除当前收货人信息
  deletePerson(e) {
    // console.log(e)
    let params;
    if (Object.keys(e.detail).length == 2) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    let id = params.id;
    Dialog.confirm({
      message: '确定删除当前收货人？',
    })
      .then(() => {
        wx.navigateTo({
          url: '../receivingList/index?pid=' + id,
        })
      })
      .catch(() => {
        // on cancel
      });
  },

  // 提交表单内容
  formSubmit() {
    let self = this, person = self.data.person;
    if (!person.id) {
      person.id += new Date()
    }
    self.setData({
      overShow: true,
      person: person
    })
    setTimeout(() => {
      self.setData({
        overShow: false,
      })
      let newPerson =self.data.person, type = "";
      self.data.isEdit ? type = "edit" : type = "create";
      let params = {
        newPerson: newPerson,
        type: type
      }
      // console.log(newPerson, type)
      wx.navigateTo({
        url: '../receivingList/index?data=' + JSON.stringify(params),
      })
    }, 2000);

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let self = this;
    if (Object.keys(options).length) {
      let newObj = JSON.parse(options.person);
      wx.setNavigationBarTitle({
        title: '编辑收货人',
      })
      self.setData({
        person: newObj,
        isEdit: true
      })
      self.checkIsConfirm()
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