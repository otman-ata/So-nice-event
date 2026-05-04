import { siteImages } from './images';

export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    header: {
      navLinks: [
        { href: '#services', text: 'Nos Services' },
        { href: '#gallery', text: 'Galerie' },
        { href: '#about', text: 'À Propos' },
        { href: '#contact', text: 'Contact' },
      ],
    },
    hero: {
      title: 'So Nice Event',
      subtitle1: 'Créateurs de moments inoubliables.',
      subtitle2: 'Organisation de mariages et d\'evenements a Agadir, Maroc',
      ctaButton: 'Demander un devis',
    },
    services: {
      title: 'Nos Prestations',
      subtitle: 'Un service sur-mesure pour chaque occasion',
      serviceList: [
        {
          image: siteImages.serviceWedding,
          title: 'Mariages d\'Exception',
          description: 'Nous orchestrons le mariage de vos rêves avec une touche d\'élégance marocaine, pour une célébration qui vous ressemble.',
        },
        {
          image: siteImages.servicePrivate,
          title: 'Événements Privés',
          description: 'Anniversaires, fiançailles ou réceptions familiales, chaque occasion spéciale mérite une organisation parfaite et mémorable.',
        },
        {
          image: siteImages.serviceCorporate,
          title: 'Événements d\'Entreprise',
          description: 'Conférences, lancements de produits ou soirées de gala. Nous créons des événements professionnels et créatifs qui marquent les esprits.',
        },
        {
          image: siteImages.serviceBabyShower,
          title: 'Fete prenatale',
          description: 'Un univers doux et raffiné pour célébrer l\'arrivée de bébé avec une scénographie chaleureuse et des détails personnalisés.',
        },
        {
          image: siteImages.serviceBirthday,
          title: 'Anniversaires',
          description: 'Des anniversaires sur-mesure pour enfants et adultes, pensés autour de thèmes créatifs et d\'une ambiance festive.',
        },
      ],
    },
    gallery: {
      title: 'Galerie',
      subtitle: 'L\'inspiration pour votre prochain événement',
      filterLabels: {
        all: 'Tous',
        weddings: 'Mariages',
        private: 'Événements Privés',
        corporate: 'Événements d\'Entreprise',
        babyShower: 'Fete prenatale',
        birthdays: 'Anniversaires',
        aboutUs: 'À Propos'
      }
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      subtitle: 'Histoires de moments inoubliables',
      testimonialList: [
        {
          quote: 'L\'équipe de So Nice Event a transformé notre vision en une réalité magique. Chaque détail était parfait. Notre mariage était au-delà de nos rêves !',
          author: 'Fatima & Youssef',
        },
        {
          quote: 'Professionnalisme, créativité et une passion incroyable. Notre événement d\'entreprise a été un immense succès grâce à leur travail acharné.',
          author: 'Ahmed L.',
        },
        {
          quote: 'La meilleure décision que nous ayons prise pour notre mariage. Ils ont tout géré avec une grâce et une efficacité exceptionnelles. Nous les recommandons vivement !',
          author: 'Sophia & Karim',
        },
      ],
    },
    blog: {
      title: 'De Notre Journal',
      subtitle: 'Conseils, tendances et histoires d\'événements réels',
      backToBlog: 'Retour au Blog',
      postList: [
        {
          slug: 'palette-de-couleurs-mariage-marocain',
          image: { 
            src: siteImages.blogPalette, 
            alt: 'Une palette de couleurs de mariage marocaine vibrante avec des rouges et des ors riches.'
          },
          category: 'Inspiration',
          title: 'Choisir la Palette de Couleurs Parfaite pour Votre Mariage Marocain',
          excerpt: 'Des tons riches de joyaux aux teintes terreuses du désert, découvrez comment choisir un thème de couleurs qui reflète la tradition et votre style personnel.',
          fullContent: `
            <p class="mb-4">Choisir la palette de couleurs pour un mariage marocain est une aventure passionnante dans un monde de teintes vibrantes et de textures riches. C'est bien plus qu'une simple décision esthétique ; c'est une occasion d'insuffler à votre célébration une signification culturelle et une touche personnelle. Les couleurs traditionnelles comme le rouge, l'or et le vert sont profondément symboliques, représentant l'amour, la richesse et la fertilité. Cependant, les couples modernes trouvent des moyens créatifs de mélanger ces traditions avec des palettes contemporaines.</p>
            <h3 class="text-2xl font-semibold mt-6 mb-3 custom-text">Explorer les Palettes Modernes</h3>
            <p class="mb-4">Pensez à des combinaisons comme le bleu de cobalt avec l'orange brûlé pour un clin d'œil aux zelliges marocains et aux épices chaudes. Ou peut-être une palette plus douce de rose poudré, de crème et d'or pour une ambiance romantique et éthérée. L'astuce consiste à équilibrer le riche héritage visuel du Maroc avec votre propre histoire d'amour. Utilisez des planches d'inspiration, rassemblez des échantillons de tissus et n'ayez pas peur d'expérimenter. Votre palette de couleurs donnera le ton à tout, des invitations au décor, créant une expérience immersive pour vous et vos invités.</p>
          `
        },
        {
          slug: 'role-de-la-negafa',
          image: {
            src: siteImages.blogNegafa,
            alt: 'Une Negafa marocaine ajustant les détails complexes du caftan traditionnel d\'une mariée.'
          },
          category: 'Tradition',
          title: 'Le Rôle de la Negafa : Plus qu\'une simple Styliste',
          excerpt: 'Comprenez l\'importance culturelle de la Negafa et pourquoi elle est un élément essentiel d\'une célébration de mariage marocaine authentique.',
          fullContent: `
            <p class="mb-4">Dans la tapisserie vibrante d'un mariage marocain, la Negafa (au pluriel Negafate) est bien plus qu'une simple styliste ou une gardienne de la garde-robe ; elle est une chorégraphe culturelle, une confidente et une figure essentielle qui veille au bon déroulement des rituels nuptiaux. Son rôle est ancré dans la tradition, assurant que la mariée soit resplendissante dans ses multiples tenues (caftans) tout au long de la célébration.</p>
            <h3 class="text-2xl font-semibold mt-6 mb-3 custom-text">Une Gardienne de la Tradition</h3>
            <p class="mb-4">La Negafa assiste la mariée pour s'habiller, l'accessoiriser avec des bijoux complexes et orchestrer ses entrées spectaculaires sur l'amaria ou le mida. Au-delà de l'esthétique, elle offre un soutien émotionnel, guidant la mariée à travers les étapes de la cérémonie avec grâce et assurance. Choisir la bonne Negafa est crucial ; c'est choisir quelqu'un qui comprend votre style, respecte la tradition et possède le calme nécessaire pour gérer l'un des jours les plus importants de votre vie.</p>
          `
        },
        {
          slug: 'lieux-de-mariage-uniques-agadir',
          image: {
            src: siteImages.blogVenues,
            alt: 'Un lieu de mariage époustouflant à Agadir avec vue sur l\'océan au coucher du soleil.'
          },
          category: 'Lieux',
          title: 'Top 5 des Lieux de Mariage Uniques à Agadir et ses Environs',
          excerpt: 'Explorez des endroits à couper le souffle, des complexes de luxe en bord de mer aux riads traditionnels et intimes, pour votre journée inoubliable.',
          fullContent: `
            <p class="mb-4">Agadir, avec sa magnifique baie et son ensoleillement quasi permanent, offre un décor de rêve pour les mariages. Mais au-delà des hôtels de plage évidents, la région regorge de lieux uniques qui peuvent transformer votre journée spéciale en une expérience vraiment magique. Que vous rêviez d'une grande réception ou d'une cérémonie intime, il y a un endroit qui correspond à votre vision.</p>
            <ol class="list-decimal list-inside space-y-3 mt-6 mb-4">
              <li><strong>Riads Privés :</strong> Pour une atmosphère authentique et intime, la location d'un riad privé offre une cour magnifique pour la cérémonie et la réception.</li>
              <li><strong>Kasbahs de Luxe :</strong> Dans l'arrière-pays, des kasbahs restaurées offrent un mélange d'histoire et de luxe moderne, avec des vues imprenables sur les montagnes de l'Atlas.</li>
              <li><strong>Camps dans le Désert :</strong> Pour les couples aventureux, imaginez échanger vos vœux sous les étoiles dans un camp de luxe dans le désert, une expérience vraiment inoubliable.</li>
              <li><strong>Villas en Bord de Mer :</strong> De superbes villas privées le long de la côte de Taghazout offrent l'exclusivité et des vues panoramiques sur l'océan.</li>
              <li><strong>Jardins Botaniques :</strong> Des jardins luxuriants cachés peuvent offrir une oasis de tranquillité et un décor naturel époustouflant pour votre cérémonie.</li>
            </ol>
            <p>Chaque option offre un charme unique, garantissant que votre mariage à Agadir soit aussi exceptionnel que votre histoire d'amour.</p>
          `
        },
        {
          slug: 'integrer-lanternes-marocaines',
          image: {
            src: siteImages.blogLanterns,
            alt: 'Des lanternes marocaines lumineuses créant une ambiance magique lors d\'un événement en soirée.'
          },
          category: 'Décor',
          title: '5 Façons d\'Intégrer les Lanternes Marocaines Magiques dans votre Décor',
          excerpt: 'Découvrez comment ces pièces emblématiques peuvent ajouter une ambiance chaleureuse et enchanteresse à n\'importe quel lieu de mariage ou d\'événement.',
          fullContent: `
            <p class="mb-4">Les lanternes marocaines sont synonymes de chaleur, d'enchantement et d'artisanat complexe. Leur lumière douce et diffuse et les motifs complexes qu'elles projettent peuvent transformer n'importe quel espace en un havre romantique et magique. Intégrer ces pièces emblématiques dans le décor de votre événement est un moyen infaillible de créer une ambiance inoubliable. Voici cinq façons créatives de les utiliser.</p>
            <ol class="list-decimal list-inside space-y-3 mt-6 mb-4">
              <li><strong>Créer une Allée Cérémoniale :</strong> Bordez l'allée de lanternes de différentes tailles posées au sol pour un chemin lumineux et spectaculaire vers l'autel.</li>
              <li><strong>Centres de Table Scintillants :</strong> Utilisez une seule lanterne ornée ou un groupe de plus petites comme pièce maîtresse de vos tables, entourées de pétales de fleurs.</li>
              <li><strong>Installations Suspendues :</strong> Suspendez des dizaines de lanternes à différentes hauteurs au-dessus de la piste de danse ou de la salle à manger pour un effet de ciel étoilé à couper le souffle.</li>
              <li><strong>Délimiter des Espaces Cosy :</strong> Utilisez de grandes lanternes pour délimiter des espaces lounge confortables, créant des coins intimes où les invités peuvent se détendre et discuter.</li>
              <li><strong>Mettre en Valeur les Points Focaux :</strong> Placez des lanternes près de l'entrée, à côté du plan de table ou autour du gâteau de mariage pour attirer l'attention sur les éléments clés de votre décor.</li>
            </ol>
            <p>Que vous utilisiez des bougies traditionnelles ou des lumières LED sûres, les lanternes marocaines apporteront une touche d'élégance intemporelle et de mystère à votre célébration.</p>
          `
        }
      ],
    },
    about: {
      title: 'Notre Passion, Votre Événement',
      paragraph1: 'So Nice Event est une société de planification de mariages et d\'événements de luxe basée à Agadir, au Maroc. Nous sommes reconnus pour nos créations intemporelles, élégantes et romantiques.',
      paragraph2: 'Chez So Nice Event, nous croyons en la création d\'une expérience unique et personnelle pour chacun de nos clients. Nous travaillons en étroite collaboration avec nos couples pour nous assurer que le jour de leur mariage soit le véritable reflet de leur histoire d\'amour.',
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Discutons de votre projet et donnons vie à vos idées.',
      form: {
        name: 'Nom Complet',
        email: 'Adresse Email',
        phone: 'Numéro de Téléphone',
        message: 'Votre Message',
        submit: 'Envoyer le Message',
      },
      details: {
        title: 'Nos Coordonnées',
        emailLabel: 'Email:',
        phoneLabel: 'Téléphone:',
        addressLabel: 'Adresse:',
      },
    },
    footer: {
      navTitle: 'Navigation',
      followTitle: 'Suivez-nous',
      mapTitle: 'Nous Trouver',
      copyright: `© ${new Date().getFullYear()} So Nice Event. Tous droits réservés.`,
      navLinks: [
        { href: '#services', text: 'Nos Services' },
        { href: '#gallery', text: 'Galerie' },
        { href: '#about', text: 'À Propos' },
        { href: '#contact', text: 'Contact' },
      ],
    },
  },
  en: {
    header: {
      navLinks: [
        { href: '#services', text: 'Our Services' },
        { href: '#gallery', text: 'Gallery' },
        { href: '#about', text: 'About Us' },
        { href: '#contact', text: 'Contact' },
      ],
    },
    hero: {
      title: 'So Nice Event',
      subtitle1: 'Creators of unforgettable moments.',
      subtitle2: 'Wedding & Event Planning in Agadir, Morocco',
      ctaButton: 'Request a Quote',
    },
    services: {
      title: 'Our Services',
      subtitle: 'A tailor-made service for every occasion',
      serviceList: [
        {
          image: siteImages.serviceWedding,
          title: 'Exceptional Weddings',
          description: 'We orchestrate your dream wedding with a touch of Moroccan elegance, for a celebration that reflects who you are.',
        },
        {
          image: siteImages.servicePrivate,
          title: 'Private Events',
          description: 'Birthdays, engagements, or family receptions, every special occasion deserves perfect and memorable organization.',
        },
        {
          image: siteImages.serviceCorporate,
          title: 'Corporate Events',
          description: 'Conferences, product launches, or gala evenings. We create professional and creative events that make a lasting impression.',
        },
        {
          image: siteImages.serviceBabyShower,
          title: 'Baby Shower',
          description: 'A soft and elegant setup to celebrate your baby on the way, with personalized decor and memorable moments.',
        },
        {
          image: siteImages.serviceBirthday,
          title: 'Birthdays',
          description: 'Custom birthday celebrations for kids and adults, designed around creative themes and joyful entertainment.',
        },
      ],
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Inspiration for your next event',
      filterLabels: {
        all: 'All',
        weddings: 'Weddings',
        private: 'Private Events',
        corporate: 'Corporate Events',
        babyShower: 'Baby Shower',
        birthdays: 'Birthdays',
        aboutUs: 'About Us'
      }
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Stories of unforgettable moments',
      testimonialList: [
        {
          quote: 'The So Nice Event team turned our vision into a magical reality. Every detail was perfect. Our wedding was beyond our dreams!',
          author: 'Fatima & Youssef',
        },
        {
          quote: 'Professionalism, creativity, and an incredible passion. Our corporate event was a huge success thanks to their hard work.',
          author: 'Ahmed L.',
        },
        {
          quote: 'The best decision we made for our wedding. They handled everything with exceptional grace and efficiency. We highly recommend them!',
          author: 'Sophia & Karim',
        },
      ],
    },
    blog: {
      title: 'From Our Journal',
      subtitle: 'Tips, trends, and real event stories',
      backToBlog: 'Back to Blog',
      postList: [
        {
          slug: 'moroccan-wedding-color-palette',
          image: {
            src: siteImages.blogPalette,
            alt: 'A vibrant Moroccan wedding color palette with rich reds and golds.'
          },
          category: 'Inspiration',
          title: 'Choosing the Perfect Color Palette for Your Moroccan Wedding',
          excerpt: 'From rich jewel tones to earthy desert hues, discover how to select a color scheme that reflects both tradition and your personal style.',
          fullContent: `
            <p class="mb-4">Choosing the color palette for a Moroccan wedding is an exciting journey into a world of vibrant hues and rich textures. It's more than just an aesthetic decision; it's an opportunity to infuse your celebration with cultural meaning and personal flair. Traditional colors like red, gold, and green are deeply symbolic, representing love, wealth, and fertility. However, modern couples are finding creative ways to blend these traditions with contemporary palettes.</p>
            <h3 class="text-2xl font-semibold mt-6 mb-3 custom-text">Exploring Modern Palettes</h3>
            <p class="mb-4">Consider combinations like cobalt blue with burnt orange for a nod to Moroccan zellij tiles and warm spices. Or perhaps a softer palette of dusty rose, cream, and gold for a romantic, ethereal vibe. The key is to balance Morocco's rich visual heritage with your own love story. Use mood boards, gather fabric swatches, and don't be afraid to experiment. Your color palette will set the tone for everything from the invitations to the decor, creating an immersive experience for you and your guests.</p>
          `
        },
        {
          slug: 'role-of-the-negafa',
          image: {
            src: siteImages.blogNegafa,
            alt: 'A Moroccan Negafa adjusting the intricate details of a bride\'s traditional caftan.'
          },
          category: 'Tradition',
          title: 'The Role of the Negafa: More Than Just a Stylist',
          excerpt: 'Understand the cultural significance of the Negafa and why she is an essential part of an authentic Moroccan wedding celebration.',
          fullContent: `
            <p class="mb-4">In the vibrant tapestry of a Moroccan wedding, the Negafa (plural: Negafate) is far more than just a stylist or wardrobe keeper; she is a cultural choreographer, a confidante, and an essential figure who ensures the smooth flow of the bridal rituals. Her role is steeped in tradition, ensuring the bride looks resplendent in her multiple outfits (caftans) throughout the celebration.</p>
            <h3 class="text-2xl font-semibold mt-6 mb-3 custom-text">A Guardian of Tradition</h3>
            <p class="mb-4">The Negafa assists the bride with dressing, accessorizing her with intricate jewelry, and orchestrating her grand entrances on the amaria or mida. Beyond the aesthetics, she provides emotional support, guiding the bride through the ceremony's stages with grace and poise. Choosing the right Negafa is crucial; it's about selecting someone who understands your style, respects tradition, and has the calm demeanor to manage one of the most important days of your life.</p>
          `
        },
        {
          slug: 'unique-wedding-venues-agadir',
          image: {
            src: siteImages.blogVenues,
            alt: 'A breathtaking wedding venue in Agadir with an ocean view at sunset.'
          },
          category: 'Venues',
          title: 'Top 5 Unique Wedding Venues in and Around Agadir',
          excerpt: 'Explore breathtaking locations, from luxurious beachside resorts to intimate traditional riads, for your unforgettable day.',
          fullContent: `
            <p class="mb-4">Agadir, with its stunning bay and near-constant sunshine, provides a dream backdrop for weddings. But beyond the obvious beach hotels, the region is filled with unique venues that can turn your special day into a truly magical experience. Whether you're dreaming of a grand reception or an intimate ceremony, there's a location to match your vision.</p>
            <ol class="list-decimal list-inside space-y-3 mt-6 mb-4">
              <li><strong>Private Riads:</strong> For an authentic and intimate feel, renting a private riad offers a stunning courtyard for the ceremony and reception.</li>
              <li><strong>Luxury Kasbahs:</strong> In the hinterlands, restored kasbahs offer a blend of history and modern luxury, with breathtaking views of the Atlas mountains.</li>
              <li><strong>Desert Camps:</strong> For the adventurous couple, imagine exchanging vows under the stars at a luxury desert camp—a truly unforgettable experience.</li>
              <li><strong>Beachfront Villas:</strong> Stunning private villas along the Taghazout coast offer exclusivity and panoramic ocean views.</li>
              <li><strong>Botanical Gardens:</strong> Hidden, lush gardens can provide an oasis of tranquility and a stunning natural backdrop for your ceremony.</li>
            </ol>
            <p>Each option offers a unique charm, ensuring your Agadir wedding is as exceptional as your love story.</p>
          `
        },
        {
          slug: 'incorporating-moroccan-lanterns',
          image: {
            src: siteImages.blogLanterns,
            alt: 'Glowing Moroccan lanterns creating a magical ambiance at an evening event.'
          },
          category: 'Decor',
          title: '5 Ways to Incorporate Magical Moroccan Lanterns into Your Decor',
          excerpt: 'Learn how these iconic pieces can add a warm, enchanting ambiance to any wedding or event venue.',
          fullContent: `
            <p class="mb-4">Moroccan lanterns are synonymous with warmth, enchantment, and intricate craftsmanship. Their soft, diffused light and the complex patterns they cast can transform any space into a romantic, magical haven. Incorporating these iconic pieces into your event decor is a surefire way to create an unforgettable ambiance. Here are five creative ways to use them.</p>
            <ol class="list-decimal list-inside space-y-3 mt-6 mb-4">
              <li><strong>Create a Ceremonial Aisle:</strong> Line the wedding aisle with floor-standing lanterns of varying sizes for a dramatic and glowing pathway to the altar.</li>
              <li><strong>Twinkling Centerpieces:</strong> Use a single ornate lantern or a cluster of smaller ones as the centerpiece for your guest tables, surrounded by flower petals.</li>
              <li><strong>Hanging Installations:</strong> Suspend dozens of lanterns at different heights over the dance floor or dining area for a breathtaking, starry-night effect.</li>
              <li><strong>Define Cozy Nooks:</strong> Use large lanterns to anchor comfortable lounge areas, creating intimate nooks for guests to relax and chat.</li>
              <li><strong>Highlight Focal Points:</strong> Place lanterns by the entrance, next to the seating chart, or around the wedding cake to draw attention to key elements of your decor.</li>
            </ol>
            <p>Whether you use traditional candles or safe LED lights, Moroccan lanterns will bring a touch of timeless elegance and mystery to your celebration.</p>
          `
        }
      ],
    },
    about: {
      title: 'Our Passion, Your Event',
      paragraph1: 'So Nice Event is a luxury wedding and event planning company based in Agadir, Morocco. We are known for our timeless, elegant, and romantic designs.',
      paragraph2: 'At So Nice Event, we believe in creating a unique and personal experience for each of our clients. We work closely with our couples to ensure that their wedding day is a true reflection of their love story.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Let\'s discuss your project and bring your ideas to life.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        submit: 'Send Message',
      },
      details: {
        title: 'Our Contact Details',
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
        addressLabel: 'Address:',
      },
    },
    footer: {
      navTitle: 'Navigation',
      followTitle: 'Follow Us',
      mapTitle: 'Find Us',
      copyright: `© ${new Date().getFullYear()} So Nice Event. All rights reserved.`,
      navLinks: [
        { href: '#services', text: 'Our Services' },
        { href: '#gallery', text: 'Gallery' },
        { href: '#about', text: 'About Us' },
        { href: '#contact', text: 'Contact' },
      ],
    },
  },
  ar: {
    header: {
      navLinks: [
        { href: '#services', text: 'خدماتنا' },
        { href: '#gallery', text: 'المعرض' },
        { href: '#about', text: 'من نحن' },
        { href: '#contact', text: 'اتصل بنا' },
      ],
    },
    hero: {
      title: 'So Nice Event',
      subtitle1: 'صناع اللحظات التي لا تنسى.',
      subtitle2: 'تنظيم حفلات الزفاف والمناسبات في أغادير، المغرب',
      ctaButton: 'اطلب عرض سعر',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'خدمة مصممة خصيصًا لكل مناسبة',
      serviceList: [
        {
          image: siteImages.serviceWedding,
          title: 'حفلات زفاف استثنائية',
          description: 'ننظم حفل زفاف أحلامك بلمسة من الأناقة المغربية، لاحتفال يعكس شخصيتك.',
        },
        {
          image: siteImages.servicePrivate,
          title: 'مناسبات خاصة',
          description: 'أعياد الميلاد، الخطوبات، أو الاستقبالات العائلية، كل مناسبة خاصة تستحق تنظيمًا مثاليًا لا ينسى.',
        },
        {
          image: siteImages.serviceCorporate,
          title: 'مناسبات الشركات',
          description: 'مؤتمرات، إطلاق منتجات، أو أمسيات احتفالية. نبتكر مناسبات احترافية وإبداعية تترك انطباعًا دائمًا.',
        },
        {
          image: siteImages.serviceBabyShower,
          title: 'حفل استقبال مولود',
          description: 'تصميم أنيق ودافئ للاحتفال بقدوم المولود مع تفاصيل مخصصة تناسب العائلة والضيوف.',
        },
        {
          image: siteImages.serviceBirthday,
          title: 'حفلات أعياد الميلاد',
          description: 'حفلات ميلاد مميزة للأطفال والكبار مع أفكار إبداعية وأجواء احتفالية متكاملة.',
        },
      ],
    },
    gallery: {
      title: 'المعرض',
      subtitle: 'إلهام لمناسبتك القادمة',
      filterLabels: {
        all: 'الكل',
        weddings: 'حفلات الزفاف',
        private: 'مناسبات خاصة',
        corporate: 'مناسبات الشركات',
        babyShower: 'حفل استقبال مولود',
        birthdays: 'أعياد الميلاد',
        aboutUs: 'من نحن'
      }
    },
    testimonials: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'قصص من لحظات لا تنسى',
      testimonialList: [
        {
          quote: 'فريق So Nice Event حوّل رؤيتنا إلى حقيقة سحرية. كل التفاصيل كانت مثالية. حفل زفافنا كان يفوق أحلامنا!',
          author: 'فاطمة ويوسف',
        },
        {
          quote: 'احترافية وإبداع وشغف لا يصدق. لقد كان حدث شركتنا نجاحًا باهرًا بفضل عملهم الجاد.',
          author: 'أحمد ل.',
        },
        {
          quote: 'أفضل قرار اتخذناه لحفل زفافنا. لقد تعاملوا مع כל شيء برشاقة وكفاءة استثنائيين. نوصي بهم بشدة!',
          author: 'صوفيا وكريم',
        },
      ],
    },
    blog: {
      title: 'من دفتر يومياتنا',
      subtitle: 'نصائح واتجاهات وقصص مناسبات حقيقية',
      backToBlog: 'العودة إلى المدونة',
      postList: [
        {
          slug: 'palette-de-couleurs-mariage-marocain',
          image: {
            src: siteImages.blogPalette,
            alt: 'لوحة ألوان زفاف مغربية نابضة بالحياة مع درجات الأحمر والذهبي الغنية.'
          },
          category: 'إلهام',
          title: 'اختيار لوحة الألوان المثالية لحفل زفافك المغربي',
          excerpt: 'من درجات ألوان الجواهر الغنية إلى ألوان الصحراء الترابية، اكتشفي كيفية اختيار نظام ألوان يعكس التقاليد وأسلوبك الشخصي.',
          fullContent: `
            <p class="mb-4">يعد اختيار لوحة الألوان لحفل الزفاف المغربي رحلة مثيرة في عالم من الألوان النابضة بالحياة والأنسجة الغنية. إنه أكثر من مجرد قرار جمالي؛ إنها فرصة لإضفاء معنى ثقافي وذوق شخصي على احتفالك. الألوان التقليدية مثل الأحمر والذهبي والأخضر لها رمزية عميقة، حيث تمثل الحب والثروة والخصوبة. ومع ذلك، يجد الأزواج العصريون طرقًا إبداعية لمزج هذه التقاليد مع لوحات ألوان معاصرة.</p>
            <h3 class="text-2xl font-semibold mt-6 mb-3 custom-text">استكشاف اللوحات العصرية</h3>
            <p class="mb-4">فكري في مجموعات مثل الأزرق الكوبالتي مع البرتقالي المحروق للإشارة إلى بلاط الزليج المغربي والتوابل الدافئة. أو ربما لوحة ألوان أكثر نعومة من الوردي المغبر والكريمي والذهبي لأجواء رومانسية وأثيرية. يكمن السر في الموازنة بين التراث البصري الغني للمغرب وقصة حبك الخاصة. استخدمي لوحات الإلهام، واجمعي عينات من الأقمشة، ولا تخافي من التجربة. ستحدد لوحة الألوان الخاصة بك نغمة كل شيء من الدعوات إلى الديكور، مما يخلق تجربة غامرة لك ولضيوفك.</p>
          `
        },
        {
          slug: 'role-de-la-negafa',
          image: {
            src: siteImages.blogNegafa,
            alt: 'نكافة مغربية تضبط التفاصيل المعقدة للقفطان التقليدي للعروس.'
          },
          category: 'تقاليد',
          title: 'دور النكافة: أكثر من مجرد منسقة أزياء',
          excerpt: 'تعرفي على الأهمية الثقافية للنكافة ولماذا هي جزء أساسي من احتفال الزفاف المغربي الأصيل.',
          fullContent: `
            <p class="mb-4">في النسيج النابض بالحياة لحفل الزفاف المغربي، تعتبر النكافة (بصيغة الجمع: النكافات) أكثر بكثير من مجرد منسقة أزياء أو حارسة خزانة ملابس؛ إنها مصممة رقصات ثقافية، وصديقة مقربة، وشخصية أساسية تضمن التدفق السلس لطقوس الزفاف. دورها متجذر في التقاليد، مما يضمن أن تبدو العروس متألقة في ملابسها المتعددة (القفطان) طوال الاحتفال.</p>
            <h3 class="text-2xl font-semibold mt-6 mb-3 custom-text">حارسة التقاليد</h3>
            <p class="mb-4">تساعد النكافة العروس في ارتداء ملابسها، وتزيينها بالمجوهرات المعقدة، وتنظيم مداخلها الكبرى على العمارية أو الميدة. إلى جانب الجماليات، تقدم الدعم العاطفي، وتوجه العروس خلال مراحل الحفل برشاقة واتزان. يعد اختيار النكافة المناسبة أمرًا بالغ الأهمية؛ إنه يتعلق باختيار شخص يفهم أسلوبك، ويحترم التقاليد، ويمتلك السلوك الهادئ لإدارة أحد أهم أيام حياتك.</p>
          `
        },
        {
          slug: 'lieux-de-mariage-uniques-agadir',
          image: {
            src: siteImages.blogVenues,
            alt: 'مكان زفاف خلاب في أغادير مع إطلالة على المحيط عند غروب الشمس.'
          },
          category: 'أماكن',
          title: 'أفضل 5 أماكن فريدة لحفلات الزفاف في أغادير وما حولها',
          excerpt: 'استكشفي مواقع تخطف الأنفاس، من المنتجعات الشاطئية الفاخرة إلى الرياض التقليدية الحميمية، ليومك الذي لا يُنسى.',
          fullContent: `
            <p class="mb-4">توفر أغادير، بخليجها المذهل وأشعة الشمس شبه الدائمة، خلفية حالمة لحفلات الزفاف. ولكن بعيدًا عن الفنادق الشاطئية الواضحة، تمتلئ المنطقة بأماكن فريدة يمكنها تحويل يومك الخاص إلى تجربة سحرية حقًا. سواء كنت تحلمين بحفل استقبال كبير أو حفل حميمي، هناك مكان يناسب رؤيتك.</p>
            <ol class="list-decimal list-inside space-y-3 mt-6 mb-4 rtl:pr-4">
              <li><strong>الرياض الخاصة:</strong> لأجواء أصيلة وحميمية، يوفر استئجار رياض خاص فناءً مذهلاً للحفل والاستقبال.</li>
              <li><strong>القصبات الفاخرة:</strong> في المناطق النائية، توفر القصبات المرممة مزيجًا من التاريخ والرفاهية الحديثة، مع إطلالات خلابة على جبال الأطلس.</li>
              <li><strong>المخيمات الصحراوية:</strong> للزوجين المغامرين، تخيلي تبادل عهود الزواج تحت النجوم في مخيم صحراوي فاخر - تجربة لا تُنسى حقًا.</li>
              <li><strong>الفيلات المطلة على الشاطئ:</strong> توفر الفيلات الخاصة المذهلة على طول ساحل تغازوت الخصوصية وإطلالات بانورامية على المحيط.</li>
              <li><strong>الحدائق النباتية:</strong> يمكن أن توفر الحدائق المورقة والمخفية واحة من الهدوء وخلفية طبيعية مذهلة لحفلك.</li>
            </ol>
            <p>يقدم كل خيار سحرًا فريدًا، مما يضمن أن يكون حفل زفافك في أغادير استثنائيًا مثل قصة حبك.</p>
          `
        },
        {
          slug: 'integrer-lanternes-marocaines',
          image: {
            src: siteImages.blogLanterns,
            alt: 'فوانيس مغربية متوهجة تخلق أجواءً سحرية في مناسبة مسائية.'
          },
          category: 'ديكور',
          title: '5 طرق لدمج الفوانيس المغربية الساحرة في ديكورك',
          excerpt: 'تعلمي كيف يمكن لهذه القطع الأيقونية أن تضيف أجواء دافئة وساحرة إلى أي مكان زفاف أو مناسبة.',
          fullContent: `
            <p class="mb-4">تعتبر الفوانيس المغربية مرادفًا للدفء والسحر والحرفية المعقدة. يمكن لضوئها الناعم والمنتشر والأنماط المعقدة التي تلقيها أن تحول أي مساحة إلى ملاذ رومانسي وساحر. يعد دمج هذه القطع الأيقونية في ديكور مناسبتك وسيلة مؤكدة لخلق أجواء لا تُنسى. إليك خمس طرق إبداعية لاستخدامها.</p>
            <ol class="list-decimal list-inside space-y-3 mt-6 mb-4 rtl:pr-4">
              <li><strong>إنشاء ممر للحفل:</strong> قومي بتبطين ممر الزفاف بفوانيس أرضية متفاوتة الأحجام لمسار درامي ومتوهج إلى المذبح.</li>
              <li><strong>قطع مركزية متلألئة:</strong> استخدمي فانوسًا مزخرفًا واحدًا أو مجموعة من الفوانيس الأصغر كقطعة مركزية لطاولات ضيوفك، محاطة ببتلات الزهور.</li>
              <li><strong>تركيبات معلقة:</strong> علقي العشرات من الفوانيس على ارتفاعات مختلفة فوق حلبة الرقص أو منطقة تناول الطعام للحصول على تأثير سماء مرصعة بالنجوم يخطف الأنفاس.</li>
              <li><strong>تحديد أركان مريحة:</strong> استخدمي فوانيس كبيرة لتحديد مناطق جلوس مريحة، مما يخلق أركانًا حميمة للضيوف للاسترخاء والدردشة.</li>
              <li><strong>تسليط الضوء على النقاط المحورية:</strong> ضعي الفوانيس بجوار المدخل، بجانب مخطط الجلوس، أو حول كعكة الزفاف لجذب الانتباه إلى العناصر الرئيسية في ديكورك.</li>
            </ol>
            <p>سواء كنت تستخدمين الشموع التقليدية أو مصابيح LED الآمنة، ستضفي الفوانيس المغربية لمسة من الأناقة الخالدة والغموض على احتفالك.</p>
          `
        }
      ],
    },
    about: {
      title: 'شغفنا هو مناسبتك',
      paragraph1: 'So Nice Event هي شركة فاخرة لتنظيم حفلات الزفاف والمناسبات ومقرها في أغادير، المغرب. نحن معروفون بتصاميمنا الخالدة والأنيقة والرومانسية.',
      paragraph2: 'في So Nice Event، نؤمن بأهمية خلق تجربة فريدة وشخصية لكل من عملائنا. نعمل عن كثب مع الأزواج لضمان أن يوم زفافهم هو انعكاس حقيقي لقصة حبهم.',
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'دعنا نناقش مشروعك ونحول أفكارك إلى حقيقة.',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتر الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'رسالتك',
        submit: 'إرسال الرسالة',
      },
      details: {
        title: 'معلومات الاتصال',
        emailLabel: 'البريد الإلكتروني:',
        phoneLabel: 'الهاتف:',
        addressLabel: 'العنوان:',
      },
    },
    footer: {
      navTitle: 'روابط سريعة',
      followTitle: 'تابعنا',
      mapTitle: 'تجدنا على الخريطة',
      copyright: `© ${new Date().getFullYear()} So Nice Event. كل الحقوق محفوظة.`,
      navLinks: [
        { href: '#services', text: 'خدماتنا' },
        { href: '#gallery', text: 'المعرض' },
        { href: '#about', text: 'من نحن' },
        { href: '#contact', text: 'اتصل بنا' },
      ],
    },
  },
};
