//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    logs: [],
    orders:"",
    nickname:"",
    thumb:''

  },
  onLoad: function () {
    var that =this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        // that.setData({
        //   thumb: res.userInfo.avatarUrl,
        //   nickname: res.userInfo.nickName
        // })
      }
    }),
      /**
      * 发起请求获取订单列表信息
      */
      wx.request({
        url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
        success(res) {
          that.setData({
            orders: res.data
          })
          // console.log(res.data)
        }
      })
  

  }
})
