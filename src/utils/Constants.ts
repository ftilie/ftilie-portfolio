import { csharpIcon, dotNetIcon, mongoIcon, protobufIcon, reactIcon, tanStackIcon, typescriptIcon, sqlIcon, pythonIcon, tensorflowIcon, pytorchIcon, cppIcon, cIcon } from "./Icons";
import { CarouselDescription, PersonalInterests, Skill } from "./Types";

export const HEADER_HEIGHT = "60px";
export const SIDE_PADDING = 8;

const getDiff = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate ?? new Date().toISOString());
    let years = end.getFullYear() - start.getFullYear();
    if (end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth() && end.getDate() < start.getDate())) {
        years--;
    }
    return years;
};

const csharpExp = getDiff("2020-07-01");
const csharpDescription = `Over ${csharpExp} years of experience in developing robust and scalable applications using C# programming language. Skilled in object-oriented design principles and .NET framework.`;
export const csharpSkill: Skill = {
    iconPath: csharpIcon,
    tooltip: "C#",
    description: csharpDescription,
    additionalIconPaths: [
        {
            path: dotNetIcon,
            tooltip: "dotNet",
        },
        {
            path: protobufIcon,
            tooltip: "Protobuf",
        },
    ],
};

const typescriptExp = getDiff("2020-07-01");
const typescriptDescription = `Experienced in leveraging TypeScript to build scalable and maintainable web applications with ${typescriptExp} years of experience using React and Node.js.`;
export const typescriptSkill: Skill = {
    iconPath: typescriptIcon,
    tooltip: "TypeScript",
    description: typescriptDescription,
    additionalIconPaths: [
        {
            path: reactIcon,
            tooltip: "React",
        },
        {
            path: tanStackIcon,
            tooltip: "TanStack",
        },
    ],
};

const databaseDescription = `Skilled in various database technologies such as SQL and NoSQL. Experienced in data modeling, schema design, and query optimization.`;
export const databaseSkill: Skill = {
    iconPath: mongoIcon,
    tooltip: "MongoDB",
    description: databaseDescription,
    additionalIconPaths: [
        {
            path: sqlIcon,
            tooltip: "SQL",
        },
    ],
};

const pythonDescription = `Proficient in popular deep learning frameworks such as TensorFlow, PyTorch, or Keras, building cutting-edge applications with neural networks and deep learning techniques.`;
export const pythonSkill: Skill = {
    iconPath: pythonIcon,
    tooltip: "Python",
    description: pythonDescription,
    additionalIconPaths: [
        {
            path: tensorflowIcon,
            tooltip: "Tensorflow",
        },
        {
            path: pytorchIcon,
            tooltip: "Pytorch",
        },
    ],
};

const cppDescription = `Capable of optimizing code for performance and efficiency. Familiar with standard libraries and frameworks, and adept at debugging and troubleshooting complex issues.`;
export const cppSkill: Skill = {
    iconPath: cppIcon,
    tooltip: "C++",
    description: cppDescription,
    additionalIconPaths: [
        {
            path: cIcon,
            tooltip: "C",
        },
    ],
};

export const carouselDescription: CarouselDescription[] = [
    {
        skill: "Software Engineer",
        description:
            "A highly skilled and versatile Full-Stack Software Engineer with extensive experience in C# and TypeScript. Proficient in Python and C/C++, with a strong background in building and maintaining robust applications. Adept at using React for front-end development and well-versed in .NET for back-end services. Demonstrates comprehensive expertise in database management, optimization, and MongoDB aggregation pipelines. Known for effectively querying databases and enhancing data management systems to improve performance and scalability. Passionate about solving complex problems and delivering high-quality software solutions.",
    },
    {
        skill: "Web Developer Skills",
        description:
            "Proficient in building dynamic and responsive web applications using the React framework. Skilled in creating reusable components, managing state with Redux or Context API, and integrating RESTful APIs. Experienced in modern JavaScript (ES6+), HTML, and CSS, with a strong understanding of front-end best practices and performance optimization. Capable of translating design wireframes into high-quality code and collaborating effectively within a team environment.",
    },
    {
        skill: "Fun Fact",
        description: '" Time control is the best super power "',
    },
];

export const personalInterests: PersonalInterests[] = [
    {
        skill: "Computer Vision",
        description:
            "A highly skilled and versatile Full-Stack Software Engineer with extensive experience in C# and TypeScript. Proficient in Python and C/C++, with a strong background in building and maintaining robust applications. Adept at using React for front-end development and well-versed in .NET for back-end services. Demonstrates comprehensive expertise in database management, optimization, and MongoDB aggregation pipelines. Known for effectively querying databases and enhancing data management systems to improve performance and scalability. Passionate about solving complex problems and delivering high-quality software solutions.",
    },
    {
        skill: "Design",
        description:
            "A highly skilled and versatile Full-Stack Software Engineer with extensive experience in C# and TypeScript. Proficient in Python and C/C++, with a strong background in building and maintaining robust applications. Adept at using React for front-end development and well-versed in .NET for back-end services. Demonstrates comprehensive expertise in database management, optimization, and MongoDB aggregation pipelines. Known for effectively querying databases and enhancing data management systems to improve performance and scalability. Passionate about solving complex problems and delivering high-quality software solutions.",
    },
    {
        skill: "Web Development",
        description:
            "A highly skilled and versatile Full-Stack Software Engineer with extensive experience in C# and TypeScript. Proficient in Python and C/C++, with a strong background in building and maintaining robust applications. Adept at using React for front-end development and well-versed in .NET for back-end services. Demonstrates comprehensive expertise in database management, optimization, and MongoDB aggregation pipelines. Known for effectively querying databases and enhancing data management systems to improve performance and scalability. Passionate about solving complex problems and delivering high-quality software solutions.",
    },
];
