"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedText() {
  const words = ["World", "Everybody", "HR Rep", "Users"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [asc, setAsc] = useState(true);
  const ascRef = useRef(asc);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        const maxIndex = words.length - 1;

        // Toggle asc/desc if we reach the end or start
        if (prevIndex === maxIndex) {
          setAsc(false);
          ascRef.current = false;
        } else if (prevIndex === 0) {
          setAsc(true);
          ascRef.current = true;
        }
        console.log(asc);
        // Move in the current direction (asc/desc)
        return ascRef.current ? prevIndex + 1 : prevIndex - 1;
      });
    }, 1500); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center p-4 mb-10">
      <div className="flex gap-4 before:content-['['] after:content-[']'] after:text-3xl before:text-3xl h-10 text-2xl before:text-[clamp(0.25rem,6vw,5rem)] after:text-[clamp(0.25rem,6vw,5rem)]">
          
        <span className="h-10 flex items-center hello-world font-titles">Hello</span>
          
        <ul
          className={`flex flex-col items-start transition-all duration-300`}
          style={{ transform: `translateY(-${currentWordIndex * 2.5}rem)` }}
        >
          {words.map((word, index) => (
            <li
              key={word}
              className={`${
                index === currentWordIndex ? "opacity-100" : "opacity-0"
              } transition-all duration-300 leading-10 after:content-['_!'] hello-world font-titles`}
            >
              {word}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
