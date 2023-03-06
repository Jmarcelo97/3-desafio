import Router from "next/router";
import { GetServerSideProps } from "next/types";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { mutate as mutateGlobal } from "swr";

import { Input } from "../../components/Input";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../services/api";

type UpdateUserProps = {
    slug: string;
}

type UserProps = {
    id: number;
    name: string;
    age: number;
    email: string;
}

type UpdateUserFormData = {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function UpdateUser({ slug }: UpdateUserProps) {
    const { data } = useFetch<UserProps>(`/users/${slug}`);
    const { register, formState, getValues, handleSubmit, setValue } = useForm<UpdateUserFormData>();

    useEffect(() => {
        if (data) {
            setValue("id", data.id);
            setValue("name", data.name);
            setValue("age", data.age);
            setValue("email", data.email);
        }
    }, [data, setValue]);

    const handleUpdateUser: SubmitHandler<UpdateUserFormData> = (data) => {
        mutateGlobal(`/users/${slug}`, data);
        api.post("/users/update", data).then(() => {
            alert("Usuário atualizado com sucesso!");
            Router.push("/users");
        }).catch(() => {
            alert("Erro ao atualizar usuário!");
        });
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleUpdateUser)}>
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
                        {...register("password")}
                        error={formState.errors.password?.message}
                    />
                </div>
                <div className="col-span-3">
                    <Input
                        id="confirmPassword"
                        label="Confirmar senha"
                        type="password"
                        {...register("confirmPassword", {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.params as { slug: string };

    return {
        props: {
            slug
        }
    };
};