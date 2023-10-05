import { Outlet, useNavigate } from "react-router-dom"


const Post = () => {
    const navi = useNavigate();

    const handleClick1 = () =>{
        navi("/posts/9")
    }
  return (
    <div>
       
        <h3>Post</h3><Outlet></Outlet>
        <nav>Link 1</nav>
        <nav>Link2</nav>
        <button onClick={handleClick1}>PostDetail</button>
    </div>
  )
}

export default Post