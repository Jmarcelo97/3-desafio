import type { AppProps } from "next/app";
import Breadcrumb from "../components/Breadcrumb";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col w-screen h-screen">
            <div className="w-full h-full max-w-5xl mx-auto gap-4 p-4 md:p-0">
                <Breadcrumb />
                <Component {...pageProps} />
            </div>
        </div>
    );
}
