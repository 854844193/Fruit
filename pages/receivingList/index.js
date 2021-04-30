// pages/receiving List/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personList: [
      {
        id: "001",
        name: "赵光光",
        phone: "13112597878",
        checked: true,
        add: "云南省昆明市五华区"
      },
      {
        id: "002",
        name: "张晓晓",
        phone: "15126478956",
        checked: false,
        add: "云南省昆明市西山区"
      },
      {
        id: "003",
        name: "刘飞飞",
        phone: "19981156234",
        checked: false,
        add: "云南省昆明市呈贡区"
      },
    ]
  },
  // 设为默认收获信息
  onChange(e) {
    let params, self = this, list = self.data.personList;
    if (Object.keys(e.detail).length == 2) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    let ind = params.ind;
    list[ind].checked = true;
    let person = list[ind];
    for (let i = 0; i < list.length; i++) {
      if (i == ind) {
        list[i].checked = true;
      } else {
        list[i].checked = false;  // 重置非默认check
      }
    }
    self.setData({
      personList: list
    });
    // wx.navigateTo({
    //   url: '../pay/index?person=' + person,
    // })
  },
  // 去编辑收获人信息
  toedit(e) {
    let params;
    if (Object.keys(e.detail).length == 2) {
      params = Object.keys(e.target.dataset).length === 0 ? e.currentTarget.dataset : e.target.dataset;
    } else {
      params = Object.keys(e.detail.target.dataset).length === 0 ? e.detail.currentTarget.dataset : e.detail.target.dataset;
    }
    wx.navigateTo({
      url: '../editPersonInfo/index?person=' + JSON.stringify(params.obj),
    })
  },
  // 新增收货人
  onClickButton() {
    wx.navigateTo({
      url: '../editPersonInfo/index',
    })
  },
  // 删除收货人
  deleteP(pid, list) {
    let self = this;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == pid && list[i].checked) {
        list[i + 1].checked = true;
        list.splice(i, 1)
      }
    }
    // console.log(list);
    self.setData({
      personList: list
    })
  },
  // 新增收货人
  createP(person, list) {
    let self = this;
    if (person.checked) {
      for (let i = 0; i < list.length; i++) {
        list[i].checked = false;
      }
    }
    list.unshift(person);
    // console.log(list);
    self.setData({
      personList: list
    })
  },
  // 编辑收货人
  editP(person, list) {
    console.log(person, list)
    let self = this;
    for (let i = 0; i < list.length; i++) {
      if(person.checked){
        list[i].checked=false;
      }
      if (list[i].id == person.id) {
        list[i] = person
      }
    }
    // console.log(list);
    self.setData({
      personList: list
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this, list = self.data.personList;
    if (Object.keys(options).length) {
      if (options.pid) {
        let Pid = options.pid
        self.deleteP(Pid, list)
      }
      if (options.data) {
        let newPerson = JSON.parse(options.data).newPerson;
        let type = JSON.parse(options.data).type;
        console.log(newPerson, type)
        if (type == "edit") {
          console.log("edit")
          for (let i = 0; i < list.length; i++) {
            if (list[i].id == newPerson.id) {
              self.editP(newPerson, list);
            }
          }
        }
        if (type == "create") {
          console.log("create")
          self.createP(newPerson, list)
        }
      }
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