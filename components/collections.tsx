import CollectionCard from "./collectionCard";

const collections = [
  {
    category: "CLASSIC",
    title: "Executive Navy",
    description:
      "Designed for professionals who appreciate timeless elegance.",
    image:
      "/images/navy.jpg",
    search: "man navy suit luxury studio portrait",
    glow: "#223A5E",
  },
  {
    category: "SIGNATURE",
    title: "Midnight Black",
    description:
      "Modern tailoring with uncompromising craftsmanship.",
    image:
      "/images/crafts.jpg",
    search: "black suit editorial fashion man",
    glow: "#4B4B4B",
  },
  {
    category: "CEREMONY",
    title: "Emerald Prestige",
    description:
      "A statement piece for unforgettable occasions.",
    image:
      "/images/green.jpg",
    search: "green suit luxury fashion man",
    glow: "#0F5132",
  },
  {
    category: "LIMITED",
    title: "Ivory Edition",
    description:
      "Reserved for moments worth remembering.",
    image:
      "/images/white-tux.jpg",
    search: "white tuxedo editorial fashion",
    glow: "#D8C08A",
  },
];

export default function Collection() {
  return (
    <section className="relative h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div
          id="collection-track"
          className="flex gap-10 px-24"
        >
          {collections.map((item) => (
            <CollectionCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}