// pages/components/Tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navTab: {            // 属性名
      type: Array,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: []     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    isActived: 0,
    shopList: [
      {
        img: '../../images/mangguo.jpg',
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
        img: '../../images/wogan.jpg',
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
        img: '../../images/xigua.jpg',
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
        img: '../../images/guiyuan.jpg',
        desc: "",
        tag: "限时秒杀",
        returnInfo: "满5返10",
        oldPrice: "8.00",
        currentPrice: "0.80",
        nums: 0,
        totalPrice: 0,
        fname: "新鲜桂圆"
      },
    ]
  },
  attached() {
    let params = this.properties.navTab[this.data.isActived];
    this.getShopInfo(params);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toggle(e) {
      let params = e.detail;
      this.setData({
        isActived: e.detail.index
      });
      this.getShopInfo(params)
    },
    getShopInfo(params) {
      if (params.title) {
        // this.setData({
        //   cartContent: params.title
        // })
      } else {
        // this.setData({
        //   cartContent: params
        // })
      }

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
    jump(e) {
      this.triggerEvent('change', e);
    }
  }
})
