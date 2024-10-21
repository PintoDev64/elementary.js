import useLocation from "../hooks/useLocation"

export default function Location() {
    const { location } = useLocation()

    return (
        <>
            {location()}
        </>
    )
}