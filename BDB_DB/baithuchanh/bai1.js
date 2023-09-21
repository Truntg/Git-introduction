// import axios from "axios";

// async function fetchPosts(){
//     const result = await axios.get("http://jsonplaceholder.typicode.com/posts");
//     console.log("result", result);
// }
// fetchPosts();
import axios from "axios";

async function fetchPokemon(){
    const response = await  axios.get('https://pokeapi.co/api/v2/pokemon');

    // console.log("response", response.data);

    return response.data;
}

fetchPokemon();