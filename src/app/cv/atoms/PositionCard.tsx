import React from "react";

export type Position = {
    title: string;
    active: boolean;
    duration: string;
    location?: string;
}
export type PositionCardProps = {
    team: string;
    position: Position;
    stackDate: boolean;
}
export const PositionCard: React.FC<PositionCardProps> = ({ position, team, stackDate }) => {
    return (
        <div className={`min-h-20 min-w-10 sm:mr-4 sm:mb-0 mb-4 sm:h-full sm:w-full ${position.active ? "bg-neutral-600" : "bg-neutral-100"} rounded-md`}>
            <div className={`p-6 ${!stackDate && "flex justify-between"}`}>
                <div>
                    <h3 className={`text-base font-medium ${position.active ? "text-neutral-100" : "text-neutral-600"} tracking-wide`}>
                        {position.title}
                    </h3>
                    <h3 className={`text-base font-normal ${position.active ? "text-neutral-200" : "text-neutral-500"} tracking-wide`}>
                        {team}
                    </h3>
                </div>
                <div>
                    <h3 className={`text-base font-normal italic ${stackDate && "pt-2"} ${position.active ? "text-neutral-200" : "text-neutral-500"} tracking-wide`}>
                        {position.duration}
                    </h3>
                    {
                        position.location && (
                            <h3 className={`text-base font-normal italic ${position.active ? "text-neutral-200" : "text-neutral-500"} tracking-wide`}>
                                {position.location}
                            </h3>
                        )
                    }
                </div>

            </div>
        </div>
    )
}