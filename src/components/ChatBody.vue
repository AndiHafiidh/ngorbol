<template>
  <div class="chat-body row align-items-stretch height__100">
    
    <b-col cols="12">
      <b-row class="header-chat pt-4 px-4" align-v="start">
        <b-col class="col-2 col-sm-1 d-block d-lg-none">
          <menu-icon size="1.5x" class="text__secondary" v-b-toggle.chatroom-list-drawer></menu-icon>
        </b-col>
        <b-col class="col-8 col-sm-10 col-lg-11 px-1">
          <b-media v-b-toggle.group-info>
            <template v-slot:aside>
                <a-avatar shape="square" :size="48" icon="user" />            
            </template>

            <h6 class="font-weight-medium p-0 m-0">Malang Kucewara</h6>
            <p class="text__secondary-variant font-weight-lighter">123 User</p>
          </b-media>
        </b-col>
        <b-col class="col-2 col-sm-1 text-right p-0">            
          <b-dropdown id="dropdown" variant="link" right no-caret>
            <template v-slot:button-content>
              <more-vertical-icon size="24" class="text__secondary"></more-vertical-icon>
            </template>
            <b-dropdown-item>Leave Group</b-dropdown-item>          
          </b-dropdown>
        </b-col>
        <a-divider class="my-1" />
      </b-row>
    </b-col>
    <b-col cols="12">
      <div class="chat-list p-2">
        <content-chat></content-chat>
        <content-chat></content-chat>
        <content-chat></content-chat>
        <content-chat></content-chat>
        <content-chat-me></content-chat-me>
        <content-chat></content-chat>
        <content-chat-me></content-chat-me>
      </div>
    </b-col>
    <b-col cols="12">
      <send-chat></send-chat>
    </b-col>    

    <b-sidebar id="group-info" bg-variant="dark" text-variant="light" right shadow backdrop backdrop-variant="dark">
      <div class="px-3 py-2">
        <b-row class="my-4">
          <b-col cols="12 text-center">
            <a-avatar shape="square" :size="48" icon="user" />            
            <h5 class="mt-3">Malang Kucewara</h5>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col>
            <small class="font-weight-bold text-uppercase">Member</small>
          </b-col>
        </b-row>
        <group-member></group-member>
        <group-member></group-member>
        <group-member></group-member>
        <group-member></group-member>
        <group-member></group-member>
        <group-member></group-member>
        <group-member></group-member>
        <group-member></group-member>
        <group-member></group-member>
        <group-member></group-member>
        <group-member></group-member>
      </div>
    </b-sidebar>

    <b-sidebar id="chatroom-list-drawer" bg-variant="dark" text-variant="light" shadow backdrop backdrop-variant="dark">
      <div class="px-3 py-2">
        <b-row class="my-4">
          <b-col cols="12 text-center" v-b-modal.profile>
            <a-avatar shape="square" :size="48" icon="user" />            
            <h5 class="mt-3">Andi Hafiidh</h5>
          </b-col>
        </b-row>
        <!-- <profile /> -->
        <b-row class="mb-2">
          <b-col>
            <small class="font-weight-bold text-uppercase">My Groups</small>
          </b-col>
        </b-row>
        <group-chat></group-chat>
        <group-chat></group-chat>        
        <group-chat></group-chat>
        <group-chat></group-chat>
        <group-chat></group-chat>
        <group-chat></group-chat>
        <group-chat></group-chat>        
        <group-chat></group-chat>
      </div>
    </b-sidebar>
    
    <!-- <a-drawer
      title="Group Info"    
      :width="360"
      placement="right"
      :closable="false"
      :visible="groupInfoVisible"
      @close="onCloseGroupInfo"
    >
      <b-row>
        <b-col class="text-center">
          <a-avatar shape="square" :size="48" icon="user" />            
        </b-col>
      </b-row>

      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer> -->



    <!-- <a-drawer
      title="Chatrooms"    
      :width="360"
      placement="left"
      :closable="false"
      :visible="chatRoomVisible"
      @close="onCloseChatRoom"
    >
      <search-chat></search-chat>                
      <group-chat></group-chat>
      <group-chat></group-chat>
      <private-chat></private-chat>
      <group-chat></group-chat>
      <private-chat></private-chat>
      <private-chat></private-chat>
      <group-chat></group-chat>        
    </a-drawer> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { MoreVerticalIcon, MenuIcon } from 'vue-feather-icons';
import ContentChat from '@/components/ContentChat.vue';
import ContentChatMe from '@/components/ContentChatMe.vue';
import SendChat from '@/components/SendChat.vue';
import SearchChat from '@/components/SearchChat.vue';
import NewGroupChat from '@/components/NewGroupChat.vue';
import GroupChat from '@/components/GroupChat.vue';
import GroupMember from '@/components/GroupMember.vue';
import Profile from '@/components/Profile.vue';
import PrivateChat from '@/components/PrivateChat.vue';

export default Vue.extend({
  name: 'ChatBody',
  components: {
    MoreVerticalIcon,
    MenuIcon,
    ContentChat,
    ContentChatMe,
    SendChat,
    SearchChat,
    NewGroupChat,
    GroupChat,
    GroupMember,
    PrivateChat,
  },
  data() {
    return {
      groupInfoVisible: false,
      chatRoomVisible: false,
      style: {
        'color': '#EEEEEE',
        'background-color': '#222831',
      },
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