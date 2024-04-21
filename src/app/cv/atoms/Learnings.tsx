import React from "react";
import {SectionHeader} from "@/app/cv/atoms/SectionHeader";

type LearningProps = {
    title?: string;
    link?: string;
    date?: string;
    subtitle?: string;
}
const Learning: React.FC<LearningProps> = ({ title, date, subtitle, link }) => {
    return (
        <div className="text-sm pb-6">
            {
                title &&  link ? ( <a href={link} target="_blank" className="text-sky-600 font-medium pb-1 cursor-pointer hover:underline">{title}</a>) :
                    (<h3 className="text-neutral-600 font-medium pb-1">{title}</h3>)

            }
            {subtitle && <p className="text-neutral-500 italic">{subtitle}</p>}
            {date && <p className="text-neutral-500 italic">{date}</p>}
        </div>
    )
}

type LearningBoxProps = {
    title: string;
    learnings: LearningProps[]
}

// const InterestsBox: React.FC<string[]> = ({interests}) => {
//     return (
//         <div className="mb-6">
//             <SectionHeader>Interests</SectionHeader>
//             <div className="px-6">
//                 <div className="h-auto mb-4 h-10 w-100 max-w-1/1 bg-neutral-100 rounded-md mt-6 px-6 pt-6">
//                     {
//                         interests.map((interest, index) => (
//                             <Learning key={index} degree={interest} />
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }
export const LearningBox: React.FC<LearningBoxProps> = ({title, learnings}) => {
    return (
        <div className="mb-6">
            <SectionHeader>{title}</SectionHeader>
            <div className="px-6">
                <div className="h-auto mb-4 h-10 w-100 max-w-1/1 bg-neutral-100 rounded-md mt-6 px-6 pt-6">
                    {
                        learnings.map((learning, index) => (
                            <Learning key={index} {...learning} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

type LearningsProps = {
    learnings: { [key:string]: LearningProps[] };
}

export const Learnings: React.FC<LearningsProps> = ({learnings}) => {
    return (
        <div className="pt-10">
            {
                Object.entries(learnings).map(([key, value])  => (
                    <LearningBox key={key} title={key} learnings={value} />
                ))
            }
        </div>
    )
}


type MiscellaneousProps = {
    misc: { [name: string]: string[]; }
}

type MiscellaneousBoxProps = {
    title: string;
    values: string[];
}

export const MiscellaneousBox: React.FC<MiscellaneousBoxProps> = ({title, values}) => {

    return (
        <div className="mb-6">
            <SectionHeader>{title}</SectionHeader>
            <div className="px-6">
                <div className="h-auto mb-4 h-10 w-100 bg-neutral-100 rounded-md mt-6 px-6 pt-6 flex flex-wrap gap-2">
                    {
                        values.map((value, index) => (
                            <div className="text-sm mb-6 bg-white px-4 rounded-md py-1" key={index}>
                                <h3 className="text-neutral-600 font-medium pb-1">{value}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}
export const Miscellaneous: React.FC<MiscellaneousProps> = ({misc}) => {

    return (
        <div className="pt-10">
            {
                Object.entries(misc).map(([key, values])  => (
                    <MiscellaneousBox key={key} title={key} values={values} />
                ))
            }
        </div>
    )
}