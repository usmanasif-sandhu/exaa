/** Central copy & config — edit here to update the whole site (no backend). */

import academiaImg from '../assets/academia.jpeg'
import culturalImg from '../assets/culturalevent.jpeg'
import montessoriImg from '../assets/prize 2.jpeg'
import prizeImg from '../assets/prize distribution.jpeg'
import sportsImg from '../assets/sports 3.jpeg'
import culturalStudentImg from '../assets/cultural 2.jpeg'
import intercampusImg from '../assets/intercampuses competetion.jpeg'
import montessoriLifeImg from '../assets/montessori 1.jpeg'
import qiratNaatImg from '../assets/qirat naat competetion.jpeg'
import sportsLifeImg from '../assets/sports 1.jpeg'

/** Hero right-column carousel — order and copy editable here */
export const heroCarouselSlides = [
  {
    src: montessoriImg,
    alt: 'Young learners in Montessori activities at an Exaa classroom',
  },
  {
    src: academiaImg,
    alt: 'Students engaged in academics at Exaa',
  },
  {
    src: culturalImg,
    alt: 'Cultural and creative student life at Exaa',
  },
  {
    src: sportsImg,
    alt: 'Sports and physical education at Exaa',
  },
  {
    src: prizeImg,
    alt: 'Students celebrating achievement at Exaa',
  },
]

/** Student life — one image per pillar (shown on /student-life) */
export const studentLifeBlocks = [
  {
    icon: 'mic',
    title: 'Performing arts & oratory',
    text:
      'Debating Society, Dramatic Society, Naat Society, Qirat Society, literary activities, public speaking, educational competitions, and school events — confidence on stage translates to leadership in class.',
    image: qiratNaatImg,
    imageAlt: 'Students taking part in naat and qirat competitions on campus.',
  },
  {
    icon: 'trophy',
    title: 'Athletics & self-defence',
    text:
      'Structured PE, inter-house fixtures, and martial-arts style discipline supervised by trained staff.',
    image: sportsLifeImg,
    imageAlt: 'Students in structured sports and physical education.',
  },
  {
    icon: 'users',
    title: 'Service, houses & leadership',
    text:
      'House systems, annual student council elections, and service projects build collaboration, responsibility, and democratic values.',
    image: intercampusImg,
    imageAlt: 'Students at an inter-campus competition.',
  },
  {
    icon: 'shield',
    title: 'Safe climate',
    text:
      'Published anti-bullying norms, visitor protocols, and staff supervision ratios appropriate to age bands.',
    image: montessoriLifeImg,
    imageAlt: 'Young learners in a supervised, welcoming classroom.',
  },
  {
    icon: 'palette',
    title: 'Creative studios',
    text: 'Art, craft, and display weeks let younger learners narrate learning through colour and construction.',
    image: culturalStudentImg,
    imageAlt: 'Students engaged in arts and cultural activities.',
  },
]

export const brand = {
  name: 'The Exaa School System',
  tagline: 'A national wake field',
  phone: '0331-9993209',
  phoneTel: 'tel:+923319993209',
  email: 'myexaa@gmail.com',
  emailHref: 'mailto:myexaa@gmail.com',
  /** WhatsApp number (any common format); floating button uses wa.me after normalization. */
  whatsapp: '+923319993209',
}

/**
 * Rotating copy for the Home announcement strip — edit lines or add slides here.
 * Use `{session}` anywhere in `line`; it expands to Session Y–Y+1.
 */
export const announcementSlides = [
  {
    id: 'results',
    emphasis: '100% Matric result 2025',
    line: 'Outstanding board achievement — ',
    link: { to: '/academics', label: 'see academic results' },
    suffix: '.',
  },
  {
    id: 'admissions',
    emphasis: 'Admissions open',
    line: '{session}: merit scholarships available — speak to your nearest campus or ',
    link: { to: '/admissions', label: 'view the process' },
    suffix: '.',
  },
  {
    id: 'campuses',
    emphasis: 'National network',
    line: 'Find addresses, timings, and contact details for each branch — ',
    link: { to: '/campuses', label: 'explore campuses' },
    suffix: '.',
  },
  {
    id: 'contact',
    emphasis: "We're here to help",
    line: 'Office hours and direct lines for families — ',
    link: { to: '/contact', label: 'get in touch' },
    suffix: '.',
  },
  {
    id: 'life',
    emphasis: 'Student life',
    line: 'Performing arts, sport, societies, and campus rhythm — ',
    link: { to: '/student-life', label: 'see what happens beyond class' },
    suffix: '.',
  },
]

