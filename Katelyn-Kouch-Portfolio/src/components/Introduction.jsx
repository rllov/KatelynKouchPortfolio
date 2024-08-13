import Line from "./Line";
import "./Introduction.css";
import ProjectCard from "./ProjectCard";


export default function Introduction() {
  return (
    <section className="intro--container">
      <div className="intro--stars">
        <h6 className="intro--star-1">✧</h6>
        <h6 className="intro--star-2">✧</h6>
        <h6 className="intro--star-3">✧</h6>
        <h6 className="intro--star-4">✧</h6>
        <h6 className="intro--star-5">✧</h6>
        <h6 className="intro--star-6">✧</h6>
        <h6 className="intro--star-7">✧</h6>
        <h6 className="intro--star-8">✧</h6>
      </div>
      <div className="intro--intro-desc">
        <p>Hi! My name is Katelyn, aka Kate! ദ്ദി(˵ •̀ ᴗ - ˵ ) </p>
        <h3>
          I am a graphic designer passionate about creating designs centered
          around functionality and empathy.
        </h3>
      </div>
      <Line />

      <div className="intro--project-list">
        <p className="intro--project-title">Take a peek at my work! |˶˙ᵕ˙ )ﾉﾞ</p>
      </div>

      <div><ProjectCard name="joe"/></div>
    </section>
  );
}
