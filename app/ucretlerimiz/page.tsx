import { Check, X, Star, Clock, BookOpen, Users, MessageCircle, Target } from 'lucide-react';
import styles from './page.module.css';

export default function Pricing() {
  const packages = [
    {
      name: 'Temel Paket',
      originalPrice: 3000,
      currentPrice: 2500,
      duration: 'Aylık',
      popular: false,
      description: 'Başlangıç seviyesindeki öğrenciler için ideal paket',
      features: [
        { text: 'Haftada 2 saat birebir görüşme', included: true },
        { text: 'Kişisel çalışma programı', included: true },
        { text: 'Haftalık ilerleme takibi', included: true },
        { text: 'WhatsApp destek hattı', included: true },
        { text: 'Deneme sınavı analizi', included: true },
        { text: 'Soru çözümü desteği', included: false },
        { text: 'Kaynak ve materyal desteği', included: false },
        { text: 'Aile ile aylık görüşme', included: false },
      ],
      icon: BookOpen,
      color: 'primary'
    },
    {
      name: 'Premium Paket',
      originalPrice: 4500,
      currentPrice: 3750,
      duration: 'Aylık',
      popular: true,
      description: 'Kapsamlı destek isteyen öğrenciler için en popüler paket',
      features: [
        { text: 'Haftada 3 saat birebir görüşme', included: true },
        { text: 'Kişisel çalışma programı', included: true },
        { text: 'Haftalık ilerleme takibi', included: true },
        { text: 'WhatsApp destek hattı', included: true },
        { text: 'Deneme sınavı analizi', included: true },
        { text: 'Soru çözümü desteği', included: true },
        { text: 'Kaynak ve materyal desteği', included: true },
        { text: 'Aile ile aylık görüşme', included: true },
      ],
      icon: Target,
      color: 'secondary'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Deneyimli Koçlar',
      description: 'Türkiye derecesi yapmış uzman koçlarımız'
    },
    {
      icon: Clock,
      title: 'Esnek Saatler',
      description: 'Size uygun saatlerde görüşme imkanı'
    },
    {
      icon: MessageCircle,
      title: '7/24 Destek',
      description: 'WhatsApp üzerinden sürekli iletişim'
    },
    {
      icon: Star,
      title: '%90 Başarı',
      description: 'Kanıtlanmış yüksek başarı oranı'
    }
  ];

  return (
    <div className={styles.pricingPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Ücretlerimiz</h1>
            <p className={styles.heroDescription}>
              Size en uygun paketi seçin ve hedeflediğiniz üniversiteye giden yolda 
              profesyonel destek alın. Kısa süre için özel indirimli fiyatlarımızdan yararlanın.
            </p>
            <div className={styles.discountBadge}>
              <Star size={20} />
              <span>Kısa Süre İçin Özel İndirim!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingGrid}>
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`${styles.pricingCard} ${pkg.popular ? styles.popular : ''}`}
              >
                {pkg.popular && (
                  <div className={styles.popularBadge}>
                    <Star size={16} />
                    <span>En Popüler</span>
                  </div>
                )}
                
                <div className={styles.cardHeader}>
                  <div className={styles.packageIcon}>
                    <pkg.icon size={32} />
                  </div>
                  <h3 className={styles.packageName}>{pkg.name}</h3>
                  <p className={styles.packageDescription}>{pkg.description}</p>
                </div>

                <div className={styles.pricing}>
                  <div className={styles.originalPrice}>
                    <span className={styles.currency}>₺</span>
                    <span className={styles.amount}>{pkg.originalPrice.toLocaleString()}</span>
                  </div>
                  <div className={styles.currentPrice}>
                    <span className={styles.currency}>₺</span>
                    <span className={styles.amount}>{pkg.currentPrice.toLocaleString()}</span>
                    <span className={styles.period}>/{pkg.duration}</span>
                  </div>
                  <div className={styles.savings}>
                    ₺{(pkg.originalPrice - pkg.currentPrice).toLocaleString()} tasarruf
                  </div>
                </div>

                <div className={styles.features}>
                  {pkg.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className={`${styles.feature} ${!feature.included ? styles.notIncluded : ''}`}
                    >
                      {feature.included ? (
                        <Check size={18} className={styles.checkIcon} />
                      ) : (
                        <X size={18} className={styles.xIcon} />
                      )}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <button className={`${styles.selectButton} ${pkg.popular ? styles.primaryButton : styles.secondaryButton}`}>
                  Paketi Seç
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Neden EduVita?</h2>
            <p className={styles.sectionDescription}>
              Eğitim koçluğu hizmetimizin size sağlayacağı avantajlar
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <benefit.icon size={32} />
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Sık Sorulan Sorular</h2>
          </div>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Ödeme nasıl yapılır?</h3>
              <p className={styles.faqAnswer}>
                Ödemenizi aylık olarak havale/EFT veya kredi kartı ile yapabilirsiniz. 
                İlk ödemenizi yaptıktan sonra koçluk süreciniz başlar.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Paket değişikliği yapabilir miyim?</h3>
              <p className={styles.faqAnswer}>
                Evet, istediğiniz zaman paketinizi yükseltebilir veya düşürebilirsiniz. 
                Değişiklik bir sonraki ödeme döneminde geçerli olur.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>İndirim ne kadar süre geçerli?</h3>
              <p className={styles.faqAnswer}>
                Mevcut indirimli fiyatlarımız sınırlı süre için geçerlidir. 
                Detaylı bilgi için bizimle iletişime geçebilirsiniz.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Koç değişikliği yapabilir miyim?</h3>
              <p className={styles.faqAnswer}>
                İlk görüşmeden sonra koçunuzla uyum sağlayamadığınızı düşünüyorsanız, 
                size daha uygun bir koç ataması yapabiliriz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Hemen Başlayın!</h2>
            <p className={styles.ctaDescription}>
              İndirimli fiyatlardan yararlanmak için bugün bizimle iletişime geçin. 
              Hedeflediğiniz üniversiteye giden yolda size rehberlik edelim.
            </p>
            <div className={styles.ctaButtons}>
              <a href="https://wa.me/905551234567" className={styles.whatsappButton}>
                <MessageCircle size={20} />
                WhatsApp ile İletişim
              </a>
              <a href="/iletisim/" className={styles.contactButton}>
                İletişim Formu
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}