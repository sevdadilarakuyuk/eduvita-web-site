import CoachCard from '../components/CoachCard/CoachCard';
import { coaches } from '../data/coaches';
import styles from './page.module.css';

export default function Coaches() {
  const sayisalCoaches = coaches.filter(coach => coach.aytType === 'Sayısal');
  const sozelCoaches = coaches.filter(coach => coach.aytType === 'Sözel');
  const esitAgirlikCoaches = coaches.filter(coach => coach.aytType === 'Eşit Ağırlık');

  return (
    <div className={styles.coachesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Eğitim Koçlarımız</h1>
            <p className={styles.heroDescription}>
              Deneyimli ve başarılı eğitim koçlarımız, kendi alanlarında Türkiye derecesi yapmış 
              uzmanlar olarak sizlere rehberlik ediyor. Her biri kendi başarı hikayesiyle 
              öğrencilerimize ilham veriyor.
            </p>
          </div>
        </div>
      </section>

      {/* Sayısal Coaches */}
      <section className={styles.categorySection}>
        <div className="container">
          <div className={styles.categoryHeader}>
            <h2 className={styles.categoryTitle}>Sayısal Koçlarımız</h2>
            <p className={styles.categoryDescription}>
              Matematik, Fizik ve Kimya alanlarında uzman koçlarımız
            </p>
          </div>
          <div className={styles.coachesGrid}>
            {sayisalCoaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>
        </div>
      </section>

        {/* Eşit Ağırlık Coaches */}
        <section className={styles.categorySection}>
        <div className="container">
          <div className={styles.categoryHeader}>
            <h2 className={styles.categoryTitle}>Eşit Ağırlık Koçlarımız</h2>
            <p className={styles.categoryDescription}>
              Matematik ve Sosyal Bilimler dengesinde uzman koçlarımız
            </p>
          </div>
          <div className={styles.coachesGrid}>
            {esitAgirlikCoaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>
        </div>
      </section>

      {/* Sözel Coaches */}
      <section className={styles.categorySection}>
        <div className="container">
          <div className={styles.categoryHeader}>
            <h2 className={styles.categoryTitle}>Sözel Koçlarımız</h2>
            <p className={styles.categoryDescription}>
              Türkçe, Edebiyat, Tarih ve Coğrafya alanlarında uzman koçlarımız
            </p>
          </div>
          <div className={styles.coachesGrid}>
            {sozelCoaches.map((coach) => (
              <CoachCard key={coach.id} coach={coach} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}