export type Skill = {
    iconPath: string;
    tooltip: string;
    description: string;
    additionalIconPaths?: { path: string; tooltip: string }[];
};

export type PersonalInterests = {
    interest: string;
    description: string;
};
