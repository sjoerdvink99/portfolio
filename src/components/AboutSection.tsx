export default function AboutSection() {
  return (
    <section id="about" className="py-10 border-b-2">
      <p>
        Hi! I&apos;m a PhD candidate in Computer Science at{" "}
        <a
          className="underline"
          href="https://www.uu.nl/en/"
          target="_blank"
          rel="noreferrer"
        >
          Utrecht University
        </a>
        , co-advised by{" "}
        <a
          className="underline"
          href="https://michael.behrisch.info/"
          target="_blank"
          rel="noreferrer"
        >
          Michael Behrisch
        </a>{" "}
        and{" "}
        <a
          className="underline"
          href="https://www.cs.tufts.edu/~remco/"
          target="_blank"
          rel="noreferrer"
        >
          Remco Chang
        </a>
        . I&apos;m affiliated with the{" "}
        <a
          className="underline"
          href="https://vig.science.uu.nl/"
          target="_blank"
          rel="noreferrer"
        >
          Visualization and Graphics Group
        </a>{" "}
        at Utrecht, and the{" "}
        <a
          className="underline"
          href="https://valt.cs.tufts.edu/"
          target="_blank"
          rel="noreferrer"
        >
          Visual Analytics Lab
        </a>{" "}
        at{" "}
        <a
          className="underline"
          href="https://www.tufts.edu/"
          target="_blank"
          rel="noreferrer"
        >
          Tufts University
        </a>
        .
      </p>

      <p className="mt-4">
        I study how humans communicate intent to computational systems. Modern
        interfaces require users to translate structured intent into
        unstructured inputs such as text, clicks, or gestures. This makes
        systems difficult to control and leads to unpredictable behavior,
        especially in AI systems. My work focuses on making intent explicit by
        designing representations that capture goals, constraints, and
        transformations in a structured form that systems can interpret and
        execute.
      </p>
      <p className="mt-4">
        My research combines formal models and system building. I have shown
        that interaction has both structure and meaning by modeling it as a
        language and as a set of semantic predicates. Building on this
        foundation, I develop representations of intent that enable more
        reliable and controllable interaction across domains such as AI and data
        analysis. The goal is to move from interfaces that require users to
        guess how systems behave to systems that can directly understand and act
        on human intent.
      </p>
    </section>
  );
}
