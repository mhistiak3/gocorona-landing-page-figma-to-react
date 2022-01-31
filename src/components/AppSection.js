import Classes from "../styles/AppSection.module.css";
import IMG from '../assets/app.png'
const AppSection = () => {
  return (
    <div className={Classes.AppSection}>
      <div className="container">
        <div className={Classes.appImg}>
          <img src={IMG} alt="" />
        </div>
        <div className="webText">
          <h2>
            Stay safe with Go<span style={{ color: "#EC5863" }}>Corona.</span>
          </h2>
          <p>
            24x7 Support and user friendly mobile platform to bring healthcare
            to your fingertips. Signup and be a part of the new health culture.
          </p>
          <button className="btn" style={{ backgroundColor: "#ec5863" }}>
            Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
