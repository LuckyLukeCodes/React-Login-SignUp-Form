import background from "../assets/images/background.jpg";
import FormButton from "./FormButton";
import FormRow from "./FormRow";
import { useHomeContext } from "../pages/HomeLayout";
import Logo from "./Logo";
import chemistry from "../assets/images/chemistry.svg";
import Blob from "./Blob";
import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    console.log(data);
    toast.success("Login Successful");
    return redirect("/home");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const SignUpForm = () => {
  const { isLoginForm, setIsLoginForm } = useHomeContext();
  return (
    <div className="grid h-screen md:grid-cols-2">
      <div
        className="border-1 z-10 flex w-full flex-col items-center justify-center rounded-bl-3xl rounded-br-3xl border-[#E4E7E8] 
                    bg-[var(--bg-color)] p-16 md:rounded-br-3xl md:rounded-tr-3xl"
      >
        <Form method="post" className="flex w-2/3 flex-col gap-4">
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
              className="text-blue-500 hover:underline"
            >
              Login
            </button>
          </div>
        </Form>
      </div>
      <div className="flex w-full flex-col items-center justify-center  bg-blue-600">
        <div className="absolute right-[5%] h-72 w-72  md:-top-24 md:right-[45%]">
          <Blob />
        </div>
        <div className="absolute h-72 w-72 md:-right-[6%]">
          <Blob />
        </div>
        <div className="absolute h-72 w-72  md:bottom-[8.5rem] md:right-[45%]">
          <Blob />
        </div>
        <img src={chemistry} alt="" className="z-10 mb-3 h-72 w-72" />
        <h1 className="z-10 mb-3 text-3xl font-semibold text-[var(--text-color)]">
          The World is your Laboratory!
        </h1>
        <span className="z-10 mx-14 text-center text-[var(--text-color)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          magni ullam, ad pariatur cumque numquam inventore adipisci.{" "}
        </span>
      </div>
      {/* <div className="relative mx-auto h-20 w-20 rounded-full border-8 border-white bg-red-900 content-none"></div> */}
    </div>
  );
};

export default SignUpForm;
