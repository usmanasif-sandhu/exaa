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
  phone: '053-3728614',
  phoneTel: 'tel:+92533728614',
  email: 'myexaa@gmail.com',
  emailHref: 'mailto:myexaa@gmail.com',
  /** WhatsApp number (any common format); floating button uses wa.me after normalization. */
  whatsapp: '+923171700440',
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

export const events = [
  { day: '12', month: 'Aug', title: 'Inter-campus Qirat finals', time: '9:00 a.m. – 1:00 p.m.' },
  { day: '24', month: 'Aug', title: 'Teachers’ professional day', time: 'Campus closed' },
  { day: '05', month: 'Sep', title: 'Olympiad & debate league', time: '8:30 a.m. – 2:00 p.m.' },
]

export const campuses = [
  {
    city: 'Shadman',
    area: 'Main Campus',
    address: 'The Exaa School System, Shadman — add street address and landmark',
    phone: brand.phone,
    slug: 'Gujrat-shadman-main',
  },
  {
    city: 'Lalamusa',
    area: 'Main GT Road',
    address: 'The Exaa School System, Lalamusa — add street address',
    phone: brand.phone,
    slug: 'lalamusa',
  },
  {
    city: 'Kunjah',
    area: 'Sargodah Road',
    address: 'The Exaa School System, Kunjah — add street address',
    phone: brand.phone,
    slug: 'kunjah',
  },
  {
    city: 'Lakhanwal',
    area: '',
    address: 'The Exaa School System, Lakhanwal — add street address',
    phone: brand.phone,
    slug: 'lakhanwal',
  },
  {
    city: 'Faateh',
    area: 'Factory Area Road',
    address: 'The Exaa School System, Faateh campus — add street address',
    phone: brand.phone,
    slug: 'faateh',
  },
  {
    city: 'Wazirabad',
    area: 'Ahad campus',
    address: 'The Exaa School System, Ahad campus, Wazirabad',
    phone: brand.phone,
    slug: 'wazirabad-ahad',
  },
  {
    city: 'Fateh Pur',
    area: 'Kharian-Jalalpur Road',
    address: 'The Exaa School System, Fateh Pur',
    phone: brand.phone,
    slug: 'fateh-pur',
  },
  {
    city: 'Mangowal',
    area: 'Eman Campus',
    address: 'The Exaa School System, Mangowal',
    phone: brand.phone,
    slug: 'mangowal',
  },
  {
    city: 'Shaheen',
    area: 'Shaheen Chowk Gujrat',
    address: 'The Exaa School System, Shaheen campus',
    phone: brand.phone,
    slug: 'shaheen',
  },
  {
    city: 'Parhianwali',
    area: 'Gujrat-Sargodah Road',
    address: 'The Exaa School System, Parhianwali',
    phone: brand.phone,
    slug: 'parhianwali',
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
