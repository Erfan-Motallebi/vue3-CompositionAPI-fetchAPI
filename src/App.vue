<template>
  <div v-if="posts.length">
    <PostList :posts="posts" />
  </div>
  <div v-else>
    <h3>{{ error }}</h3>
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import getPosts from "./composables/getPosts"; // composables

export default {
  name: "App",
  components: {
    PostList,
  },
  setup() {
    const { posts, error, dataFetch } = getPosts();
    dataFetch();
    return { posts, error, dataFetch };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
}
</style>
