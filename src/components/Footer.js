export default function Footer() {
  return (
    <>
      <footer>
        <p className="footname">CLUB EQUITATION OULED FAYET</p>
        <Wilton />
      </footer>
    </>
  );

  function Wilton() {
    return (
      <div className="wilton">
        <WiltonObj
          i={"fa-solid fa-location-dot"}
          p={"04 rue de bouchaoui, Ouled Fayet, Algeria"}
        />
        <WiltonObj
          i={"fa-solid fa-message"}
          p={"fayet.equitation@hotmail.fr"}
        />
        <WiltonObj
          i={"fa-solid fa-copyright"}
          p={"Club Equitation Ouled Fayet"}
        />
      </div>
    );
  }

  function WiltonObj({ i, p }) {
    return (
      <div className="component">
        <i className={i}></i>
        <p>{p}</p>
      </div>
    );
  }
}
