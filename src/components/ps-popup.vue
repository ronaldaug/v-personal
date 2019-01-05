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
                     class:`popup ${ctx.props.trigger?'open-popup':''} ${ctx.props.animate?'animate-'+ctx.props.animate:'animate-left'}`,
                }
            },[ctx.children])
   }
}
</script>
