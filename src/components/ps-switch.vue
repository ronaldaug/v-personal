<template>
    <div class="input-wrap">
                <div class="switch-wrap">
                <label class="switch">
                  <input type="checkbox"
                @click="$emit('click', $event)">
                 <div></div>
               </label>
               <div class="switch-label"> {{label}} </div>
              </div>
    </div>
</template>

<script>
export default {   
  props:{
    checked:{
      type:Boolean
    },
    label:{
      type:String
    }
  }
}
</script>

<style lang="scss">
/*  ----------------------------------
Switch
 -------------------------------------*/

 .switch input {
    position: absolute;
    visibility: hidden;
  }
  
  /**
   * 1. Adjust this to size
   */
  .switch-wrap{
    display:flex;
  }
  .switch {
    display: inline-block;
    font-size: 40px; /* 1 */
    height: 1em;
    width: 2em;
    background: rgba($border-color,0.60);
    border-radius: 1em;
    -moz-box-shadow:    inset 0 0 6px #777;
    -webkit-box-shadow: inset 0 0 6px #777;
    box-shadow:         inset 0 0 6px #777;
  }
  
  .switch div{
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #999;
    box-shadow: 0 0.1em 0.3em rgba(0,0,0,0.3);
    -webkit-transition: all 300ms;
       -moz-transition: all 300ms;
            transition: all 300ms;
  }
  
  .switch input:checked + div{
    -webkit-transform: translate3d(100%, 0, 0);
    -moz-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    background:$green;
  }
  
    .switch-label {
    margin-left: 14px;
    padding-top: 16px;
    line-height: 1em;
    height: 1em;
  }
</style>
