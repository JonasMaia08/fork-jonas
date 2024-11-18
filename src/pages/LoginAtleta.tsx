import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import { userRegisterSchema } from "../lib/schemaLoginUser";
import { Loader } from "lucide-react";
import useNavigateTo from "../hooks/useNavigateTo";
import HeaderBasic from "../components/ui/HeaderBasic";

import { useHookFormMask } from "use-mask-input";

export const LoginAtleta: React.FC = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const GoTo = useNavigateTo();

    const validateLogin = (cpf: string, password: string): boolean => {
        return cpf === "111.111.111-11" && password === "12345678";
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(userRegisterSchema),
    });

    const registerWithMask = useHookFormMask(register);

    async function onSubmit(data: FieldValues) {
        console.log("Formulário enviado:", data);
        toast.success("Formulário enviado com sucesso!");


        const { cpf, password } = data

        if (validateLogin(cpf, password)) {
            GoTo("/home-atleta");
        } 
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col pb-16">
                <HeaderBasic />

                <main className="flex flex-col items-center flex-1">
                    <div className="flex flex-col m-4 md:mx-20 p-4 md:px-24 py-7 md:py-12 w-full max-w-5xl">
                        <div className="text-start px-8 mb-8">
                            <h2 className="text-4xl font-bold pb-2">
                                Olá, <span className="text-orange-600">Atleta!</span>
                            </h2>
                            <p className="font-inter">Entre em sua conta para começar.</p>
                        </div>

                        <form
                            className="bg- p-8 rounded-lg w-full"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <section className="mb-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="mb4">
                                        <label
                                            htmlFor="cpf"
                                            className="block text-sm pb-2 font-medium text-gray-600"
                                        >
                                            CPF
                                        </label>
                                        <input
                                            type="text"
                                            id="cpf"
                                            placeholder="Preencha com seu CPF"
                                            {...registerWithMask("cpf", '999.999.999-99')}
                                            className="w-full pl-10 pr-3 bg-[#D9D9D9] opacity-70 placeholder-black h-12 p-3 border border-black rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-40"
                                        />
                                        {errors.cpf && (
                                            <p className="text-xs text-red-400 mt-1">
                                                {errors.cpf?.message as string}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm pb-2 font-medium text-gray-600"
                                        >
                                            Senha
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={isPasswordVisible ? "text" : "password"}
                                                id="password"
                                                placeholder="Preencha com sua senha"
                                                {...register("password")}
                                                className="w-full pl-10 pr-10 bg-[#D9D9D9] opacity-70 placeholder-black h-12 p-3 border border-black rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-orange-600 focus:ring-opacity-40"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setIsPasswordVisible(!isPasswordVisible)
                                                }
                                                className="absolute right-3 top-3 text-gray-600"
                                            >
                                                {isPasswordVisible ? (
                                                    <EyeIcon size={20} />
                                                ) : (
                                                    <EyeOffIcon size={20} />
                                                )}
                                            </button>
                                            {errors.password && (
                                                <p className="text-xs text-red-400 mt-1">
                                                    {errors.password?.message as string}
                                                </p>
                                            )}
                                        </div>
                                        <a href="#" className="text-blue-600 mt-2 block">
                                            Esqueci minha senha
                                        </a>
                                    </div>
                                </div>
                            </section>

                            <div className="py-10 flex justify-end gap-7">
                                <button
                                    type="button"
                                    onClick={() => GoTo("/profile-select")}
                                    className="h-13 md:w-52 font-bold font-inter bg-gray-200 text-gray-700 py-3 px-9 rounded-lg hover:bg-gray-300 transition duration-300"
                                >
                                    Voltar
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    onClick={onSubmit}
                                    className="h-13 md:w-52 font-bold font-inter bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    {isSubmitting ? (
                                        <Loader className="animate-spin" />
                                    ) : (
                                        "Confirmar"
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="flex flex-col text-center">
                            <p className="font-inter">Ainda não tem uma conta?</p>
                            <a href="" className="font-inter text-blue-600">
                                Criar conta
                            </a>
                        </div>
                    </div>
                </main>

                <footer className="w-full text-center mt-auto">
                    <p className="text-sm text-gray-500">
                        © 2024 Esporte na cidade. All rights reserved.
                    </p>
                </footer>
            </div>
        </>
    );
};


