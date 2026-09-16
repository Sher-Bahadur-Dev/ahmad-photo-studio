export interface GalleryItem {
  id: string;
  title: string;
  category: 'weddings' | 'events' | 'portraits' | 'studio' | 'other';
  categoryLabel: string;
  imageUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  iconName: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  service: string;
  location: string;
  rating: number;
  comment: string;
}

export const STUDIO_INFO = {
  name: 'Ahmad Photo Studio',
  tagline: 'Capturing Moments. Creating Memories.',
  shortBio: 'Professional photography and video services in Lahore for weddings, events, portraits and every moment worth remembering.',
  location: {
    address: 'G-9, Gulberg, Mateen Majestic, Babbi Chowk, Lahore',
    area: 'Gulberg, Lahore',
    city: 'Lahore, Pakistan',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mateen+Majestic+Babbi+Chowk+Gulberg+Lahore',
  },
  contact: {
    phone: '+92 321 4251524',
    phoneRaw: '+923214251524',
    phoneTelUrl: 'tel:+923214251524',
    whatsappUrl: 'https://wa.me/923214251524?text=Hello%20Ahmad%20Photo%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20your%20photography%20services.',
  },
  hours: {
    weekdays: 'Monday – Saturday: 11:00 AM – 9:00 PM',
    sunday: 'Sunday: 1:00 PM – 8:00 PM',
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    shortDesc: 'Capture weddings, ceremonies, couples and special moments.',
    fullDesc: 'Comprehensive coverage of your special days — from Mehndi and Barat to Walima and intimate reception portraits with cinematic editing.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    iconName: 'Heart',
    features: ['Couple Portraits', 'Candid Moments', 'Family Group Photography', 'High-Resolution Albums'],
  },
  {
    id: 'event',
    title: 'Event Photography',
    shortDesc: 'Professional coverage for parties, corporate events, celebrations and gatherings.',
    fullDesc: 'Reliable on-location photography for corporate galas, anniversary parties, birthday celebrations, and community gatherings across Lahore.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    iconName: 'Calendar',
    features: ['Corporate Summits', 'Birthday Milestones', 'Institutional Ceremonies', 'Express Digital Delivery'],
  },
  {
    id: 'portrait',
    title: 'Portrait Photography',
    shortDesc: 'Professional individual, family and creative portrait sessions.',
    fullDesc: 'Carefully lit indoor and outdoor portrait sessions designed to reflect individual personality, executive professionalism, and warm family bonds.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    iconName: 'User',
    features: ['Executive Headshots', 'Family Generations', 'Creative Portfolio Shoots', 'Subtle Skin Retouching'],
  },
  {
    id: 'passport',
    title: 'Passport / ID Photography',
    shortDesc: 'Clean and professional passport and identification photographs.',
    fullDesc: 'Accurate, compliant photo services for international visas, national identity cards, professional licenses, and academic admissions.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    iconName: 'IdCard',
    features: ['Visa Specifications (US, UK, Schengen, UAE)', 'Instant On-Site Prints', 'Digital Copy Transfer', 'Standard White/Blue Backdrops'],
  },
  {
    id: 'photo-video',
    title: 'Photo & Video Shoots',
    shortDesc: 'Professional photography and video shoots for personal and business needs.',
    fullDesc: 'Creative cinematic video reels, promotional business shoots, brand content, and multi-camera documentation handled with precision equipment.',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    iconName: 'Video',
    features: ['4K Video Documentation', 'Cinematic Highlight Teasers', 'Product & Commercial Shoots', 'Professional Color Grading'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Traditional Bridal Portrait',
    category: 'weddings',
    categoryLabel: 'Weddings',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85',
    aspectRatio: 'portrait',
    caption: 'Intricate bridal details and emotional candid framing.',
  },
  {
    id: 'gal-2',
    title: 'Lahore Evening Wedding Ceremony',
    category: 'weddings',
    categoryLabel: 'Weddings',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'landscape',
    caption: 'Warm ambient illumination during the evening reception.',
  },
  {
    id: 'gal-3',
    title: 'Studio Lighting & Mood Portrait',
    category: 'portraits',
    categoryLabel: 'Portraits',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
    aspectRatio: 'portrait',
    caption: 'Key light and rim light balance for studio portraiture.',
  },
  {
    id: 'gal-4',
    title: 'Executive Professional Headshot',
    category: 'portraits',
    categoryLabel: 'Portraits',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85',
    aspectRatio: 'portrait',
    caption: 'Clean, approachable corporate portrait for leadership profiles.',
  },
  {
    id: 'gal-5',
    title: 'Corporate Gala & Celebration',
    category: 'events',
    categoryLabel: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'landscape',
    caption: 'High-energy live event coverage with natural attendee interactions.',
  },
  {
    id: 'gal-6',
    title: 'Studio Camera & Lens Craft',
    category: 'studio',
    categoryLabel: 'Studio',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85',
    aspectRatio: 'square',
    caption: 'Professional prime lenses and mirrorless cinema rigs at Ahmad Photo Studio.',
  },
  {
    id: 'gal-7',
    title: 'Couple Portrait in Golden Hour',
    category: 'weddings',
    categoryLabel: 'Weddings',
    imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=85',
    aspectRatio: 'portrait',
    caption: 'Outdoor bridal session capturing soft natural sunset tones.',
  },
  {
    id: 'gal-8',
    title: 'Family Studio Gathering',
    category: 'portraits',
    categoryLabel: 'Portraits',
    imageUrl: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'landscape',
    caption: 'Multi-generational family portrait with balanced group styling.',
  },
  {
    id: 'gal-9',
    title: 'Cultural Festival & Gathering',
    category: 'events',
    categoryLabel: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'landscape',
    caption: 'Vibrant stage lighting and audience capture during celebration.',
  },
  {
    id: 'gal-10',
    title: 'In-Studio Backdrop & Lighting Rig',
    category: 'studio',
    categoryLabel: 'Studio',
    imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=900&q=85',
    aspectRatio: 'square',
    caption: 'Softbox diffusers and controlled backdrops inside the Gulberg studio.',
  },
  {
    id: 'gal-11',
    title: 'Wedding Rings & Details',
    category: 'other',
    categoryLabel: 'Other',
    imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=85',
    aspectRatio: 'portrait',
    caption: 'Macro jewelry and memory heirloom photography.',
  },
  {
    id: 'gal-12',
    title: 'Cinematic Video Production',
    category: 'other',
    categoryLabel: 'Other',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=85',
    aspectRatio: 'landscape',
    caption: 'On-set gimbal stabilization and dynamic video motion capture.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Hamza & Sarah Malik',
    service: 'Wedding Photography (Barat & Walima)',
    location: 'Gulberg, Lahore',
    rating: 5,
    comment: 'Ahmad Photo Studio covered both our wedding days in Lahore. They were remarkably punctual, respectful of our family traditions, and captured the most heartfelt candid smiles. The final photo book is exceptional.',
  },
  {
    id: 'test-2',
    name: 'Dr. Usman Tariq',
    service: 'Executive Studio Portrait & Visa Photo',
    location: 'Main Boulevard, Lahore',
    rating: 5,
    comment: 'Needed urgent professional portraits and international visa photos for a fellowship abroad. The studio lighting was spot on, the guidance was great, and the digital files were sent right away.',
  },
  {
    id: 'test-3',
    name: 'Ayesha Raza',
    service: 'Family Milestone Shoot',
    location: 'Model Town, Lahore',
    rating: 5,
    comment: 'The team made our parents feel totally comfortable during our parents’ anniversary shoot. Clean and peaceful studio setup at Mateen Majestic. Highly recommended for family portraits in Lahore.',
  },
  {
    id: 'test-4',
    name: 'Bilal Farooq',
    service: 'Corporate Annual Event Coverage',
    location: 'Lahore Cantt',
    rating: 5,
    comment: 'Professional service and crisp photographs. The team documented our annual corporate seminar seamlessly without causing any disruptions. Prompt delivery of high-res edited photos.',
  },
];
