// pages/home/home.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden:true,
    tempname:'',
    equipname: new Array(),
    scenename: new Array(),
    artlist:[],
  },
  //  Scene
  //弹窗
  bindViewTap: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })

  },
  
  //确定按钮点击事件---scene
  modalBindaconfirm: function () {
    var that = this;
    var scenename = this.data.scenename;
    var tempname = this.data.tempname;

    scenename.push(tempname);

    this.setData({
      modalHidden: !this.data.modalHidden,
      scenename: scenename,
    })

    console.log("scene->" + scenename + "length:" + scenename.length);

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          //btn
          scenename: scenename
        })
      }
    })

  },
  //取消按钮点击事件
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },

  getInput: function(e){
    var tempname = this.data.tempname;
    this.setData({
        tempname: e.detail.value,
    })
  },


  gotoScene: function(){
    wx.navigateTo({
      url: '../scene/scene',
    })
  },
  gotoSafe: function () {
    wx.navigateTo({
      url: '../safe/safe',
    })
  },
  gotoEquip: function () {
    var that = this;
    
    wx.navigateTo({
      url: '../equip/equip',

    })
    
  },

  test: function(){
    const app = getApp();
    
    console.log(app.globalData.equipInfo);
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

    let pages = getCurrentPages();

    let currPage = pages[pages.length - 1];

    if (currPage.data.addresschose) {

      this.setData({

        //将携带的参数赋值

        artlist: currPage.data.artlist,

        // addressBack: true

      });

      console.log(this.data.artlist)

    }

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