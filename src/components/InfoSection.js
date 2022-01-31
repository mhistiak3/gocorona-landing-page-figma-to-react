import EXPERTS from '../assets/experts.png'
import ANGELLarge from '../assets/large.png'
import ANGELMedium from '../assets/medium.png'
import ANGELSmall from '../assets/small.png'
import Classes from "../styles/InfoSection.module.css";


const InfoSection = () => {
  return (
    <div className={Classes.InfoSection}>
      <div className={Classes.counter}>
        <img src={ANGELSmall} alt="" className={Classes.smallAngel} />
        <img src={ANGELMedium} alt="" className={Classes.mediumAngel} />
        <img src={ANGELLarge} alt="" className={Classes.largeAngel} />
        <div className={Classes.counterBox}>
          <div>
            <h5>2m</h5>
            <span>Users</span>
          </div>
          <div>
            <h5>78</h5>
            <span>Countries</span>
          </div>
          <div>
            <h5>10,000+</h5>
            <span>Medical experts</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="webText">
          <h2>
            Talk to <span style={{ color: "#4285F4" }}>experts.</span>
          </h2>
          <p>
            Book appointments or submit queries into thousands of forums
            concerning health issues and prevention against noval Corona Virus.
          </p>
          <button className="btn" style={{ backgroundColor: "#ec5863" }}>
            Features
          </button>
        </div>
        <div className={Classes.expertsImg}>
          <img src={EXPERTS} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
