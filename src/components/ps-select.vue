<template>
    <div>
    <div class="input-wrap">
        <div @click="trigger = true" class="select-box">
                <span v-if="value">{{value}}</span>
                <span v-if="!value">Select one</span>
                <span style="float:right" :class="`fa fa-angle-down fa-2x ${trigger?'rotate-icon':''}`"></span>
        </div>
    </div>
     <div :style="{background:'#00000052'}" :class="`overlay fade-in ${trigger?'open-popup':''}`"> <div class="loading-box">
                <ul class="select">
                    <li :id="'select-'+index" :value="opt" :key="index" @click="onSelect($event,opt,index)" v-for="(opt,index) in options">{{opt}}</li>
                </ul>
            </div> 
    </div>
    </div>
</template>

<script>
export default{
    props:{
         options:{
            type:Array,
       },
       value:{
           type:String
       }
    },
   data(){
       return{
            trigger:false
       }
   },
   methods:{
       onSelect(e,opt,index){
           this.$emit('select', e); 
           const selectedOpt = document.querySelector(".select #select-"+index);
           selectedOpt.className = "select-animate";
           setTimeout(()=>{
                this.trigger = false; 
                selectedOpt.className="";
           },500)
       }
   }
}
</script>

<style lang="scss">
/* Reset Select */
.select-box{
    background:#fff;
    max-height:40px;
    padding:10px;
}
ul.select{
    padding:0;
    overflow: hidden;
}
ul.select li{
    list-style:none;
    width:96vw;
    background:#fff;
    padding:20px 0;
    transition:all ease 0.4s;
}
ul.select li:last-child{
    border-bottom:0;
}
ul.select li:hover{
    background:#333;
    color:#fff;
}

.select-box span.fa.fa-angle-down.fa-2x{
    margin-top: -6px;
    transition:all ease 0.4s;
}
.rotate-icon{
    transform:rotate(360deg);
    -webkit-transform:rotate(360deg);
    -moz-transform:rotate(360deg);
}
 .select-animate {
    background:#333;
    color:#fff;
 -webkit-animation-name: pulse;
  animation-name: pulse;
  font-weight:bold;
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes pulse {
  0% {
    background:#333;
    color:#fff;
  font-weight:bold;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  50% {
  -webkit-transform: scale3d(1.05, 1.05, 1.05);
  transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  }
  @keyframes pulse {
  0% {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  50% {
  -webkit-transform: scale3d(1.05, 1.05, 1.05);
  transform: scale3d(1.05, 1.05, 1.05);
  }
  100% {
    background:#333;
    color:#fff;
  font-weight:bold;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  }
  } 
</style>
