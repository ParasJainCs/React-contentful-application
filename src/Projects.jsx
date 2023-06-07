import './fetchProjects'
import { useFetchProjects } from './fetchProjects'
const Projects = () => {
  const { loading, projects } = useFetchProjects()
  // console.log(projects)
  // return <div>Projects</div>
  if (loading) {
    return <section className='projects'>Loading...</section>
  }
  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { id, title, img, url } = project
          return (
            <a
              href={url}
              key={id}
              target='_blank'
              className='project'
              rel='noreferrer'
            >
              <img src={img} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          )
        })}
      </div>
    </section>
  )
}
export default Projects
