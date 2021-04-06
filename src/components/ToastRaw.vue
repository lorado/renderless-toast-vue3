<template>
  <div class="toasts-wrapper">
    <toast-notifications v-slot:default="{items}">
        <div class="notification"
             v-for="item of items"
             :key="'raw'+item.id"
             @click="item.close()"
        >
          {{ item }}
        </div>
    </toast-notifications>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ToastRaw'
});
</script>

<style scoped>
.toasts-wrapper {
  position: fixed;
  left: 20px;
  bottom: 20px;
  right: 20px;
}

.notification {
  padding: 16px;
  background: #fff;
  margin-top: 8px;
  border: 1px solid #888;
}
</style>
