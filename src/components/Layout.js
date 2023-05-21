import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="bg-white">
                {children}
            </div>
            <Footer />
        </>
    );
}
