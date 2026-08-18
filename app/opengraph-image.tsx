import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const emblem = readFileSync(join(process.cwd(), "public/logo.png")).toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F3F1EE",
          padding: "80px",
        }}
      >
        <img
          src={`data:image/png;base64,${emblem}`}
          width={620}
          height={175}
          alt=""
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            marginTop: 56,
            fontSize: 30,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#C77B4E",
          }}
        >
          Byggkonsult · Oviken, Jämtland
        </div>
      </div>
    ),
    { ...size },
  );
}
