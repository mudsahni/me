import React from "react";
import {TrophyIcon} from "@heroicons/react/24/solid";

type KeywordProps = {
    children: string;
}

type KeywordsProps = {
    keywords: string[];
}

export const Keywords: React.FC<KeywordsProps> = ({keywords}) => {
    return (
        <div className="flex flex-wrap gap-2 pt-4">
            {keywords.map((keyword, index) => (
                <Keyword key={index}>{keyword}</Keyword>
            ))}
        </div>

    )
}
export const Keyword: React.FC<KeywordProps> = ({children}) => {
    return (
        children.includes("$award$") ? (
            <span
                className="px-3 py-1 bg-neutral-100 rounded-md text-sm font-medium tracking-wide text-neutral-600"
            >
                <TrophyIcon className="h-4 w-4 text-neutral-600 inline-block mr-1 mr-2 mb-1" />
                {children.replace("$award$", "").trim()}
            </span>
        ) : (
            <span
                className="px-3 py-1 bg-neutral-100 rounded-md text-sm font-medium tracking-wide text-neutral-600"
            >
                {children.replace("$award$", "").trim()}
            </span>
        )
    )

}