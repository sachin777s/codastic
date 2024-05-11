import { useState } from "react";
import LanguageContext from "./LanaugeContext";
import defaultValues from "../../config/defaultValues";
import useLocalStorage from "../../hooks/useLocalStorage"

export default function LanguageContextProvider({ children }) {

    const [html, setHtml] = useLocalStorage("html", defaultValues.html);
    const [css, setCss] = useLocalStorage("css", defaultValues.css);
    const [javascript, setJavascript] = useLocalStorage("javascript", defaultValues.javascript);

    return (
        <LanguageContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            javascript,
            setJavascript
        }}>
            {children}
        </LanguageContext.Provider>
    )
}