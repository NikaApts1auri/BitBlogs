import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { registerrr } from "../../supabase/auth";
import { useMutation } from "@tanstack/react-query";

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

  // Mutation hook for registration/login
  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn:registerrr ,
    onSuccess: () => {
      navigate("/"); // Redirect on successful login
    },
    onError: (err) => {
      console.error("Login failed:", err);
    },
  });

  const convertToSignUp = () => {
    navigate("/registration");
  };

  // Submit handler for the form
  const onSubmit: SubmitHandler<IFormType> = async (data) => {
    console.log(data);
    handleRegister(data); // Trigger the register mutation
  };

  return (
    <div className="flex w-[100vw] items-center justify-center h-screen bg-[#030303] p-8">
      <div className="bg-[#0c1016] text-white rounded-[2rem] border-[0.02rem] border-white w-[40rem] p-12 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Log in to BitBlogs</h1>
        <p className="text-gray-400 text-center mb-10">
          Enter your credentials to access your account
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="block w-full px-6 py-3 mt-2 border border-gray-700 rounded-lg bg-[#1A1C1F] placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              {...register("email")}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full px-6 py-3 mt-2 border border-gray-700 rounded-lg bg-[#1A1C1F] placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              {...register("password")}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Log In
          </button>
        </form>
        <div className="flex items-center justify-between mt-8">
          <div className="mt-4 text-center">
            <Link
              to={""}
              className="text-sm text-blue-500 hover:underline focus:outline-none"
            >
              Forgot password?
            </Link>
          </div>
          <div className="mt-4 text-center text-[grey] text-lg">
            Don't have an account?{" "}
            <button
              onClick={convertToSignUp}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
