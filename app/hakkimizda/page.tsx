import Image from 'next/image';
import { Target, Users, Award, Heart, Shield, Zap } from 'lucide-react';
import styles from './page.module.css';

export default function About() {
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

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Hakkımızda</h1>
              <p className={styles.heroDescription}>
                EduVita olarak, öğrencilerin üniversite sınavlarında başarılı olmalarını sağlamak için 
                kişiselleştirilmiş eğitim koçluğu hizmeti sunuyoruz. Deneyimli koçlarımız, her öğrencinin 
                potansiyelini ortaya çıkarmak için buradalar.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="https://images.pexels.com/photos/5212360/pexels-photo-5212360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="EduVita ekibi"
                width={600}
                height={400}
                className={styles.heroImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionItem}>
              <h2 className={styles.missionTitle}>Misyonumuz</h2>
              <p className={styles.missionText}>
                AYT ve TYT sınavlarına hazırlanan öğrencilere, kişiselleştirilmiş eğitim koçluğu 
                hizmeti sunarak hedefledikleri üniversitelere yerleşmelerini sağlamak. Her öğrencinin 
                kendine özgü potansiyelini keşfetmesine ve bu potansiyeli maksimuma çıkarmasına 
                yardımcı olmak.
              </p>
            </div>
            <div className={styles.missionItem}>
              <h2 className={styles.missionTitle}>Vizyonumuz</h2>
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

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2 className={styles.storyTitle}>Hikayemiz</h2>
              <p className={styles.storyParagraph}>
                EduVita, iki başarılı üniversite öğrencisinin kendi deneyimlerini paylaşarak 
                diğer öğrencilere yardım etme arzusuyla kuruldu. Ahmet Yılmaz ve Elif Demir, 
                AYT sınavlarında elde ettikleri üstün başarılar sonrası, bu deneyimlerini 
                paylaşmanın önemini fark ettiler.
              </p>
              <p className={styles.storyParagraph}>
                Başlangıçta sadece çevrelerindeki öğrencilere yardım eden kurucularımız, 
                zamanla daha profesyonel bir yapı oluşturma ihtiyacı duydular. Bu ihtiyaçtan 
                doğan EduVita, bugün 12 deneyimli koçuyla hizmet veriyor.
              </p>
              <p className={styles.storyParagraph}>
                Her geçen gün büyüyen ekibimiz, öğrencilerin başarı hikayelerinden aldığı 
                motivasyonla çalışmaya devam ediyor. Bugüne kadar 38&apos;den fazla öğrenciyi 
                hedeflediği üniversiteye yerleştirmenin gururunu yaşıyoruz.
              </p>
            </div>
            <div className={styles.storyImage}>
              <Image
                src="https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                alt="EduVita hikayesi"
                width={500}
                height={600}
                className={styles.storyImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className={styles.numbersSection}>
        <div className="container">
          <div className={styles.numbersGrid}>
            <div className={styles.numberItem}>
              <div className={styles.number}>38+</div>
              <div className={styles.numberLabel}>Başarılı Öğrenci</div>
            </div>
            <div className={styles.numberItem}>
              <div className={styles.number}>12</div>
              <div className={styles.numberLabel}>Profesyonel Eğitim Koçu</div>
            </div>
            <div className={styles.numberItem}>
              <div className={styles.number}>%90</div>
              <div className={styles.numberLabel}>Hedef Başarı Oranı</div>
            </div>
            <div className={styles.numberItem}>
              <div className={styles.number}>3</div>
              <div className={styles.numberLabel}>Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}