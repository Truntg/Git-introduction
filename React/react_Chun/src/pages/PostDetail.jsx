import { useParams } from "react-router-dom"


const PostDetail = () => {
    const param = useParams();

    console.log(param);
  return (
    <div>PostDetail</div>
  )
}

export default PostDetail