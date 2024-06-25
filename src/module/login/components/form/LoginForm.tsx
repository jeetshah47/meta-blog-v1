import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, redirect } from "react-router-dom";
import { loginUser } from "../../apis/login.api";

const LoginForm = () => {
  const [authUrl, setAuthUrl] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleGoogleAuth = () => {
    redirect(authUrl);
  };

  useEffect(() => {
    const fetchGoogleUrl = async () => {
      const res = await fetch("http://localhost:3000/api/auth/google");
      const data = await res.json();

      setAuthUrl(data.url);
    };
    fetchGoogleUrl();
  }, []);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = {
        email: loginData.email,
        password: loginData.password,
      };
      const userLogin = await loginUser(payload);
      console.log(userLogin);
      alert("Login Success")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-2/6 border border-secondary rounded-md py-4 px-6">
        <div>
          <p className="font-semibold text-2xl text-center">
            Login to your account
          </p>
        </div>
        <div>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <p className="text-secondary py-1">Email</p>
              <input
                className="border outline-none rounded-md w-full py-2 px-2"
                type="text"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>
            <div className="py-3" />
            <div>
              <p className="text-secondary py-1">Password</p>
              <input
                className="border outline-none rounded-md w-full py-2 px-2"
                type="text"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <div className="py-4">
              <button className="w-full text-center text-white bg-black rounded-full py-3">
                Log In
              </button>
            </div>
            <div className="flex items-center gap-3 py-2">
              <div className="w-full h-px bg-secondary" />
              <p className="text-secondary">OR</p>
              <div className="w-full h-px bg-secondary" />
            </div>
          </form>
          <div>
            <div className="py-2">
              <Link to={authUrl}>
                <button
                  onClick={handleGoogleAuth}
                  className="w-full text-center border border-dark-primary flex justify-center gap-2 rounded-full py-3 hover:bg-black hover:text-white duration-300"
                >
                  <Icon icon={"flat-color-icons:google"} fontSize={"24px"} />
                  Continue with Google
                </button>
              </Link>
            </div>
            <div className="py-2">
              <button className="w-full text-center border border-dark-primary flex justify-center gap-2  rounded-full py-3 hover:bg-black hover:text-white duration-300">
                <Icon icon={"cib:github"} fontSize={"24px"} />
                Continue With Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
