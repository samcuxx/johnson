import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your account
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input
                type="checkbox"
                id="remember"
                className="text-blue-500 focus:ring focus:ring-blue-300"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a
            href="/auth/signup"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
