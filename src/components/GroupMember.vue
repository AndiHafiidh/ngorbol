<template>
  <div class="group-member mb-3">    
    <b-row>
      <b-col cols="12">
        <b-media class="align-items-center">
          <template v-slot:aside>
              <a-avatar shape="square" :size="48" icon="user" />            
          </template>

          <h6 class="font-weight-medium p-0 m-0">Malang Kucewara</h6>
        </b-media>
      </b-col>          
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GroupMember',
});
</script>