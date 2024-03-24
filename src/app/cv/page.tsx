import {Container} from "./atoms/Container";
import React from "react";
import {Card} from "@/app/cv/atoms/Card";
import {ResumeHeader} from "@/app/cv/atoms/ResumeHeader";
import { promises as fs } from 'fs';
import {Summary} from "@/app/cv/atoms/Summary";
import {Experience} from "@/app/cv/atoms/Experience";
import {Details} from "@/app/cv/atoms/Details";
import {Learnings, Miscellaneous} from "@/app/cv/atoms/Learnings";

interface Resume {
    header: {
        name: string;
        profile: string;
        contact: {
            linkedIn: string;
            email: string;
            phone: string;
            location: string;
        }
    }
    summary: {
        title: string;
        content: string;
        keywords: string[];
    }
    misc: { [name: string]: string[]; }
    learnings: {
        [name: string]: {
            title: string;
            subtitle?: string;
            date?: string;
            link?: string;
        }[];
    }
    experience: {
        company: string;
        link?: string;
        description: string;
        team: {
            name: string;
            description: string;
            positions: {
                title: string;
                active: boolean;
                duration: string;
            }[],
            responsibilities: {
                description: string;
                keywords: string[];
            }[]
        }[]
    }[]
}

export default async function CV() {
    const file = await fs.readFile(process.cwd() + '/src/app/mudit_sahni.json', 'utf8');
    const content: Resume = JSON.parse(file);

    return (
        <div>
            <Container>
                <Card
                    header={
                    <div>
                        <ResumeHeader
                            name={content.header.name}
                            profile={content.header.profile}
                            contact={content.header.contact}
                        />
                        <Summary content={content.summary.content} keywords={content.summary.keywords} />
                    </div>
                    }
                    content={
                        <Details
                            rhs={
                            <div>
                                <Miscellaneous misc={content.misc} />
                                <Learnings
                                    learnings={content.learnings}
                                />
                            </div>
                            }
                            lhs={<Experience experience={content.experience}/>}
                        />
                    }
                />
            </Container>
        </div>
    )
}