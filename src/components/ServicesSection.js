import Classes from "../styles/ServicesSection.module.css";
import Card from "./Card";
import IMGONE from "../assets/s1.png";
import IMGTOW from "../assets/s2.png";
import IMGTHREE from "../assets/s3.png";

import APPLE from "../assets/apple.png";
import GOOGLE from "../assets/google.png";

const ServicesSection = () => {
  return (
    <div className={Classes.ServicesSection}>
      <h1>
        <span>Healthcare</span> at your Fingertips.
      </h1>
      <p>
        Bringing premium healthcare features to your fingertips. User friendly
        mobile platform to bring healthcare to your fingertips. Signup and be a
        part of the new health culture.
      </p>
      <div className={Classes.serviceContainer}>
        <Card
          CLASS={Classes.card}
          IMG={IMGONE}
          HEADING="Symptom Checker"
          PARAGRAPH="Check if you are infected by COVID-19 with our Symptom Checker"
        />
        <Card
          CLASS={Classes.card}
          IMG={IMGTOW}
          HEADING="24x7 Medical support"
          PARAGRAPH="Consult with 10,000+ health workers about your concerns."
        />
        <Card
          CLASS={Classes.card}
          IMG={IMGTHREE}
          HEADING="Conditions"
          PARAGRAPH="Bringing premium healthcare features to your fingertips."
        />
      </div>
      <div className={Classes.companyLOGOS}>
        <img src={APPLE} alt="" />
        <img src={GOOGLE} alt="" />
      </div>
    </div>
  );
};

export default ServicesSection;
