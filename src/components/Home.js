import Background from "./Background";

export default function Home({ children }) {
  return (
    <>
      <Background />
      <HomeText />
      <SecLanding />
      <SectionHeader
        title={"Services"}
        desc={
          "Nous proposons des leçons d'équitation pour tous niveaux, des services de pension complets pour vos chevaux, et organisons divers événements et compétitions équestres. Rejoignez-nous pour vivre pleinement votre passion de l'équitation dans un cadre convivial et professionnel."
        }
      >
        <Services />
      </SectionHeader>
      <MiniGallery />
      {/*  
      <Stats />
      */}
      <SectionHeader
        title={"Membres"}
        desc={
          "Nos membres forment une communauté chaleureuse et passionnée, bénéficiant d'un accès privilégié à nos installations et événements exclusifs. Rejoignez-nous pour partager votre amour de l'équitation et tisser des liens avec d'autres passionnés"
        }
      >
        <Knights />
      </SectionHeader>

      {/*  
      <Reviews />
      */}
      {children}
    </>
  );
}

function SectionHeader({ title, desc, children }) {
  return (
    <div className={title}>
      <div className="sectionContainer">
        <h3 className="sectionTitle">{title}</h3>
        <p className="sectionDesc">{desc}</p>
        {children}
      </div>
    </div>
  );
}

function HomeText() {
  return (
    <div className="intro">
      <div className="container">
        <h1>CLUB EQUITATION OULED FAYET</h1>
        <h2>Un Club Local Privé, Proposant Des Services Équitation</h2>
        <p>
          Le Club d'équitation Ouled Fayet est un sanctuaire pour les passionnés
          de l'équitation et une communauté de membres partageant les mêmes
          idéaux. Construit autour des familles et des amitiés, le club
          accueille aussi bien des membres de longue date que des nouveaux
          venus, tous appréciant la nature unique du lieu. Chaque jour, de
          nombreuses occasions de se réunir sont offertes, que ce soit aux
          écuries ou lors des divers événements organisés. Depuis sa création,
          le Club équestre d'Ouled Fayet incarne la beauté du plein air, offrant
          à ses membres un véritable sentiment d'appartenance.
        </p>
      </div>
    </div>
  );
}

function SecLanding() {
  return (
    <div className="secLanding">
      <div className="left"></div>
      <div className="right">
        <h3>Soyez les bienvenus dans notre équitation club!</h3>
        <p className="abed">
          Bienvenue sur notre page dédiée à nos services ! Chez Ouled Fayet,
          nous sommes fiers de vous proposer une gamme complète de services pour
          répondre à tous vos besoins. Que vous soyez une entreprise en
          démarrage, une PME ou une grande entreprise, nous sommes là pour vous
          accompagner à chaque étape de votre parcours.
        </p>
        <div className="intrests">
          <div className="intrest">
            <div className="icon">
              <div>
                <i className="fa-solid fa-trophy"></i>
              </div>
            </div>
            <div className="texts">
              <h4>Evenements</h4>
              <p>
                Explorez nos événements captivants où le plaisir,
                l'apprentissage et les rencontres se rejoignent pour créer des
                expériences mémorables
              </p>
            </div>
          </div>
          <div className="intrest">
            <div className="icon">
              <div>
                <i className="fa-solid fa-tree"></i>
              </div>
            </div>
            <div className="texts">
              <h4>Nature</h4>
              <p>
                Découvrez nos jardins enchantés où la nature se déploie dans
                toute sa splendeur avec les chevaux, invitant à la contemplation
                et à la sérénité
              </p>
            </div>
          </div>
          <div className="intrest">
            <div className="icon">
              <div>
                <i className="fa-solid fa-bowl-food"></i>
              </div>
            </div>
            <div className="texts">
              <h4>Restaurant</h4>
              <p>
                Savourez une expérience gastronomique inoubliable dans nos
                restaurants, où chaque plat est soigneusement préparé pour
                éveiller vos papilles et émerveiller vos sens
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="lesServices">
      <Serv
        i="fa-solid fa-book"
        h="Leçons d'équitation"
        p="Offrez-vous des cours adaptés à tous les niveaux, encadrés par des instructeurs qualifiés pour perfectionner vos compétences équestres"
      />
      <Serv
        i="fa-solid fa-horse"
        h="Pension pour chevaux"
        p="Hébergement confortable avec des soins complets, de la nourriture de qualité et un accès à des installations de premier ordre"
      />
      <Serv
        i="fa-solid fa-face-smile-beam"
        h="Randonnées équestres"
        p="Explorez la nature environnante lors de balades guidées, idéales pour découvrir de nouveaux paysages à cheval"
      />
    </div>
  );
}

function Serv({ i, h, p }) {
  return (
    <div className="serv">
      <div className="icon">
        <i className={i}></i>
      </div>
      <h2>{h}</h2>
      <p>{p}</p>
    </div>
  );
}

function Knights() {
  return (
    <div className="knights">
      <Knight
        s="./images/gallery9.jpg"
        n="Draoui Yacine"
        t="NIVEAU 4"
        d="Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis"
      />
      <Knight
        s="./images/person2.jpg"
        n="Bendali Ahmed"
        t="NIVEAU 5 (CHAMPION COMPETITION EN 2015)"
        d="Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis"
      />
      <Knight
        s="./images/person3.jpg"
        n="Benguergoura Anis"
        t="NIVEAU 2"
        d="Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis"
      />
    </div>
  );
}

function Knight({ s, n, t, d }) {
  return (
    <div className="knight">
      <div className="knightImg">
        <img src={s} alt=""></img>
      </div>
      <div className="knightDesc">
        <h1>{n}</h1>
        <h5>{t}</h5>
        <p>{d}</p>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats">
      <div className="stat">
        <div className="sta">
          <h2>85</h2>
          <p>Doctors</p>
        </div>
        <div className="sta">
          <h2>85</h2>
          <p>Doctors</p>
        </div>
        <div className="sta">
          <h2>85</h2>
          <p>Doctors</p>
        </div>
        <div className="sta">
          <h2>85</h2>
          <p>Doctors</p>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="Reviews">
      <div className="reviewsContainer">
        <h3 className="sectionTitle">Reviews</h3>
        <p className="sectionDesc">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas
        </p>
        <div className="reviewsList">
          <Review
            s="./images/gallery9.jpg"
            n="Matt Brandon"
            t="Store Owner"
            d="Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
          />
          <Review
            s="./images/gallery9.jpg"
            n="Matt Brandon"
            t="Store Owner"
            d="Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
          />
        </div>
      </div>
    </div>
  );
}

function Review({ s, n, t, d }) {
  return (
    <div className="review">
      <div className="left">
        <div>
          <img src={s} alt=""></img>
        </div>
      </div>
      <div className="right">
        <h4>{n}</h4>
        <div className="stars">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star-half-stroke"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>
          <i className="fa-solid fa-quote-left"></i>
          {d}
          <i className="fa-solid fa-quote-right"></i>
        </p>
      </div>
    </div>
  );
}

function MiniGallery() {
  return (
    <div className="miniArchive">
      <div className="archive">
        <img src="./images/miniGallery16.jpg" alt=""></img>
      </div>
      <div className="archive">
        <img src="./images/miniGallery15.jpg" alt=""></img>
      </div>
      <div className="archive">
        <img src="./images/miniGallery21.jpg" alt=""></img>
      </div>
      <div className="archive">
        <img src="./images/miniGallery27.jpg" alt=""></img>
      </div>
    </div>
  );
}
