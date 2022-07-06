import React, { useEffect, useState } from 'react';

type DropDownProps = {
    configs: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    configSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
                                               configs,
                                               configSelection,
                                           }: DropDownProps): JSX.Element => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    /**
     * Handle passing the config name
     * back to the parent component
     *
     * @param configs  The selected config
     */
    const onClickHandler = (configs: string): void => {
        configSelection(configs);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <>
            <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
                {configs.map(
                    (configs: string, index: number): JSX.Element => {
                        return (
                            <p
                                key={index}
                                onClick={(): void => {
                                    onClickHandler(configs);
                                }}
                            >
                                {configs}
                            </p>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default DropDown;
