
import { SkillCategory, Experience, Project, EducationItem, Hobby, Language } from './types';
import GamingIcon from './components/icons/GamingIcon';
import PlaneIcon from './components/icons/PlaneIcon';
import TelescopeIcon from './components/icons/TelescopeIcon';
import BookIcon from './components/icons/BookIcon';


export const NAME = "Madhusudan R S";
export const TITLE = "Senior Data Engineer";
export const EMAIL = "m4dhusudanr5@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/madhusudan-r-s-b0b02a98";
export const GITHUB_URL = "https://github.com/madhusudancr7";
export const TWITTER_URL = "https://x.com/m4ddy71?s=21";
export const MEDIUM_URL = "https://medium.com/@johnmadhusudan7";
export const INSTAGRAM_URL = "https://www.instagram.com/_m.4.7_?igsh=MXJ4YXVsemFrcW54Mw%3D%3D&utm_source=qr";
export const PHONE = "+91 8867478017";
export const LOCATION = "Belagavi, Karnataka";
export const LOCATION_URL = "https://www.google.com/maps/dir/Belagavi,+Karnataka/Belagavi,+Karnataka/@15.8667918,74.4672411,13z/data=!4m13!4m12!1m5!1m1!1s0x3bbf669f5095362f:0x7e34b31edcdefb5f!2m2!1d74.5129177!2d15.8608974!1m5!1m1!1s0x3bbf669f5095362f:0x7e34b31edcdefb5f!2m2!1d74.5129177!2d15.8608974?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D";
export const RESUME_URL = "resume.html"; // Placeholder for resume link


export const SUMMARY = "A results-oriented Senior Data Engineer with 4 years of experience architecting and delivering end-to-end data solutions. Proficient in designing scalable data pipelines and reusable, metadata-driven ETL frameworks using PySpark and Apache Airflow in cloud-native environments. Adept at performance tuning, CI/CD automation, and collaborating with cross-functional teams to transform complex business problems into high-performance data systems that drive analytics and innovation.";

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 95 }, { name: "SQL", level: 95 }, { name: "Scala", level: 80 }, 
      { name: "Java", level: 75 }, { name: "Bash/Shell", level: 80 }
    ],
  },
  {
    title: "Data Processing & Orchestration",
    skills: [
      { name: "Apache Spark", level: 95 }, { name: "PySpark", level: 95 }, { name: "Spark SQL", level: 90 },
      { name: "Apache Airflow", level: 85 }, { name: "Apache Kafka", level: 85 },
    ],
  },
  {
    title: "Databases & Warehousing",
    skills: [
      { name: "SingleStoreDB", level: 80 }, { name: "Snowflake", level: 80 }, { name: "PostgreSQL", level: 85 },
      { name: "MS SQL Server", level: 80 },
    ],
  },
  {
    title: "Cloud & Platforms",
    skills: [
      { name: "IOMETE", level: 75 }, { name: "Databricks", level: 80 }, { name: "AWS", level: 75 },
      { name: "Azure", level: 70 }, { name: "Snowflake", level: 80 }, { name: "Cloudera", level: 70 },
    ],
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "GitLab CI", level: 85 }, { name: "Docker", level: 85 }, { name: "Kubernetes", level: 80 },
      { name: "Git", level: 90 }, { name: "YAML", level: 85 },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "ETL Framework Design", level: 95 }, { name: "Data Modelling", level: 90 },
      { name: "Spark Performance Tuning", level: 90 },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Accenture (for Dell Client)",
    role: "Senior Data Engineer",
    period: "Nov 2024 - Present",
    description: "Designed and spearheaded the development of a generic ETL Workflow to process and integrate high-volume supply chain data from disparate enterprise sources. This scalable and reusable framework automated the entire data lifecycle—from ingestion and transformation to loading—into a centralized data warehouse, enabling critical analytics and business intelligence functions.",
    points: [
      "Developed a reusable framework with external JSON configurations, standardizing ingestion patterns and reducing the time-to-market for new pipelines by 40%.",
      "Implemented incremental data extraction with SHA256 hashing and dynamic partitioning, achieving a 300% increase in data processing throughput on multi-terabyte loads.",
      "Re-architected data transformation using the native SingleStore Spark Connector, enabling parallelized data transfers and slashing average job execution time from 2 hours to 9 minutes.",
      "Analyzed Spark query plans to restructure complex SQL and refactor join strategies, resulting in a 60% reduction in data shuffled across the network for datasets exceeding 50 GB.",
      "Integrated a Kafka producer to publish schema-compliant events, reducing data latency for downstream consumers from over 24 hours to under 15 minutes.",
      "Leveraged a dynamic GitLab CI/CD framework to containerize the application and manage automated deployments, reducing manual deployment efforts by 95%."
    ],
  },
  {
    company: "Infosys (for Intel Client)",
    role: "Data Engineer",
    period: "Feb 2022 - Nov 2024",
    description: "Implemented the critical data preparation pipeline and feature engineering lifecycle for an inventory demand forecasting initiative, transforming raw, time-series data into a highly predictive, model-ready dataset.",
    points: [
      "Authored an end-to-end data preparation workflow using Pandas, including rigorous data validation and cleansing to handle missing values, outliers, and anomalies.",
      "Built over 15 new predictive features (e.g., lag features, rolling time-window aggregations), which were crucial for capturing complex sales patterns.",
      "Automated the feature generation process, reducing dataset creation time from over 8 hours to under 30 minutes and contributing to a 15% improvement in forecast accuracy.",
      "Acted as the primary data engineering partner for the Data Science team, ensuring seamless integration of datasets for model training in a Spark MLlib framework.",
      "Collaborated with the data platform team to integrate model predictions back into a central data warehouse for enterprise-wide access.",
      "Constructed interactive Power BI dashboards to visualize inventory levels, sales trends, and forecasts, providing actionable insights to store managers."
    ],
  },
  {
    company: "Infosys (Inventory Project)",
    role: "Data Engineer | Real-Time Inventory Management",
    period: "Feb 2022 - Nov 2024",
    description: "Developed a real-time inventory management system that tracks stock levels across multiple retail stores and predicts future inventory needs based on sales trends and historical data. This system helps optimize stock levels, reducing both stockouts and overstock situations.",
    points: [
      "Utilized PySpark within Databricks to build and optimize scalable data pipelines for real-time processing and analysis.",
      "Set up a Kafka pipeline to stream sales transactions and inventory updates from multiple retail locations into Databricks.",
      "Leveraged PySpark (Spark Streaming) to ingest, process, and transform incoming data in real-time, storing it in Delta Lake for durability and fast querying.",
      "Implemented predictive models using Spark MLlib to forecast future inventory needs based on historical sales patterns, seasonal trends, and promotional activities.",
      "Created dashboards in Power BI to visualize inventory levels, sales trends, and stock predictions, providing actionable insights to store managers and supply chain teams."
    ]
  },
  {
    company: "Infosys (Supply Chain Analyst)",
    role: "Data Analyst | INTEL client (SUPPLY CHAIN DOMAIN)",
    period: "Feb 2022 - Nov 2024",
    description: "Worked on a Tier 1 Project for INTEL, managing two crucial applications for Logistics/Shipment and Return/Credit within the supply chain domain.",
    points: [
        "Managed a logistics application tracking worldwide Intel product shipments to internal/external customers and factories.",
        "Maintained records for returned products, analyzing data to issue credits and understand return logic.",
        "Used SSMS to design complex SQL queries to manually update tables affected by network glitches, ensuring data integrity.",
        "Monitored batch jobs responsible for executing stored procedures in SSMS using a Job Monitoring Tool.",
        "Altered existing stored procedures to minimize query execution time and improve report generation performance."
    ]
  }
];


