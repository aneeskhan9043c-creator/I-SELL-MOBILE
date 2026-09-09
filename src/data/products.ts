export interface ProductVariant {
  grade: string;
  gradeColor: string;
  title: string;
  description: string;
  price: string;
  whatsappMessage: string;
  image: string;
}

export interface ProductData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  startingPrice: string;
  heroLabel: string;
  variants: ProductVariant[];
  descriptionTitle: string;
  descriptionIntro: string;
  descriptionParagraphs: string[];
}

import sonyXperia5Img from '../assets/images/regenerated_image_1788896533800.webp';
import oneplusBackImg from '../assets/images/oneplus_back_phone_1788896611661.jpg';
import iphoneBackImg from '../assets/images/iphone_back_phone_1788896635550.jpg';
import ipadBackImg from '../assets/images/ipad_back_tablet_1788896653767.jpg';
import lgSharpBackImg from '../assets/images/lg_sharp_back_1788896669172.jpg';

// Sony 1 Images
import sony1Pristine from '../assets/images/sony_1_pristine_1788974938467.jpg';
import sony1Shade from '../assets/images/sony_1_shade_1788974956646.jpg';
import sony1Line from '../assets/images/sony_1_line_1788974967658.jpg';

// Sony 5 Images
import sony5Pristine from '../assets/images/sony_5_pristine_1788974981510.jpg';
import sony5Shade from '../assets/images/sony_5_shade_1788974993439.jpg';
import sony5Line from '../assets/images/sony_5_line_1788975006351.jpg';

// OnePlus Images
import oneplusPristine from '../assets/images/oneplus_pristine_1788975019687.jpg';
import oneplusLine from '../assets/images/oneplus_line_1788975031416.jpg';

// iPhone Images
import applePristine from '../assets/images/apple_pristine_1788975051407.jpg';
import appleScratch from '../assets/images/apple_scratch_1788975062435.jpg';

// iPad Images
import ipadPristine from '../assets/images/ipad_pristine_1788975075909.jpg';
import ipadScratch from '../assets/images/ipad_scratch_1788975088547.jpg';

// LG / Sharp Images
import lgPristine from '../assets/images/lg_sharp_pristine_1788975100636.jpg';
import lgShade from '../assets/images/lg_sharp_shade_1788975114373.jpg';

