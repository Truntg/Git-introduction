/* eslint-disable react/jsx-no-undef */
import { useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  
  const naviagte = useNavigate();

  const isLogin = localStorage.getItem("isLogin") === 'true';

  console.log(isLogin);
  if (!isLogin) return<Navigate to="/login"/>;
  const onLogin = () => {
    localStorage.setItem("isLogin", true);
    naviagte("/");
  }
  return (
    <div>
      <button onClick={onLogin}></button>
    </div>
  )
}

export default ProductDetail