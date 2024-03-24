import React from "react";
import {Position, PositionCard} from "@/app/cv/atoms/PositionCard";

type PositionsProps = {
    positions: Position[];
    team: string;
}

export const Positions: React.FC<PositionsProps> = ({ positions, team }) => {
    return (
        <div className="flex flex-col sm:flex-row">
            {
                positions.map((position, index) => (
                    <PositionCard
                        key={index}
                        position={position}
                        team={team}
                        stackDate={positions.length > 2}
                    />
                ))
            }
        </div>
    )
}