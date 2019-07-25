import React from 'react';
import Card from '../Card/Card';

export default function CardList ({ players })  {
  return (
    <div>
      { 
        players && players.map((player, i) => {
          return (
            <Card
              key={i}
              id={player.id}
              name={player.name}
              position={player.position}
              dateOfBirth={player.age}
              />
          );
        })
      }
    </div>
  );
}

