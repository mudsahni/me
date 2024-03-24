'use client'
import React from "react";
import {SectionHeader} from "@/app/cv/atoms/SectionHeader";
import {CompanyHeader} from "@/app/cv/atoms/CompanyHeader";
import {Team} from "@/app/cv/atoms/Team";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/20/solid";

type Position = {
    title: string;
    active: boolean;
    duration: string;
}
type Team = {
    name: string;
    description: string;
    positions: Position[];
    responsibilities: { description: string; keywords: string[];}[];
}

type ExperienceProps = {
    experience: { company: string; link?: string; description?: string; team: Team[] }[];
};

type CompanyProps = {
    company: string;
    link?: string;
    description?: string;
    team: Team[];
}

const Company: React.FC<CompanyProps> = ({ company, description, link, team }) => {
    const [expanded, setExpanded] = React.useState<boolean>(true)

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="sm:pt-4 px-6 pt-2">
            <div className="flex justify-between">
                <CompanyHeader link={link}>{company}</CompanyHeader>
                {
                    expanded ? (
                        <ChevronUpIcon
                            onClick={handleClick}
                            name={company}
                            className="h-5 w-5 text-neutral-600 cursor-pointer"
                            title="Collapse"
                        />
                    ) : (
                        <ChevronDownIcon
                            onClick={handleClick}
                            name={company}
                            className="h-5 w-5 text-neutral-600 cursor-pointer"
                            title="Expand"
                        />
                    )
                }
            </div>
            {
                expanded && <div className="overflow-hidden transition-all ease-in-out duration-200">{
                    team.map((singleTeam, index) => (
                        <Team key={index} team={singleTeam}/>
                    ))
                }</div>
            }
        </div>
    )
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {

    return (
        <div className="py-10">
            <SectionHeader divider={false}>Professional Experience</SectionHeader>
            {
                experience.map((exp, index) => (
                    <Company key={index} {...exp} />
                ))
            }
        </div>
    )

}