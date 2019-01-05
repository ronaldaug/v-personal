<script>
export default {
  functional: true,
  name: 'Avatar',
  props:{
    url:{
      type:String
    },
    size:{
      type:String,
      validator(prop){
          return ["normal","small","big"].indexOf(prop) > -1;
      }
    },
    alt:{
      type:String
    },
    circle:{
      type:Boolean
    }
  },
  render(createElement, {props}) {
    const {url,size,alt,circle} = props;
    return [
        createElement( "Img", {
          attrs:{
            class:`avatar ${size?size+"-avatar":"normal-avatar"} ${circle?"circle-avatar":""}`,
            src:url,
            alt:alt
          }
        } ),
    ]; 
  }
}
</script>

<style lang="scss">
/* avatar */
.avatar{
    object-fit: cover;
  }
  .circle-icon{
    color:$white;
    background:$border-color;
    width:36px;
    line-height:36px;
    height:36px;
    border-radius:100%;
  }
  .circle-avatar{
     border-radius:100%;
  }
  .small-avatar{
     width:24px;
     height:24px;
  }
  .normal-avatar{
      width:36px;
      height:36px;
  }
  .big-avatar{
    width:72px;
    height:72px;
  }
</style>
