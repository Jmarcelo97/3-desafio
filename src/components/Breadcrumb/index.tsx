import Link from "next/link";

export default function Breadcrumb() {
    return (
        <div className="mt-4 bg-slate-200 p-4 w-full rounded-sm">
            <nav aria-label="breadcrumb">
                <ol className="flex gap-2">
                    <li>
                        <Link href="/users">
                                Usuários
                        </Link>
                    </li>
                    {">"}
                    <li>
                        <Link href="/users/create">
                                Criar Usuário
                        </Link>
                    </li>
                </ol>
            </nav>
        </div>
    );
}