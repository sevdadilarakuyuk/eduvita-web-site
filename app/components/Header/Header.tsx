'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Hakkımızda', href: '/hakkimizda/' },
    { name: 'Koçluk Süreci', href: '/kocluk-sureci/' },
    { name: 'Eğitim Koçlarımız', href: '/egitim-koclari/' },
    { name: 'Ücretlerimiz', href: '/ucretlerimiz/' },
    { name: 'İletişim', href: '/iletisim/' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <GraduationCap className={styles.logoIcon} />
            <span className={styles.logoText}>EduVita</span>
          </Link>

          <nav className={styles.desktopNav}>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={styles.navLink}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className={styles.headerActions}>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={styles.themeButton}
                aria-label="Tema değiştir"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menü"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className={styles.mobileNav}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;