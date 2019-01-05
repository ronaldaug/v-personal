<template>
    <button @mousedown="triggerEffect" @click="$emit('click', $event)" :class="`btn btn-${color} ${btnType}`">
        <i v-if="icon" :class="'fa '+icon"></i>
        {{text}}
    </button>
</template>

<script>
export default{
    props:{
        icon:{
            type:String,
        },
        color:{
            type:String,
            default:"default",
            validator(prop){
              return ["default","red","blue","green","yellow","dark"].indexOf(prop) > -1;
            }
        },
        text:{
            type:String,
            default:''
        },
        size:{
            type:String,
            default:'normal',
            validator(prop){
              return ["normal","small","full"].indexOf(prop) > -1;
            }
        },
        disable:{
            type:Boolean
        }
    },
    data(){
        return{
            btnType:'',
        }
    },
    mounted(){
        if(this.disable){
            this.btnType = 'btn-disable';
        }else{
            this.btnType = this.size !== 'normal'?'btn-'+this.size:'';
        }
    },
    methods:{
        triggerEffect(e){
            if(this.disable){return}
            let effect = this.color !== 'default'?'ripple':'ripple-dark';
            let btn = e.target;
            var x = e.pageX - btn.offsetLeft,
                y = e.pageY - btn.offsetTop,
                w = btn.offsetWidth;
            var ripple = document.createElement('span');
            ripple.className = effect;
            ripple.style.left = x + 'px';
            ripple.style.top  = y + 'px';
            ripple.style.setProperty('--scale', w);
            btn.appendChild(ripple);
            setTimeout(function() {
            ripple.parentNode.removeChild(ripple);
            }, 500);
        }

    }
}
</script>

<style lang="scss">
    /* ~~~~~~~~~~~~~~
     Button
~~~~~~~~~~~~~~ */
.btn {
    position:relative;
    overflow:hidden;
    margin:10px;
    text-align:center;
    height: 56px;
    line-height: 56px;
    padding: 0 3em;
    border-radius: 3em;
    text-transform: uppercase;
    text-decoration: none;
    border:0;
    color: $white;
    transition: background-color 0.5s;
    -moz-transition: background-color 0.5s;
    -webkit-transition: background-color 0.5s;
  }
  
  .btn-small{
    margin:2px;
    height:30px;
    line-height:30px;
    font-size:10px;
    padding:0 2em;
  }
  
  .btn:focus{
    outline:none;
  }
  .btn-full{
    margin:auto;
    clear:both;
    display:block;
    width:90vw;
  }
  
  [data-animation] {
    position: relative;
    overflow: hidden;
  }
  
/* Button colors */
.btn-default{
  color:#444;
  background:$white;
  box-shadow:0 1px 24px rgba(208, 208, 208, 0.71);
}
.btn-blue{
    @include gradient-bg($blue,#7e00c7)
}

.btn-red{
  @include gradient-bg($red,#da0199)
}

.btn-yellow {
  @include gradient-bg($yellow,#cbbd00)
}
.btn-green {
  @include gradient-bg($green,#0099c7)
}
.btn-dark{
  background:$dark;
  box-shadow:0 1px 20px rgba($dark, 0.50);
}


  /* ALL HOVERS */
  .btn-blue:hover{
    background: $blue;
  }
  .btn-green:hover {
    background-color: $green; 
  }
  .btn-yellow:hover {
    background: $yellow;
  }
  .btn-red:hover {
    background: $red;
  }
  .btn-dark:hover {
    background: #000;
  }
  .btn-disable:hover{
    cursor:default;
  }
</style>
