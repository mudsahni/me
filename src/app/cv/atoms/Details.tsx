import React from "react";

type DetailsProps = {
    lhs: React.ReactNode;
    rhs: React.ReactNode
}
export const Details: React.FC<DetailsProps> = ({lhs, rhs}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[70%_1px_30%] sm:divide-y-0 divide-y divide-neutral-200">
            {lhs}
            <div className="hidden sm:block bg-neutral-200" style={{height: "100%"}}></div>
            {rhs}
        </div>
    )
}