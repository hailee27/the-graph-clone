import React from 'react';
import { Form } from 'antd';
import BasicButton from '../../components/common/BasicButton';
import BasicInput from '../../components/common/BasicInput';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAccessToken } from '../../redux/slices/auth.slice';

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen items-center justify-center flex flex-col space-y-[46px]">
      <h2 className="text-primary font-bold text-[40px]">ログイン</h2>
      <Form
        form={form}
        onFinish={() =>
          dispatch(
            updateAccessToken(
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
            )
          )
        }
      >
        <div className="flex items-center justify-center  flex-col w-[480px]">
          <Form.Item
            className="!w-full "
            name="useName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <BasicInput placeholder="メールアドレス" />
          </Form.Item>
          <Form.Item
            className="!w-full "
            name="passWord"
            rules={[{ required: true, min: 8, message: 'Please input your password!' }]}
          >
            <BasicInput placeholder="パスワード（英数字8文字以上）" type="password" />
          </Form.Item>
        </div>
        <Link to={'/forgot-password'}>
          <div className="text-[13px] mt-[30px] text-primary-text text-center font-medium  cursor-pointer">
            パスワードを忘れた方はこちら
          </div>
        </Link>
      </Form>
      <BasicButton className="h-[60px] w-[280px]" onClick={() => form.submit()} type="secondary">
        <div className="flex items-center justify-center space-x-[10px]">
          <span className="text-[18px] font-bold">ログイン</span>
          <svg fill="none" height="8" viewBox="0 0 6 8" width="6" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.8764 3.18912C5.42946 3.58825 5.42946 4.41175 4.87641 4.81088L1.58521 7.1861C0.923842 7.6634 9.76746e-08 7.19083 8.79486e-08 6.37522L3.13002e-08 1.62478C2.15742e-08 0.809174 0.923841 0.336598 1.58521 0.813896L4.8764 3.18912Z"
              fill="white"
            />
          </svg>
        </div>
      </BasicButton>
    </div>
  );
}

export default Login;
