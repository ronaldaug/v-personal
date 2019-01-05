<template>
    <div :style="bg?'background:#00000052':''" @click="$emit('update:trigger',false)" :class="`overlay fade-in ${trigger?'open-popup':''}`"> <div class="loading-box" :style="bg?'color:#fff':''"><i v-if="loading" class="fa fa-spinner fa-2x"></i><p>{{text}}</p></div> </div>
</template>

<script>
export default {
    props:{
        bg:{
            type:Boolean
        },
        text:{
            type:String
        },
        loading:{
            type:Boolean
        },
        trigger:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>

</style>
