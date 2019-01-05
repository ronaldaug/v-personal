<template>
        <div class="input-wrap">
                <label :for="name">{{label}} <span class="require" v-if="required">*</span></label>  
                <div v-if="type !== 'textarea'"  class="input-effect">
                        <input 
                        :required="required" 
                        class="ipt" 
                        :placeholder="placeholder"
                        @mousedown="rippleEffect" 
                        :name="name" :type="type" 
                        :value="value"
                        @change="$emit('change', $event)" 
                @input="$emit('input', $event)"
                @click="$emit('click', $event)">
                </div>
                <div v-if="type === 'textarea'" class="textarea-effect">
                        <textarea 
                        :required="required" 
                        class="ipt" 
                        :placeholder="placeholder"
                        @mousedown="rippleEffect" 
                        :name="name" :type="type" 
                        :value="value"
                        @change="$emit('change', $event)" 
                @input="$emit('input', $event)"
                @click="$emit('click', $event)"></textarea>
                 </div>
        </div>
</template>

<script>
export default {
    props:{
        type:{
            type:String
        },
        value:{
            type:String
        },
        name:{
            type:String,
            default:"input name"
        },
        label:{
            type:String,
            default:"label name"
        },
        required:{
            type:Boolean
        },
        placeholder:{
          type:String
        }
    },
    methods:{
        rippleEffect(e){
              let inputWrap = e.target.parentNode;
                var x = e.pageX - inputWrap.offsetLeft,
                y = e.pageY - inputWrap.offsetTop,
                w = inputWrap.offsetWidth;
                var ripple = document.createElement('span');
                ripple.className = 'ripple-dark';
                ripple.style.left = x + 'px';
                ripple.style.top  = y + 'px';
                ripple.style.setProperty('--scale', w);
                inputWrap.appendChild(ripple);
                setTimeout(function() {
                ripple.parentNode.removeChild(ripple);
                }, 500);
        }
    }
}
</script>

<style lang="scss">
/* ~~~~~~~~~~~~~~
     Inputs
~~~~~~~~~~~~~~ */
.input-wrap{
    margin:10px 0;
    width:96vw;
    margin-left: 2vw;
  }
  .input-wrap label{
    margin-left:10px;
  }
  .input-effect{
    overflow:hidden;
    background:$white;
    position:relative;
    width:96vw;
    height:40px;
  }
  input{
    color:$text-color;
    transition:all ease-in-out 0.8s;
    position:absolute;
    top:0;
    z-index:1;
    left:0;
    height:30px;
    width:96vw;
    padding:8px 10px 0 10px;
    border:0;
    background:transparent;
    border-bottom:1px solid $border-color;
  }

.require{
    color:red;
}
.textarea-effect{
  overflow:hidden;
  background:$white;
  position:relative;
  width:96vw;
  min-height: 80px;
}
.textarea-effect textarea{
  resize: both;
  min-height: 70px;
  color:$text-color;
  transition:all ease-in-out 0.8s;
  position:absolute;
  top:0;
  z-index:1;
  left:0;
  width:96vw;
  padding:8px 10px 0 10px;
  border:0;
  background:transparent;
  border-bottom:1px solid $border-color;
}

input:active, input:focus, textarea:focus{
  outline:none;
  border-bottom:1px solid $blue;
}
input::-moz-focus-inner { 
  border: 0; 
}
</style>
