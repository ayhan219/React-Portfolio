
import styles from "./ProjectsStyles.module.css"
import nodeexpress from "../../assets/nodeexpress.png"
import ProjectCard from "../../common/ProjectCard";
import flixApp from "../../assets/flix.jpg"
import zipCode from "../../assets/zip.png"
import CalorieApp from "../../assets/calorie app.jpg"

function Projects() {
  return <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard src={nodeexpress} link="https://github.com/ayhan219/Simple-Data-Application-Node.js-Express.js-"
        h3="Node.js-Express.js Project"
        p=""/>
        <ProjectCard src={flixApp} link="https://github.com/ayhan219/Flixx-app"
        h3="Flix App"
        p=""/>
        <ProjectCard src={zipCode} link="https://github.com/ayhan219/ZipCode-Directory-Manager"
        h3="Zipcode Directory Manager"
        p=""/>
        <ProjectCard src={CalorieApp} link="https://github.com/ayhan219/CalorieApp-Webpack"
        h3="Calorie App"
        p=""/>
    </div>
    </section>;
}

export default Projects;
