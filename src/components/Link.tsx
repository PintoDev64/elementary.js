import { AnchorHTMLAttributes } from "react"

// Hooks
import useGlobalNavigation from "../hooks/useGlobalNavigation";

type LinkProps = {
    target?: "_self" | "_blank" | "_parent" | "_top";
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>


function handleSpecialEvents(event: Global_MouseEvent<HTMLAnchorElement>, target: LinkProps['target']): boolean {
    const isMainEvent = event.button === 0;
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === '_self';

    return isMainEvent && isManageableEvent && !isModifiedEvent
}

/**
 * Crea un Anchor (a) que navega entre las diferentes paginas que hayas creado
 */
export default function Link({ target, href, ...props }: LinkProps) {

    const { navigate } = useGlobalNavigation()

    function handleClick(event: Global_MouseEvent<HTMLAnchorElement>) {
        if (handleSpecialEvents(event, target)) {
            event.preventDefault();
            navigate(href)
        }
    }

    return <a onClick={handleClick} href={href} target={target} {...props} />
}