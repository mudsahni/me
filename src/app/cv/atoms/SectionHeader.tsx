import React from "react";

type SectionHeaderProps = {
    children: string;
    divider?: boolean;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children, divider }) => {
    return (
        <div className={`${divider && "border-b border-gray-200"} px-6`}>
            <h3 className="text-2xl font-light leading-7 text-neutral-600 tracking-wide">{children}</h3>
        </div>
    )
}