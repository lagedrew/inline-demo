<template>
  <div style="display: flex; flex-direction: column">
    <textarea class="about" ref="about" id="about" />

    <div class="about" ref="about2" id="about2">
      <h1>This is an about page 2</h1>
    </div>
  </div>
  <button @click="save">Save</button>

  <pre>
    {{ content }}
  </pre>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import { useInline } from "../composables/useInline.js";
import { ref } from "vue";

const about = ref();
const about2 = ref();

useInline(about);
useInline(about2);
const content = ref();

//console.log(inline);

const save = () => {
  console.log(about.value);
  console.log(about2.value);
  content.value = about2.value.innerHTML;
};
</script>
