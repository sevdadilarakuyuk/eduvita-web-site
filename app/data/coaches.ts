export interface Coach {
    id: string;
    name: string;
    university: string;
    department: string;
    aytType: 'Sayısal' | 'Sözel' | 'Eşit Ağırlık';
    turkeyRank: number;
    year: number;
    examType: string; // "AYT" veya "TYT"
    rank: string; // "105.ncisi" formatında
    image: string;
    bio: string;
    goals: string[];
    achievements: string[];
    teachingApproach: string;
    focusAreas: string[];
    isFounder?: boolean;
  }
  
  export const coaches: Coach[] = [
    {
      id: 'ilayda-naz-anli',
      name: 'İlayda Naz Anlı',
      university: 'İTÜ',
      department: 'Makine Mühendisliği',
      aytType: 'Sayısal',
      turkeyRank: 12334,
      year: 2023,
      examType: 'AYT',
      rank: '12.334.ncüsü',
      image: '/images/coaches/ilayda-naz-anli.jpg',
      bio: 'Matematik ve fizik korkusunu yenelim, problem çözme sanatını birlikte keşfedelim. Sınavda karşılaştığın her soruyu çözebilecek özgüveni sana kazandıracağım.',
      goals: [
        'Her öğrencinin potansiyelini maksimuma çıkarmak',
        'Matematik ve fen bilimlerinde güçlü temel oluşturmak',
        'Sınav kaygısını yönetmeyi öğretmek'
      ],
      achievements: [
        'Sayısal 12.334.ncüsü',
        '50+ öğrenciyi hedeflenen üniversiteye yerleştirme',
        'Matematik olimpiyatı il birinciliği'
      ],
      teachingApproach: 'Öğrencilerimin öğrenme stillerini analiz ederek, her birine özel çalışma programları hazırlıyorum. Problem çözme tekniklerini adım adım öğreterek, karmaşık konuları basit parçalara ayırıyorum.',
      focusAreas: ['Matematik', 'Fizik', 'Kimya', 'Problem Çözme Teknikleri'],
      isFounder: true
    },
    {
      id: 'sevda-dilara-kuyuk',
      name: 'Sevda Dilara Küyük',
      university: 'Boğaziçi Üniversitesi',
      department: 'Fizik',
      aytType: 'Sayısal',
      turkeyRank: 9117,
      year: 2024,
      examType: 'AYT',
      rank: '9.117.ncisi',
      image: '/images/coaches/sevda-dilara-kuyuk.jpg',
      bio: 'Fiziğin büyüsünü keşfet, doğanın dilini anla. Sayısal alanda başarının anahtarı analitik düşünce ve güçlü problem çözme. Birlikte bu yolculuğa çıkalım.',
      goals: [
        'Fizik ve matematik sevgisi aşılamak',
        'Analitik düşünme becerileri geliştirmek',
        'Problem çözme becerilerini güçlendirmek'
      ],
      achievements: [
        'Sayısal 9.117.ncisi',
        'Fizik olimpiyatı bölge birinciliği',
        '40+ öğrenciyi tercih ettikleri bölümlere yerleştirme'
      ],
      teachingApproach: 'Fizik konularını günlük hayatla ilişkilendirerek öğretiyorum. Öğrencilerimin teorik bilgiyi pratikte görmelerini sağlamak için deneysel yaklaşımlar kullanıyorum.',
      focusAreas: ['Fizik', 'Matematik', 'Kimya', 'Analitik Düşünme'],
      isFounder: true
    },
    {
      id: 'mehmet-kaya',
      name: 'Mehmet Kaya',
      university: 'ODTÜ',
      department: 'Makine Mühendisliği',
      aytType: 'Sayısal',
      turkeyRank: 23,
      year: 2023,
      examType: 'AYT',
      rank: '23.ncüsü',
      image: '/images/coaches/mehmet-kaya.jpg',
      bio: 'Mühendislik bakış açısıyla fizik ve matematiği hayata geçiriyorum. Teorik bilgiyi pratiğe dönüştürme sanatını öğrenecek, her problemi çözebileceksin.',
      goals: [
        'Fizik ve matematik alanında sağlam temel oluşturmak',
        'Problem çözme stratejileri geliştirmek',
        'Mühendislik düşüncesi kazandırmak'
      ],
      achievements: [
        'Sayısal 23.ncüsü',
        'ODTÜ mezuniyet birinciliği',
        '35+ öğrenciyi mühendislik fakültelerine yerleştirme'
      ],
      teachingApproach: 'Teorik bilgileri pratik uygulamalarla destekliyorum. Öğrencilerimin fizik ve matematik konularını günlük hayattan örneklerle kavramalarını sağlıyorum.',
      focusAreas: ['Fizik', 'Matematik', 'Mühendislik Temelleri', 'Analitik Düşünme']
    },
    {
      id: 'ayse-ozturk',
      name: 'Ayşe Öztürk',
      university: 'Ankara Üniversitesi',
      department: 'Tarih',
      aytType: 'Sözel',
      turkeyRank: 12,
      year: 2023,
      examType: 'AYT',
      rank: '12.ncisi',
      image: '/images/coaches/ayse-ozturk.jpg',
      bio: 'Tarihin derinliklerinde kaybolma, sosyal bilimlerin mantığını keşfet. Ezber değil, anlayarak öğrenme yolculuğunda rehberin olacağım.',
      goals: [
        'Sosyal bilimlere karşı ilgi uyandırmak',
        'Eleştirel düşünme becerisi geliştirmek',
        'Araştırma ve analiz yeteneklerini güçlendirmek'
      ],
      achievements: [
        'Sözel 12.ncisi',
        'Ankara Üniversitesi bölüm birinciliği',
        '30+ öğrenciyi sosyal bilimler alanına yönlendirme'
      ],
      teachingApproach: 'Tarihsel olayları sebep-sonuç ilişkileri içinde analiz etmeyi öğretiyorum. Öğrencilerimin ezber yapmak yerine anlayarak öğrenmelerini sağlıyorum.',
      focusAreas: ['Tarih', 'Coğrafya', 'Sosyal Bilimler', 'Araştırma Teknikleri']
    },
    {
      id: 'can-bulut',
      name: 'Can Bulut',
      university: 'İTÜ',
      department: 'Elektrik-Elektronik Mühendisliği',
      aytType: 'Sayısal',
      turkeyRank: 31,
      year: 2024,
      examType: 'AYT',
      rank: '31.ncisi',
      image: '/images/coaches/can-bulut.jpg',
      bio: 'Teknolojinin geleceğini şekillendiren matematik ve fizik dünyasına hoş geldin. Soyut kavramları somut başarılara dönüştürme zamanı.',
      goals: [
        'Matematik ve fizik alanında mükemmellik',
        'Teknolojiye yönelim sağlamak',
        'Analitik düşünce yapısı geliştirmek'
      ],
      achievements: [
        'Sayısal 31.ncisi',
        'İTÜ elektrik-elektronik mühendisliği mezunu',
        '25+ öğrenciyi mühendislik alanına kazandırma'
      ],
      teachingApproach: 'Matematik ve fizik konularını teknolojik uygulamalarla ilişkilendiriyorum. Öğrencilerimin soyut kavramları somut örneklerle anlamalarını sağlıyorum.',
      focusAreas: ['Matematik', 'Fizik', 'Teknoloji', 'Elektronik Temelleri']
    },
    {
      id: 'zeynep-acar',
      name: 'Zeynep Acar',
      university: 'Hacettepe Üniversitesi',
      department: 'İngiliz Dili ve Edebiyatı',
      aytType: 'Eşit Ağırlık',
      turkeyRank: 18,
      year: 2023,
      examType: 'AYT',
      rank: '18.ncisi',
      image: '/images/coaches/zeynep-acar.jpg',
      bio: 'Dil öğrenimini eğlenceli bir maceraya dönüştürüyorum. İngilizce ve matematik dengesinde ustalaşarak global dünyaya kapı aralayacaksın.',
      goals: [
        'İngilizce dil yetkinliği geliştirmek',
        'Kültürlerarası iletişim becerisi kazandırmak',
        'Akademik İngilizce becerilerini güçlendirmek'
      ],
      achievements: [
        'Eşit Ağırlık 18.ncisi',
        'Cambridge İngilizce sertifikaları',
        '40+ öğrenciyi dil bölümlerine yerleştirme'
      ],
      teachingApproach: 'Dil öğrenimini eğlenceli ve interaktif hale getiriyorum. Öğrencilerimin hem akademik hem de günlük İngilizce becerilerini geliştirmelerine odaklanıyorum.',
      focusAreas: ['İngilizce', 'Matematik', 'Türkçe', 'Dil Becerileri']
    },
    {
      id: 'emre-yildirim',
      name: 'Emre Yıldırım',
      university: 'Bilkent Üniversitesi',
      department: 'Matematik',
      aytType: 'Sayısal',
      turkeyRank: 9,
      year: 2024,
      examType: 'TYT',
      rank: '9.ncusu',
      image: '/images/coaches/emre-yildirim.jpg',
      bio: 'Matematik sadece sayılar değil, mantık ve düşünce sanatıdır. Matematik zekânı keşfet, her problemi çözebilecek güce ulaş.',
      goals: [
        'Matematik sevgisi ve yeteneği geliştirmek',
        'Problem çözme becerilerini maksimuma çıkarmak',
        'Matematiksel düşünceyi günlük hayata entegre etmek'
      ],
      achievements: [
        'TYT 9.ncusu',
        'Matematik olimpiyatı milli takım üyesi',
        '60+ öğrenciyi matematik ve mühendislik alanlarına kazandırma'
      ],
      teachingApproach: 'Matematiği sadece formüller değil, mantık ve düşünce sistemi olarak öğretiyorum. Her öğrencinin matematik zekasını keşfetmesine yardımcı oluyorum.',
      focusAreas: ['İleri Matematik', 'Problem Çözme', 'Mantık', 'Olimpiyat Matematiği']
    },
    {
      id: 'selin-celik',
      name: 'Selin Çelik',
      university: 'Gazi Üniversitesi',
      department: 'Coğrafya',
      aytType: 'Eşit Ağırlık',
      turkeyRank: 25,
      year: 2023,
      examType: 'AYT',
      rank: '25.ncisi',
      image: '/images/coaches/selin-celik.jpg',
      bio: 'Dünyayı keşfet, çevreyi anla, geleceği şekillendir. Coğrafya ve sosyal bilimlerle küresel bakış açısı kazanacak, fark yaratacaksın.',
      goals: [
        'Coğrafya ve çevre bilinci geliştirmek',
        'Sosyal bilimler alanında başarı sağlamak',
        'Sürdürülebilir yaşam konusunda bilinç oluşturmak'
      ],
      achievements: [
        'Eşit Ağırlık 25.ncisi',
        'Çevre projeleri yarışması birinciliği',
        '20+ öğrenciyi coğrafya ve sosyal bilimler alanına yönlendirme'
      ],
      teachingApproach: 'Coğrafya konularını görsel materyaller ve güncel örneklerle destekliyorum. Öğrencilerimin dünya hakkında farkındalık geliştirmelerini sağlıyorum.',
      focusAreas: ['Coğrafya', 'Çevre Bilimi', 'Sosyal Bilimler', 'Harita Becerileri']
    },
    {
      id: 'burak-koc',
      name: 'Burak Koç',
      university: 'Ege Üniversitesi',
      department: 'Kimya Mühendisliği',
      aytType: 'Sayısal',
      turkeyRank: 28,
      year: 2024,
      examType: 'AYT',
      rank: '28.ncisi',
      image: '/images/coaches/burak-koc.jpg',
      bio: 'Kimyanın büyülü dünyasında moleküllerden çözümlere yolculuk. Laboratuvar deneyimlerimle teorik bilgiyi hayata geçirme sanatını öğreneceksin.',
      goals: [
        'Kimya ve matematik alanında uzmanlaşma',
        'Teorik bilgiyi pratiğe dönüştürme',
        'Mühendislik yaklaşımı kazandırma'
      ],
      achievements: [
        'Sayısal 28.ncisi',
        'Kimya mühendisliği sektör deneyimi',
        '30+ öğrenciyi fen bilimleri alanına kazandırma'
      ],
      teachingApproach: 'Kimya konularını laboratuvar deneyimleri ve endüstriyel uygulamalarla zenginleştiriyorum. Öğrencilerimin teorik bilgiyi pratikte görmelerini sağlıyorum.',
      focusAreas: ['Kimya', 'Matematik', 'Laboratuvar Teknikleri', 'Endüstriyel Uygulamalar']
    },
    {
      id: 'ipek-sahin',
      name: 'İpek Şahin',
      university: 'Marmara Üniversitesi',
      department: 'Psikoloji',
      aytType: 'Eşit Ağırlık',
      turkeyRank: 16,
      year: 2023,
      examType: 'TYT',
      rank: '16.ncısı',
      image: '/images/coaches/ipek-sahin.jpg',
      bio: 'Zihnin gücünü keşfet, motivasyonunu artır, başarıya odaklan. Sınav kaygısını yenecek, özgüvenini kazanacak, hedefine ulaşacaksın.',
      goals: [
        'Öğrenci motivasyonunu artırmak',
        'Sınav kaygısını yönetmeyi öğretmek',
        'Pozitif öğrenme ortamı yaratmak'
      ],
      achievements: [
        'TYT 16.ncısı',
        'Eğitim psikolojisi sertifikaları',
        '45+ öğrenciye akademik ve kişisel gelişim desteği'
      ],
      teachingApproach: 'Öğrencilerimin psikolojik ihtiyaçlarını göz önünde bulundurarak kişiselleştirilmiş öğrenme stratejileri geliştiriyorum. Motivasyon ve özgüven artırıcı teknikler kullanıyorum.',
      focusAreas: ['Psikoloji', 'Motivasyon Teknikleri', 'Sınav Kaygısı Yönetimi', 'Kişisel Gelişim']
    },
    {
      id: 'kerem-aydin',
      name: 'Kerem Aydın',
      university: 'Yıldız Teknik Üniversitesi',
      department: 'Endüstri Mühendisliği',
      aytType: 'Sayısal',
      turkeyRank: 35,
      year: 2024,
      examType: 'AYT',
      rank: '35.ncisi',
      image: '/images/coaches/kerem-aydin.jpg',
      bio: 'Sistemli çalışma, verimli zaman yönetimi, başarılı sonuçlar. Endüstri mühendisliği perspektifiyle çalışma hayatını optimize edeceksin.',
      goals: [
        'Sistemli çalışma alışkanlığı kazandırmak',
        'Problem çözme hızını artırmak',
        'Mühendislik bakış açısı geliştirmek'
      ],
      achievements: [
        'Sayısal 35.ncisi',
        'Endüstri mühendisliği proje deneyimi',
        '25+ öğrenciyi mühendislik fakültelerine yerleştirme'
      ],
      teachingApproach: 'Endüstri mühendisliği perspektifiyle sistemli ve verimli çalışma yöntemleri öğretiyorum. Öğrencilerimin zaman yönetimi becerilerini geliştiriyorum.',
      focusAreas: ['Matematik', 'Sistem Analizi', 'Zaman Yönetimi', 'Verimlilik Teknikleri']
    },
    {
      id: 'nazli-kurt',
      name: 'Nazlı Kurt',
      university: 'Galatasaray Üniversitesi',
      department: 'Uluslararası İlişkiler',
      aytType: 'Sözel',
      turkeyRank: 14,
      year: 2024,
      examType: 'TYT',
      rank: '14.ncüsü',
      image: '/images/coaches/nazli-kurt.jpg',
      bio: 'Küresel perspektifle sosyal bilimleri keşfet, analitik düşünce gücünü geliştir. Uluslararası bakış açısıyla geleceğini şekillendir.',
      goals: [
        'Sosyal bilimler alanında derinleşme',
        'Analitik düşünme becerisi geliştirme',
        'Küresel bakış açısı kazandırma'
      ],
      achievements: [
        'TYT 14.ncüsü',
        'Çok dilli eğitim sertifikaları',
        '35+ öğrenciyi sosyal bilimler alanına yönlendirme'
      ],
      teachingApproach: 'Uluslararası perspektifle sosyal bilimler konularını ele alıyorum. Öğrencilerimin küresel olayları analiz etme becerilerini geliştiriyorum.',
      focusAreas: ['Sosyal Bilimler', 'Uluslararası İlişkiler', 'Dil Becerileri', 'Küresel Farkındalık']
    }
  ];
  
  export const founderCoaches = coaches.filter(coach => coach.isFounder);
  export const otherCoaches = coaches.filter(coach => !coach.isFounder);