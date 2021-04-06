<template>
  <div class="tw-fixed tw-top-6 tw-right-6 tw-w-80">
    <toast-notifications v-slot:default="{items}">
      <transition-group name="toast-item">
        <div class="tw-rounded tw-shadow-sm tw-py-3 tw-px-4 mb-2 tw-text-sm"
             :class="{
          'tw-bg-blue-300': item.type === 'info',
          'tw-bg-yellow-300': item.type === 'warning',
          'tw-bg-green-300': item.type === 'success',
          'tw-bg-red-300': item.type === 'error',
        }"
             v-for="item of items"
             :key="'tw'+item.id"
             @click="item.close()"
        >
          {{ item.text }}
        </div>
      </transition-group>
    </toast-notifications>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ToastTailwind'
});
</script>

<style scoped>
.toast-item-enter-active,
.toast-item-leave-active,
.toast-item-move {
  transition: all .25s ease;
}

.toast-item-enter-from,
.toast-item-leave-to{
  opacity: 0;
  transform: translateX(60px);
}

.toast-item-leave-active {
  position: absolute;
  left: 0;
  right: 0;
}
</style>
