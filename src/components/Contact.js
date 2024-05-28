/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h3>Visitez-Nous!</h3>
        <div className="taht">
          <div className="left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.392960297156!2d2.9185679258354513!3d36.73713777226513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fa564e3279849%3A0xc34a805ee410bf92!2sCentre%20%C3%A9questre%20ouled%20fayet!5e0!3m2!1sen!2sdz!4v1716730138234!5m2!1sen!2sdz"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right">
            <div className="box">
              <ul>
                <li>
                  <p className="head">Notre Adresse</p>
                  <p>04 rue de bouchaoui, Ouled Fayet, Algeria</p>
                </li>
                <li>
                  <p className="head">Heures</p>
                  <p>Lundi - Vendredi : 9am - 5pm</p>
                  <p>Samedi : 10am - 4pm</p>
                  <p>Dimanche : Fermé</p>
                </li>
                <li>
                  <p className="head">Contact</p>
                  <p>Email : fayet.equitation@hotmail.fr</p>
                  <p>Telephone : 0550668307</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
