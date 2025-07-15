<script setup>
defineOptions({
  inheritAttrs: false,
});
console.log("test");
</script>

<template>
  <VBtn>
    <template>
      <slot />
    </template>
  </VBtn>
</template>
