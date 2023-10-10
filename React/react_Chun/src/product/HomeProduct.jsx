/* eslint-disable react-hooks/rules-of-hooks */

import { Navigate, useNavigate } from 'react-router-dom'

const HomeProduct = () => {

  const navi = useNavigate();
  const isLogin = localStorage.getItem("isLogin") === 'true';

  console.log(isLogin);
  if (!isLogin) return<Navigate to="/login"/>;
    
  

  const handleClick = () => {
    navi("/product/:productId")
  }
  return (
    <div>
        <h2>HomeProduct</h2>
        <button onClick={handleClick}>ProductDetail</button>
    </div>

  )
}

export default HomeProduct