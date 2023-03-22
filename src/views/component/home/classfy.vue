<style>
    .listsimg{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .lists{
        width: 100%;
        text-align: center;
    }
    .lists li{
        width: 20%;
        float: left;
    }
</style>
<template>
    <div>
        <ul class="lists">
            <li v-for="(i,v) in Classfy" :key="i">
                <img class="listsimg" :src="`/src/assets/images/${i.img}`">
                <p>
                    {{ i.title }}
                </p>
            </li>
        </ul>
    </div>
</template>
<script setup>
    import {ref, watch} from'vue'
    import {Classfy} from'../../../utils/navaData'
 
</script>
