import { useState } from "react";
import LanguageContext from "./LanaugeContext";
import defaultValues from "../../config/defaultValues";

export default function LanguageContextProvider({ children }) {

    const [html, setHtml] = useState(defaultValues.html);
    const [css, setCss] = useState(defaultValues.css);
    const [javascript, setJavascript] = useState(defaultValues.javascript);

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