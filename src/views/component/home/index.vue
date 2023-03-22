<template>
    <!-- <routerlink></routerlink> -->
    <classfy />
    <lists :list="list"/>
</template>
<script setup>
    import { onMounted, ref} from'vue'
    import lists from'./lists.vue'
    import classfy from'./classfy.vue'
    import {getlist} from '../../../utils/api'

    let list = ref([])
    onMounted(async()=>{
        let res = await getlist()
        list.value = res.data
        // console.log(list,'index')
    })
</script>