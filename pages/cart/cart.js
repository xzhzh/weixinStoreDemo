// pages/cart/cart.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    carts: [
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
        ],
    totalPrice:0 ,
    selectAll:true,
  },

  onLoad: function (options) {
      this.getTotalPrice();
  },

  getTotalPrice(){
    var carts=this.data.carts;
    let total=0;
    for(var i=0;i<carts.length;i++){
      if (carts[i].selected){
        total += carts[i].price * carts[i].num;
      } 
      if (carts[i].selected==false){
        this.setData({
          selectAll:false
        })
      } else{
        this.setData({
          selectAll: true
        }) 
      } 
    }
    this.setData({
      carts: carts,
      totalPrice:total.toFixed(2)
    })
  },
  
  jian(e){
    const index =e.target.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num 
    if(num<=1){
        wx.showToast({
          title: '不能再少了',
          icon: 'none',
          duration: 2000
        })
        return 
    }
    num=num-1;
    carts[index].num=num
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },

  add(e){
    const index = e.target.dataset.index;
    let carts = this.data.carts;
    console.log(index)
    let num = carts[index].num
    
       num = num + 1;
    carts[index].num = num
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },

  checkshop(e){
    const index = e.target.dataset.index;
    let carts = this.data.carts;
    carts[index].selected = !carts[index].selected
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },

  del(e){
    // console.log(e)
    const index = e.target.dataset.index;
   
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    })
    this.getTotalPrice()

  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})