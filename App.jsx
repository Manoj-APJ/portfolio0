import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';

// --- Data for the Website Sections (Mock Data) ---
const portfolioData = {
  hero: {
    name: "Manoj Mannam",
    tagline: "Result-Oriented Student | AIML Enthusiast"
  },
  about: {
    bio: "Hello! I'm Manoj Mannam, a passionate and results-oriented student with a deep interest in software engineering and Artificial Intelligence. I'm currently pursuing my B.Tech in Computer Science and have a solid foundation in front-end and back-end technologies. My goal is to leverage my skills to create impactful solutions and contribute to cutting-edge projects.",
    education: [
      { year: "2022-Present", institution: "CMR College of Engineering and Technology", degree: "B.Tech in Computer Science" },
      { year: "2018-2020", institution: "Jawahar Navodaya Vidyalaya", degree: "Science Stream" }
    ],
    resumeUrl: "#" // Replace with your actual resume URL
  },
  skills: {
  technical: [
    { name: "C", icon: "🔠" },
    { name: "C++", icon: "💻" },
    { name: "Java", icon: "☕" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "🔷" },
    { name: "SQL", icon: "🗄️" },
    { name: "Supabase", icon: "🗂️" },
    { name: "LangChain", icon: "🔗" },
    { name: "Xenova Transformers", icon: "🤖" }
  ],
  tools: [
    { name: "Git & GitHub", icon: "🌐" },
    { name: "Netlify (CI/CD)", icon: "🚀" },
    { name: "VS Code", icon: "👨‍💻" },
    { name: "Postman", icon: "📬" },
    { name: "Figma", icon: "🎨" }
  ]
},
  projects: [
  {
    title: "PDFMarket – Digital PDF Selling Platform",
    description: "A full-stack platform for selling PDFs with secure authentication, cart functionality, and seamless payment integration.",
    tech: ["JavaScript", "TypeScript", "Supabase (SQL)", "Razorpay API", "Netlify (CI/CD)"],
    github: "https://github.com/Manoj-APJ/pdfstore",
    demo: "https://manojtalent.netlify.app/"
  },
  {
    title: "AI-Powered PDF Organizer",
    description: "An AI-integrated file management system that allows users to upload, tag, categorize, and chat with PDFs using NLP models.",
    tech: ["TypeScript", "JavaScript", "Supabase (SQL)", "LangChain", "Xenova Transformers"],
    github: "#",
    demo: "#"
  },
  {
    title: "Binary Tree Visualization",
    description: "An interactive tool built with p5.js to visualize binary tree operations with dynamic animations, real-time searching, panning, and zooming.",
    tech: ["JavaScript", "HTML", "CSS", "p5.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "Real-Time Object Detector",
    description: "An AI-powered object detection system using TensorFlow to classify and localize objects in real-time from live video streams.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    github: "#",
    demo: "#"
  }
],
  codingProfiles: {
    profiles: [
      { name: "LeetCode", url: "https://leetcode.com/u/manojmannamapj9/", icon: "https://www.leetcode.com/favicon.ico" },
      { name: "GitHub", url: "https://github.com/Manoj-APJ/", icon: "https://github.githubassets.com/favicons/favicon.svg" },
      { name: "Codeforces", url: "#", icon: "https://codeforces.org/22h51a05a4" }
    ],
    stats: [
      { name: "Problems Solved", value: 500, icon: "✅" },
      { name: "Competitive Rating", value: 1754, icon: "⭐" }
    ]
  },
  certifications: [
    { title: "Fundamentals of Python", issuer: "Infosys Springboard", date: "2025", url: "#" }
  ],
  blogs: [
    { title: "Getting Started with React Hooks", snippet: "A beginner's guide to using useState and useEffect...", date: "Oct 2023", url: "#" },
    { title: "Understanding Backpropagation in Neural Networks", snippet: "A deep dive into the core algorithm of deep learning...", date: "Sep 2023", url: "#" }
  ],
  email: "manojmannamapj9@gmail.com"
};

// --- Custom Components & Sections ---

// Shared Section Wrapper Component
const Section = ({ id, title, children, isBlueBg }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const bgColor = isBlueBg ? 'bg-blue-950 text-white' : 'bg-white text-gray-900';
  const accentColor = isBlueBg ? 'text-yellow-400' : 'text-blue-900';
  const textGray = isBlueBg ? 'text-gray-300' : 'text-gray-600';

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-20 px-4 md:px-8 lg:px-16 ${bgColor}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className={`text-4xl md:text-5xl font-bold text-center mb-12 relative z-10 ${accentColor}`}>
        {title}
      </h2>
      {children}
    </motion.section>
  );
};

