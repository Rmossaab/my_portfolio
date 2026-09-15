import { ImageResponse } from "next/og";

export const alt = "Mossaab Ratby — Cybersecurity and Cloud Computing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#090d12",
        color: "#ecf0f3",
        padding: "80px",
        borderBottom: "12px solid #b5ee8b",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#b5ee8b",
          marginBottom: 30,
        }}
      >
        CYBERSECURITY & CLOUD COMPUTING
      </div>
      <div style={{ display: "flex", fontSize: 78, fontWeight: 700 }}>
        Mossaab Ratby
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 29,
          color: "#a7b3c0",
          marginTop: 28,
        }}
      >
        Cloud security. Threat detection. SOC automation.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 22,
          color: "#b5ee8b",
          marginTop: 60,
        }}
      >
        ENSAM Casablanca · PFE internship from January 2027
      </div>
    </div>,
    size,
  );
}
