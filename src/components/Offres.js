export default function Offres() {
  return (
    <div className="payments">
      <div className="table">
        <a href="http://localhost:3000/login">
          <div className="abonnement">
            <div className="picture">
              <img src="./images/offre1.jpg" alt="offre1" />
            </div>
            <div className="details">
              <h3>2000 DA</h3>
              <p>Nombre Seances: 5</p>
              <button>Acheter</button>
            </div>
          </div>
        </a>
        <a href="http://localhost:3000/login">
          <div className="abonnement">
            <div className="picture">
              <img src="./images/offre2.jpg" alt="offre2" />
            </div>
            <div className="details">
              <h3>3000 DA</h3>
              <p>Nombre Seances: 8</p>
              <button>Acheter</button>
            </div>
          </div>
        </a>
        <a href="http://localhost:3000/login">
          <div className="abonnement">
            <div className="picture">
              <img src="./images/offre3.jpg" alt="offre3" />
            </div>
            <div className="details">
              <h3>4000 DA</h3>
              <p>Nombre Seances: 12</p>
              <button>Acheter</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
