export type Skill = {
    iconPath: string;
    tooltip: string;
    description: string;
    additionalIconPaths?: { path: string; tooltip: string }[];
};

export type CarouselDescription = {
    se: string;
    skills: string;
    funFact: string;
};
