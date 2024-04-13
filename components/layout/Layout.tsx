import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className='main-layout'>
            <Header  />
            <main className='main-layout-main'>{children}</main>
            <Footer  />
        </div>
    );
}
