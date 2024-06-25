/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [authUrl, setAuthUrl] = useState({ googleUrl: "", githubUrl: "" });

  useEffect(() => {
    const fetchGoogleUrl = async () => {
      const res = await fetch("http://localhost:3000/api/auth/google");
      const data = await res.json();
      setAuthUrl({ ...authUrl, googleUrl: data.url });
    };
    fetchGoogleUrl();
  }, []);

  useEffect(() => {
    const fetchGithubUrl = async () => {
      const res = await fetch("http://localhost:3000/api/auth/github");
      const data = await res.json();
      setAuthUrl({ ...authUrl, githubUrl: data.url });
    };
    fetchGithubUrl();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-2/3 border border-secondary rounded-md py-4 px-6">
        <div>
          <p className="font-semibold text-2xl text-center">
            Create your account
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-8 items-center">
              <div className="w-full">
                <div>
                  <p className="text-secondary py-1">Email</p>
                  <input
                    className="border outline-none rounded-md w-full py-2 px-2"
                    type="text"
                  />
                </div>

                <div className="py-3" />
                <div>
                  <p className="text-secondary py-1">Password</p>
                  <input
                    className="border outline-none rounded-md w-full py-2 px-2"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full">
                <div>
                  <p className="text-secondary py-1">Email</p>
                  <input
                    className="border outline-none rounded-md w-full py-2 px-2"
                    type="text"
                  />
                </div>

                <div className="py-3" />
                <div>
                  <p className="text-secondary py-1">Password</p>
                  <input
                    className="border outline-none rounded-md w-full py-2 px-2"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="py-4">
              <button className="w-full text-center text-white bg-blue rounded-full py-3">
                Create Account
              </button>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div className="w-full h-px bg-secondary" />
              <p className="text-secondary">OR</p>
              <div className="w-full h-px bg-secondary" />
            </div>
          </form>
          <div className="flex gap-8">
            <div className="py-2 w-full">
              <Link to={authUrl.googleUrl}>
                <button className="w-full text-center border border-dark-primary flex justify-center gap-2 rounded-full py-3 hover:bg-black hover:text-white duration-300">
                  <Icon icon={"flat-color-icons:google"} fontSize={"24px"} />
                  Continue with Google
                </button>
              </Link>
            </div>
            <div className="py-2 w-full">
              <Link to={authUrl.githubUrl}>
                <button className="w-full text-center border border-dark-primary flex justify-center gap-2  rounded-full py-3 hover:bg-black hover:text-white duration-300">
                  <Icon icon={"cib:github"} fontSize={"24px"} />
                  Continue With Github
                </button>
              </Link>
            </div>
          </div>
          <div className="py-2">
            <p className="text-center">
              Have an account ?{" "}
              <Link to={"/auth/login"}>
                {" "}
                <span className="text-blue hover:cursor-pointer">
                  Login Instead
                </span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
