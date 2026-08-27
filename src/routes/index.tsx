import { createFileRoute } from "@tanstack/react-router";
import FlowpathHero from "@/components/FlowpathHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flowpath — Bridge the gaps. Ditch the grindwork." },
      {
        name: "description",
        content:
          "Flowpath unifies your complete wellness tools so your team spends less time plugging gaps and more on real progress.",
      },
      { property: "og:title", content: "Flowpath — Bridge the gaps. Ditch the grindwork." },
      {
        property: "og:description",
        content:
          "Flowpath unifies your complete wellness tools so your team spends less time plugging gaps and more on real progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <FlowpathHero />;
}
