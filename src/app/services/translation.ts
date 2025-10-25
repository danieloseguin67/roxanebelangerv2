import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class Translation {
  private currentLanguage = signal<Language>('en');

  private translations: Translations = {
    // Header
    'header.title': {
      en: 'Communication Development Clinic',
      fr: 'Clinique de développement de la communication'
    },
    'header.subtitle': {
      en: 'Speech Language Pathologist',
      fr: 'Orthophoniste'
    },
    'nav.home': {
      en: 'Home',
      fr: 'Accueil'
    },
    'nav.services': {
      en: 'Services',
      fr: 'Services'
    },
    'nav.faq': {
      en: 'FAQ',
      fr: 'FAQ'
    },
    'nav.about': {
      en: 'About Me',
      fr: 'À propos'
    },
    'nav.contact': {
      en: 'Contact Me',
      fr: 'Contactez-moi'
    },
    'nav.language': {
      en: 'Français',
      fr: 'English'
    },

    // Home Page
    'home.title': {
      en: 'Communication Development Clinic',
      fr: 'Clinique de développement de la communication'
    },
    'home.name': {
      en: 'Roxane Bélanger',
      fr: 'Roxane Bélanger'
    },
    'home.profession': {
      en: 'Speech Language Pathologist',
      fr: 'Orthophoniste'
    },
    'home.tagline': {
      en: 'Communicate. Grow. Learn.',
      fr: 'Communiquer. Grandir. Apprendre.'
    },

    // Services Page
    'services.infantTitle': {
      en: 'Any child from birth',
      fr: 'Tout enfant dès la naissance'
    },
    'services.preschoolTitle': {
      en: 'Preschool children',
      fr: 'Enfants d\'âge préscolaire'
    },
    'services.schoolTitle': {
      en: 'School age children',
      fr: 'Enfants d\'âge scolaire'
    },
    'services.screening': {
      en: 'Screening and recommendations',
      fr: 'Dépistage et recommandations'
    },
    'services.assessment': {
      en: 'Speech and language assessment',
      fr: 'Évaluation de la parole et du langage'
    },
    'services.therapy': {
      en: 'Speech and language therapy',
      fr: 'Thérapie de la parole et du langage'
    },
    'services.exercise': {
      en: 'Exercise program at home',
      fr: 'Programme d\'exercices à domicile'
    },
    'services.consultation': {
      en: 'Community or school consultation',
      fr: 'Consultation communautaire ou scolaire'
    },
    'services.coaching': {
      en: 'Education and parental coaching',
      fr: 'Éducation et coaching parental'
    },
    'services.promotion': {
      en: 'Health promotion',
      fr: 'Promotion de la santé'
    },
    'services.oralLanguage': {
      en: 'Oral language (vocabulary, sentence production, grammatical words, social use of language)',
      fr: 'Langage oral (vocabulaire, production de phrases, mots grammaticaux, utilisation sociale du langage)'
    },
    'services.motorDisorder': {
      en: 'Motor disorder of speech',
      fr: 'Trouble moteur de la parole'
    },
    'services.soundProduction': {
      en: 'Speech sound production: pronunciation / articulation',
      fr: 'Production des sons de la parole : prononciation / articulation'
    },
    'services.preschoolDysfluency': {
      en: 'Normal preschool dysfluency consultation',
      fr: 'Consultation sur la dysfluence préscolaire normale'
    },
    'services.phonologicalAwareness': {
      en: 'Phonological awareness (playing with sounds to become a better reader)',
      fr: 'Conscience phonologique (jouer avec les sons pour devenir un meilleur lecteur)'
    },
    'services.preReadingSkills': {
      en: 'Pre-reading skills',
      fr: 'Compétences en pré-lecture'
    },
    'services.writtenLanguage': {
      en: 'Written language: reading and writing',
      fr: 'Langage écrit : lecture et écriture'
    },
    'services.footer': {
      en: 'MY SERVICES ARE OFFERED AT MY OFFICE IN A PRIVATE CLINIC.',
      fr: 'MES SERVICES SONT OFFERTS À MON BUREAU DANS UNE CLINIQUE PRIVÉE.'
    },

    // FAQ Page
    'faq.title': {
      en: 'Frequently Asked Questions',
      fr: 'Questions fréquemment posées'
    },
    'faq.q1': {
      en: 'What is the average length of appointments in speech therapy?',
      fr: 'Quelle est la durée moyenne des rendez-vous en orthophonie?'
    },
    'faq.a1': {
      en: 'In general, the initial assessment takes 90 minutes. Therapy sessions are 45 minutes.',
      fr: 'En général, l\'évaluation initiale prend 90 minutes. Les séances de thérapie sont de 45 minutes.'
    },
    'faq.q2': {
      en: 'What are the rates for speech-language pathology services?',
      fr: 'Quels sont les tarifs pour les services d\'orthophonie?'
    },
    'faq.a2': {
      en: 'Rates for speech-language pathology services are competitive and within the fee guidelines recommended by the Ontario Association of Speech-Language Pathologists and Audiologists (OSLA). For more information, please call me.',
      fr: 'Les tarifs pour les services d\'orthophonie sont compétitifs et conformes aux directives de tarification recommandées par l\'Association des orthophonistes et audiologistes de l\'Ontario (OSLA). Pour plus d\'informations, veuillez m\'appeler.'
    },
    'faq.q3': {
      en: 'Does my child need a referral from his/her doctor?',
      fr: 'Mon enfant a-t-il besoin d\'une recommandation de son médecin?'
    },
    'faq.a3': {
      en: 'No, a doctor\'s referral is not necessary. Referrals can be made directly by the child\'s parent. However, I firmly believe that primary care professionals are an integral part of your child\'s health team. Keeping your child\'s doctor informed of your journey in speech-language pathology is important. Additional testing or services requiring a doctor\'s referral (e.g., referral in audiology for a hearing test, referral to an Ear-nose-throat specialist, referral for a developmental assessment) may be recommended following the assessment or during the course of treatment. Please be aware that a doctor\'s recommendation is sometimes necessary for reimbursement through your private insurance provider.',
      fr: 'Non, une recommandation d\'un médecin n\'est pas nécessaire. Les références peuvent être faites directement par le parent de l\'enfant. Cependant, je crois fermement que les professionnels de soins primaires font partie intégrante de l\'équipe de santé de votre enfant. Tenir le médecin de votre enfant informé de votre parcours en orthophonie est important. Des tests ou services supplémentaires nécessitant une recommandation d\'un médecin (par exemple, référence en audiologie pour un test auditif, référence à un spécialiste ORL, référence pour une évaluation du développement) peuvent être recommandés suite à l\'évaluation ou pendant le traitement. Veuillez noter qu\'une recommandation d\'un médecin est parfois nécessaire pour le remboursement par votre assurance privée.'
    },
    'faq.q4': {
      en: 'Are speech and language therapy services covered by the Ontario Health Insurance Plan (OHIP)?',
      fr: 'Les services de thérapie de la parole et du langage sont-ils couverts par le Régime d\'assurance-santé de l\'Ontario (RASO)?'
    },
    'faq.a4': {
      en: 'No. In Ontario, speech-language pathology services are provided free of charge by Preschool Speech and Language Programs to families of preschoolers until they transition to senior kindergarten, or to school-aged children through school-based speech-language therapy services. In addition, many private insurance benefits cover a specific amount for speech-language therapy services.',
      fr: 'Non. En Ontario, les services d\'orthophonie sont fournis gratuitement par les programmes de parole et de langage préscolaires aux familles de jeunes enfants jusqu\'à leur transition vers la maternelle, ou aux enfants d\'âge scolaire par le biais de services d\'orthophonie en milieu scolaire. De plus, de nombreux régimes d\'assurance privés couvrent un montant spécifique pour les services d\'orthophonie.'
    },
    'faq.q5': {
      en: 'How many appointments are needed in general?',
      fr: 'Combien de rendez-vous sont nécessaires en général?'
    },
    'faq.a5': {
      en: 'We will discuss this more specifically during your first visit. In general, the number of therapy sessions varies from child to child, depending on the nature and severity of speech delay and/or language and the targeted goals. Research shows that early intensive interventions in young children lead to better outcomes and more rapid gains. I strongly believe that the parent is at the heart of the intervention because communication happens on a daily basis, in everyday activities. When speech and language goals are integrated into daily routines and repeated at home, daycare and/or school, children benefit and progress more quickly. This also allows for a faster generalization in conversation.',
      fr: 'Nous en discuterons plus spécifiquement lors de votre première visite. En général, le nombre de séances de thérapie varie d\'un enfant à l\'autre, selon la nature et la gravité du retard de la parole et/ou du langage et des objectifs ciblés. La recherche montre que les interventions intensives précoces chez les jeunes enfants conduisent à de meilleurs résultats et à des gains plus rapides. Je crois fermement que le parent est au cœur de l\'intervention car la communication se produit quotidiennement, dans les activités quotidiennes. Lorsque les objectifs de parole et de langage sont intégrés aux routines quotidiennes et répétés à la maison, à la garderie et/ou à l\'école, les enfants en bénéficient et progressent plus rapidement. Cela permet également une généralisation plus rapide dans la conversation.'
    },
    'faq.q6': {
      en: 'Should I continue my free speech therapy services at the health unit or school?',
      fr: 'Dois-je continuer mes services gratuits d\'orthophonie à l\'unité de santé ou à l\'école?'
    },
    'faq.a6': {
      en: 'Absolutely. I strongly recommend that families continue to receive any services available through publicly funded agencies (e.g., such as the preschool speech and language programs, Words in Bloom at the Eastern Ontario Health Unit, First Words in Ottawa) or through their speech-language pathology services offered at the school.',
      fr: 'Absolument. Je recommande fortement que les familles continuent de recevoir tous les services disponibles par le biais d\'agences financées publiquement (par exemple, les programmes de parole et de langage préscolaires, Words in Bloom à l\'Unité de santé de l\'Est de l\'Ontario, Premiers Mots à Ottawa) ou par le biais de leurs services d\'orthophonie offerts à l\'école.'
    },
    'faq.q7': {
      en: 'Do you provide home-based visits, evening, or weekend appointments?',
      fr: 'Offrez-vous des visites à domicile, des rendez-vous en soirée ou en fin de semaine?'
    },
    'faq.a7': {
      en: 'Unfortunately, I don\'t. I offer my professional services at my private clinic. I start as early as 7:45am and my last visit can be at 5:00pm. Weekend and evening appointments are not available.',
      fr: 'Malheureusement, non. J\'offre mes services professionnels à ma clinique privée. Je commence dès 7h45 et ma dernière visite peut être à 17h00. Les rendez-vous en fin de semaine et en soirée ne sont pas disponibles.'
    },

    // About Page
    'about.title': {
      en: 'About Me',
      fr: 'À propos de moi'
    },
    'about.mission': {
      en: 'My mission is simple: help children communicate. Because communicating is also about building relationships, it\'s about growing up and having the tools to learn and succeed in life. For the best start in life, children need to communicate, play and learn with the community.',
      fr: 'Ma mission est simple : aider les enfants à communiquer. Parce que communiquer, c\'est aussi construire des relations, c\'est grandir et avoir les outils pour apprendre et réussir dans la vie. Pour le meilleur départ dans la vie, les enfants doivent communiquer, jouer et apprendre avec la communauté.'
    },
    'about.experience': {
      en: 'I have been working as a speech-language pathologist privately and in the public sector since 1990. I provide assessment, treatment and consultation services for children with speech and language (oral and written language) delays and their parents.',
      fr: 'Je travaille comme orthophoniste en pratique privée et dans le secteur public depuis 1990. Je fournis des services d\'évaluation, de traitement et de consultation pour les enfants ayant des retards de parole et de langage (langage oral et écrit) et leurs parents.'
    },
    'about.services': {
      en: 'I work primarily with toddlers, preschoolers, and school-age kids. I provide direct clinical services, consultation, education and health promotion services to parents and other professionals.',
      fr: 'Je travaille principalement avec les tout-petits, les enfants d\'âge préscolaire et les enfants d\'âge scolaire. Je fournis des services cliniques directs, de consultation, d\'éducation et de promotion de la santé aux parents et autres professionnels.'
    },
    'about.passion': {
      en: 'A passionate speech language pathologist committed to promoting early childhood communication for a better start and success throughout her life.',
      fr: 'Une orthophoniste passionnée engagée à promouvoir la communication de la petite enfance pour un meilleur départ et un succès tout au long de sa vie.'
    },
    'about.heart': {
      en: 'The child and the family are at the heart of every intervention I offer.',
      fr: 'L\'enfant et la famille sont au cœur de chaque intervention que j\'offre.'
    },
    'about.bilingual': {
      en: 'Proud to offer bilingual speech-language services: in French and English.',
      fr: 'Fière d\'offrir des services d\'orthophonie bilingues : en français et en anglais.'
    },
    'about.registered': {
      en: 'Registered SLP with the College of Audiologists and Speech-Language Pathologists of Ontario.',
      fr: 'Orthophoniste agréée auprès de l\'Ordre des audiologistes et des orthophonistes de l\'Ontario.'
    },

    // Contact Page
    'contact.title': {
      en: 'Contact Me',
      fr: 'Contactez-moi'
    },
    'contact.name': {
      en: 'Roxane Bélanger',
      fr: 'Roxane Bélanger'
    },
    'contact.profession': {
      en: 'Speech Language Pathologist',
      fr: 'Orthophoniste'
    },
    'contact.clinic': {
      en: 'Communication Development Clinic',
      fr: 'Clinique de développement de la communication'
    },
    'contact.phone': {
      en: 'Tel: 613-296-6688',
      fr: 'Tél : 613-296-6688'
    },
    'contact.email': {
      en: 'Email:',
      fr: 'Courriel :'
    },
    'contact.address': {
      en: 'Address: 62 Bourdeau Crescent, Embrun, Ontario',
      fr: 'Adresse : 62 Croissant Bourdeau, Embrun, Ontario'
    },

    // Footer
    'footer.phone': {
      en: '613-296-6688',
      fr: '613-296-6688'
    },
    'footer.email': {
      en: 'roxane.belanger.cdc@gmail.com',
      fr: 'roxane.belanger.cdc@gmail.com'
    }
  };

  get language() {
    return this.currentLanguage();
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
  }

  toggleLanguage() {
    this.currentLanguage.set(this.currentLanguage() === 'en' ? 'fr' : 'en');
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[this.currentLanguage()];
  }
}
