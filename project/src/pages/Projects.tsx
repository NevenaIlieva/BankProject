import ViewCard from '../components/ViewCard'

function Projects() {
  return (
    <div>
      <h1>Projects</h1>

<div className="projects">
        <ViewCard
          name="Finance Dashboard"
          id=""
          description="A dashboard built with React and TypeScript."
        />

        <ViewCard
          name="Game UI"
          id=""
          description="An interactive game interface built with PixiJS."
        />
      </div>
    </div>)
}

export default Projects