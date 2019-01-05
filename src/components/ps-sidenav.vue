<script>
export default {
  props:{
     trigger:{
       type:Boolean,
       default:false
     },
     animate:{
         type:String,
         validator(prop) {
              return ["left", "right","bottom"].indexOf(prop) > -1;
         }
     }
  },
  functional:true,
  render(h, ctx){
            return h("div",{
                    attrs:{
                     class:`popup side-nav ${ctx.props.trigger?'open-popup':''} ${ctx.props.animate?'animate-'+ctx.props.animate:'animate-left'}`,
                }
            },[ctx.children])
   }
}
</script>
<style lang="scss" scoped>
    .side-nav{
        width:80vw;
        box-shadow:1px 2px 100px rgba(111,111,111,0.40);
    }
</style>
