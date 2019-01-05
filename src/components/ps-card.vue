<template>
    <div class="card">
     <div class="c-head">
               <ps-list>
                <div slot="first">
                    <a :href="authorUrl">
                        <ps-avatar :alt="author" :url="avatarUrl||`https://via.placeholder.com/200/000000/FFFFFF/?text=${author}`" circle />
                    </a>
                </div>
               <div slot="content"><h4>{{author}}</h4><small>{{date?date.toLocaleString():''}}</small></div>
               <div slot="second" @click="$emit('click-right-icon', $event)"><i :class="`fa ${rightIcon||'fa-ellipsis-h'} fa-2x`"></i></div>
               </ps-list>
     </div>
     <a :href="link">
         <div class="c-img"><img :src="imageUrl||`https://via.placeholder.com/400/000000/FFFFFF/?text=${title}`" :alt="title"></div>
         <div class="c-content">
        <h3>{{title}}</h3>
        <p>{{excerpt}}</p>
        </div>
     </a>
 </div>
</template>

<script>
import psList from './ps-list'
import psAvatar from './ps-avatar'
export default {
    components:{psList,psAvatar},
    props:{
        authorUrl:{
            type:String,
            validator(prop){
                return prop.includes('http://') || prop.includes('https://')
            }
        },
        author:{
            type:String
        },
        avatarUrl:{
            type:String
        },
        date:{
            type:Date
        },
        rightIcon:{
            type:String
        },
        imageUrl:{
            type:String,
            validator(prop){
                return prop.includes('http://') || prop.includes('https://')
            }
        },
        link:{
            type:String,
             validator(prop){
                return prop.includes('http://') || prop.includes('https://')
            }
        },
        title:{
            type:String,
            default:"Title"
        },
        excerpt:{
            type:String
        }
    }
}
</script>

<style lang="scss">
/* Card */
.card{
    background:$white;
    border-radius:10px;
    margin:10px;
    box-shadow:1px 2px 10px rgba(116,116,116,0.30);
  }
  
  .card .c-head{
    border-top-left-radius:10px;
    border-top-right-radius:10px;
  }

  .card .c-head .list .content{
    line-height:0;
  }
  
  .card .c-content{
    padding:10px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
  }
  .card .c-img{
    width:100%;
    height:200px;
  }
  .card .c-img img{
      width:100%;
      height:200px;
      object-fit: cover;
  }
  
  /*  small card  (thumbnail) */
  .small-card{
    border-radius:6px;
  }
  .small-card .c-content{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;    
    box-shadow:1px 2px 10px rgba(116,116,116,0.30);
    background:$white;
    clear:both;
    padding:10px;
  }
  .small-card .c-img{
    width:100%;
    height:80px;
  }
  .small-card .c-img img{
    width:100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height:80px;
    object-fit: cover;
  }
  .card .ps-list .list h4{
      margin:0;
  }
  .card .ps-list{
      background:transparent;
  }
  .card div.list div:nth-child(2){
      line-height:28px;
  }
  /* card slide */
  .tns-nav {
    text-align: center;
  }
  .tns-nav button{
    border:0;
    background:#ccc;
    width:10px;
    height:10px;
    padding:0;
    border-radius:100%;
    margin:-4px 4px 0 4px;
  }
  .tns-nav button.tns-nav-active{
    background:#444;
  }
  .tns-nav button:focus{
    outline:none;
  }
</style>
