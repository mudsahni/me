import React from "react";
import {Keywords} from "@/app/cv/atoms/Keywords";

export type Responsibility = {
    description: string;
    keywords?: string[];
};

type ResponsibilitiesProps = {
    responsibilities: Responsibility[];
};

export const Responsibilities: React.FC<ResponsibilitiesProps> = ({ responsibilities }) => {
    return (
        <ul role="list" className="list-disc px-6 pb-5 text-neutral-600">
            {
                responsibilities.map((responsibility, index3) => (
                    <li key={index3} className="py-2">
                        <p
                            className="text-base font-normal"
                            dangerouslySetInnerHTML={{ __html: responsibility.description }}
                        />
                        { responsibility.keywords && responsibility.keywords.length > 0 &&
                            (
                                <Keywords keywords={responsibility.keywords} />
                            )
                        }
                    </li>
                ))
            }
        </ul>

    )
}