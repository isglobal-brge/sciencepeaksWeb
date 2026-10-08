import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SciencePeaks | Activity, fatigue and recovery",
    short_name: "SciencePeaks",
    description:
      "Wearable activity, overnight physiology and personal context for fatigue and recovery follow-up.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5fafb",
    theme_color: "#087f8b",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    categories: ["health", "fitness", "medical", "lifestyle"],
    lang: "en",
    dir: "ltr",
  };
}
