import Line from "./Line";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="nav--container">
        <h1 className="nav--title">
          <a href="/">katelyn kouch ✿</a>
        </h1>
        <ul className="nav--links">
          <a href="/works">
            <li>works</li>
          </a>
          <a href="/play">
            <li>play</li>
          </a>
          <a href="/about">
            <li>about</li>
          </a>
          <a href="/resume">
            <li>resume</li>
          </a>
        </ul>
      </nav>
      <Line />
    </>
  );
}
