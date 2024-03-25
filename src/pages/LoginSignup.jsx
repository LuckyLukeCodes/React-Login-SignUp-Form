import { toast } from "react-toastify";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useHomeContext } from "./HomeLayout";
import { redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    toast.success("Login Successful");
    return redirect("/home");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const LoginSignup = () => {
  const { isLoginForm } = useHomeContext();
  return <>{isLoginForm ? <LoginForm /> : <SignUpForm />}</>;
};

export default LoginSignup;
