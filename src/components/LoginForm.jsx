import { useHomeContext } from "../pages/HomeLayout";
import FormButton from "./FormButton";
import FormRow from "./FormRow";
import Logo from "./Logo";
import Blob from "./Blob";
import teaching from "../assets/images/teaching.svg";

const Login = () => {
  const { isLoginForm, setIsLoginForm } = useHomeContext();
  return (
    <div className="flex h-screen">
      <div className="flex h-screen w-full flex-col items-center justify-center bg-blue-600">
        <div className="absolute -top-24 right-[45%]  h-72 w-72">
          <Blob />
        </div>
        <div className="absolute -left-[8%] h-72 w-72">
          <Blob />
        </div>
        <div className="absolute bottom-8 right-[45%] h-72 w-72">
          <Blob />
        </div>
        <img src={teaching} alt="" className="h-80 w-80" />
        <h1 className="mb-2 text-3xl font-semibold text-[var(--text-color)]">
          The World is open to Experimentation
        </h1>
        <span className="z-10 text-center text-[var(--text-color)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim qui
          eligendi aliquid iusto rem cumque quasi odio voluptatum.
        </span>
      </div>
      <div className="border-1 z-10 flex w-full flex-col items-center justify-center rounded-bl-3xl rounded-tl-3xl border-[#E4E7E8] bg-[var(--bg-color)] transition-all delay-150 ease-linear">
        <form method="post" className="flex w-2/3 flex-col gap-4">
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
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="/" className="text-xs text-blue-500">
              Recover Password
            </a>
          </div>
          <FormButton text="login" />

          <div className="flex gap-1">
            <p>Not a member yet?</p>
            <button
              onClick={() => setIsLoginForm(!isLoginForm)}
              className="text-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      {/* <div className="relative mx-auto h-20 w-20 rounded-full border-8 border-white bg-red-900 content-none"></div> */}
    </div>
  );
};

export default Login;
