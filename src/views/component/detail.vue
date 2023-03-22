<template>
    <div>
        <div>
            <button @click="back">返回</button>
            <div v-for="v in detaildata" :key="v.product_id">
                <img :src="v.product_img_url" />
                <p>{{ v.product_name }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref,onMounted,onUnmounted} from'vue'
    import { useRoute,useRouter } from 'vue-router';
    import {getDetail} from '../../utils/api'
    import {mainstore} from '../../store/index'
    const store = mainstore()
    // store.isshow = false


    const route = useRoute() //实例化
    const router = useRouter()
    let detaildata = ref([])
    // let detail_imgurl = ref([])
    //获取id
    onMounted(()=>{
        getDetaildate(route.params.id)
        store.$patch(()=>{
            store.isshow = false
        })
    })
    onUnmounted(()=>{
        store.$patch(()=>{
            store.isshow = true
        })
    })

    //请求数据
    async function getDetaildate(id){
        let res = await getDetail({mId:id})
        detaildata.value = res.data[1]
        // detail_imgurl.value = res.data[0]
        // console.log(detaildata)
    }

    function back(){
        router.go(-1)
        // store.isshow = true
    }

</script>