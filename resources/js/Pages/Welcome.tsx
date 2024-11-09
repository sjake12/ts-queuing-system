import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {

    return (
        <AuthenticatedLayout>
            <Head title="Welcome" />


        </AuthenticatedLayout>
    );
}
