import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';


const PostDetail = () => {
  const { handleSubmit, control, errors } = useForm({
    defaultValues: {
      recipient: "",
      subject: "",
      content: "",
      file: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const validationSchema = yup.object().shape({
    recipient: yup.string().required('Vui lòng nhập người nhận'),
    subject: yup.string().required('Vui lòng nhập chủ đề'),
    content: yup.string().required('Vui lòng nhập nội dung'),
    file: yup.mixed().required('Vui lòng tải lên tệp tin'),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Người nhận:</label>
        <Controller
          name="recipient"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.recipient && <p>{errors.recipient.message}</p>}
      </div>
      <div>
        <label>Chủ đề:</label>
        <Controller
          name="subject"
          control={control}
          render={({ field }) => <input {...field} />}
        />
        {errors.subject && <p>{errors.subject.message}</p>}
      </div>
      <div>
        <label>Nội dung:</label>
        <Controller
          name="content"
          control={control}
          render={({ field }) => <textarea {...field} />}
        />
        {errors.content && <p>{errors.content.message}</p>}
      </div>
      <div>
        <label>Tải lên tệp tin:</label>
        <Controller
          name="file"
          control={control}
          render={({ field }) => <input type="file" {...field} />}
        />
        {errors.file && <p>{errors.file.message}</p>}
      </div>
      <button type="submit">Gửi Email</button>
    </form>
  );
}

export default PostDetail