<template>
  <div class="popup">
    <b-modal id="profile" hide-header hide-footer>
      <b-container class="p-3">
        <b-form>
          <b-row class="mb-3">
            <h5 class="text-dark">User Profile</h5>
          </b-row>
          <b-row align-v="center" class="justify-content-center mb-4">
            <b-col cols="3" class="p-0 text-center">
              <b-button variant="link" @click="randomFace">
                <b-avatar rounded :size="72" :src="picture"></b-avatar>
              </b-button>
            </b-col>
          </b-row>
          <b-row align-v="center" class="justify-content-center mb-4 px-2">
            <b-col cols="8" class="p-0">
              <b-form-input id="input-2" required placeholder="Nickname" class="text-center"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="mb-4 justify-content-center">
            <b-col cols="1" v-for="color in colors" :key="color.name" class="p-1">
              <div :class="[color.name]" class="color-picker" @click="selectColor(color.color)"></div>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="4" class="px-1">
              <b-button variant="outline-danger" block>Cancel</b-button>
            </b-col>
            <b-col cols="8" class="px-1">
              <b-button variant="success" block>Save</b-button>
            </b-col>
          </b-row>
        </b-form>
      </b-container>
    </b-modal>

    <b-modal id="new-group" hide-header hide-footer>
      <b-container class="p-3">
        <b-row class="mb-3">
          <h5 class="text-dark">Group Chat</h5>
        </b-row>

        <b-form inline class="justify-content-between" align-v="center">
          <b-form-input id="group-name" placeholder="Enter group name" class="col-9 mb-3"></b-form-input>

          <b-form-checkbox
            v-model="lock"
            name="check-button"
            button
            class="col-2 p-0 mb-3"
            button-variant="warning"
          >
            <lock-icon size="1.5x" class="text-white" v-if="lock"></lock-icon>
            <unlock-icon size="1.5x" class="text-white" v-else></unlock-icon>
          </b-form-checkbox>

          <b-form-input
            id="group-password"
            placeholder="Enter password"
            class="col-12 mb-3"
            v-if="lock"
          ></b-form-input>

          <b-button variant="primary" class="col-12">Create</b-button>
        </b-form>

        <b-row class="justify-content-center my-2">
          <b-col class="text-center">
            <span class="text-dark">OR</span>
          </b-col>
        </b-row>

        <b-form inline class="justify-content-between">
          <b-form-input id="group-name" placeholder="Enter group name" class="col-9"></b-form-input>

          <b-button variant="primary" class="col-2">Join</b-button>
        </b-form>
      </b-container>
    </b-modal>    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { UserIcon, ChevronLeftIcon, ChevronRightIcon, UnlockIcon, LockIcon } from 'vue-feather-icons';

export default Vue.extend({
  name: 'Popup',
  components: {
    UserIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    UnlockIcon,
    LockIcon,
  },
  data() {
    return {
      lock: false,
      name: '',
      picture: 'https://api.adorable.io/avatars/face/eyes1/nose2/mouth1/f44336',
      selected: {
        eyes: 'eyes1',
        nose: 'nose2',
        mouth: 'mouth1',
        color: 'f44336',
      },
      faceHistory: [],
      face: {
        eyes: [
          'eyes1',
          'eyes10',
          'eyes2',
          'eyes3',
          'eyes4',
          'eyes5',
          'eyes6',
          'eyes7',
          'eyes9',
        ],
        nose: [
          'nose2',
          'nose3',
          'nose4',
          'nose5',
          'nose6',
          'nose7',
          'nose8',
          'nose9',
        ],
        mouth: [
          'mouth1',
          'mouth10',
          'mouth11',
          'mouth3',
          'mouth5',
          'mouth6',
          'mouth7',
          'mouth9',
        ],
      },
      colors: [
        { name: 'red', color: 'f44336' },
        { name: 'pink', color: 'e91e63' },
        { name: 'purple', color: '9c27b0' },
        { name: 'deep-purple', color: '673ab7' },
        { name: 'indigo', color: '3f51b5' },
        { name: 'blue', color: '2196f3' },
        { name: 'light-blue', color: '03a9f4' },
        { name: 'cyan', color: '00bcd4' },
        { name: 'teal', color: '009688' },
        { name: 'green', color: '4caf50' },
        { name: 'light-green', color: '8bc34a' },
        { name: 'lime', color: 'cddc39' },
        { name: 'yellow', color: 'ffeb3b' },
        { name: 'amber', color: 'ffc107' },
        { name: 'orange', color: 'ff9800' },
        { name: 'deep-orange', color: 'ff5722' },
        { name: 'brown', color: '795548' },
        { name: 'grey', color: '9e9e9e' },
        { name: 'blue-grey', color: '607d8b' },
        { name: 'white', color: 'ffffff' },
        { name: 'black', color: '000000' },
      ],
    };
  },
  methods: {
    selectColor(color) {
      this.selected.color = color;
      this.createAvatar();
    },
    randomFace() {
      this.selected.eyes = this.face.eyes[
        Math.floor(Math.random() * this.face.eyes.length)
      ];
      this.selected.nose = this.face.nose[
        Math.floor(Math.random() * this.face.nose.length)
      ];
      this.selected.mouth = this.face.mouth[
        Math.floor(Math.random() * this.face.mouth.length)
      ];

      this.createAvatar();
    },
    createAvatar() {
      const url = ['https://api.adorable.io/avatars/face'];

      if (this.selected.eyes) {
        url.push(this.selected.eyes);
      }

      if (this.selected.nose) {
        url.push(this.selected.nose);
      }

      if (this.selected.mouth) {
        url.push(this.selected.mouth);
      }

      if (this.selected.color) {
        url.push(this.selected.color);
      }

      this.picture = url.join('/');
    },
  },
});
</script>