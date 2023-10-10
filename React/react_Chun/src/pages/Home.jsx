/* eslint-disable react/jsx-no-undef */
// import { useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


const schema = yup.object().shape({
  email: yup.string().required("email is requires").email('email is invalid'),
  fistName: yup.string().required("fistName is requires"),
  lastName: yup.string(),
});
const Home = () => {

    //const navigate = useNavigate();
    // eslint-disable-next-line no-undef
    const {control, handleSubmit, formState:{errors}} = useForm({
      defaultValue: {
        fistName: 'Nguyen',
        lastName:'Trung',
        email:"",
      },
      resolver: yupResolver(schema),
    })

    const onSubmitFormCallBack = (value) => {
      console.log(value);
    };

    console.log(errors);
    // const handleClick = () => {
    //     navigate("/post");
    // }

  return (
    <div>
        <h2>Home</h2>
        <form onSubmit={handleSubmit(onSubmitFormCallBack)}>
          <Controller name="fistName" control={control}
          render={({field}) =>{
            return (
              <>
              <input {...field}/>
              <small>{errors["fistName"]}</small>
              </>
            )
          }}/>

          <Controller name="lastName" control={control}
                    render={({field}) =>{
                      return (
                        <>
                        <input {...field}/>
                        {errors.fistName&&<p>{errors.fistName.message}</p>}
                        </>
                      )
                    }}/>

          <Controller name="email" control={control}
                    render={({field}) =>{
                      return (
                        <>
                        <input {...field}/>
                        <small>{errors["email"]}</small>
                        </>
                      )
                    }}/>

          <button type="submit"></button>
        </form>
        {/*c1 sử dụng Link */}
        {/* <Link to='/post'>About by link</Link>
        <button onClick={handleClick}>About</button> */}
    </div>
  )
}

export default Home