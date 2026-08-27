import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070B",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            background: "linear-gradient(135deg,#2F86FF,#8FBBFF)",
            transform: "rotate(45deg)",
            borderRadius: 5,
          }}
        />
      </div>
    ),
    size
  );
}
