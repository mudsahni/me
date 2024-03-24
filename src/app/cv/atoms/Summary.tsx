import React from "react";
import {Keywords} from "@/app/cv/atoms/Keywords";

type SummaryProps = {
    content: string;
    keywords?: string[];
}
export const Summary: React.FC<SummaryProps> = ({ content, keywords }) => {

    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: content }} className="text-base font-normal text-neutral-600 pt-10 pb-6" />
            {
                keywords && (
                    <Keywords keywords={keywords} />
                )
            }
        </div>
    )
}