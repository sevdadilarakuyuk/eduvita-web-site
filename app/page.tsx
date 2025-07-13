import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Target, Users, Trophy, Play, Heart, Award, CheckCircle, BookOpen, Clock, Shield, Zap, GraduationCap, Star, UserPlus } from 'lucide-react';
import CoachCard from './components/CoachCard/CoachCard';
import VideoCard from './components/VideoCard/VideoCard';
import PromoBanner from './components/PromoBanner/PromoBanner';
import { founderCoaches } from './data/coaches.ts';
import styles from './page.module.css';

export default function Home() {
  const instagramVideos = [
    'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=300&h=500&fit=crop',
    'https://images.pexels.com/photos/5212346/pexels-photo-5212346.jpeg?auto=compress&cs=tinysrgb&w=300&h=500&fit=crop',
    'https://images.pexels.com/photos/5212347/pexels-photo-5212347.jpeg?auto=compress&cs=tinysrgb&w=300&h=500&fit=crop',
    'https://images.pexels.com/photos/5212348/pexels-photo-5212348.jpeg?auto=compress&cs=tinysrgb&w=300&h=500&fit=crop',
  ];

  const values = [
    {
      icon: Target,
      title: 'Hedef Odaklılık',
      description: 'Her öğrencinin kendine özgü hedeflerini belirlememesine ve bu hedeflere ulaşmasına yardımcı oluyoruz.'
    },
    {
      icon: Users,
      title: 'Kişiselleştirilmiş Yaklaşım',
      description: 'Her öğrencinin öğrenme tarzını anlayarak, ona en uygun eğitim metodunu geliştiriyoruz.'
    },
    {
      icon: Award,
      title: 'Kanıtlanmış Başarı',
      description: 'Deneyimli koçlarımızın kendi başarı hikayeleri, öğrencilerimize ilham kaynağı oluyor.'
    },
    {
      icon: Heart,
      title: 'Samimi Destek',
      description: 'Sadece akademik değil, motivasyon ve kişisel gelişim konularında da yanınızdayız.'
    },
    {
      icon: Shield,
      title: 'Güvenilir Süreç',
      description: 'Şeffaf ve sistematik yaklaşımımızla aileler ve öğrenciler için güvenilir bir eğitim ortamı sağlıyoruz.'
    },
    {
      icon: Zap,
      title: 'Hızlı Gelişim',
      description: 'Etkili çalışma teknikleri ve düzenli takip ile öğrencilerimizin hızla gelişim göstermesini sağlıyoruz.'
    }
  ];

  const benefits = [
    'Kişiselleştirilmiş eğitim yaklaşımı',
    'Deneyimli ve başarılı koçlar',
    'Sürekli motivasyon desteği',
    'Esnek çalışma saatleri',
    'Aile ile düzenli iletişim',
    'Kanıtlanmış başarı oranı'
  ];

  const coachBenefits = [
    'Rekabetçi ücret sistemi',
    'Esnek çalışma saatleri',
    'Profesyonel gelişim imkanları',
    'Destekleyici ekip ortamı',
    'Öğrenci başarısından pay alma',
    'Sürekli eğitim ve mentorluk'
  ];

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Başarıya <span className={styles.highlight}>bizimle</span> ulaşın
              </h1>
              <p className={styles.heroSubtitle}>
                Hedefimize beraber ulaşacağız.
              </p>
              <p className={styles.heroDescription}>
                AYT ve TYT sınavlarında başarılı olmak için deneyimli eğitim koçlarımızla birlikte çalışın. 
                Kişiselleştirilmiş rehberlik ile hedeflediğiniz üniversiteye adım atın.
              </p>
              <Link href="/iletisim/" className={styles.ctaButton}>
                Bize Ulaşın
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Eğitim koçluğu"
                width={600}
                height={400}
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <Users className={styles.statIcon} />
              <div className={styles.statNumber}>1+ yıl</div>
              <div className={styles.statLabel}>Deneyim</div>
            </div>
            <div className={styles.statItem}>
              <Trophy className={styles.statIcon} />
              <div className={styles.statNumber}>%90</div>
              <div className={styles.statLabel}>Hedef Başarı Oranı</div>
            </div>
            <div className={styles.statItem}>
              <Target className={styles.statIcon} />
              <div className={styles.statNumber}>7</div>
              <div className={styles.statLabel}>Profesyonel Eğitim Koçu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Misyon & Vizyon</h2>
            <p className={styles.sectionDescription}>
              EduVita olarak neler hedefliyoruz ve nasıl bir gelecek inşa ediyoruz
            </p>
          </div>
          <div className={styles.missionGrid}>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>
                <Target size={32} />
              </div>
              <h3 className={styles.missionTitle}>Misyonumuz</h3>
              <p className={styles.missionText}>
                AYT ve TYT sınavlarına hazırlanan öğrencilere, kişiselleştirilmiş eğitim koçluğu 
                hizmeti sunarak hedefledikleri üniversitelere yerleşmelerini sağlamak. Her öğrencinin 
                kendine özgü potansiyelini keşfetmesine ve bu potansiyeli maksimuma çıkarmasına 
                yardımcı olmak.
              </p>
            </div>
            <div className={styles.missionItem}>
              <div className={styles.missionIcon}>
                <Trophy size={32} />
              </div>
              <h3 className={styles.missionTitle}>Vizyonumuz</h3>
              <p className={styles.missionText}>
                Türkiye&apos;nin en güvenilir ve başarılı eğitim koçluğu platformu olmak. Öğrencilerin 
                sadece akademik başarılarını değil, aynı zamanda kişisel gelişimlerini de destekleyerek 
                onları geleceğe hazırlamak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Değerlerimiz</h2>
            <p className={styles.sectionDescription}>
              EduVita&apos;yı oluşturan temel değerler ve yaklaşımlarımız
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <value.icon size={32} />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Recruitment Section */}
      <section className={styles.recruitmentSection}>
        <div className="container">
          <div className={styles.recruitmentContent}>
            <div className={styles.recruitmentText}>
              <div className={styles.recruitmentBadge}>
                <UserPlus size={20} />
                <span>Yeni Koç Alımı</span>
              </div>
              <h2 className={styles.recruitmentTitle}>
                Başarılı Eğitim Koçları Arıyoruz!
              </h2>
              <p className={styles.recruitmentDescription}>
                İyi üniversitelere Türkiye derecesi yapmış, deneyimli ve motivasyonu yüksek 
                arkadaşlarımızla ekibimizi güçlendirmek istiyoruz. Size özel uygun koşullar 
                ve destekleyici bir çalışma ortamı sunuyoruz.
              </p>
              <div className={styles.recruitmentBenefits}>
                {coachBenefits.map((benefit, index) => (
                  <div key={index} className={styles.recruitmentBenefit}>
                    <CheckCircle size={18} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className={styles.recruitmentActions}>
                <Link href="/iletisim/" className={styles.recruitmentButton}>
                  Başvuru Yap
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href="https://wa.me/905551234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                >
                  WhatsApp ile İletişim
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className={styles.recruitmentImage}>
              <Image
                src="https://images.pexels.com/photos/5212360/pexels-photo-5212360.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                alt="Eğitim koçu alımı"
                width={500}
                height={600}
                className={styles.recruitmentImg}
              />
              <div className={styles.recruitmentOverlay}>
                <div className={styles.overlayContent}>
                  <GraduationCap size={40} />
                  <h3>Ekibimize Katıl</h3>
                  <p>Başarı hikayenle öğrencilere ilham ver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EduVita Section */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Neden EduVita?</h2>
          </div>
          <div className={styles.whyContent}>
            <div className={styles.whyText}>
              <p className={styles.whyDescription}>
                Koçluk sürecimizin size sağlayacağı avantajlar ve farkımız
              </p>
              <div className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitItem}>
                    <CheckCircle size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Link href="/kocluk-sureci/" className={styles.learnMoreButton}>
                Koçluk Sürecimizi Keşfedin
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className={styles.whyBanner}>
              <PromoBanner />
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nasıl Çalışıyoruz?</h2>
            <p className={styles.sectionDescription}>
              5 adımda başarıya ulaşmanızı sağlayan sistematik yaklaşımımız
            </p>
          </div>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepIcon}>
                <Users size={24} />
              </div>
              <h3 className={styles.stepTitle}>İlk Görüşme</h3>
              <p className={styles.stepDescription}>
                Hedeflerinizi ve mevcut durumunuzu değerlendiriyoruz
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepIcon}>
                <Target size={24} />
              </div>
              <h3 className={styles.stepTitle}>Kişisel Plan</h3>
              <p className={styles.stepDescription}>
                Size özel detaylı çalışma programı geliştiriyoruz
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepIcon}>
                <BookOpen size={24} />
              </div>
              <h3 className={styles.stepTitle}>Düzenli Eğitim</h3>
              <p className={styles.stepDescription}>
                Haftalık görüşmelerle sürekli destek sağlıyoruz
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepIcon}>
                <Clock size={24} />
              </div>
              <h3 className={styles.stepTitle}>İlerleme Takibi</h3>
              <p className={styles.stepDescription}>
                Gelişiminizi takip ediyor ve planı güncelliyoruz
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepIcon}>
                <Trophy size={24} />
              </div>
              <h3 className={styles.stepTitle}>Başarı</h3>
              <p className={styles.stepDescription}>
                Hedeflediğiniz üniversiteye yerleşiyorsunuz
              </p>
            </div>
          </div>
          <div className={styles.sectionCta}>
            <Link href="/kocluk-sureci/" className={styles.secondaryButton}>
              Detaylı Süreci İncele
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className={styles.foundersSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Kurucularımız</h2>
            <p className={styles.sectionDescription}>
              EduVita&apos;nın kurucuları, kendi başarı hikâyeleri ile size ilham vermek için burada.
            </p>
          </div>
          <div className={styles.foundersGrid}>
            {founderCoaches.map((coach, index) => {
              if (index === 100) {
                // İkinci kurucudan önce video kartını ekle
                return (
                  <React.Fragment key={`coach-${coach.id}`}>
                    <VideoCard
                      title="EduVita Tanıtım"
                      description="Eğitim koçluğu sürecimizi ve başarı hikâyelerimizi keşfedin. Nasıl çalıştığımızı öğrenin."
                      thumbnailUrl="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
                      videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    />
                    <CoachCard coach={coach} />
                  </React.Fragment>
                );
              }
              return <CoachCard key={coach.id} coach={coach} />;
            })}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/egitim-koclari/" className={styles.secondaryButton}>
              Diğer Koçlarımız
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Videos Section */}
      <section className={styles.videosSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Instagram&apos;dan</h2>
            <p className={styles.sectionDescription}>
              Eğitim sürecimizi ve başarı hikâyelerimizi yakından takip edin.
            </p>
          </div>
          <div className={styles.videosGrid}>
            {instagramVideos.map((video, index) => (
              <div key={index} className={styles.videoItem}>
                <Image
                  src={video}
                  alt={`Instagram video ${index + 1}`}
                  width={300}
                  height={500}
                  className={styles.videoThumbnail}
                />
                <div className={styles.playButton}>
                  <Play size={24} />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <a 
              href="https://www.instagram.com/eduvitakocluk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              Instagram&apos;da Takip Et
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Hazır mısın?</h2>
            <p className={styles.ctaDescription}>
              Hedeflediğin üniversiteye giden yolda seni desteklemek için buradayız. 
              Hemen iletişime geç ve eğitim yolculuğuna başla.
            </p>
            <Link href="/iletisim/" className={styles.ctaButton}>
              Hemen Başla
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}