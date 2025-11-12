"use client";
import { login, loginPractice } from "@/app/actions/auth";
import Button from "@/app/components/UI/Button";
import Input from "@/app/components/UI/Input";
import { FormEvent } from "react";

const SigninForm = () => {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    let form = e.target as HTMLFormElement;
    let formData = new FormData(form);
    let username: string = formData.get("username") as string;
    let password: string = formData.get("password") as string;
    if (!username || !password) return;
    try {
      await loginPractice(username, password);
    } catch (error: any) {
      if (!error.message?.includes("NEXT_REDIRECT")) {
        alert(error.message);
      }
    }
  }
  return (
    <div>
      <div className="w-full px-4">
        <section className="bg-gray-50 ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold "
            >
              <img
                className="max-w-[200px]"
                src={"/images/logo_lg.png"}
                alt="logo"
              />
            </a>
            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                  Create an account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <Input label="name" fieldName="name" name="username" />
                  <Input
                    label="password"
                    fieldName="name"
                    name="password"
                    type="password"
                  />
                  <Button text="Submit" type="submit" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SigninForm;
