<template>
  <div class="single-post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h2>{{ post.title }}</h2>
    </router-link>
    <p>{{ snippet }} . . . .</p>
    <p v-for="tag in post.tags" v-bind:key="tag">
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
