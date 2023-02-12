import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../graphql/queries';
import Image from 'next/image'

export const CharacterClient = () => {
  const [characterId, setCharacterId] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: characterId,
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setCharacterId(e.target.charId.value);
  }

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ border: '2px solid black', padding: 20 }}>
        <label htmlFor="charId">Character ID</label>
        <input style={{ marginLeft: 10 }} type="text" name="charId" id="charId" />
        <input type="submit" value="Submit" />
      </form>


      {data.character && (
        <>
          <h2>Name: {data.character.name}</h2>
          <p>Character ID: {characterId}</p>
          <Image src={data.character.image} alt={data.character.name} width="300" height="400" />
        </>
      )}

    </div>
  );
}
  
export default CharacterClient;