export const hours = [
  { label: 'Monday – Saturday', value: '8:00 a.m. – 1:30 p.m.' },
  { label: 'Friday', value: '8:00 a.m. – 12:00 p.m.' },
  { label: 'Sunday', value: 'Closed' },
]

export const quickLinks = [
  {
    title: 'About Exaa',
    description: 'BISE Gujranwala–affiliated, Montessori to Matric, with Islamic values at the core.',
    to: '/about',
    icon: 'compass',
  },
  {
    title: 'Admissions',
    description: 'Age groups, process, fees overview, and how to secure a seat.',
    to: '/admissions',
    icon: 'clipboard',
  },
  {
    title: 'Academics',
    description: 'Programs from activity-based early years to career-ready skills.',
    to: '/academics',
    icon: 'book',
  },
  {
    title: 'Campuses',
    description: 'Find your nearest branch, timings, and campus contact details.',
    to: '/campuses',
    icon: 'map',
  },
]

export const stats = [
  { value: 'BISE', label: 'Gujranwala affiliated', hint: 'Recognised board examinations.' },
  { value: 'Montessori–Matric', label: 'Complete pathway', hint: 'Early years through secondary.' },
  { value: '100%', label: 'Matric result 2025', hint: 'Outstanding board achievement.' },
]

/** School profile — edit here to update About page and related copy */
export const schoolProfile = {
  affiliation: 'Affiliated with BISE Gujranwala',
  levels: 'Classes from Montessori to Matric',
  staff: 'Qualified and professional teaching staff',
  pillars: [
    'Academic excellence',
    'Discipline',
    'Character building',
    'Islamic values',
  ],
  intro:
    'The Exaa School System is a BISE Gujranwala–affiliated institution offering classes from Montessori to Matric. Our qualified and professional teaching staff are committed to academic excellence, discipline, character building, and Islamic values — nurturing confident learners who excel in board examinations and in life.',
}

/** Hifz-ul-Quran program — edit features or copy here */
export const hifzProgram = {
  title: 'Hifz-ul-Quran Program',
  description:
    'We offer a structured Hifz-ul-Quran program for students who wish to memorize the Holy Quran alongside their academic education. Under the supervision of qualified Huffaz and Quran instructors, students receive proper Tajweed guidance, memorization support, revision sessions, and Islamic character development in a nurturing environment.',
  features: [
    'Qualified Huffaz and Quran Teachers',
    'Tajweed Instruction',
    'Daily Memorization and Revision',
    'Progress Monitoring',
    'Islamic Character Development',
    'Balanced Academic and Hifz Education',
  ],
}

/** Scholarships & financial assistance */
export const scholarships = {
  title: 'Scholarships & Financial Assistance',
  description:
    'Merit-based scholarships and fee concessions are available for deserving and high-achieving students. The school is committed to ensuring that talented students have access to quality education regardless of financial circumstances.',
}

/** Police welfare educational support */
export const policeWelfare = {
  title: 'Police Welfare Educational Support',
  intro: 'As a tribute to the sacrifices of the police community, the school offers:',
  benefits: [
    '100% fee waiver for children of Police Shuhada.',
    '50% fee concession for children of serving police employees.',
    'Educational support for police families.',
    'Verification requirements may apply.',
  ],
}

/** Co-curricular societies and activities */
export const coCurricularActivities = [
  'Debating Society',
  'Dramatic Society',
  'Naat Society',
  'Qirat Society',
  'Literary Activities',
  'Public Speaking Opportunities',
  'Educational Competitions',
  'School Events and Functions',
]

/** Student leadership program */
export const studentLeadership = {
  title: 'Student Leadership Program',
  description:
    'Annual student council elections are conducted to encourage leadership, responsibility, confidence, teamwork, and democratic values among students.',
}

/**
 * Academic results — edit cards and achievers here when new board results arrive.
 * Set `placeholder: true` on a card to show [To Be Added] fields.
 */
