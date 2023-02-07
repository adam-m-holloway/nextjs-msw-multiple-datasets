import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../graphql/queries';
import Image from 'next/image'

export const CharacterClient = () => {
  const [characterId, setCharacterId] = useState(2);
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: characterId,
    },
  });

  if (loading) return <div> loading...</div>;

  return (
    <div>
      You are
      {data.character && (
        <>
          <h2>{data.character.name}</h2>
          <Image src={data.character.image} alt={data.character.name} width="300" height="400" />
        </>
      )}
      <button
        onClick={() => {
          setCharacterId(3);
        }}
      >
        {" "}
        try again
      </button>
    </div>
  );
}
  
export default CharacterClient;
