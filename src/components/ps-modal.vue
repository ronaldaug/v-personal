<template>
      <div :style="bg?'background:#00000052':''" @click="$emit('update:trigger',false)" :class="`modal-box fade-in ${trigger?'open-popup':''}`"> <div class="popup-box"><h3>{{text}}</h3></div> </div>
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
<style lang="scss">
.popup,.modal-box,.overlay{
    z-index:999;
    position:fixed;
    width:100vw;
    height:100vh;
    opacity:0;
    top:0;
    -webkit-transform:translate(0,0);
    transform:translate(0,0);
    visibility:hidden;
    padding:0; /* older webkit */ 
  transition: all 400ms cubic-bezier(0.770, 0.000, 0.175, 1.000); /* easeInOutQuart */ 
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000); /* easeInOutQuart */
  }
  .popup{
    padding:60px 10px 10px 10px;
    background:$white;
  }
  .overlay{
    display:flex;
    justify-content: center;
  }
  .modal-box{
    display: flex;
    justify-content: center;
  }
  .popup-box{
      text-align:center;
      padding:0.6em;
  }
  .popup-box h3{
    margin:10px;
  }
  
  .popup-box{
    padding:10px 10px 20px 10px;
    box-shadow:10px 30px 100px rgba(54, 54, 54, 0.38);
    background:$white;
    border-radius: 10px;
    width:70%;
    margin:auto;
  }

  .animate-right{
    -webkit-transform:translate(100%,0);
            transform:translate(100%,0);
  }
  .animate-left{
    -webkit-transform:translate(-100%,0);
            transform:translate(-100%,0);
  }
  .animate-bottom{
    -webkit-transform:translate(0,100%);
            transform:translate(0,100%);
  }
  .zoom-in{
    -webkit-transform:scale(0);
            transform:scale(0);
  }

  .open-popup{
    z-index:9999;
    -webkit-transform:translate(0,0);
            transform:translate(0,0);
            transform:scale(1);
    visibility:visible;
    opacity:1;
  }

</style>
