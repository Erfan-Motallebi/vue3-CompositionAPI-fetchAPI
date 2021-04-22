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
import { ref } from "vue";
export default {
  name: "App",
  components: {
    PostList,
  },
  setup() {
    let posts = ref([]);
    const error = ref(null);
    const dataFetch = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (response.status === 200) {
          posts.value = await response.json();
        } else {
          throw new Error("Failed to fetch data");
        }
        // const jsonText = await response.json();
      } catch (err) {
        error.value = err.message;
      }
    };
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
