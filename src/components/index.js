import Vue from "vue";
import psNavbar from './ps-navbar';
import psPopup from './ps-popup';
import psSidenav from './ps-sidenav';
import psButton from './ps-button';
import psCard from './ps-card';
import psList from './ps-list';
import psOverlay from './ps-overlay';
import psModal from './ps-modal';
import psAvatar from './ps-avatar';
import psTab from './ps-tab';
import psIconTab from './ps-icon-tab';
import psInput from './ps-input';
import psSwitch from './ps-switch';
import psSelect from './ps-select';
import psCheckbox from './ps-checkbox';

const Components =  {psNavbar,psPopup,psSidenav,psButton,psCard,psList,psOverlay,psModal,psAvatar,psTab,psIconTab,psInput,psSwitch,psSelect,psCheckbox}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
