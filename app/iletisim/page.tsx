import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import styles from './page.module.css';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'E-posta',
      value: 'info@eduvita.com',
      link: 'mailto:info@eduvita.com'
    },
    {
      icon: Phone,
      title: 'Telefon 1',
      value: '+90 555 123 45 67',
      link: 'tel:+905551234567',
      hasWhatsApp: true,
      whatsappLink: 'https://wa.me/905551234567'
    },
    {
      icon: Phone,
      title: 'Telefon 2',
      value: '+90 555 987 65 43',
      link: 'tel:+905559876543',
      hasWhatsApp: true,
      whatsappLink: 'https://wa.me/905559876543'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'İstanbul, Türkiye',
      link: null
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      value: 'Pazartesi - Pazar: 09:00 - 23:00',
      link: null
    }
  ];

  const socialLinks = [
    {
      title: 'Instagram',
      value: '@eduvitakocluk',
      link: 'https://www.instagram.com/eduvitakocluk/',
      iconType: 'instagram'
    }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>İletişim</h1>
            <p className={styles.heroDescription}>
              Sorularınız için bize ulaşın. Eğitim koçluğu hizmetlerimiz hakkında 
              detaylı bilgi almak ve randevu oluşturmak için iletişim kanallarımızı kullanabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>İletişim Bilgileri</h2>
              <div className={styles.contactList}>
                {contactInfo.map((item, index) => (
                  <div key={index} className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <item.icon size={24} />
                    </div>
                    <div className={styles.contactDetails}>
                      <h3 className={styles.contactTitle}>{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className={styles.contactValue}>
                          {item.value}
                        </a>
                      ) : (
                        <p className={styles.contactValue}>{item.value}</p>
                      )}
                      {item.hasWhatsApp && (
                        <a 
                          href={item.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.whatsappLink}
                        >
                          <MessageCircle size={16} className={styles.whatsappIcon} />
                          <span>WhatsApp ile ara</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Sosyal Medya</h3>
                <div className={styles.socialList}>
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialItem}
                    >
                      <div className={`${styles.socialIcon} ${styles[item.iconType]}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className={styles.socialDetails}>
                        <span className={styles.socialTitle}>{item.title}</span>
                        <span className={styles.socialValue}>{item.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2 className={styles.sectionTitle}>Bize Yazın</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.formInput}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="aytType" className={styles.formLabel}>
                    AYT Alanı
                  </label>
                  <select
                    id="aytType"
                    name="aytType"
                    className={styles.formSelect}
                  >
                    <option value="">Seçiniz</option>
                    <option value="sayisal">Sayısal</option>
                    <option value="sozel">Sözel</option>
                    <option value="esit-agirlik">Eşit Ağırlık</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={styles.formTextarea}
                    placeholder="Hedefleriniz, sorularınız ve bizden beklentilerinizi yazabilirsiniz..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitButton}>
                  Mesaj Gönder
                </button>
              </form>
            </div>
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
              <h3 className={styles.faqQuestion}>Koçluk seansları nasıl gerçekleşir?</h3>
              <p className={styles.faqAnswer}>
                Koçluk seanslarımız online veya yüz yüze gerçekleştirilebilir. 
                Öğrencimizin ihtiyacına göre haftada 2-3 saat düzenli görüşmeler yapıyoruz.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Hangi sınıf öğrencileri ile çalışıyorsunuz?</h3>
              <p className={styles.faqAnswer}>
                Öncelikli olarak 11. ve 12. sınıf öğrencileri ile çalışıyoruz. 
                Ancak 10. sınıf öğrencileri için de erken hazırlık programlarımız bulunmaktadır.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Koçluk ücreti nasıl belirlenir?</h3>
              <p className={styles.faqAnswer}>
                Koçluk ücretlerimiz, seçilen paket ve program yoğunluğuna göre değişiklik gösterir. 
                Detaylı bilgi için ücretlerimiz sayfasını inceleyebilir veya bizimle iletişime geçebilirsiniz.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Başarı garantiniz var mı?</h3>
              <p className={styles.faqAnswer}>
                %95 başarı oranımız bulunmaktadır. Öğrencimizin düzenli katılımı ve çalışması durumunda 
                hedeflenen üniversiteye yerleşme konusunda güçlü bir geçmişimiz vardır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}