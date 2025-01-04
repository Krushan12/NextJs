
import { H2 } from "./UI/Typography";
import Card from "./Card";

const Cards = ({ sectionTitle, posts }) => {
  return (
    <section className="mb-16">
      <H2>{sectionTitle}</H2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} title={p.title} date={p.date} slug={p.slug} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
