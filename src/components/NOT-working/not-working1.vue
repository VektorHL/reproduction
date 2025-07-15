<script setup>
defineOptions({
  inheritAttrs: false,
});
console.log("test");
</script>

<template>
  <VBtn
  >
    <template
      v-for="(_, slotName) in $slots"
      v-slot:[slotName]="slotProps"
    >
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </VBtn>
</template>
