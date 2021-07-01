import React from 'react'
import { useParams } from "react-router-dom";
import { fetchJson } from '../api';
import Person from '../components/Person';
import { PersonType } from '../types';

type Props = {}

export default function PersonPage(props: Props) {
    const [person, setPerson] = React.useState<PersonType | null>(null)
    let { id } = useParams<{ id: string }>();
    console.log({ id })

    React.useEffect(() => {
        console.log('getting person', id)
        fetchJson<PersonType>(`people/${id}`)
            .then(response => setPerson(response))
    }, [id]);

    console.log(person)
    if (!person) {
        return <h1>Loading...</h1>
    }

    return <Person person={person} />
}