export const PROJECTS: Project[] = [
  {
    title: "Diabetic Retinopathy Detection",
    description: "A CNN-based web application to detect Diabetic Retinopathy from fundus images with 94% accuracy.",
    points: [
      "Developed a deep learning model using CNN architectures (VGG16) trained on 35K+ Kaggle retinal images, achieving 94% classification accuracy.",
      "Engineered image preprocessing and data augmentation pipelines with OpenCV and NumPy to enhance input quality and improve model generalization.",
      "Built and deployed a user-friendly web interface with Django, enabling real-time image uploads and immediate inference results.",
      "Integrated TensorFlow models for a seamless end-to-end prediction workflow, from image upload to result visualization."
    ],
    technologies: ["TensorFlow", "Django", "OpenCV", "NumPy", "VGG16", "MLOps"],
    category: "Deep Learning",
    links: {
      github: "https://github.com", // Placeholder
      live: "#", // Placeholder
    },
  },
  {
    title: "Restaurant Data Analysis",
    description: "Conducted data analysis on a restaurant dataset using MySQL and Python to extract actionable business insights.",
    points: [
        "Performed comprehensive data cleaning and transformation on a sample restaurant dataset using MySQL to ensure data quality for analysis.",
        "Applied advanced SQL aggregate and window functions to calculate key business metrics like total revenue, average ratings, and top cuisines.",
        "Utilized Python with Pandas to programmatically validate SQL query results and perform exploratory data analysis."
    ],
    technologies: ["MySQL", "Python", "Pandas", "Data Analytics"],
    category: "Data Analytics",
    links: {
      github: "https://github.com", // Placeholder
    },
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Visvesvaraya Technological University",
    details: "CGPA: 7.1",
  },
  {
    degree: "Pre-University (Science Stream)",
    institution: "ALVAS INSTITUTION",
    details: "Percentage: 89%",
  },
  {
    degree: "10th Standard",
    institution: "GES School",
    details: "Percentage: 83%",
  },
];

export const LANGUAGES_KNOWN: Language[] = [
    { name: "English", native: "English" },
    { name: "Kannada", native: "ಕನ್ನಡ" },
    { name: "Hindi", native: "हिन्दी" },
];

export const HOBBIES: Hobby[] = [
    { 
        name: "Gaming", 
        icon: GamingIcon,
    },
    { 
        name: "Travelling", 
        icon: PlaneIcon,
    },
    { 
        name: "Astrophile", 
        icon: TelescopeIcon,
    },
    { 
        name: "Learning about History", 
        icon: BookIcon,
    },
];
