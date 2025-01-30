import Image from "next/image";
import {
  AstroLogo,
  JSLogo,
  NextjsLogo,
  ReactLogo,
  RemixLogo,
  SvelteLogo,
  TSLogo,
  TailwindLogo,
  VueLogo,
} from "./logox";

import "./page.css";

export default function Home() {
  const logos = [
    <AstroLogo />,
    <JSLogo />,
    <NextjsLogo />,
    <ReactLogo />,
    <RemixLogo />,
    <SvelteLogo />,
    <TSLogo />,
    <TailwindLogo />,
    <VueLogo />,
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"> */}
      <div className="marquee fadeout-horizontal" style={{ "--num-items": 9 }}>
        <div className="marquee-track">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="marquee-item"
              style={{ "--item-position": index }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
