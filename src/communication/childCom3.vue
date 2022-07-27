<template>
    <div class="border">
        <p>childCom3的$attrs: {{ $attrs }}</p>
    </div>
</template>
<script>
export default {
    props: {
        coo: String,
        title: String
    }
};
</script>