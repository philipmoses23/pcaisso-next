"use client";
import { Splitter, SplitterPanel } from "primereact/splitter";
import NoSsr from "../components/NoSSR";
import InputPanel from "./input-panel/input-panel";
import Results from "./results";
import Link from "next/link";
import styles from "./page.module.scss";
import { useState } from "react"; 

function Intro() {
  return (
    <div className={styles["intro"]}>
      <h1 className="animated bounceInUp animate-delay-1s">
        Pc<span>ai</span>sso
      </h1>
      <h2>AI Art + Code</h2>
      <div className="cover-pages">
        <div className="cover-3 cover"></div>
        <div className="cover-1 cover"></div>
        <div className="cover-2 cover"></div>
      </div>
      <p className="footer animated bounceInUp animate-delay-2s">
        Made with 💖 by the{" "}
        <Link href="/draw/contributions">students and friends</Link> of{" "}
        <Link target="_blank" href="https://gct.ac.in/">
          {" "}
          GCT, Coimbatore
        </Link>
      </p>
    </div>
  );
}

// spinner attribution: <a href="https://www.svgbackgrounds.com/elements/animated-svg-preloaders/">Animated SVG Preloaders by SVGBackgrounds.com</a>
function Loading() {
  let facts = [
    {
      fact: "AI-Generated Art",
      description:
        "In 2018, a portrait created by an AI, called 'Portrait of Edmond de Belamy,' was sold at Christie’s auction for $432,500, far exceeding its initial estimate of $7,000-$10,000.",
    },
    {
      fact: "DeepDream",
      description:
        "Google's DeepDream uses neural networks to find and enhance patterns in images, creating dream-like, surreal artworks. It was originally designed to help understand and visualize what neural networks are learning.",
    },
    {
      fact: "Algorithmic Art",
      description:
        "Algorithmic art, created through algorithms and code, dates back to the 1960s. One of the pioneers, Vera Molnár, used computer programs to create abstract geometric art.",
    },
    {
      fact: "AI in Music Composition",
      description:
        "AI has been used to compose music. A famous example is AIVA (Artificial Intelligence Virtual Artist), which has composed music for soundtracks and advertisements.",
    },
    {
      fact: "Processing Language",
      description:
        "Processing is a popular open-source graphical library and integrated development environment (IDE) built for the electronic arts, new media art, and visual design communities.",
    },
    {
      fact: "GANs in Art",
      description:
        "Generative Adversarial Networks (GANs) can create realistic images from random noise. Artists like Robbie Barrat use GANs to create unique artworks by training them on datasets of classical paintings.",
    },
    {
      fact: "Doodle Recognition",
      description:
        "Google's Quick, Draw! is a game where an AI attempts to guess what you are drawing. The game uses a neural network trained on millions of doodles.",
    },
    {
      fact: "Neural Style Transfer",
      description:
        "This AI technique allows users to apply the artistic style of one image to the content of another. For example, you can make a photo of your cat look like it was painted by Van Gogh.",
    },
    {
      fact: "Code as Art",
      description:
        "Some artists use code itself as the art medium. The code, when executed, generates visual pieces that change over time or react to user interaction, blurring the lines between static and interactive art.",
    },
    {
      fact: "AI in Animation",
      description:
        "AI is increasingly being used in animation to streamline the process. Tools like Autodesk's AI-powered animation software help animators by automating repetitive tasks, allowing them to focus more on creativity.",
    },
    {
      fact: "AI in Restoration",
      description:
        "AI is being used to restore damaged artworks. By analyzing patterns and styles, AI can fill in missing parts of paintings or predict how an artwork originally looked.",
    },
    {
      fact: "Virtual Artists",
      description:
        "AI can create virtual artists. For example, 'Lil Miquela' is a virtual influencer and music artist, created using AI and CGI, who has millions of followers on social media.",
    },
    {
      fact: "Fractal Art",
      description:
        "Fractal art is created using mathematical formulas. These intricate and infinitely complex patterns can be generated by algorithms and are a popular form of digital art.",
    },
    {
      fact: "AI-Powered Photo Colorization",
      description:
        "AI can automatically colorize black and white photos. By learning from a vast dataset of color images, AI can predict and apply realistic colors to historical photos.",
    },
    {
      fact: "Algorithmic Music",
      description:
        "In the 1950s, Lejaren Hiller and Leonard Isaacson created the Illiac Suite, the first piece of music composed by an electronic computer.",
    },
    {
      fact: "AI in Film Editing",
      description:
        "AI is being used in film editing to analyze footage and suggest the best takes, organize scenes, and even create rough cuts, significantly speeding up the editing process.",
    },
    {
      fact: "Interactive Art Installations",
      description:
        "AI and sensors are used in interactive art installations to create dynamic and responsive experiences for viewers, where the artwork changes based on audience interaction.",
    },
    {
      fact: "AI in Game Design",
      description:
        "AI is used to create procedural content in video games, such as levels, characters, and quests, allowing for more diverse and expansive game worlds.",
    },
    {
      fact: "Art Through Data Visualization",
      description:
        "Artists use data visualization techniques to turn complex data sets into visually appealing and informative artworks, blending science and art.",
    },
    {
      fact: "AI Poetry",
      description:
        "AI can generate poetry by learning from a large corpus of poems. Projects like OpenAI's GPT-3 have demonstrated the ability to write creative and sometimes profound poetry.",
    },
  ];

  let n = Math.floor(Math.random() * facts.length);

  return (
    <div className={styles["loading"]}>
      <h3 className="generating">Generating AI Art + Code...</h3>
      <div className="spinner"></div>
      <h3>{facts[n].fact}</h3>
      <p>{facts[n].description}</p>
    </div>
  );
}

export default function HomePage() {
  const [diagram, setDiagram] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [timetaken, setTimeTaken] = useState(0);
  const [prompt, setPrompt] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [displayState, setDisplayState] = useState<string>("intro");

  async function onSubmit(payload: any) {
    const fetchData = async () => {
      try {
        setDisplayState("loading");
        console.log("fetch");
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: payload.prompt,
            type: payload.category,
            model: payload.model,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // console.log("API Response:", data);

        const diagram = data.code;
        const text = data.code;
        const timetaken = data.timeTakenInSec;
        const prompt = payload.prompt; 
        const type = payload.category;
        const model = payload.model;

        setDiagram(diagram);
        setText(text);
        setTimeTaken(timetaken);
        setPrompt(prompt);
        setType(type);
        setModel(model);
        // console.log(
        //   `diagram:${diagram},text:${text},timetaken:${timetaken},prompt:${prompt},type:${type},model:${model}`
        // );
        setDisplayState("results");
      } catch (error) {
        console.error("Error fetching reply:", error);
      }
    };
    fetchData();
  }

  return (
    <NoSsr>
      <div className={styles.splitter}>
        <Splitter layout="horizontal">
          <SplitterPanel className="panel" size={25}>
            <InputPanel handleSubmission={onSubmit}></InputPanel>
          </SplitterPanel>
          <SplitterPanel className="panel" size={75}>
            {displayState == "intro" && <Intro></Intro>}
            {displayState == "loading" && <Loading></Loading>}
            {displayState == "results" && (
              <Results
                diagram={diagram}
                text={text}
                timetaken={timetaken}
                prompt={prompt}
                type={type}
                model={model}
              ></Results>
            )}
          </SplitterPanel>
        </Splitter>
      </div>
    </NoSsr>
  );
}
