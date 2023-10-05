import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {

    function isUserAuthorized() {
        // Thực hiện kiểm tra quyền truy cập của người dùng và trả về true nếu họ có quyền, ngược lại trả về false.
      }
      
    const {id} = useParams();
    const navita = useNavigate();
    
    if (!isUserAuthorized()) {
        navita('/unauthorized');
        return null;
      }
  return (
    <div>ProductDetail : {id}</div>
  )
}

export default ProductDetail