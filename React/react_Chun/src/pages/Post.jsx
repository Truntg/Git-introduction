// import { Outlet, useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


const schem = yup.object().shape({
  name: yup.string().required("name k đc để trống"),
  address: yup.string().required("hãy điền địa chỉ"),
  phone: yup.string().required("nhập số đt"),
  email: yup.string().email("email k hợp lệ").required("vui lòng nhập email"),
});
const Post = () => {
    // const navi = useNavigate();

    // const handleClick1 = () =>{
    //     navi("/posts/9")
    // }
    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, formState:{errors} } = useForm({
      defaultValues: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
      resolver: yupResolver(schem),
    });
  
    const onSubmit = (data) => {
      console.log(data);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Tên:</label>
          <input type="text" name="name" ref={register} />
        </div>
        <div>
          <label>Địa chỉ:</label>
          <input type="text" name="address" ref={register} />
        </div>
        <div>
          <label>Số điện thoại:</label>
          <input type="tel" name="phone" ref={register} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" ref={register} />
        </div>
        <div>
          <label>
            Trong vòng 14 ngày qua, bạn có dấu hiệu triệu chứng gì không?
          </label>
          <input type="checkbox" name="symptomFever" ref={register} /> Sốt
          <input type="checkbox" name="symptomCough" ref={register} /> Ho
          <input
            type="checkbox"
            name="symptomShortnessOfBreath"
            ref={register}
          />{' '}
          Khó thở
        </div>
        <button type="submit">Gửi Khai Báo</button>
      </form>
    );
}

export default Post