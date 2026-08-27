import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05070B",
          color: "#F7F9FF",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            background: "linear-gradient(135deg,#2F86FF,#8FBBFF)",
            transform: "rotate(45deg)",
            borderRadius: 4,
            marginBottom: 36,
          }}
        />
        <div style={{ fontSize: 28, letterSpacing: "0.28em", fontWeight: 600, marginBottom: 28 }}>
          DCRBN
        </div>
        <div style={{ fontSize: 58, lineHeight: 1.08, fontWeight: 500, maxWidth: 900 }}>
          Speed to Scale for AI, Blockchain, and Quantum Founders
        </div>
      </div>
    ),
    size
  );
}
