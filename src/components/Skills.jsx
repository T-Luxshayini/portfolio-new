const Skills = () => {
    const skills = [
      { name: 'HTML', img: '/path/to/htmlt.png' },
      { name: 'CSS', img: '/path/to/CSS.png' },
      { name: 'Bootstrap', img: '/path/to/bootstrap7.svg' },
      { name: 'Tailwind', img: '/path/to/tailwind.jpeg' },
      { name: 'Git', img: '/path/to/git.png' },
      { name: 'GitHub', img: '/path/to/github.png' },
    ];
  
    return (
      <section id="skills" className="min-h-screen py-12">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="flex flex-wrap justify-center mt-8 space-x-6">
          {skills.map((skill) => (
            <div key={skill.name} className="text-center">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-20 mx-auto"
              />
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;
  