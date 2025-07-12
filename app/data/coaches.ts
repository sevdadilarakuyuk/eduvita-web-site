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
      department: 'Malzeme Metalürji Mühendisliği',
      aytType: 'Sayısal',
      turkeyRank: 12136,
      year: 2023,
      examType: 'AYT',
      rank: '12.136.ncüsü',
      image: '/images/coaches/ilayda-naz-anli.jpg',
      bio: 'Matematik ve fizik korkusunu yenelim, problem çözme sanatını birlikte keşfedelim. Sınavda karşılaştığın her soruyu çözebilecek özgüveni sana kazandıracağım.',
      goals: [
        'Her öğrencinin potansiyelini maksimuma çıkarmak',
        'Matematik ve fen bilimlerinde güçlü temel oluşturmak',
        'Sınav kaygısını yönetmeyi öğretmek'
      ],
      achievements: [
        'Sayısal 12.136.ncüsü',
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
      turkeyRank: 9194,
      year: 2024,
      examType: 'AYT',
      rank: '9.194.ncisi',
      image: '/images/coaches/sevda-dilara-kuyuk.jpg',
      bio: 'Fiziğin büyüsünü keşfet, doğanın dilini anla. Sayısal alanda başarının anahtarı analitik düşünce ve güçlü problem çözme. Birlikte bu yolculuğa çıkalım.',
      goals: [
        'Fizik ve matematik sevgisi aşılamak',
        'Analitik düşünme becerileri geliştirmek',
        'Problem çözme becerilerini güçlendirmek'
      ],
      achievements: [
        'Sayısal 9.194.ncisi',
      ],
      teachingApproach: 'Fizik konularını günlük hayatla ilişkilendirerek öğretiyorum. Öğrencilerimin teorik bilgiyi pratikte görmelerini sağlamak için deneysel yaklaşımlar kullanıyorum.',
      focusAreas: ['Fizik', 'Matematik', 'Kimya', 'Analitik Düşünme'],
      isFounder: true
    },
    {
      id: 'barkin-sezgin',
      name: 'Barkın Sezgin',
      university: 'İTÜ',
      department: 'Elektrik Mühendisliği',
      aytType: 'Sayısal',
      turkeyRank: 2637,
      year: 2024,
      examType: 'AYT',
      rank: '2637.ncisi',
      image: '/images/coaches/barkin-sezgin.jpg',
      bio: 'Mühendislik bakış açısıyla fizik ve matematiği hayata geçiriyorum. Teorik bilgiyi pratiğe dönüştürme sanatını öğrenecek, her problemi çözebileceksin.',
      goals: [
        'Fizik ve matematik alanında sağlam temel oluşturmak',
        'Problem çözme stratejileri geliştirmek',
        'Mühendislik düşüncesi kazandırmak'
      ],
      achievements: [
        'Sayısal 2637.ncisi',
      ],
      teachingApproach: 'Teorik bilgileri pratik uygulamalarla destekliyorum. Öğrencilerimin fizik ve matematik konularını günlük hayattan örneklerle kavramalarını sağlıyorum.',
      focusAreas: ['Fizik', 'Matematik', 'Mühendislik Temelleri', 'Analitik Düşünme']
    },
    {
      id: 'mitat-picak',
      name: 'Mitat Piçak',
      university: 'İTÜ',
      department: 'Elektrik Mühendisliği',
      aytType: 'Sayısal',
      turkeyRank: 10.211,
      year: 2023,
      examType: 'AYT',
      rank: '10.211.ncisi',
      image: '/images/coaches/mitat-picak.jpg',
      bio: 'Mühendislik bakış açısıyla fizik ve matematiği hayata geçiriyorum. Teorik bilgiyi pratiğe dönüştürme sanatını öğrenecek, her problemi çözebileceksin.',
      goals: [
        'Fizik ve matematik alanında sağlam temel oluşturmak',
        'Problem çözme stratejileri geliştirmek',
        'Mühendislik düşüncesi kazandırmak'
      ],
      achievements: [
        'Sayısal 10211.ncisi',
      ],
      teachingApproach: 'Teorik bilgileri pratik uygulamalarla destekliyorum. Öğrencilerimin fizik ve matematik konularını günlük hayattan örneklerle kavramalarını sağlıyorum.',
      focusAreas: ['Fizik', 'Matematik', 'Mühendislik Temelleri', 'Analitik Düşünme']
    },
    {
      id: 'burak-gayretli',
      name: 'Burak Gayretli',
      university: 'Boğaziçi Üniversitesi',
      department: 'Ekonomi',
      aytType: 'Eşit Ağırlık',
      turkeyRank: 23,
      year: 2024,
      examType: 'AYT',
      rank: '23.ncüsü',
      image: '/images/coaches/burak-gayretli.jpg',
      bio: 'Dil öğrenimini eğlenceli bir maceraya dönüştürüyorum. İngilizce ve matematik dengesinde ustalaşarak global dünyaya kapı aralayacaksın.',
      goals: [
        'İngilizce dil yetkinliği geliştirmek',
        'Kültürlerarası iletişim becerisi kazandırmak',
        'Akademik İngilizce becerilerini güçlendirmek'
      ],
      achievements: [
        'Eşit Ağırlık 23.ncüsü',
      ],
      teachingApproach: 'Dil öğrenimini eğlenceli ve interaktif hale getiriyorum. Öğrencilerimin hem akademik hem de günlük İngilizce becerilerini geliştirmelerine odaklanıyorum.',
      focusAreas: ['İngilizce', 'Matematik', 'Türkçe', 'Dil Becerileri']
    },
    {
      id: 'boarn-tiskiya',
      name: 'Boran Tiskaya',
      university: 'Boğaziçi Üniversitesi',
      department: 'İşletme',
      aytType: 'Eşit Ağırlık',
      turkeyRank: 253,
      year: 2024,
      examType: 'AYT',
      rank: '253.ncüsü',
      image: '/images/coaches/boran-tiskaya.jpg',
      bio: 'Dünyayı keşfet, çevreyi anla, geleceği şekillendir. Coğrafya ve sosyal bilimlerle küresel bakış açısı kazanacak, fark yaratacaksın.',
      goals: [
        'Coğrafya ve çevre bilinci geliştirmek',
        'Sosyal bilimler alanında başarı sağlamak',
        'Sürdürülebilir yaşam konusunda bilinç oluşturmak'
      ],
      achievements: [
        'Eşit Ağırlık 253.ncüsü',
        'Çevre projeleri yarışması birinciliği',
        '20+ öğrenciyi coğrafya ve sosyal bilimler alanına yönlendirme'
      ],
      teachingApproach: 'Coğrafya konularını görsel materyaller ve güncel örneklerle destekliyorum. Öğrencilerimin dünya hakkında farkındalık geliştirmelerini sağlıyorum.',
      focusAreas: ['Coğrafya', 'Çevre Bilimi', 'Sosyal Bilimler', 'Harita Becerileri']
    },
    {
      id: 'yusuf-ozcan-yasar',
      name: 'Yusuf Özcan Yaşar',
      university: 'Koç Üniversitesi',
      department: 'Medya Görsel Sanatlar',
      aytType: 'Sözel',
      turkeyRank: 50,
      year: 2023,
      examType: 'AYT',
      rank: '50.ncisi',
      image: '/images/coaches/yusuf-ozcan-yasar.jpg',
      bio: 'Zihnin gücünü keşfet, motivasyonunu artır, başarıya odaklan. Sınav kaygısını yenecek, özgüvenini kazanacak, hedefine ulaşacaksın.',
      goals: [
        'Öğrenci motivasyonunu artırmak',
        'Sınav kaygısını yönetmeyi öğretmek',
        'Pozitif öğrenme ortamı yaratmak'
      ],
      achievements: [
        'Sözel 50.ncisi',
        'Eğitim psikolojisi sertifikaları',
        '45+ öğrenciye akademik ve kişisel gelişim desteği'
      ],
      teachingApproach: 'Öğrencilerimin psikolojik ihtiyaçlarını göz önünde bulundurarak kişiselleştirilmiş öğrenme stratejileri geliştiriyorum. Motivasyon ve özgüven artırıcı teknikler kullanıyorum.',
      focusAreas: ['Psikoloji', 'Motivasyon Teknikleri', 'Sınav Kaygısı Yönetimi', 'Kişisel Gelişim']
    },
  ];
  
  export const founderCoaches = coaches.filter(coach => coach.isFounder);
  export const otherCoaches = coaches.filter(coach => !coach.isFounder);