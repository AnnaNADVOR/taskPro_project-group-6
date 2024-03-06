import Wrapper from 'components/Forms/AuthForms/Wrapper/Wrapper';
import ActiveAuth from 'components/AuthNav/AutNav';
import Logo from 'components/Logo/Logo';

export default function AuthPage() {
  return (
    <Wrapper>
      <ActiveAuth />
      <Logo />
    </Wrapper>
    
  );
}
