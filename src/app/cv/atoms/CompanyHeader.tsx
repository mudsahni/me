import React from "react";

type CardHeaderProps = {
    link?: string;
    children: string;
};

export const CompanyHeader: React.FC<CardHeaderProps> = ({ children, link }) => {
    return (
        <div className="pb-5">
            {link ? (
                <a href={link} target="_blank" className="text-xl font-normal leading-7 text-sky-700 tracking-wider hover:underline cursor-pointer">{children}</a>

            ) : (
                <h3 className="text-xl font-normal leading-7 text-sky-700 tracking-wider">{children}</h3>

            )}
        </div>

    )
}