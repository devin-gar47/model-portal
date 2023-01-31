"use client";
import axios from "axios";
import React, {
  ChangeEvent,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import FormInput from "@/components/form/FormInput";
import FormTransferLink from "@/components/form/FormTransferLink";
import FormButton from "@/components/form/FormButton";
import FormHeader from "@/components/form/FormHeader";

interface PayloadData {
  username: string;
  password: string;
  role: string;
}

function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPasswordsMatch(true);
    const { value } = e.target;
    switch (e.target.id) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirm_password":
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setIsLoading(true);
    const userInfo: PayloadData = {
      username,
      password,
      role: "ADMIN",
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/signup`,
        userInfo
      );
      setSuccess(true);
    } catch (e: any) {
      const statusCode = e?.response?.status;
      switch (statusCode) {
        case 400:
          setError("Invalid username or password.");
          break;
        case 500:
          setError("Server error. Please try again!");
          break;
        default:
          setError("Something went wrong. Please try again later");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="lg:grid lg:grid-cols-10">
      <div className="lg:col-span-5 bg-slate-100"></div>

      <div className="lg:col-span-5 bg-white drop-shadow-md">
        <div className="flex flex-col justify-center items-center lg:min-h-screen">
          <div className="w-4/5">
            <FormHeader text="Create an account" />
            <p className="text-left w-full mb-2 font-light">
              Signup, Login, Profit.
            </p>
            {!isLoading ? (
              <>
                <form
                  className="flex flex-col items-center"
                  onSubmit={handleSubmit}
                >
                  <p hidden={!success} className="text-green-600 mb-3">
                    User added successfully!
                  </p>
                  <p hidden={!error} className="text-red-600 mb-3">
                    {error}
                  </p>
                  <FormInput
                    id="username"
                    type="text"
                    label="Username"
                    value={username}
                    setValue={setUsername}
                    placeholder="Enter a username"
                  />
                  <FormInput
                    id="password"
                    type="password"
                    label="Password"
                    value={password}
                    setValue={setPassword}
                    placeholder="Enter a password"
                  />
                  <FormInput
                    id="confirm-password"
                    type="password"
                    label="Confirm Password"
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    placeholder="Confirm your password"
                  />
                  <small hidden={passwordsMatch} className="text-red-600">
                    Passwords must match.
                  </small>
                  <FormButton text="Sign up" />
                </form>
                <FormTransferLink link="/login" text="Have an account?" />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
