import { Publication } from "@/lib/types";

export const publications: Publication[] = [
  {
    slug: "graph-visualization-design-guidelines-learnable-predicates",
    title: "Graph Visualization Design Guidelines as Learnable Predicates",
    authors:
      "Sjoerd Vink, Brian Montambault, Mingwei Li, Remco Chang, and Michael Behrisch",
    venue: "GRIVAPP 2026",
    year: 2026,
    paperLink:
      "https://www.projects.science.uu.nl/ics-vig/uploads/Bibtex/Vink2026.pdf",
    codeLink: "https://github.com/sjoerdvink99/vigor",
    selected: true,
    bestPaperAward: true,
    abstract: "Graphs are widely used to represent complex, interconnected data across domains, yet choosing an effective visualization remains difficult because existing design knowledge is fragmented and inconsistent. This lack of a unified foundation prevents researchers from integrating findings into a cumulative body of knowledge, leaving valuable results isolated. It also hinders designers and practitioners, who cannot readily translate such findings into actionable strategies for their own goals and contexts. We propose a predicate-based representation that formalizes visualization guidelines as bounded conditions over descriptive graph statistics. Predicates directly mirror the qualitative structure of design guidelines. For example, a rule might specify that if graph density is low, a node-link diagram is appropriate, whereas if density is high, an adjacency matrix should be used. Unlike static handcrafted rules, they can also be learned, optimized, and adapted as new findings or usage contexts emerge. As a result, fragmented knowledge is consolidated into a formal and extensible foundation for graph visualization design and recommendation. We evaluate this approach by testing its ability to (i) recover expert rules and (ii) adapt to user-specific preferences while generalizing to unseen graphs. The results show that the learned predicates closely reproduce expert-derived guidelines, accommodate diverse preference patterns, and achieve strong performance on held-out data, demonstrating a promising path toward more systematic and cumulative graph visualization design knowledge.",
    bibtex: `@inproceedings{Vink2026,
  author    = {Vink, Sjoerd and Montambault, Brian and Li, Mingwei and Chang, Remco and Behrisch, Michael},
  title     = {Graph Visualization Design Guidelines as Learnable Predicates},
  booktitle = {Proceedings of GRIVAPP 2026},
  year      = {2026},
  address   = {Marbella, Spain},
}`,
  },
  {
    slug: "strategic-opportunity-visual-analytics-generative-ai",
    title:
      "Position Paper: The Strategic Opportunity for Visual Analytics in the Age of Generative AI",
    authors:
      "Sjoerd Vink, Byungmoo Kim, Camelia Brumar, Manling Yang, Kristi Potter, and Remco Chang",
    venue: "EuroVis 2026 (EuroVA Workshop)",
    year: 2026,
    paperLink: "#",
    selected: true,
    bestPaperAward: false,
    abstract: "AI is rapidly transforming knowledge work, raising epistemic questions about the future role of many established research areas. For the Visual Analytics (VA) community, these developments raise the same question: how do advances in AI affect the role and direction of the field? In this position paper, we argue that VA is particularly well positioned to respond this. First, we examine the implications of AI for system-oriented VA research. Recent advances in code generation by AI reduce the cost of software implementation, shifting attention toward problem formulation and evaluation. Rather than undermining the role of systems in VA research, this shift highlights that VA systems often serve to instantiate conceptual ideas or to support the evaluation of analytical methods. As implementation becomes easier, greater emphasis is placed on identifying meaningful analytical problems and evaluating whether proposed systems support human tasks. Second, we revisit the broader VA research agenda and show that understanding analytical problems and assessing how computational tools support human reasoning have always been central concerns of the field. Additionally, while the integration of AI introduces new opportunities and challenges, it remains aligned with VA’s core objective of supporting humans. We conclude that, rather than disrupting VA, advances in AI reinforce the field’s human-centered foundations and align the broader landscape of software development with the challenges VA has long studied.",
    bibtex: `@inproceedings{Vink2026VA,
  author    = {Vink, Sjoerd and Kim, Byungmoo and Brumar, Camelia and Yang, Manling and Potter, Kristi and Chang, Remco},
  title     = {Position Paper: The Strategic Opportunity for Visual Analytics in the Age of Generative AI},
  booktitle = {EuroVA Workshop at EuroVis 2026},
  year      = {2026},
}`,
  },
  {
    slug: "nodesubstrates-bridging-node-link-diagrams-dr-based-semantic-substrates",
    title:
      "NodeSubstrates: Bridging Node-Link Diagrams with DR-Based Semantic Substrates",
    authors: "Sjoerd Vink, Leonardo Christino, and Michael Behrisch",
    venue: "EuroVis 2026 (GDxDR Workshop)",
    year: 2026,
    paperLink: "#",
    codeLink: "https://github.com/christinoleo/nodeSubstratesImpl",
    selected: true,
    bestPaperAward: false,
    abstract: "Multivariate graph visualization faces a fundamental tension between representing network topology and showing attribute-driven structure. Existing techniques force analysts to choose between these perspectives, hindering the inspection of attribute-defined groupings within their structural context. Node-link diagrams convey connectivity but obscure attribute relationships, while dimensionality reduction (DR) projections expose attribute similarity at the cost of explicit edge information. We present NodeSubstrates, a hybrid visualization technique that integrates node-link diagrams with DR-based semantic substrates. In contrast to prior hybrid approaches such as NodeTrix, which replace subgraphs with topology-focused matrices, NodeSubstrates selectively repositions nodes using DR on their attributes, revealing clusters and outliers not visible in topological layouts. Substrate regions can be interactively created and dissolved. We demonstrate NodeSubstrates on a network of commercially available compounds, in which the hybrid representation supports drug design tasks spanning chemical attributes and graph structure. NodeSubstrates bridges graph drawing and dimensionality reduction by introducing a concrete hybrid technique for the emerging GD×DR research space.",
    bibtex: `@inproceedings{Vink2026NS,
  author    = {Vink, Sjoerd and Christino, Leonardo and Behrisch, Michael},
  title     = {NodeSubstrates: Bridging Node-Link Diagrams with DR-Based Semantic Substrates},
  booktitle = {GDxDR Workshop at EuroVis 2026},
  year      = {2026},
}`,
  },
];
