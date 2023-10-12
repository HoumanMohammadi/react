import {Character} from "./rickandmorty/Characters.ts";
import "./CharacterView.css"

type CharacterViewProps={
    character: Character
}

export default function CharacterView(props: CharacterViewProps){

    return (
        <div className="character-view">
            <div className="character-name">{props.character.name}</div>
            <br/>
            <img src={props.character.image} alt={props.character.name} />
        </div>
    );

}