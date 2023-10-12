import './App.css'
import HelloWorld from "./HelloWorld.tsx";
import Gallery from "./Gallery.tsx";

// .ts = (Reine) Logik rein
// .tsx = Template = Eine Datei wo Dinge zu sehen sind (im Browser)
// Diese Funktion ist eine Komponente
export default function App() {

    // Variable soll sich nicht mehr verändern können
    const beautifulNames: string[] = [
        "Jaro",
        "Dirk",
        "Mathias",
        "Tobi",
        "Ziyang",
        "Sergej"
    ]

    // Map = Benutzt Daten aus Liste und gibt neue Elemente/ Liste zurück
    // => fat arrow
    const nameComponents =
        beautifulNames.map(name => {
            return <HelloWorld name={name}/>
        })

    return (
        <>
            <div>
                <Gallery />
            </div>
        </>
    )
}