// Header Component with animated name on scroll
const Header = () => {
  const { name } = portfolioData.hero;
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 500], [0, 1]);
  const profileScale = useTransform(scrollY, [0, 500], [0.2, 1]);
  const nameX = useTransform(scrollY, [0, 500], [-100, 0]);

  return (
    <motion.header
      style={{ opacity: headerOpacity }}
      className="fixed top-0 left-0 right-0 z-50 p-4 backdrop-blur-md bg-blue-900/50 border-b border-yellow-400"
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 md:space-x-8 text-gray-200">
          <motion.div style={{ scale: profileScale }}>
            <img
              src="https://placehold.co/50x50/3182CE/FFFFFF?text=M"
              alt="Manoj Mannam"
              className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
            />
          </motion.div>
          <motion.div style={{ x: nameX }} className="font-bold text-xl md:text-2xl text-yellow-400">
            {name}
          </motion.div>
        </div>
        <div className="flex items-center space-x-4 md:space-x-8 text-gray-200">
          <a href="#about" className="hover:text-yellow-400 transition-colors">About Me</a>
          <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact Me</a>
          <a href="#coding-profiles" className="hover:text-yellow-400 transition-colors">Profiles</a>
          <a href={portfolioData.about.resumeUrl} download className="text-yellow-400 border border-yellow-400 px-4 py-1 rounded-full hover:bg-yellow-400 hover:text-blue-950 transition-colors">
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

// Hero Section (now contains About Me content)
const Hero = () => {
  const { bio, resumeUrl } = portfolioData.about;
  const { name, tagline } = portfolioData.hero;
  const { scrollY } = useScroll();

  const imgY = useTransform(scrollY, [0, 500], [0, -100]);
  const imgScale = useTransform(scrollY, [0, 500], [1, 0.2]);
  const imgOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const nameY = useTransform(scrollY, [0, 500], [0, -150]);
  const nameScale = useTransform(scrollY, [0, 500], [1, 0.2]);
  const nameOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="about" className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center bg-blue-950 text-white font-poppins pt-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950 via-blue-900 to-yellow-900"></div>
      <div className="relative z-10 p-4 max-w-5xl mx-auto">
        <motion.div
          className="relative inline-block"
          style={{ y: imgY, scale: imgScale, opacity: imgOpacity }}
        >
          <img
            src="https://placehold.co/300x300/3182CE/FFFFFF?text=Manoj"
            alt="Manoj Mannam"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-yellow-400 shadow-lg mx-auto"
          />
        </motion.div>
        
        <motion.h1
          className="mt-8 text-4xl md:text-6xl font-bold font-montserrat drop-shadow-lg text-yellow-400"
          style={{ y: nameY, scale: nameScale, opacity: nameOpacity }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="mt-2 text-xl md:text-2xl font-light text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {tagline}
        </motion.p>
        <motion.p
          className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {bio}
        </motion.p>
        <motion.a
          href={resumeUrl}
          download
          className="inline-block px-6 py-3 mt-8 text-lg font-bold text-blue-950 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};


// Skills Section
const Skills = () => {
  const { technical, tools } = portfolioData.skills;

  return (
    <Section id="skills" title="My Skills" isBlueBg={false}>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">Technical Skills</h3>
          <div className="flex flex-wrap gap-4">
            {technical.map((skill, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.1 }}
                className="bg-gray-100 backdrop-blur-md rounded-xl p-4 border border-gray-300 shadow-xl text-center text-blue-900"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">Tools</h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((skill, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.1 }}
                className="bg-gray-100 backdrop-blur-md rounded-xl p-4 border border-gray-300 shadow-xl text-center text-blue-900"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

// Projects Section
const Projects = () => {
  const { projects } = portfolioData;

  return (
    <Section id="projects" title="My Projects" isBlueBg={true}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-blue-800/50 backdrop-blur-md rounded-xl p-6 border border-blue-700 shadow-xl
                       hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
              y: -5
            }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-yellow-400/30 text-yellow-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} className="text-yellow-400 hover:text-yellow-300 transition-colors">GitHub</a>
              <a href={project.demo} className="text-white hover:text-yellow-300 transition-colors">Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Certifications Section
const Certifications = () => {
  const { certifications } = portfolioData;
  return (
    <Section id="certifications" title="Certifications & Achievements" isBlueBg={false}>
      <div className="max-w-4xl mx-auto space-y-6 text-gray-900">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 backdrop-blur-md rounded-xl p-6 border border-gray-300 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(251, 191, 36, 0.5)" }}
          >
            <h3 className="text-xl font-semibold text-blue-900">{cert.title}</h3>
            <p className="text-gray-600">{cert.issuer}, {cert.date}</p>
            <a href={cert.url} className="text-sm text-blue-900 hover:underline">View Credential</a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// Coding Profiles Section
const CodingProfiles = () => {
  const { profiles, stats } = portfolioData.codingProfiles;

  const CountUp = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const step = Math.ceil(end / (duration * 60));
      const timer = setInterval(() => {
        start += step;
        if (start > end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [end, duration]);

    return <span className="text-4xl font-bold text-yellow-400">{count.toLocaleString()}</span>;
  };

  return (
    <Section id="coding-profiles" title="Coding Profiles" isBlueBg={true}>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex flex-wrap justify-center gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              className="p-4 bg-blue-800/50 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center border border-blue-700 hover:scale-110 transition-transform"
              whileHover={{ rotate: 10, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={profile.icon} alt={profile.name} className="w-8 h-8 filter grayscale hover:grayscale-0 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-blue-800/50 backdrop-blur-md rounded-xl border border-blue-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-5xl mb-2">{stat.icon}</div>
              <CountUp end={stat.value} duration={2} />
              <p className="text-gray-400 mt-2">{stat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Blogs Section
const Blogs = () => {
  const { blogs } = portfolioData;
  return (
    <Section id="blogs" title="My Blogs" isBlueBg={false}>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-gray-900">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.url}
            className="relative overflow-hidden group bg-gray-100 backdrop-blur-md rounded-xl p-6 border border-gray-300 shadow-xl transition-all duration-300 hover:shadow-blue-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-900 transition-colors duration-300">{blog.title}</h3>
            <p className="text-sm text-gray-500">{blog.date}</p>
            <p className="text-gray-600 mt-4">{blog.snippet}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

// Contact Section
const Contact = () => {
  const { email } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  return (
    <Section id="contact" title="Contact" isBlueBg={true}>
      <motion.div className="max-w-xl mx-auto p-8 bg-blue-800/50 backdrop-blur-md rounded-xl shadow-2xl border border-blue-700 text-center" variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">Get in Touch</h3>
        <p className="text-lg text-gray-300 mb-4">Feel free to reach out to me via email.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-xl text-white font-medium break-all">{email}</p>
          <button onClick={copyEmail} className="px-6 py-3 rounded-full font-bold text-blue-950 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200">
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>
      </motion.div>
    </Section>
  );
};

// Footer & Theme Toggle (Theme toggle removed as per request)
const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-400 border-t border-blue-800 mt-12 bg-blue-950">
      <div className="flex justify-center items-center mb-4 space-x-4">
        <a href="https://github.com/manojmannam" className="hover:text-yellow-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/manojmannam" className="hover:text-yellow-400 transition-colors">LinkedIn</a>
      </div>
      <p className="mb-4">Made with ❤️ by Manoj Mannam</p>
    </footer>
  );
};

// Chatbot (UI Only)
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatUIVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    exit: { scale: 0.5, opacity: 0 }
  };
  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-yellow-400 text-blue-950 shadow-xl
                   hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-50 w-80 h-[450px] bg-blue-900/80 backdrop-blur-lg rounded-xl shadow-2xl flex flex-col border border-blue-700"
            variants={chatUIVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="p-3 rounded-lg bg-blue-700 text-gray-200">Hello! I'm an AI assistant. How can I help you?</div>
              {/* Chat message history would go here */}
            </div>
            <div className="p-4 border-t border-blue-700">
              <input type="text" placeholder="Type your message..." className="w-full p-2 rounded-lg bg-blue-800 border border-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="bg-blue-950 text-white min-h-screen font-poppins">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <CodingProfiles />
      <Blogs />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

