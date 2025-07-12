import Link from 'next/link';
import { GraduationCap, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <Link href="/" className={styles.footerLogo}>
              <GraduationCap className={styles.logoIcon} />
              <span className={styles.logoText}>EduVita</span>
            </Link>
            <p className={styles.footerDescription}>
              AYT ve TYT sınavlarında başarıya ulaşmanız için profesyonel eğitim koçluğu hizmeti sunuyoruz.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Sayfalar</h3>
            <nav className={styles.footerNav}>
              <Link href="/hakkimizda/" className={styles.footerLink}>Hakkımızda</Link>
              <Link href="/kocluk-sureci/" className={styles.footerLink}>Koçluk Süreci</Link>
              <Link href="/egitim-koclari/" className={styles.footerLink}>Eğitim Koçlarımız</Link>
              <Link href="/ucretlerimiz/" className={styles.footerLink}>Ücretlerimiz</Link>
              <Link href="/iletisim/" className={styles.footerLink}>İletişim</Link>
            </nav>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>İletişim</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail size={16} />
                <span>info@eduvita.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <span>+90 555 123 45 67</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <span>+90 555 987 65 43</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Sosyal Medya</h3>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.instagram.com/eduvitakocluk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Instagram size={20} />
                <span>@eduvitakocluk</span>
              </a>
            </div>
            
            <div className={styles.developerSection}>
              <h4 className={styles.developerTitle}>Yapımcı</h4>
              <div className={styles.developerInfo}>
                <span>@ipikuka</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 EduVita. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;