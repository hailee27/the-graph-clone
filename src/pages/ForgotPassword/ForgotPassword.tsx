import React, { useState } from 'react';
import { Form } from 'antd';
import BasicButton from '../../components/common/BasicButton';
import BasicInput from '../../components/common/BasicInput';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [form] = Form.useForm();
  const [formConfirmPassword] = Form.useForm();
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen items-center justify-center flex flex-col space-y-[46px]">
      <h2 className="text-primary font-bold text-[40px]">パスワード再発行</h2>
      {step === 1 && (
        <Form form={form} onFinish={() => setStep((prev) => prev + 1)}>
          <div className="w-[480px]">
            <Form.Item
              className="!w-full "
              name="useName"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <BasicInput placeholder="メールアドレス" />
            </Form.Item>
          </div>
        </Form>
      )}
      {step === 2 && (
        <Form form={formConfirmPassword} onFinish={() => navigate('/')}>
          <div className="font-medium text-[14px] text-primary-text pb-[40px] text-center">yamada@gmail.com</div>
          <div className="flex items-center justify-center  flex-col w-[480px]">
            <Form.Item
              className="!w-full "
              name="password"
              rules={[{ required: true, min: 8, message: 'パスワード（英数字8文字以上）' }]}
            >
              <BasicInput placeholder="パスワード（英数字8文字以上）" type="password" />
            </Form.Item>
            <Form.Item
              className="!w-full "
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: 'パスワードを入力してください!',
                },
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
