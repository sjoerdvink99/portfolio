import graphpolaris from "./assets/projects/graphpolaris.jpeg";
import bsc_thesis from "./assets/projects/bsc_thesis.jpeg";
import quantum from "./assets/projects/quantum.jpeg";
import rl_project from "./assets/projects/rl_project.jpeg";
import airplane_delay from "./assets/projects/airplane_delay.jpeg";
import search_engine from "./assets/projects/search_engine.jpeg";
import topic_modelling from "./assets/projects/topic_modelling.jpeg";
import outlier_detection from "./assets/projects/outlier_detection.jpeg";
import pp_monitoring from "./assets/projects/pp_monitoring.jpeg";

export const projectInfo = [
  {
    name: "GraphPolaris: Visual Analytics Platform for Graph Data",
    date: "Present",
    link: "https://graphpolaris.com",
    skills: ["Graph Data", "Web Development", "Typescript"],
    description:
      "Currently working on the future of graph analytics at GraphPolaris. Started out as a thesis intern, but sticked around to work as a software engineer. I do a bit of everything, both front-end and back-end.",
    imagePath: graphpolaris,
  },
  {
    name: "Quantum Middleware Benchmarking",
    date: "Fall 2023",
    link: "https://github.com/EC-labs",
    skills: ["Quantum", "Machine-Learning", "Covalent", "Python"],
    description:
      "Executed a benchmark analysis on quantum middleware for machine learning, emphasizing speed, CPU, and memory efficiency across multiple workflows.",
    imagePath: quantum,
  },
  {
    name: "Hierarchical Clustering for Large-Scale Geospatial Graphs",
    date: "June 2023",
    link: "https://osf.io/hbpx8/",
    skills: ["Graphs", "Clustering", "Web development"],
    description:
      "Wrote my bachelor thesis in collaboration with GraphPolaris (final grade: 9.2/10). I investigated clustering methods for large-scale geospatial graphs to enhance readability.",
    imagePath: bsc_thesis,
  },
  {
    name: "Reinforcement Learning Project",
    date: "December 2021",
    link: "https://github.com/sjoerdvink99/apml_reinforcement_learning/blob/main/Assignment_4_for_APML2022.pdf",
    skills: ["Python", "OpenAI", "Numpy"],
    description:
      "Explored diverse reinforcement learning algorithms designed to achieve specific goals within maze environments. These algorithms are integral to the temporal difference learning paradigm, in which an agent interacts with an environment through states and rewards as inputs and actions as outputs.",
    imagePath: rl_project,
  },
  {
    name: "Airplane Delay Causes",
    date: "November 2021",
    link: "https://github.com/sjoerdvink99/airplane-delay-causes",
    skills: ["Python", "Classification", "Clustering", "SK-Learn", "Streamlit"],
    description:
      "Created a dashboard to visualize machine-learning results from an airplane delay dataset.",
    imagePath: airplane_delay,
  },
  {
    name: "Topic Modelling and Clustering for Online Social-Media Data",
    date: "December 2021",
    link: "https://github.com/sjoerdvink99/apml_topic_mod_clus/blob/main/A3_paper.pdf",
    skills: ["Python", "Spacy", "SK-Learn"],
    description:
      "Explored algorithms for text document topic modeling and clustering, specifically analyzing tweets related to the COVID-19 pandemic and testing, with the application of Latent Dirichlet Allocation for topic modeling.",
    imagePath: topic_modelling,
  },
  {
    name: "Predictive Process Monitoring Project",
    date: "November 2021",
    link: "https://github.com/sjoerdvink99/apml_pred_process_monitoring/blob/main/Assignment_2_for_APML2022.pdf",
    skills: ["Python", "SK-Learn"],
    description:
      "Examined different algorithms for predictive process monitoring (decision tree regression, kNN regression and random forest regression). The goal was to optimize process flows by predicting hospitalization time.",
    imagePath: pp_monitoring,
  },
  {
    name: "Outlier Detection",
    date: "October 2021",
    link: "https://github.com/sjoerdvink99/apml_anomaly_detection/blob/main/Report_Template_for_APML2022_UU.pdf",
    skills: ["Python", "Pandas", "SK-Learn"],
    description:
      "Explored various anomaly detection algorithms for classifying outliers in the provided dataset and sought to enhance default parameter settings through F1-score optimization.",
    imagePath: outlier_detection,
  },
  {
    name: "Full Text-Based Search Engine",
    date: "June 2021",
    link: "https://github.com/sjoerdvink99/python-searchengine",
    skills: ["Python", "Pandas", "SK-Learn", "Flask"],
    description:
      "Built a Python search-engine without the use of external libraries to calculate cosinus similarities between queries and documents.",
    imagePath: search_engine,
  },
];
