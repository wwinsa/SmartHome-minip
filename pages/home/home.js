// pages/home/home.js



Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden:true,
    tempname:'',
    Sname: '',
    equipname: new Array(),
    scenename: new Array(),
    info: {
      scene:'',
      equip:''
    }
  },

  //弹窗

  bindViewTap: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })

  },
  
  //确定按钮点击事件---scene
  modalBindaconfirm: function () {
    var that = this;
    var equipname = this.data.equipname;
    var scenename = this.data.scenename;
    var Sname = this.data.Sname;
    var info = this.data.info;
    scenename.push(Sname);

    this.setData({
      modalHidden: !this.data.modalHidden,
      scenename: scenename,
      info:{
        scene: scenename,
        equip: equipname,
      }
    })

    console.log("scene->" + scenename + "length:" + scenename.length);
    console.log("info->" + info);

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          //btn
          scenename: scenename
        })
      }
    })

  },
  //确定按钮点击事件---equipment
  modalBindaconfirm: function () {
    var that = this;
    var equipname = this.data.equipname;
    var scenename = this.data.scenename;
    var tempname = this.data.tempname;
    var info = this.data.info;
    equipname.push(tempname);

    this.setData({
      modalHidden: !this.data.modalHidden,
      equipname : equipname,
      info: {
        scene: scenename,
        equip: equipname,
      }
    })
    
    console.log("equip->"+equipname+"length:"+equipname.length);
    console.log("info->" + info.scene + "--" + info.equip);

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          //btn
          equipname: equipname
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
    
    //console.log(equipname);
  },
  getSInput: function (e) {
    var Sname = this.data.Sname;
    this.setData({
      Sname: e.detail.value,
    })

    //console.log(equipname);
  },


  addScene: function () {
    var that = this;
    var equipname = this.data.equipname;

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          //view
          className_height: res.windowHeight / equipname.length,
          //btn
          array: equipname,
        })
      }
    })
    console.log("fresh->" + equipname);
  },

  gotoEquip: function(){
    wx.navigateTo({
      // url: '../equip/equip',
      url: '../scene/scene',
    })
  },
  gotoSafe: function () {
    wx.navigateTo({
      // url: '../equip/equip',
      url: '../safe/safe',
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