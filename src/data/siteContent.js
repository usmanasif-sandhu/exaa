/** Central copy & config — edit here to update the whole site (no backend). */

export const brand = {
  name: 'The Exaa School system',
  tagline: 'A National Wake Field',
  phone: '053-3728614',
  phoneTel: 'tel:+92533728614',
  email: 'myexaa@gmail.com',
  emailHref: 'mailto:myexaa@gmail.com',
  /** WhatsApp number (any common format); floating button uses wa.me after normalization. */
  whatsapp: '+923171700440',
}

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
    city: 'Lahore',
    area: 'Model Town',
    address: 'Exaa School, Model Town — update with full street address',
    phone: brand.phone,
    slug: 'lahore-model-town',
  },
  {
    city: 'Faisalabad',
    area: 'Peoples Colony',
    address: 'Exaa School, Peoples Colony — update with full street address',
    phone: brand.phone,
    slug: 'faisalabad-peoples-colony',
  },
  {
    city: 'Multan',
    area: 'Gulgasht',
    address: 'Exaa School, Gulgasht — update with full street address',
    phone: brand.phone,
    slug: 'multan-gulgasht',
  },
  {
    city: 'Islamabad',
    area: 'Satellite Town',
    address: 'Exaa School, Satellite Town — update with full street address',
    phone: brand.phone,
    slug: 'islamabad-satellite-town',
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

export const heroImage =
  'https://images.unsplash.com/photo-1580582932707-520edd937bd0?auto=format&fit=crop&w=2000&q=80'

export const secondaryImage =
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80'
