"use client"
import { type RegisterInputProps } from "@/types/types";
import Link from "next/link"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form";
import Textinputs from "../FormInputs/Textinputs";

export default function SignupForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterInputProps>();
    async function onSubmit(data: RegisterInputProps) {
        console.log(data);
    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Create new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Textinputs label="First Name" register={register} name="firstName" errors={errors} />
                        <Textinputs label="Last Name" register={register} name="lastName" errors={errors} />
                        <Textinputs label="Email" register={register} name="email" errors={errors} type="email" />
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("password", { required: true })}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                {errors["password"] && <span className="text-red-600 text-sm">Password is required</span>}
                            </div>
                        </div>

                        <div>
                            
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already have an Account?{' '}
                        <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
