import { useState } from "react";


// eslint-disable-next-line no-unused-vars
const useToggle = (initialState) => {

    const [isToggle, setIsToggle] = useState(initialState);

    const onToggle = () => {
        setIsToggle(isToggle);
    };

    return [isToggle, onToggle] ;
};
export{ useToggle };