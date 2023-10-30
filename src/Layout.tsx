import { ReactNode } from "react";
import NavBar from "./components/navigation/NavBar";
import TopBar from "./components/top-bar/TopBar";
import Footer from "./components/footer/Footer";
import ScrollButton from "./components/scroll-button/ScrollButton";
import WhatsappButton from "./components/button/WhatsappButton";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="relative">
        <TopBar />
        <nav className=" w-full " >
            <NavBar />
            <div className=" w-full border-b-2 border-slate-100"></div>
        </nav>
        <main>
            {children}
        </main>
        <ScrollButton />
        <Footer />
        <WhatsappButton />
    </div>
  )
}

export default Layout