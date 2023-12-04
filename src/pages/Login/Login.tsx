import React, { useEffect } from 'react';
import { Form, Spin } from 'antd';
import BasicButton from '../../components/common/BasicButton';
import BasicInput from '../../components/common/BasicInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAccessToken, updateRefreshToken, updateUserProfile } from '../../redux/slices/auth.slice';
import { usePostLoginMutation } from '../../redux/endpoints/user';
import { useNotificationContext } from '../../components/context/NotificationContext';

function Login() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [trigger, { data, isLoading, isError, isSuccess }] = usePostLoginMutation();
  const { openNotification } = useNotificationContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (isError) {
      openNotification.error({
        message: (
          <span>
            {' '}
            パスワードまたはメールアドレ
            <br />
            スが間違っています!
          </span>
        ),
        icon: (
          <svg
            aria-hidden="true"
            data-icon="close-circle"
            fill="currentColor"
            fillRule="evenodd"
            focusable="false"
            height="1em"
            viewBox="64 64 896 896"
            width="1em"
          >
            <path
              d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"
              fill="#ff4d4f"
            ></path>
          </svg>
        ),
        description: '再入力してください',
      });
    }
    if (isSuccess && data?.accessToken) {
      openNotification.success({
        message: '正常にログインしました',
        icon: (
          <svg
            aria-hidden="true"
            data-icon="check-circle"
            fill="currentColor"
            focusable="false"
            height="1em"
            viewBox="64 64 896 896"
            width="1em"
          >
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
              fill="#2c8d27"
            ></path>
          </svg>
        ),
      });
    }
  }, [isError, isSuccess]);

  return (
    <div className="min-h-screen items-center justify-center flex flex-col space-y-[46px]">
      <h2 className="text-primary font-bold text-[40px]">ログイン</h2>

      <Form
        form={form}
        onFinish={(e) =>
          trigger({ email: e.email, password: e.password })
            .unwrap()
            .then((res) => {
              const { accessToken, user, verifyToken, email, refreshToken } = res;
              if (accessToken && user) {
                dispatch(updateAccessToken(accessToken as string));
                dispatch(updateRefreshToken(refreshToken as string));
                dispatch(updateUserProfile(user ?? {}));
              }
              if (verifyToken && email) {
                sessionStorage.setItem(
                  'verifyPassword',
                  JSON.stringify({
                    verifyToken,
                    email,
                  })
                );
                navigate('/forgot-password');
              }
            })
        }
      >
        <div className="flex items-center justify-center  flex-col w-[480px]">
          <Form.Item
            className="!w-full "
            name="email"
            rules={[{ required: true, message: 'ユーザー名を入力してください!' }]}
          >
            <BasicInput disabled={isLoading} placeholder="メールアドレス" />
          </Form.Item>
          <Form.Item
            className="!w-full "
            name="password"
            rules={[{ required: true, min: 8, message: 'パスワードを入力してください!' }]}
          >
            <BasicInput disabled={isLoading} placeholder="パスワード（英数字8文字以上）" type="password" />
          </Form.Item>
        </div>
        {/* <Link to={'/forgot-password'}>
          <div className="text-[13px] mt-[30px] text-primary-text text-center font-medium  cursor-pointer">
            パスワードを忘れた方はこちら
          </div>
        </Link> */}
      </Form>
      <Spin spinning={isLoading}>
        <BasicButton className="h-[60px] w-[280px]" onClick={() => form.submit()} type="secondary">
          <div className="flex items-center justify-center space-x-[10px]">
            <span className="text-[18px] font-bold text-[#ffffff]">ログイン</span>
            <svg fill="none" height="8" viewBox="0 0 6 8" width="6" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.8764 3.18912C5.42946 3.58825 5.42946 4.41175 4.87641 4.81088L1.58521 7.1861C0.923842 7.6634 9.76746e-08 7.19083 8.79486e-08 6.37522L3.13002e-08 1.62478C2.15742e-08 0.809174 0.923841 0.336598 1.58521 0.813896L4.8764 3.18912Z"
                fill="white"
              />
            </svg>
          </div>
        </BasicButton>
      </Spin>
    </div>
  );
}

export default Login;
