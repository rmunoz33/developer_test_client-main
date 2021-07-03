import React from "react";
import { useParams } from "react-router-dom";
import { getPerson } from "../api/getPerson";
import Person from "../components/Person";
import { Person as PersonType } from "../types/Person";

export default function PersonPage() {
  const [person, setPerson] = React.useState<PersonType | null>(null);
  let { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const fetch = async () => {
      const response = await getPerson(parseInt(id));
      if (response) {
        setPerson(response);
      }
    };
    fetch();
  }, []);

  if (!person) {
    return <h1>Loading...</h1>;
  }

  return <Person person={person} />;
}
