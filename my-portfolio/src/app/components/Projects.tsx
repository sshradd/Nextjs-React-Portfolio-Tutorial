import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Nostalgio",
    description: "A musical travel app that tracks songs and memories on a map.",
    github: "#",
    demo: "#",
  },
  {
    name: "Mae-Proval",
    description: "An app that helps determine eligibility for buying a home and suggests improvements.",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex justify-center gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-700 hover:text-black">
                  <FaGithub size={20} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-700 hover:text-black">
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
