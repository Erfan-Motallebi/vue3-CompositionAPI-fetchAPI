<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <h1>{{ error }}</h1>
  </div>
</template>

<script>
import getPost from "../composables/getPost.js";
export default {
  name: "Details",
  props: ["id"],

  setup(props) {
    const { post, error, dataFetch } = getPost(props.id);
    dataFetch();

    return { post, error, dataFetch };
  },
};
</script>

<style></style>
