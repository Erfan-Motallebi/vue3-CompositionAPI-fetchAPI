<template>
  <div class="single-post">
    <h2>{{ post.title }}</h2>
    <p>{{ snippet }} . . . .</p>
    <p v-for="tag in post.tags" v-bind:key="tag.id">
      {{ tag }}
    </p>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "singlepost",
  props: ["post"],

  setup(props) {
    const snippet = computed(() => {
      return props.post.body.slice(0, 61);
    });
    return { snippet };
  },
};
</script>

<style>
h2 {
  color: red;
  line-height: 3;
}
p {
  text-align: center;
  width: 50%;
  margin: auto;
}
div > p:nth-of-type(1) ~ p {
  font-family: "Courier New", Courier, monospace;
  color: blue;
}
</style>
