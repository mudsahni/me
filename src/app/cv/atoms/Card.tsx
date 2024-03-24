import React from "react";

type CardProps = {
    header: React.ReactNode;
    content: React.ReactNode;
};
export const Card: React.FC<CardProps> = ({ header, content }) => {
    return (
        <div className="divide-y divide-neutral-200 overflow-hidden rounded-lg bg-white">
            <div className="px-4 py-5 sm:px-6">
                {header}
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}