import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

interface IFormType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup
  .object({
    name: yup.string().required("Name is a required field"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is a required field"),
    password: yup
      .string()
      .required("Password is a required field")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: yup
      .string()
      .required("Confirm password is a required field")
      .oneOf([yup.ref('password')], "Passwords must match"),
  })
  .required();

export function Registration() {
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

  function convertToSignIn(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex w-[100vw] items-center justify-center h-screen bg-[#030303] p-6">
      <div className="bg-[#0c1016] text-white rounded-[1.5rem] border-[0.02rem] border-white w-[40rem] p-12 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up to BitBlogs</h1>
        <p className="text-gray-400 text-center mb-8">
          Create an account to access your profile
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full px-6 py-3 mt-2 border border-gray-700 rounded-lg bg-[#1A1C1F] placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              {...register("name")}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
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
              
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-lg font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="block w-full px-6 py-3 mt-2 border border-gray-700 rounded-lg bg-[#1A1C1F] placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
              {...register("confirmPassword")}
              
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center justify-center mt-8">
          <div  className="text-center text-[grey]  text-sm ">
            Already have an account?{" "}
            <Link
            
              to="/authorization"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
