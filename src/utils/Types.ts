export type Skill = {
    iconPath: string;
    tooltip: string;
    description: string;
    additionalIconPaths?: { path: string; tooltip: string }[];
};

export type CarouselDescription = {
    skill: string;
    description: string;
};

export type PersonalInterests = {
    skill: string;
    description: string;
};
