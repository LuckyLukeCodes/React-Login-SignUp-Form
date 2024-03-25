import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useHomeContext } from "./HomeLayout";

const LoginSignup = () => {
  const { isLoginForm } = useHomeContext();
  return <>{isLoginForm ? <LoginForm /> : <SignUpForm />}</>;
};

export default LoginSignup;
