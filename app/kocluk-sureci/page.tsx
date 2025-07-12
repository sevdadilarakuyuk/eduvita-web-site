import Image from 'next/image';
import { CheckCircle, Users, Target, BookOpen, Trophy, Clock } from 'lucide-react';
import styles from './page.module.css';

export default function CoachingProcess() {
  const steps = [
    {
      icon: Users,
      title: 'İlk Görüşme',
      description: 'Öğrencimizle tanışıyor, hedeflerini ve mevcut durumunu değerlendiriyoruz.',
      details: [
        'Kişisel hedef belirleme',
        'Mevcut seviye tespiti',
        'Güçlü ve zayıf yönlerin analizi',
        'Motivasyon faktörlerinin belirlenmesi'
      ]
    },
    {
      icon: Target,
      title: 'Kişisel Plan Oluşturma',
      description: 'Her öğrenci için özel hazırlanmış, detaylı çalışma programı geliştiriyoruz.',
      details: [
        'Bireysel çalışma takvimi',
        'Konu bazlı hedef belirleme',
        'Zaman yönetimi stratejileri',
        'Kaynak ve materyal önerileri'
      ]
    },
    {
      icon: BookOpen,
      title: 'Düzenli Eğitim Seansları',
      description: 'Haftalık düzenli görüşmelerle öğrencimizi destekliyoruz.',
      details: [
        'Haftada 2-3 saat birebir görüşme',
        'Konu anlatımı ve problem çözme',
        'Soru-cevap seansları',
        'Motivasyon ve rehberlik desteği'
      ]
    },
    {
      icon: Clock,
      title: 'İlerleme Takibi',
      description: 'Öğrencimizin gelişimini sürekli takip ediyor ve planı güncelliyoruz.',
      details: [
        'Haftalık ilerleme raporları',
        'Deneme sınavı sonuçlarının analizi',
        'Plan revizyonları',
        'Aile ile düzenli iletişim'
      ]
    },
    {
      icon: Trophy,
      title: 'Sınav Hazırlığı',
      description: 'Sınav döneminde yoğunlaştırılmış destek ve strateji geliştirme.',
      details: [
        'Sınav stratejileri',
        'Zaman yönetimi teknikleri',
        'Stres yönetimi',
        'Son dakika revizyonları'
      ]
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

  return (
    <div className={styles.processPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Koçluk Sürecimiz</h1>
              <p className={styles.heroDescription}>
                EduVita&apos;da her öğrenciye özel hazırladığımız sistematik koçluk süreciyle 
                hedeflerinize ulaşmanızı sağlıyoruz. Deneyimli koçlarımız, kanıtlanmış 
                metodlarla sizleri başarıya götürüyor.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Koçluk süreci"
                width={600}
                height={400}
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className={styles.stepsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>5 Adımda Başarıya</h2>
            <p className={styles.sectionDescription}>
              Sistematik yaklaşımımızla her öğrencimizi başarıya taşıyoruz
            </p>
          </div>
          
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepIcon}>
                  <step.icon size={32} />
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <ul className={styles.stepDetails}>
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className={styles.stepDetail}>
                        <CheckCircle size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className={styles.benefitsContent}>
            <div className={styles.benefitsText}>
              <h2 className={styles.benefitsTitle}>Neden EduVita?</h2>
              <p className={styles.benefitsDescription}>
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
            </div>
            <div className={styles.benefitsImage}>
              <Image
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                alt="EduVita avantajları"
                width={500}
                height={600}
                className={styles.benefitsImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>%90</div>
              <div className={styles.statLabel}>Hedef Başarı Oranı</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>38+</div>
              <div className={styles.statLabel}>Başarılı Öğrenci</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>12</div>
              <div className={styles.statLabel}>Profesyonel Eğitim Koçu</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>3</div>
              <div className={styles.statLabel}>Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}