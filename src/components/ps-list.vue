<template>
     <div class="ps-list" @click="$emit('click', $event)">
         <div class="list">
             <slot name="first"></slot>
             <slot name="content"></slot>
             <slot name="second"></slot>
         </div>
     </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
/* Lists */
.ps-list{
    background:$white;
  }
  .list{
    display:flex;
    border-bottom:1px solid $border-color;
  }
  
  div.list div:first-child{
     flex:1;
     width: 56px;
     padding:10px;
     height:auto;
     text-align:center;
  }
  
  div.list div:nth-child(2){
     margin:0;
     line-height:56px;
     margin:0 0 0 10px;
     width:auto;
     flex:4;
  }
  div.list div:last-child{
    flex:1;
    color:$text-color;
    font-size:12px;
    line-height:36px;
    padding:10px;
    width:56px;
    text-align:right;
  }
  
    .side-nav div.list div:nth-child(2){
      text-align:left;
    }
    a.active div.list,
    a.active div.list div:nth-child(2){
      color:$blue;
      font-weight:bold;
    }
    .side-nav .list i.fa.fa-angle-right {
    margin-top: 10px;
    font-size: 1.3em;
    }
</style>
