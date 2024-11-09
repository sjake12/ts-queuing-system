import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className="[&>svg]:size-4 [&>svg]:shrink-0 flex gap-2"
        >
            {children}
        </Link>
    );
}
