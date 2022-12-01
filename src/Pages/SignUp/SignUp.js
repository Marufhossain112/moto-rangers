import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { MyContext } from "../../context/AuthProvider/AuthProvider";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { createUser, providerLogin, updateUser, loading, setLoading } =
    useContext(MyContext);

  // const [value, setValue] = useState("user");
  const googleProvider = new GoogleAuthProvider();
  // function for handling google button

  const handlerBtnGoogle = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const users = {
          name: user.displayName,
          email: user.email,
          role: "buyer",
        };
        if (user) {
          fetch("https://server-resale.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(users),
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
      })
      .catch((error) => console.log(error));
    console.log(" I  am clicked");
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  if (loading) {
    return <Loader></Loader>;
  }

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast.success("User Created Successfully.");
        // reset();

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            const users = {
              name: data.name,
              email: data.email,
              role: data.role,
            };
            fetch("https://server-resale.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(users),
            })
              .then((res) => res.json())
              .then((data) => {
                setLoading(false);
                navigate(from, { replace: true });
              });
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone "
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-600">{errors.name?.message}</p>
                  )}
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email?.message}</p>
                  )}
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be 8 characters or longer",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password?.message}</p>
                  )}
                </div>

                <h2>Account Type</h2>
                <div className="flex justify-start mt-2">
                  <div className="form-check form-check-inline mr-3">
                    <input
                      className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="inlineRadioOptions"
                      id="user"
                      value="user"
                      {...register("role")}
                      checked
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="user"
                    >
                      User
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="inlineRadioOptions"
                      id="seller"
                      // value="seller"
                      value="seller"
                      {...register("role")}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="seller"
                    >
                      Seller
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 mt-5 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign Up
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
              </form>{" "}
              <button
                onClick={handlerBtnGoogle}
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: "#3b5998" }}
              >
                Sign in with google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
