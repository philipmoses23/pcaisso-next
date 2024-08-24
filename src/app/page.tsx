"use client";
import Link from "next/link";
import styles from "./page.module.scss";
import { Button } from "primereact/button";

export default function Page() {
  return (
    <div className={styles["intro"]}>
      <div className="title">
        <h1 className="animated bounceInUp animate-delay-1s">
        🎨 Pc<span>ai</span>sso
        </h1>
        <h2>[AI Art + Code]</h2>
      </div>
      <p className="explain">
        Can LLMs generate code to draw things? Pcaisso is a tool to explore,{" "}
        <br />
        investigate and visualize the graphics generated by LLMs in response to
        prompts.
      </p>
      <Link href="/draw" passHref>
        <Button
          className="explore-button"
          type="submit"
          severity="success"
          size="large"
        >
          Start Exploring!
        </Button>
      </Link>
      <h3>🌸 2D Canvas</h3>
      <section className="gallery">
        <div className="item item-1">
          <div className="bottom-section">
            <p>A Japan cityscape. Road filled with skyscrapers</p>
            <div>
              <Button className="submit-button" type="submit">
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="item item-2">
          <div className="bottom-section">
            <p>Art with parabolas and circles</p>
            <div>
              <Button className="submit-button" type="submit">
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="item item-3">
          <div className="bottom-section">
            <p>Church on rolling hills</p>
            <div>
              <Button className="submit-button" type="submit">
                View
              </Button>
            </div>
          </div>
        </div>
      </section>

      <h3>🌸 2D Canvas - Dynamic Graphics</h3>
      <section className="gallery">
        <div className="item">
          <video width="100%" autoPlay muted loop>
            <source src="/demos/clock.mp4" type="video/mp4" />
          </video>
          <div className="bottom-section">
            <p>A functional clock</p>
            <div>
              <Button className="submit-button" type="submit">
                View
              </Button>
            </div>
          </div>
        </div>

        <div className="item">
          <video width="100%" autoPlay muted loop>
            <source src="/demos/bricks.mp4" type="video/mp4" />
          </video>
          <div className="bottom-section">
            <p>Make a simple bricks game</p>
            <div>
              <Button className="submit-button" type="submit">
                View
              </Button>
            </div>
          </div>
        </div>

        <div className="item">
          <video width="100%" autoPlay muted loop>
            <source src="/demos/fractal.mp4" type="video/mp4" />
          </video>
          <div className="bottom-section">
            <p>Animated fractal</p>
            <div>
              <Button className="submit-button" type="submit">
                View
              </Button>
            </div>
          </div>
        </div>
      </section>

      <h3>🧊 3D Graphics</h3>
      <section className="gallery">
        <div className="item">
          <video width="100%" autoPlay muted loop>
            <source src="/demos/cube.mp4" type="video/mp4" />
          </video>
          <div className="bottom-section">
            <p>Rotating Cube</p>
            <div>
              <Button className="submit-button" type="submit">
                View
              </Button>
            </div>
          </div>
        </div>

        <div className="item"></div>
        <div className="item"></div>
      </section>

      <h3>💠 Data Visualization</h3>
      <section className="gallery">
        <div className="item viz-1">
          <div className="bottom-section">
            <p>Denominations of Christianity.</p>
            <div>
              <Button className="submit-button" type="submit">
                View
              </Button>
            </div>
          </div>
        </div>

        <div className="item"></div>
        <div className="item"></div>
      </section>
      <p className="footer animated bounceInUp animate-delay-2s">
        Made with 💖 by <Link href="https://www.linkedin.com/in/rmadhuram/">Raj Madhuram</Link> & the <Link href="/draw/contributions">students and friends</Link> of <Link target="_blank" href="https://gct.ac.in/">
          GCT, Coimbatore
        </Link>
      </p>
    </div>
  );
}
