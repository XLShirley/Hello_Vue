<template>
    <div class="my-a">
        <h3>C组件：{{ name }}--{{ age }}</h3>
    </div>
</template>
<script>
import { eventBus } from '@/utils/eventBus'
export default {
    data() {
        return {
            name: '',
            age: ''
        }
    },
    mounted() {
        //在模板编译完成之后执行
        eventBus.$on('data-a', (name) => {
            this.name = name;    //箭头函数内部不会产生新的this，这边如果不用=>,this指代的是eventbus
        }),
            eventBus.$on('data-b', (age) => {
                this.age = age;    //箭头函数内部不会产生新的this，这边如果不用=>,this指代的是eventbus
            })
    }
}
</script>