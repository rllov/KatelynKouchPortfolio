import Line from "./Line";
import "./Main.css";
export default function Main() {
  return (
    <main className="main--container">
      <div className="main--stars">
        <h6 className="main--star-1">✧</h6>
        <h6 className="main--star-2">✧</h6>
        <h6 className="main--star-3">✧</h6>
        <h6 className="main--star-4">✧</h6>
        <h6 className="main--star-5">✧</h6>
        <h6 className="main--star-6">✧</h6>
        <h6 className="main--star-7">✧</h6>
        <h6 className="main--star-8">✧</h6>
      </div>
      <div className="main--intro-desc">
        <p>Hi! My name is Katelyn, aka Kate! ദ്ദി(˵ •̀ ᴗ - ˵ ) </p>
        <h3>
          I am a graphic designer passionate about creating designs centered
          around functionality and empathy.
        </h3>
      </div>
      <Line />

      <div className="main--project-list">
        <p className="main--project-title">Take a peek at my work! |˶˙ᵕ˙ )ﾉﾞ</p>
      </div>

      <div></div>
    </main>
  );
}
