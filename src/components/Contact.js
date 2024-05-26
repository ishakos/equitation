/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
export function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="left">
          <p>Visitez-nous!</p>
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
            <p className="title">Contact-Nous</p>
            <ul>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p>04 rue de bouchaoui, Ouled Fayet, Algeria</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p>0550668307</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-message"></i>
                </div>
                <div>
                  <p>fayet.equitation@hotmail.fr</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div>
                  <p>ceqouledfayet.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
