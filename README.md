# Renderless toast notifications for Vue 3

This project was made in context of [Vue.js Cologne meetup](https://www.meetup.com/de-DE/Vue-JS-Cologne/)

In `src/libs/toastNotificationsPlugin.ts` you can find a simple plugin which implements basic toast notification functionality, and provides a renderless `toast-notifications` component.

By using renderless components, you are able to style your notifications how you want. In `src/components` you can find three examples of using `toast-notifications`.

## Will it work with Vue 2?

Currently implementation of plugin is using Vue 3 API. So to make it work with Vue 2, you have to rewrite how plugin adds global methods. But in general, concept of renderless components is also working in Vue 2.
