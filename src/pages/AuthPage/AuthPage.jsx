import { useParams } from 'react-router-dom';

import Wrapper from 'components/Forms/AuthForms/Wrapper/Wrapper';
import RegisterForm from 'components/Forms/AuthForms/RegisterForm/RegisterForm';
import LoginForm from 'components/Forms/AuthForms/LoginForm/LoginForm';
import Logo from 'components/Logo/Logo';

const AuthPage = () => {
  const { id } = useParams();
  return (
    <Wrapper>
      {id === 'register' ? <RegisterForm /> : <LoginForm />}
      <Logo />
    </Wrapper>
  );
};

export default AuthPage;
