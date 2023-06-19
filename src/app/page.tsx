"use client";

import { useState } from "react";

import { SvgEmail, SvgPasswordAsterisk, SvgPasswordPadlockHidden, SvgPasswordPadlockShow } from "@/components/svg/svg";
import Header from "@/components/Header/Header";

import loginValidation from "../library/yup/validations/login";
import { TypeLoginValidation } from "./global/interfaces/globals";

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";

export default function Login() {

  const [isHiddenPassword, setIsHiddenPassword] = useState(true);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeLoginValidation>({

    resolver: yupResolver(loginValidation)

  });

  const handlePasswordVisibility = () => {

    setIsHiddenPassword(!isHiddenPassword);

  };

  const onSubmitLogin = (data: TypeLoginValidation) => {

    reset()

  };

  return (
    <main className="h-full">

      <Header />

      <section className="h-full flex justify-center items-center">

        <form onSubmit={handleSubmit(onSubmitLogin)} className="bg-slate-100 p-3 shadow shadow-2xl space-y-5 h-auto">

          <fieldset className="p-4">

            <legend className={`font-bold flex items-center ${errors.email && 'text-red-500'}`}>

              EMAIL

              <span className="ml-2">

                <SvgEmail color={`${errors.email ? '#EF4444' : '#000000'}`} />

              </span>

            </legend>

            <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.email && 'border-red-500'}`} {...register('email')} />

          </fieldset>

          {errors.email && <p className="text-xs font-bold ml-4 text-red-500">{errors.email.message}</p>}

          <fieldset className="p-4 relative">

            <legend className={`font-bold flex items-center ${errors.password && 'text-red-500'}`}>

              PASSWORD

              <span className={`ml-2 ${errors.password && 'text-red-500'}`}>

                <SvgPasswordAsterisk />

              </span>

            </legend>

            {
              isHiddenPassword ? (

                <>

                  <input type="password" className={`border h-full w-full p-2 bg-transparent ${errors.password && 'border-red-500'}`} {...register('password')} />

                  <span className={`absolute top-5 right-5 cursor-pointer ${errors.password && 'text-red-500'}`} onClick={handlePasswordVisibility}>

                    <SvgPasswordPadlockHidden />

                  </span>

                </>

              ) : (

                <>

                  <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.password && 'border-red-500'}`} {...register('password')} />

                  <span className={`absolute top-5 right-5 cursor-pointer ${errors.password && 'text-red-500'}`} onClick={handlePasswordVisibility}>

                    <SvgPasswordPadlockShow />

                  </span>

                </>

              )

            }

          </fieldset>

          {errors.password && <p className="text-xs font-bold ml-4 text-red-500">{errors.password.message}</p>}

          <button className="p-2 font-bold text-2xl w-full h-full flex justify-center bg-emerald-500">

            LOGIN

          </button>

        </form>

      </section>

    </main>
  );
};
