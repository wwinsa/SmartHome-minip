var app = getApp()
Page({
  data: {
    myInfro: [],
    money: [],
    hasData: true,
    isHidden: true,
    hide: "hide",
    noHid: "noHid"
  },

  showMoney: function () {
    wx.navigateTo({
      url: '../myself/myMoney/myMoney'
    })
  },

  setEvent: function () {
    this.setData({
      isHidden: !this.data.isHidden
    })
    console.log(this.data.isHidden)
  },

  callKeHu: function () {
    wx.makePhoneCall({
      phoneNumber: '17733689080'
    })
  },

  modifyPassword: function () {
    this.setData({
      isHidden: !this.data.isHidden
    }),
      wx.navigateTo({
        url: '../myself/modifyPassword/modifyPassword'
      })
  },

  directionsForUse: function () {
    this.setData({
      isHidden: !this.data.isHidden
    }),
      wx.navigateTo({
        url: '../myself/directionsForUse/directionsForUse'
      })
  },

  feedBack: function () {
    this.setData({
      isHidden: !this.data.isHidden
    }),
      wx.navigateTo({
        url: '../myself/feedBack/feedBack'
      })
  },

  loginOut: function () {
    this.setData({
      isHidden: !this.data.isHidden
    })
    // wx.navigateTo({
    //   url: '../login/login'
    // })
    // wx.navigateBack({
    //   delta: 1
    // })
    wx.redirectTo({
      url: '../login/login'
    })
  },



  // 加载
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: ' '
    })
    var that = this
    //更新数据
    that.setData({
      money: [
        { "url": "../images/home.png", "title": "我的钱包", "content": "3000.00元", "indicator": "../images/home.png" },
      ],
      myInfro: [
        { "url": "../images/home.png", "title": "WIFI设置", "content": "abc" },
        { "url": "../images/home.png", "title": "系统定时", "content": "12:00-15:00" },
        { "url": "../images/home.png", "title": "系统帮助", "content": "www.baidu.com" },
        { "url": "../images/home.png", "title": "热线电话", "content": "12345678912" },
        { "url": "../images/home.png", "title": "绑定账户", "content": "成都银行 ************1231" }
      ]
    })
  }
})