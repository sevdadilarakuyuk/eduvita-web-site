import type { Metadata } from 'next';
import { ThemeProvider } from './providers/theme-provider';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'EduVita - Eğitim Koçluğu',
  description: 'AYT ve TYT sınavlarında başarıya ulaşmanız için profesyonel eğitim koçluğu hizmeti.',
  keywords: 'eğitim koçluğu, AYT, TYT, üniversite sınavı, özel ders',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <TopBar />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}