const skillNames = ["figma", "html", "css", "bootstrap", "react", "javascript", "express", "mysql", "mongoDB", "python", "php", "office"];

const source = "/assets/";
const type = ".png";

// Generate skill image paths
const skillImages = skillNames.map(name => source + name + type);

console.log(skillImages)
// Create the Skills array
const Skills = skillNames.map((name, index) => ({
    id: index + 1,
    name: name,
    src: skillImages[index]
}));

export default Skills;
