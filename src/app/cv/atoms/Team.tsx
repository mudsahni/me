import React from "react";
import {Position} from "@/app/cv/atoms/PositionCard";
import {Responsibility, Responsibilities} from "@/app/cv/atoms/Responsibilities";
import {Positions} from "@/app/cv/atoms/Positions";

type Team = {
    name: string;
    description?: string;
    positions: Position[];
    responsibilities?: Responsibility[];

}
type TeamProps = {
    team: Team;
};

export const Team: React.FC<TeamProps> = ({team}) => {

    return (
        <div>
            <Positions positions={team.positions} team={team.name}></Positions>
            {team.description && <p dangerouslySetInnerHTML={{__html: team.description}} className="py-5 text-base italic font-normal text-neutral-600" />}
            {team.responsibilities && <Responsibilities responsibilities={team.responsibilities}/>}
        </div>

    )
}