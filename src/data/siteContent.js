/** Central copy & config — edit here to update the whole site (no backend). */

import academiaImg from '../assets/academia.jpeg'
import culturalImg from '../assets/cultural.jpeg'
import montessoriImg from '../assets/montessori.jpeg'
import prizeImg from '../assets/prize distribution.jpeg'
import sportsImg from '../assets/sports.jpeg'
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
      'Inter-campus Naat, Qirat, Urdu and English debates, and drama — confidence on stage translates to leadership in class.',
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
    title: 'Service & houses',
    text:
      'House systems and service projects build collaboration — similar cadence to Roots’ societies without extra login friction.',
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
  phoneTel: 'tel:+92533728614',
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
    id: 'admissions',
    emphasis: 'Admissions open',
    line: '{session}: speak to your nearest campus or ',
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
    description: 'Our story, leadership message, and what guides every campus.',
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
  { value: '15+', label: 'Campuses nationwide', hint: 'Update with your official count.' },
  { value: '6', label: 'Learning pillars', hint: 'Montessori to character & career.' },
  { value: '100%', label: 'Holistic focus', hint: 'Academics, faith & life skills together.' },
]

export const programs = [
  {
    title: 'Montessori Education',
    text: 'Activity-based learning through apparatus, audio-visual tools, and guided exploration so young minds learn by doing.',
    icon: 'shapes',
  },
  {
    title: 'Quranic Education',
    text: 'Compulsory for Muslim students: Nazra with completion of Majeed and Urdu translation, taught with care and routine.',
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
    title: 'Visionary learning',
    text: 'Holistic growth with academic rigour and room for curiosity.',
  },
  {
    title: 'Supportive community',
    text: 'Safe routines where every child is seen, heard, and guided.',
  },
  {
    title: 'Character building',
    text: 'Discipline, responsibility, and empathy through collaborative work.',
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
