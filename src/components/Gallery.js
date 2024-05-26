import { useEffect, useState } from "react";

const horses = [
  [
    {
      id: 1,
      src: "./images/gallery1.jpg",
      g: "g1",
      p: "50% 50%",
    },
    {
      id: 2,
      src: "./images/gallery2.jpg",
      g: "g2",
      p: "50% 50%",
    },
    {
      id: 3,
      src: "./images/gallery3.jpg",
      g: "g3",
      p: "50% 50%",
    },
    {
      id: 4,
      src: "./images/gallery4.jpg",
      g: "g4",
      p: "50% 50%",
    },
    {
      id: 5,
      src: "./images/gallery5.jpg",
      g: "g5",
      p: "50% 25%",
    },
    {
      id: 6,
      src: "./images/gallery6.jpg",
      g: "g6",
      p: "50% 50%",
    },
  ],
  [
    {
      id: 7,
      src: "./images/gallery7.jpg",
      g: "g1",
      p: "50% 25%",
    },
    {
      id: 8,
      src: "./images/gallery8.jpg",
      g: "g2",
      p: "50% 25%",
    },
    {
      id: 9,
      src: "./images/gallery9.jpg",
      g: "g3",
      p: "50% 0%",
    },
    {
      id: 10,
      src: "./images/gallery10.jpg",
      g: "g4",
      p: "0% 50%",
    },
    {
      id: 11,
      src: "./images/gallery11.jpg",
      g: "g5",
      p: "50% 30%",
    },
    {
      id: 12,
      src: "./images/gallery12.jpg",
      g: "g6",
      p: "50% 25%",
    },
  ],
  [
    {
      id: 13,
      src: "./images/gallery13.jpg",
      g: "g1",
      p: "50% 25%",
    },
    {
      id: 14,
      src: "./images/gallery14.jpg",
      g: "g2",
      p: "50% 50%",
    },
    {
      id: 15,
      src: "./images/gallery15.jpg",
      g: "g3",
      p: "50% 50%",
    },
    {
      id: 16,
      src: "./images/gallery16.jpg",
      g: "g4",
      p: "50% 50%",
    },
    {
      id: 17,
      src: "./images/gallery17.jpg",
      g: "g5",
      p: "50% 25%",
    },
    {
      id: 18,
      src: "./images/gallery18.jpg",
      g: "g6",
      p: "50% 50%",
    },
  ],
  [
    {
      id: 19,
      src: "./images/gallery19.jpg",
      g: "g1",
      p: "50% 10%",
    },
    {
      id: 20,
      src: "./images/gallery20.jpg",
      g: "g2",
      p: "50% 25%",
    },
    {
      id: 21,
      src: "./images/gallery21.jpg",
      g: "g3",
      p: "50% 50%",
    },
    {
      id: 22,
      src: "./images/gallery22.jpg",
      g: "g4",
      p: "50% 50%",
    },
    {
      id: 23,
      src: "./images/gallery23.jpg",
      g: "g5",
      p: "50% 0%",
    },
    {
      id: 24,
      src: "./images/gallery24.jpg",
      g: "g6",
      p: "50% 10%",
    },
  ],
  [
    {
      id: 25,
      src: "./images/gallery25.jpg",
      g: "g1",
      p: "50% 50%",
    },
    {
      id: 26,
      src: "./images/gallery26.jpg",
      g: "g2",
      p: "50% 50%",
    },
    {
      id: 27,
      src: "./images/gallery27.jpg",
      g: "g3",
      p: "50% 50%",
    },
    {
      id: 28,
      src: "./images/gallery28.jpg",
      g: "g4",
      p: "50% 50%",
    },
    {
      id: 29,
      src: "./images/gallery29.jpg",
      g: "g5",
      p: "50% 25%",
    },
    {
      id: 30,
      src: "./images/gallery30.jpg",
      g: "g6",
      p: "50% 30%",
    },
  ],
];

const imgLength = 30;

export default function Gallery() {
  const [show, setShow] = useState(null);

  function handleSetShow(id) {
    return setShow(id);
  }

  function increase() {
    if (show !== imgLength) {
      setShow(show + 1);
    }
  }
  function decrease() {
    if (show !== 1) {
      setShow(show - 1);
    }
  }

  useEffect(() => {
    function callback(e) {
      switch (e.code) {
        case "Escape":
          setShow(null);
          break;
        case "ArrowRight":
          if (show !== 30) {
            setShow(show + 1);
          }
          break;
        case "ArrowLeft":
          if (show !== 1) {
            setShow(show - 1);
          }
          break;
        default:
          return;
      }
    }
    document.addEventListener("keydown", callback);
    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [show]);

  return (
    <>
      <div className="bigGallery">
        {horses.map((horse, index) => (
          <MiniGal horse={horse} key={index} onSetShow={handleSetShow} />
        ))}
        {show ? (
          <Highlight
            show={show}
            onSetShow={handleSetShow}
            decrease={decrease}
            increase={increase}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

function MiniGal({ horse, onSetShow }) {
  return (
    <div className="gallery">
      {horse.map((e) => (
        <Image e={e} key={e.id} onSetShow={onSetShow} />
      ))}
    </div>
  );
}

function Image({ e, onSetShow }) {
  return (
    <div className={e.g} onClick={() => onSetShow(e.id)}>
      <img src={e.src} alt="img" style={{ objectPosition: e.p }} />
    </div>
  );
}

function Highlight({ show, onSetShow, decrease, increase }) {
  return (
    <div className="highlight">
      <div className="flex">
        <Button direction={"left"} decrease={decrease} />
        <Picture show={show} />
        <Button direction={"right"} increase={increase} />
        <Close onSetShow={onSetShow} />
      </div>
    </div>
  );
}

function Button({ direction, decrease, increase }) {
  return (
    <button
      className={direction}
      onClick={() => {
        direction === "right" ? increase() : decrease();
      }}
    >
      <i className={`fa-solid fa-chevron-${direction}`}></i>
    </button>
  );
}

function Picture({ show }) {
  return (
    <div className="grand">
      <img
        src={`./images/gallery${show}.jpg`}
        alt="img"
        className="show"
        style={{ objectFit: "contain", objectPosition: "0% 0%" }}
      />
    </div>
  );
}

function Close({ onSetShow }) {
  return (
    <button className="x" onClick={() => onSetShow(null)}>
      <i className="fa-solid fa-xmark"></i>
    </button>
  );
}
