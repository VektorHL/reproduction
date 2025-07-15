<script setup>
defineOptions({
  inheritAttrs: false,
});
console.log('test')
</script>

<template>
  <div asdf="ff" :style="sdf">text</div>
  <VBtn
    boolean-prop
    disabled
    style="background-color: #fff;"
  >
    <template
      v-slot:append
    >
      <slot>text</slot>
      <pre>another text</pre>
    </template>
  </VBtn>
</template>
