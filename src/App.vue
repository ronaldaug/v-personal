<template> 
    <div id="app">
    <!-- Navbar -->
      <ps-navbar 
      title="Personal - Mobile UI" 
      @click-right="leftSidenav = true" 
      right-icon="fa-bars"/>

    <!-- popup -->
    <ps-popup :trigger.sync="popupBottom" animate="bottom">
        <ps-navbar 
        color="white"
      title="Popup Bottom" 
      @click-left="popupBottom = false" 
      left-icon="fa-angle-left"/>
      <h4>This is popup bottom page.</h4>
    </ps-popup>

    <ps-popup :trigger.sync="popupLeft" animate="left">
       <ps-navbar 
       color="blue"
      title="Popup Left" 
      @click-left="popupLeft = false" 
      left-icon="fa-angle-left"/>
      <h4>This is popup left page.</h4>
    </ps-popup>

        <!-- Sidenav -->
      <ps-sidenav :trigger.sync="leftSidenav">
        <ps-navbar 
        color="dark" 
        left-icon="fa-angle-left" 
        @click-left="leftSidenav = false"
         title="Sidenav Example"/>
        <h4>This is side nav</h4>

        <ps-list @click="leftSidenav = false">
           <div slot="first"><i class="fa fa-arrow-right"></i></div>
           <div slot="content">Close sidenav</div>
        </ps-list>

        <ps-list>
           <div slot="first"><i class="fa fa-arrow-right"></i></div>
           <div slot="content">List Two</div>
        </ps-list>

          <ps-list>
           <div slot="first"><i class="fa fa-arrow-right"></i></div>
           <div slot="content">List Three</div>
        </ps-list>
      </ps-sidenav>

      <!-- Buttons -->
       <ps-button 
       @click="leftSidenav = true"
      text="Open Sidenav" 
      color="dark" />

           <ps-button 
       @click="popupBottom = true"
      text="Popup Bottom" 
      color="red" />

           <ps-button 
       @click="popupLeft = true"
      text="Popup Left" 
      color="red" />

      <ps-button 
      text="Dark" 
      color="dark" />
            <ps-button 
      text="Green" 
      color="green" />
            <ps-button 
      text="Red" 
      color="red" />
            <ps-button 
      text="Blue" 
      color="blue" />
     <ps-button 
      text="Blue" 
      color="yellow" />
 <ps-button 
       @click="leftSidenav = true"
       icon="fa-bars"
       />
  <ps-button 
      text="Dark" 
      icon="fa-user" />

     <ps-button 
      text="Default"/>

<ps-button text="I am disable" disable />

      <ps-button 
      text="Full Btn" 
      size="full" 
      color="green" />
  <br>
  <hr>

  <ps-card 
    author="Hannah"
    avatar-url="https://randomuser.me/api/portraits/women/54.jpg"
    right-icon="fa-angle-down"
    image-url="https://cdn.dribbble.com/users/1023861/screenshots/4555047/dribbble.png"
    :date="new Date()"
    link="https://www.google.com"
    title="The most beautiful web app UI designs"
    excerpt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad pariatur quibusdam odio consectetur eaque. Molestias omnis sapiente optio repellendus quidem, libero fuga velit id laudantium odit quas corrupti quaerat maiores dicta rerum alias odio eius accusantium amet rem, debitis earum?" 
    @click-right-icon="clickRightIcon = true"
  />
  <ps-modal :bg="true" text="You have clicked the right icon!" :trigger.sync="clickRightIcon"></ps-modal>


    <!-- Lists -->
    <ps-list>
       <div slot="first">
         <ps-avatar alt="avatar name" url="https://randomuser.me/api/portraits/women/80.jpg" circle />
         </div>
       <div slot="content">This is content</div>
       <div slot="second">Secondary</div>
    </ps-list>
        <ps-list>
       <div slot="first">
         <ps-avatar alt="avatar name" url="https://randomuser.me/api/portraits/women/20.jpg" circle />
         </div>
       <div slot="content">This is content</div>
       <div slot="second">Secondary</div>
    </ps-list>
        <ps-list>
       <div slot="first">
         <ps-avatar alt="avatar name" url="https://randomuser.me/api/portraits/women/30.jpg" circle />
         </div>
       <div slot="content">This is content</div>
       <div slot="second"><i class="fa fa-angle-right"></i></div>
    </ps-list>
        <ps-list>
       <div slot="first">
         <ps-avatar alt="avatar name" url="https://randomuser.me/api/portraits/women/25.jpg" circle />
         </div>
       <div slot="content">This is content</div>
       <div slot="second"><i class="fa fa-angle-right"></i></div>
    </ps-list>
     
  <hr>
  <!-- overlay -->
   <ps-button text="Open overlay" @click="overlay = true" />
     <ps-overlay :bg="false" text="This is overlay" :trigger.sync="overlay" loading></ps-overlay>


