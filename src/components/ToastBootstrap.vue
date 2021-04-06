<template>
  <div class="toasts-wrapper">
    <toast-notifications v-slot:default="{items}">
      <transition-group name="toast-item">
        <div class="mt-2 toast showing align-items-center" role="alert" aria-live="assertive" aria-atomic="true"
             v-for="item of items"
             :key="'bs'+item.id"
             :class="{
          'bg-info': item.type === 'info',
          'bg-warning': item.type === 'warning',
          'bg-success': item.type === 'success',
          'bg-danger': item.type === 'error',
          'text-white': item.type === 'success' || item.type === 'error'
        }"
        >
          <div class="d-flex">
            <div class="toast-body">
              {{ item.text }}
            </div>
            <button type="button" class="btn-close me-2 m-auto" aria-label="Close" @click="item.close()"></button>
          </div>
        </div>
      </transition-group>
    </toast-notifications>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ToastBootstrap'
});
</script>

<style scoped>
.toasts-wrapper {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.toast-item-enter-active,
.toast-item-leave-active,
.toast-item-move {
  transition: all 0.25s ease;
}

.toast-item-enter-from {
  opacity: 0;
  transform: translateX(60px);
}

.toast-item-leave-to {
  opacity: 0;
  transform: translateX(60px) translateY(-100%);
}

.toast-item-leave-active {
  position: absolute;
}
</style>
