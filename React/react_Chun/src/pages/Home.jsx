import { Link, useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/post");
    }

  return (
    <div>
        <h2>Home</h2>
        {/*c1 sử dụng Link */}
        <Link to='/post'>About by link</Link>
        <button onClick={handleClick}>About</button>
    </div>
  )
}

export default Home