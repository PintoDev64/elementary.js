import Link from "../library/components/Link";

export default function XDHome() {
    return (
        <>
            <h1>Home!!! Desde LocalComponent</h1>
            <Link href="/about" context="XD">Ir a <b>About</b> en local</Link>
        </>
    )
}