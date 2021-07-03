import React from "react";
import { useParams } from "react-router-dom";
import { getPerson } from "../api/getPerson";
import Person from "../components/Person";
import { Person as PersonType } from "../types/Person";

export default function PersonPage() {
  const [person, setPerson] = React.useState<PersonType | null>(null);
  let { id } = useParams<{ id: string }>();
  console.log({ id });

  React.useEffect(() => {
    getPerson(parseInt(id)).then((response) => {
      if (response) {
        setPerson(response);
      }
    });
  }, [id]);

  console.log("PersonPage", person);
  if (!person) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {(person.fullFilms || []).map((f) => (
        <h1>f.title</h1>
      ))}
      <Person person={person} />
    </div>
  );
}
