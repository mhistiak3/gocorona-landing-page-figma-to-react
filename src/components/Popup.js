const Popup = ({show}) => {
  return (
    <div className={`popup ${show && "showPopup"}`}>
      {show && (
        <iframe
          src="https://www.youtube.com/embed/gnOW-0uQamo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Popup;
