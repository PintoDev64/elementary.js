import { AnchorHTMLAttributes } from "react"

// Hooks
import useNavigation from "../hooks/useNavigation";

type LinkProps = {
    context?: string;
    target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
    href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>

/**
 * Valida si el evento de click del enlace tiene cambios/variaciones en su comportamiento
 */
function handleSpecialEvents(event: EventDefinitions.MouseEvent<HTMLAnchorElement>, target: LinkProps['target']): boolean {
    const isMainEvent = event.button === 0;
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === '_self';

    return isMainEvent && isManageableEvent && !isModifiedEvent
}

/**
 * Crea un Anchor (a) que navega entre las diferentes paginas que hayas creado
 */
export default function Link({ target, href, context, ...props }: LinkProps) {
    const { navigate } = useNavigation()

    function handleClick(event: EventDefinitions.MouseEvent<HTMLAnchorElement>) {
        if (handleSpecialEvents(event, target)) {
            event.preventDefault();
            navigate(href, context)
        }
    }

    return <a onClick={handleClick} href={href} target={target} {...props} />
}