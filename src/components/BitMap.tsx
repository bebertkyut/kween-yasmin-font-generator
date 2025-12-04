import Image from "next/image";
import { getGlyphSrc } from "../utils/charMap";

type BitMapProps = {
  text: string;
  size?: number;
  gap?: number;
  letterGap?: number;
  spaceGap?: number;
  lineGap?: number;
};

export default function BitMap({
  text,
  size = 120,
  gap = 12,
  letterGap = 4,
  spaceGap,
  lineGap = 12,   
}: BitMapProps) {
  const words = (text || "").trim().split(/\s+/).filter(Boolean);

  const wordGap = spaceGap ?? gap;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        marginLeft: -wordGap,
        rowGap: lineGap,
      }}
    >
      {words.map((word, wIdx) => (
        <span
          key={`w-${wIdx}`}
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            gap: letterGap,
            maxWidth: "100%",
            marginLeft: wIdx === 0 ? 0 : wordGap,
          }}
        >
          {Array.from(word).map((ch, cIdx) => {
            const src = getGlyphSrc(ch);
            if (!src) {
              return <span key={`u-${wIdx}-${cIdx}`} style={{ width: letterGap }} />;
            }
            return (
              <Image
                key={`c-${wIdx}-${cIdx}`}
                src={src}
                alt={ch}
                width={size}
                height={size}
                style={{ height: size, width: "auto", display: "block" }}
                unoptimized
                priority={false}
              />
            );
          })}
        </span>
      ))}
    </div>
  );
}