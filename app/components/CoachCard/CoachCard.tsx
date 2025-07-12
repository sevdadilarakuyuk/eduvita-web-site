import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Award } from 'lucide-react';
import type { Coach } from '../../data/coaches.ts';
import styles from './CoachCard.module.css';

interface CoachCardProps {
  coach: Coach;
}

const CoachCard = ({ coach }: CoachCardProps) => {
  // Örnek fotoğraf URL'leri - her koç için farklı
  const photoUrls = [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
    'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop'
  ];

  // Koç ID'sine göre fotoğraf seçimi
  const getPhotoIndex = (id: string) => {
    return Math.abs(id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % photoUrls.length;
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={photoUrls[getPhotoIndex(coach.id)]}
          alt={coach.name}
          width={300}
          height={400}
          className={styles.image}
        />
        <div className={styles.rankBadge}>
          <Award size={16} />
          <span>{coach.aytType} {coach.rank}</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{coach.name}</h3>
        <div className={styles.university}>
          <GraduationCap size={18} />
          <div>
            <div className={styles.universityName}>{coach.university}</div>
            <div className={styles.department}>{coach.department}</div>
          </div>
        </div>
        
        <div className={styles.aytInfo}>
          <span className={styles.aytType}>{coach.aytType}</span>
          <span className={styles.rank}>{coach.year} {coach.aytType} {coach.rank}</span>
        </div>
        
        <p className={styles.bio}>{coach.bio.substring(0, 120)}...</p>
        
        <Link href={`/egitim-koclari/${coach.id}/`} className={styles.viewButton}>
          Profile Git
        </Link>
      </div>
    </div>
  );
};

export default CoachCard;