import axios from "axios";

async function fetchPosts(){
    const result = await axios.get("http://jsonplaceholder.typicode.com/posts");
    console.log("result", result);
}
fetchPosts();