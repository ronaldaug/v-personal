<script>
export default {
    functional:true,
    render(h,ctx){
      return h("div",{
        attrs:{
          class:"ps-list"
        }
      },[ctx.children])
    }
}
</script>

<style>

</style>
