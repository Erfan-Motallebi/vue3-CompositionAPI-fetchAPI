import { ref } from "vue";
const getPost = (id) => {
    let post = ref([]);
    const error = ref(null);
    const dataFetch = async () => {
        try {
            const response = await fetch("http://localhost:3000/posts/" + id);
            if (response.status === 200) {
                post.value = await response.json();
            } else {
                throw new Error("Failed to fetch data");
            }
            // const jsonText = await response.json();
        } catch (err) {
            error.value = err.message;
        }
    };

    return {
        post,
        error,
        dataFetch
    }
}

export default getPost