const Card = ({ CLASS, IMG, HEADING, PARAGRAPH }) => {
  return (
    <div className={CLASS}>
      <img src={IMG} alt="" />
      <h3>{HEADING}</h3>
      <p>{PARAGRAPH}</p>
    </div>
  );
};

export default Card;
/* Rectangle 22 */



