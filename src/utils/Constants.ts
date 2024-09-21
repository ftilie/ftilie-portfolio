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
export const csharpDescription = `Over ${csharpExp} years of experience in developing robust and scalable applications using C# programming language. Skilled in object-oriented design principles and .NET framework.`;

const typescriptExp = getDiff("2020-07-01");
export const typescriptDescription = `Experienced in leveraging TypeScript to build scalable and maintainable web applications with ${typescriptExp} years of experience using React and Node.js.`;

export const mongoDescription = `Skilled in various database technologies such as SQL and NoSQL. Experienced in data modeling, schema design, and query optimization.`;

export const pythonDescription = `Proficient in popular deep learning frameworks such as TensorFlow, PyTorch, or Keras, building cutting-edge applications with neural networks and deep learning techniques.`;

export const cppDescription = `Capable of optimizing code for performance and efficiency. Familiar with standard libraries and frameworks, and adept at debugging and troubleshooting complex issues.`;
