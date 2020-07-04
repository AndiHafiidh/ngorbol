<template>
    <div class="new-group">        
        <div class="p-0 pt-2">
            <div class="d-flex justify-content-center" v-b-modal.new-group>
                <b-media class="align-items-center">
                    <template v-slot:aside>
                        <plus-square-icon size="52" class="text__secondary"></plus-square-icon>           
                    </template>

                    <h6 class="font-weight-medium p-0 m-0">Create or Join Group</h6>                
                </b-media>            
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PlusSquareIcon, UnlockIcon, LockIcon } from 'vue-feather-icons';

export default Vue.extend({
    name: 'NewGroupChat',
    components: {
        PlusSquareIcon,
        UnlockIcon,
        LockIcon,
    },
    data() {
        return {
            lock: false,
        };
    },
});
</script>