import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#12110f",
          color: "#f4f1ea",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#e07a3d",
          }}
        >
          Portfólio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -4 }}>Victor</div>
          <div style={{ fontSize: 32, color: "#b7b0a4", marginTop: 12 }}>
            Desenvolvedor de Software
          </div>
        </div>
      </div>
    ),
    size,
  );
}
