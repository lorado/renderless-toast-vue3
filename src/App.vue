<template>
  <div class="tw-px-5 tw-flex tw-items-center tw-justify-center tw-h-screen tw-bg-gray-200">
    <div class="tw-flex tw-mb-80 tw-flex-col tw-w-full tw-max-w-3xl tw-bg-white tw-rounded-xl tw-shadow-sm">
      <div class="tw-py-4 tw-px-6 tw-flex tw-justify-between tw-items-center">
        <h1 class="tw-text-2xl">Renderless toast notification examples</h1>
        <select class="tw-border tw-border-gray-300 tw-rounded-lg tw-p-2" v-model="toastType">
          <option value="raw">Raw print</option>
          <option value="bootstrap">Bootstrap</option>
          <option value="tailwind">Tailwind CSS</option>
        </select>
      </div>
      <form class="tw-py-4 tw-px-6 tw-border-t tw-border-gray-200 tw-grid tw-grid-cols-2 tw-gap-6"
            @submit.prevent="addNotification">
        <div class="tw-col-span-2 tw-flex tw-flex-col">
          <label for="message" class="tw-text-sm tw-text-gray-600 tw-pl-1.5">Message</label>
          <input class="tw-border-b tw-border-gray-300 tw-py-1 tw-px-1.5" v-model="message" id="message"/>
        </div>
        <div class="tw-flex tw-flex-col">
          <label for="type" class="tw-text-sm tw-text-gray-600 tw-pl-1.5">Type</label>
          <select class="tw-border-b tw-border-gray-300 tw-py-1 tw-px-1.5 tw-h-full" v-model="type" id="type">
            <option value="info">info</option>
            <option value="success">success</option>
            <option value="error">error</option>
            <option value="warning">warning</option>
          </select>
        </div>
        <div class="tw-flex tw-flex-col">
          <label for="duration" class="tw-text-sm tw-text-gray-600 tw-pl-1.5">Duration</label>
          <input class="tw-border-b tw-border-gray-300 tw-py-1 tw-px-1.5" v-model="duration" id="duration"/>
        </div>
        <div class="tw-col-span-2 tw-flex">
          <button class="tw-ml-auto tw-rounded-lg tw-bg-green-500 tw-text-white tw-px-4 tw-py-2">Create notification
          </button>
        </div>
      </form>
    </div>
  </div>


  <toast-notifications v-slot:default="{items}">
    <div v-for="item of items">
      [{{ item.type }}] {{ item.text }}
    </div>
  </toast-notifications>


  <ToastRaw v-if="toastType === 'raw'"/>
  <ToastBootstrap v-else-if="toastType === 'bootstrap'"/>
  <ToastTailwind v-else/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/ToastBootstrap.vue';
import ToastBootstrap from './components/ToastBootstrap.vue';
import ToastRaw from './components/ToastRaw.vue';
import ToastTailwind from './components/ToastTailwind.vue';

export default defineComponent({
  name: 'App',
  components: {
    ToastTailwind,
    ToastRaw,
    ToastBootstrap
  },
  data(): {
    toastType: 'raw' | 'bootstrap' | 'tailwind'
    message: string,
    duration: number,
    type: 'info' | 'success' | 'error' | 'warning'
  } {
    return {
      toastType: 'raw',
      message: '',
      duration: 8000,
      type: 'info'
    };
  },
  methods: {
    addNotification() {
      this.$toast(
          {
            type: this.type,
            text: this.message.length === 0 ? this.getRandomMessage() : this.message,
            duration: this.duration
          },
          this.toastType === 'tailwind'
      );

      // reset form
      const availableTypes = ['info', 'success', 'error', 'warning'];
      this.type = availableTypes[Math.floor(Math.random() * availableTypes.length)];
      this.message = '';
    },
    getRandomMessage(): string {
      const lorem = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.';
      return lorem.substr(0, lorem.indexOf(' ', Math.floor(Math.max(10, Math.random() * lorem.length))));
    }
  }
});
</script>

<style>
</style>
