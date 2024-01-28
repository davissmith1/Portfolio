import csxlImg from '../assets/projects/CSXL_Community.png'
import bucknerImg from '../assets/projects/BucknerU.png'
import bucknerCopy from '../assets/copy/buckner.json'
import csxlCopy from '../assets/copy/csxl.json'
import plannr from '../assets/projects/Plannr.png'

export const projectList =[
    {
        name: "CSXL Community",
        image: csxlImg,
        skills: "AngularJS, HTML, CSS, Python Fast API, PostgreSQL",
        description: csxlCopy.description,
        gitFlag: false
    
    }, 
    {
        name: "Buckner Univerity",
        image: bucknerImg,
        skills: "ReactJS, ExpressJS, Microsoft OpenID SSO",
        description: bucknerCopy.description,
        gitFlag: false
    },
    {
        name: "Daily Planner",
        image: plannr,
        skills: "ReactJS, ElectronJS, Material UI, HTML, CSS",
        description: "A simple scrum planner for daily ToDo lists",
        gitFlag: true
    }

];