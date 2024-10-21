import useLocation from "../library/hooks/useLocation"

export default function Location() {
    const { location } = useLocation()

    return (
        <>
            {location()}
        </>
    )
}