export const PRODUCTS: Record<string, ProductData> = {
  'sony-1': {
    id: 'sony-1',
    title: 'Sony Xperia 1',
    subtitle: '4K HDR OLED CinemaWide • Snapdragon Flagship',
    image: '/images/sony_xperia_1.jpg',
    startingPrice: 'Rs. 32,000',
    heroLabel: 'Flagship Japanese Import',
    variants: [
      {
        grade: 'A-Grade',
        gradeColor: 'bg-emerald-500',
        title: '10/10 Full Condition',
        description: 'Scratchless body, perfect 4K display, barometer pressure passed.',
        price: 'Rs. 45,000',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing the Sony Xperia 1 in 10/10 Full Condition. The price mentioned is Rs. 45,000. Please share further details.',
        image: sony1Pristine
      },
      {
        grade: 'B-Grade',
        gradeColor: 'bg-amber-500',
        title: 'Minor Display Shade',
        description: 'Very light shade on white background. Perfect for gaming or dark-mode users. Body 9/10.',
        price: 'Rs. 38,500',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing the Sony Xperia 1 with the Minor Display Shade condition. The price mentioned is Rs. 38,500. Please share pictures of the specific display shade.',
        image: sony1Shade
      },
      {
        grade: 'Clearance',
        gradeColor: 'bg-rose-500',
        title: 'Single Green Line',
        description: 'One thin green line on the edge of the screen. Touch and everything else works 100%. Budget gaming deal.',
        price: 'Rs. 32,000',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing the Sony Xperia 1 with the Single Green Line display condition. The price mentioned is Rs. 32,000. Please share a video showing the exact condition.',
        image: sony1Line
      }
    ],
    descriptionTitle: 'Device Specifications & Details',
    descriptionIntro: 'This phone is a 100% original imported Japanese kit of the Sony Xperia 1. It features the world\'s first 6.5-inch 4K HDR OLED screen with a 21:9 CinemaWide aspect ratio, providing a highly premium experience for movie watching and gaming.',
    descriptionParagraphs: [
      'Powered by the Qualcomm Snapdragon 855 (7nm) octa-core processor and Adreno 640 GPU, it smoothly runs heavy games like PUBG and COD Mobile at high FPS. It comes equipped with 6GB LPDDR4X RAM and 64GB/128GB of fast UFS 2.1 storage (with SD card support).',
      'The rear features a ZEISS optics 12MP (Main) + 12MP (Telephoto) + 12MP (Ultra-Wide) triple camera setup, including Real-time Eye AF and 5-axis OIS. It also includes the Cinema Pro app for advanced video recording.',
      'Battery health is tested above 90% and supports USB-PD fast charging. It features dual stereo speakers (Dolby Atmos) and a side-mounted fast fingerprint scanner. This phone is completely factory unlocked and fully active on all networks with 4G LTE support.'
    ]
  },
  'sony-5': {
    id: 'sony-5',
    title: 'Sony Xperia 5',
    subtitle: '6.1" HDR OLED • Compact Snapdragon Flagship',
    image: sonyXperia5Img,
    startingPrice: 'Rs. 28,000',
    heroLabel: 'Compact Japanese Import',
    variants: [
      {
        grade: 'A-Grade',
        gradeColor: 'bg-emerald-500',
        title: '10/10 Full Condition',
        description: 'Pristine compact body, perfect OLED display, completely sealed.',
        price: 'Rs. 38,000',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing the Sony Xperia 5 in 10/10 Full Condition. The price mentioned is Rs. 38,000. Please share further details.',
        image: sony5Pristine
      },
      {
        grade: 'B-Grade',
        gradeColor: 'bg-amber-500',
        title: 'Minor Display Shade',
        description: 'Slight shade on light screens. Unbeatable value for compact phone lovers. Body 9/10.',
        price: 'Rs. 33,000',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing the Sony Xperia 5 with the Minor Display Shade condition. The price mentioned is Rs. 33,000. Please share pictures of the specific display shade.',
        image: sony5Shade
      },
      {
        grade: 'Clearance',
        gradeColor: 'bg-rose-500',
        title: 'Single Green Line',
        description: 'One thin green line. Excellent performance and cameras at a very low budget.',
        price: 'Rs. 28,000',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing the Sony Xperia 5 with the Single Green Line display condition. The price mentioned is Rs. 28,000. Please share a video showing the exact condition.',
        image: sony5Line
      }
    ],
    descriptionTitle: 'Device Specifications & Details',
    descriptionIntro: 'The Sony Xperia 5 is the compact version of the Xperia 1. It features a 6.1-inch FHD+ HDR OLED screen that is extremely comfortable to hold and use with one hand while retaining flagship features.',
    descriptionParagraphs: [
      'This compact phone is powered by the same Snapdragon 855 (7nm) processor and Adreno 640 GPU, ensuring no compromises in gaming and day-to-day performance. It includes 6GB RAM and 64GB/128GB of fast storage.',
      'The camera system retains the exact same ZEISS optics 12MP triple setup (Main + Ultra-Wide + Telephoto) as the Xperia 1. You get the same premium Eye AF and 4K HDR video recording capabilities.',
      'The 3140 mAh battery comes with fast charging support, providing solid battery timing. Stereo speakers, a side-mounted fingerprint sensor, and a water-resistant build make it a complete flagship. It is factory unlocked and network-ready.'
    ]
  },
  'oneplus': {
    id: 'oneplus',
    title: 'OnePlus Flagships',
    subtitle: 'Fluid AMOLED • Snapdragon Gaming Kings',
    image: oneplusBackImg,
    startingPrice: 'Rs. 45,000',
    heroLabel: 'Never Settle Gaming Deals',
    variants: [
      {
        grade: 'A-Grade',
        gradeColor: 'bg-emerald-500',
        title: '10/10 Full Condition (OnePlus 8/8T)',
        description: 'Scratchless body, perfect 90Hz/120Hz display, clean IMEI.',
        price: 'Rs. 65,000+',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing a OnePlus 8 / 8T in 10/10 Full Condition. The price mentioned is starting from Rs. 65,000. Please share the available stock details.',
        image: oneplusPristine
      },
      {
        grade: 'Clearance',
        gradeColor: 'bg-rose-500',
        title: 'Green/Pink Line Variants',
        description: 'Single or dual lines on screen. Touch works 100%. High-end PUBG machine on a budget.',
        price: 'Rs. 45,000',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing a OnePlus device with the Green / Pink Line display condition. The price mentioned is starting from Rs. 45,000. Please share videos of the available options.',
        image: oneplusLine
      }
    ],
    descriptionTitle: 'Device Specifications & Details',
    descriptionIntro: 'OnePlus smartphones are renowned for their highly optimized software (OxygenOS) and ultra-smooth, high refresh rate displays. These devices are particularly well-suited for heavy gamers and power users.',
    descriptionParagraphs: [
      'These models feature Fluid AMOLED displays that support 90Hz or 120Hz refresh rates, delivering a buttery-smooth experience for UI scrolling, media consumption, and high-FPS gaming.',
      'Equipped with flagship-tier Snapdragon 8-series processors (such as the Snapdragon 865) and fast UFS storage, they can handle demanding games like PUBG and FreeFire seamlessly without thermal throttling or lag.',
      'Warp Charge fast charging is a major highlight, keeping the phone topped up in minutes. We regularly stock both flawless 10/10 condition sets and heavily discounted clearance (line/shade) variants.'
    ]
  },
  'apple': {
    id: 'apple',
    title: 'Apple iPhone',
    subtitle: 'Super Retina XDR • Best Cameras',
    image: iphoneBackImg,
    startingPrice: 'Rs. 50,000',
    heroLabel: 'Premium USA/Dubai Stock',
    variants: [
      {
        grade: 'A-Grade',
        gradeColor: 'bg-emerald-500',
        title: '10/10 Waterpack Condition',
        description: 'Pristine body, untouched Truetone, 90%+ battery health. JV / Factory Unlocked.',
        price: 'Rs. 75,000+',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing an Apple iPhone in 10/10 Waterpack Condition. The price mentioned is starting from Rs. 75,000. Please share the available models and battery health details.',
        image: applePristine
      },
      {
        grade: 'B-Grade',
        gradeColor: 'bg-amber-500',
        title: 'Minor Scratches / 9/10 Condition',
        description: 'Used but 100% genuine parts. No repair history.',
        price: 'Rs. 65,000+',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing an Apple iPhone in 9/10 Condition (with minor scratches). The price mentioned is starting from Rs. 65,000. Please share clear pictures of the physical condition.',
        image: appleScratch
      }
    ],
    descriptionTitle: 'Device Specifications & Details',
    descriptionIntro: 'Apple iPhones are globally recognized for their unmatched camera quality, smooth iOS ecosystem, and premium build materials. We stock genuine, unaltered imported units from the USA, UK, and Dubai.',
    descriptionParagraphs: [
      'These iPhones are powered by Apple\'s industry-leading A-series Bionic chips. Whether you are rendering videos, playing graphics-intensive games, or multitasking, the performance remains flawless and highly efficient.',
      'The camera systems offer class-leading video recording (up to 4K 60fps), advanced Night Mode, and precise Portrait photography. The Liquid Retina or Super Retina OLED displays ensure highly accurate color reproduction.',
      'We offer Non-PTA, JV, and Factory Unlocked variants based on availability. Every single unit is strictly checked via 3uTools to guarantee 100% original hardware and battery health.'
    ]
  },
  'ipad': {
    id: 'ipad',
    title: 'Apple iPad',
    subtitle: 'Retina Display • Ultimate Productivity & Gaming',
    image: ipadBackImg,
    startingPrice: 'Rs. 40,000',
    heroLabel: 'Best for Students & Gamers',
    variants: [
      {
        grade: 'A-Grade',
        gradeColor: 'bg-emerald-500',
        title: '10/10 Full Condition',
        description: 'Perfect screen, long lasting battery. Ideal for universities and PUBG players.',
        price: 'Rs. 55,000+',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing an Apple iPad in 10/10 Full Condition. The price mentioned is starting from Rs. 55,000. Please share the available models and specifications.',
        image: ipadPristine
      },
      {
        grade: 'B-Grade',
        gradeColor: 'bg-amber-500',
        title: 'Minor Shade or Scratch',
        description: 'Slight cosmetic imperfections. 100% functional and great value.',
        price: 'Rs. 40,000+',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing an Apple iPad with a Minor Shade or Scratch condition. The price mentioned is starting from Rs. 40,000. Please share pictures of the exact condition.',
        image: ipadScratch
      }
    ],
    descriptionTitle: 'Device Specifications & Details',
    descriptionIntro: 'Apple iPads are widely considered the best tablet devices in the world. They serve as exceptional tools for online education, professional graphic design, and high-performance gaming (like PUBG at 90 FPS).',
    descriptionParagraphs: [
      'They feature large, vibrant Retina displays that are excellent for reading, drawing, and media consumption. Official support for the Apple Pencil and Smart Keyboard transforms them into highly capable digital sketchpads or mini laptops.',
      'Powered by optimized Bionic chips, these iPads provide immense computational power, easily handling heavy professional applications like LumaFusion for 4K video editing or Procreate for illustration.',
      'Battery endurance is one of the iPad\'s strongest advantages, easily lasting a full day of active use on a single charge. We regularly bring in specialized deals on both the iPad Air and Pro series lineups.'
    ]
  },
  'lg-sharp': {
    id: 'lg-sharp',
    title: 'LG & Sharp Aquos',
    subtitle: '120Hz IGZO / P-OLED • Budget Friendly',
    image: lgSharpBackImg,
    startingPrice: 'Rs. 18,000',
    heroLabel: 'Unbeatable Budget Specs',
    variants: [
      {
        grade: 'A-Grade',
        gradeColor: 'bg-emerald-500',
        title: '10/10 Full Condition',
        description: 'Pristine imported stock. Flagship specs in a budget price.',
        price: 'Rs. 25,000+',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing an LG or Sharp Aquos device in 10/10 Full Condition. The price mentioned is starting from Rs. 25,000. Please share the available models.',
        image: lgPristine
      },
      {
        grade: 'B-Grade',
        gradeColor: 'bg-amber-500',
        title: 'Minor Shade Variants',
        description: 'Light display shade on white background. Perfect entry-level gaming phone.',
        price: 'Rs. 18,000',
        whatsappMessage: 'Assalam o Alaikum Anas Bhai! I am interested in purchasing an LG or Sharp Aquos device with a Minor Display Shade condition. The price mentioned is starting from Rs. 18,000. Please share pictures of the specific shade.',
        image: lgShade
      }
    ],
    descriptionTitle: 'Device Specifications & Details',
    descriptionIntro: 'LG (such as the V50/V60) and Sharp (Aquos R3/R5G) devices are ideal for buyers looking for flagship-level processing power and display technology without breaking the bank.',
    descriptionParagraphs: [
      'Sharp smartphones specifically offer incredibly fast 120Hz IGZO displays, providing an exceptionally smooth scrolling and gaming visual experience that is extremely rare in this budget segment.',
      'LG devices are highly regarded for their premium glass/metal aesthetics, vibrant OLED displays, and dedicated Quad DAC audio hardware, making them the absolute best choice for audiophiles using wired headphones.',
      'These models feature high-end Snapdragon 800-series processors capable of running popular multiplayer games smoothly. They deliver the highest hardware specifications available in the entry-level budget tier.'
    ]
  }
};
