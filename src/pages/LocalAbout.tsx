import Link from "../components/Link";

export default function LocalAbout() {
    return (
        <>
            <h1>About!!! Desde LocalComponent</h1>
            <Link href="/" context="test">Ir a <b>About</b> en local</Link>
        </>
    )
}