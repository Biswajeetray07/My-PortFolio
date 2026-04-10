import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  liveDemo?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  liveDemo,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col z-[20]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-[250px] object-cover"
      />

      <div className="relative p-4 flex flex-col flex-grow">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 flex-grow">{description}</p>
        
        <div className="mt-4 flex items-center justify-between gap-4">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 text-center py-2 rounded-lg border border-[#7042f88b] text-white hover:bg-[#7042f88b] transition"
          >
            GitHub
          </Link>
          {liveDemo && (
            <Link
              href={liveDemo}
              target="_blank"
              rel="noreferrer noopener"
              className="flex-1 text-center py-2 rounded-lg bg-[#7042f88b] text-white hover:bg-[#7042f8] transition border border-[#7042f88b]"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
