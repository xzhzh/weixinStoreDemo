//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    category: [],
    nowIndex:0,
    nowId:null
  },
  onLoad: function () {
    var that=this;
    wx.request({
      url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt', 
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // console.log(res)
        that.setData({
          category:res.data
        })
        if (that.data.nowId==null){
          that.setData({
            nowId: res.data[0].id
          })
        }
        // console.log(that.data.nowId)
      }
    })
  },
  switchTab(e){
    var that= this
    // console.log(e)
    that.setData({
      nowIndex:e.target.dataset.index,
      nowId: e.target.dataset.id,
    })
  }


})
