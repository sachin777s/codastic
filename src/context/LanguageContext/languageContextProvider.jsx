import { useState } from "react";
import LanguageContext from "./LanaugeContext";
import defaultValues from "../../config/defaultValues";

export default function LanguageContextProvider({ children }) {

    const [value, setValue] = useState(defaultValues);

    return (
        <LanguageContext.Provider value={{ value, setValue }}>
            {children}
        </LanguageContext.Provider>
    )
}