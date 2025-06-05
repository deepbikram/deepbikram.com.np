import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Deep",
  lastName: "Bikram Thapa Chhetri",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Entrepreneur",
  avatar: "/images/avatar.jpg",
  email: "deepbikram01@gmail.com",
  location: "Asia/Kathmandu", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Nepali"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/deepbikram",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/deepbikram/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/deepbikram",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building products people love to use.</>,  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Enotes Nepal</strong></>,
    href: "/work/building-enotes-nepal-to-become-largest-digital-learning-platform",
  },
  subline: (
    <>
      I'm Deep, a software Entrepreneur from Nepal, where I craft platform  <br /> with my own user experiences. 
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/deepbikram",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Deep is a Nepal-based software Entrepreneur with a passion to build innovative solutions. Building innovative, human-centered solutions that bridge design and technology.
 Passionate about using software to solve real-world problems and empower people.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Enotes Nepal",
        timeframe: "2023 - Present",
        role: "Founder & CEO",
        achievements: [
          <>
        Founded <strong>Enotes Nepal</strong>, a digital learning platform that has grown to <strong>100,000+ monthly active users</strong>, becoming a leading digital learning platform in Nepal.
      </>,
      <>
        Integrated <strong>AI-driven tools</strong> into Enotes Nepal’s design and development workflows, enabling the team to iterate <strong>50% faster</strong> and significantly reduce content turnaround time.
      </>,
      <>
        Built and scaled a <strong>remote-first product and lead </strong>a content growth to over 20M views in a single reel, fostering a culture of experimentation, feedback, and mission-driven growth across Nepal.
      </>,
        ],        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Enotes-Nepal.png",
            alt: "Enotes Nepal",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "OverlayAI",
        timeframe: "2025 - Present",
        role: "Founder & Lead Engineer",
        achievements: [
           <>
      Founded <strong>OverlayAI</strong>, an AI-powered productivity platform that integrates seamlessly across desktop environments, offering users intelligent support during everyday tasks—including interviews, writing, and research.
    </>,
    <>
      Developed a comprehensive <strong>design system</strong> that unified the brand across multiple touchpoints, improving design consistency by <strong>40%</strong> and accelerating development speed.
    </>,
    <>
      Engineered features to help users develop a deeper, habitual use of AI as a supportive "boundary" layer—guiding them contextually through conversations, decisions, and content creation.
    </>,        ],
        images: [],
      },
      {
        company: "AI Researcher",
        timeframe: "2025 - Present",
        role: "Co-founder & AI Research Lead",
        achievements: [
          <>
            Specialized in developing <strong>multi-LLM orchestration systems</strong> that enable different AI models to interact and collaborate, creating more comprehensive and intelligent responses.
          </>,
          <>
            Built intelligent agents capable of <strong>video analysis, web research, and blog content processing</strong> to provide contextually relevant, user-centric responses across multiple data sources.
          </>,
          <>
            Pioneered <strong>cross-modal AI interactions</strong> where large language models collaborate to watch videos, search the web, analyze content, and synthesize information in real-time for enhanced user experiences.
          </>,
          <>
            Developed proprietary algorithms for AI models to <strong>understand user intent</strong> and deliver personalized responses by combining insights from multimedia content, web searches, and written materials.
          </>,
        ],
        images: [],
      },
      {
        company: "LetsTechIT (LTI)",
        timeframe: "2022 - 2023",
role: "Chief Operating Officer (COO)",
        achievements: [
          <>
      Co-led the launch of <strong>Let’s Tech It</strong> with the team of 10 people, a platform aimed at simplifying tech education and fostering a community of young learners and creators.
    </>,
    <>
      Oversaw operations, content pipelines, and early product development efforts while collaborating with designers and educators to shape the platform vision.
    </>,
    <>
      Despite a strong initial effort, the platform faced market traction challenges. We made a strategic decision to shut down and redirect our energy toward higher-impact ventures like <strong>Enotes Nepal</strong> and <strong>OverlayAI</strong>.
    </>,
    <>
      Gained first-hand experience in product-market fit, team alignment, and the importance of timing—lessons that continue to inform my approach as a founder and builder.
    </>,        ],        images: [],
      },      
    ],
  },

  projects: {
    display: true, // set to false to hide this section
    title: "Projects I'm Working On",
    initiatives: [
      {
        name: "AI-Powered Research Assistant",
        description: (
          <>
            Building a smart research assistant that helps users gather, summarize, and analyze
            complex information in real-time—empowering students, founders, and knowledge workers to
            think and write faster using AI.
          </>
        ),
      },
      {
        name: "Mental Health Application",
        description: (
          <>
            Designing an AI companion that supports mental well-being through emotionally aware
            conversations, voice synthesis, and memory-based interaction. The app is built to replicate
            comforting voices or personalities from past experiences to provide therapeutic support.
          </>
        ),
      },
      {
        name: "Social Media App Blocker",
        description: (
          <>
            Developing a cross-platform blocker that helps users break free from addictive social media
            loops. The tool combines psychology-based nudges, habit tracking, and focused UI to promote
            digital wellness and time freedom.
          </>
        ),
      },
    ],
  },

  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "New Horizon English Boarding School",
        description: <>Studied Optional Math & Computer Science and completed SEE(Secondary level examination)</>,
      },      {
        name: "New Horizon Institute",
        description: <>Studied Physics, Chemistry, Mathematics & Computer Science and completed SLC (Secondary Level Examination)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
    {
      title: "Next.js",
      description: <>Building production-grade web apps with API routes, ISR, and full-stack logic.</>,
      images: [],
    },
    {
      title: "React + Tailwind CSS",
      description: <>Creating responsive, high-performance UIs with reusable components and utility-first styling.</>,
      images: [],
    },
    {
      title: "Node.js & Express",
      description: <>Developing scalable backends and REST APIs powering real-time functionality.</>,
      images: [],
    },
    {
      title: "Python",
      description: <>Used across AI workflows, backend logic, automation, and rapid prototyping.</>,
      images: [],
    },
    {
      title: "OpenAI & LangChain",
      description: <>Building AI assistants with memory, agents, prompt chaining, and natural language tools.</>,
      images: [],
    },
    {
      title: "Firebase & Supabase",
      description: <>Implementing auth, databases, and edge functions in full-stack applications.</>,
      images: [],
    },
    {
      title: "Vector Databases (Pinecone, Weaviate)",
      description: <>Powering semantic memory and context-aware responses in AI research tools.</>,
      images: [],
    },
    {
      title: "Text-to-Speech & Whisper",
      description: <>Creating voice-based AI experiences using TTS (e.g., ElevenLabs) and STT (Whisper).</>,
      images: [],
    },
    {
      title: "Framer Motion",
      description: <>Bringing interfaces to life with smooth, natural animations and transitions.</>,
      images: [],
    },    {
      title: "Git & GitHub",
      description: <>Version control, collaboration, and open-source contribution workflow.</>,
      images: [],
    },
  ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Breaking down big ideas in tech, philosophy, and the chaos of modern life.",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
