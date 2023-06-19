"use client";

import { useState } from "react";

import { SvgPasswordPadlockHidden, SvgPasswordPadlockShow } from "@/components/svg/svg";
import registerValidation from "@/validations/register";

import Header from "@/components/Header/Header";
import { TypeRegisterValidation } from "../global/interfaces/globals";


import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function Register() {

    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeRegisterValidation>({

        resolver: yupResolver(registerValidation)

    });


    const handlePasswordVisibility = () => {

        setIsHiddenPassword(!isHiddenPassword);

    };

    const onSubmitRegister = (data: TypeRegisterValidation) => {
        reset()
    }

    return (
        <main className="h-full">

            <Header />

            <section className="h-full flex justify-center items-center">

                <form onSubmit={handleSubmit(onSubmitRegister)} className="bg-slate-100 mt-28 p-3 shadow shadow-2xl space-y-5 h-auto">

                    <fieldset className="p-2">

                        <legend className={`font-bold flex items-center ${errors.name && 'text-red-500'}`}>

                            NAME

                        </legend>

                        <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.name && 'border-red-500'} `} {...register('name')} />

                    </fieldset>
                    {errors.name && <p className="text-xs ml-4 font-bold text-red-500">{errors.name.message}</p>}

                    <fieldset className="p-2">

                        <legend className={`font-bold flex items-center ${errors.email && 'text-red-500'}`}>

                            EMAIL

                        </legend>

                        <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.email && 'border-red-500'}`} {...register('email')} />

                    </fieldset>
                    {errors.email && <p className="text-xs ml-4 font-bold text-red-500">{errors.email.message}</p>}


                    {
                        isHiddenPassword ? (

                            <>

                                <fieldset className="p-2">

                                    <legend className={`font-bold flex items-center`}>

                                        PASSWORD

                                    </legend>

                                    <input type="password" className={`border h-full w-full p-2 bg-transparent ${errors.password && 'border-red-500'}`} {...register('password')} />

                                </fieldset>
                                {errors.password && <p className="text-xs ml-4 font-bold text-red-500">{errors.password.message}</p>}

                                <fieldset className="p-2">

                                    <legend className={`font-bold flex items-center`}>

                                        CONFIRM PASSWORD

                                    </legend>

                                    <input type="password" className={`border h-full w-full p-2 bg-transparent ${errors.confirmPassword && 'border-red-500'}`} {...register('confirmPassword')} />

                                </fieldset>
                                {errors.confirmPassword && <p className="text-xs ml-4 font-bold text-red-500">{errors.confirmPassword.message}</p>}

                            </>

                        ) : (

                            <>

                                <fieldset className="p-2">

                                    <legend className={`font-bold flex items-center`}>

                                        PASSWORD

                                    </legend>

                                    <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.password && 'border-red-500'}`} {...register('password')} />

                                </fieldset>
                                {errors.password && <p className="text-xs ml-4 font-bold text-red-500">{errors.password.message}</p>}

                                <fieldset className="p-2">

                                    <legend className={`font-bold flex items-center`}>

                                        CONFIRM PASSWORD

                                    </legend>

                                    <input type="text" className={`border h-full w-full p-2 bg-transparent ${errors.confirmPassword && 'border-red-500'}`} {...register('confirmPassword')} />

                                </fieldset>
                                {errors.confirmPassword && <p className="text-xs ml-4 font-bold text-red-500">{errors.confirmPassword.message}</p>}

                            </>

                        )

                    }

                    <div className="relative p-2">

                        {
                            isHiddenPassword && (

                                <span className={`absolute top-0 left-0 cursor-pointer`} onClick={handlePasswordVisibility}>

                                    <SvgPasswordPadlockHidden />

                                </span>

                            )
                        }

                        {
                            !isHiddenPassword && (

                                <span className={`absolute top-0 left-0 cursor-pointer`} onClick={handlePasswordVisibility}>

                                    <SvgPasswordPadlockShow />

                                </span>

                            )
                        }

                    </div>

                    <button className="p-2 font-bold text-2xl w-full h-full flex justify-center bg-emerald-500">

                        REGISTER

                    </button>

                </form>

            </section >

        </main>
    );
};