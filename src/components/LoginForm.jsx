import { useHomeContext } from "../pages/HomeLayout";
import FormButton from "./FormButton";
import FormRow from "./FormRow";
import Logo from "./Logo";
import Blob from "./Blob";
import teaching from "../assets/images/teaching.svg";
import { Form } from "react-router-dom";

const Login = () => {
  const { isLoginForm, setIsLoginForm } = useHomeContext();

  return (
    <div className="grid h-screen md:grid-cols-2">
      <div className="flex h-screen w-full flex-col items-center justify-center bg-blue-600">
        <div className="absolute -top-24 right-0 h-72 w-72 md:right-[47%]">
          <Blob />
        </div>
        <div className="absolute -left-36 h-72 w-72 md:-left-[13%]">
          <Blob />
        </div>
        <div className="absolute bottom-[3rem] right-0 h-72 w-72 md:bottom-[8.5rem] md:right-[47%]">
          <Blob />
        </div>
        <img src={teaching} alt="" className="z-10 h-72 w-72" />
        <h1 className="z-10 mb-3 text-3xl font-semibold text-[var(--text-color)]">
          The World is open to Experimentation
        </h1>
        <span className="z-10 mx-14 text-center text-[var(--text-color)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim qui
          eligendi aliquid iusto rem cumque quasi odio voluptatum.
        </span>
      </div>
      <div
        className="border-1 z-10 flex w-full flex-col items-center justify-center rounded-tl-3xl rounded-tr-3xl 
                  border-[#E4E7E8] bg-[var(--bg-color)] p-16 md:rounded-bl-3xl md:rounded-tl-3xl md:rounded-tr-none"
      >
        <Form method="post" className="flex w-2/3 flex-col gap-4">
          <div className=" flex flex-col items-center justify-center gap-3">
            <Logo />
            <h1 className="text-3xl">Hello Again!</h1>
            <span className="mb-4 h-12 text-center text-sm text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus pariatur ducimus ipsa.
            </span>
          </div>

          <div className="flex w-full flex-col gap-6">
            <FormRow name="email" />
            <FormRow name="password" />
          </div>

          <div className="mb-4 flex justify-between">
            <div className="flex items-center gap-1 text-xs">
              <input
                type="checkbox"
                id="rememberMe"
                className="cursor-pointer"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="/" className="text-xs text-blue-500 hover:underline">
              Recover Password
            </a>
          </div>
          <FormButton text="login" />

          <div className="flex gap-1">
            <p>Not a member yet?</p>
            <button
              onClick={() => setIsLoginForm(!isLoginForm)}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
