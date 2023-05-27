"use client"
import { useState } from "react";
import { SvgEmail, SvgPasswordAsterisk, SvgPasswordPadlockHidden, SvgPasswordPadlockShow } from "@/components/svg/svg";
import Header from "@/components/Header/Header";

export default function Login() {
  const [isHiddenPassword, setIsHiddenPassword] = useState(true);

  const handlePasswordVisibility = () => {
    setIsHiddenPassword(!isHiddenPassword);
  };

  return (
    <main className="h-full">
      <Header />
      <section className="h-full flex justify-center items-center">
        <form className="bg-slate-100 p-3 shadow shadow-2xl space-y-5 h-auto">
          <fieldset className="p-4">
            <legend className="font-bold flex items-center">
              EMAIL <span className="ml-2"><SvgEmail /></span>
            </legend>
            <input type="email" className="border h-full w-full p-2 bg-transparent" />
          </fieldset>

          <fieldset className="p-4 relative">
            <legend className="font-bold flex items-center">
              PASSWORD <span className="ml-2"><SvgPasswordAsterisk /></span>
            </legend>

            {isHiddenPassword ? (
              <>
                <input type="password" className="border h-full w-full p-2 bg-transparent" />
                <span className="absolute bottom-5 right-5 cursor-pointer" onClick={handlePasswordVisibility}>
                  <SvgPasswordPadlockHidden />
                </span>
              </>
            ) : (
              <>
                <input type="text" className="border h-full w-full p-2 bg-transparent" />
                <span className="absolute bottom-5 right-5 cursor-pointer" onClick={handlePasswordVisibility}>
                  <SvgPasswordPadlockShow />
                </span>
              </>
            )}
          </fieldset>

          <button className="p-2 font-bold text-2xl w-full h-full flex justify-center bg-emerald-500">LOGIN</button>
        </form>
      </section>
    </main>
  );
}
