<template>
         <div class="input-wrap">
                <label class="check-label">
                <input type="checkbox" 
                    :name="name"
                @change="$emit('change', $event.target)" 
                @input="$emit('input', $event.target)"
                @click="$emit('click', $event.target)"
                 :disabled="disabled" :checked="checked"
                 ><span>{{label}}</span></label>
        </div>
</template>

<script>
export default {
    props:{
        label:{
            type:String
        },
        checked:{
            type:Boolean
        },
        disabled:{
            type:Boolean
        },
        name:{
            type:String
        }
    },
    mounted(){
           if(this.checked)
             this.$emit('click', this)
    }

}
</script>

<style lang="scss">
div.input-wrap label.check-label{
    position:relative;
    font-size:1.4em;
    overflow: hidden;
}
input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  
  input[type="checkbox"] + span:before {
    font-family:"FontAwesome";
    content:"\f096";
    display: inline-block;
    width: 16pt;
    padding: 2px 0 0 3px;
    margin-right: 0.5em;
    transition:all ease 0.2s;
    -moz-transition:all ease 0.2s;
    -webkit-transition:all ease 0.2s;
  }
  
  input[type="checkbox"]:checked + span:before {
    content: '\f046';
    transform:rotate(360deg);
    transition:all ease 0.2s;
    -moz-transition:all ease 0.2s;
    -webkit-transition:all ease 0.2s;
    color:$green;
  }

  
  input[type="checkbox"]:disabled + span {
    color: #999;
  }
  
  input[type="checkbox"]:not(:disabled) + span:hover:before {
    text-shadow: 0 1px 2px #77F;
  }
</style>
