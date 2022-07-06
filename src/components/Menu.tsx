import React, { useState } from "react";
import DropDown from "./DropDown";

const Menu: React.FC = (): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectConfig, setSelectConfig] = useState<string>("");
    const configs = () => {
        return ["alpha", "beta", "gamma", "delta"];
    };

    /**
     * Toggle the drop down menu
     */
    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    /**
     * Hide the drop down menu if click occurs
     * outside of the drop-down element.
     *
     * @param event  The mouse event
     */
    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

    /**
     * Callback function to consume the
     * config name from the child component
     *
     * @param config  The selected config
     */
    const configSelection = (confit: string): void => {
        setSelectConfig(confit);
    };

    return (
        <>
            <div className="announcement">
                <div>
                    {selectConfig
                        ? `You selected config: ${selectConfig}`
                        : "Select your configuration"}
                </div>
            </div>
            <br></br>
            <button
                className={showDropDown ? "active" : undefined}
                onClick={(): void => toggleDropDown()}
                onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
                    dismissHandler(e)
                }
            >
                <div>{selectConfig ? "Select: " + selectConfig : "Select ..."} </div>
                {showDropDown && (
                    <DropDown
                        configs={configs()}
                        showDropDown={false}
                        toggleDropDown={(): void => toggleDropDown()}
                        configSelection={configSelection}
                    />
                )}
            </button>
        </>
    );
};

export default Menu;
