import React from 'react';
import { 
  Terminal, 
  Server, 
  Monitor, 
  Braces, 
  Layout, 
  Database, 
  GitBranch, 
  Globe,
  Code2,
  Smartphone,
  FileCode
} from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: 'JavaScript', icon: <Terminal size={20} /> },
        { name: 'TypeScript', icon: <FileCode size={20} /> },
        { name: 'React.js', icon: <Code2 size={20} /> },
        { name: 'Vue.js', icon: <Monitor size={20} /> },
        { name: 'HTML5', icon: <Layout size={20} /> },
        { name: 'CSS3', icon: <Layout size={20} /> },
        { name: 'Tailwind CSS', icon: <Layout size={20} /> },
        { name: 'Bootstrap', icon: <Layout size={20} /> },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: 'Node.js', icon: <Server size={20} /> },
        { name: 'PHP', icon: <Braces size={20} /> },
        { name: 'Laravel', icon: <Monitor size={20} /> },
        { name: 'Python', icon: <Terminal size={20} /> },
        { name: 'Django', icon: <Braces size={20} /> },
        { name: 'ASP.NET Core', icon: <Monitor size={20} /> },
        { name: 'PostgreSQL', icon: <Database size={20} /> },
        { name: 'MongoDB', icon: <Database size={20} /> },
        { name: 'REST API', icon: <Globe size={20} /> },
      ]
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: 'Git & GitHub', icon: <GitBranch size={20} /> },
        { name: 'GitLab', icon: <GitBranch size={20} /> },
        { name: 'Docker', icon: <Server size={20} /> },
        { name: 'Nginx', icon: <Server size={20} /> },
        { name: 'Linux', icon: <Terminal size={20} /> },
        { name: 'Postman', icon: <Globe size={20} /> },
        { name: 'PWA', icon: <Smartphone size={20} /> },
        { name: 'ERP Systems', icon: <Monitor size={20} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title animate-fade-in-up">My <span className="text-gradient">Skills</span></h2>
      <div className="skills-container">
        {categories.map((category, idx) => (
          <div key={idx} className={`skill-category glass-card animate-fade-in-up delay-${(idx + 1) * 200}`}>
            <h3 className="category-title">{category.title}</h3>
            <div className="category-skills">
               {category.skills.map((skill, i) => (
                 <div key={i} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                 </div>
               ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
