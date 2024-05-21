import React, { useRef, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';

// 아이콘 이미지 경로
import MicIcon from '/public/mic.png';
import LensIcon from '/public/lens.png';
import PageIcon from '/public/page.png';
import PersonIcon from '/public/Person.png';

const tags = [
  { id: 'tag1', image: MicIcon, title: '통역 단기 인력' },
  { id: 'tag2', image: PageIcon, title: '번역 단기 인력' },
  { id: 'tag3', image: LensIcon, title: '해외 시장 조사' },
  { id: 'tag4', image: PersonIcon, title: '외국인 인턴' },
];

export default function Tags() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tagsRef = useRef<React.RefObject<HTMLDivElement>[]>(
    tags.map(() => React.createRef<HTMLDivElement>()),
  );

  useEffect(() => {
    const cycleTags = () => {
      const currentIndex = activeIndex;
      const nextIndex = (activeIndex + 1) % tags.length;

      gsap.to(tagsRef.current[currentIndex]?.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        onComplete: () => {
          gsap.set(tagsRef.current[currentIndex]?.current, { y: 100 });
        },
      });

      gsap.to(tagsRef.current[nextIndex]?.current, {
        y: 0,
        opacity: 1,
        duration: 1,
      });
    };

    cycleTags();
  }, [activeIndex]);

  useEffect(() => {
    if (!tagsRef.current) return;

    tagsRef.current.forEach((tag) => {
      gsap.to(tag.current, {
        y: 100,
        duration: 0,
      });
    });

    const interval = setInterval(
      () => setActiveIndex((pre) => (pre + 1) % tags.length),
      2000,
    );

    return () => clearInterval(interval);
  }, [tagsRef.current]);

  return (
    <div
      className="relative w-full h-full rounded-[200px] overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(9,9,121,0) 35%, rgba(6,71,162,0) 65%, rgba(255,255,255,1) 100%)',
      }}
    >
      {tags.map((tag, index) => (
        <div
          ref={tagsRef.current[index]}
          key={tag.id}
          className="absolute w-full opacity-0 top-1/2 -translate-y-1/2"
        >
          <Tag image={tag.image} title={tag.title} />
        </div>
      ))}
    </div>
  );
}

interface TagProps {
  image: StaticImageData;
  title: string;
}

function Tag({ image, title }: TagProps) {
  return (
    <div className="flex justify-center items-center gap-3 font-bold p-2">
      <div className="relative w-20 h-20">
        <Image src={image} fill sizes="80px" alt={`${title}-image`} />
      </div>
      <span className="text-4xl lg:text-6xl">{title}</span>
    </div>
  );
}
