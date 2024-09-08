"use client";
import "animate.css";
import Link from "next/link";
import styles from "./page.module.scss";
import { Button } from "primereact/button";
import GalleryItem from "./components/galleryItem/GalleryItem";
import { RecentlyLikedItemModel } from "@/models/recently-liked-item";
import RecentlyLikedItem from "./components/recentlyLikedItem/RecentlyLikedItem";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Skeleton } from "primereact/skeleton";

export default function Page() {
  const { data: session } = useSession();
  const [recentLikedOnes, setRecentLikedOnes] = useState<
    RecentlyLikedItemModel[]
  >([]);
  const router = useRouter();

  const userId = session?.user?.id;

  useEffect(() => {
    if (userId) {
      const updateRecentLikes = async () => {
        try {
          const response = await fetch("/api/liked", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }

          const dataReceived = await response.json();
          // console.log(dataReceived);

          setRecentLikedOnes(dataReceived);
        } catch (error) {
          console.error("Error updating the recent likes");
        }
      };
      updateRecentLikes();
    }
  }, [userId]);

  console.log("before return", recentLikedOnes);

  return (
    <div className={styles["intro"]}>
      <div className="title">
        <h1 className="animate__animated animate__flipInX">
          🎨 Pc<span>ai</span>sso
        </h1>
      </div>
      <p className="explain">
        Did you know that LLMs can draw cool things? 2D & 3D graphics, simple
        games & data visualizations! Come, explore with us!
      </p>
      <p className="explain">The following demos were created using Pcaisso!</p>
      <p className="explain mobile-only">
        Pcaisso is best experienced on a desktop/laptop. You will not be able to
        generate images on mobile devices.
      </p>
      <Link href="/draw/new" className="explore-link" passHref>
        <Button className="explore-button" type="submit" severity="success">
          Start Exploring!
        </Button>
      </Link>
      <div className="contents">
        <div className="left-side">
          <div className="gallery-section">
            <h3>🌸 2D Canvas</h3>
            <section className="gallery">
              <GalleryItem
                uuid="2b50c478-608f-4a09-a345-d842c502c882"
                type="image"
                src="/demos/skyscraper-japan.png"
                description="A Japan cityscape. Road filled with skyscrapers"
              ></GalleryItem>
              <GalleryItem
                uuid="e8d3a6bc-9eb2-4a8b-b4fa-6da027a49686"
                type="image"
                src="/demos/parabola-art.png"
                description="Art with parabolas and circle"
              ></GalleryItem>
              <GalleryItem
                uuid="6f85516c-c2dc-46e0-9b56-539153b73807"
                type="image"
                src="/demos/church.png"
                description="Church on rolling hills"
              ></GalleryItem>
            </section>
          </div>

          <div className="gallery-section">
            <h3>🌸 2D Canvas - Dynamic Graphics</h3>
            <section className="gallery">
              <GalleryItem
                uuid="9870ce6d-a014-4596-a87d-698ed0fe9c02"
                type="video"
                src="/demos/clock.mp4"
                description="A functional clock"
              ></GalleryItem>
              <GalleryItem
                uuid="79902897-bc7b-493b-a263-e77fcf0da868"
                type="video"
                src="/demos/bricks.mp4"
                description="Make a simple bricks game"
              ></GalleryItem>
              <GalleryItem
                uuid="5521edce-c817-4bed-b6a3-8d5d0dfaaa66"
                type="video"
                src="/demos/fractal.mp4"
                description="Animated fractal"
              ></GalleryItem>
            </section>
          </div>

          <div className="gallery-section">
            <h3>🧊 3D Graphics</h3>
            <section className="gallery">
              <GalleryItem
                uuid="5521edce-c817-4bed-b6a3-8d5d0dfaaa66"
                type="video"
                src="/demos/cube.mp4"
                description="Rotating Cube"
              ></GalleryItem>
              <GalleryItem uuid="" type="" src="" description=""></GalleryItem>
              <GalleryItem uuid="" type="" src="" description=""></GalleryItem>
            </section>
          </div>

          <div className="gallery-section">
            <h3>💠 Data Visualization</h3>
            <section className="gallery">
              <GalleryItem
                uuid="b4316bac-c113-4daa-89ed-74bf62227106"
                type="image"
                src="/demos/viz1.png"
                description="Denominations of Christianity."
              ></GalleryItem>
              <GalleryItem uuid="" type="" src="" description=""></GalleryItem>
              <GalleryItem uuid="" type="" src="" description=""></GalleryItem>
            </section>
          </div>
        </div>
        <div className="right-side">
          <h3>Recent Likes</h3>
          <section className="recent-likes">
            {recentLikedOnes.length > 0 ? (
              recentLikedOnes.map((item: RecentlyLikedItemModel) => (
                <div onClick={() => router.push(`/draw/${item.uuid}`)}>
                  <RecentlyLikedItem key={item.uuid} recent={item} />
                </div>
              ))
            ) : (
              <>
                <Skeleton className="mb-2" height="50px"></Skeleton>
                <Skeleton className="mb-2" height="50px"></Skeleton>
              </>
            )}
          </section>
        </div>
      </div>

      <p className="footer animated bounceInUp animate-delay-2s">
        Made with 💖 by{" "}
        <Link href="https://www.linkedin.com/in/rmadhuram/">Raj Madhuram</Link>{" "}
        & the <Link href="/draw/contributions">students and friends</Link> of{" "}
        <Link target="_blank" href="https://gct.ac.in/">
          GCT, Coimbatore
        </Link>
      </p>
    </div>
  );
}
