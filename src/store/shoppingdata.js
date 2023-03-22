import {defineStore} from 'pinia';

export const shopstore = defineStore('shop',{
    state:()=>({
        shopdata:[],
        num:1
    }),
    getters:{
        total(state){
            return state.shopdata.length
        }
    },
    actions:{
        addshop(item) {
            // 校验商品是否已经存在于购物车中
            if (this.shopdata.some(i => i.product_id === item.product_id)) {
              console.log('商品已经存在于购物车中')
              return
            }
            // 商品不存在于购物车中，可以添加到购物车中
            this.shopdata.push({
                ...item
            })
          },
          increaseQuantity(productId) {
            const product = this.shopdata.find(p => p.product_id === productId)
            if (product) {
              product.quantity++
            }
          }
    },
    // 数据持久化-缓存  localstoreage数据永久保存  sessionstorage 页面关闭数据消失
    persist:{
        enabled:false
    },
    strategies:[
        {
            Storage:localStorage
        }
    ]
})