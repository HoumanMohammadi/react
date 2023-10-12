type HelloWorldProps = {
    name: string
}

// Muss exportiert werden
// props = properties = eigenschaften
export default function HelloWorld(props: HelloWorldProps) {

    return (
        <>
            Hallo {props.name}!
        </>
    )
}