<template>
  <div class="home">      
    <b-row class="p-0 m-0">
      <b-col cols="3" class="height__100 px-0 d-none d-lg-block">          
        <sidebar/>
      </b-col>
      <b-col cols="12" lg="9" class="background__secondary height__100">
        <chat-body></chat-body>        
      </b-col>
    </b-row>    
    <Popup />

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Sidebar from '@/components/Sidebar.vue';
import Popup from '@/components/Popup.vue';
import ChatBody from '@/components/ChatBody.vue';

export default Vue.extend({
  name: 'home',
  components: {
    Sidebar,
    ChatBody,
    Popup,
  },
});
</script>
