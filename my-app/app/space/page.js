import { User } from "react-feather";

import { H1, H2, P } from "@/components/UI/Typography";

import { books } from "@/constants";

const SpacePage = async () => {
 

  return (
    <div>
      <section className="mb-14">
        <H1>My Space</H1>
        <P>You will find out what I am listening and reading now a days.</P>
      </section>
      <div className="mb-14">
        <H2>My Recent Reads</H2>
        <div>
          <ul className="">
            {books.map((book, i) => (
              <li className="flex gap-2 mb-2" key={book.name}>
                <div className="opacity-70 h-full">
                  <span>{i + 1}. </span>
                </div>
                <div>
                  <div className="opacity-90" title={book.name}>
                    {book.name}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-light opacity-70">
                    <User size={16} /> {book.authore}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      
    </div>
  );
};

export default SpacePage;
