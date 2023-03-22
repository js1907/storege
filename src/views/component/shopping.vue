<style>
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    .content{
        width: 100%;
        height: 100%;
        margin: 0;
    }
    .content .inner{
        width: 95%;
        height: 80px;
        padding: 10px 10px;
        /* margin-left: 30px; */
    }
    .content .inner img{
        width: 30%;
        height: 100%;
        float: left;
    }
    .content .inner .cotxt{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow:initial;
        width: 65%;
        float: left;
        vertical-align: middle;
    }
    .content .inner .ipt{
        height: 100%;
        width: 5%;
        float: left;
        accent-color: #ff00ff;
        border-color: pink;
    }
    .content .inner .price{
        float: right;
        margin-top: 20px;
    }
    .content:last-child{
        padding-bottom: 30px;
    }

    </style>
<template>
    {{ title }}
    <div>
        <ul>
            <li class="content" v-for="v in store.shopdata" :key="v.product_id">
                <div class="inner">
                    <input class="ipt" type="checkbox">
                    <img :src="v.product_img_url" alt="">
                    <span class="cotxt">{{ v.product_name }}</span>
                    <p class="price">￥{{ v.product_uprice }}</p>
                    <span>{{ store.num }}</span>
                    <button @click="changenum1">-</button>
                    <button @click="changenum2">+</button>
                </div>
            </li>
            
        </ul>
    </div>
</template>
<script setup>
    import {ref} from'vue'
    import { getDetail } from '../../utils/api';
    import {shopstore} from '../../store/shoppingdata'

    const store = shopstore()
    function changenum1(){
        store.num--
    }
    function changenum2(){
        store.num++

    }
    var title = ref('购物车')
</script>