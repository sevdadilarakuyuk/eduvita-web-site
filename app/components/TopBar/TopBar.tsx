import { Instagram, MessageCircle } from 'lucide-react';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className="container">
        <div className={styles.topBarContent}>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/eduvitakocluk/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <Instagram size={18} className={styles.instagramIcon} />
              <span>@eduvitakocluk</span>
            </a>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <MessageCircle size={18} className={styles.whatsappIcon} />
              <span>+90 555 123 45 67</span>
            </a>
            <a
              href="https://wa.me/905559876543"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <MessageCircle size={18} className={styles.whatsappIcon} />
              <span>+90 555 987 65 43</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;