import { ImageResponse } from "next/og";

export const alt = "Agent Relations Protocol — The open protocol for AI agents on the internet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Radial fade overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 0%, #0a0a0a 85%)",
            display: "flex",
          }}
        />

        {/* Header: logo + version badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#fafafa",
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#fafafa",
              }}
            />
            Agent Relations Protocol
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #27272a",
              color: "#a1a1aa",
              fontSize: 20,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#34d399",
              }}
            />
            Editor&apos;s Draft v0.5
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              color: "#fafafa",
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>The open protocol</span>
            <span style={{ color: "#71717a" }}>for AI agents on the internet.</span>
          </div>
        </div>

        {/* Footer: examples + URL */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: 22,
              color: "#a1a1aa",
            }}
          >
            <div style={{ display: "flex" }}>support@agents.clerkboard.com</div>
            <div style={{ display: "flex" }}>shop@agents.kiuki.com</div>
            <div style={{ display: "flex" }}>orders@agents.stripe.com</div>
          </div>
          <div
            style={{
              display: "flex",
              color: "#fafafa",
              fontSize: 26,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            agentrelationsprotocol.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
