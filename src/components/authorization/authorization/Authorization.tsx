import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

interface IFormType {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is a required field"),
    password: yup.string().required("Password is a required field"),
  })
  .required();

export function Authorization() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormType>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormType> = async (data) => {
    console.log(data);
   
    navigate("/home");
  };

  return (
    <div className="flex w-[100vw] items-center justify-center h-screen bg-[#030303] p-4">
      <div className="bg-[#0c1016] text-white rounded-[1.5rem] border-[0.02rem] border-white  w-[35rem] p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Log in to BitBlogs</h1>
        <p className="text-gray-400 text-center mb-8">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="block w-full px-4 py-2 mt-1 border border-gray-700 rounded-lg bg-[#1A1C1F] placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              {...register("email")}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full px-4 py-2 mt-1 border border-gray-700 rounded-lg bg-[#1A1C1F] placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              {...register("password")}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center justify-between">
        <div className="mt-6 text-center">
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline focus:outline-none"
          >
            Forgot password?
          </a>
        </div>
        <div className="mt-4 text-center text-[grey] text-sm">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Sign up
          </a>
        </div>
       
        </div>
      </div>
    </div>
  );
}
