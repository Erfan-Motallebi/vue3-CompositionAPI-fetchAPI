<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import SinglePost from "./SinglePost";

export default {
  name: "postlist",
  props: ["posts"],
  components: { SinglePost },

  setup() {},
};
</script>

<style scoped></style>
