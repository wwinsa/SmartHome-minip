// pages/equip/equip.js


var SERVER_PATH = "https://192.144.180.173/main.php";//定义服务器地址

Page({

  /**
   * 页面的初始数据
   */
  data: {
    artlist: [
      { imag: '/images/switch_status/green.png', art: "air condition" },
      { imag: '/images/switch_status/green.png', art: "fridge" },
      { imag: '/images/switch_status/green.png', art: "TV" },
      { imag: '/images/switch_status/green.png', art: "LIGHT" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  //send
  sendRequest: function () {
    wx.request({
      url: SERVER_PATH,
      data: {
        string: 'addDevtoEqp',// 请求参数
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log("success");
        console.log(res.data)
      }
    })
    console.log("1");
  },

  back: function () {
    const app = getApp();
    app.globalData.equipInfo = '123';
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