import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export function Breadcrumb() {
    const { asPath } = useRouter();
    return (
        <div className="mt-4 bg-slate-200 p-4 w-full rounded-sm">
            <nav aria-label="breadcrumb">
                <ol className="flex gap-2">
                    <li>
                        <Link
                            href="/users"
                            className={classNames({
                                "text-primary-500": asPath != "/users",
                            })}
                        >
                            Usuários
                        </Link>
                    </li>
                    {">"}
                    <li>
                        <Link
                            href="/users/create"
                            className={classNames({
                                "text-primary-500": asPath != "/users/create",
                            })}
                        >
                            Criar Usuário
                        </Link>
                    </li>
                </ol>
            </nav>
        </div>
    );
}