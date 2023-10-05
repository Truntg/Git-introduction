
import { useNavigate } from 'react-router-dom'

const HomeProduct = () => {
    const navi = useNavigate();

    const handleClick = () => {
        navi("/productDetail")
    }
  return (
    <div>
        <h2>HomeProduct</h2>
        <button onClick={handleClick}>ProductDetail</button>
    </div>

  )
}

export default HomeProduct