import "./Footer.css";
import Line from "./Line";
export default function Footer() {
  const calender = new Date();
  const currentDate = calender.toLocaleString();

  return (
    <footer className="footer--container">
      <div className="footer--main-container">
        <h1 className="footer--title">Let’s connect! ヽ(*^ｰ^)人(^ｰ^*)ノ</h1>
        <p className="footer--prompt">
          Feel free to message me via linkedin! Tell me your favorite dessert.
        </p>
      </div>
      <div className="footer--side-container">
        <div>
          <h1 className="footer--side-title">navigation</h1>
          <ul className="footer--side-links">
            <li>works</li>
            <li>art</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div>
          <h1 className="footer--side-title">socials</h1>
          <ul className="footer--side-links">
            <li>linkedin</li>
            <li>resume</li>
          </ul>
        </div>
      </div>

      <Line />
      <div className="footer--bottom-container">
        <h5 className="footer--bottom-title"> katelyn kouch ✿</h5>
        <div className="footer--bottom-paragraphs">
          <p>
            Designed by love and <b>overthinking</b> by yours truly. | Coded by
            Kalvin Kouch and Ryan Lov.
          </p>
          <p>{`Last updated on ${currentDate}`}</p>
        </div>
      </div>
    </footer>
  );
}