<!-- popup -->
   <ps-button text="Open popup" @click="modal = true" />
        <ps-modal :bg="true" text="This is popup" :trigger.sync="modal" loading></ps-modal>

<!-- tabs -->
          <ps-tab id="no-icon" :tabs="tabs" color="dark">
             <div><a href="#">One</a></div>
             <div><img src="https://randomuser.me/api/portraits/women/30.jpg"></div>
             <div>Three</div>
          </ps-tab>

          <ps-icon-tab id="with-icon" :icons="icons" color="dark">
             <div><img src="https://randomuser.me/api/portraits/women/10.jpg"></div>
             <div><img src="https://randomuser.me/api/portraits/women/30.jpg"></div>
             <div>Three</div>
          </ps-icon-tab>
      <br>
      <hr>
          <form>
               <p> 
                 Username = <b>{{myForm.username}}</b> 
               <br> Email = <b>{{myForm.email}}</b> 
               <br>  Address = <b>{{myForm.address}}</b>
                 </p>
              <ps-input type="text" placeholder="Username" :value="myForm.username" @input="myForm.username = $event.target.value" name="username" label="Username" required/>
              <ps-input type="email" placeholder="Email" :value="myForm.email" @input="myForm.email = $event.target.value" name="email" label="Email" required/>
              <ps-input type="textarea" placeholder="Address" :value="myForm.address" @input="myForm.address = $event.target.value" name="address" label="Address" required/>
              <ps-switch :label="myForm.isCheck" @click="myForm.isCheck = $event.target.checked?'True':'False'"/> 
              
               <p>  Selected = <b>{{myForm.fruit}}</b></p> 
              <ps-select :value="myForm.fruit" :options="options" @select="myForm.fruit = $event.target.textContent" />
              
                <p>Check List = (<span :key="index" v-for="(check,index) in myForm.checkList"> {{index!== 0?',':null}}  {{check}}</span>)</p>
                <ps-checkbox name="chicken" @click="add" label="Buy chicken" checked />
                <ps-checkbox name="beer" @click="add" label="Buy Beer" />
                 <ps-checkbox name="wisky" @click="add" label="Buy Wisky" />
                  <ps-checkbox name="ice" @click="add" label="Buy Ice" checked />
             <ps-checkbox name="drug" @click="add" label="Or this is disable"  disabled/>

                <ps-button text="Submit" @click="submitForm = true" />
                <ps-modal :bg="true" text="Submit button is clicked!" :trigger.sync="submitForm"></ps-modal>

            </form>
    </div>
</template>

<script>
import psNavbar from './components/ps-navbar';
import psPopup from './components/ps-popup';
import psSidenav from './components/ps-sidenav';
import psButton from './components/ps-button';
import psCard from './components/ps-card';
import psList from './components/ps-list';
import psOverlay from './components/ps-overlay';
import psModal from './components/ps-modal';
import psAvatar from './components/ps-avatar';
import psTab from './components/ps-tab';
import psIconTab from './components/ps-icon-tab';
import psInput from './components/ps-input';
import psSwitch from './components/ps-switch';
import psSelect from './components/ps-select';
import psCheckbox from './components/ps-checkbox';

export default{
  name: 'demo',
  components:{psNavbar,psPopup,psSidenav,psButton,psCard,psList,psOverlay,psModal,psAvatar,psTab,psIconTab,psInput,psSwitch,psSelect,psCheckbox},
  data(){
    return{
      myForm:{
        username:'',
        email:'',
        address:'',
        isCheck:'',
        fruit:'bananna',
        checkList:[]
      },
      options:["orange","bananna","apple","mango"],
      tabs:["one","two","three"],
      icons:["fa-user","fa-car","fa-plane"],
      leftSidenav:false,
      popupLeft:false,
      popupBottom:false,
      modal:false,
      clickRightIcon:false,
      overlay:false,
      sidenavBottom:false,
      sidenavRight:false,
      submitForm:false
    }
  },
  methods:{
    add(e){
      if(e.checked)
        if(!this.myForm.checkList.includes(e.checked))
              this.myForm.checkList.push(e.name)
            else
              this.myForm.checkList.splice(e.name,1)
      else
              this.myForm.checkList.splice(e.name,1)
    }
  }
}
</script>

<style>
body{
  margin:0;
  overflow-x: hidden;
}
#app{
  padding:0;
  margin:0;
  width: 100vw;
  height:100vh;
}
p{
  margin:10px;
}
</style>
