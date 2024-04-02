<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeader",
  props: ["title"],
});
</script>

<template>
  <header class="">
    <div class="flex justify-between items-center px-2 py-2 border border-b border -gray-100">
      <div
          @click="$emit('back')"
          class="cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-full flex-shrink-1 text-center p-3"
      >
        <el-icon class="cursor-pointer text-xl" style="color: #444444">
          <Back />
        </el-icon>
      </div>
      <div class="font-semibold text-lg mx-5 text-center leading-5">{{ title }}</div>
      <div
          @click="$emit('action')"
          class="w-11 h-8 cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-full"
      >
        <slot name="action"></slot>
      </div>
    </div>
    <slot name="footer"></slot>
  </header>
</template>

<style scoped lang="scss"></style>
