import React from "react";
import Project from "./Project";

const projectInfo = [
  {
    name: "Thesis on Hierarchical Clustering for Large-Scale Geospatial Graphs",
    date: "June 2023",
    link: "https://osf.io/hbpx8/",
    skills: ["Graphs", "Clustering", "Web development"],
    description:
      "Written my thesis in collaboration with GraphPolaris (final grade: 9.2/10). I investigated clustering methods for large-scale geospatial graphs to enhance readability.",
  },
  {
    name: "Reinforcement learning project",
    date: "December 2021",
    link: "https://github.com/sjoerdvink99/apml_reinforcement_learning/blob/main/Assignment_4_for_APML2022.pdf",
    skills: ["Python", "OpenAI", "Numpy"],
    description:
      "Examined various reinforcement learning algorithms used for finding a particular goal in a maze environment. These algorithms make part of the temporal difference learning paradigm that involves an agent operating in an environment with state & rewards (inputs) and actions (outputs)",
  },
  {
    name: "Airplane delay causes",
    date: "November 2021",
    link: "https://github.com/sjoerdvink99/airplane-delay-causes",
    skills: ["Python", "Classification", "Clustering", "SK-Learn"],
    description:
      "Built a dashboard which visualizes machine-learning results based on an airplane delay dataset.",
  },
  {
    name: "Topic modelling and clustering for online social-media data",
    date: "December 2021",
    link: "https://github.com/sjoerdvink99/apml_topic_mod_clus/blob/main/A3_paper.pdf",
    skills: ["Python", "Spacy", "SK-Learn"],
    description:
      "Examined algorithms for topic modelling and clustering of text documents. The studied documents are tweets about the corona pandemic regarding testing. Latent dirichlet allocation is used to perform topic modelling.",
  },
  {
    name: "Predictive process monitoring project",
    date: "November 2021",
    link: "https://github.com/sjoerdvink99/apml_pred_process_monitoring/blob/main/Assignment_2_for_APML2022.pdf",
    skills: ["Python", "SK-Learn"],
    description:
      "Examined different algorithms for predictive process monitoring (decision tree regression, kNN regression and random forest regression). The goal was to optimize process flows by predicting the remaining time someone has to stay in the hospital.",
  },
  {
    name: "Outlier detection project",
    date: "October 2021",
    link: "https://github.com/sjoerdvink99/apml_anomaly_detection/blob/main/Report_Template_for_APML2022_UU.pdf",
    skills: ["Python", "Pandas", "SK-Learn"],
    description:
      "Examined different anomaly detection algorithms which are used to classify outliers in the given data set. An attempt is made to improve the default parameter setting based on the F1-score.",
  },
  {
    name: "Mammographic data classification",
    date: "September 2021",
    link: "https://github.com/sjoerdvink99/data_analytics_mammographic/blob/main/PA1.ipynb",
    skills: ["Python", "Pandas", "SK-Learn"],
    description:
      "Used feature engineering (truncated SVD and PCA) to determine which factors influence cancer severity the most.",
  },
  {
    name: "Bank notes fraud detection",
    date: "September 2021",
    link: "https://github.com/sjoerdvink99/data_analytics_banknotes/blob/main/PA3.ipynb",
    skills: ["Python", "Pandas", "Plotly", "SK-Learn"],
    description:
      "Trained classification algorithms (KNN, Decision tree, SVM, Ensemble) to detect bank note forgery.",
  },
  {
    name: "Shopping behavior analytics",
    date: "October 2021",
    link: "https://github.com/sjoerdvink99/data_analytics_shopping_behavior/blob/main/PA2.ipynb",
    skills: ["Python", "Pandas", "SK-Learn", "Evaluation"],
    description:
      "Used different paradigms of clustering algorithms (KMeans, DBSCAN, Agglomerative clustering) to cluster online shopping data. Additionally, I did an extensive evaluation of the results using different metrics.",
  },
  {
    name: "Full text-based search engine",
    date: "June 2021",
    link: "hhttps://github.com/sjoerdvink99/python-searchengine",
    skills: ["Python", "Pandas", "SK-Learn"],
    description:
      "A Python search-engine without the use of external libraries to calculate cosinus similarities between queries and documents. The code is primarily written in Dutch, but can be used for other languages. The most important thing is that the documents that you want to search through are in a .txt file. Flask is used for the GUI.",
  },
];

export default function Portfolio() {
  return (
    <div className="flex-1 py-4 px-0 md:py-0 md:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {projectInfo.map((project) => (
          <Project
            key={project.name}
            title={project.name}
            date={project.date}
            link={project.link}
            skills={project.skills}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
