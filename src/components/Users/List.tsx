import { useFetch } from "../../hooks/useFetch";

type Users = {
    name: string;
    age: number;
    slug: string;
}

export function ListUsers() {
    const { data } = useFetch<Users[]>("/users");

    if (!data) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="flex">
            <table
                className="w-full mx-auto"
            >
                <thead>
                    <tr>
                        <th className="border-black border-2 w-[80%]">Nome</th>
                        <th className="border-black border-2 w-[10%]">Idade</th>
                        <th className="border-black border-2 w-[10%]"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => (
                        <tr key={user.slug}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}