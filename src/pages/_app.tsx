import type { AppProps } from "next/app";
import { PanelLayout } from "../layouts/panel";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PanelLayout>
            <Component {...pageProps} />
        </PanelLayout>
    );
}
