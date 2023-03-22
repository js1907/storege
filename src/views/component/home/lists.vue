<style>
.navacontent {
    width: 100%;
}

.navacontent img {
    width: 150px;
    height: 100px;
}

.navacontent .content {
    width: 50%;
    float: left;
    text-align: center;
    margin-top: 8px;
}

.navacontent .content .botom {
    width: 100%;
}

.navacontent .content .botom span {
    width: 50%;
    float: left;
}

.navacontent .content .botom i {
    width: 50%;
    float: right;
}
</style>
<template>
    <div>
        {{ title }}
        <ul class="navacontent">
            <li class="content" v-for="v in props.list" :key="v.product_id">
                <router-link :to="`/detail/${v.product_id}`">
                    <div>
                        <img :src="v.product_img_url" />
                        <h5>{{ v.product_name }}</h5>
                    </div>
                </router-link>
                <div class="botom">
                    <span>{{ '￥' + v.product_price }}</span>
                    <i @click="addshop(v,v.product_id)" class="icon iconfont icon-a-xianxing_anquanbaozhangfuben42"></i>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import {shopstore} from '../../../store/shoppingdata'
const store = shopstore()
let title = ref('列表')
const props = defineProps({
    list: Array
})

const addshop = v =>{
    store.addshop(v)
}
    // console.log(props)
//     watch(
//     () => props.list,
//   (newval,oldval) =>(
//     console.log(newval,oldval, 'watch')
//   )
// )
    // console.log(props.list,'list')
</script>