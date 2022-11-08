import {createContext} from "react";

export const defaultValues = {
    name: 'Test',
    volume: 50,
    analytics: false,
}

export const SettingsContext = createContext(defaultValues);
