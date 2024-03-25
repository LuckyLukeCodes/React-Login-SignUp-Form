import background from "../assets/images/background.jpg";
import FormButton from "./FormButton";
import FormRow from "./FormRow";
import { useHomeContext } from "../pages/HomeLayout";
import Logo from "./Logo";
import chemistry from "../assets/images/chemistry.svg";
import Blob from "./Blob";

const SignUpForm = () => {
  const { isLoginForm, setIsLoginForm } = useHomeContext();
  return (
    <div className="flex h-screen">
      <div className="border-1 z-10 flex w-full flex-col items-center justify-center rounded-br-3xl rounded-tr-3xl border-[#E4E7E8] bg-[var(--bg-color)] transition-all delay-150 ease-linear">
        <form method="post" className="flex w-2/3 flex-col gap-4">
          <div className=" flex flex-col items-center justify-center gap-3">
            <Logo />
            <h1 className="text-3xl">Welcome to the club!</h1>
            <span className="mb-4 h-12 text-center text-sm text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus pariatur ducimus ipsa.
            </span>
          </div>

          <div className="flex w-full flex-col gap-6">
            <FormRow name="name" />
            <FormRow name="email" />
            <FormRow name="password" />
          </div>
          <FormButton text="sign up" />

          <div className="flex gap-1">
            <p>Already a member?</p>
            <button
              onClick={() => setIsLoginForm(!isLoginForm)}
              className="text-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className=" flex w-full flex-col items-center justify-center  bg-blue-600">
        <div className="absolute -top-24 right-[40%]  h-72 w-72">
          <Blob />
        </div>
        <div className="absolute -right-[8%] h-72 w-72">
          <Blob />
        </div>
        <div className="absolute bottom-8 right-[43%]  h-72 w-72">
          <Blob />
        </div>

        <img src={chemistry} alt="" className="h-72 w-72" />
        <h1 className="mb-2 text-3xl font-semibold text-[var(--text-color)]">
          The World is your Laboratory!
        </h1>
        <span className="z-10 text-center text-[var(--text-color)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          magni ullam, ad pariatur cumque numquam inventore adipisci.{" "}
        </span>
      </div>
      {/* <div className="relative mx-auto h-20 w-20 rounded-full border-8 border-white bg-red-900 content-none"></div> */}
    </div>
  );
};

export default SignUpForm;