export const academicResults = {
  intro: {
    eyebrow: 'Achievements',
    title: 'Outstanding Academic Results',
    subtitle:
      'Our students consistently achieve excellent results in board examinations and academic assessments.',
  },
  cards: [
    {
      id: 'matric-2025',
      year: '2025',
      exam: 'Matriculation Part II',
      board: 'BISE Gujranwala',
      passPercentage: '100%',
      positionHolders: '17 High Achievers',
      placeholder: false,
      topAchievers: [
        { name: 'Hamna Shehzad', marks: 1142, grade: 'A+' },
        { name: 'Urba Fatima', marks: 1126, grade: 'A+' },
        { name: 'Noor Fatima', marks: 1118, grade: 'A+' },
        { name: 'Eshal Zahra', marks: 1115, grade: 'A+' },
        { name: 'Irfah Eman', marks: 1114, grade: 'A+' },
        { name: 'Abdul Wasy', marks: 1106, grade: 'A+' },
        { name: 'Ghania Babar', marks: 1105, grade: 'A+' },
        { name: 'Momina Farrukh', marks: 1105, grade: 'A+' },
        { name: 'Laiba Toor', marks: 1091, grade: 'A' },
        { name: 'Laraib Fatima', marks: 1086, grade: 'A' },
        { name: 'Abdullah Nawaz', marks: 1074, grade: 'A' },
        { name: 'Qurtaba Fatima', marks: 1072, grade: 'A' },
        { name: 'Huzaifa Bin Imran', marks: 1059, grade: 'A' },
        { name: 'M Hadid', marks: 1042, grade: 'A' },
        { name: 'Aleeza Tahir', marks: 1021, grade: 'A' },
        { name: 'Aiman Naveed', marks: 1018, grade: 'A' },
        { name: 'M Saim Ali', marks: 1005, grade: 'A' },
      ],
    },
  ],
}

/** Primary result card shown on Home and Academics — first non-placeholder entry */
export const featuredResult = academicResults.cards.find((c) => !c.placeholder) ?? academicResults.cards[0]

/** Results announcement popup — image lives in /public */
export const resultsPopup = {
  image: '/results.jpeg',
  imageAlt: 'The Exaa School System — 100% Matric result 2025, high achievers and admissions open.',
  linkTo: '/academics',
  storageKey: 'exaa-results-popup-dismissed',
}

/** Homepage highlight bullets — surfaced in hero and values */
export const homepageHighlights = [
  'BISE Gujranwala Affiliated',
  'Montessori to Matric Education',
  'Professional Teaching Staff',
  'Hifz-ul-Quran Program',
  'Merit Scholarships',
  'Police Welfare Concessions',
  'Student Societies',
  'Annual Student Elections',
  'Strong Academic Results',
]

export const programs = [
  {
    title: 'Montessori Education',
    text: 'Activity-based learning through apparatus, audio-visual tools, and guided exploration so young minds learn by doing.',
    icon: 'shapes',
  },
  {
    title: 'Quranic Education & Hifz',
    text: 'Nazra with Tajweed for all Muslim students, plus a structured Hifz-ul-Quran program under qualified Huffaz alongside academics.',
    icon: 'sparkles',
  },
  {
    title: 'Sports & Games',
    text: 'Self-defence, martial arts, and structured sports under trained instructors — fitness with discipline.',
    icon: 'activity',
  },
  {
    title: 'Career-Oriented Education',
    text: 'Weekly module sessions where trainers counsel students on pathways aligned with aptitude and interest.',
    icon: 'target',
  },
  {
    title: 'English Language',
    text: 'Speaking-first culture in class and outdoors so fluency grows naturally through daily practice.',
    icon: 'message',
  },
  {
    title: 'Art & Craft',
    text: 'Creative projects at every level to strengthen imagination, patience, and fine motor skills.',
    icon: 'palette',
  },
]

export const values = [
  {
    title: 'Academic excellence',
    text: 'BISE Gujranwala–affiliated programmes from Montessori to Matric with strong board results.',
  },
  {
    title: 'Islamic values & discipline',
    text: 'Quranic education, Hifz-ul-Quran, and character building woven into daily school life.',
  },
  {
    title: 'Professional teaching staff',
    text: 'Qualified educators who nurture confidence, responsibility, and leadership in every learner.',
  },
]

