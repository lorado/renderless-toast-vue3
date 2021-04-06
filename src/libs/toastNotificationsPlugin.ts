import { App, reactive } from 'vue';

export interface ToastNotificationOptions {
    type: 'error' | 'info' | 'warning' | 'success'
    text: string
    duration?: number
}

export interface ToastNotification extends ToastNotificationOptions {
    id: string
    close: () => void
    timer?: number
}

const notifications: ToastNotification[] = reactive([]);

export default {
    install: (app: App, options: any) => {
        function closeToast(item: ToastNotification) {
            const indexOfItem = notifications.indexOf(item);
            if (indexOfItem === -1) {
                return;
            }
            notifications.splice(indexOfItem, 1);
        }

        app.config.globalProperties.$toast = (params: ToastNotificationOptions, reverse = false) => {
            let item: ToastNotification = {
                id: Math.random().toString(36).substr(2),
                duration: 8000,
                close: () => closeToast(item),
                ...params
            };

            if (item.duration && item.duration > 0) {
                item.timer = setTimeout(() => item.close(), item.duration);
            }

            if (reverse) {
                notifications.unshift(item);
            } else {
                notifications.push(item);
            }
            return item;
        };

        app.config.globalProperties.$closeToast = closeToast;

        app.component('toast-notifications', {
            render() {
                return this.$slots.default({
                    items: notifications
                });
            }
        });
    }
};

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $toast: (params: ToastNotificationOptions, reverse?: boolean) => ToastNotification;
        $closeToast: (item: ToastNotification) => void
    }
}
