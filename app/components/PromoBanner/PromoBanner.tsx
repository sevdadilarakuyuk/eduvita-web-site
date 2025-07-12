import { Star, ArrowRight, Clock } from 'lucide-react';
import styles from './PromoBanner.module.css';

const PromoBanner = () => {
  return (
    <div className={styles.promoBanner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerIcon}>
          <Star size={32} />
        </div>
        
        <div className={styles.bannerText}>
          <h3 className={styles.bannerTitle}>Özel İndirim Fırsatı!</h3>
          <p className={styles.bannerDescription}>
            Kısa süre için tüm paketlerde %17 indirim. Hemen başlayın!
          </p>
        </div>
        
        <div className={styles.bannerActions}>
          <div className={styles.countdown}>
            <Clock size={16} />
            <span>Sınırlı Süre</span>
          </div>
          <a href="/ucretlerimiz/" className={styles.bannerButton}>
            Paketleri Gör
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;