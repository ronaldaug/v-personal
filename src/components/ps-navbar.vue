<template>
    <div :class="`navbar navbar-${color||'white'}`">
            <div class="slot-left">
                <button v-if="leftIcon" @click="$emit('click-left', $event)" class="back-btn trigger-btn" data-id="side-nav" data-animation="ripple">
                    <i @click="$emit('click-left', $event)" :class="'fa '+leftIcon+' fa-2x'"></i>
                </button>
            </div>
            <div class="center-title">
                <h3 v-if="title">{{title}}</h3>
            </div>
            <div class="slot-right">
                <button @click="$emit('click-right', $event)" v-if="rightIcon" class="back-btn trigger-btn" data-id="side-nav" data-animation="ripple">
                    <i  @click="$emit('click-right', $event)" :class="'fa '+rightIcon+' fa-2x'"></i>
                </button>
            </div>
  </div>
</template>

<script>
export default {
    name:"psNavbar",
    props:{
        title:{
            type:String,
        },
        leftIcon:{
            type:String,
        },
        rightIcon:{
            type:String,
        },
        color:{
          type:String,
          validator(prop){
           return ["white","dark","blue"].indexOf(prop) > -1;
          }
        }
    },
    mounted(){
        document.querySelector("body").setAttribute("style","margin-top:60px;")
    }
}
</script>

<style lang="scss">
    /* ~~~~~~~~~~~~~~
     Navbar
~~~~~~~~~~~~~~ */
.navbar{
    position:fixed;
    top:0;
    left:0;
    z-index:99;
    display:flex;
    background:$white;
    width:100%;
    height:48px;
    margin-bottom:10px;
    box-shadow:0 2px 10px rgba(80, 80, 80, 0.27);
    padding:4px;
  }
  
  .navbar .slot-left,
  .navbar .slot-right{
    line-height:56px;
    text-align:center;
    flex:1;
  }
  .navbar .center-title{
    text-align:center;
    line-height:56px;
    flex:4;
  }
  .navbar h2,.navbar h3,.navbar h4,.navbar i.fa{
    margin:0;
  }
  .navbar-blue i.fa,
  .navbar-dark i.fa{
    color:$white;
  }
  .navbar-blue button:hover{
    background:rgba($blue,0.60);
  }
  .navbar-dark button:hover{
    background:#555;
  }
  /* ~~~~~~~~~~~~~~
       Navbar back button
  ~~~~~~~~~~~~~~ */
  .back-btn{
    border-radius: 100%;
    width: 48px;
    height: 48px;
    background:rgba($dark,0.11);
    overflow:hidden;
    border:0;
    border-radius:100%;
    transition:all ease 0.8s;
  }
  .back-btn:hover{
    background:#ddd;
  }
  .back-btn:focus{
    outline:none;
  }
  
        /* navbar colors */
        .navbar{
          background:$white;
          color:$text-color;
        }
        .navbar-dark{
          background:$dark;
          color:$white;
        }
        .navbar-blue{
          background:$blue;
          color:$white;
        }
        .navbar-white{
          color:$text-color;
          background-color:$white;
        }
        .navbar-white .back-btn{
          background:none;
        }
      

</style>
