//  获取系统时间
var util = require('../../utils/util.js');

Page({
  data: {
    dates: '2020-11-08',
    times: '12:00',
    flag: false,
  },
  onLoad: function () {
    
  },
  //  比较时间
  timeon: function(e){
    var that = this;
    var dates = this.data.dates;
    var times = this.data.times;
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var systime = util.formatTime(new Date());
    var flag = this.data.flag;

    // 再通过setData更改Page()里面的data，动态更新页面的数据
    that.setData({
      systime: systime
    })

    var datetimes = dates + ' ' + times + ':00';
    console.log("datetimes->" + datetimes);

    if(datetimes < systime){
      flag = true;
      console.log("情景模式开启");
    }

  },
  //  点击时间组件确定事件  
  bindTimeChange: function (e) {
    this.setData({
      times: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },
  
  onHide: function () {

  },
  onUnload: function () {
    var that = this;
    //清除计时器  即清除setInter
    clearInterval(that.data.setInter)
  },

})