import { useEffect, useState } from "react";
import "../css/Normalize.css";
import "../css/main.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Offres from "./Offres";
import { Link } from "react-router-dom";

const headerItems = [
  {
    id: 1,
    name: "Home",
    location: "",
    actv: "active",
    src: "",
  },
  {
    id: 2,
    name: "Contact",
    location: "",
    actv: "",
    src: "./images/box1.jpg",
  },
  // {
  //   id: 3,
  //   name: "Coaches",
  //   location: "#",
  //   actv: "",
  //   src: "./images/box2.jpg",
  // },
  // {
  //   id: 4,
  //   name: "Clients Satisfaits",
  //   location: "#",
  //   actv: "",
  //   src: "./images/box3.jpg",
  // },
  {
    id: 3,
    name: "Gallerie",
    location: "",
    actv: "",
    src: "./images/box4.jpg",
  },
  {
    id: 4,
    name: "Offres",
    location: "",
    actv: "",
    src: "./images/box4.jpg",
  },
];

export default function Visitor() {
  const [selectedPage, setSelectedPage] = useState(1);
  const [head, setHead] = useState(false);

  function handleSelectPage(id) {
    setSelectedPage(id);
  }

  //axios

  //Scroll to Top everytime we change the page
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [selectedPage]);

  //Document Title
  useEffect(
    function () {
      if (!selectedPage) return;
      else {
        switch (selectedPage) {
          case 1:
            document.title = `Equitation Ouled Fayet`;
            break;
          case 2:
            document.title = `Contact`;
            break;
          case 3:
            document.title = `Gallerie`;
            break;
          case 4:
            document.title = `Offres`;
            break;
          default:
            return;
        }
      }

      //cleanup function
      return function () {
        document.title = "Equitation Ouled Fayet";
      };
    },
    [selectedPage]
  );

  return (
    <>
      <Header>
        <List onSelectedPage={handleSelectPage} head={head} setHead={setHead} />
        <Hamburger head={head} setHead={setHead} />
      </Header>
      <Content selectedPage={selectedPage} onSelectedPage={handleSelectPage} />
    </>
  );
}

//Header Items
function List({ onSelectedPage, head, setHead }) {
  return (
    <ul
      className="computer"
      style={{
        bottom: head ? `calc(-100%)` : `calc(-100% + 1000px)`,
      }}
    >
      {headerItems?.map((item) => (
        <Item
          name={item.name}
          location={item.location}
          actv={item.actv}
          key={item.id}
          item={item}
          onSelectedPage={onSelectedPage}
          setHead={setHead}
        />
      ))}
      <li className="specialLiLogin">
        <Link to="/login" className="">
          Login
        </Link>
      </li>
    </ul>
  );
}

function Item({ name, location, actv, item, onSelectedPage, setHead }) {
  return (
    <li
      onClick={() => {
        headerItems.forEach((item) => {
          item.actv = "";
        });
        headerItems[item.id - 1].actv = "active";
        onSelectedPage(item.id);
        setHead(false);
      }}
      // className={actv}
    >
      {/* <a href={`${location}`}>{`${name}`}</a> */}
      <Link to={location}>{name}</Link>
    </li>
  );
}

function Hamburger({ head, setHead }) {
  return (
    <span onClick={() => setHead(!head)}>
      {head ? (
        <i className="fa-solid fa-xmark"></i>
      ) : (
        <i className="fa-solid fa-bars"></i>
      )}
    </span>
  );
}

//Home Boxes
function Thumbs({ onSelectedPage }) {
  return (
    <div className="thumbnails">
      <div className="container">
        {headerItems?.map((item) =>
          item.id !== 1 && item.id !== 4 ? (
            <Box
              key={item.id}
              item={item}
              src={item.src}
              p={item.name}
              onSelectedPage={onSelectedPage}
            />
          ) : (
            <Empty key={item.id} />
          )
        )}
      </div>
    </div>
  );
}

function Box({ src, p, item, onSelectedPage }) {
  return (
    <div
      className="box"
      onClick={() => {
        headerItems.forEach((item) => {
          item.actv = "";
        });
        headerItems[item.id - 1].actv = "active";
        onSelectedPage(item.id);
      }}
    >
      <img src={src} alt="img" />
      <div className="boxFoot">
        <p>{p}</p>
        <i className="fa-regular fa-circle-right"></i>
      </div>
    </div>
  );
}

function Empty() {
  return null;
}

function Content({ selectedPage, onSelectedPage }) {
  switch (selectedPage) {
    case 1:
      return (
        <Home>
          <Thumbs onSelectedPage={onSelectedPage} />
          <Footer />
        </Home>
      );
    case 2:
      return (
        <>
          <Contact />
          <Footer />
        </>
      );
    case 3:
      return (
        <>
          <Gallery />
          <Footer />
        </>
      );
    case 4:
      return (
        <>
          <Offres />
          <Footer />
        </>
      );
    default:
      return <p>rak ghalet</p>;
  }
}
