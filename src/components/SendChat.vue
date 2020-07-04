<template>
  <div class="send-chat d-flex align-items-center">    
    <b-col>
      <b-form inline>            
        <b-col cols="9" class="col-md-10">
          <b-form-input id="input-none" placeholder="Write something..." style="width:100%"></b-form-input>      
        </b-col>    
        <b-button class="col-3 col-md-2" variant="outline-light" size="sm">
          <send-icon size="32" class="text__secondary"></send-icon>
        </b-button>      
      </b-form>    
    </b-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SendIcon } from 'vue-feather-icons';

export default Vue.extend({
  name: 'SendChat',
  components: {
    SendIcon,
  },
});
</script>