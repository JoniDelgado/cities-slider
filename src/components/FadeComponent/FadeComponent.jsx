import { useRef, useEffect, useState } from "react";
import "./fadeComponent.scss";

const FadeComponent = ({ children, cssClass }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  const observerFunction = (entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        setIsVisible(true);
      } else setIsVisible(false);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerFunction, {
      threshold: 0.25,
    });
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={` ${cssClass} fade ${isVisible ? "fade--fade-in" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeComponent;