export const testimonials = [
  {
    quote:
      'The balance of academics and values gave our children confidence to speak in public and care for others.',
    name: 'Parent, Exaa campus',
    role: 'Primary & middle years',
  },
  {
    quote:
      'Weekly career conversations helped us understand options early — the school treats aspiration seriously.',
    name: 'Parent, Exaa campus',
    role: 'Secondary',
  },
  {
    quote:
      'Teachers communicate clearly and the campus feels orderly. Our daughter looks forward to school every day.',
    name: 'Parent, Exaa campus',
    role: 'Early years',
  },
]

/** Home page — next few milestones (edit as the year progresses) */
export const calendarHighlights = [
  { day: '05', month: 'Jun', title: '1st PTM & summer work distribution', time: '5th and 6th June 2026' },
  { day: '24', month: 'Jun', title: 'Day of Ashura', time: '24th – 25th June 2026' },
  { day: '01', month: 'Aug', title: 'Summer work submission', time: '1st – 3rd August 2026' },
]

/** Exaa Academic Calendar — Session 2026–27 */
export const academicCalendar = [
  { no: 1, title: 'New Session', when: '1st week of March' },
  { no: 2, title: 'Orientation PTM', when: '8th March 2026' },
  { no: 3, title: 'Mid Term Test', when: '11th May 2026' },
  { no: 4, title: 'Mothers Conference', when: '21st May 2026' },
  { no: 5, title: 'Summer Vacations', when: '31st May to 14th August' },
  { no: 6, title: '1st PTM & summer work distribution', when: '5th and 6th June 2026' },
  { no: 7, title: 'Summer work submission date', when: '1st to 3rd August 2026' },
  { no: 8, title: "Teachers' training workshop", when: '8th August 2026' },
  { no: 9, title: 'School re-open after summer holidays', when: '15th August 2026' },
  { no: 10, title: '2nd PTM', when: '29th August 2026' },
  { no: 11, title: 'First term examination', when: '5th September 2026' },
  { no: 12, title: '2nd term classes', when: '22nd September 2026' },
  { no: 13, title: '3rd PTM', when: '26th September 2026' },
  { no: 14, title: 'Mid term test', when: '2nd November 2026' },
  { no: 15, title: '4th PTM', when: 'Last Saturday of November' },
  { no: 16, title: 'Final term syllabus completion date', when: '15th December 2026' },
  { no: 17, title: 'Winter holidays', when: '23rd December to 10th January' },
  { no: 18, title: '5th PTM', when: '23rd January 2027, Saturday' },
  { no: 19, title: 'Final term examination', when: '6th February 2027' },
  { no: 20, title: 'Mothers conference', when: '7th February 2027' },
  { no: 21, title: "Teachers' training workshop", when: '2nd week of February 2027' },
  { no: 22, title: 'Annual day', when: 'Last week of February 2027' },
]

/** Exaa Events Calendar — Session 2026 */
export const eventsCalendar = [
  { no: 1, title: 'Cultural Day', when: '14th March' },
  { no: 2, title: 'Resolution Day', when: '23rd March' },
  { no: 3, title: 'Iqbal Day', when: '21st April' },
  { no: 4, title: 'Earth Day', when: '22nd April' },
  { no: 5, title: 'Story Day / Movie Day', when: '28th April' },
  { no: 6, title: 'Labour Day special assembly', when: '30th April' },
  { no: 7, title: 'My First Speech (Montessori section)', when: '4th to 7th May' },
  { no: 8, title: 'Society elections', when: '27th – 30th May 2026' },
  { no: 9, title: "Mothers Day special celebration with mothers", when: '10th May' },
  { no: 10, title: 'Fruit day / Colour day', when: '14th May 2026' },
  { no: 12, title: 'Drama Day', when: '20th May 2026' },
  { no: 13, title: 'Eid ul Adha', when: '26th – 27th May 2026' },
  { no: 14, title: 'Day of Ashura', when: '24th – 25th June 2026' },
  { no: 15, title: 'Independence Day function', when: '14th August 2026' },
  { no: 16, title: 'Independence Day holiday', when: '15th August 2026' },
  { no: 17, title: '12th Rabi-ul-Awal (holiday)', when: '25th August 2026' },
  { no: 18, title: 'Mehfil-e-Milaad', when: 'Last week of September 2026' },
  {
    no: 19,
    title: 'Defense Day special assembly, Quaid death anniversary & quiz program',
    when: '3rd September 2026, Thursday',
  },
  { no: 20, title: 'Spelling & essay competition', when: '19th September 2026' },
  { no: 21, title: "Teacher's Day (cards making) special assembly", when: '5th October 2026, Monday' },
  { no: 22, title: 'Art & craft exhibition & science exhibition', when: '17th October 2026' },
  {
    no: 23,
    title: 'Iqbal Day function, bait bazi & quiz competition',
    when: '7th November 2026',
  },
  { no: 24, title: 'Iqbal Day (holiday)', when: '9th November 2026' },
  {
    no: 25,
    title: 'Inter-campus debates and Hussan-e-Naat o Qirat competition',
    when: '11th – 12th November 2026 (Wednesday, Thursday)',
  },
  { no: 26, title: 'Sports gala (inter-campus)', when: '4th – 5th December 2026 (Friday, Saturday)' },
  { no: 28, title: 'Drama festival', when: '12th December 2026' },
  { no: 29, title: 'Quaid-e-Azam Day', when: '25th December 2026' },
  { no: 30, title: 'Character Day', when: 'Celebrated once a month' },
  { no: 31, title: 'Grandparents Day', when: '2nd January 2027' },
  { no: 32, title: 'Annual Day', when: 'Last week of February 2027' },
]

