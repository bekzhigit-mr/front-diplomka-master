<script>
export default {
  name: "BoxView",
  props: ["title", "description"],
}

</script>

<template>
  <div class="bg-white border border-solid border-pink-200 overflow-hidden text-start rounded-2xl w-full">
    <header class="p-5 py-2.5">
      <div class="font-medium font-bold text-xl py-2">
        {{ title }}
      </div>
      <div class="text-gray-500 text-xs">{{ description }}  </div>
    </header>
    <main class="p-5">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>

</style>