import React from "react";


type ContainerProps = {
    children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
            {children}
        </div>
    )
}