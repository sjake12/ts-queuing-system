import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { SidebarTrigger } from '@/Components/ui/sidebar';
import { Separator } from "@/Components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/Components/ui/breadcrumb';
export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800" >
                    Dashboard
                </h2 >
            }
        >
            <Head title="Dashboard" />

            <header
                className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12" >
                <div className="flex items-center gap-2 px-4" >
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb >
                        <BreadcrumbList >
                            <BreadcrumbItem className="hidden md:block" >
                                <BreadcrumbLink href="#" >
                                    Building Your Application
                                </BreadcrumbLink >
                            </BreadcrumbItem >
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem >
                                <BreadcrumbPage >Data Fetching</BreadcrumbPage >
                            </BreadcrumbItem >
                        </BreadcrumbList >
                    </Breadcrumb >
                </div >
            </header >
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0" >
                You're logged in!
            </div >
        </AuthenticatedLayout >
    );
}
