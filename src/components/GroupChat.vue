<template>
    <div class="group">        
        <div class="d-flex justify-content-between align-items-start pt-3 px-4">
            <b-media>
                <template v-slot:aside>
                    <a-avatar shape="square" :size="48" icon="user" />            
                </template>

                <h6 class="font-weight-medium p-0 m-0">Group Malang Kucewara</h6>
                <p class="m-0 font-weight-normal">Andi H.</p>
                <p class="text__secondary-variant font-weight-lighter">Halo piye kabar e rek?</p>
            </b-media>            
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'GroupChat',
    props: {
        msg: String,
    },
});
</script>