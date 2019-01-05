<script>
export default {
  props:{
     tabs:{
        type:Array,
     },
     id:{
       type:String
     },
     color:{
       type:String,
       default:'dark'
     }
  },
  functional:true,
  render(h, ctx){
      var parentContent = ctx.props.tabs.map((pro,index)=>{
        return h('div',{
            attrs:{
                id:pro,
               class:`tab ${index === 0?'active':''}`
            },
            on:{
              click (e) {
                const showPanel = "opacity:1;transform:translateX(0);z-index:0";
                const hidePanel = "opacity:0;transform:translateX(80vw);z-index:-9;width:0;";
                const tabs = document.querySelectorAll(".tab-wrap .tab");
                tabs.forEach(t=>{
                      t.classList.remove("active");
                })
                e.target.classList.add("active");
                const panels = document.querySelectorAll("#"+ctx.props.id+" .panel");
                panels.forEach(p=>{
                  p.setAttribute('style',hidePanel);
                })
                const selectId = document.querySelector("#"+ctx.props.id+" #"+e.target.id.replace(/\s+/, ""));
                selectId.setAttribute("style",showPanel);
              },
              mousedown(e){
                let tab = e.target;
                var x = e.pageX - tab.offsetLeft,
                y = e.pageY - tab.offsetTop,
                w = tab.offsetWidth;
                var ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = x + 'px';
                ripple.style.top  = y + 'px';
                ripple.style.setProperty('--scale', w);
                tab.appendChild(ripple);
                setTimeout(function() {
                ripple.parentNode.removeChild(ripple);
                }, 500);
              }
            }
         }, pro)
      });
      var childernContent =  ctx.children.filter(node =>!node.text).map((child,index) => {
                            return h("div",{
                            attrs:{
                              id:ctx.props.tabs[index].replace(/\s+/, ""),
                              class:"panel",
                              style:`${index === 0?'opacity:1;transform:translateX(0);z-index:0;':''}`
                            }
                          },  [child])
                          });
     var lastChildern =  h('div', {attrs:{id:ctx.props.id,class:"panel-wrap"}}, childernContent);
     var lastParent =  h('div', {attrs:{class:`tab-wrap tab-${ctx.props.color}`}}, parentContent);
         var content = [].concat(lastParent, lastChildern) ;
              return h( 'div',{}, content)           
   }
}
</script>

<style lang="scss">
/* ~~~~~~~~~~~~~~
      Tabs
~~~~~~~~~~~~~~ */
.tab-wrap{
    display:flex;
    clear:both;
  }
  .tab{
   overflow:hidden;
    text-align:center;
    height: 48px;
    line-height: 48px;
    flex:1;
    padding:4px;
    position: relative;
  }
  .tab:after{
    width:0;
    background:$yellow;
    height:2px;
    content:"";
    position: absolute;
    transition:all ease 0.4s;
    bottom:0;
    left:50%;
    transform:translate(-50%);
  }
  .tab.active:after{
    width:100%;
  }
  
  /* Tab panel */
  .panel{
    opacity:0;
    position:absolute;
    top:0;
    left:0;
   width:100vw; 
  transition: all 400ms cubic-bezier(0.770, 0.000, 0.175, 1.000); /* easeInOutQuart */ 
  transition-timing-function: cubic-bezier(0.770, 0.000, 0.175, 1.000); /* easeInOutQuart */}
  .panel-wrap{
    position:relative;
    height:100px;
    margin-bottom:20px;
  }
  .p-content{
    padding:10px;
  }
  
  /* Blue Tab */
  .tab-blue .tab{
    background:$blue;
    color:$white;
  }
  .tab-blue .active{
      border-bottom:2px solid $yellow;
  }
  
  /*  Dark Tab */
  .tab-dark .tab{
    background: $dark;
    color:$white;
  }
  .tab-dark .active{
      border-bottom:2px solid $yellow;
  }
</style>
