import { Play } from 'lucide-react';
import styles from './VideoCard.module.css';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

const VideoCard = ({ title, description, thumbnailUrl, videoUrl }: VideoCardProps) => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.videoContainer}>
        <img
          src={thumbnailUrl}
          alt={title}
          className={styles.thumbnail}
        />
        <div className={styles.playButton}>
          <Play size={32} />
        </div>
        <div className={styles.videoBadge}>
          <span>YouTube Short</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <a 
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.watchButton}
        >
          İzle
        </a>
      </div>
    </div>
  );
};

export default VideoCard;