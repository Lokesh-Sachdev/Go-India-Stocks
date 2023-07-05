import FooterMobNav from '@components/FooterMobNav';
import Nav from '@components/Nav';
import Sidebar from '@components/Sidebar';
import '@styles/globals.css';

export const metadata = {
  title: 'GoIndiaStocks',
  description: 'Bringing Indian Corporates to Investors',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradiant" />
        </div>

        <main className="app">
          <Nav/>
          <Sidebar/>
          {children}
          <FooterMobNav/>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
