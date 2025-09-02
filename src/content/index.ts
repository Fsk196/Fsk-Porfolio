export const PROJECTS = [
  {
    id: "dealership-app",
    title: "Dealership Management App",
    description:
      "A Mobile Application for managing vehicle inventory, sales, customer and Employee interactions. A mobile app with Expo React Native with AI Chat bot integration for assisting users with vehicle information and recommendations.",
    image: [
      "/dealership-home.jpg",
      "/dealership-emp.jpg",
      "/dealership-emp-detail.jpg",
      "/dealership-sales.jpg",
      "/dealership-profile.jpg",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Nativewind",
      "Reanimated",
      "React Native Chart Kit",
      "Redux",
    ],
    githubUrl: "https://github.com/Fsk196/dealerpaasmob",
    privateGit: true,
    liveUrl: "NONE",
    featured: true,
    company: "Dealership Fsk.",
    period: "2025",
    isMobile: true,
  },
  {
    id: "fittrack-app",
    title: "Fit Track",
    description:
      "A fitness tracking application built with React Native Expo and Node.js. NeonDB (POSTGRESQL) for Database. User can track their workouts, monitor progress, and set fitness goals.  Add friends. Compete with others. and participate in challenges.",
    image: [
      "/fittrack-home.jpg",
      "/fittrack-exercise.jpg",
      "/fittrack-exer-detail.jpg",
      "/fittrack-freinds.jpg",
      "/fittrack-profile.jpg",
      "/fittrack-add-friend.jpg",
      "/fittrack-acheivement.jpg",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Nativewind",
      "Reanimated",
      "React Native Chart Kit",
      "Redux",
    ],
    githubUrl: "https://github.com/Fsk196/fittrack",
    privateGit: true,
    liveUrl: "NONE",
    featured: true,
    company: "Dealership Fsk.",
    period: "2025",
    isMobile: true,
  },
  {
    id: "notelense-app",
    title: "NoteLense",
    description:
      "In Notelense, when a user uploads a PDF, the file is first parsed and its text is extracted. The extracted text is then chunked into smaller, meaningful sections so context can be preserved. Each chunk is passed through an embedding model  Gemini embeddings to convert the text into numerical vectors. These vectors, along with metadata (such as page number, document ID, and session UUID), are stored in Pinecone, which acts as our vector database. During a chat, when the user asks a question, I embed the query, perform a semantic similarity search in Pinecone to fetch the most relevant chunks, and then feed those chunks along with the query into the LLM to generate a contextual, natural language response. This flow makes Notelense work like a personal research assistant, retrieving accurate information from PDFs on demand.",
    image: ["/notelense-chat.png"],
    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "React Markdown",
      "zustand",
      "Razorpay",
      "Multer",
      "ExpressJS",
      "JWT",
      "Appwrite",
      "PostgreSQL",
      "Pinecone",
      "Langchain",
      "Tessaract JS",
    ],
    githubUrl: "https://github.com/Fsk196/noteLense-Frontend",
    privateGit: true,
    liveUrl: "https://notelense.netlify.app/",
    featured: true,
    company: "NoteLense Fsk.",
    period: "2025",
    isMobile: false,
  },
  {
    id: "midnight-musing",
    title: "Midnight Musing",
    description:
      "A Web app for user to post their midnight thoughts. While also providing a platform for others to share their reflections. Creating, Updating and Deleting posts. Also user can like, share, comments and save the favorite posts.",
    image: ["/midnight-musing.png"],
    technologies: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "ShadCN UI",
      "React Hook Form",
      "Radix UI",
      "ExpressJS",
      "Mongo DB",
      "Mongoose",
      "JWT",
    ],
    githubUrl: "https://github.com/Fsk196/BlogAPP-midnight-musing",
    liveUrl: "https://blog-app-black-nine.vercel.app/",
    featured: true,
    company: "MidnightMusing Fsk.",
    period: "2025",
    isMobile: false,
  },
  //   {
  //     id: "fit-track-app",
  //     title: "Fit Track",
  //     description:
  //       "A fitness tracking application built with React Native Expo and Node.js. NeonDB (POSTGRESQL) for Database.",
  //     image: "/canvas.png",
  //     technologies: [
  //       "React Native",
  //       "Nativewind",
  //       "Expo",
  //       "Node.js",
  //       "NeonDB",
  //       "PostgreSQL",
  //       "ExpressJS",
  //     ],
  //     githubUrl: "https://github.com/Fsk196/fittrack",
  //     liveUrl: "NONE",
  //     featured: true,
  //     company: "FitTrack Fsk.",
  //     period: "2025",
  //   },
  {
    id: "wiki-reader",
    title: "Wiki Reader",
    description:
      "A Web application for reading and annotating Wikipedia articles In more User Friendly UI. with Dark and Light mode support also user can adjust the font sizes, Font Family and even line heights. with a side that helps users to browse those articles topic wise easily.",
    image: ["/wiki-reader.png"],
    technologies: ["React", "TailwindCSS", "TypeScript", "Vite", "ShadCN UI"],
    githubUrl: "https://github.com/Fsk196/Wiki-Reader",
    liveUrl: "https://wikireader.netlify.app/",
    featured: true,
    company: "WikiReader Fsk.",
    period: "2025",
  },
];

