"use client";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { storeToken } from "../../redux/reducers/user/user-information";
import FormHeader from "@/components/form/FormHeader";
import FormInput from "@/components/form/FormInput";
import FormError from "@/components/form/FormError";
import FormButton from "@/components/form/FormButton";
import FormTransferLink from "@/components/form/FormTransferLink";

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    try {
      const data = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
        { username, password }
      );
      const token = data.data.accessToken;
      dispatch(storeToken(token));
      window.location.assign("/");
      setIsLoading(false);
    } catch (e: any) {
      console.log(e.response);
      switch (e.response.status) {
        case 400:
          setErrorMessage("Invalid username or password.");
          break;
        case 500:
          setErrorMessage("Server error. Please try again!");
          break;
        default:
          setErrorMessage("Something went wrong. Please try again later");
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="lg:grid lg:grid-cols-10">
        <div className="lg:col-span-5 bg-white drop-shadow-md">
          <div className="flex flex-col justify-center items-center lg:min-h-screen">
            <div className="w-4/5">
            <FormHeader text="Welcome to Model Project!"/>
            {!isLoading ? (
              <>
                <form
                  className="flex flex-col items-center"
                  onSubmit={handleSubmit}
                >
                  <FormError errorMessage={errorMessage} />
                  <p className="text-left w-full mb-2 font-light">Always beat the odds.</p>
                  <FormInput
                    id="username"
                    label="Username"
                    value={username}
                    setValue={setUsername}
                    placeholder="Enter your username"
                  />
                  <FormInput
                    id="password"
                    label="Password"
                    value={password}
                    setValue={setPassword}
                    placeholder="Enter your password"
                  />

                  <FormButton text="Login" />
                </form>
                <FormTransferLink link="/signup" text="Need an account?" />
              </>
            ) : (
              <p>Loading...</p>
            )}
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 bg-slate-100"></div>
      </div>
    </>
  );
}
