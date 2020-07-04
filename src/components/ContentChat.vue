<template>
    <div class="content mb-4">        
        <b-row class="m-0 p-0">
            <b-col cols="12" class="col-md-11 p-0 m-0">
                <b-media>
                    <template v-slot:aside>
                        <a-avatar shape="square" :size="48" icon="user" />            
                    </template>

                    <h6 class="font-weight-medium p-0 m-0">Andi H.</h6>                
                    <p class="text__secondary font-weight-lighter">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates perspiciatis hic nesciunt iure odit dolor dolores esse a! Explicabo facere voluptatum quisquam iusto rerum aut reiciendis molestiae, excepturi veniam fugit.</p>
                </b-media>
            </b-col>
            <b-col cols="12" class="col-md-1 p-0 m-0 text-right">
                <small>20 juni 2020</small>
            </b-col>
        </b-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ContentChat',
    props: {
        msg: String,
    },
});
</script>