export const policeMou = {
  title: 'MOU with Punjab Police, Gujrat',
  subtitle: 'Memorandum of Understanding between Punjab Police and The Exaa School System',
  partner: 'Punjab Police · Gujrat Region',
  href: 'https://punjabpolice.gov.pk/system/files/8-MOU%20of%20Police%20Gujrat-11.pdf',
  summary:
    'A formal partnership underscoring shared commitment to student safety, community trust, and coordinated support across our campuses.',
}

/** Pakistani phone → tel: link for campus cards and CTAs */
export function phoneTelHref(number) {
  const digits = String(number).replace(/\D/g, '')
  if (!digits) return '#'
  const normalized = digits.startsWith('92') ? digits : `92${digits.replace(/^0/, '')}`
  return `tel:+${normalized}`
}

export const campuses = [
  {
    name: 'The Exaa School System Shadman Campus',
    city: 'Gujrat',
    area: 'Shadman · Main Campus',
    address: 'Shadman Colony, Gujrat',
    phone: '0331-9993209',
    phoneTel: phoneTelHref('03319993209'),
    email: brand.email,
    emailHref: brand.emailHref,
    mapLink: 'https://maps.app.goo.gl/7G9pXRyk1Tu7ZybV7',
    slug: 'shadman-main',
  },
  {
    name: 'The Exaa School System Lalamusa Campus',
    city: 'Lalamusa',
    area: 'Purani Chungi · Main GT Road',
    address: 'Purani Chungi, Main GT Road, Lalamusa',
    phone: '0300-6241698',
    phoneTel: phoneTelHref('03006241698'),
    email: 'exaalalamusa@gmail.com',
    emailHref: 'mailto:exaalalamusa@gmail.com',
    mapLink: 'https://maps.app.goo.gl/amUAEiCMtGtVa6V5A',
    slug: 'lalamusa',
  },
  {
    name: 'The Exaa School System Kunjah Campus',
    city: 'Kunjah',
    area: 'Sargodha Road',
    address: 'Near Nagrinwali Chungi, Sargodha Road, Kunjah',
    phone: '0334-3604646',
    phoneAlt: '053-3382000',
    phoneTel: phoneTelHref('03343604646'),
    phoneAltTel: phoneTelHref('0533382000'),
    email: 'theexaakunjahcampus@gmail.com',
    emailHref: 'mailto:theexaakunjahcampus@gmail.com',
    mapLink: 'https://maps.app.goo.gl/PwubkhqLcMDFScYK8',
    slug: 'kunjah',
  },
  {
    name: 'The Exaa School System Lakhanwal Campus',
    city: 'Lakhanwal',
    area: 'Lakhanwal Khurd',
    address: 'Tanda Road, Daras Stop, Lakhanwal Khurd',
    phone: '053-3702017',
    phoneTel: phoneTelHref('0533702017'),
    email: 'exaalakhanwal@gmail.com',
    emailHref: 'mailto:exaalakhanwal@gmail.com',
    slug: 'lakhanwal',
  },
  {
    name: 'The Exaa School System Faateh Campus',
    city: 'Gujrat',
    area: 'Faateh Campus',
    address: 'University Road, near Askari Bank, Gujrat',
    phone: '0332-8718301',
    phoneTel: phoneTelHref('03328718301'),
    email: 'exaafaateh@gmail.com',
    emailHref: 'mailto:exaafaateh@gmail.com',
    slug: 'faateh',
  },
  {
    name: 'The Exaa School System Ahad Campus',
    city: 'Wazirabad',
    area: 'Ahad Campus',
    address: 'Sialkot Road, Cheema Colony, Disposal Road, Wazirabad',
    phone: '0318-3665565',
    phoneTel: phoneTelHref('03183665565'),
    email: 'virkenterprises1091@gmail.com',
    emailHref: 'mailto:virkenterprises1091@gmail.com',
    mapLink: 'https://maps.app.goo.gl/t8CwCkqeWdiPD7v87',
    slug: 'wazirabad-ahad',
  },
  {
    name: 'The Exaa School System Fatehpur Campus',
    city: 'Fatehpur',
    area: 'Jalalpur Jattan Road',
    address: 'Near Sufi Marriage Hall, Jalalpur Jattan Road, Fatehpur',
    phone: '0333-8526622',
    phoneTel: phoneTelHref('03338526622'),
    email: 'exaaschoolfatehpur@gmail.com',
    emailHref: 'mailto:exaaschoolfatehpur@gmail.com',
    mapLink: 'https://maps.app.goo.gl/wAGsGVjcjnaBq9HF8',
    slug: 'fatehpur',
  },
  {
    name: 'The Exaa School System Eman Campus',
    city: 'Mangowal',
    area: 'Mangowal West',
    address: 'Eman Campus, Mangowal West',
    phone: '0349-0347325',
    phoneTel: phoneTelHref('03490347325'),
    email: 'exaaemancapus@gmail.com',
    emailHref: 'mailto:exaaemancapus@gmail.com',
    mapLink: 'https://maps.app.goo.gl/JwxUXT6DhW9fhZ2GA',
    slug: 'mangowal-eman',
  },
  {
    name: 'The Exaa School Shaheen Campus',
    city: 'Gujrat',
    area: 'Shaheen Chowk',
    address: 'N5 GT Road, Shaheen Chowk, Gujrat',
    phone: '0318-7260180',
    phoneTel: phoneTelHref('03187260180'),
    email: 'theexaashaheenchowk@gmail.com',
    emailHref: 'mailto:theexaashaheenchowk@gmail.com',
    mapLink: 'https://maps.app.goo.gl/xFhbfUQqrL9avDpn9',
    slug: 'shaheen',
  },
  {
    name: 'The Exaa School System Pahrianwali Boys Campus',
    city: 'Pahrianwali',
    area: 'Boys Campus',
    address: 'Pahrianwali',
    phone: '0305-7752226',
    phoneTel: phoneTelHref('03057752226'),
    email: 'theexaapar@gmail.com',
    emailHref: 'mailto:theexaapar@gmail.com',
    mapLink: 'https://maps.app.goo.gl/SZ1nSWtjGYT78r996',
    slug: 'pahrianwali',
  },
]