export const PROFILEDATA = {
  name: "Faisal Shaikh",
  title: "Full Stack Developer",
  bio: "I'm Faisal, a creative Full Stack Developer with a passion for building seamless user experiences. Lately working on some exciting projects that leverage the latest technologies.",
  avatar: "/faisal-portfolio.jpg",
};

export const FrontendWebStack = [
  {
    category: "React",
    technologies: ["React", "Next.js", "React Native"],
  },
  {
    category: "Next JS",
    technologies: ["Next.js", "React", "TypeScript"],
  },
  {
    category: "JavaScript",
    technologies: ["JavaScript", "Node.js"],
  },
  {
    category: "TypeScript",
    technologies: ["TypeScript", "JavaScript", "Node.js"],
  },
  {
    category: "Tailwind",
    technologies: ["Tailwind CSS", "CSS3", "SCSS"],
  },
  {
    category: "ShadCN UI",
    technologies: ["ShadCN UI", "React", "Tailwind CSS"],
  },
];

export const FrontendNativeStack = [
  {
    category: "React Native",
    technologies: ["React Native", "TypeScript", "JavaScript"],
  },
  {
    category: "Expo",
    technologies: ["Expo", "React Native", "TypeScript"],
  },
  {
    category: "React Navigation",
    technologies: ["React Navigation", "React Native", "TypeScript"],
  },
  {
    category: "Expo Router",
    technologies: ["Expo Router", "React Native", "TypeScript"],
  },
  {
    category: "NativeWind",
    technologies: ["Nativewind", "React Native", "TypeScript"],
  },
];

export const BackendStack = [
  {
    category: "Node.js",
    technologies: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Express JS",
    technologies: ["ExpressJS", "Node.js", "MongoDB"],
  },
  {
    category: "MongoDB",
    technologies: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "PostgreSQL",
    technologies: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "MySQL",
    technologies: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Authentication",
    technologies: ["JWT", "OAuth", "Passport.js"],
  },
  {
    category: "API",
    technologies: ["REST", "GraphQL", "Apollo"],
  },
  {
    category: "Python",
    technologies: ["Flask", "Django", "FastAPI"],
  },
  {
    category: "FastAPI",
    technologies: ["FastAPI", "Python", "Pydantic"],
  },
];

export const AIToolStack = [
  {
    category: "LangChain",
    technologies: ["LangChain", "Python", "Machine Learning"],
  },
  {
    category: "Pinecone",
    technologies: ["Pinecone", "Vector Databases", "Machine Learning"],
  },
  {
    category: "MongoDB Atlas VectorDB",
    technologies: ["MongoDB Atlas", "Vector Databases", "Machine Learning"],
  },
  {
    category: "OpenAI",
    technologies: ["OpenAI", "ChatGPT", "Machine Learning"],
  },
  {
    category: "HuggingFace",
    technologies: ["Hugging Face", "Transformers", "Machine Learning"],
  },
  {
    category: "Google Gemini",
    technologies: ["Google Gemini", "AI Platform", "Machine Learning"],
  },
  {
    category: "LangSmith",
    technologies: ["LangSmith", "AI", "Machine Learning"],
  },
];

export const OtherStack = [
  {
    category: "Appwrite",
    technologies: ["Appwrite", "Backend", "Database"],
  },
  {
    category: "Firebase",
    technologies: ["Firebase", "Backend", "Database"],
  },
  {
    category: "Supabase",
    technologies: ["Supabase", "Backend", "Database"],
  },
  {
    category: "Stripe Integration",
    technologies: ["Stripe", "Payment Processing", "API"],
  },
];

export const ToolStack = [
  {
    category: "Figma",
    technologies: ["Figma", "Adobe XD", "Sketch"],
  },
  {
    category: "VS Code",
    technologies: ["VS Code", "WebStorm", "Vim"],
  },
  {
    category: "GitHub",
    technologies: ["GitHub", "GitLab", "Bitbucket"],
  },
  {
    category: "Vercel",
    technologies: ["Vercel", "Netlify", "Railway"],
  },
  {
    category: "Notion",
    technologies: ["Notion", "Obsidian", "Roam"],
  },
  {
    category: "Chrome/Arc Browser",
    technologies: ["Arc", "Chrome", "Safari"],
  },
  {
    category: "GitHub Copilot",
    technologies: ["GitHub Copilot", "AI", "Claude"],
  },
  {
    category: "Git",
    technologies: ["Git", "GitHub", "Version Control"],
  },
];
