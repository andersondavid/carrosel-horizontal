import { ReactNode, useRef, useState } from "react";

type Props = {
  children: ReactNode;
};

export default function Slider({ children }: Props) {
  const slider = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [initialDrag, setInitialDrag] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [cursor, setCursor] = useState<string>("cursor-grab");

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setInitialDrag(event.clientX);
    setScrollLeft(slider.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setCursor("cursor-grab");
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (isMouseDown && slider.current) {
      setCursor("cursor-grabbing");
      const dx = event.clientX - initialDrag;
      slider.current.scrollLeft = scrollLeft - dx;
    }
  };

  return (
    <div
      ref={slider}
      className={`scrollbar-hide overflow-auto whitespace-nowrap ${cursor}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </div>
  );
}
