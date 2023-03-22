<style>
    *{
        /* margin: 0; */
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
    .footer{
        position: absolute;
        width: 100%;
        bottom: 0;
        text-align: center;
        background-color: white;
        position: fixed;
    }

    .footer ul li{
        position: relative;
        width: 25%;
        height: 40px;
        line-height: 40px;
        float: left;
        text-align: center;
        color: gray;
    }
    .slected:active{
        color: red;
    }
    .footer ul li span,i{
        color: gray;
    }
    .footer .slected .navabto{
        background-color: red;
        color: white;
        width: 20px;
        height: 20px;
        float: left;
        z-index: 1;
        position: fixed;
        border-radius: 8px;
        line-height: 20px;
        align-items: center;
    }

</style>
<template>
    <div>
        <div class="footer">
        <ul>
            <li v-for="v in NavaData" :key="v.path" class="slected">
                <router-link :to="v.path">
                    <i :class="v.icon"></i>
                    <span>{{v.title}}</span>
                </router-link>
                <span v-show="v.path == '/shopping'" class="navabto">{{ total }}</span>
            </li>
        </ul>
    </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import {NavaData} from '../utils/navaData'
    import {shopstore} from '../store/shoppingdata'
    import {storeToRefs} from 'pinia'
    const store = shopstore()

    const {total} = storeToRefs(store)
    // console.log(store.total)
</script>