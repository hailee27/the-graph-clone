import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import BasicButton from '../../components/common/BasicButton';
import BasicInput from '../../components/common/BasicInput';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { PostLoginResponse, usePostVerifyPasswordMutation } from '../../redux/endpoints/user';
import { useNotificationContext } from '../../components/context/NotificationContext';

function ForgotPassword() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formConfirmPassword] = Form.useForm();
  const { openNotification } = useNotificationContext();
  const [step, setStep] = useState<number>(1);
  const [verifyPassword, setVerifyPassword] = useState<PostLoginResponse | undefined>(undefined);

  const [trigger, { isSuccess }] = usePostVerifyPasswordMutation();
  const email = Form.useWatch('email', form);

  useEffect(() => {
    const verify = JSON.parse(sessionStorage.getItem('verifyPassword') ?? '{}');
    setVerifyPassword(verify);
  }, []);
  useEffect(() => {
    if (verifyPassword) {
      form.setFieldValue('email', verifyPassword.email);
    }
  }, [verifyPassword]);
  useEffect(() => {
    if (isSuccess) {
      openNotification.success({
        message: 'パスワードの変更に成功',
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
  }, [isSuccess]);

  return (
    <div className="min-h-screen items-center justify-center flex flex-col space-y-[46px]">
      <h2 className="text-primary font-bold text-[40px]">パスワード再発行</h2>
      {step === 1 && (
        <Form
          form={form}
          onFinish={() => {
            setStep((prev) => prev + 1);
            navigate({
              search: createSearchParams({
                email: email,
              }).toString(),
            });
          }}
        >
          <div className="w-[480px]">
            <Form.Item
              className="!w-full "
              initialValue={verifyPassword?.email}
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <BasicInput placeholder="メールアドレス" />
            </Form.Item>
          </div>
        </Form>
      )}
      {step === 2 && (
        <Form
          form={formConfirmPassword}
          onFinish={(e) => {
            if (verifyPassword) {
              trigger({
                password: e.password,
                token: verifyPassword.verifyToken as string,
                passwordConfirm: e.passwordConfirm,
              })
                .unwrap()
                .then(() => navigate('/'));
            }
          }}
        >
          <div className="font-medium text-[14px] text-primary-text pb-[40px] text-center">
            {searchParams.get('email')}
          </div>
          <div className="flex items-center justify-center  flex-col w-[480px]">
            <Form.Item
              className="!w-full "
              name="password"
              rules={[{ required: true, min: 8, message: 'パスワードを入力してください!' }]}
            >
              <BasicInput placeholder="パスワード（英数字8文字以上）" type="password" />
            </Form.Item>
            <Form.Item
              className="!w-full "
              name="passwordConfirm"
              rules={[
                // {
                //   required: true,
                //   message: 'パスワードを入力してください!',
                // },
                {
                  required: true,

                  validator: (_, value) => {
                    if (value === formConfirmPassword.getFieldValue('password')) {
                      return Promise.resolve();
                    }
                    return Promise.reject('入力した 2 つのパスワードが一致しません!');
                  },
                },
              ]}
            >
              <BasicInput placeholder="パスワード確認（英数字8文字以上）" type="password" />
            </Form.Item>
          </div>
        </Form>
      )}
      <BasicButton
        className="h-[60px] w-[280px]"
        onClick={() => {
          if (step === 1) {
            form.submit();
          } else if (step === 2) {
            formConfirmPassword.submit();
          }
        }}
        type="secondary"
      >
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
    </div>
  );
}

export default ForgotPassword;
