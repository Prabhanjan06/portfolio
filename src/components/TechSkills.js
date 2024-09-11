import Skill from "./Skill";
import Skills from "../content/Skills"


function TechSkills(){
    return (
        <div className="container">
            <h3>Tech Skills</h3>

            <div>
            <Skill
            name={Skills[0].name}
            src={Skills[0].src}
            />
            </div>
        </div>
    );
}

export default TechSkills;