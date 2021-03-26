// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    fruitList: ["沃柑", "西瓜", "香蕉", "石榴", "桂圆", "哈密瓜", "木瓜", "火龙果"],
  },
  setText() {
    let len = this.data.fruitList.length;
    if (len == 0) return;
    let i = Math.ceil(len * Math.random());
    this.setData({
      tipText: this.data.fruitList[i]
    });
    len--;
    setTimeout(this.setText,1000);
  },
  onLoad: function (options) {
    //自定义头部方法
    this.setText();
  },
})
