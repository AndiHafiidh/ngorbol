<template>
  <div class="profile">
    <b-row class="profile pt-4 justify-content-center" align-v="center" v-b-modal.profile>
      <b-col cols="12" class="text-center">
        <a-avatar shape="square" :size="48" icon="user" />
      </b-col>
      <b-col cols="12" class="text-center mt-3">
        <h6 class="font-weight-medium">Andi Hafiidh</h6>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Profile',
  components: {},
  data() {
    return {
      groupInfoVisible: false,
      chatRoomVisible: false,
    };
  },
  methods: {},
});
</script>