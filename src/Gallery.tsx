import {CHARACTERS} from "./rickandmorty/Characters.ts";
import CharacterView from "./CharacterView.tsx";
import "./Gallery.css"

export default function Gallery(){
    const characters = CHARACTERS;

    return <div className={"gallery"}>
        {characters.map(character => {
        return <CharacterView character={character} key={character.id}/>
        })}
            </div>;

}