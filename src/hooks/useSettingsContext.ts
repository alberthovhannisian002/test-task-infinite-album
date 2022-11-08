import {useContext} from "react";
import {SettingsContext} from "../SettingsContext";

const useSettingsContext = () => {
    const settingsContext = useContext(SettingsContext);
    return {...settingsContext};
}

export default useSettingsContext;