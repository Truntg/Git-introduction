import { createBrowserRouter } from "react-router-dom";
import HomeProduct from "./product/HomeProduct";
import ProductDetail from "./product/ProductDetail";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeProduct/>,
    },
    {
        path: "/productDetail",
        element: <ProductDetail/>,
        children: [
            // {
            //     path: "/posts/9",
            //     element: <PostDetail/>,
            // },
        ],
    },    
]);
export {router};