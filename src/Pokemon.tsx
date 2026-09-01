import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

function viewProfile(name: string) {
  alert(`Abrir el perfil de ${name}`);
}

export default function Pokemon() {
  const [pokemones, setPokemones] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPokemones() {
      const result = [];

      for (let i = 1; i <= 9; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();

        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
        const speciesData = await speciesResponse.json();

        result.push({
          id: i,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
          types: data.types.map((t: any) => t.type.name).join(", "),
          generation: speciesData.generation.name
        });
      }

      setPokemones(result);
    }

    fetchPokemones();
  }, []);

  return (
    <Stack spacing={2} sx={{ padding: 3 }}>
      <h1>Pokemones</h1>

      {pokemones.map((pokemones) => (
        <Stack
          key={pokemones.id}
          direction="row"
          spacing={2}
          sx={{
            border: "1px solid #cccccc",
            borderRadius: 2,
            padding: 2,
            alignItems: "center",
          }}
        >
          <Avatar src={pokemones.image} alt={pokemones.name} />

          <div>
            <strong>{pokemones.name}</strong>

            {pokemones.types !== undefined && (
              <p>Type: {pokemones.types}</p>
            )}
          </div>

          <Button
            variant="outlined"
            onClick={() => viewProfile(pokemones.name)}
          >
            Ver perfil
          </Button>
        </Stack>
      ))}
    </Stack>
  );
}