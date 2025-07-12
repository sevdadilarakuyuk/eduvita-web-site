import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, GraduationCap, Award, Target, CheckCircle, Star } from 'lucide-react';
import { coaches } from '../../data/coaches';
import styles from './page.module.css';

interface CoachDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoachDetail({ params }: CoachDetailPageProps) {
  const { id } = await params;
  const coach = coaches.find(c => c.id === id);

  if (!coach) {
    notFound();
  }

  // Örnek fotoğraf URL'leri - her koç için farklı
  const photoUrls = [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop',
    'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop'
  ];

  // Koç ID'sine göre fotoğraf seçimi
  const getPhotoIndex = (id: string) => {
    return Math.abs(id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % photoUrls.length;
  };

  return (
    <div className={styles.coachDetailPage}>
      {/* Back Button */}
      <div className="container">
        <Link href="/egitim-koclari/" className={styles.backButton}>
          <ArrowLeft size={20} />
          <span>Eğitim Koçlarımız</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.coachImage}>
              <Image
                src={photoUrls[getPhotoIndex(coach.id)]}
                alt={coach.name}
                width={400}
                height={500}
                className={styles.heroImg}
              />
              <div className={styles.rankBadge}>
                <Award size={20} />
                <span>{coach.aytType} {coach.rank}</span>
              </div>
            </div>
            
            <div className={styles.coachInfo}>
              <h1 className={styles.coachName}>{coach.name}</h1>
              
              <div className={styles.universityInfo}>
                <GraduationCap size={24} />
                <div>
                  <div className={styles.universityName}>{coach.university}</div>
                  <div className={styles.department}>{coach.department}</div>
                </div>
              </div>
              
              <div className={styles.achievementInfo}>
                <div className={styles.aytType}>{coach.aytType}</div>
                <div className={styles.rankInfo}>
                  <Star size={18} />
                  <span>{coach.year} {coach.aytType} {coach.rank}</span>
                </div>
              </div>
              
              <p className={styles.coachBio}>{coach.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className={styles.approachSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Eğitim Yaklaşımım</h2>
          </div>
          <div className={styles.approachContent}>
            <p className={styles.approachText}>{coach.teachingApproach}</p>
          </div>
        </div>
      </section>

      {/* Goals and Focus Areas */}
      <section className={styles.detailsSection}>
        <div className="container">
          <div className={styles.detailsGrid}>
            <div className={styles.detailCard}>
              <div className={styles.detailHeader}>
                <Target size={24} />
                <h3 className={styles.detailTitle}>Hedeflerim</h3>
              </div>
              <ul className={styles.detailList}>
                {coach.goals.map((goal, index) => (
                  <li key={index} className={styles.detailItem}>
                    <CheckCircle size={16} />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.detailCard}>
              <div className={styles.detailHeader}>
                <Star size={24} />
                <h3 className={styles.detailTitle}>Odak Alanlarım</h3>
              </div>
              <div className={styles.focusAreas}>
                {coach.focusAreas.map((area, index) => (
                  <span key={index} className={styles.focusArea}>{area}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={styles.achievementsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Başarılarım</h2>
          </div>
          <div className={styles.achievementsList}>
            {coach.achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementItem}>
                <Award size={20} />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Benimle Çalışmak İster misin?</h2>
            <p className={styles.ctaDescription}>
              Hedeflerine ulaşmak için birlikte çalışalım. Sana özel hazırladığım 
              program ile başarıya giden yolda yanında olacağım.
            </p>
            <Link href="/iletisim/" className={styles.ctaButton}>
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return coaches.map((coach) => ({
    id: coach.id,
  }));
}