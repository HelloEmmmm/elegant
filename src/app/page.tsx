import LoginDialog from "@/components/LoginDialog";
import Image from "next/image";
import Header from "@/components/Home/Header";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('/images/bg.jpg')] bg-left bg-cover overflow-hidden">
            <Header />
            <LoginDialog/>
        </main>
    );
}
