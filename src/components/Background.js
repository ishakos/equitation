import { useEffect, useRef, useState } from "react";
import "../css/main.css";
import "../css/Normalize.css";

let background = [
  {
    id: 1,
    src: "./images/landing1.png",
    opacity: 1,
  },
  {
    id: 2,
    src: "./images/landing2.png",
    opacity: 0,
  },
  {
    id: 3,
    src: "./images/landing3.png",
    opacity: 0,
  },
];

let x = 0;

export default function Background() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    if (x === background.length - 1) x = 0;
    else ++x;
    setCount(count + 1);
  }, 8000);

  useEffect(() => {
    background?.forEach((image) => {
      image.opacity = 0;
    });
    background[x].opacity = 1;
  }, [count]);

  return (
    <div className="landing">
      <Image src={background[0]?.src} key={0} opacity={0} />
      {background?.map((image) => (
        <Image
          src={image.src}
          key={image.id}
          id={image.id}
          opacity={image.opacity}
        />
      ))}
    </div>
  );
}

function Image({ src, opacity }) {
  return (
    <img
      src={src}
      alt="landing"
      className="land"
      style={{ opacity: opacity }}
    />
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
