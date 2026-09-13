import { ImageResponse } from "next/og";

export const alt = "AI Application Engineer portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: 64,
        color: "#11110f",
        background: "#f2f0e9",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "32px 0",
          borderTop: "2px solid #11110f",
          borderBottom: "2px solid #11110f",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          <span>JUN WANG</span>
          <span>PORTFOLIO / 2026</span>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: -6,
          }}
        >
          Reliable AI systems.
          <br />
          Runtime to product.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
          }}
        >
          <span>AI APPLICATION + SOFTWARE ENGINEER</span>
          <span
            style={{
              width: 18,
              height: 18,
              background: "#c8ff33",
              borderRadius: 999,
            }}
          />
        </div>
      </div>
    </div>,
    size,
  );
}
