import { useEffect, useRef, useState } from "react";

export default function Home() {
  const slider = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [initialDrag, setInitialDrag] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setInitialDrag(event.clientX)
    setScrollLeft(slider.current?.scrollLeft || 0)
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (isMouseDown && slider.current) {
      const dx = event.clientX - initialDrag;
      slider.current.scrollLeft = scrollLeft - dx;
    }
  };

  return (
    <main className="flex justify-center items-center w-screen h-screen overflow-hidden">
      <div className="border-4 border-red-500 p-5 w-1/2">
        <div
          ref={slider}
          className="scrollbar-hide overflow-auto whitespace-nowrap"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          <div className="mx-2 w-80 h-80 bg-blue-500 inline-block"></div>
          <div className="mx-2 w-80 h-80 bg-red-500 inline-block"></div>
          <div className="mx-2 w-80 h-80 bg-green-500 inline-block"></div>
          <div className="mx-2 w-80 h-80 bg-orange-500 inline-block"></div>
          <div className="mx-2 w-80 h-80 bg-indigo-500 inline-block"></div>
        </div>
      </div>
    </main>
  );
}
