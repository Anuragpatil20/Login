import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Remove error if email becomes valid
    if (/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Remove error if password becomes valid
    if (value.length >= 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Login Successful!");
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    const error = {};

    if (!email) {
      error.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Invalid Email Format";
    }

    if (!password) {
      error.password = "Password is Required";
    } else if (password.length < 6) {
      error.password = "Password must be at least 6 characters";
    }

    return error;
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-6  flex flex-col justify-center sm:py-12 bg-[url('https://wallpaperaccess.com/full/439854.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <h1 className="text-2xl font-semibold">Login</h1>
              <form className="divide-y bg-transparent divide-gray-200" onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                      placeholder="Email address"
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                  </div>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                  </div>

                  <div>
                    <button className="bg-cyan-200 hover:bg-cyan-500 hover:border-2 duration-100 hover:text-white text-black rounded-md px-2 py-1">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <a href="/#" className="text-black hover:text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
