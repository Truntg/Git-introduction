/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Admin = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { isAdmin } = props;

    const navi = useNavigate();
    useEffect(() => {
        if(!props.isAdmin){
            alert('không được vào')

            setTimeout(() => {
                navi("/");
            },3000)
        }
    }, [navi, props.isAdmin])
  return (
    <div>Admin</div>
  )
}

export default Admin