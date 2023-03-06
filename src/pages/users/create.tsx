import type { GetStaticProps } from "next";
import Router from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import { Breadcrumb } from "../../components/Breadcrumb";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

type CreateUserFormData = {
    name: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function CreateUser() {
    const { register, formState, getValues, handleSubmit } = useForm<CreateUserFormData>();

    const handleCreateUser: SubmitHandler<CreateUserFormData> = (data) => {
        api.post("/users/create", data).then(() => {
            alert("Usuário criado com sucesso!");
            Router.push("/users");
        }).catch(() => {
            alert("Erro ao criar usuário!");
        });
    };

    return (
        <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit(handleCreateUser)}>
            <div className="flex flex-col md:grid md:grid-cols-12 gap-4">
                <div className="col-span-8">
                    <Input
                        id="name"
                        label="Nome"
                        {...register("name")}
                    />
                </div>
                <div className="col-span-4">
                    <Input
                        id="age"
                        label="idade"
                        type="number"
                        {...register("age")}
                    />
                </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-12 gap-4">
                <div className="col-span-6">
                    <Input
                        id="email"
                        label="E-mail"
                        type="email"
                        {...register("email", {
                            required: "Campo obrigatório"
                        })}
                        error={formState.errors.email?.message}
                    />
                </div>
                <div className="col-span-3">
                    <Input
                        id="password"
                        label="Senha"
                        type="password"
                        {...register("password", {
                            required: "Campo obrigatório"
                        })}
                        error={formState.errors.password?.message}
                    />
                </div>
                <div className="col-span-3">
                    <Input
                        id="confirmPassword"
                        label="Confirmar senha"
                        type="password"
                        {...register("confirmPassword", {
                            required: "Campo obrigatório",
                            validate: (value) => value === getValues("password") || "As senhas não conferem"
                        })}
                        error={formState.errors.confirmPassword?.message}
                    />
                </div>
            </div>
            <div className="flex w-full">
                <button
                    type="submit"
                    aria-label="Botão que submete o formulário"
                    className="ml-auto py-2 px-4 bg-blue-500 text-white rounded-sm"
                >
                Salvar
                </button>
            </div>
        </form>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    };
};