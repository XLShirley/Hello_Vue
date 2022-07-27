<template>
    <div class="itany">
        <my-a></my-a>
        <my-b></my-b>
        <my-c></my-c>
    </div>
</template>
<script>
import myA from '@/communication/myA.vue'
import myB from '@/communication/myB.vue'
import myC  from '@/communication/myC.vue'
export default {
    components:{
        myA,
        myB,
        myC,
    }
}
</script>