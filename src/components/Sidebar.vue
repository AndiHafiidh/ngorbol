<template>
  <div class="sidebar row align-items-stretch height__100">
    <b-col cols="12">
      <Profile />
    </b-col>
    <b-row class="px-4">
      <b-col class="px-4">
        <small class="font-weight-bold text-uppercase">My Groups</small>
      </b-col>
    </b-row>
    <b-col cols="12">
      <div class="group-list py-2">
        <group-chat></group-chat>
        <group-chat class="active"></group-chat>        
        <group-chat></group-chat>
        <group-chat></group-chat>
        <group-chat></group-chat>
        <group-chat></group-chat>
        <group-chat></group-chat>        
        <group-chat></group-chat>
      </div>
    </b-col>
    <b-col cols="12">
      <new-group-chat></new-group-chat>
    </b-col>    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Profile from '@/components/Profile.vue';
import NewGroupChat from '@/components/NewGroupChat.vue';
import GroupChat from '@/components/GroupChat.vue';
import PrivateChat from '@/components/PrivateChat.vue';

export default Vue.extend({
  name: 'Sidebar',
  components: {
    Profile,
    NewGroupChat,
    GroupChat,
    PrivateChat,
  },
  data() {
    return {
      groupInfoVisible: false,
      chatRoomVisible: false,
    };
  },
  methods: {
    showGroupInfo() {
      this.groupInfoVisible = true;
    },
    onCloseGroupInfo() {
      this.groupInfoVisible = false;
    },
    showChatRoom() {
      this.chatRoomVisible = true;
    },
    onCloseChatRoom() {
      this.chatRoomVisible = false;
    },
  },
});
</script>