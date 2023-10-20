import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createAsyncThunk } from '@reduxjs/toolkit';

const schema = yup.object().shape({
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  password: yup.string().required('Vui lòng nhập mật khẩu'),
});
function Login() {
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Xử lý đăng nhập
    console.log(data);
  };

  // First, create the thunk
  export const fetchPosts = createAsyncThunk(
    'login/fetchPosts',
    async (payload, thunkAPI) => {
    }
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Mật khẩu:</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => <input type="password" {...field} />}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  );
}

export default Login;
