import { ref } from "vue";
const getPosts = () => {
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

    return {
        posts,
        error,
        dataFetch
    }
}

export default getPosts