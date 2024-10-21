import Link from "../components/Link";

export default function LocalHome() {
    return (
        <>
            <h1>Home!!! Desde LocalComponent</h1>
            <Link href="/about" context="test">Ir a <b>About</b> en local</Link>
        </>
    )
}