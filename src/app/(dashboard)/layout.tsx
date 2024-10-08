import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="h-screen flex">
        <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-2">
                <Image src="/icons/logo.png" alt="logo" width={32} height={32}/>
                <span className="hidden lg:block font-bold">Admin Dashboard</span>
            </Link>
            <Menu />
        </div>
        <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll flex flex-col">
            <Navbar />
            {children}
        </div>
    </div>;
}
