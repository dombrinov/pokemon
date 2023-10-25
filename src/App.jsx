import { useEffect, useState } from "react";
import "./App.css";
import { Cards } from "./components/Cards/Cards";
import { Container } from "./components/Container/Container";
import { Chip, Stack } from "@mui/material";

function App() {
  const PIKA = "pikachu";
  const [poke, setPoke] = useState(
    JSON.parse(localStorage.getItem(PIKA)) ?? []
  );
  const [str, setStr] = useState("bulbasaur");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${str}`)
      .then((res) => res.json())
      .then((poke) => setPoke(poke));
    localStorage.setItem(PIKA, JSON.stringify(poke));
  }, [str]);

  const pokemons = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charizard",
    "weedle",
    "pidgeot",
    "squirtle",
    "rattata",
    "pikachu",
  ];

  const buttonHandler = (el) => {
    return setStr(el);
  };
  console.log(JSON.parse(JSON.stringify(poke)));
  return (
    <>
      <Container>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
          alignItems="center"
          sx={{ height: 100 }}
        >
          {pokemons.map((el, i) => {
            return (
              <Chip
                key={i}
                label={el}
                color="primary"
                onClick={() => buttonHandler(el)}
              />
            );
          })}
        </Stack>
        <Cards
          name={poke.name}
          img={poke.sprites.front_default}
          height={poke.height}
          id={poke.id}
          attack={poke.stats[1].base_stat}
        />
      </Container>
    </>
  );
}

export default App;