export const admissionSteps = [
  { step: 1, title: 'Inquiry', text: 'Call, WhatsApp, or visit your preferred campus for a short orientation.' },
  { step: 2, title: 'Assessment & interview', text: 'Age-appropriate readiness check and a conversation with parents.' },
  { step: 3, title: 'Enrollment', text: 'Complete forms, fee deposit, and uniform / book allocation as per campus calendar.' },
]

/** Admission policy — accordion content on /admissions */
export const admissionPolicy = {
  intro: 'The purpose of this admission policy is to standardize the registration for admissions.',
  sections: [
    {
      id: 'levels',
      title: 'Levels of Education',
      type: 'levels',
      columns: [
        {
          title: 'Preschool',
          classes: ['Jr. Montessori', 'Sr. Montessori', 'Advance Montessori'],
        },
        {
          title: 'Junior School',
          classes: ['Class I', 'Class II', 'Class III'],
        },
        {
          title: 'Primary School',
          classes: [
            'Class I',
            'Class II',
            'Class III',
            'Class IV',
            'Class V',
          ],
        },
        {
          title: 'Secondary School',
          classes: ['Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'],
        },
      ],
    },
    {
      id: 'age-range',
      title: 'Age Range',
      type: 'age-tables',
      groups: [
        {
          title: 'Pre School',
          rows: [
            { classLevel: 'Jr. Montessori', minAge: '2+ Years', maxAge: '2+ Years' },
            { classLevel: 'Sr. Montessori', minAge: '3 Years', maxAge: '3 Years' },
            { classLevel: 'Advance Montessori', minAge: '4 Years', maxAge: '5 Years' },
          ],
        },
        {
          title: 'Primary School',
          rows: [
            { classLevel: 'Class I', minAge: '5 years', maxAge: '6 years' },
            { classLevel: 'Class II', minAge: '6 Years', maxAge: '7 Years' },
            { classLevel: 'Class III', minAge: '7 Years', maxAge: '8 Years' },
            { classLevel: 'Class IV', minAge: '8 Years', maxAge: '9 Years' },
            { classLevel: 'Class V', minAge: '9 Years', maxAge: '10 Years' },
          ],
        },
        {
          title: 'Elementary School',
          rows: [
            { classLevel: 'Class VI', minAge: '10 years', maxAge: '11 years' },
            { classLevel: 'Class VII', minAge: '11 Years', maxAge: '12 Years' },
            { classLevel: 'Class VIII', minAge: '12 Years', maxAge: '13 Years' },
          ],
        },
        {
          title: 'Secondary School',
          rows: [
            { classLevel: 'Class IX', minAge: '13 years', maxAge: '14 years' },
            { classLevel: 'Class X', minAge: '14 Years', maxAge: '15 Years' },
          ],
        },
      ],
    },
    {
      id: 'criteria',
      title: 'Admission Criteria',
      type: 'criteria',
      intro: 'Admissions at The Exaa School System depend on the following conditions.',
      conditions: [
        'Availability of Seats',
        'Score of Admission Test',
        'Interview of Child/Parent',
      ],
      groups: [
        {
          title: 'Pre School',
          rows: [  
            { classLevel: 'Jr. Montessori', test: 'Interview' },
            { classLevel: 'Sr. Montessori', test: 'Interview' },
            { classLevel: 'Advance Montessori', test: 'Written Test + Interview' },
          ],
        },
        {
          title: 'Primary School',
          rows: [
            { classLevel: 'Class I', test: 'English, Urdu & Mathematics' },
            { classLevel: 'Class II', test: 'English, Urdu & Mathematics' },
            { classLevel: 'Class III', test: 'English, Urdu & Mathematics' },
            { classLevel: 'Class IV', test: 'English, Urdu & Mathematics' },
            { classLevel: 'Class V', test: 'English, Urdu & Mathematics' },
          ],
        },
        {
          title: 'Elementary School',
          rows: [
            { classLevel: 'Class VI', test: 'English, Urdu, Mathematics & Science' },
            { classLevel: 'Class VII', test: 'English, Urdu, Mathematics & Science' },
            { classLevel: 'Class VIII', test: 'English, Urdu, Mathematics & Science' },
          ],
        },
        {
          title: 'Secondary School',
          rows: [
            {
              classLevel: 'Class IX',
              test: 'Science/Computer , English, Urdu, Mathematics & Science',
            },
          ],
        },
      ],
    },
    {
      id: 'journey',
      title: 'Admission Journey',
      type: 'journey',
      columns: [
        {
          title: 'Pre School',
          steps: [
            'First Registration',
            'Admission Registration Form',
            'Interview',
            'Admission Form',
            'Fee Challan',
            'Admission Order',
          ],
        },
        {
          title: 'Primary',
          steps: [
            'First Registration',
            'Admission Registration Form',
            'Interview',
            'Admission Form',
            'Admission Test',
            'Fee Challan',
            'Admission Order',
          ],
        },
        {
          title: 'Secondary/Ele',
          steps: [
            'First Registration',
            'Admission Registration Form',
            'Interview',
            'Admission Form',
            'Admission Test',
            'Fee Challan',
            'Admission Order',
          ],
        },
      ],
    },
  ],
}

export const footerColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About', to: '/about' },
      { label: 'Academics', to: '/academics' },
      { label: 'Student life', to: '/student-life' },
      { label: 'Calendar', to: '/calendar' },
    ],
  },
  {
    title: 'Families',
    links: [
      { label: 'Admissions', to: '/admissions' },
      { label: 'Campuses', to: '/campuses' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export const heroImage = academiaImg

export const secondaryImage = montessoriImg
