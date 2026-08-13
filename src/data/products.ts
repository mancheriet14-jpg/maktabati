// Single source of truth for product data.
// Add a product here with: name, images, mainCategory, subCategory, brand,
// price, oldPrice, rating, description, specs. The site auto-calculates the
// discount percentage and the "العروض" (offers) section — no extra code needed.

import type { Product, ProductVariant, MainCategorySlug } from '@/types';
import i18n from '@/i18n';

export const products: Product[] = [
  // ── Stationery ──────────────────────────────────────────────────

  {
    id: 'st-4.',
    name: 'بريق لامع يتوهج في الظلام 5*10 مل',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-glues',
    brand: 'other',
    price: 450,
    rating: 4.1,
    images: [
      '/img-webp/School-tools/25.webp',
    ],
    gallery: [
      '/img-webp/School-tools/25.webp',
      '/img-webp/School-tools/25.1.webp',
      '/img-webp/School-tools/25.2.webp',
    ],
    description: 'بريق لامع يتوهج في الظلام 5*10 مل',
    specs: [{ label: 'العدد', value: '4' }],
    createdAt: '2024-08-20',
  },
  {
    id: 'st-5',
    name: 'غراء معدني لامع 5*10 مل',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-glues',
    brand: 'other',
    price: 410,
    rating: 4.1,
    images: [
      '/img-webp/School-tools/24.webp',
    ],
    gallery: [
      '/img-webp/School-tools/24.webp',
    ],
    description: 'غراء معدني لامع 5*10 مل',
    specs: [{ label: 'العدد', value: '5' }],
    createdAt: '2024-08-20',
  },


  {
    id: 'st-6',
    name: 'غراء أبيض مع غطاء للتطبيق 21 غرام بموجب ترخيص تكنو',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-glues',
    brand: 'tecnowa',
    price: 110,
    rating: 4.1,
    images: [
      '/img-webp/School-tools/17.webp',
    ],
    gallery: [
            '/img-webp/School-tools/17.webp',
      '/img-webp/School-tools/17.2.webp',
      '/img-webp/School-tools/17.3.webp',
      '/img-webp/School-tools/17.4.webp',
      '/img-webp/School-tools/17.5.webp',
    ],
    description: 'غراء أبيض مع غطاء للتطبيق 21 غرام بموجب ترخيص تكنو',
    specs: [{ label: 'الفتلات', value: '2' }],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-6-orange',
        name: 'برتقالي',
        optionLabel: 'اللون',
        price: 110.00,
       // oldPrice: 100,
        stock: 50,
        sku: 'PEN-12-BLK',
        images: [
        '/img-webp/School-tools/17.2.webp',
        ],
      },
      {
        id: 'st-6-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 110.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'PEN-12-BLK',
        images: [
        '/img-webp/School-tools/17.3.webp',
        ],
      },
      {
        id: 'st-6-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 110.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'PEN-12-BLK',
        images: [
        '/img-webp/School-tools/17.4.webp',
        ],
      },
      {
        id: 'st-6-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 110.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'PEN-12-BLK',
        images: [
        '/img-webp/School-tools/17.5.webp',
        ],
      },
    ],
  },


   {
    id: 'st-7',
    name: ' غراء أبيض مع غطاء للتطبيق ',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-glues',
    brand: 'tecnowa',
    price: 140,
    rating: 4.1,
    images: [
      '/img-webp/School-tools/10.webp',
    ],
    gallery: [
    ],
    description:'غراء أبيض مع غطاء للتطبيق ',
    specs: [{ label: 'الحجم:', value: '40ml' }],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-7-40ml',
        name: '40 مل',
        optionLabel: 'الحجم',
        price: 80.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'PEN-12-BLK',
        images: [
      '/img-webp/School-tools/10.webp',
      ],
      },
    ],
  },

   {
    id: 'st-8',
    name: 'غراء أبيض مع غطاء للتطبيق 80 مل رقم المرجع 5878',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-glues',
    brand: 'tecnowa',
    price: 140,
    // oldPrice:160,
    rating: 4.1,
    images: [
      '/img-webp/School-tools/11.webp',
    ],
    gallery: [
    '/img-webp/School-tools/11.webp',
    ],
    description: 'غراء أبيض مع غطاء للتطبيق',
    specs: [{ label: 'الحجم:', value: '80ml' }],
    createdAt: '2024-08-20',
  },




   {
    id: 'st-9',
    name: 'غطاء تطبيق الغراء الأبيض 120 مل رقم المرجع 5880',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-glues',
    brand: 'tecnowa',
    price: 170,
    rating: 4.1,
    images: [
      '/img-webp/School-tools/12.webp',
    ],
    gallery: [
      '/img-webp/School-tools/12.webp',
      '/img-webp/School-tools/13.webp',
      '/img-webp/School-tools/14.webp',
   ],
    description: 'غطاء تطبيق الغراء الأبيض 120 مل رقم المرجع 5880',
    specs: [{ label: 'الحجم:', value: '120ml' }],
    createdAt: '2024-08-20',
        variants: [
      {
        id: 'st-9-red',
        name: 'الأحمر',
        optionLabel: 'اللون',
        price: 170.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'PEN-12-BLK',
        images: [
      '/img-webp/School-tools/12.webp',
      ],
      },
      {
        id: 'st-9-blue',
        name: 'الأزرق',
        optionLabel: 'اللون',
        price: 170.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'PEN-12-BLK',
        images: [
      '/img-webp/School-tools/13.webp',
      ],
      },
      {
        id: 'st-9-yellow',
        name: 'الأصفر',
        optionLabel: 'اللون',
        price: 170.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'PEN-12-BLK',
        images: [
      '/img-webp/School-tools/14.webp',
      ],
      },
    ],
  },


   {
    id: 'st-10',
    name: 'غراء أبيض مع غطاء للتطبيق 80 مل رقم المرجع 5878',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-glues',
    brand: 'tecnowa',
    price: 140,
    rating: 4.1,
    images: [
      '/img-webp/School-tools/11.webp',
    ],
    gallery: [
    '/img-webp/School-tools/11.webp',
    ],
    description: 'غراء أبيض مع غطاء للتطبيق',
    specs: [{ label: 'الحجم:', value: '80ml' }],
    createdAt: '2024-08-20',
  },





  {
    id: 'st-11',
    name: 'طلاء مائي بستة ألوان "تكنو"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/29.webp',
    ],
    gallery: [
      '/img-webp/School-tools/29.webp',
      '/img-webp/School-tools/29.1.webp',
    ],
    description: ' طلاء مدرسي مائي، 6 أنابيب سعة 8 مل، سهل الاستخدام.',
    specs: [{ label: 'العدد', value: '6' }],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-11-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 100,
        stock: 50,
        sku: '5757_01',
        images: [
      '/img-webp/School-tools/29.webp',
        ],
      },
      {
        id: 'st-11-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 0,
        stock: 50,
        sku: '5757_01',
        images: [
      '/img-webp/School-tools/29.1.webp',
        ],
      },
    ],
  },


    {
    id: 'st-12',
    name: 'طلاء مائي ذو 12 لونًا "تكنو"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 450,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/30.webp',
    ],
    gallery: [
      '/img-webp/School-tools/30.webp',
      '/img-webp/School-tools/30.1.webp',
    ],
    description: 'طلاء مدرسي مائي، 12 أنبوبًا سعة 8 مل، سهل الاستخدام على أي نوع من الأسطح وباستخدام أدوات مختلفة.',
    specs: [{ label: 'العدد', value: '12' }],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-12-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 100,
        stock: 50,
        sku: '5758_01',
        images: [
      '/img-webp/School-tools/30.webp',
        ],
      },
      {
        id: 'st-12-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 0,
        stock: 50,
        sku: '5758_01',
        images: [
      '/img-webp/School-tools/30.1.webp',
        ],
      },
    ],
  },



  {
    id: 'st-13',
    name: 'طلاء مائي بستة ألوان، تصميم "تكنو" للأطفال، رقم المرجع: 4368',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/31.webp',
    ],
    gallery: [
      '/img-webp/School-tools/31.webp',
      '/img-webp/School-tools/31.1.webp',
      '/img-webp/School-tools/31.2.webp',
      '/img-webp/School-tools/31.3.webp',
      '/img-webp/School-tools/31.4.webp',
    ],
    description: 'طلاء مائي للأطفال ذو طابع مدرسي؛ 6 أنابيب سعة 8 مل، سهل الاستخدام.',
    specs: [{ label: 'العدد', value: '6' }],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-13-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 100,
        stock: 50,
        sku: '4368',
        images: [
      '/img-webp/School-tools/31.1.webp',
        ],
      },
      {
        id: 'st-13-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4368',
        images: [
      '/img-webp/School-tools/31.2.webp',
        ],
      },
      {
        id: 'st-13-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4368',
        images: [
      '/img-webp/School-tools/31.3.webp',
        ],
      },
      {
        id: 'st-13-purple',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4368',
        images: [
      '/img-webp/School-tools/31.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-14',
    name: 'طلاء مائي مكون من 12 لونًا، بتصميم "تكنو" للأطفال، رقم المرجع: 4389',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 450,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/32.webp',
    ],
    gallery: [
      '/img-webp/School-tools/32.webp',
      '/img-webp/School-tools/32.1.webp',
      '/img-webp/School-tools/32.2.webp',
      '/img-webp/School-tools/32.3.webp',
    ],
    description: 'ألوان مائية لتصاميم أطفال المدارس، ١٢ أنبوبًا سعة ٨ مل، سهلة الاستخدام على جميع أنواع الأسطح وباستخدام أدوات مختلفة. تشمل هذه المجموعة الكاملة ألوانًا زاهية وغير زاهية للرسم والمزج.',
    specs: [{ label: 'العدد', value: '12' }],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-14-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 100,
        stock: 50,
        sku: '4389',
        images: [
      '/img-webp/School-tools/32.webp',
        ],
      },
      {
        id: 'st-14-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4389',
        images: [
      '/img-webp/School-tools/32.1.webp',
        ],
      },
    {
        id: 'st-14-yellow',
        name: 'أصفر',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4389',
        images: [
      '/img-webp/School-tools/32.2.webp',
        ],
      },
      {
        id: 'st-14-purple',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4389',
        images: [
      '/img-webp/School-tools/32.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-15',
    name: 'ألوان زيتية "تكنو" مكونة من 12 لونًا، رقم المرجع: 0128',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 700,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/33.webp',
    ],
    gallery: [
      '/img-webp/School-tools/33.webp',
    ],
    description: 'طلاء زيتي؛ 12 أنبوبًا سعة 11 مل.',
    specs: [{ label: 'العدد', value: '12' }],
    createdAt: '2024-08-20',
  },

{
    id: 'st-16',
    name: 'ألوان غواش، علبة تحتوي على 10 أنابيب سعة 10 مل، "PEBEO" رقم المرجع: 678000',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 860,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/34.webp',
    ],
    gallery: [
      '/img-webp/School-tools/34.webp',
    ],
    description: 'ألوان غواش، علبة تحتوي على 10 أنابيب سعة 10 مل، ألوان متنوعة مناسبة للأطفال في المدرسة.',
    specs: [{ label: 'العدد', value: '12' }],
    createdAt: '2024-08-20',
  },



{
    id: 'st-17',
    name: 'طلاء مائي بستة ألوان، تصميم "تكنو" قياسي، رقم المرجع: 0126',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/35.webp',
    ],
    gallery: [
      '/img-webp/School-tools/35.webp',
      '/img-webp/School-tools/35.1.webp',
      '/img-webp/School-tools/35.2.webp',
      '/img-webp/School-tools/35.3.webp',
      '/img-webp/School-tools/35.4.webp',
    ],
    description: 'طلاء مدرسي مائي؛ 6 أنابيب سعة 8 مل، سهل الاستخدام.',
    specs: [{ label: 'العدد', value: '6' }],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-17-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 100,
        stock: 50,
        sku: '0126',
        images: [
      '/img-webp/School-tools/35.webp',
        ],
      },
      {
        id: 'st-17-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 0,
        stock: 50,
        sku: '0126',
        images: [
      '/img-webp/School-tools/35.4.webp',
        ],
      },
    {
        id: 'st-17-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 0,
        stock: 50,
        sku: '0126',
        images: [
      '/img-webp/School-tools/35.3.webp',
        ],
      },
      {
        id: 'st-17-purple',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 0,
        stock: 50,
        sku: '0126',
        images: [
      '/img-webp/School-tools/35.2.webp',
        ],
      },
    ],
  },


{
    id: 'st-18',
    name: 'طلاء مائي ذو 12 لونًا، تصميم "تكنو" قياسي، رقم المرجع: 0127',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 450,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/36.webp',
    ],
    gallery: [
      '/img-webp/School-tools/36.webp',
      '/img-webp/School-tools/36.1.webp',
      '/img-webp/School-tools/36.2.webp',
      '/img-webp/School-tools/36.3.webp',
      '/img-webp/School-tools/36.4.webp',
    ],
    description: 'ألوان مدرسية مائية، ١٢ أنبوبًا سعة ٨ مل، سهلة الاستخدام على جميع أنواع الأسطح وباستخدام أدوات مختلفة. تشمل هذه المجموعة الكاملة ألوانًا زاهية وغير شفافة للرسم والمزج.',
    specs: [
      { label: 'العدد', value: '12' },
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-18-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 100,
        stock: 50,
        sku: '0127',
        images: [
      '/img-webp/School-tools/36.webp',
        ],
      },
      {
        id: 'st-18-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 0,
        stock: 50,
        sku: '0127',
        images: [
      '/img-webp/School-tools/36.2.webp',
        ],
      },
    {
        id: 'st-18-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 0,
        stock: 50,
        sku: '0127',
        images: [
      '/img-webp/School-tools/36.3.webp',
        ],
      },
      {
        id: 'st-18-purple',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 450.00,
       // oldPrice: 0,
        stock: 50,
        sku: '0127',
        images: [
      '/img-webp/School-tools/36.4.webp',
        ],
      },
    ],
  },


{
    id: 'st-19',
    name: 'مجموعة ألوان مائية للأطفال، 12 لونًا × 28 مم مع فرشاة "تكنو"، رقم المرجع: 4407',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 380,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/37.webp',
    ],
    gallery: [
      '/img-webp/School-tools/37.webp',
      '/img-webp/School-tools/37.1.webp',
      '/img-webp/School-tools/37.2.webp',
      '/img-webp/School-tools/37.3.webp',
      '/img-webp/School-tools/37.4.webp',
    ],
    description: 'علبة تحتوي على 12 قرصاً مائياً مزودة بفرشاة.',
    specs: [
      { label: 'العدد', value: '12' },
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-19-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 380.00,
       // oldPrice: 100,
        stock: 50,
        sku: '4407',
        images: [
      '/img-webp/School-tools/37.1.webp',
        ],
      },
      {
        id: 'st-19-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 380.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4407',
        images: [
      '/img-webp/School-tools/37.2.webp',
        ],
      },
    {
        id: 'st-19-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 380.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4407',
        images: [
      '/img-webp/School-tools/37.3.webp',
        ],
      },
      {
        id: 'st-19-purple',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 380.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4407',
        images: [
      '/img-webp/School-tools/37.4.webp',
        ],
      },
    ],
  },



{
    id: 'st-20',
    name: 'مجموعة ألوان مائية للأطفال، 8 ألوان × 28 مم مع فرشاة "تكنو"، رقم المرجع: 4788',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/38.webp',
    ],
    gallery: [
      '/img-webp/School-tools/38.webp',
      '/img-webp/School-tools/38.1.webp',
    ],
    description: 'علبة تحتوي على 8 أقراص مائية مزودة بفرشاة.',
    specs: [
      { label: 'العدد', value: '8' },
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-20-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 100,
        stock: 50,
        sku: '4788',
        images: [
      '/img-webp/School-tools/38.webp',
        ],
      },
      {
        id: 'st-20-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 250.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4788',
        images: [
      '/img-webp/School-tools/38.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-21',
    name: 'ألوان مائية فاخرة، علبة تحتوي على 12 أنبوبًا سعة 12 مل "PEBEO" رقم المرجع: 668400',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 1750,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/39.webp',
    ],
    gallery: [
      '/img-webp/School-tools/39.webp',
    ],
    description: 'ألوان مائية فاخرة، ١٢ أنبوبًا، ١٢ مل. تتميز ألوان بيبيو المائية بسهولة مزجها، وعمق لونها، وشفافيتها التي لا تتلاشى بعد الجفاف. تم اختيار الألوان بعناية لتلبية احتياجات هواة الرسم بالألوان المائية.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-22',
    name: 'ألوان مائية 24 × 12 مل، لون كريمي "تكنو"، رقم المرجع: 7362',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 750,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/40.webp',
    ],
    gallery: [
      '/img-webp/School-tools/40.webp',
    ],
    description: 'مجموعة ألوان مائية فاخرة مكونة من 24 أنبوبًا، سعة كل منها 12 مل. تتميز ألوان تكنو المائية بسهولة مزجها، وعمقها اللوني، وشفافيتها التي لا تتلاشى بعد الجفاف. تم اختيار الألوان بعناية لتلبية احتياجات هواة الرسم بالألوان المائية.',
    specs: [
      { label: 'العدد', value: '24' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-23',
    name: 'ألوان مائية 18 × 12 مل من كريمة "تكنو" رقم المرجع: 7358',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 550,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/41.webp',
    ],
    gallery: [
      '/img-webp/School-tools/41.webp',
    ],
    description: 'مجموعة ألوان مائية فاخرة مكونة من 18 أنبوبًا، سعة كل منها 12 مل. تتميز ألوان تكنو المائية بسهولة مزجها، وعمقها اللوني، وشفافيتها التي لا تتلاشى بعد الجفاف. تم اختيار الألوان بعناية لتلبية احتياجات هواة الرسم بالألوان المائية.',
    specs: [
      { label: 'العدد', value: '18' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-24',
    name: 'علبة أقلام جل 6+4 "مُمَد" رقم المرجع: 836315',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1450,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/42.webp',
    ],
    gallery: [
      '/img-webp/School-tools/42.webp',
    ],
    description: 'هيكل بلاستيكي مزود بنظام لف للحفاظ على نظافة اليدين.',
    specs: [
      { label: 'العدد', value: '10' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-25',
    name: 'علبة أقلام جل 4+2 "MAPED" رقم المرجع: 836314',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 780,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/43.webp',
    ],
    gallery: [
      '/img-webp/School-tools/43.webp',
    ],
    description: 'هيكل بلاستيكي مزود بنظام لف للحفاظ على نظافة اليدين.',
    specs: [
      { label: 'العدد', value: '6' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-26',
    name: 'فرشاة مدرسية رقم 2-6-10 في عبوة نفطة "تكنو" رقم المرجع: 5378',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 270,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/45.webp',
    ],
    gallery: [
      '/img-webp/School-tools/45.webp',
    ],
    description: 'مثالية للبدء في الرسم، سواء لإنشاء الأعمال الأولى أو لاكتشاف متعة الهوايات الإبداعية، مجموعة من 3 فرش بأحجام مختلفة.',
    specs: [
      { label: 'العدد', value: '3' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-27',
    name: 'فرش ذات مقبض، طقم من 4 قطع "تكنو"، رقم المرجع: 4647',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 600,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/46.webp',
    ],
    gallery: [
      '/img-webp/School-tools/46.webp',
    ],
    description: 'طقم مكون من 4 قطع مع منطقة إمساك وواقيات رأس.',
    specs: [
      { label: 'العدد', value: '4' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-28',
    name: 'أقلام تلوين مائية من كولور بيبس مع فرشاة، 18 لونًا "مابيد" رقم المرجع: 836012',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1480,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/47.webp',
    ],
    gallery: [
      '/img-webp/School-tools/47.webp',
    ],
    description: 'مجموعة من أقلام التلوين بألوان زاهية. متوافقة مع معايير سلامة الألعاب. تصميم مريح: شكل مثلث لسهولة الإمساك. ضع - بلل - لون.',
    specs: [
      { label: 'العدد', value: '18' },
    ],
    createdAt: '2024-08-20',
  },


{
    id: 'st-29',
    name: '12 قلم رصاص ملون مع قلم رصاص ثنائي الألوان مجاني من كولور بيبس "مابيد" رقم المرجع: 832021',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 550,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/48.webp',
    ],
    gallery: [
      '/img-webp/School-tools/48.webp',
    ],
    description: 'متوافق مع لوائح الألعاب، تصميم مريح: قلم رصاص مثلث الشكل لقبضة أفضل',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },


  {
    id: 'st-30',
    name: '12 قلم رصاص ملون مثلث الشكل من كولور بيبس مع مبراة "مابيد" رقم المرجع: 183213',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 495,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/49.webp',
    ],
    gallery: [
      '/img-webp/School-tools/49.webp',
    ],
    description: 'متوافق مع لوائح الألعاب، تصميم مريح: قلم رصاص مثلث الشكل لقبضة أفضل',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

  {
    id: 'st-31',
    name: 'أقلام تلوين مائية من كولور بيبس مع فرشاة، 12 لونًا "مابيد" رقم المرجع: 836011',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 995,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/50.webp',
    ],
    gallery: [
      '/img-webp/School-tools/50.webp',
    ],
    description: 'مجموعة من أقلام التلوين بألوان زاهية. متوافقة مع معايير سلامة الألعاب. تصميم مريح: شكل مثلث لسهولة الإمساك. ضع - بلل - لون.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

  {
    id: 'st-32',
    name: 'أقلام تلوين مائية من مابيد، 12 لونًا، في علبة معدنية، رقم المرجع: 832412',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 3250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/51.webp',
    ],
    gallery: [
      '/img-webp/School-tools/51.webp',
      '/img-webp/School-tools/51.1.webp',
      '/img-webp/School-tools/51.2.webp',
    ],
    description: 'صُنعت هذه الأقلام باستخدام أصباغ عالية الجودة لإنشاء رسومات ألوان مائية جميلة (صور شخصية، ولوحات طبيعة صامتة، ومناظر طبيعية...)، وهي قابلة للذوبان في الماء تمامًا، ويمكن استخدامها جافة أو مع الماء، وتتميز بأصباغ عالية الجودة، وجسم مصنوع من خشب الأرز، ومقاومة ممتازة للضوء، ورقم اللون موضح على كل قلم.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

  {
    id: 'st-33',
    name: 'علبة أقلام تلوين ذكية بـ 12 لونًا مع 3 ألوان فلورية "MAPD" رقم المرجع: 832032',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1100,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/52.3.webp',
    ],
    gallery: [
      '/img-webp/School-tools/52.3.webp',
      '/img-webp/School-tools/52.4.webp',
      '/img-webp/School-tools/52.2.webp',
      '/img-webp/School-tools/52.webp',
      '/img-webp/School-tools/52.1.webp',
    ],
    description: 'جميع مزايا أقلام تلوين كولور بيبس، بالإضافة إلى حماية علبة بلاستيكية أو معدنية بتصميم مرح. صغيرة الحجم: بفضل مفصلها الذي يدور 360 درجة، تشغل مساحة صغيرة جدًا على الطاولة.',
    specs: [
      { label: 'العدد', value: '12' },
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-33-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 1100.00,
       // oldPrice: 100,
        stock: 50,
        sku: '832032',
        images: [
      '/img-webp/School-tools/52.3.webp',
      '/img-webp/School-tools/52.4.webp',
      '/img-webp/School-tools/52.2.webp',        ],
      },
      {
        id: 'st-33-pink',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 1100.00,
       // oldPrice: 0,
        stock: 50,
        sku: '832032',
        images: [
      '/img-webp/School-tools/52.webp',
      '/img-webp/School-tools/52.1.webp',        ],
      },
    ],
  },

  {
    id: 'st-34',
    name: 'أقلام تلوين مابيد ذات 12 لونًا، رقم المرجع: 832044',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 740,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/53.webp',
    ],
    gallery: [
      '/img-webp/School-tools/53.webp',
    ],
    description: 'مجموعة من أقلام الرصاص ذات الألوان الزاهية. متوافقة مع لوائح الألعاب. تصميم مريح: قلم رصاص مثلث الشكل لقبضة أفضل.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

  {
    id: 'st-35',
    name: 'أقلام تلوين مرنة من 12 لونًا "MAPED" رقم المرجع: 683212',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1300,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/54.webp',
    ],
    gallery: [
      '/img-webp/School-tools/54.webp',
      '/img-webp/School-tools/54.1.webp',
    ],
    description: 'منتجات حصرية من مابيد، تشكيلة منتجات تلبي احتياجات محددة. متوافقة مع لوائح الألعاب.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-36',
    name: 'أقلام تلوين كولور بيبس، علبة معدنية تحتوي على 12 لونًا "مابيد" رقم المرجع: 832014',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1390,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/55.webp',
    ],
    gallery: [
      '/img-webp/School-tools/55.webp',
    ],
    description: 'مجموعة من أقلام الرصاص ذات الألوان الزاهية. متوافقة مع لوائح الألعاب. تصميم مريح: قلم رصاص مثلث الشكل لقبضة أفضل.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-37',
    name: 'أقلام تلوين بلاستيكية نظيفة من بلاستيك بيبس، 18 لونًا، رقم المرجع: 862012',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1150,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/56.webp',
    ],
    gallery: [
      '/img-webp/School-tools/56.webp',
      '/img-webp/School-tools/56.1.webp',
    ],
    description: 'أقلام رصاص بلاستيكية ذات طرف دقيق وآخر مسطح. نظيفة: لا تُلطخ يديك. سهلة البري. متوافقة مع معايير سلامة الألعاب.',
    specs: [
      { label: 'العدد', value: '18' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-38',
    name: 'مجموعة أقلام تلوين بلاستيكية من 12 قطعة من كولور بيبس "مابيد" رقم المرجع: 862011',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 950,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/57.webp',
    ],
    gallery: [
      '/img-webp/School-tools/57.webp',
    ],
    description: 'أقلام رصاص بلاستيكية ذات طرف دقيق وآخر مسطح. نظيفة: لا تُلطخ يديك. سهلة البري. متوافقة مع معايير سلامة الألعاب.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-39',
    name: 'مجموعة تلوين مكونة من 33 قطعة "مابيد" رقم المرجع: 897417',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 3950,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/58.webp',
    ],
    gallery: [
      '/img-webp/School-tools/58.webp',
    ],
    description: 'قطعة: 10 أقلام تحديد فرشاة + 10 أقلام رسم بياني + 12 قلم رصاص ملون ثنائي اللون + مبراة أقلام رصاص معدنية واحدة',
    specs: [
      { label: 'العدد', value: '33' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-40',
    name: 'علبة أقلام خشبية ملونة من ترينو فلورسنت، تحتوي على 6 ألوان "تكنو"، رقم المرجع: 5776',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 170,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/59.webp',
    ],
    gallery: [
      '/img-webp/School-tools/59.webp',
      '/img-webp/School-tools/59.1.webp',

    ],
    description: 'أقلام تلوين خشبية مثلثة الشكل، مجموعة من 6 أقلام، مريحة للأطفال من سن 3 سنوات فما فوق، ألوان فلورية.',
    specs: [
      { label: 'العدد', value: '6' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-41',
    name: 'أقلام خشبية ملونة بألوان الزهور من واو، علبة تحتوي على 12 قلمًا من نوع "تكنو" (CLR)، رقم المرجع: 6563',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/60.webp',
    ],
    gallery: [
      '/img-webp/School-tools/60.webp',
    ],
    description: 'أقلام رصاص قابلة للمسح حيث تكون الممحاة بنفس لون القلم، مريحة للأطفال من سن 3 سنوات فما فوق، ألوان زاهية، سنها 2.8 مم مقاوم للغاية، سهل البري.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-42',
    name: 'علبة أقلام تلوين واو هارت، 12 قلمًا، لون "تكنو"، رقم المرجع: 6564',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/61.webp',
    ],
    gallery: [
      '/img-webp/School-tools/61.webp',
    ],
    description: 'أقلام رصاص قابلة للمسح حيث تكون الممحاة بنفس لون القلم، مريحة للأطفال من سن 3 سنوات فما فوق، ألوان زاهية، سنها 2.8 مم مقاوم للغاية، سهل البري.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-43',
    name: 'أقلام تلوين قابلة للمسح من واو كريا، علبة تحتوي على 24 قلمًا "تكنو"، رقم المرجع: 6928',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 725,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/62.webp',
    ],
    gallery: [
      '/img-webp/School-tools/62.webp',
    ],
    description: 'أقلام رصاص قابلة للمسح بممحاة بنفس لون القلم، مريحة للأطفال من عمر 3 سنوات فما فوق، بتصميم إبداعي في علبة دائرية، وألوان زاهية. رؤوسها بقياس 2.8 مم شديدة المقاومة وسهلة البري.',
    specs: [
      { label: 'العدد', value: '24' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-44',
    name: 'أقلام تلوين قابلة للمسح من واو كريا، علبة تحتوي على 18 قلمًا "تكنو"، رقم المرجع: 6927',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 585,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/63.webp',
    ],
    gallery: [
      '/img-webp/School-tools/63.webp',
    ],
    description: 'أقلام رصاص قابلة للمسح بممحاة بنفس لون القلم، مريحة للأطفال من عمر 3 سنوات فما فوق، بتصميم إبداعي في علبة دائرية، وألوان زاهية. رؤوسها بقياس 2.8 مم شديدة المقاومة وسهلة البري.',
    specs: [
      { label: 'العدد', value: '18' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-45',
    name: 'أقلام تلوين قابلة للمسح من واو كريا، علبة تحتوي على 12 قلمًا "تكنو"، رقم المرجع: 6926',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 390,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/64.webp',
    ],
    gallery: [
      '/img-webp/School-tools/64.webp',
    ],
    description: 'أقلام رصاص قابلة للمسح بممحاة بنفس لون القلم، مريحة للأطفال من عمر 3 سنوات فما فوق، بتصميم إبداعي في علبة دائرية، وألوان زاهية. رؤوسها بقياس 2.8 مم شديدة المقاومة وسهلة البري.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-46',
    name: 'أقلام رصاص باستيل ملونة من واو باستال، علبة دائرية تحتوي على 12 قلمًا من نوع "تكنو" (رقم المرجع: 6566)',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 310,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/65.webp',
    ],
    gallery: [
      '/img-webp/School-tools/65.webp',
    ],
    description: 'هيكل مريح لقبضة أفضل، قطر الرصاص 2.8 مم، رأس متين، علبة دائرية، لون باستيل.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-47',
    name: 'أقلام رصاص ملونة من ترينو فلورسنت، علبة تحتوي على 12 لونًا "تكنو"، رقم المرجع: 5775',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 295,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/66.webp',
    ],
    gallery: [
      '/img-webp/School-tools/66.webp',
      '/img-webp/School-tools/66.1.webp',
    ],
    description: 'قلم رصاص خشبي مثلث الشكل ملون، مريح للأطفال من سن 3 سنوات فما فوق، بألوان فلورية',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

 {
    id: 'st-48',
    name: 'علبة أقلام رصاص ملونة بألوان الباستيل من واو، تحتوي على 12 لونًا "تكنو" رقم المرجع: 6565',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/67.webp',
    ],
    gallery: [
      '/img-webp/School-tools/67.webp',
    ],
    description: 'تصميم مريح لقبضة أفضل. قطر الرصاص 2.8 مم، رأس متين، قابل للمسح بالممحاة، ألوان باستيل.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-49',
    name: 'أقلام رصاص ملونة قابلة للمسح من واو، علبة تحتوي على 72 لونًا "تكنو"، رقم المرجع: 6569',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 2600,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/68.webp',
    ],
    gallery: [
      '/img-webp/School-tools/68.webp',
    ],
    description: 'تصميم مريح لقبضة أفضل. قطر الرصاص 2.8 مم، رأس متين، قابل للمسح بالممحاة، في علبة دائرية.',
    specs: [
      { label: 'العدد', value: '72' },
    ],
    createdAt: '2024-08-20',
  },


{
    id: 'st-50',
    name: 'أقلام تلوين فلورسنت من واو، علبة تحتوي على 12 لونًا "تكنو" رقم المرجع: 6567',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 370,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/69.webp',
    ],
    gallery: [
      '/img-webp/School-tools/69.webp',
    ],
    description: 'تصميم مريح لقبضة أفضل. قطر الرصاص 2.8 مم، رأس متين، قابل للمسح بالممحاة، ألوان فلورية.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-51',
    name: 'أقلام تلوين قابلة للمسح من واو كريا، علبة بلاستيكية، 18 لونًا "تكنو" رقم المرجع: 6930',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 585,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/70.webp',
    ],
    gallery: [
      '/img-webp/School-tools/70.webp',
    ],
    description: 'أقلام رصاص قابلة للمسح حيث تكون الممحاة بنفس لون القلم، مريحة للأطفال من سن 3 سنوات فما فوق، تصميم إبداعي في علبة بلاستيكية، ألوان زاهية، رؤوسها 2.8 مم شديدة المقاومة وسهلة البري.',
    specs: [
      { label: 'العدد', value: '18' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-52',
    name: 'أقلام تلوين قابلة للمسح من واو كريا، علبة بلاستيكية، 24 لونًا "تكنو" رقم المرجع: 6931',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 725,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/71.webp',
    ],
    gallery: [
      '/img-webp/School-tools/71.webp',
    ],
    description: 'أقلام رصاص قابلة للمسح حيث تكون الممحاة بنفس لون القلم، مريحة للأطفال من سن 3 سنوات فما فوق، تصميم إبداعي في علبة بلاستيكية، ألوان زاهية، رؤوسها 2.8 مم شديدة المقاومة وسهلة البري.',
    specs: [
      { label: 'العدد', value: '24' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-53',
    name: '6 قطع من أقلام التلوين ذات الرؤوس اللبادية من أوشن ديكو، أكياس بلاستيكية "مابيد" رقم المرجع: 845700',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 340,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/72.webp',
    ],
    gallery: [
      '/img-webp/School-tools/72.webp',
      '/img-webp/School-tools/72.1.webp',
    ],
    description: 'من الرسم في المنزل إلى التلوين في المدرسة، سترافق هذه الأقلام الملونة الزاهية طفلك في جميع أنشطته الإبداعية! تتميز أقلام التلوين "أوشن" من مجموعة "كولور بيبس" برأس دقيق ومتين وألوان زاهية. صُمم حبرها ليُغسل بسهولة عن القماش أو الجلد. وهي متوافقة مع معايير سلامة الألعاب لضمان استخدامها بأمان. تصميمها الأصلي المستوحى من المحيط وألوانها الزاهية تجعل هذه الأقلام رفيقًا مثاليًا لطفلك لإطلاق العنان لخياله!',
    specs: [
      { label: 'العدد', value: '6' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-54',
    name: 'مجموعة علامات تحديد للرسم  "MAPED" المكونة من 12 قطعة، رقم المرجع: 845442',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 680,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/73.webp',
    ],
    gallery: [
      '/img-webp/School-tools/73.webp',
      '/img-webp/School-tools/73.1.webp',
    ],
    description: 'أقلام التحديد "جانغل" من مجموعة "كولور بيبس" تأتي بألوان زاهية، مصممة خصيصًا للاستخدام اليومي في المدرسة أو المنزل. تتميز برأس مدبب 2.8 مم مصمم ليدوم طويلًا ويقاوم إعادة التعبئة. حبرها قابل للغسل، مما يسهل تنظيف الأقمشة في الغسالة أو بالماء والصابون للغسل اليدوي. كما أنها تقاوم الجفاف لمدة تصل إلى أسبوع بدون غطاء. تتوافق أقلام "جانغل" مع معايير سلامة الألعاب لضمان الاستخدام الآمن. مع هذه المجموعة المكونة من 12 قلمًا من أقلام "جانغل كوزميك"، امنح طفلك مقلمة أساسية متينة تدوم طويلًا. بألوانها الزاهية وحبرها القابل للغسل الذي يدوم طويلًا، يمكن لطفلك الانطلاق في رحلة إلى مجرة ​​خيالية زاهية الألوان!',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-55',
    name: 'قلم تحديد للرسم، قلم تحديد للخطوط، عبوة من 12 لونًا "تكنو" رقم المرجع: 5914',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 720,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/74.webp',
    ],
    gallery: [
      '/img-webp/School-tools/74.webp',
    ],
    description: 'مجموعة من 12 قلم تلوين برأسين (رأس رفيع/رأس مستدير) بألوان متنوعة. مثالية للرسم على المانجا والقصص المصورة والرسم التقني ورسم الأزياء والتخطيط. حبر صبغي مائي مقاوم للضوء، خالٍ من الأحماض، وغير سام.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-56',
    name: 'قلم رسم بفرشاة فنية، عبوة من 12 لونًا "تكنو" رقم المرجع: 5906',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 1100,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/75.webp',
    ],
    gallery: [
      '/img-webp/School-tools/75.webp',
    ],
    description: 'مجموعة من 12 قلم تلوين برأسين (رأس رفيع/رأس فرشاة) بألوان متنوعة. مثالية للرسم على المانجا والقصص المصورة والرسم التقني ورسم الأزياء والتخطيط. حبر صبغي مائي مقاوم للضوء، خالٍ من الأحماض، وغير سام.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-57',
    name: 'أقلام رصاص ملونة كونية × 12 "مابيد" رقم المرجع:862242',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 595,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/76.webp',
    ],
    gallery: [
      '/img-webp/School-tools/76.1.webp',
    ],
    description: 'متوافق مع لوائح الألعاب، سنّ ناعم ومتين: قطر 2.9 مم. تصميم مريح: قلم رصاص مثلث الشكل لقبضة أفضل، سهل البري. متوافق مع لوائح الألعاب.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-58',
    name: 'لام تلوين باستيل *12 طويل من كولور بيبس "مابيد"  رقم المرجع 832569',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 320,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/77.webp',
    ],
    gallery: [
      '/img-webp/School-tools/77.1.webp',
    ],
    description: 'متوفر بنسختين صغيرة وكبيرة! بفضل تشكيلته الواسعة من الألوان، تتيح هذه المجموعة المكونة من 12 قلم تلوين خشبي جميع الدرجات اللونية للحصول على تلوين زاهٍ ومبتكر.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-59',
    name: 'أقلام تلوين باستيل صغيرة × 12 لونًا من مجموعة "MAPED" رقم المرجع: 832569',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 320,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/78.webp',
    ],
    gallery: [
      '/img-webp/School-tools/78.webp',
      '/img-webp/School-tools/78.1.webp',
    ],
    description: 'حجم صغير! بفضل تشكيلتها الواسعة من الألوان، تتيح هذه العبوة المكونة من 12 قلم تلوين خشبي صغير جميع الدرجات اللونية للحصول على تلوين مشرق وأصلي.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-60',
    name: 'أقلام رسم فنية، مجموعة "تكنو" من 12 لونًا، رقم المرجع: 5904',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 2100,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/79.webp',
    ],
    gallery: [
      '/img-webp/School-tools/79.webp',
    ],
    description: 'مجموعة من 12 قلم تلوين بفرشاة بألوان متنوعة. مثالية للرسم على المانجا والقصص المصورة ورسم الأزياء والتخطيط. حبر صبغي مائي مقاوم للضوء، خالٍ من الأحماض، وغير سام.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-61',
    name: 'أقلام تلوين ورسم فنية، عبوة "تكنو" من 12 لونًا، رقم المرجع: 5905',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 980,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/80.webp',
    ],
    gallery: [
      '/img-webp/School-tools/80.webp',
    ],
    description: 'مجموعة من 12 قلم تلوين بفرشاة بألوان متنوعة. مثالية للرسم على المانجا والقصص المصورة ورسم الأزياء والتخطيط. حبر صبغي مائي مقاوم للضوء، خالٍ من الأحماض، وغير سام.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-62',
    name: 'مجموعة أقلام تحديد الرسم "آرت لاينر" من 12 لونًا "تكنو" رقم المرجع: 5903',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 1650,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/81.webp',
    ],
    gallery: [
      '/img-webp/School-tools/81.webp',
    ],
    description: 'مجموعة من 12 قلم تحديد رفيع الرأس بألوان متنوعة. هذه المجموعة مثالية لرسم المانجا والقصص المصورة والرسم التقني. الحبر المائي ذو الصبغة مقاوم للضوء والتلطخ وخالٍ من الأحماض.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-63',
    name: '12 قلم تلوين وحوش + 15 قلم رصاص وحوش "MAPED" رقم المرجع: 984718',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1750,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/82.webp',
    ],
    gallery: [
      '/img-webp/School-tools/82.webp',
      '/img-webp/School-tools/82.1.webp',
    ],
    description: 'ألوانها الزاهية هي أفضل حليف لطفلك لإطلاق العنان لخياله! مع تشكيلة واسعة من الألوان، تتيح هذه المجموعة المكونة من 15 قلم تلوين و12 قلم تحديد إمكانية استخدام جميع الدرجات اللونية الممكنة للتلوين المبهج. اكتشف الوحوش ومشاعرها.',
    specs: [
      { label: 'العدد', value: '12 + 15' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-64',
    name: ' أقلام تلوين باستيل، 24 قطعة، "مابيد"، رقم المرجع: 864012',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 650,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/83.webp',
    ],
    gallery: [
      '/img-webp/School-tools/83.webp',
      '/img-webp/School-tools/83.1.webp',
      '/img-webp/School-tools/83.2.webp',
    ],
    description: 'صُممت أقلام تلوين كولور بيبس لتكون سهلة الاستخدام بفضل حجمها الكبير وشكلها المثلث المميز، مما يجعلها مثالية للأيدي الصغيرة. تتميز بألوانها الزاهية والنابضة بالحياة، وهي معتمة للغاية. تتوافق هذه الأقلام مع معايير سلامة الألعاب لضمان استخدامها بأمان. تتميز هذه المجموعة من أقلام تلوين الباستيل الزيتية بسهولة استخدامها ونعومتها الفائقة، مما يتيح لأطفالك ابتكار مجموعة متنوعة من التأثيرات والرسومات الأصلية. إنها مثالية للاستعداد للعودة إلى المدرسة، أو العطلات، أو كهدية مميزة، ستسعد أطفالك بالتأكيد! مع هذه المجموعة المكونة من 24 قلم تلوين كولور بيبس، يُمكن ابتكار العديد من التأثيرات الفنية: الخدش، والتلوين الطبقي، والمسح... سيحب أطفالك استخدامها وإبداع أجمل رسوماتهم!',
    specs: [
      { label: 'العدد', value: '24' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-65',
    name: 'أقلام كولوربس مونستر ذات رؤوس لبادية، 12 قطعة "مابيد"، رقم المرجع: 845400',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 850,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/84.webp',
    ],
    gallery: [
      '/img-webp/School-tools/84.webp',
      '/img-webp/School-tools/84.1.webp',
    ],
    description: 'أقلام التلوين "جانغل" من مجموعة "كولور بيبس" تأتي بألوان زاهية، مصممة خصيصًا للاستخدام اليومي في المدرسة أو المنزل. تتميز برأس مدبب 2.8 مم مصمم ليدوم طويلًا ويقاوم إعادة التعبئة. حبرها قابل للغسل، مما يسهل تنظيف الأقمشة في الغسالة أو بالماء والصابون للغسيل اليدوي. كما أنها تقاوم الجفاف لمدة تصل إلى أسبوع بدون غطاء. تتوافق أقلام "جانغل" مع معايير سلامة الألعاب لضمان الاستخدام الآمن. تصميمها الأصلي المستوحى من الوحوش وألوانها الزاهية تجعلها الرفيق الأمثل لطفلك لإطلاق العنان لخياله! مع تشكيلة واسعة من الألوان، توفر هذه العبوة المكونة من 12 قلمًا جميع الدرجات اللونية اللازمة للتلوين النابض بالحياة. اكتشف 12 وحشًا وعواطفهم.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-66',
    name: 'أقلام تلوين باستيل، 10 قطع "مابيد"، رقم المرجع: 845469',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 920,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/85.webp',
    ],
    gallery: [
      '/img-webp/School-tools/85.webp',
      '/img-webp/School-tools/85.1.webp',
    ],
    description: 'أقلام التلوين "جانغل" من مجموعة "كولور بيبس" تأتي بألوان زاهية، مصممة خصيصًا للاستخدام اليومي في المدرسة أو المنزل. تتميز برأس مدبب 2.8 مم مصمم ليدوم طويلًا ويقاوم إعادة التعبئة. حبرها قابل للغسل، مما يسهل تنظيف الأقمشة في الغسالة أو بالماء والصابون للغسيل اليدوي. كما أنها تقاوم الجفاف لمدة تصل إلى أسبوع بدون غطاء. تتوافق أقلام "جانغل" مع معايير سلامة الألعاب لضمان الاستخدام الآمن. ستكون هذه الأقلام العصرية بألوانها الناعمة والزاهية رفيقة طفلك المثالية لإطلاق العنان لخياله! تحتوي هذه العبوة على 10 أقلام تلوين باستيلية تتيح لك التلوين بألوان زاهية ومبتكرة.',
    specs: [
      { label: 'العدد', value: '10' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-67',
    name: 'أقلام تلوين باستيل × 12 لونًا من كولور بيبس "مابيد" رقم المرجع: 832069',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 520,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/86.webp',
    ],
    gallery: [
      '/img-webp/School-tools/86.webp',
      '/img-webp/School-tools/86.1.webp',
    ],
    description: 'حجم كبير! بفضل تشكيلتها الواسعة من الألوان، تتيح هذه العبوة المكونة من 12 قلم تلوين خشبي صغير الحصول على جميع الدرجات اللونية للحصول على تلوين مشرق وأصلي.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-68',
    name: 'مجموعة أقلام رصاص ملونة ثنائية اللون من ترينو، 12 قلمًا "تكنو"، رقم المرجع: 4373',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 320,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/87.webp',
    ],
    gallery: [
      '/img-webp/School-tools/87.webp',
      '/img-webp/School-tools/87.1.webp',
    ],
    description: 'أقلام تلوين مزيلة للعرق؛ رأسان بلونين مختلفين؛ رأس مقاوم؛ جسم القلم مقسم إلى نصفين حسب اللون.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-69',
    name: 'أقلام تلوين وودي 3 في 1 بستة ألوان ومبراة أقلام "ستابيلو" رقم المرجع: 8806-2',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 3850,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/88.webp',
    ],
    gallery: [
      '/img-webp/School-tools/88.webp',
    ],
    description: 'يُعد جهاز STABILO woody 3in1 الرفيق الإبداعي المثالي للأطفال والحليف الأفضل للآباء. قلم رصاص قابل للغسل، مناسب لجميع أنواع الأسطح، يحول أي سطح إلى ملعب فني: ورق، كرتون، زجاج، سبورة بيضاء أو سوداء، بلاستيك... يمسح بسهولة بقطعة قماش! غني بالأصباغ، ثمانية أضعاف ما يحتويه قلم الرصاص العادي، وتغطيته استثنائية، حتى على الأسطح الداكنة. قلم رصاص ملون، ألوان مائية، وألوان باستيل زيتية: قلم ستابيلو وودي 3 في 1 يتيح لك الحصول على تأثيرات متعددة. شكله المستدير والسميك مثالي للأيدي الصغيرة، ورصاصه XXL 10 مم غير قابل للكسر. مثالي للاستخدام على الورق الداكن، والخشب عالي الجودة (الأرز)، ويكتب على أي سطح تقريبًا (الزجاج، والخشب، والبلاستيك...)، رصاص ناعم ذو صبغة عالية لألوان زاهية، كما أنه قابل للغسل!!!',
    specs: [
      { label: 'العدد', value: '6' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-70',
    name: 'مجموعة الوان ستابيلو ذات رؤوس لبادية مكونة من 12 لونًا، رقم المرجع: 280/12-01',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 1050,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/89.webp',
    ],
    gallery: [
      '/img-webp/School-tools/89.webp',
    ],
    description: 'تضمن قوة STABILO توزيعًا غنيًا للألوان. إنها مثالية للأطفال الذين ينسون أحيانًا إعادة الأغطية، وذلك بفضل قدرتها على البقاء مفتوحة لمدة تصل إلى ثمانية أسابيع دون أن تجف! لذا فهي الحل الأمثل لمتطلبات غرفة الألعاب يحتوي على طرف متوسط ​​يقاوم الضغط القوي لزيادة عمره الافتراضي إلى أقصى حد. الأحبار قابلة للغسل، وهذا أمر مطمئن. سيحب الفنانون الناشئون استخدام أقلام التحديد ذات الرؤوس الليفية هذه بطرق إبداعية لا حصر لها.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-71',
    name: 'مجموعة أقلام رصاص ثلاثية الألوان من 12 لونًا مع مبراة "ستابيلو" رقم المرجع: 203/2-12',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 1400,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/90.webp',
    ],
    gallery: [
      '/img-webp/School-tools/90.webp',
    ],
    description: 'قد يكون هناك فنان عظيم مختبئ وراء كل طفل! صُممت أقلام التلوين STABILO Trio لمساعدة الأطفال على التعبير عن إبداعهم من خلال الألوان: يضمن شكلها المثلثي إمساكًا أفضل ويمنع تشنجات اليد، حتى بعد جلسات تلوين طويلة. بفضل سنها البالغ قطره 4.2 مم، تُعد هذه الأقلام مثالية للرسم والتلوين.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-72',
    name: 'قلم الوان برأس لباد، 68 لونًا، عبوة من 10 ألوان "ستابيلو"، رقم المرجع: 6810/PL',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 1600,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/91.webp',
    ],
    gallery: [
      '/img-webp/School-tools/91.webp',
    ],
    description: 'قلم STABILO Pen 68 مثالي لجميع العقول المبدعة: من الأطفال الذين يرسمون إلى الفنانين الأكثر تطلبًا، بما في ذلك محبي الاتجاهات الإبداعية الجديدة (الأعمال اليدوية، الرسم، التخطيط، تدوين الملاحظات بالرسومات، الكتابة اليدوية)، فهناك ما يناسب الجميع! تتيح لك لوحة ألوانه الزاهية تجسيد إلهامك على الورق، وإنشاء تركيبات لونية مذهلة ومتنوعة. هل تعلم؟ يتوفر قلم Pen 68 أيضًا بأحبار معدنية - Pen 68 metallic - وبرأس فرشاة - Pen 68 brush. متوفر بـ 47 لونًا! أصباغ: تضمن الأصباغ المختارة ألوانًا زاهية ونابضة بالحياة بشكل ملحوظ. جودة عالية: رأس متين متوسط ​​الحجم لا ينكسر. عديم الرائحة: حبر مائي عديم الرائحة لا يتسرب إلى الورقة التالية ولا يذيب حبر أقلام التحديد الدائمة. عملي: يمكن تركه بدون غطاء لمدة تصل إلى 24 ساعة دون أن يجف - ما عليك سوى إعادة الغطاء، وسيتجدد القلم. فكرة ذكية: قلم تحديد بألوان مائية جزئية لمجموعة متنوعة من التأثيرات الإبداعية. عرض الخط: 1.0 مم - طرف متوسط. صنع في ألمانيا',
    specs: [
      { label: 'العدد', value: '10' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-73',
    name: 'قلم لباد برأس دقيق 0.4 مم، عبوة من 10 ألوان "MAPED" رقم المرجع: 749159',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/92.webp',
    ],
    gallery: [
      '/img-webp/School-tools/92.webp',
    ],
    description: 'مجموعة عالمية من أقلام التحديد للكتابة تناسب جميع المستخدمين، صغاراً وكباراً، الذين يرغبون في تحسين الكتابة، أو إنشاء رسومات دقيقة... أو ببساطة اتباع إلهاماتهم.',
    specs: [
      { label: 'العدد', value: '10' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-74',
    name: 'مجموعة مبتكرة من أقلام التلوين ذات الرؤوس اللبادية طويلة المدى، تحتوي على 12 لونًا "MAPED" رقم المرجع: 845044',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1300,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/93.webp',
    ],
    gallery: [
      '/img-webp/School-tools/93.webp',
    ],
    description: '',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-75',
    name: 'قلم لباد ذو رأس دقيق من مابيد، 0.4 مم، 10 ألوان، تصميم جرافيكي صغير الحجم، رقم المرجع: 749155',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 1400,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/94.webp',
    ],
    gallery: [
      '/img-webp/School-tools/94.webp',
    ],
    description: 'مجموعة عالمية من أقلام التحديد للكتابة تناسب جميع المستخدمين، صغاراً وكباراً، الذين يرغبون في تحسين الكتابة، أو إنشاء رسومات دقيقة... أو ببساطة اتباع إلهاماتهم!',
    specs: [
      { label: 'العدد', value: '10' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-76',
    name: 'قلم حبر جاف برأس دقيق 0.4 مم، عبوة من 4 ألوان، من جراف بيبس "مابيد"، رقم المرجع: 749144',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'maped',
    price: 480,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/95.webp',
    ],
    gallery: [
      '/img-webp/School-tools/95.webp',
    ],
    description: 'مجموعة عالمية من أقلام التحديد للكتابة تناسب جميع المستخدمين، صغاراً وكباراً، الذين يرغبون في تحسين الكتابة، أو إنشاء رسومات دقيقة... أو ببساطة اتباع إلهاماتهم!',
    specs: [
      { label: 'العدد', value: '4' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-77',
    name: 'علبة أساسية بستة ألوان من بيجما ميكرون 01 "ساكورا" رقم المرجع: POXSDK016',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 2640,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/96.webp',
    ],
    gallery: [
      '/img-webp/School-tools/96.webp',
    ],
    description: 'مجموعة من 6 أقلام تحديد دقيقة ملونة من بيجما ميكرون 01، بسماكة 0.25 مم. تحتوي العلبة البلاستيكية على أحد أقلام بيجما التالية بألوان الحبر: أسود (49)، أحمر (19)، أزرق (36)، أخضر (29)، بني (12)، وبنفسجي (24). أقلام بيجما ميكرون مقاومة للماء ودائمة، ويستخدمها المصممون والعلماء وأمناء المحفوظات وفنانو المانجا ورسامو الكاريكاتير والرسامو التوضيحيون والهواة. يُنصح باستخدام هذا القلم أيضًا لفن الزنتانجل. طرفه الدقيق يجعله مثاليًا لرسم الرسومات الفنية والتقنية. حبر ساكورا بيجما™ الفريد لا يتسرب عبر الورق، وهو دائم، ومقاوم للماء، ومقاوم للبهتان، وسريع الجفاف، ومتعادل الحموضة.',
    specs: [
      { label: 'العدد', value: '6' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-78',
    name: 'مجموعة من 6 قطع من أدوات مانغا بيغما "ساكورا" رقم المرجع: POXSDKMAN6',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 3050,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/97.webp',
    ],
    gallery: [
      '/img-webp/School-tools/97.webp',
    ],
    description: 'مجموعة أدوات مانغا تتضمن 3 أقلام بيجما ميكرون سوداء، وقلم بيجما جرافيك، وقلم ميكرون براش، وقلم رصاص 0.7 مم. انطلق نحو احتراف المانغا! تقنيات ألوان ساكورا بيجما؛ بيجما هي أول حبر في العالم يجمع بين الأصباغ والماء. رأس القلم الدقيق يجعله مثاليًا لرسم الرسومات الفنية والتقنية. الحبر لا يتسرب عبر الورق.',
    specs: [
      { label: 'العدد', value: '6' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-79',
    name: 'مجموعة من 6 أقلام تحديد دقيقة من بيجما ميكرون بألوان ترابية، مقاس 0.5-0.45 مم "ساكورا"، رقم المرجع: POXSDK056B',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 2570,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/98.webp',
    ],
    gallery: [
      '/img-webp/School-tools/98.webp',
    ],
    description: 'مجموعة من 6 أقلام تحديد دقيقة من نوع Pigma Micron 05، برأس 0.45 مم، بألوان ترابية. تحتوي العلبة البلاستيكية على أحد أقلام التحديد الدقيقة التالية من Pigma: بني داكن (117)، أزرق داكن (243)، أزرق ملكي (138)، بورغندي (22)، أخضر غامق (230)، وأخضر داكن (32). أقلام Pigma Micron مقاومة للماء ودقيقة، وتُستخدم بكثرة من قِبل المصممين والعلماء وأمناء المحفوظات وفناني المانغا ورسامي الكاريكاتير والرسامين التوضيحيين والهواة. يُنصح باستخدام هذا القلم أيضًا لفن الزنتانغل. رأس القلم الدقيق يجعله مثاليًا لرسم الرسومات الفنية والتقنية. حبر Sakura Pigma™ الفريد لا يتسرب عبر الورق، وهو دائم، ومقاوم للماء، ومقاوم للبهتان، وسريع الجفاف، ومتعادل الحموضة.',
    specs: [
      { label: 'العدد', value: '6' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-80',
    name: 'مجموعة من 9 أقلام تحديد دقيقة ملونة من بيجما ميكرون، مقاس 0.5-0.45 مم، لون "ساكورا"، رقم المرجع: POXSDK059',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 3830,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/99.webp',
    ],
    gallery: [
      '/img-webp/School-tools/99.webp',
    ],
    description: 'مجموعة من 9 أقلام تحديد دقيقة ملونة من بيجما ميكرون 05، برأس 0.45 مم. تحتوي العلبة البلاستيكية على أحد أقلام بيجما التالية بألوان الحبر: أسود (49)، أحمر (19)، أزرق (36)، أخضر (29)، بني (12)، بنفسجي (24)، برتقالي (5)، وردي (21)، وبني داكن (117). أقلام بيجما ميكرون مقاومة للماء ودائمة، ويستخدمها المصممون والعلماء وأمناء المحفوظات وفنانو المانجا ورسامو الكاريكاتير والرسامو التوضيحيون والهواة. يُنصح باستخدام هذا القلم أيضًا لفن الزنتانجل. رأس القلم الدقيق يجعله مثاليًا لرسم الرسومات الفنية والتقنية. حبر ساكورا بيجما™ الفريد لا يتسرب عبر الورق، وهو دائم، ومقاوم للماء، ومقاوم للبهتان، وسريع الجفاف، ومتعادل الحموضة.',
    specs: [
    { label: 'العدد', value: '9' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-81',
    name: 'مجموعة من 6 أقلام تحديد دقيقة ملونة من بيجما ميكرون، مقاس 0.5-0.45 مم، لون "ساكورا"، رقم المرجع: POXSDK056A',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 2570,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/100.webp',
    ],
    gallery: [
      '/img-webp/School-tools/100.webp',
    ],
    description: 'مجموعة من 6 أقلام تحديد دقيقة ملونة من بيجما ميكرون 05، بسماكة 0.45 مم. تحتوي العلبة البلاستيكية على أحد أقلام بيجما التالية بألوان الحبر: أسود (49)، أحمر (19)، أزرق (36)، أخضر (29)، بني (12)، وبنفسجي (24). أقلام بيجما ميكرون مقاومة للماء ودائمة، ويستخدمها المصممون والعلماء وأمناء المحفوظات وفنانو المانجا ورسامو الكاريكاتير والرسامو التوضيحيون والهواة. يُنصح باستخدام هذا القلم أيضًا لفن الزنتانجل. طرفه الدقيق يجعله مثاليًا لرسم الرسومات الفنية والتقنية. حبر ساكورا بيجما™ الفريد لا يتسرب عبر الورق، وهو دائم، ومقاوم للماء، ولا يبهت، وسريع الجفاف، ومتعادل الحموضة.',
    specs: [
    { label: 'العدد', value: '6' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-82',
    name: 'أقلام تلوين فابر كاستل كلاسيك ميتاليك X05 رقم المرجع: 114611',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 640,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/101.webp',
    ],
    gallery: [
      '/img-webp/School-tools/101.webp',
    ],
    description: 'هذه المجموعة المكونة من 5 أقلام رصاص معدنية ملونة مثالية لإضافة لمسة من البريق إلى رسوماتك. صُممت هذه الأقلام السداسية الشكل لتوفير قبضة مريحة، وهي مصممة لتقديم أقصى درجات اللمعان، خاصةً على الورق الداكن. تغطي رؤوسها الغنية والناعمة بقياس 3.3 مم مساحات واسعة بألوان زاهية، وهي مقاومة للكسر بشكل استثنائي بفضل عملية ربط خاصة (SV)، مما يطيل عمرها الافتراضي. مصنوعة من خشب معتمد من مجلس رعاية الغابات (FSC) من غابات مستدامة، وهي غير سامة وآمنة للأطفال. يحتوي كل قلم أيضًا على مساحة لكتابة اسمك.',
    specs: [
    { label: 'العدد', value: '5' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-83',
    name: 'علبة أقلام رصاص ملونة كلاسيكية تحتوي على 60 قلمًا من "فابر كاستل" رقم المرجع: 111260',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 3960,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/102.webp',
    ],
    gallery: [
      '/img-webp/School-tools/102.webp',
    ],
    description: 'اكتشف تشكيلة من 60 قلم تلوين استثنائي، مُقدّمة في علبة كرتونية عملية تتحول إلى حامل. توفر هذه المجموعة لوحة ألوان كاملة، تشمل ألوان النيون والمعدنية والباستيل، لإضفاء الحيوية على جميع إبداعاتك. صُممت الأقلام بشكلها السداسي الكلاسيكي لتوفير قبضة مريحة. تتميز رؤوسها بمقاومة عالية للكسر بفضل عملية ربط خاصة (SV)، مما يضمن عمرًا طويلًا واستخدامًا متواصلًا. علاوة على ذلك، يأتي الخشب المستخدم من غابات معتمدة، مما يضمن تصنيعًا صديقًا للبيئة.',
    specs: [
    { label: 'العدد', value: '60' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-84',
    name: 'قلم تحديد مربع مزدوج الرأس من السيراميك الشاحب من ماركة آرت مارك "تكنو" رقم المرجع: 6145',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/103.webp',
    ],
    gallery: [
      '/img-webp/School-tools/103.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-85',
    name: 'قلم تحديد مربع الشكل برأسين من مادة المعجون من ماركة آرت مارك "تكنو" رقم المرجع: 6155',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/104.webp',
    ],
    gallery: [
      '/img-webp/School-tools/104.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-86',
    name: 'قلم تحديد مربع كريمي اللون برأسين من ماركة آرت مارك "تكنو" رقم المرجع: 6063',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/105.webp',
    ],
    gallery: [
      '/img-webp/School-tools/105.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-87',
    name: 'علامة مزدوجة الرأس مربعة الشكل بلون بيج فاتح من ماركة آرت مارك "تكنو" رقم المرجع: 6057',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/106.webp',
    ],
    gallery: [
      '/img-webp/School-tools/106.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-88',
    name: 'قلم تحديد مربع مزدوج الرأس من الطين الأحمر "تكنو" من آرت مارك، رقم المرجع: 6049',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/107.webp',
    ],
    gallery: [
      '/img-webp/School-tools/107.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-89',
    name: 'علامة مزدوجة الرأس، مربعة الشكل، رقم خام، علامة فنية "تكنو"، رقم المرجع: 6122',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/108.webp',
    ],
    gallery: [
      '/img-webp/School-tools/108.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-90',
    name: 'قلم تحديد مزدوج الرأس من نوع "تكنو" من إنتاج شركة "والنت سكوير آرت مارك" (رقم المرجع: 6120)',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/109.webp',
    ],
    gallery: [
      '/img-webp/School-tools/109.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-91',
    name: 'قلم تحديد برونزي مزدوج الرأس من SQUARE ARTMARK "TECHNO" رقم المرجع: 6119',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/110.webp',
    ],
    gallery: [
      '/img-webp/School-tools/110.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-92',
    name: 'قلم تحديد آرت مارك مربع مزدوج الرأس باللون الوردي والبيج "تكنو" رقم المرجع: 6117',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/111.webp',
    ],
    gallery: [
      '/img-webp/School-tools/111.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-93',
    name: 'علامة مزدوجة الرأس من خشب الماهوجني المربع، علامة فنية "تكنو"، رقم المرجع: 6116',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/112.webp',
    ],
    gallery: [
      '/img-webp/School-tools/112.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-94',
    name: 'قلم تحديد آرت مارك ذو رأسين مربعين بلون سيينا المحروق "تكنو" رقم المرجع: 6115',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/113.webp',
    ],
    gallery: [
      '/img-webp/School-tools/113.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-95',
    name: 'قلم تحديد شوكولاتة مربع مزدوج الرأس من آرت مارك "تكنو" رقم المرجع: 6112',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/114.webp',
    ],
    gallery: [
      '/img-webp/School-tools/114.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-96',
    name: 'علامة مزدوجة الرأس من خشب البلوط الطبيعي مربعة الشكل، تحمل علامة "تكنو" الفنية، رقم المرجع: 6111',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/115.webp',
    ],
    gallery: [
      '/img-webp/School-tools/115.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-97',
    name: 'قلم تحديد مربع بني مزدوج الرأس من آرت مارك "تكنو" رقم المرجع: 6124',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/116.webp',
    ],
    gallery: [
      '/img-webp/School-tools/116.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-98',
    name: 'قلم تحديد مزدوج الرأس، بني اللون، مربع الشكل، من ماركة آرت مارك "تكنو"، رقم المرجع: 6123',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/117.webp',
    ],
    gallery: [
      '/img-webp/School-tools/117.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-99',
    name: 'علامة مزدوجة الرأس مربعة الشكل بلون بني كستنائي من ماركة آرت مارك "تكنو" رقم المرجع: 6118',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/118.webp',
    ],
    gallery: [
      '/img-webp/School-tools/118.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-100',
    name: 'علامة مزدوجة الرأس مربعة الشكل بلون بني طوبي من آرت مارك "تكنو" رقم المرجع: 6114',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/119.webp',
    ],
    gallery: [
      '/img-webp/School-tools/119.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-101',
    name: 'قلم تحديد مزدوج الرأس، مربع بلون أرجواني فاتح، من ماركة آرت مارك "تكنو"، رقم المرجع: 6150',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/120.webp',
    ],
    gallery: [
      '/img-webp/School-tools/120.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-102',
    name: 'قلم تحديد مزدوج الرأس بلون بنفسجي ثلجي شادو من آرت مارك "تكنو" رقم المرجع: 6149',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/121.webp',
    ],
    gallery: [
      '/img-webp/School-tools/121.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-103',
    name: 'قلم تحديد مزدوج الرأس مربع الشكل بلون الخزامى الباهت من ماركة آرت مارك "تكنو" رقم المرجع: 6148',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/122.webp',
    ],
    gallery: [
      '/img-webp/School-tools/122.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-104',
    name: 'قلم تحديد مزدوج الرأس من لافندر سكوير آرت مارك "تكنو" رقم المرجع: 6104',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/123.webp',
    ],
    gallery: [
      '/img-webp/School-tools/123.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-105',
    name: 'قلم تحديد مربع مزدوج الرأس بلون أحمر بنفسجي زاهٍ من ماركة آرت مارك "تكنو" رقم المرجع: 6107',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/124.webp',
    ],
    gallery: [
      '/img-webp/School-tools/124.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-106',
    name: 'قلم تحديد مزدوج الرأس، مربع الشكل، بنفسجي رمادي، من ماركة آرت مارك "تكنو"، رقم المرجع: 6109',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/125.webp',
    ],
    gallery: [
      '/img-webp/School-tools/125.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-107',
    name: 'قلم تحديد مزدوج الرأس، مربع أزاليا بنفسجي، علامة فنية "تكنو"، رقم المرجع: 6108',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/126.webp',
    ],
    gallery: [
      '/img-webp/School-tools/126.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-108',
    name: 'قلم تحديد مزدوج الرأس، مربع بنفسجي زاهٍ، من ماركة آرت مارك "تكنو"، رقم المرجع: 6106',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/127.webp',
    ],
    gallery: [
      '/img-webp/School-tools/127.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-109',
    name: 'قلم تحديد مربع مزدوج الرأس بلون بنفسجي فاتح من آرت مارك "تكنو" رقم المرجع: 6105',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/128.webp',
    ],
    gallery: [
      '/img-webp/School-tools/128.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-110',
    name: 'قلم تحديد مزدوج الرأس، لون بنفسجي فاتح، مربع الشكل، من ماركة آرت مارك "تكنو"، رقم المرجع: 6103',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/129.webp',
    ],
    gallery: [
      '/img-webp/School-tools/129.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-111',
    name: 'قلم تحديد مزدوج الرأس، بنفسجي داكن مربع، علامة فنية "تكنو"، رقم المرجع: 6102',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/130.webp',
    ],
    gallery: [
      '/img-webp/School-tools/130.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-112',
    name: 'قلم تلوين باستيل مزدوج الرأس، مربع خوخي، من آرت مارك "تكنو"، رقم المرجع: 6054',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/131.webp',
    ],
    gallery: [
      '/img-webp/School-tools/131.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-113',
    name: 'قلم تحديد مزدوج الرأس، مربع بنقشة زهرة الغرنوقي، من ماركة آرت مارك "تكنو"، رقم المرجع: 6045',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/132.webp',
    ],
    gallery: [
      '/img-webp/School-tools/132.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-114',
    name: 'قلم تحديد مزدوج الرأس مربع الشكل بلون الخوخ من ماركة آرت مارك "تكنو" رقم المرجع: 6048',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/133.webp',
    ],
    gallery: [
      '/img-webp/School-tools/133.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-115',
    name: 'قلم تحديد مربع مزدوج الرأس من آرت مارك "تكنو" بلون البشرة، رقم المرجع: 6142',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/134.webp',
    ],
    gallery: [
      '/img-webp/School-tools/134.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-116',
    name: 'قلم تحديد أحمر خدود مربع مزدوج الرأس من آرت مارك "تكنو" رقم المرجع: 6139',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/135.webp',
    ],
    gallery: [
      '/img-webp/School-tools/135.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-117',
    name: 'قلم تحديد فلورسنت مزدوج الرأس، مربع وردي، من ماركة آرت مارك "تكنو"، رقم المرجع: 6132',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/136.webp',
    ],
    gallery: [
      '/img-webp/School-tools/136.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-118',
    name: 'قلم تحديد مزدوج الرأس، مربع وردي فاتح، من ماركة آرت مارك "تكنو"، رقم المرجع: 6167',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/137.webp',
    ],
    gallery: [
      '/img-webp/School-tools/137.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-119',
    name: 'قلم تحديد مزدوج الرأس، وردي فاتح، مربع الشكل، من ماركة آرت مارك "تكنو"، رقم المرجع: 6166',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/138.webp',
    ],
    gallery: [
      '/img-webp/School-tools/138.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-120',
    name: 'قلم تحديد مزدوج الرأس، لون وردي فاتح، مربع الشكل، من ماركة آرت مارك "تكنو"، رقم المرجع: 6141',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/139.webp',
    ],
    gallery: [
      '/img-webp/School-tools/139.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-121',
    name: 'قلم تحديد مزدوج الرأس متوسط ​​الحجم وردي مربع الشكل من ماركة آرت مارك "تكنو" رقم المرجع: 6140',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/140.webp',
    ],
    gallery: [
      '/img-webp/School-tools/140.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-122',
    name: 'قلم تحديد مزدوج الرأس، مربع الشكل، لون وردي كرزي، من ماركة آرت مارك "تكنو"، رقم المرجع: 6138',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/141.webp',
    ],
    gallery: [
      '/img-webp/School-tools/141.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-123',
    name: 'قلم تحديد مزدوج الرأس، لون وردي فاتح، مربع الشكل، من ماركة آرت مارك "تكنو"، رقم المرجع: 6136',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/142.webp',
    ],
    gallery: [
      '/img-webp/School-tools/142.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-124',
    name: 'قلم تحديد فلورسنت مزدوج الرأس، مربع وردي، من ماركة آرت مارك "تكنو"، رقم المرجع: 6133',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/143.webp',
    ],
    gallery: [
      '/img-webp/School-tools/143.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-125',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي، 5، آرت مارك "تكنو"، رقم المرجع: 6193',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/144.webp',
    ],
    gallery: [
      '/img-webp/School-tools/144.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-126',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي، 6 قطع، من ماركة آرت مارك "تكنو"، رقم المرجع: 6194',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/145.webp',
    ],
    gallery: [
      '/img-webp/School-tools/145.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-127',
    name: 'قلم تحديد مزدوج الرأس، مربع أصفر، من ماركة آرت مارك "تكنو"، رقم المرجع: 6065',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/146.webp',
    ],
    gallery: [
      '/img-webp/School-tools/146.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-128',
    name: 'قلم تحديد مزدوج الرأس، أصفر جديد، مربع، من ماركة آرت مارك "تكنو"، رقم المرجع: 6069',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/147.webp',
    ],
    gallery: [
      '/img-webp/School-tools/147.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-129',
    name: 'قلم تحديد مزدوج الرأس، أصفر ليموني، مربع، من ماركة آرت مارك "تكنو"، رقم المرجع: 6062',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/148.webp',
    ],
    gallery: [
      '/img-webp/School-tools/148.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-130',
    name: 'قلم تحديد مربع أصفر باستيل مزدوج الرأس من آرت مارك "تكنو" رقم المرجع: 6064',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/149.webp',
    ],
    gallery: [
      '/img-webp/School-tools/149.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-131',
    name: 'قلم تحديد مربع مزدوج الرأس بلون أصفر البطيخ من آرت مارك "تكنو" رقم المرجع: 6060',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/150.webp',
    ],
    gallery: [
      '/img-webp/School-tools/150.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-132',
    name: 'قلم تحديد مزدوج الرأس، مربع أصفر، علامة فنية "تكنو"، رقم المرجع: 6061',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/151.webp',
    ],
    gallery: [
      '/img-webp/School-tools/151.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-133',
    name: 'قلم تحديد مزدوج الرأس، مربع أصفر داكن، من ماركة آرت مارك "تكنو"، رقم المرجع: 6058',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/152.webp',
    ],
    gallery: [
      '/img-webp/School-tools/152.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-134',
    name: 'قلم تحديد مزدوج الرأس، مربع أصفر داكن، من ماركة آرت مارك "تكنو"، رقم المرجع: 6059',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/153.webp',
    ],
    gallery: [
      '/img-webp/School-tools/153.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-135',
    name: 'علامة مزدوجة الرأس مربعة قرمزية من آرت مارك "تكنو" رقم المرجع: 6043',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/154.webp',
    ],
    gallery: [
      '/img-webp/School-tools/154.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-136',
    name: 'قلم تحديد مزدوج الرأس مربع الشكل باللون القرمزي من ماركة آرت مارك "تكنو" رقم المرجع: 6044',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/155.webp',
    ],
    gallery: [
      '/img-webp/School-tools/155.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-137',
    name: 'علامة مزدوجة الرأس من نوع كوزموس سكوير آرت مارك "تكنو" رقم المرجع: 6037',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/156.webp',
    ],
    gallery: [
      '/img-webp/School-tools/156.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-138',
    name: 'قلم تحديد مزدوج الرأس، مربع كارمين، علامة فنية "تكنو"، رقم المرجع: 6041',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/157.webp',
    ],
    gallery: [
      '/img-webp/School-tools/157.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-139',
    name: 'علامة مزدوجة الرأس، مربعة الشكل، لونها قرمزي فرنسي، تحمل علامة "تكنو" الفنية، رقم المرجع: 6050',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/158.webp',
    ],
    gallery: [
      '/img-webp/School-tools/158.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-140',
    name: 'قلم تحديد فلورسنت مزدوج الرأس، لون أحمر مرجاني، مربع، من ماركة آرت مارك "تكنو"، رقم المرجع: 6128',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/159.webp',
    ],
    gallery: [
      '/img-webp/School-tools/159.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-141',
    name: 'قلم تحديد مزدوج الرأس، مربع الشكل، لون أحمر مرجاني، من ماركة آرت مارك "تكنو"، رقم المرجع: 6042',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/160.webp',
    ],
    gallery: [
      '/img-webp/School-tools/160.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-142',
    name: 'قلم تحديد مزدوج الرأس وردي اللون، مربع أحمر، من ماركة آرت مارك "تكنو"، رقم المرجع: 6033',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/161.webp',
    ],
    gallery: [
      '/img-webp/School-tools/161.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-143',
    name: 'قلم تحديد مزدوج الرأس، لون أحمر زاهي، من آرت مارك "تكنو"، رقم المرجع: 6034',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/162.webp',
    ],
    gallery: [
      '/img-webp/School-tools/162.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-144',
    name: 'علامة مزدوجة الرأس مربعة الشكل بلون أحمر خمري من آرت مارك "تكنو" رقم المرجع: 6031',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/163.webp',
    ],
    gallery: [
      '/img-webp/School-tools/163.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-145',
    name: 'علامة مزدوجة الرأس، مربعة حمراء قديمة، علامة فنية "تكنو"، رقم المرجع: 6032',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/164.webp',
    ],
    gallery: [
      '/img-webp/School-tools/164.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-146',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي، 9، آرت مارك "تكنو"، رقم المرجع: 6197',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/165.webp',
    ],
    gallery: [
      '/img-webp/School-tools/165.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-147',
    name: 'قلم تحديد مزدوج الرأس، مربع أسود، من ماركة آرت مارك "تكنو"، رقم المرجع: 6127',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/166.webp',
    ],
    gallery: [
      '/img-webp/School-tools/166.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-148',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي 7، من ماركة آرت مارك "تكنو"، رقم المرجع: 6195',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/167.webp',
    ],
    gallery: [
      '/img-webp/School-tools/167.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-149',
    name: 'قلم تحديد مزدوج الرأس رمادي دافئ 8 من آرت مارك "تكنو" رقم المرجع: 6196',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/168.webp',
    ],
    gallery: [
      '/img-webp/School-tools/168.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-150',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي، 5، آرت مارك "تكنو"، رقم المرجع: 6193',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/169.webp',
    ],
    gallery: [
      '/img-webp/School-tools/169.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-151',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي، 6 قطع، من ماركة آرت مارك "تكنو"، رقم المرجع: 6194',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/170.webp',
    ],
    gallery: [
      '/img-webp/School-tools/170.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-152',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي، 3، آرت مارك "تكنو"، رقم المرجع: 6191',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/171.webp',
    ],
    gallery: [
      '/img-webp/School-tools/171.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-153',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ جليدي، 4، آرت مارك "تكنو"، رقم المرجع: 6192',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/172.webp',
    ],
    gallery: [
      '/img-webp/School-tools/172.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-154',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي، رقم المرجع: 6189',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/173.webp',
    ],
    gallery: [
      '/img-webp/School-tools/173.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-155',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي، 2، آرت مارك "تكنو"، رقم المرجع: 6190',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/174.webp',
    ],
    gallery: [
      '/img-webp/School-tools/174.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-156',
    name: 'قلم تحديد مزدوج الرأس، أخضر ثلجي رمادي، 9، من ماركة آرت مارك "تكنو"، رقم المرجع: 6187',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/175.webp',
    ],
    gallery: [
      '/img-webp/School-tools/175.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-157',
    name: 'قلم تحديد مزدوج الرأس، رمادي دافئ ثلجي، 0.5، من ماركة آرت مارك "تكنو"، رقم المرجع: 6188',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/176.webp',
    ],
    gallery: [
      '/img-webp/School-tools/176.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-158',
    name: 'قلم تحديد مزدوج الرأس، أخضر ثلجي رمادي، 5، من ماركة آرت مارك "تكنو"، رقم المرجع: 6185',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/177.webp',
    ],
    gallery: [
      '/img-webp/School-tools/177.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-159',
    name: 'قلم تحديد مزدوج الرأس، أخضر ثلجي رمادي 7، من ماركة آرت مارك "تكنو"، رقم المرجع: 6186',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/178.webp',
    ],
    gallery: [
      '/img-webp/School-tools/178.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-160',
    name: 'قلم تحديد مزدوج الرأس، أخضر ثلجي رمادي، رقم المرجع: 6183',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/179.webp',
    ],
    gallery: [
      '/img-webp/School-tools/179.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-161',
    name: 'قلم تحديد مزدوج الرأس، أخضر ثلجي رمادي، 3 قطع، من ماركة آرت مارك "تكنو"، رقم المرجع: 6184',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/180.webp',
    ],
    gallery: [
      '/img-webp/School-tools/180.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-162',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 8، من ماركة آرت مارك "تكنو"، رقم المرجع: 6181',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/181.webp',
    ],
    gallery: [
      '/img-webp/School-tools/181.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-163',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 9، من ماركة آرت مارك "تكنو"، رقم المرجع: 6182',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/182.webp',
    ],
    gallery: [
      '/img-webp/School-tools/182.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-164',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 6 قطع، من ماركة آرت مارك "تكنو"، رقم المرجع: 6179',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/183.webp',
    ],
    gallery: [
      '/img-webp/School-tools/183.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-165',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 7، من ماركة آرت مارك "تكنو"، رقم المرجع: 6180',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/184.webp',
    ],
    gallery: [
      '/img-webp/School-tools/184.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-166',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 4، من ماركة آرت مارك "تكنو"، رقم المرجع: 6177',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/185.webp',
    ],
    gallery: [
      '/img-webp/School-tools/185.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-167',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 5، من ماركة آرت مارك "تكنو"، رقم المرجع: 6178',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/186.webp',
    ],
    gallery: [
      '/img-webp/School-tools/186.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-168',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 2، من ماركة آرت مارك "تكنو"، رقم المرجع: 6175',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/187.webp',
    ],
    gallery: [
      '/img-webp/School-tools/187.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-169',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 3، من ماركة آرت مارك "تكنو"، رقم المرجع: 6176',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/188.webp',
    ],
    gallery: [
      '/img-webp/School-tools/188.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-170',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 3، من ماركة آرت مارك "تكنو"، رقم المرجع: 6176',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/189.webp',
    ],
    gallery: [
      '/img-webp/School-tools/189.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-171',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، 0.5، من ماركة آرت مارك "تكنو"، رقم المرجع: 6173',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/190.webp',
    ],
    gallery: [
      '/img-webp/School-tools/190.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-172',
    name: 'قلم تحديد مزدوج الرأس، رمادي بارد، رقم المرجع: 6174',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/191.webp',
    ],
    gallery: [
      '/img-webp/School-tools/191.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-173',
    name: 'قلم تحديد مزدوج الرأس أزرق رمادي 7 آرت مارك "تكنو" رقم المرجع: 6171',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/192.webp',
    ],
    gallery: [
      '/img-webp/School-tools/192.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-174',
    name: 'قلم تحديد مزدوج الرأس، أزرق ثلجي رمادي، 9، من ماركة آرت مارك "تكنو"، رقم المرجع: 6172',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/193.webp',
    ],
    gallery: [
      '/img-webp/School-tools/193.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-175',
    name: 'قلم تحديد مزدوج الرأس أزرق رمادي 3 آرت مارك "تكنو" رقم المرجع: 6169',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/194.webp',
    ],
    gallery: [
      '/img-webp/School-tools/194.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-176',
    name: 'قلم تحديد مزدوج الرأس أزرق رمادي 5 آرت مارك "تكنو" رقم المرجع: 6170',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/195.webp',
    ],
    gallery: [
      '/img-webp/School-tools/195.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-177',
    name: 'قلم تحديد مزدوج الرأس عديم اللون من بلندر سكوير آرت مارك "تكنو" رقم المرجع: 6030',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/196.webp',
    ],
    gallery: [
      '/img-webp/School-tools/196.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-178',
    name: 'قلم تحديد مزدوج الرأس أزرق رمادي 1 ARTMARK "TECHNO" رقم المرجع: 6168',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/197.webp',
    ],
    gallery: [
      '/img-webp/School-tools/197.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-179',
    name: 'قلم تحديد مربع مزدوج الرأس أبيض حليبي من آرت مارك "تكنو" رقم المرجع: 6135',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/198.webp',
    ],
    gallery: [
      '/img-webp/School-tools/198.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-180',
    name: 'قلم تحديد مزدوج الرأس، مربع الشكل، أبيض لؤلؤي، من ماركة آرت مارك "تكنو"، رقم المرجع: 6126',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/199.webp',
    ],
    gallery: [
      '/img-webp/School-tools/199.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-181',
    name: 'قلم تحديد مزدوج الرأس، أبيض مربع، من ماركة آرت مارك "تكنو"، رقم المرجع: 6134',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/200.webp',
    ],
    gallery: [
      '/img-webp/School-tools/200.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-182',
    name: 'علبة أقلام تحديد آرت مارك ذات الرأسين، تحتوي على 24 لونًا "تكنو" رقم المرجع: 7707',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 1900,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/201.webp',
    ],
    gallery: [
      '/img-webp/School-tools/201.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
    { label: 'العدد', value: '24' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-183',
    name: 'علبة أقلام تحديد آرت مارك ذات الرأسين، تحتوي على 12 لونًا "تكنو" رقم المرجع: 7706',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 950,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/202.webp',
    ],
    gallery: [
      '/img-webp/School-tools/202.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
      { label: 'العدد', value: '12' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-184',
    name: 'علبة أقلام تحديد آرت مارك ذات الرأسين، تحتوي على 48 لونًا "تكنو" رقم المرجع: 7548',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 3800,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/203.webp',
    ],
    gallery: [
      '/img-webp/School-tools/203.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
      { label: 'العدد', value: '48' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-185',
    name: 'علبة أقلام تحديد آرت مارك ذات الرأسين، تحتوي على 36 لونًا "تكنو" رقم المرجع: 7708',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 2850,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/204.webp',
    ],
    gallery: [
      '/img-webp/School-tools/204.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
      { label: 'العدد', value: '36' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-186',
    name: 'علبة أقلام تحديد آرت مارك ذات الرأسين، تحتوي على 80 لونًا "تكنو" رقم المرجع: 7549',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 6300,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/205.webp',
    ],
    gallery: [
      '/img-webp/School-tools/205.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
      { label: 'العدد', value: '80' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-187',
    name: 'علبة أقلام تحديد آرت مارك ذات الرأسين، تحتوي على 60 لونًا "تكنو" رقم المرجع: 7709',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 4750,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/206.webp',
    ],
    gallery: [
      '/img-webp/School-tools/206.webp',
    ],
    description: 'تتميز أقلام TECHNO بقاعدة كحولية تسمح بمزج الألوان وتداخلها بسلاسة، مما يُسهّل إنشاء جميع أنواع التلوين والرسم والتصميم. بفضل رأسها المزدوج (أحدهما رفيع والآخر عريض)، تُمكّنك من العمل على التفاصيل الدقيقة والمساحات اللونية المسطحة. تحذير: يُستخدم في أماكن جيدة التهوية. يُحفظ بعيدًا عن متناول الأطفال؛ فالأجزاء الصغيرة تُشكّل خطر الاختناق. أغلق الأغطية بإحكام بعد كل استخدام.',
    specs: [
      { label: 'العدد', value: '60' },
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-188',
    name: 'قلم سبورة بيضاء قابل لإعادة التعبئة برأس مشطوف "TECHNO"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'tecnowa',
    price: 95,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/207.webp',
    ],
    gallery: [
      '/img-webp/School-tools/207.webp',
    ],
    description: 'رأس أكريليك مشطوف بسمك 4 مم، يُسلَّم مع خرطوشة حبر واحدة، ويبلغ طول الكتابة حتى 250 مترًا. يمكن استخدام ما يصل إلى 8 خراطيش حبر مع قلم ماركر واحد.',
    specs: [
    ],
    createdAt: '2024-08-20',
        variants: [
      {
        id: 'st-188-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 100,
        stock: 50,
        sku: '4990',
        images: [
      '/img-webp/School-tools/207.1.webp',
        ],
      },
      {
        id: 'st-188-light-blue',
        name: 'أزرق فاتح',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 100,
        stock: 50,
        sku: '8504',
        images: [
      '/img-webp/School-tools/207.2.webp',
        ],
      },
      {
        id: 'st-188-lyellow',
        name:  'أصفر',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 100,
        stock: 50,
        sku: '8502',
        images: [
      '/img-webp/School-tools/207.3.webp',
        ],
      },
      {
        id: 'st-188-brown',
        name: 'بني',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 0,
        stock: 50,
        sku: '8506',
        images: [
      '/img-webp/School-tools/207.4.webp',
        ],
      },
      {
        id: 'st-188-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4991',
        images: [
      '/img-webp/School-tools/207.8.webp',
        ],
      },
      {
        id: 'st-188-orange',
        name: 'برتقالي',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 0,
        stock: 50,
        sku: '8501',
        images: [
      '/img-webp/School-tools/207.9.webp',
        ],
      },
      {
        id: 'st-188-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 0,
        stock: 50,
        sku: '8507',
        images: [
      '/img-webp/School-tools/207.5.webp',
        ],
      },
      {
        id: 'st-188-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4993',
        images: [
      '/img-webp/School-tools/207.6.webp',
        ],
      },
      {
        id: 'st-188-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4992',
        images: [
      '/img-webp/School-tools/207.10.webp',
        ],
      },
      {
        id: 'st-188-light-green',
        name: 'أخضر فاتح',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4992',
        images: [
      '/img-webp/School-tools/207.11.webp',
        ],
      },
      {
        id: 'st-188-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 95.00,
       // oldPrice: 0,
        stock: 50,
        sku: '4992',
        images: [
      '/img-webp/School-tools/207.7.webp',
        ],
      },
    ],
  },

{
    id: 'st-189',
    name: 'قلم ماركر دائم برأس مشطوف، أزرق، موديل 400 من "PILOT".',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'other',
    price: 150,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/208.webp',
    ],
    gallery: [
      '/img-webp/School-tools/208.webp',
    ],
    description: 'يُعد قلم Pilot Permanent Marker 400 الخيار المثالي للكتابة الدائمة على مختلف الأسطح مثل الخشب والمعادن والبلاستيك وغيرها. يتميز بحبر عالي الجودة مقاوم للماء والضوء والحرارة والبرودة، كما يحافظ على أدائه حتى عند تركه دون غطاء لمدة تصل إلى 24 ساعة. يأتي بتصميم عصري وأنيق يجمع بين المتانة والموثوقية، مما يجعله مناسبًا للاستخدام اليومي في الأعمال الاحترافية والمكتبية والصناعية.',
    specs: [
      { label: 'عرض خط الكتابة', value: '4.0 مم' },
      { label: 'حجم رأس القلم', value: '4.5 مم' },
    ],
    createdAt: '2024-08-20',
        variants: [
      {
        id: 'st-189-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 150.00,
       // oldPrice: 100,
        stock: 50,
        sku: 'SCA-400-L',
        images: [
      '/img-webp/School-tools/208.webp',
        ],
      },
      {
        id: 'st-189-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 150.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'SCA-400-B',
        images: [
      '/img-webp/School-tools/208.1.webp',
        ],
      },
      {
        id: 'st-189-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 150.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'SCA-400-R',
        images: [
      '/img-webp/School-tools/208.2.webp',
        ],
      },
      {
        id: 'st-189-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 150.00,
       // oldPrice: 0,
        stock: 50,
        sku: 'SCA-400-G',
        images: [
      '/img-webp/School-tools/208.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-190',
    name: 'أقلام تلوين آرت كولور، علبة معدنية من 96 قطعة "تكنو" رقم المرجع: 6024',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 3850,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/209.webp',
    ],
    gallery: [
      '/img-webp/School-tools/209.webp',
    ],
    description: 'يضمن تصميم كولور آرت عالي الجودة أقصى مقاومة للكسر، وثباتًا ممتازًا للألوان، ومقاومة للماء، وألوانًا زاهية. تتكيف رؤوسها مع تقنيات الرسم المختلفة. كما يمكن استخدام هذه الأقلام على أي نوع من الأسطح الصلبة تقريبًا.',
    specs: [
      { label: 'العدد', value: '96' },
    ],
    createdAt: '2024-08-20',
  },  

{
    id: 'st-191',
    name: 'أقلام تلوين أرت كولور، علبة معدنية من 24 قطعة "تكنو" رقم المرجع: 5300',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 1150,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/210.webp',
    ],
    gallery: [
      '/img-webp/School-tools/210.webp',
    ],
    description: 'يضمن تصميم كولور آرت عالي الجودة أقصى مقاومة للكسر، وثباتًا ممتازًا للألوان، ومقاومة للماء، وألوانًا زاهية. تتكيف رؤوسها مع تقنيات الرسم المختلفة. كما يمكن استخدام هذه الأقلام على أي نوع من الأسطح الصلبة تقريبًا.',
    specs: [
      { label: 'العدد', value: '24' },
    ],
    createdAt: '2024-08-20',
  }, 

{
    id: 'st-192',
    name: 'أقلام تلوين أرت كولور، علبة معدنية من 36 قطعة "تكنو" رقم المرجع: 5301',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 1450,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/211.webp',
    ],
    gallery: [
      '/img-webp/School-tools/211.webp',
    ],
    description: 'يضمن تصميم كولور آرت عالي الجودة أقصى مقاومة للكسر، وثباتًا ممتازًا للألوان، ومقاومة للماء، وألوانًا زاهية. تتكيف رؤوسها مع تقنيات الرسم المختلفة. كما يمكن استخدام هذه الأقلام على أي نوع من الأسطح الصلبة تقريبًا.',
    specs: [
      { label: 'العدد', value: '36' },
    ],
    createdAt: '2024-08-20',
  }, 

{
    id: 'st-193',
    name: 'أقلام تلوين آرت كولور، علبة معدنية من 48 قطعة "تكنو" رقم المرجع: 6023',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'other',
    price: 2450,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/212.webp',
    ],
    gallery: [
      '/img-webp/School-tools/212.webp',
    ],
    description: 'يضمن تصميم كولور آرت عالي الجودة أقصى مقاومة للكسر، وثباتًا ممتازًا للألوان، ومقاومة للماء، وألوانًا زاهية. تتكيف رؤوسها مع تقنيات الرسم المختلفة. كما يمكن استخدام هذه الأقلام على أي نوع من الأسطح الصلبة تقريبًا.',
    specs: [
      { label: 'العدد', value: '48' },
    ],
    createdAt: '2024-08-20',
  }, 

{
    id: 'st-194',
    name: 'أقلام تلوين أرت كولور، علبة معدنية من 72 قطعة "تكنو" رقم المرجع: 5302',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 2650,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/213.webp',
    ],
    gallery: [
      '/img-webp/School-tools/213.webp',
    ],
    description: 'يضمن تصميم كولور آرت عالي الجودة أقصى مقاومة للكسر، وثباتًا ممتازًا للألوان، ومقاومة للماء، وألوانًا زاهية. تتكيف رؤوسها مع تقنيات الرسم المختلفة. كما يمكن استخدام هذه الأقلام على أي نوع من الأسطح الصلبة تقريبًا.',
    specs: [
      { label: 'العدد', value: '72' },
    ],
    createdAt: '2024-08-20',
  }, 

{
    id: 'st-195',
    name: 'أقلام تلوين آرت كولور، علبة معدنية "تكنو" مكونة من 120 قطعة، رقم المرجع: 6025',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-coloring-pens',
    brand: 'tecnowa',
    price: 5200,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/214.webp',
    ],
    gallery: [
      '/img-webp/School-tools/214.webp',
    ],
    description: 'يضمن تصميم كولور آرت عالي الجودة أقصى مقاومة للكسر، وثباتًا ممتازًا للألوان، ومقاومة للماء، وألوانًا زاهية. تتكيف رؤوسها مع تقنيات الرسم المختلفة. كما يمكن استخدام هذه الأقلام على أي نوع من الأسطح الصلبة تقريبًا.',
    specs: [
      { label: 'العدد', value: '120' },
    ],
    createdAt: '2024-08-20',
  }, 

{
    id: 'st-196',
    name: 'كراس ملاحظات مُدبّس بحجم A4، 96 صفحة، 90 غرام/متر مربع، "كونكرر" رقم المرجع: 100105479 / 120697',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'other',
    price: 850,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/215.webp',
    ],
    gallery: [
      '/img-webp/School-tools/215.webp',
      '/img-webp/School-tools/215.1.webp',
      '/img-webp/School-tools/215.2.webp',
      '/img-webp/School-tools/215.3.webp',
      '/img-webp/School-tools/215.4.webp',
      '/img-webp/School-tools/215.5.webp',
      '/img-webp/School-tools/215.6.webp',
      '/img-webp/School-tools/215.7.webp',
      '/img-webp/School-tools/215.8.webp',    ],
    description: 'مجموعة من الدفاتر المدبسة ذات الغلاف الشفاف المصنوع من البولي بروبيلين، صلبة، فائقة المقاومة، ملونة، مطلوبة من قبل المدارس والمدارس الخاصة وغيرها الكثير.',
    specs: [
    ],
    createdAt: '2024-08-20',
        variants: [
      {
        id: 'st-196-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 850,
       // oldPrice: 100,
        stock: 50,
        sku: '100105479 / 120697',
        images: [
      '/img-webp/School-tools/215.webp',
        ],
      },
      {
        id: 'st-196-gray',
        name: 'رمادي',
        optionLabel: 'اللون',
        price: 850,
       // oldPrice: 100,
        stock: 50,
        sku: '100105479 / 120697',
        images: [
      '/img-webp/School-tools/215.1.webp',
        ],
      },
      {
        id: 'st-196-orange',
        name:  'برتقالي',
        optionLabel: 'اللون',
        price: 850,
       // oldPrice: 100,
        stock: 50,
        sku: '100105479 / 120697',
        images: [
      '/img-webp/School-tools/215.2.webp',
        ],
      },
      {
        id: 'st-196-yellow',
        name: 'أصفر',
        optionLabel: 'اللون',
        price: 850,
       // oldPrice: 0,
        stock: 50,
        sku: '100105479 / 120697',
        images: [
      '/img-webp/School-tools/215.3.webp',
        ],
      },
      {
        id: 'st-196-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 850,
       // oldPrice: 0,
        stock: 50,
        sku: '100105479 / 120697',
        images: [
      '/img-webp/School-tools/215.4.webp',
        ],
      },
      {
        id: 'st-196-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 850,
       // oldPrice: 0,
        stock: 50,
        sku: '100105479 / 120697',
        images: [
      '/img-webp/School-tools/215.5.webp',
        ],
      },
      {
        id: 'st-196-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 850,
       // oldPrice: 0,
        stock: 50,
        sku: '100105479 / 120697',
        images: [
      '/img-webp/School-tools/215.6.webp',
        ],
      },
      {
        id: 'st-196-white',
        name: 'أبيض',
        optionLabel: 'اللون',
        price: 850,
       // oldPrice: 0,
        stock: 50,
        sku: '100105479 / 120697',
        images: [
      '/img-webp/School-tools/215.7.webp',
        ],
      },
      {
        id: 'st-196-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 850,
       // oldPrice: 0,
        stock: 50,
        sku: '100105479 / 120697',
        images: [
      '/img-webp/School-tools/215.8.webp',
        ],
      },
    ],
  },

{
    id: 'st-197',
    name: 'كراس ملاحظات مُدبّس، 17 سم × 22 سم، 96 صفحة، 90 غ/م²،  "الفاتح"، رقم المرجع: 100105477 / 020397',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'other',
    price: 480,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/216.webp',
    ],
    gallery: [
      '/img-webp/School-tools/216.webp',
      '/img-webp/School-tools/216.1.webp',
      '/img-webp/School-tools/216.2.webp',
      '/img-webp/School-tools/216.4.webp',
      '/img-webp/School-tools/216.5.webp',
      '/img-webp/School-tools/216.6.webp',
      '/img-webp/School-tools/216.7.webp',
     ],
    description: 'مجموعة من الدفاتر المدبسة ذات الغلاف الشفاف المصنوع من البولي بروبيلين، صلبة، فائقة المقاومة، ملونة، مطلوبة من قبل المدارس والمدارس الخاصة وغيرها الكثير.',
    specs: [
    ],
    createdAt: '2024-08-20',
        variants: [
      {
        id: 'st-196-gray',
        name: 'رمادي',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 100,
        stock: 50,
        sku: ' 100105477 / 020397',
        images: [
      '/img-webp/School-tools/216.1.webp',
        ],
      },
      {
        id: 'st-196-orange',
        name:  'برتقالي',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 100,
        stock: 50,
        sku: ' 100105477 / 020397',
        images: [
      '/img-webp/School-tools/216.webp',
        ],
      },
      {
        id: 'st-196-yellow',
        name: 'أصفر',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 0,
        stock: 50,
        sku: ' 100105477 / 020397',
        images: [
      '/img-webp/School-tools/216.2.webp',
        ],
      },
      {
        id: 'st-196-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 0,
        stock: 50,
        sku: ' 100105477 / 020397',
        images: [
      '/img-webp/School-tools/216.4.webp',
        ],
      },
      {
        id: 'st-196-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 0,
        stock: 50,
        sku: ' 100105477 / 020397',
        images: [
      '/img-webp/School-tools/216.6.webp',
        ],
      },
      {
        id: 'st-196-white',
        name: 'أبيض',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 0,
        stock: 50,
        sku: ' 100105477 / 020397',
        images: [
      '/img-webp/School-tools/216.5.webp',
        ],
      },
      {
        id: 'st-196-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 0,
        stock: 50,
        sku: ' 100105477 / 020397',
        images: [
      '/img-webp/School-tools/216.7.webp',
        ],
      },
    ],
  },

{
    id: 'st-197',
    name: 'أوراق مزدوجة 96 صفحة',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 120,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/217.webp',
    ],
    gallery: [
      '/img-webp/School-tools/217.webp',
    ],
    description: 'ورق ذو جودة عالية للمساعدة في الواجبات المنزلية والامتحانات.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-198',
    name: 'أوراق مزدوجة 96 صفحة ، 70 غرام، 17 سم × 22 سم، "مُعَدَّة"، رقم المرجع: 9062',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 120,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/218.webp',
    ],
    gallery: [
      '/img-webp/School-tools/218.webp',
    ],
    description: 'ورق ذو جودة عالية للمساعدة في الواجبات المنزلية والامتحانات.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-199',
    name: 'أوراق مزدوجة 96 صفحة ، 70 غرام، مقاس A4، رقم المرجع: 9314',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 210,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/219.webp',
    ],
    gallery: [
      '/img-webp/School-tools/219.webp',
    ],
    description: 'ورق ذو جودة عالية للمساعدة في الواجبات المنزلية والامتحانات.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-200',
    name: 'كراس أعمال تطبيقية 96 صفحة بحجم A4 بعنوان "الفاتح" (رقم المرجع: 000247)',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'other',
    price: 210,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/220.webp',
    ],
    gallery: [
      '/img-webp/School-tools/220.webp',
    ],
    description:'مجموعة من الدفاتر المدبسة ذات الغلاف الشفاف المصنوع من البولي بروبيلين، صلبة، فائقة المقاومة، ملونة، مطلوبة من قبل المدارس والمدارس الخاصة وغيرها الكثير.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-201',
    name: 'كراس ملاحظات مقاس 17 × 22 سم، ورق بوزن 70 غ/م²، يحتوي على 96 صفحة، مسطر، رقم المرجع: 9039.',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 145,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/221.webp',
    ],
    gallery: [
      '/img-webp/School-tools/221.webp',
    ],
    description:'مجموعة من الدفاتر المدبسة ذات الغلاف الشفاف المصنوع من البولي بروبيلين، صلبة، فائقة المقاومة، ملونة، مطلوبة من قبل المدارس والمدارس الخاصة وغيرها الكثير.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-202',
    name: 'كراس أعمال تطبيقية، مقاس A4، مسطر، 70 غرام، 96 صفحة، "MAPED" رقم المرجع: 9281',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 300,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/222.webp',
    ],
    gallery: [
      '/img-webp/School-tools/222.webp',
    ],
    description: 'ورق ذو جودة عالية مناسب لمختلف المراحل الدراسية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-203',
    name: 'كراس أعمال تطبيقية، 17 سم × 22 سم، مسطر، 70 غرام، 96 صفحة، "MAPED"، رقم المرجع: 9280',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 145,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/223.webp',
    ],
    gallery: [
      '/img-webp/School-tools/223.webp',
    ],
    description: 'ورق ذو جودة عالية مناسب لمختلف المراحل الدراسية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-204',
    name: 'كراس أعمال تطبيقية، 17 سم × 22 سم، مسطر بخطوط SEYES، 70 غرام، "MAPED"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 90,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/224.webp',
    ],
    gallery: [
      '/img-webp/School-tools/224.webp',
    ],
    description: 'ورق ذو جودة عالية مناسب لمختلف المراحل الدراسية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-205',
    name: 'كراس أعمال تطبيقية، 17 سم × 22 سم، مسطر، 70 غرام، 64 صفحة، "MAPED"، رقم المرجع: 9052',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 90,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/225.webp',
    ],
    gallery: [
      '/img-webp/School-tools/225.webp',
      '/img-webp/School-tools/225.1.webp',
      '/img-webp/School-tools/225.2.webp',
    ],
    description: 'ورق ذو جودة عالية مناسب لمختلف المراحل الدراسية.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-205-gray',
        name: 'رمادي',
        optionLabel: 'اللون',
        price: 90,
       // oldPrice: 100,
        stock: 50,
        sku: '9052',
        images: [
      '/img-webp/School-tools/225.1.webp',
        ],
      },
      {
        id: 'st-205-green',
        name:  'أخضر',
        optionLabel: 'اللون',
        price: 90,
       // oldPrice: 100,
        stock: 50,
        sku: '9052',
        images: [
      '/img-webp/School-tools/225.2.webp',
        ],
      },
      {
        id: 'st-205-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 90,
       // oldPrice: 0,
        stock: 50,
        sku: '9052',
        images: [
      '/img-webp/School-tools/225.webp',
        ],
      },
    ],
  },

{
    id: 'st-207',
    name: 'كراس مقاس 17 سم × 22 سم عيون 70 جم "MAPED"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 55,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/227.webp',
    ],
    gallery: [
      '/img-webp/School-tools/227.webp',
    ],
    description: 'ورق ذو جودة عالية مناسب لمختلف المراحل الدراسية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-208',
    name: 'كراس  التحدي، 96 صفحة، 17 × 22 سم، مسطر، 70 غرام، "تكنو"، رقم المرجع: 9810',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'tecnowa',
    price: 65,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/228.webp',
    ],
    gallery: [
      '/img-webp/School-tools/228.webp',
      '/img-webp/School-tools/228.2.webp',
      '/img-webp/School-tools/228.3.webp',
      '/img-webp/School-tools/228.4.webp',
      '/img-webp/School-tools/228.6.webp',
      '/img-webp/School-tools/228.1.webp',
      '/img-webp/School-tools/228.5.webp',
      '/img-webp/School-tools/226.webp',
    ],
    description: 'اكتشف دفترنا المدرسي عالي الجودة، المصنوع في الجزائر، والذي يتميز بتسطير سيس الشهير الذي يُسهّل تعلم الكتابة اليدوية وإتقانها. - يحتوي هذا الدفتر على 96 صفحة من ورق أبيض ناصع بوزن 70 غ/م²، مما يوفر تجربة كتابة سلسة وممتعة. - حجمه العملي 17 × 22 سم يجعله سهل الحمل ومناسبًا تمامًا للحقيبة المدرسية. - غلافه الكرتوني المصقول يضمن حماية أفضل ومتانة مُعززة. - مثالي لطلاب المرحلتين الابتدائية والمتوسطة. - حاصل على شهادة صديق للبيئة (علامة الاتحاد الأوروبي البيئية). - منتج جزائري 100%، يجمع بين الجودة والتصميم العصري. - لون الدفتر: رمادي',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-208-gray',
        name: 'رمادي',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 100,
        stock: 50,
        sku: '9810',
        images: [
      '/img-webp/School-tools/228.webp',
        ],
      },
      {
        id: 'st-208-green',
        name:  'أخضر',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 100,
        stock: 50,
        sku: '9810',
        images: [
      '/img-webp/School-tools/228.4.webp',
        ],
      },
      {
        id: 'st-208-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9810',
        images: [
      '/img-webp/School-tools/228.6.webp',
        ],
      },
      {
        id: 'st-208-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9810',
        images: [
      '/img-webp/School-tools/228.5.webp',
        ],
      },
      {
        id: 'st-208-light-green',
        name: 'أخضر فاتح',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9810',
        images: [
      '/img-webp/School-tools/228.1.webp',
        ],
      },
      {
        id: 'st-208-orange',
        name: 'برتقالي',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9810',
        images: [
      '/img-webp/School-tools/228.3.webp',
        ],
      },
      {
        id: 'st-208-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9810',
        images: [
      '/img-webp/School-tools/228.2.webp',
        ],
      },
      {
        id: 'st-208-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 100,
        stock: 50,
        sku: '9810',
        images: [
      '/img-webp/School-tools/226.webp',
        ],
      },
    ],
  },

{
    id: 'st-209',
    name: 'كراس أعمال تطبيقية TP 96P 17 × 22 سم SEYES 70 جم "TECHNO" المرجع: 9814',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'tecnowa',
    price: 65,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/229.webp',
    ],
    gallery: [
      '/img-webp/School-tools/229.webp',
      '/img-webp/School-tools/229.1.webp',
      '/img-webp/School-tools/229.2.webp',
    ],
    description: 'اكتشف دفترنا المدرسي عالي الجودة، المصنوع في الجزائر، والذي يتميز بتسطير سيس الشهير الذي يُسهّل تعلم الكتابة اليدوية وإتقانها. - يحتوي هذا الدفتر على 96 صفحة من ورق أبيض ناصع بوزن 70 غ/م²، مما يوفر تجربة كتابة سلسة وممتعة. - حجمه العملي 17 × 22 سم يجعله سهل الحمل ومناسبًا تمامًا للحقيبة المدرسية. - غلافه الكرتوني المصقول يضمن حماية أفضل ومتانة مُعززة. - مثالي لطلاب المرحلتين الابتدائية والمتوسطة. - حاصل على شهادة صديق للبيئة (علامة الاتحاد الأوروبي البيئية). - منتج جزائري 100%، يجمع بين الجودة والتصميم العصري. - لون الدفتر: رمادي',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-209-green',
        name:  'أخضر',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 100,
        stock: 50,
        sku: '9814',
        images: [
      '/img-webp/School-tools/229.2.webp',
        ],
      },
      {
        id: 'st-209-orange',
        name: 'برتقالي',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9814',
        images: [
      '/img-webp/School-tools/229.webp',
        ],
      },
      {
        id: 'st-209-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9814',
        images: [
      '/img-webp/School-tools/229.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-210',
    name: 'كراس أعمال تطبيقية TP 96P 21 x 29.7 سم SEYES 70 جرام "TECHNO" المرجع: 9815',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'tecnowa',
    price: 135,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/230.webp',
    ],
    gallery: [
      '/img-webp/School-tools/230.webp',
      '/img-webp/School-tools/230.1.webp',
      '/img-webp/School-tools/230.2.webp',
    ],
    description: 'دفتر ملاحظات مُدبّس بغلاف قابل للإزالة (ورق مقوى مغلف)، أكثر مقاومة للتمزق، دفتر عمل عملي 96 صفحة بتنسيق A4 ووزن ورق 70 جرام.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-210-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 135,
       // oldPrice: 0,
        stock: 50,
        sku: '9815',
        images: [
      '/img-webp/School-tools/230.1.webp',
        ],
      },
      {
        id: 'st-210-light-blue',
        name:  'أزرق فاتح',
        optionLabel: 'اللون',
        price: 135,
       // oldPrice: 100,
        stock: 50,
        sku: '9815',
        images: [
      '/img-webp/School-tools/230.webp',
        ],
      },
      {
        id: 'st-210-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 135,
       // oldPrice: 0,
        stock: 50,
        sku: '9815',
        images: [
      '/img-webp/School-tools/230.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-211',
    name: 'كراس أعمال تطبيقية TP 96P 17X22 سم عيون 70 جيجا بلايز "تكنو" المرجع: 9442',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'tecnowa',
    price: 65,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/231.webp',
    ],
    gallery: [
      '/img-webp/School-tools/231.webp',
      '/img-webp/School-tools/231.1.webp',
      '/img-webp/School-tools/231.2.webp',
      '/img-webp/School-tools/231.3.webp',
      '/img-webp/School-tools/231.4.webp',
      '/img-webp/School-tools/231.5.webp',
      '/img-webp/School-tools/231.6.webp',
      '/img-webp/School-tools/231.7.webp',
    ],
    description: 'بياض وشفافية استثنائيان لراحة أفضل في الكتابة والرسم، دفتر عمل عملي مثبت بدبابيس بوزن 70 جرامًا، بتنسيق: 17 × 22 سم من 96 صفحة.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-211-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9442',
        images: [
      '/img-webp/School-tools/231.webp',
        ],
      },
      {
        id: 'st-211-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9442',
        images: [
      '/img-webp/School-tools/231.1.webp',
        ],
      },
      {
        id: 'st-211-light-blue',
        name:  'أزرق فاتح',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 100,
        stock: 50,
        sku: '9442',
        images: [
      '/img-webp/School-tools/231.6.webp',
        ],
      },
      {
        id: 'st-211-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9442',
        images: [
      '/img-webp/School-tools/231.4.webp',
        ],
      },
      {
        id: 'st-211-green1',
        name: 'أخضر 1',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9442',
        images: [
      '/img-webp/School-tools/231.5.webp',
        ],
      },
      {
        id: 'st-211-green2',
        name: 'أخضر 2',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9442',
        images: [
      '/img-webp/School-tools/231.2.webp',
        ],
      },
      {
        id: 'st-211-purpel1',
        name: 'بنفسجي 1',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9442',
        images: [
      '/img-webp/School-tools/231.7.webp',
        ],
      },
      {
        id: 'st-211-purpel2',
        name: 'بنفسجي 2',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9442',
        images: [
      '/img-webp/School-tools/231.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-212',
    name: 'كناش ملاحظات حلزوني 96 صفحة، 9 × 14 سم، 5 × 5 مم، 70 غرام، ترخيص موسيقى "تكنو" من فريندز، رقم المرجع: 9558',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'tecnowa',
    price: 100,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/232.webp',
    ],
    gallery: [
      '/img-webp/School-tools/232.webp',
      '/img-webp/School-tools/232.1.webp',
      '/img-webp/School-tools/232.2.webp',
      '/img-webp/School-tools/232.3.webp',
      '/img-webp/School-tools/232.4.webp',
      '/img-webp/School-tools/232.5.webp',
      '/img-webp/School-tools/232.6.webp',
      '/img-webp/School-tools/232.7.webp',
      '/img-webp/School-tools/232.8.webp',
      '/img-webp/School-tools/232.9.webp',
      '/img-webp/School-tools/232.10.webp',
    ],
    description: 'غلاف ورقي مقوى قابل للغسل ومغلف بطبقة لامعة، بتصميم مناسب للأطفال. دفتر ملاحظات حلزوني ذو 96 صفحة، بقياس 9 × 14 سم، مع مربعات قياس 5 × 5 مم. ورق أبيض بوزن 70 غرام/متر مربع.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-212-format1',
        name: '1',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.webp',
        ],
      },
     {
        id: 'st-212-format2',
        name: '2',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.1.webp',
        ],
      },
     {
        id: 'st-212-format3',
        name: '3',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.2.webp',
        ],
      },
     {
        id: 'st-212-format4',
        name: '4',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.3.webp',
        ],
      },
     {
        id: 'st-212-format5',
        name: '5',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.4.webp',
        ],
      },
     {
        id: 'st-212-format6',
        name: '6',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.5.webp',
        ],
      },
     {
        id: 'st-212-format7',
        name: '7',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.6.webp',
        ],
      },
     {
        id: 'st-212-format8',
        name: '8',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.7.webp',
        ],
      },
     {
        id: 'st-212-format9',
        name: '9',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.8.webp',
        ],
      },
     {
        id: 'st-212-format10',
        name: '10',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.9.webp',
        ],
      },
     {
        id: 'st-212-format11',
        name: '11',
        optionLabel: 'الشكل',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9558',
        images: [
      '/img-webp/School-tools/232.10.webp',
        ],
      },
    ],
  },

{
    id: 'st-213',
    name: 'كناش ملاحظات حلزوني مفرد بغلاف بنفسجي، 96 صفحة، 9 × 14 سم، 5 × 5 مم، 70 غرامًا "تكنو" رقم المرجع: 9557',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'tecnowa',
    price: 100,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/233.webp',
    ],
    gallery: [
      '/img-webp/School-tools/233.webp',
      '/img-webp/School-tools/233.1.webp',
      '/img-webp/School-tools/233.2.webp',
      '/img-webp/School-tools/233.3.webp',
      '/img-webp/School-tools/233.4.webp',
      '/img-webp/School-tools/233.5.webp',
      '/img-webp/School-tools/233.6.webp',
      '/img-webp/School-tools/233.7.webp',
    ],
    description: 'غلاف ورقي مقوى قابل للغسل بتصميم أنيق. دفتر ملاحظات حلزوني ذو 96 صفحة، أبعاده 9 × 14 سم، بشبكة 5 × 5 مم. ورق أبيض 70 غرام/م².',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-213-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 65,
       // oldPrice: 0,
        stock: 50,
        sku: '9557',
        images: [
      '/img-webp/School-tools/233.webp',
        ],
      },
      {
        id: 'st-213-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9557',
        images: [
      '/img-webp/School-tools/233.5.webp',
        ],
      },
      {
        id: 'st-213-light-blue',
        name:  'أزرق فاتح',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 100,
        stock: 50,
        sku: '9557',
        images: [
      '/img-webp/School-tools/233.4.webp',
        ],
      },
      {
        id: 'st-213-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9557',
        images: [
      '/img-webp/School-tools/233.1.webp',
        ],
      },
      {
        id: 'st-213-green1',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9557',
        images: [
      '/img-webp/School-tools/233.7.webp',
        ],
      },
      {
        id: 'st-213-purpel1',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9557',
        images: [
      '/img-webp/School-tools/233.6.webp',
        ],
      },
      {
        id: 'st-213-orange',
        name: 'برتقالي',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9557',
        images: [
      '/img-webp/School-tools/233.2.webp',
        ],
      },
      {
        id: 'st-213-gray',
        name: 'رمادي',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '9557',
        images: [
      '/img-webp/School-tools/233.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-214',
    name: 'دفتر رسم الخطاط، 96 صفحة، 17×22 سم، 56 غرام، مسطر، "الخطاط" رقم المرجع: 2196',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'other',
    price: 240,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/234.webp',
    ],
    gallery: [
      '/img-webp/School-tools/234.webp',
    ],
    description: 'يُعدّ دفتر CALLIGRAPHE ذو 96 صفحة، بمقاس 17×22 سم ووزن 56 غ، والمُسطّر بورق Seyès، رفيقًا لا غنى عنه للطلاب. صُمّم هذا الدفتر عالي الجودة لتلبية جميع احتياجاتك في الكتابة وتدوين الملاحظات والرسم. بفضل صفحاته الـ 96 بمقاس 17×22 سم، يُوفّر حجمًا مثاليًا للاستخدام اليومي، مع سهولة حمله في الحقيبة أو المجلد. يضمن وزن الورق البالغ 56 غ/م² انسيابية مثالية للكتابة، مع ضمان عدم تسرب الحبر، مما يُوفّر تجربة كتابة ممتعة وسلسة. يتميّز ورق Seyès المُسطّر بخطوطه الواضحة، وهامشه الأحمر، وخطوط الكتابة البنفسجية، والخطوط الزرقاء بين الأسطر، مما يجعله مثاليًا للكتابة الدقيقة والمنظمة، سواءً للواجبات المنزلية أو تمارين الصف أو المراجعة. يُضفي الغلاف المُخيط لمسة من المتانة والصلابة، مما يضمن بقاء دفترك في حالة جيدة طوال فترة استخدامه. سواءً للاستخدام المدرسي أو المهني، يُعدّ هذا الدفتر أداة أساسية لكل من يرغب في الحفاظ على أفكاره وملاحظاته منظمة ويسهل الوصول إليها.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-215',
    name: 'مقص مدرسي 12.7 سم، حلقات  مرنة "تكنو"، رقم المرجع: 7068',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 220,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/235.webp',
    ],
    gallery: [
      '/img-webp/School-tools/235.webp',
      '/img-webp/School-tools/235.1.webp',
      '/img-webp/School-tools/235.2.webp',
    ],
    description: 'مقص مدرسي برأس من الفولاذ المقاوم للصدأ بطول 12.7 سم، مناسب للأشخاص الذين يستخدمون اليد اليمنى، وحلقات ناعمة مريحة للاستخدام.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-215-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7068',
        images: [
      '/img-webp/School-tools/235.webp',
        ],
      },
      {
        id: 'st-215-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7068',
        images: [
      '/img-webp/School-tools/235.1.webp',
        ],
      },
      {
        id: 'st-215-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7068',
        images: [
      '/img-webp/School-tools/235.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-216',
    name: 'مقص مدرسي، حلقات دونات  "تكنو" مقاس 13 سم، رقم المرجع: 7060',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 220,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/236.webp',
    ],
    gallery: [
      '/img-webp/School-tools/236.webp',
      '/img-webp/School-tools/236.1.webp',
      '/img-webp/School-tools/236.2.webp',
    ],
    description: 'مقص مدرسي برؤوس من الفولاذ المقاوم للصدأ بطول 13 سم، مناسب للمستخدمين الذين يستخدمون اليد اليمنى واليسرى، حلقات دائرية مريحة للاستخدام، مصمم خصيصاً لأيدي الأطفال الصغار.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-216-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7060',
        images: [
      '/img-webp/School-tools/236.webp',
        ],
      },
      {
        id: 'st-216-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7060',
        images: [
      '/img-webp/School-tools/236.1.webp',
        ],
      },
      {
        id: 'st-216-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7060',
        images: [
      '/img-webp/School-tools/236.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-217',
    name: 'مقص مدرسي مربع جميل "تكنو" 13.5 سم، رقم المرجع: 7062',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 230,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/237.webp',
    ],
    gallery: [
      '/img-webp/School-tools/237.webp',
      '/img-webp/School-tools/237.1.webp',
      '/img-webp/School-tools/237.2.webp',
    ],
    description: 'مقص مدرسي برؤوس من الفولاذ المقاوم للصدأ بطول 13.5 سم، مناسب للأشخاص الذين يستخدمون اليد اليمنى، حلقات مريحة ذات شكل مربع لتوفير الراحة أثناء الاستخدام.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-217-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7062',
        images: [
      '/img-webp/School-tools/237.webp',
        ],
      },
      {
        id: 'st-217-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7062',
        images: [
      '/img-webp/School-tools/237.1.webp',
        ],
      },
      {
        id: 'st-217-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7062',
        images: [
      '/img-webp/School-tools/237.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-218',
    name: 'مقص مدرسي "تكنو" من لوفلي سيركل، طوله 13.5 سم، رقم المرجع: 7061',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 230,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/238.webp',
    ],
    gallery: [
      '/img-webp/School-tools/238.webp',
      '/img-webp/School-tools/238.1.webp',
      '/img-webp/School-tools/238.2.webp',
    ],
    description: 'مقص مدرسي برؤوس من الفولاذ المقاوم للصدأ بطول 13.5 سم، مناسب للأشخاص الذين يستخدمون اليد اليمنى، حلقات مريحة ذات شكل مربع لتوفير الراحة أثناء الاستخدام.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-218-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7061',
        images: [
      '/img-webp/School-tools/238.webp',
        ],
      },
      {
        id: 'st-218-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7061',
        images: [
      '/img-webp/School-tools/238.1.webp',
        ],
      },
      {
        id: 'st-218-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7061',
        images: [
      '/img-webp/School-tools/238.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-219',
    name: 'مقص مدرسي "تكنو" من كوست، طوله 13 سم، رقم المرجع: 7064',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 220,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/239.webp',
    ],
    gallery: [
      '/img-webp/School-tools/239.webp',
      '/img-webp/School-tools/239.1.webp',
      '/img-webp/School-tools/239.2.webp',
    ],
    description: 'مقص مدرسي برأس من الفولاذ المقاوم للصدأ بطول 13 سم، مناسب للمستخدمين الذين يستخدمون اليد اليمنى واليسرى، حلقات دائرية مريحة للاستخدام.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-219-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7064',
        images: [
      '/img-webp/School-tools/239.webp',
        ],
      },
      {
        id: 'st-219-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7064',
        images: [
      '/img-webp/School-tools/239.1.webp',
        ],
      },
      {
        id: 'st-219-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7064',
        images: [
      '/img-webp/School-tools/239.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-220',
    name: 'مقص مدرسي 13.5 سم بتصميم قلب جميل "تكنو" رقم المرجع: 7063',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 230,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/240.webp',
    ],
    gallery: [
      '/img-webp/School-tools/240.webp',
      '/img-webp/School-tools/240.1.webp',
    ],
    description: 'مقص مدرسي برؤوس من الفولاذ المقاوم للصدأ بطول 13.5 سم، مناسب للأشخاص الذين يستخدمون اليد اليمنى، وحلقات مريحة على شكل قلب لتوفير الراحة أثناء الاستخدام.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-220-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7063',
        images: [
      '/img-webp/School-tools/240.webp',
        ],
      },
      {
        id: 'st-220-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7063',
        images: [
      '/img-webp/School-tools/240.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-221',
    name: 'مقص مدرسي 13.5 سم، تصميم "تكنو" أنيق، رقم المرجع: 7066',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 220,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/241.webp',
    ],
    gallery: [
      '/img-webp/School-tools/241.webp',
      '/img-webp/School-tools/241.1.webp',
      '/img-webp/School-tools/241.2.webp',
    ],
    description: 'مقص مدرسي برأس من الفولاذ المقاوم للصدأ بطول 13 سم، مناسب للمستخدمين الذين يستخدمون اليد اليمنى واليسرى، حلقات دائرية مريحة للاستخدام.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-221-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7066',
        images: [
      '/img-webp/School-tools/241.webp',
        ],
      },
      {
        id: 'st-221-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7066',
        images: [
      '/img-webp/School-tools/241.1.webp',
        ],
      },
      {
        id: 'st-221-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7066',
        images: [
      '/img-webp/School-tools/241.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-222',
    name: 'مقص مدرسي من نوع "تكنو" من شركة ليمبر، طوله 14 سم، رقم المرجع: 7065',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 230,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/242.webp',
    ],
    gallery: [
      '/img-webp/School-tools/242.webp',
      '/img-webp/School-tools/242.1.webp',
      '/img-webp/School-tools/242.2.webp',
    ],
    description: 'مقص مدرسي برؤوس من الفولاذ المقاوم للصدأ بطول 14 سم، مناسب للأشخاص الذين يستخدمون اليد اليمنى، وحلقات ناعمة مريحة للاستخدام.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-222-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7065',
        images: [
      '/img-webp/School-tools/242.webp',
        ],
      },
      {
        id: 'st-222-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7065',
        images: [
      '/img-webp/School-tools/242.1.webp',
        ],
      },
      {
        id: 'st-222-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 230,
       // oldPrice: 0,
        stock: 50,
        sku: '7065',
        images: [
      '/img-webp/School-tools/242.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-223',
    name: 'مقص مدرسي "تكنو" من سكيلي، طوله 13 سم، رقم المرجع: 7067',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 220,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/243.webp',
    ],
    gallery: [
      '/img-webp/School-tools/243.webp',
      '/img-webp/School-tools/243.1.webp',
      '/img-webp/School-tools/243.2.webp',
    ],
    description: 'مقص مدرسي برأس من الفولاذ المقاوم للصدأ بطول 13 سم، مناسب للأشخاص الذين يستخدمون اليد اليمنى، حلقات ناعمة غير متماثلة مريحة مع بطاقة اسم.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-223-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7067',
        images: [
      '/img-webp/School-tools/243.webp',
        ],
      },
      {
        id: 'st-223-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7067',
        images: [
      '/img-webp/School-tools/243.1.webp',
        ],
      },
      {
        id: 'st-223-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 220,
       // oldPrice: 0,
        stock: 50,
        sku: '7067',
        images: [
      '/img-webp/School-tools/243.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-224',
    name: 'مقص مدرسي من دينكي بلس "تكنو" بطول 13 سم، رقم المرجع: 7058',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 160,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/244.webp',
    ],
    gallery: [
      '/img-webp/School-tools/244.webp',
      '/img-webp/School-tools/244.1.webp',
      '/img-webp/School-tools/244.2.webp',
    ],
    description: 'مقص مدرسي برأس من الفولاذ المقاوم للصدأ بطول 13 سم، مناسب للأشخاص الذين يستخدمون اليد اليمنى، بحلقات ناعمة غير متماثلة مصممة هندسياً.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-224-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 160,
       // oldPrice: 0,
        stock: 50,
        sku: '7058',
        images: [
      '/img-webp/School-tools/244.webp',
        ],
      },
      {
        id: 'st-224-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 160,
       // oldPrice: 0,
        stock: 50,
        sku: '7058',
        images: [
      '/img-webp/School-tools/244.1.webp',
        ],
      },
      {
        id: 'st-224-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 160,
       // oldPrice: 0,
        stock: 50,
        sku: '7058',
        images: [
      '/img-webp/School-tools/244.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-225',
    name: 'مقص مدرسي 12.7 سم من نوع "أجايل تكنو" رقم المرجع: 7072',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 170,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/245.webp',
    ],
    gallery: [
      '/img-webp/School-tools/245.webp',
      '/img-webp/School-tools/245.1.webp',
      '/img-webp/School-tools/245.2.webp',
    ],
    description: 'مقص مدرسي برأس من الفولاذ المقاوم للصدأ بطول 12.7 سم، مناسب للأشخاص الذين يستخدمون اليد اليمنى، بحلقات ناعمة غير متماثلة مصممة هندسياً.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-225-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 170,
       // oldPrice: 0,
        stock: 50,
        sku: '7072',
        images: [
      '/img-webp/School-tools/245.webp',
        ],
      },
      {
        id: 'st-225-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 170,
       // oldPrice: 0,
        stock: 50,
        sku: '7072',
        images: [
      '/img-webp/School-tools/245.1.webp',
        ],
      },
      {
        id: 'st-225-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 170,
       // oldPrice: 0,
        stock: 50,
        sku: '7072',
        images: [
      '/img-webp/School-tools/245.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-226',
    name: 'مقص مدرسي على شكل دونات بطول 13 سم "تكنو" رقم المرجع: 7059',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 150,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/246.webp',
    ],
    gallery: [
      '/img-webp/School-tools/246.webp',
      '/img-webp/School-tools/246.1.webp',
      '/img-webp/School-tools/246.2.webp',
      '/img-webp/School-tools/246.3.webp',
    ],
    description: 'مقص مدرسي برؤوس من الفولاذ المقاوم للصدأ بطول 13 سم، مناسب للأشخاص الذين يستخدمون اليد اليمنى، مع حلقات مريحة ومرنة وغير متماثلة.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-226-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 150,
       // oldPrice: 0,
        stock: 50,
        sku: '7059',
        images: [
      '/img-webp/School-tools/246.1.webp',
        ],
      },
      {
        id: 'st-226-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 150,
       // oldPrice: 0,
        stock: 50,
        sku: '7059',
        images: [
      '/img-webp/School-tools/246.2.webp',
        ],
      },
      {
        id: 'st-226-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 150,
       // oldPrice: 0,
        stock: 50,
        sku: '7059',
        images: [
      '/img-webp/School-tools/246.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-227',
    name: 'مقص غير متماثل 24.3 سم، عبوة بلاستيكية "تكنو"، رقم المرجع: 6554',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 590,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/247.webp',
    ],
    gallery: [
      '/img-webp/School-tools/247.webp',
    ],
    description: '*المقبض مصنوع من بلاستيك عالي الجودة، مما يوفر قبضة مريحة. *شفرات من الفولاذ المقاوم للصدأ ذاتية الشحذ. *الطول الإجمالي 243 مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-228',
    name: 'مقص غير متماثل 23.5 سم، عبوة بلاستيكية "تكنو"، رقم المرجع: 6553',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 650,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/248.webp',
    ],
    gallery: [
      '/img-webp/School-tools/248.webp',
    ],
    description: '*المقبض مصنوع من بلاستيك عالي الجودة، مما يوفر قبضة مريحة. *شفرات من الفولاذ المقاوم للصدأ ذاتية الشحذ. *الطول الإجمالي 235 مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-229',
    name: 'مقص غير متماثل 21.5 سم، عبوة بلاستيكية "تكنو"، رقم المرجع: 6558',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 550,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/249.webp',
    ],
    gallery: [
      '/img-webp/School-tools/249.webp',
    ],
    description: '*المقبض مصنوع من بلاستيك عالي الجودة، مما يوفر قبضة مريحة. *شفرات من الفولاذ المقاوم للصدأ ذاتية الشحذ. *الطول الإجمالي 215 مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-230',
    name: 'مقص غير متماثل 19.7 سم، عبوة بلاستيكية "تكنو"، رقم المرجع: 6550',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 620,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/250.webp',
    ],
    gallery: [
      '/img-webp/School-tools/250.webp',
    ],
    description: '*المقبض مصنوع من بلاستيك عالي الجودة، مما يوفر قبضة مريحة. *شفرات من الفولاذ المقاوم للصدأ ذاتية الشحذ. *الطول الإجمالي 197 مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-231',
    name: 'مقص غير متماثل 21.4 سم، عبوة بلاستيكية "تكنو"، رقم المرجع: 6556',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 470,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/251.webp',
    ],
    gallery: [
      '/img-webp/School-tools/251.webp',
    ],
    description: '*المقبض مصنوع من بلاستيك عالي الجودة، مما يوفر قبضة مريحة. *شفرات من الفولاذ المقاوم للصدأ ذاتية الشحذ. *الطول الإجمالي 214 مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-232',
    name: 'مقص متناظر 17 سم في عبوة بلاستيكية شفافة "تكنو" رقم المرجع: 6549',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 550,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/252.webp',
    ],
    gallery: [
      '/img-webp/School-tools/252.webp',
    ],
    description: '*المقبض مصنوع من بلاستيك عالي الجودة، مما يوفر قبضة مريحة. *شفرات من الفولاذ المقاوم للصدأ ذاتية الشحذ. *الطول الإجمالي 170 مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-233',
    name: 'مقص غير متماثل 19.3 سم، عبوة بلاستيكية "تكنو"، رقم المرجع: 6555',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 410,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/253.webp',
    ],
    gallery: [
      '/img-webp/School-tools/253.webp',
    ],
    description: '*المقبض مصنوع من بلاستيك عالي الجودة، مما يوفر قبضة مريحة. *شفرات من الفولاذ المقاوم للصدأ ذاتية الشحذ. *الطول الإجمالي 193 مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-234',
    name: 'مقص غير متماثل 16.5 سم، عبوة بلاستيكية "تكنو"، رقم المرجع: 6557',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-scissors',
    brand: 'tecnowa',
    price: 370,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/254.webp',
    ],
    gallery: [
      '/img-webp/School-tools/254.webp',
    ],
    description: '*المقبض مصنوع من بلاستيك عالي الجودة، مما يوفر قبضة مريحة. *شفرات من الفولاذ المقاوم للصدأ ذاتية الشحذ. *الطول الإجمالي 165 مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-235',
    name: 'مدور مدرسي بحلقة زرقاء "تكنو" رقم المرجع: 5363',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'tecnowa',
    price: 470,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/255.webp',
    ],
    gallery: [
      '/img-webp/School-tools/255.webp',
      '/img-webp/School-tools/255.1.webp',
      '/img-webp/School-tools/255.2.webp',
      '/img-webp/School-tools/255.3.webp',
    ],
    description: 'مدور مدرسي، تتميز بصلابة جيدة، وأذرع معدنية، وألوان متنوعة.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-235-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 470,
       // oldPrice: 0,
        stock: 50,
        sku: '5363',
        images: [
      '/img-webp/School-tools/255.webp',
        ],
      },
      {
        id: 'st-235-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 470,
       // oldPrice: 0,
        stock: 50,
        sku: '5363',
        images: [
      '/img-webp/School-tools/255.1.webp',
        ],
      },
      {
        id: 'st-235-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 470,
       // oldPrice: 0,
        stock: 50,
        sku: '5363',
        images: [
      '/img-webp/School-tools/255.2.webp',
        ],
      },
      {
        id: 'st-235-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 470,
       // oldPrice: 0,
        stock: 50,
        sku: '5363',
        images: [
      '/img-webp/School-tools/255.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-236',
    name: 'مجموعة مداور مدرسية  من 3 قطع "تكنو" رقم المرجع: 5324',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'tecnowa',
    price: 250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/256.webp',
    ],
    gallery: [
      '/img-webp/School-tools/256.webp',
      '/img-webp/School-tools/256.1.webp',
      '/img-webp/School-tools/256.2.webp',
      '/img-webp/School-tools/256.3.webp',
    ],
    description: 'مجموعة من 3 قطع، هيكل معدني، سهلة الحمل والتخزين، أداة ممتازة لرسم الخطوط العريضة والدوائر، وتستخدم أيضاً لتحديد الحواف.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-236-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 250,
       // oldPrice: 0,
        stock: 50,
        sku: '5324',
        images: [
      '/img-webp/School-tools/256.1.webp',
        ],
      },
      {
        id: 'st-236-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 250,
       // oldPrice: 0,
        stock: 50,
        sku: '5324',
        images: [
      '/img-webp/School-tools/256.2.webp',
        ],
      },
      {
        id: 'st-236-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 250,
       // oldPrice: 0,
        stock: 50,
        sku: '5324',
        images: [
      '/img-webp/School-tools/256.3.webp',
        ],
      },
      {
        id: 'st-236-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 250,
       // oldPrice: 0,
        stock: 50,
        sku: '5324',
        images: [
      '/img-webp/School-tools/256.4.webp',
        ],
      },
    ],
  },

{
    id: 'st-237',
    name: 'مدور مدرسي معدني من مابيد ، رقم المرجع: 119410',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 420,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/257.webp',
    ],
    gallery: [
      '/img-webp/School-tools/257.webp',
      '/img-webp/School-tools/257.1.webp',
      '/img-webp/School-tools/257.2.webp',
    ],
    description: 'عرض تقليدي وعصري في آن واحد، يجمع بين الخبرة والابتكارات الثورية، مع إمكانية اختيار الكلية + 10 سنوات',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-237-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 420,
       // oldPrice: 0,
        stock: 50,
        sku: '119410',
        images: [
      '/img-webp/School-tools/257.webp',
        ],
      },
      {
        id: 'st-237-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 420,
       // oldPrice: 0,
        stock: 50,
        sku: '119410',
        images: [
      '/img-webp/School-tools/257.2.webp',
        ],
      },
      {
        id: 'st-237-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 420,
       // oldPrice: 0,
        stock: 50,
        sku: '119410',
        images: [
      '/img-webp/School-tools/257.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-238',
    name: 'مدور مدرسي بلاستيكي للأطفال "MAPED" رقم المرجع: 181511',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 420,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/258.webp',
    ],
    gallery: [
      '/img-webp/School-tools/258.webp',
      '/img-webp/School-tools/258.1.webp',
    ],
    description: 'التعلم: مجموعة كاملة من مداور  التعليمية الملونة بتصميم مريح، تراعي جميع جوانب السلامة وبيئة العمل، مناسبة للأعمار من 6 سنوات فما فوق.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-238-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 420,
       // oldPrice: 0,
        stock: 50,
        sku: '181511',
        images: [
      '/img-webp/School-tools/258.webp',
        ],
      },
      {
        id: 'st-238-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 420,
       // oldPrice: 0,
        stock: 50,
        sku: '181511',
        images: [
      '/img-webp/School-tools/258.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-239',
    name: 'مدور مدرسي  من "MAPED" رقم المرجع: 018111',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 290,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/259.webp',
    ],
    gallery: [
      '/img-webp/School-tools/259.webp',
      '/img-webp/School-tools/259.1.webp',
    ],
    description: 'التعلم: مجموعة كاملة من المدور المدرسية الملونة بتصميم مطمئن، تعالج جميع قضايا السلامة وبيئة العمل.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-239-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 290,
       // oldPrice: 0,
        stock: 50,
        sku: '018111',
        images: [
      '/img-webp/School-tools/259.webp',
        ],
      },
      {
        id: 'st-239-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 290,
       // oldPrice: 0,
        stock: 50,
        sku: '018111',
        images: [
      '/img-webp/School-tools/259.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-240',
    name: 'مداور مدرسية للأطفال "MAPED" رقم المرجع: 191611',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 370,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/260.3.webp',
    ],
    gallery: [
      '/img-webp/School-tools/260.3.webp',
      '/img-webp/School-tools/260.webp',
      '/img-webp/School-tools/260.1.webp',
      '/img-webp/School-tools/260.2.webp',
    ],
    description: 'التعلم: مجموعة كاملة من المدوار المدرسية الملونة بتصميم مطمئن، تعالج جميع قضايا السلامة وبيئة العمل.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-240-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 370,
       // oldPrice: 0,
        stock: 50,
        sku: '191611',
        images: [
      '/img-webp/School-tools/260.webp',
        ],
      },
      {
        id: 'st-240-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 370,
       // oldPrice: 0,
        stock: 50,
        sku: '191611',
        images: [
      '/img-webp/School-tools/260.1.webp',
        ],
      },
      {
        id: 'st-240-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 370,
       // oldPrice: 0,
        stock: 50,
        sku: '191611',
        images: [
      '/img-webp/School-tools/260.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-241',
    name: 'مدور مدرسي من مابيد مع صندوق أمان ، رقم المرجع: 192611',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 985,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/261.webp',
    ],
    gallery: [
      '/img-webp/School-tools/261.webp',
      '/img-webp/School-tools/261.1.webp',
      '/img-webp/School-tools/261.2.webp',
    ],
    description: 'التعلم: مجموعة كاملة من المدوار المدرسية الملونة بتصميم مطمئن، تعالج جميع قضايا السلامة وبيئة العمل، + 6 سنوات.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-241-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 985,
       // oldPrice: 0,
        stock: 50,
        sku: '192611',
        images: [
      '/img-webp/School-tools/261.webp',
        ],
      },
      {
        id: 'st-241-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 985,
       // oldPrice: 0,
        stock: 50,
        sku: '192611',
        images: [
      '/img-webp/School-tools/261.1.webp',
        ],
      },
      {
        id: 'st-241-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 985,
       // oldPrice: 0,
        stock: 50,
        sku: '192611',
        images: [
      '/img-webp/School-tools/261.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-242',
    name: 'مدور مدرسي من "MAPED" رقم المرجع: 195210',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 680,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/262.3.webp',
    ],
    gallery: [
      '/img-webp/School-tools/262.3.webp',
      '/img-webp/School-tools/262.1.webp',
      '/img-webp/School-tools/262.2.webp',
      '/img-webp/School-tools/262.4.webp',
      '/img-webp/School-tools/262.5.webp',
      '/img-webp/School-tools/262.6.webp',
      '/img-webp/School-tools/262.7.webp',
      '/img-webp/School-tools/262.8.webp',
    ],
    description: 'مجموعة تجمع بين الأصالة والحداثة، وتمزج بين الخبرة والابتكارات الثورية، مختارة من قبل خريجي الجامعات لأكثر من 10 سنوات، بأذرع معدنية وغطاء مريح.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-242-orange',
        name: 'برتقالي',
        optionLabel: 'اللون',
        price: 680,
       // oldPrice: 0,
        stock: 50,
        sku: '195210',
        images: [
      '/img-webp/School-tools/262.3.webp',
      '/img-webp/School-tools/262.4.webp',
      '/img-webp/School-tools/262.5.webp',
        ],
      },
      {
        id: 'st-242-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 680,
       // oldPrice: 0,
        stock: 50,
        sku: '195210',
        images: [
      '/img-webp/School-tools/262.6.webp',
      '/img-webp/School-tools/262.7.webp',
      '/img-webp/School-tools/262.8.webp',
        ],
      },
      {
        id: 'st-242-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 680,
       // oldPrice: 0,
        stock: 50,
        sku: '195210',
        images: [
      '/img-webp/School-tools/262.1.webp',
      '/img-webp/School-tools/262.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-243',
    name: 'مدور مدرسي من  MAPED ، رقم المرجع: 036910',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 590,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/263.webp',
    ],
    gallery: [
      '/img-webp/School-tools/263.webp',
      '/img-webp/School-tools/263.1.webp',
      '/img-webp/School-tools/263.2.webp',
      '/img-webp/School-tools/263.3.webp',
      '/img-webp/School-tools/263.4.webp',
      '/img-webp/School-tools/263.5.webp',
      '/img-webp/School-tools/263.6.webp',
      '/img-webp/School-tools/263.7.webp',
    ],
    description: 'عرض يجمع بين الأصالة والحداثة، ويجمع بين الخبرة والابتكارات الثورية، مع إمكانية اختيار الكلية + 10 سنوات.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-243-orange',
        name: 'برتقالي',
        optionLabel: 'اللون',
        price: 590,
       // oldPrice: 0,
        stock: 50,
        sku: '036910',
        images: [
      '/img-webp/School-tools/263.webp',
      '/img-webp/School-tools/263.1.webp',
      '/img-webp/School-tools/263.2.webp',
        ],
      },
      {
        id: 'st-243-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 590,
       // oldPrice: 0,
        stock: 50,
        sku: '036910',
        images: [
      '/img-webp/School-tools/263.6.webp',
      '/img-webp/School-tools/263.7.webp',
      '/img-webp/School-tools/263.8.webp',
        ],
      },
      {
        id: 'st-243-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 590,
       // oldPrice: 0,
        stock: 50,
        sku: '036910',
        images: [
      '/img-webp/School-tools/263.3.webp',
      '/img-webp/School-tools/263.4.webp',
      '/img-webp/School-tools/263.5.webp',
        ],
      },
    ],
  },

{
    id: 'st-244',
    name: 'كراس MAPED ذو 192 صفحة، مقاس A4، مخيط (مسطر)، 70 غرام، رقم المرجع: 9339',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 420,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/264.webp',
    ],
    gallery: [
      '/img-webp/School-tools/264.webp',
      '/img-webp/School-tools/264.1.webp',
      '/img-webp/School-tools/264.2.webp',
    ],
    description: 'ورق عالي الجودة لمختلف المراحل الدراسية',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-244-format',
        name: 'النمط 1',
        optionLabel: 'الشكل',
        price: 420,
       // oldPrice: 0,
        stock: 50,
        sku: '9339',
        images: [
      '/img-webp/School-tools/264.webp',
        ],
      },
      {
        id: 'st-244-format1',
        name: 'النمط 2',
        optionLabel: 'الشكل',
        price: 420,
       // oldPrice: 0,
        stock: 50,
        sku: '9339',
        images: [
      '/img-webp/School-tools/264.1.webp',
        ],
      },
      {
        id: 'st-244-format2',
        name: 'النمط 3',
        optionLabel: 'الشكل',
        price: 420,
       // oldPrice: 0,
        stock: 50,
        sku: '9339',
        images: [
      '/img-webp/School-tools/264.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-245',
    name: 'كراس حلزوني 17 سم × 22 سم، وزن 70 غرام، 288 صفحة، "مُخطط" رقم المرجع: 9284',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 475,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/265.webp',
    ],
    gallery: [
      '/img-webp/School-tools/265.webp',
      '/img-webp/School-tools/265.1.webp',
    ],
    description: 'ورق ذو جودة عالية مناسب لمختلف المراحل الدراسية.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-245-format',
        name: 'النمط 1',
        optionLabel: 'الشكل',
        price: 475,
       // oldPrice: 0,
        stock: 50,
        sku: '9284',
        images: [
      '/img-webp/School-tools/265.webp',
        ],
      },
      {
        id: 'st-245-format1',
        name: 'النمط 2',
        optionLabel: 'الشكل',
        price: 475,
       // oldPrice: 0,
        stock: 50,
        sku: '9284',
        images: [
      '/img-webp/School-tools/265.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-246',
    name: 'كراس أعمال تطبيقية , 17 سم × 22 سم، مسطر، 70 غرام، 120 صفحة، "MAPED" رقم المرجع: 9443',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 195,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/266.webp',
    ],
    gallery: [
      '/img-webp/School-tools/266.webp',
    ],
    description: 'ورق ذو جودة عالية مناسب لمختلف المراحل الدراسية.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-247',
    name: 'كناش A4 (كلاسار) 05 مم × 05 مم 70 غ 04 "مُعَدَّل" رقم المرجع: 9287',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 940,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/267.webp',
    ],
    gallery: [
      '/img-webp/School-tools/267.webp',
      '/img-webp/School-tools/267.1.webp',
      '/img-webp/School-tools/267.2.webp',
    ],
    description: 'للاستخدام في المدارس والمكاتب.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-247-format',
        name: 'النمط 1',
        optionLabel: 'الشكل',
        price: 940,
       // oldPrice: 0,
        stock: 50,
        sku: '9287',
        images: [
      '/img-webp/School-tools/267.webp',
        ],
      },
      {
        id: 'st-247-format1',
        name: 'النمط 2',
        optionLabel: 'الشكل',
        price: 940,
       // oldPrice: 0,
        stock: 50,
        sku: '9287',
        images: [
      '/img-webp/School-tools/267.1.webp',
        ],
      },
      {
        id: 'st-247-format2',
        name: 'النمط 3',
        optionLabel: 'الشكل',
        price: 940,
       // oldPrice: 0,
        stock: 50,
        sku: '9287',
        images: [
      '/img-webp/School-tools/267.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-248',
    name: 'كناش (كلاسار) رقم 02، 192 صفحة، 05 مم × 05 مم، 70 غرام، 17 سم × 22 سم، "MAPED"، رقم المرجع: 9289',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 290,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/268.webp',
    ],
    gallery: [
      '/img-webp/School-tools/268.webp',
      '/img-webp/School-tools/268.1.webp',
      '/img-webp/School-tools/268.2.webp',
    ],
    description: 'للاستخدام في المدارس والمكاتب.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-248-format',
        name: 'النمط 1',
        optionLabel: 'الشكل',
        price: 290,
       // oldPrice: 0,
        stock: 50,
        sku: '9287',
        images: [
      '/img-webp/School-tools/268.webp',
        ],
      },
      {
        id: 'st-248-format1',
        name: 'النمط 2',
        optionLabel: 'الشكل',
        price: 290,
       // oldPrice: 0,
        stock: 50,
        sku: '9287',
        images: [
      '/img-webp/School-tools/268.1.webp',
        ],
      },
      {
        id: 'st-248-format2',
        name: 'النمط 3',
        optionLabel: 'الشكل',
        price: 290,
       // oldPrice: 0,
        stock: 50,
        sku: '9287',
        images: [
      '/img-webp/School-tools/268.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-249',
    name: 'كراس 3 في 1، مسطر، 8 مم × 8 مم، 70 غرام، 192 صفحة، "تكنو"، رقم المرجع: 4497',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'tecnowa',
    price: 790,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/269.webp',
    ],
    gallery: [
      '/img-webp/School-tools/269.webp',
    ],
    description: 'غطاء مطلي قابل للغسل، مناسب لخمسة أنواع من المواد (3 في 1)، فاصل قابل للإزالة.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-250',
    name: 'كراس 5 في 1، مسطر، 8 مم × 8 مم، 70 غرام، 300 صفحة، "تكنو"، رقم المرجع: 4496',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'tecnowa',
    price: 1100,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/270.webp',
    ],
    gallery: [
      '/img-webp/School-tools/270.webp',
    ],
    description: 'غطاء مغلف قابل للغسل، قابل للاستخدام مع 5 مواد (5 في 1)، فاصل قابل للإزالة.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-251',
    name: 'مجموعة أدوات هندسية مكونة من 3 قطع - 15 سم،  "MAPED"، رقم المرجع: 895024',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 520,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/271.3.webp',
    ],
    gallery: [
      '/img-webp/School-tools/271.3.webp',
      '/img-webp/School-tools/271.1.webp',
      '/img-webp/School-tools/271.2.webp',
      '/img-webp/School-tools/271.webp',
    ],
    description: 'مسطرة واحدة بطول 15 سم. مثلث قائم الزاوية واحد 60°/15 سم. منقلة واحدة 180°/10 سم.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-251-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 520,
       // oldPrice: 0,
        stock: 50,
        sku: '895024',
        images: [
      '/img-webp/School-tools/271.webp',
        ],
      },
      {
        id: 'st-251-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 520,
       // oldPrice: 0,
        stock: 50,
        sku: '895024',
        images: [
      '/img-webp/School-tools/271.1.webp',
        ],
      },
      {
        id: 'st-251-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 520,
       // oldPrice: 0,
        stock: 50,
        sku: '895024',
        images: [
      '/img-webp/School-tools/271.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-252',
    name: 'مجموعة أدوات هندسية مكونة من 4 قطع، طول كل قطعة 30 سم، مقاومة للصدمات،  "MAPED"، رقم المرجع: 897147',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 460,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/272.webp',
    ],
    gallery: [
      '/img-webp/School-tools/272.webp',
      '/img-webp/School-tools/272.1.webp',
    ],
    description: 'مسطرة واحدة بطول 30 سم، ومثلث قائم الزاوية واحد بزاوية 60 درجة/21 سم، ومثلث قائم الزاوية واحد بزاوية 45 درجة/21 سم، ومنقلة واحدة بزاوية 180 درجة/12 سم',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-252-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 460,
       // oldPrice: 0,
        stock: 50,
        sku: '897147',
        images: [
      '/img-webp/School-tools/272.webp',
        ],
      },
      {
        id: 'st-252-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 460,
       // oldPrice: 0,
        stock: 50,
        sku: '897147',
        images: [
      '/img-webp/School-tools/272.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-253',
    name: 'منقلة نصف دائرية 180 درجة "إيزومارس" المرجع: 5',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'other',
    price: 155,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/273.webp',
    ],
    gallery: [
      '/img-webp/School-tools/273.webp',
    ],
    description: 'تُستخدم منقلة إيزومار في الهندسة لقياس الزوايا ورسم الأشكال الهندسية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-254',
    name: 'مسطرة دوائر قطر 22 سم تحمل اسم "ISOMARS" (المرجع: ISCOI-35)',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'other',
    price: 220,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/274.webp',
    ],
    gallery: [
      '/img-webp/School-tools/274.webp',
    ],
    description: 'صُنع جهاز قياس الإيزومارز من بلاستيك شفاف بسماكة 1.5 مم. وهو صلب وهش، لذا لا يمكن ثنيه. ويمكن استخدامه في العديد من التطبيقات الفنية والمعمارية والتقنية والحرفية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-255',
    name: 'مسطرة دوائر من GM 25°، 45°، 60° "ISOMARS" رقم المرجع: 18091M',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'other',
    price: 370,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/275.webp',
    ],
    gallery: [
      '/img-webp/School-tools/275.webp',
    ],
    description: 'صُنع جهاز قياس الإيزومارز من بلاستيك شفاف بسماكة 1.5 مم. وهو صلب وهش، لذا لا يمكن ثنيه. ويمكن استخدامه في العديد من التطبيقات الفنية والمعمارية والتقنية والحرفية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-256',
    name: 'مسطرة دوائر من PM 20°، 30°، 40° "ISOMARS" المرجع: 1838',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'other',
    price: 920,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/276.webp',
    ],
    gallery: [
      '/img-webp/School-tools/276.webp',
    ],
    description: 'صُنع جهاز قياس الإيزومارز من بلاستيك شفاف بسماكة 1.5 مم. وهو صلب وهش، لذا لا يمكن ثنيه. ويمكن استخدامه في العديد من التطبيقات الفنية والمعمارية والتقنية والحرفية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-257',
    name: 'مجموعة مداور مدرسية مكون من 3 قطع، "تكنو"، رقم المرجع: 3089',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'tecnowa',
    price: 250,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/277.2.webp',
    ],
    gallery: [
      '/img-webp/School-tools/277.2.webp',
      '/img-webp/School-tools/277.webp',
      '/img-webp/School-tools/277.1.webp',
      '/img-webp/School-tools/277.3.webp',
    ],
    description: 'مجموعة من 3 قطع معدنية، سهلة الحمل والتخزين، أداة ممتازة لرسم الخطوط العريضة والدوائر، وتستخدم أيضاً لتحديد الحواف.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-257-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 250,
       // oldPrice: 0,
        stock: 50,
        sku: '3089',
        images: [
      '/img-webp/School-tools/277.2.webp',
        ],
      },
      {
        id: 'st-257-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 250,
       // oldPrice: 0,
        stock: 50,
        sku: '3089',
        images: [
      '/img-webp/School-tools/277.webp',
        ],
      },
      {
        id: 'st-257-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 250,
       // oldPrice: 0,
        stock: 50,
        sku: '3089',
        images: [
      '/img-webp/School-tools/277.1.webp',
        ],
      },
      {
        id: 'st-257-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 250,
       // oldPrice: 0,
        stock: 50,
        sku: '3089',
        images: [
      '/img-webp/School-tools/277.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-258',
    name: 'مجموعة أدوات هندسية مكونة من 3 قطع "تكنو" رقم المرجع: 4531',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'tecnowa',
    price: 320,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/278.2.webp',
    ],
    gallery: [
      '/img-webp/School-tools/278.2.webp',
      '/img-webp/School-tools/278.webp',
      '/img-webp/School-tools/278.1.webp',
      '/img-webp/School-tools/278.3.webp',
    ],
    description: 'مجموعة أدوات هندسية ثلاثية؛ مجموعة أدوات مصنوعة من مادة ناعمة وغير قابلة للكسر للرسم الهندسي.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-258-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 320,
       // oldPrice: 0,
        stock: 50,
        sku: '4531',
        images: [
      '/img-webp/School-tools/278.2.webp',
        ],
      },
      {
        id: 'st-258-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 320,
       // oldPrice: 0,
        stock: 50,
        sku: '4531',
        images: [
      '/img-webp/School-tools/278.webp',
        ],
      },
      {
        id: 'st-258-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 320,
       // oldPrice: 0,
        stock: 50,
        sku: '4531',
        images: [
      '/img-webp/School-tools/278.1.webp',
        ],
      },
      {
        id: 'st-258-yellow',
        name: 'أصفر',
        optionLabel: 'اللون',
        price: 320,
       // oldPrice: 0,
        stock: 50,
        sku: '4531',
        images: [
      '/img-webp/School-tools/278.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-259',
    name: 'مجموعة أدوات هندسية مكونة من أربع قطع "تكنو" رقم المرجع: 4533',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'tecnowa',
    price: 410,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/279.2.webp',
    ],
    gallery: [
      '/img-webp/School-tools/279.2.webp',
      '/img-webp/School-tools/279.webp',
      '/img-webp/School-tools/279.1.webp',
      '/img-webp/School-tools/279.3.webp',
    ],
    description: 'مجموعة أدوات هندسية مكونة من 4 ألعاب؛ مجموعة أدوات مصنوعة من مادة مرنة وغير قابلة للكسر للرسم الهندسي.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-259-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 410,
        // oldPrice: 0,
        stock: 50,
        sku: '4533',
        images: [
      '/img-webp/School-tools/279.2.webp',
        ],
      },
      {
        id: 'st-259-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 410,
       // oldPrice: 0,
        stock: 50,
        sku: '4533',
        images: [
      '/img-webp/School-tools/279.webp',
        ],
      },
      {
        id: 'st-259-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 410,
       // oldPrice: 0,
        stock: 50,
        sku: '4533',
        images: [
      '/img-webp/School-tools/279.1.webp',
        ],
      },
      {
        id: 'st-259-yellow',
        name: 'أصفر',
        optionLabel: 'اللون',
        price: 410,
       // oldPrice: 0,
        stock: 50,
        sku: '4533',
        images: [
      '/img-webp/School-tools/279.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-260',
    name: 'مجموعة أدوات هندسية مكونة من 4 قطع بطول 20 سم، غير قابل للكسر، "MAPED" رقم المرجع: 981703',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 490,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/280.webp',
    ],
    gallery: [
      '/img-webp/School-tools/280.webp',
      '/img-webp/School-tools/280.1.webp',
    ],
    description: 'تتحمل هذه المنتجات الانحناء والصدمات داخل الحقيبة المدرسية. تتضمن المجموعة: مسطرة مزدوجة التدريج، مسطرة 20 سم، مثلث قائم الزاوية 60°/21 سم، مثلث قائم الزاوية 45°/21 سم، ومنقلة 180°/12 سم',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-260-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 490,
       // oldPrice: 0,
        stock: 50,
        sku: '981703',
        images: [
      '/img-webp/School-tools/280.webp',
        ],
      },
      {
        id: 'st-260-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 490,
       // oldPrice: 0,
        stock: 50,
        sku: '981703',
        images: [
      '/img-webp/School-tools/280.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-261',
    name: 'مجموعة أدوات هندسية مرنة مكونة من 4 قطع بطول 20 سم،  "MAPED"، رقم المرجع: 897158',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 640,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/281.webp',
    ],
    gallery: [
      '/img-webp/School-tools/281.webp',
      '/img-webp/School-tools/281.1.webp',
    ],
    description: 'جذاب: تصميم خطي لافت للنظر ومؤثر، مسطرة واحدة بطول 20 سم، مثلث قائم الزاوية واحد بزاوية 60 درجة/21 سم، مثلث قائم الزاوية واحد بزاوية 45 درجة/21 سم، منقلة واحدة بزاوية 180 درجة/12 سم',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-261-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 640,
        // oldPrice: ,
        stock: 50,
        sku: '897158',
        images: [
      '/img-webp/School-tools/281.webp',
        ],
      },
      {
        id: 'st-261-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 640,
       // oldPrice: 0,
        stock: 50,
        sku: '897158',
        images: [
      '/img-webp/School-tools/281.1.webp',
        ],
      },
      {
        id: 'st-261-yellow',
        name: 'أصفر',
        optionLabel: 'اللون',
        price: 640,
       // oldPrice: 0,
        stock: 50,
        sku: '897158',
        images: [
      '/img-webp/School-tools/281.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-262',
    name: 'مجموعة أدوات هندسية مرنة مكونة من 4 قطع، طول 30 سم، من "MAPED"، رقم المرجع: 897157',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 710,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/282.webp',
    ],
    gallery: [
      '/img-webp/School-tools/282.webp',
      '/img-webp/School-tools/282.1.webp',
    ],
    description: 'مسطرة واحدة بطول 30 سم، ومثلث قائم الزاوية واحد بطول 60 درجة/21 سم، ومثلث قائم الزاوية واحد بطول 45 درجة/21 سم، ومنقلة واحدة بطول 180 درجة/12 سم',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-262-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 710,
       // oldPrice: 0,
        stock: 50,
        sku: '897157',
        images: [
      '/img-webp/School-tools/282.webp',
        ],
      },
      {
        id: 'st-262-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 710,
       // oldPrice: 0,
        stock: 50,
        sku: '897157',
        images: [
      '/img-webp/School-tools/282.1.webp',
        ],
      },
      {
        id: 'st-262-yellow',
        name: 'أصفر',
        optionLabel: 'اللون',
        price: 710,
       // oldPrice: 0,
        stock: 50,
        sku: '897157',
        images: [
      '/img-webp/School-tools/282.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-263',
    name: 'مجموعة أدوات هندسية مكونة من 4 قطع بطول 30 سم، رقم المرجع: 231066',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-geometric',
    brand: 'maped',
    price: 1050,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/283.webp',
    ],
    gallery: [
      '/img-webp/School-tools/283.webp',
      '/img-webp/School-tools/283.1.webp',
      '/img-webp/School-tools/283.2.webp',
    ],
    description: 'مسطرة واحدة بطول 30 سم، ومثلث قائم الزاوية واحد بزاوية 60 درجة/21 سم، ومثلث قائم الزاوية واحد بزاوية 45 درجة/21 سم، ومنقلة واحدة بزاوية 180 درجة/12 سم',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-263-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 1050,
       // oldPrice: 0,
        stock: 50,
        sku: '231066',
        images: [
      '/img-webp/School-tools/283.1.webp',
        ],
      },
      {
        id: 'st-263-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 1050,
       // oldPrice: 0,
        stock: 50,
        sku: '231066',
        images: [
      '/img-webp/School-tools/283.2.webp',
        ],
      },
      {
        id: 'st-263-yellow',
        name: 'أصفر',
        optionLabel: 'اللون',
        price: 1050,
       // oldPrice: 0,
        stock: 50,
        sku: '231066',
        images: [
      '/img-webp/School-tools/283.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-264',
    name: 'قلم سبورة قابل لإعادة التعبئة برأس مشطوف، من إنتاج شركة ثينك أب، عبوة من 7 أقلام',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-highliters',
    brand: 'maped',
    price: 640,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/284.webp',
    ],
    gallery: [
      '/img-webp/School-tools/284.webp',
    ],
    description: 'ذعبوة من 7 أقلام تحديد برؤوس إزميلية 4 مم مصنوعة من الأكريليك، مزودة بعبوات الحبر الخاصة بها، طول الكتابة 250 متر. يمكن استخدام ما يصل إلى 8 عبوات حبر لكل قلم.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-265',
    name: 'كناش (كلاسار) A4 05 مم × 05 مم 70 غ 03 "مُمَثَّل" مرجع اليد: 9286',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 750,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/285.webp',
    ],
    gallery: [
      '/img-webp/School-tools/285.webp',
      '/img-webp/School-tools/285.1.webp',
      '/img-webp/School-tools/285.2.webp',
    ],
    description: 'للاستخدام في المدارس والمكاتب.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-265-format1',
        name: '1',
        optionLabel: 'الشكل',
        price: 750,
       // oldPrice: 0,
        stock: 50,
        sku: '9286',
        images: [
      '/img-webp/School-tools/285.webp',
        ],
      },
      {
        id: 'st-265-format2',
        name: '2',
        optionLabel: 'الشكل',
        price: 750,
       // oldPrice: 0,
        stock: 50,
        sku: '9286',
        images: [
      '/img-webp/School-tools/285.1.webp',
        ],
      },
      {
        id: 'st-265-format3',
        name: '3',
        optionLabel: 'الشكل',
        price: 750,
       // oldPrice: 0,
        stock: 50,
        sku: '9286',
        images: [
      '/img-webp/School-tools/285.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-266',
    name: 'كناش (كلاسار) رقم 02، 192 صفحة، 05 مم × 05 مم، 70 غرام، مقاس A4، "MAPED"، رقم المرجع: 9285',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-notebooks',
    brand: 'maped',
    price: 550,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/286.webp',
    ],
    gallery: [
      '/img-webp/School-tools/286.webp',
      '/img-webp/School-tools/286.1.webp',
      '/img-webp/School-tools/286.2.webp',
    ],
    description: 'للاستخدام في المدارس والمكاتب.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-266-format1',
        name: '1',
        optionLabel: 'الشكل',
        price: 550,
       // oldPrice: 0,
        stock: 50,
        sku: '9285',
        images: [
      '/img-webp/School-tools/286.webp',
        ],
      },
      {
        id: 'st-266-format2',
        name: '2',
        optionLabel: 'الشكل',
        price: 550,
       // oldPrice: 0,
        stock: 50,
        sku: '9285',
        images: [
      '/img-webp/School-tools/286.1.webp',
        ],
      },
      {
        id: 'st-266-format3',
        name: '3',
        optionLabel: 'الشكل',
        price: 550,
       // oldPrice: 0,
        stock: 50,
        sku: '9285',
        images: [
      '/img-webp/School-tools/286.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-267',
    name: 'ورق شفاف في عبوة من 12 ورقة، مقاس A4،',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-drawing',
    brand: 'tecnowa',
    price: 150,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/287.webp',
    ],
    gallery: [
      '/img-webp/School-tools/287.webp',
      '/img-webp/School-tools/287.1.webp',
      '/img-webp/School-tools/287.2.webp',
    ],
    description: 'جودة أوروبية؛ تستخدم لرسم أو إعادة إنتاج رسم فني أو تقني.',
    specs: [
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-267-size2',
        name: '50 غرام',
        optionLabel: 'الحجم',
        price: 150,
       // oldPrice: 0,
        stock: 50,
        sku: '9070',
        images: [
      '/img-webp/School-tools/287.2.webp',
        ],
      },
      {
        id: 'st-267-size1',
        name: '70 غرام',
        optionLabel: 'الحجم',
        price: 195,
       // oldPrice: 0,
        stock: 50,
        sku: '9071',
        images: [
      '/img-webp/School-tools/287.1.webp',
        ],
      },
    ],
  },

{
    id: 'st-268',
    name: 'اوراق ملميترية 70 غرام/م²، عبوة من 12 ورقة، مقاس A4، 21.5 × 31.5 سم، "تكنو" رقم المرجع: 9136',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-drawing',
    brand: 'tecnowa',
    price: 240,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/288.webp',
    ],
    gallery: [
      '/img-webp/School-tools/288.webp',
    ],
    description: 'جيب ورقي بشبكة مليمترية؛ يستخدم على نطاق واسع في العلوم لرسم الرسوم البيانية يدويًا؛ جودة أوروبية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-269',
    name: 'مجموعة أقلام جل قابلة للمسح من SET2GO، 4 أقلام حبر جاف FRIXION BALL، أسود/أبيض/أحمر/أزرق، 0.7 مم، "PILOT"، رقم المرجع: S4/0546795',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'other',
    price: 780,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/289.webp',
    ],
    gallery: [
      '/img-webp/School-tools/289.webp',
    ],
    description: 'المحتويات: قلم حبر جل قابل للمسح من فريكسيون بول، أزرق، 0.7 مم. قلم حبر جل قابل للمسح من فريكسيون بول، أسود، 0.7 مم. قلم حبر جل قابل للمسح من فريكسيون بول، أحمر، 0.7 مم. قلم حبر جل قابل للمسح من فريكسيون بول، أخضر، 0.7 مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-270',
    name: 'قلم حبر جاف قابل للمسح من فريكسيون كليكر، 0.7 مم، من نوع "بايلوت"، رقم المرجع: BLRT-FR7-L',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'other',
    price: 320,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/290.1.webp',
    ],
    gallery: [
      '/img-webp/School-tools/290.1.webp',
      '/img-webp/School-tools/290.webp',
      '/img-webp/School-tools/290.2.webp',
    ],
    description: 'انقر... اكتب... امسح... كرر كما تشاء مع قلم فريكسيون! اكتب بسلاسة باستخدام رأس القلم الجاف المتوسط، وامسح بالاحتكاك دون إتلاف الورق، وابدأ من جديد فورًا. بفضل حبره الجديد الحاصل على براءة اختراع والحساس للحرارة، يُحدث قلم فريكسيون ذو رأس القلم الجاف ثورة في عالم الكتابة، محافظًا على تقاليد بايلوت العريقة. آلية النقر القابلة للسحب الفريدة تجعله أكثر سهولة في الاستخدام! قابل لإعادة التعبئة - لا يُستخدم على المستندات الرسمية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-271',
    name: 'قلم حبر جاف قابل للمسح من فريكسيون بول، 0.7 مم، لون أزرق، من نوع "بايلوت"، رقم المرجع: BL-FR7-L',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'other',
    price: 295,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/291.webp',
    ],
    gallery: [
      '/img-webp/School-tools/291.webp',
      '/img-webp/School-tools/291.1.webp',
    ],
    description: 'اكتب... امسح... كرر كما تشاء مع قلم فريكسيون! اكتب بسلاسة مع رأس فريكسيون بول المتوسط، وامسح بالتسخين دون إتلاف الورق، وابدأ من جديد فورًا. بفضل حبره الحراري الجديد الحاصل على براءة اختراع، يُحدث قلم فريكسيون بول، وفاءً لتقاليد بايلوت، ثورة في عالم الكتابة. يتميز بتصميم عصري أنيق مستوحى من فن الوشم، ومتوفر بعشرة ألوان. قابل لإعادة التعبئة - لا يُستخدم على المستندات الرسمية.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-272',
    name: 'قلم حبر جاف سوينغ 1.0 مم من "تكنو"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 30,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/293.webp',
    ],
    gallery: [
      '/img-webp/School-tools/293.webp',
      '/img-webp/School-tools/293.1.webp',
      '/img-webp/School-tools/293.2.webp',
      '/img-webp/School-tools/293.3.webp',
      '/img-webp/School-tools/293.4.webp',
    ],
    description: 'قلم حبر جاف برأس 1 مم، بطول كتابة يصل إلى 1000 متر.',
    specs: [
    ],
    createdAt: '2024-08-20',
        variants: [
      {
        id: 'st-272-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '4965',
        images: [
      '/img-webp/School-tools/293.1.webp',
        ],
      },
      {
        id: 'st-272-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '4966',
        images: [
      '/img-webp/School-tools/293.2.webp',
        ],
      },
      {
        id: 'st-272-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '4967',
        images: [
      '/img-webp/School-tools/293.4.webp',
        ],
      },
      {
        id: 'st-272-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '4968',
        images: [
      '/img-webp/School-tools/293.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-273',
    name: 'علبة إعادة تعبئة أقلام حبر جاف فريكسيون رولربول، 3 قطع، لون أزرق "بايلوت"، رقم المرجع: BLS-FR7-L-S3',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'other',
    price: 720,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/292.webp',
    ],
    gallery: [
      '/img-webp/School-tools/292.webp',
    ],
    description: 'مجموعة من 3 عبوات إعادة تعبئة مصممة خصيصًا لأقلام الحبر الجاف القابلة للمسح من نوع FriXion Ball و FriXion Clicker.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-274',
    name: 'قلم حبر سائل من إيزي بيردي "ستابيلو" رقم المرجع: 5010/12-6',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'other',
    price: 3950,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/294.webp',
    ],
    gallery: [
      '/img-webp/School-tools/294.webp',
      '/img-webp/School-tools/294.1.webp',
      '/img-webp/School-tools/294.2.webp',
    ],
    description: 'إننا نسهل تعلم الكتابة باستخدام الأدوات الجيدة. صُمم قلم الحبر STABILO EASYbirdy للأطفال من سن 7 سنوات فما فوق، سواء كانوا يستخدمون اليد اليمنى أو اليسرى. يسمح تصميمه الفريد بتعديل سن القلم على ثلاثة محاور مختلفة: يتكيف القلم مع وضعية الكتابة الطبيعية للطفل، مما يجعل الكتابة أكثر متعة. يتوفر جهاز STABILO EASYbirdy بخمسة تركيبات لونية للمستخدمين الذين يستخدمون اليد اليمنى وثلاثة تركيبات لونية للمستخدمين الذين يستخدمون اليد اليسرى . قابلة لإعادة الشحن ، وتعمل مع خراطيش الحبر القياسية - كما يتم توفير خرطوشة زرقاء قابلة للمسح مع القلم. لضمان عدم نفاد الحبر، يحتوي قلم الحبر على نافذة في جسمه للتحقق من مستوى الحبر. فكرة عملية للغاية، من كان ليتخيلها!',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-275',
    name: 'أقلام حبر جاف POINTMAX ذات رأس لباد، عبوة من 12 قلمًا "STABILO"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'other',
    price: 2100,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/295.webp',
    ],
    gallery: [
      '/img-webp/School-tools/295.webp',
      '/img-webp/School-tools/295.1.webp',
      '/img-webp/School-tools/295.3.webp',
      '/img-webp/School-tools/295.2.webp',
    ],
    description: 'قلمٌ يُعزز الإبداع! صُمم قلم STABILO pointMax المبتكر ذو الرأس اللبادي بألوانه الغنية ليمنحك راحةً مثاليةً أثناء الكتابة. مع مرور الوقت، سيصبح رفيقك الإبداعي الأمثل. بالإضافة إلى ألوانه الـ 24 الزاهية التي تتيح لك التعبير عن نفسك بحرية، يتميز قلم STABILO pointMax برأس نايلون متوسط ​​يضمن المتانة والدقة وخطوطًا متناسقة، حتى بعد الاستخدام المكثف. عرض خطه المتوسط ​​0.8 مم مناسب للكتابة والرسم على حد سواء: تدوين الملاحظات، والكتابة، والرسم العفوي، أو حتى إنشاء دفتر يوميات إبداعي. يمكنك تركه بدون غطاء لمدة 24 ساعة دون التأثير على جودة الحبر أو الرأس. ودّع القيود وانطلق نحو الكتابة الإبداعية. متوفر بـ 24 لونًا. الابتكار: رأس نايلون متوسط ​​فائق المتانة بعرض خط 0.8 مم. متعدد الاستخدامات: رأس متعدد الوظائف، مثالي للكتابة والرسم. الجودة: يمكن تركه بدون غطاء لمدة 24 ساعة دون أن يجف - يضمن حبره جفافًا سريعًا دون تلطيخ. مريح: مزود بمشبك لسهولة الحمل. المتانة: 700 متر من الكتابة. صنع في ألمانيا',
    specs: [
    ],
    createdAt: '2024-08-20',
        variants: [
      {
        id: 'st-272-number1',
        name: '12 قلم',
        optionLabel: 'العدد',
        price: 2100,
       // oldPrice: 0,
        stock: 50,
        sku: '488/12-01',
        images: [
      '/img-webp/School-tools/295.3.webp',
        ],
      },
      {
        id: 'st-272-number2',
        name: '24 قلم',
        optionLabel: 'العدد',
        price: 4100,
       // oldPrice: 0,
        stock: 50,
        sku: '488/24-01',
        images: [
      '/img-webp/School-tools/295.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-276',
    name: 'قلم حبر جاف صغير من رولينو،  طراز "تكنو"، رقم المرجع: 4536',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'other',
    price: 160,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/296.webp',
    ],
    gallery: [
      '/img-webp/School-tools/296.webp',
      '/img-webp/School-tools/296.1.webp',
      '/img-webp/School-tools/296.2.webp',
      '/img-webp/School-tools/296.3.webp',
      '/img-webp/School-tools/296.4.webp',
      '/img-webp/School-tools/296.5.webp',
      '/img-webp/School-tools/296.6.webp',
    ],
    description: 'هيكل مريح بألوان زاهية، خرطوشة قياسية.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-276-format1',
        name: ' 1 ',
        optionLabel: 'الشكل',
        price: 160,
       // oldPrice: 0,
        stock: 50,
        sku: '4536',
        images: [
      '/img-webp/School-tools/296.1.webp',
        ],
      },
      {
        id: 'st-276-format2',
        name: ' 2 ',
        optionLabel: 'الشكل',
        price: 160,
       // oldPrice: 0,
        stock: 50,
        sku: '4536',
        images: [
      '/img-webp/School-tools/296.2.webp',
        ],
      },
      {
        id: 'st-276-format3',
        name: ' 3 ',
        optionLabel: 'الشكل',
        price: 160,
       // oldPrice: 0,
        stock: 50,
        sku: '4536',
        images: [
      '/img-webp/School-tools/296.3.webp',
        ],
      },
      {
        id: 'st-276-format4',
        name: ' 4 ',
        optionLabel: 'الشكل',
        price: 160,
       // oldPrice: 0,
        stock: 50,
        sku: '4536',
        images: [
      '/img-webp/School-tools/296.4.webp',
        ],
      },
      {
        id: 'st-276-format5',
        name: ' 5 ',
        optionLabel: 'الشكل',
        price: 160,
       // oldPrice: 0,
        stock: 50,
        sku: '4536',
        images: [
      '/img-webp/School-tools/296.5.webp',
        ],
      },
      {
        id: 'st-276-format6',
        name: ' 6 ',
        optionLabel: 'الشكل',
        price: 160,
       // oldPrice: 0,
        stock: 50,
        sku: '4536',
        images: [
      '/img-webp/School-tools/296.6.webp',
        ],
      },
    ],
  },

{
    id: 'st-277',
    name: 'قلم جل قابل للسحب G-2 "PILOT"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'other',
    price: 290,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/297.webp',
    ],
    gallery: [
      '/img-webp/School-tools/297.webp',
      '/img-webp/School-tools/297.1.webp',
      '/img-webp/School-tools/297.2.webp',
      '/img-webp/School-tools/297.3.webp',
    ],
    description: 'قلم G-2 هو قلم حبر جاف يجمع بين الأداء التقني والتصميم الأنيق. يضمن مقبضه المريح سهولة الاستخدام، بينما يتميز رأس القلم المصنوع من كربيد التنجستن فائق المقاومة بمتانته العالية ومقاومته للتآكل. ستُبهرك انسيابية حبره وكثافة ألوانه.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-277-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 290,
       // oldPrice: 0,
        stock: 50,
        sku: '',
        images: [
      '/img-webp/School-tools/297.webp',
      '/img-webp/School-tools/297.1.webp',
        ],
      },
      {
        id: 'st-277-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 290,
       // oldPrice: 0,
        stock: 50,
        sku: '',
        images: [
      '/img-webp/School-tools/297.2.webp',
      '/img-webp/School-tools/297.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-278',
    name: 'قلم رولي رولر من "تكنو" ',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 80,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/298.webp',
    ],
    gallery: [
      '/img-webp/School-tools/298.webp',
      '/img-webp/School-tools/298.1.webp',
      '/img-webp/School-tools/298.2.webp',
      '/img-webp/School-tools/298.3.webp',
    ],
    description: '* رأس إبرة لخطوط فائقة الدقة وراحة كتابة مذهلة. * رأس معدني، 0.7 مم. * طول الكتابة 1000 متر. * متوفر بأربعة ألوان.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-278-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 80,
       // oldPrice: 0,
        stock: 50,
        sku: '5735',
        images: [
      '/img-webp/School-tools/298.1.webp',
        ],
      },
      {
        id: 'st-278-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 80,
       // oldPrice: 0,
        stock: 50,
        sku: '5736',
        images: [
      '/img-webp/School-tools/298.2.webp',
        ],
      },
     {
        id: 'st-278-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 80,
       // oldPrice: 0,
        stock: 50,
        sku: '5737',
        images: [
      '/img-webp/School-tools/298.4.webp',
        ],
      },
     {
        id: 'st-278-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 80,
       // oldPrice: 0,
        stock: 50,
        sku: '5738',
        images: [
      '/img-webp/School-tools/298.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-279',
    name: 'قلم حبر جاف "بايلوت" من أكروبول،  مم.',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'other',
    price: 395,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/299.webp',
    ],
    gallery: [
      '/img-webp/School-tools/299.webp',
      '/img-webp/School-tools/299.1.webp',
      '/img-webp/School-tools/299.2.webp',
      '/img-webp/School-tools/299.3.webp',
    ],
    description: 'يتميز قلم أكروبول بجيل جديد من الحبر يوفر انسيابية فائقة في الكتابة. قابل للسحب وإعادة التعبئة، وهو الآن صديق للبيئة، يتميز أكروبول بمقبض مريح لسهولة الاستخدام وكرة من كربيد التنجستن متينة ومقاومة للتآكل. • منتج قابل لإعادة التعبئة: أكثر اقتصادية وصديقة للبيئة. • رأس قابل للسحب: قلم جاهز للاستخدام بضغطة واحدة، وداعًا للأغطية الضائعة! • مصنوع من 77.4% من البلاستيك المعاد تدويره (باستثناء المواد الاستهلاكية) للحد من تأثيرنا على البيئة. • كفاءة ومتانة وعمر طويل بفضل كرة كربيد التنجستن والأحبار الأكثر سلاسة والأقل لزوجة. • مقبض مطاطي لتحكم أفضل وراحة أكبر أثناء الكتابة: قلم أكثر راحة! • عرض الكتابة: 0.28 مم • قابل لإعادة التعبئة: نعم',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-279-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 395,
       // oldPrice: 0,
        stock: 50,
        sku: 'BAB-15M-B-BG',
        images: [
      '/img-webp/School-tools/299.webp',
        ],
      },
      {
        id: 'st-279-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 395,
       // oldPrice: 0,
        stock: 50,
        sku: 'BAB-15M-B-BG',
        images: [
      '/img-webp/School-tools/299.1.webp',
        ],
      },
     {
        id: 'st-279-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 395,
       // oldPrice: 0,
        stock: 50,
        sku: 'BAB-15M-G-BG',
        images: [
      '/img-webp/School-tools/299.3.webp',
        ],
      },
     {
        id: 'st-279-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 395,
       // oldPrice: 0,
        stock: 50,
        sku: 'BAB-15M-R-BG',
        images: [
      '/img-webp/School-tools/299.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-280',
    name: 'قلم ماجيك قابل للمسح  من "تكنو"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 150,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/300.webp',
    ],
    gallery: [
      '/img-webp/School-tools/300.webp',
      '/img-webp/School-tools/300.1.webp',
      '/img-webp/School-tools/300.2.webp',
    ],
    description: 'هيكل مريح مع آلية نقر، حبر حساس للحرارة يمحو عن طريق الفرك البسيط دون إتلاف الورق، طول الكتابة يصل إلى 200 متر، متوسط ​​حجم الطرف 0.7 مم.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-280-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 150,
       // oldPrice: 0,
        stock: 50,
        sku: '6693',
        images: [
      '/img-webp/School-tools/300.1.webp',
        ],
      },
     {
        id: 'st-280-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 150,
       // oldPrice: 0,
        stock: 50,
        sku: '6694',
        images: [
      '/img-webp/School-tools/300.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-281',
    name:'قلم حبر جاف قابل للسحب من نوع "تكنو"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 100,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/301.webp',
    ],
    gallery: [
      '/img-webp/School-tools/301.webp',
      '/img-webp/School-tools/301.1.webp',
      '/img-webp/School-tools/301.2.webp',
      '/img-webp/School-tools/301.3.webp',
    ],
    description: 'يضمن هيكلها المطاطي بالكامل قبضة محكمة وراحة مثالية. ينزلق حبر الجل الناعم والمضيء بسلاسة على الورق. رأس متوسط ​​متين 1 مم. طول الكتابة 300 متر. متوفرة بأربعة ألوان.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-281-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '5840',
        images: [
      '/img-webp/School-tools/301.1.webp',
        ],
      },
      {
        id: 'st-281-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '5841',
        images: [
      '/img-webp/School-tools/301.2.webp',
        ],
      },
     {
        id: 'st-281-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '5842',
        images: [
      '/img-webp/School-tools/301.4.webp',
        ],
      },
     {
        id: 'st-281-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '5843',
        images: [
      '/img-webp/School-tools/301.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-282',
    name: 'قلم حبر جاف من تريروا، 1.0 مم، "تكنو"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 30,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/302.webp',
    ],
    gallery: [
      '/img-webp/School-tools/302.webp',
      '/img-webp/School-tools/302.1.webp',
      '/img-webp/School-tools/302.2.webp',
      '/img-webp/School-tools/302.3.webp',
      '/img-webp/School-tools/302.4.webp',
    ],
    description: 'جسم مثلث الشكل، طرف متوسط ​​1.0 مم، طول الكتابة 900 متر، قبضة مريحة، صنع في الهند.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-282-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5144',
        images: [
      '/img-webp/School-tools/302.1.webp',
        ],
      },
      {
        id: 'st-282-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5145',
        images: [
      '/img-webp/School-tools/302.2.webp',
        ],
      },
     {
        id: 'st-282-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5147',
        images: [
      '/img-webp/School-tools/302.4.webp',
        ],
      },
     {
        id: 'st-282-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5146',
        images: [
      '/img-webp/School-tools/302.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-283',
    name: 'قلم حبر جاف أزرق من نوع "تكنو" من إنتاج شركة "ويف" برأس 1.0 مم',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 30,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/303.webp',
    ],
    gallery: [
      '/img-webp/School-tools/303.webp',
      '/img-webp/School-tools/303.1.webp',
      '/img-webp/School-tools/303.2.webp',
      '/img-webp/School-tools/303.3.webp',
      '/img-webp/School-tools/303.4.webp',
    ],
    description: '* حبر لزج لكتابة سلسة وسريعة. * سن متوسط ​​1.0 مم. * حبر هندي.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-283-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5140',
        images: [
      '/img-webp/School-tools/303.1.webp',
        ],
      },
      {
        id: 'st-283-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5141',
        images: [
      '/img-webp/School-tools/303.2.webp',
        ],
      },
     {
        id: 'st-283-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5143',
        images: [
      '/img-webp/School-tools/303.4.webp',
        ],
      },
     {
        id: 'st-283-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5142',
        images: [
      '/img-webp/School-tools/303.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-284',
    name: 'قلم حبر جاف فوكس "تكنو" 1.0 مم',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 30,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/304.webp',
    ],
    gallery: [
      '/img-webp/School-tools/304.webp',
      '/img-webp/School-tools/304.1.webp',
      '/img-webp/School-tools/304.2.webp',
      '/img-webp/School-tools/304.3.webp',
    ],
    description: '* حبر لزج لكتابة سلسة وسريعة. * سن متوسط ​​1.0 مم. * حبر هندي.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-284-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '9791',
        images: [
      '/img-webp/School-tools/304.webp',
        ],
      },
      {
        id: 'st-284-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '9794',
        images: [
      '/img-webp/School-tools/304.2.webp',
        ],
      },
     {
        id: 'st-284-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '9793',
        images: [
      '/img-webp/School-tools/304.2.webp',
        ],
      },
     {
        id: 'st-284-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '9792',
        images: [
      '/img-webp/School-tools/304.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-285',
    name: 'قلم حبر جاف نكست 1.0 مم من "تكنو"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 30,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/305.webp',
    ],
    gallery: [
      '/img-webp/School-tools/305.webp',
      '/img-webp/School-tools/305.1.webp',
      '/img-webp/School-tools/305.2.webp',
      '/img-webp/School-tools/305.3.webp',
      '/img-webp/School-tools/305.4.webp',
    ],
    description: 'جسم مثلث الشكل، طرف متوسط ​​1.0 مم، طول الكتابة 800 متر، قبضة مريحة، صنع في الهند.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-285-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5693',
        images: [
      '/img-webp/School-tools/305.1.webp',
        ],
      },
      {
        id: 'st-285-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5694',
        images: [
      '/img-webp/School-tools/305.2.webp',
        ],
      },
     {
        id: 'st-285-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5695',
        images: [
      '/img-webp/School-tools/305.4.webp',
        ],
      },
     {
        id: 'st-285-red',
        name: 'أحمر',
        optionLabel: 'اللون',
        price: 30,
       // oldPrice: 0,
        stock: 50,
        sku: '5696',
        images: [
      '/img-webp/School-tools/305.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-286',
    name: 'قلم حبر سائل فري رايتر إيريديوم أسود "مابيد" رقم المرجع: 222612',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'maped',
    price: 600,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/306.webp',
    ],
    gallery: [
      '/img-webp/School-tools/306.webp',
      '/img-webp/School-tools/306.1.webp',
      '/img-webp/School-tools/306.2.webp',
    ],
    description: 'جودة الكتابة: سن فولاذي مزود بطرف من الإيريديوم يضمن انزلاقًا ممتازًا وانتظامًا في الكتابة.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
      { label: 'ملاحظة ', value: 'إذا لم يكن الخيار المحدد (اللون أو النمط ...) متوفرًا، فسيتم تسليم خيار آخر (لون أو نمط ...) من نفس المرجع إليك' }
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-286-format1',
        name: ' 1 ',
        optionLabel: 'الشكل',
        price: 600,
       // oldPrice: 0,
        stock: 50,
        sku: '222612',
        images: [
      '/img-webp/School-tools/306.1.webp',
      '/img-webp/School-tools/306.2.webp',
        ],
      },
      {
        id: 'st-286-format2',
        name: ' 2 ',
        optionLabel: 'الشكل',
        price: 600,
       // oldPrice: 0,
        stock: 50,
        sku: '222612',
        images: [
      '/img-webp/School-tools/306.webp',
        ],
      },
    ],
  },

{
    id: 'st-287',
    name: 'قلم حبر جاف من نوع "تكنو" من إكزبرت، مقاس 1.0 مم',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 150,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/307.webp',
    ],
    gallery: [
      '/img-webp/School-tools/307.webp',
      '/img-webp/School-tools/307.1.webp',
      '/img-webp/School-tools/307.2.webp',
    ],
    description: 'مقبض مريح، طرف 1 مم، حبر جل، طول كتابة 250 متر، متوفر بلونين.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-287-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 150,
       // oldPrice: 0,
        stock: 50,
        sku: '5711',
        images: [
      '/img-webp/School-tools/307.1.webp',
        ],
      },
      {
        id: 'st-287-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 150,
       // oldPrice: 0,
        stock: 50,
        sku: '5711',
        images: [
      '/img-webp/School-tools/307.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-288',
    name: 'قلم حبر جاف سوينغ، 1.0 مم، لون فلورسنت "تكنو"، رقم المرجع: 4970',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 35,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/308.webp',
    ],
    gallery: [
      '/img-webp/School-tools/308.webp',
      '/img-webp/School-tools/308.1.webp',
      '/img-webp/School-tools/308.2.webp',
      '/img-webp/School-tools/308.3.webp',
      '/img-webp/School-tools/308.4.webp',
      '/img-webp/School-tools/308.5.webp',
      '/img-webp/School-tools/308.6.webp',
      '/img-webp/School-tools/308.7.webp',
    ],
    description: 'جسم مثلث الشكل، طرف متوسط ​​1.0 مم، طول الكتابة 800 متر، قبضة مريحة، صنع في الهند.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-288-light-blue',
        name: 'أزرق فاتح',
        optionLabel: 'اللون',
        price: 35,
       // oldPrice: 0,
        stock: 50,
        sku: '',
        images: [
      '/img-webp/School-tools/308.2.webp',
        ],
      },
      {
        id: 'st-288-brown',
        name: 'بني',
        optionLabel: 'اللون',
        price: 35,
       // oldPrice: 0,
        stock: 50,
        sku: '',
        images: [
      '/img-webp/School-tools/308.3.webp',
        ],
      },
      {
        id: 'st-288-orange',
        name: 'برتقالي',
        optionLabel: 'اللون',
        price: 35,
       // oldPrice: 0,
        stock: 50,
        sku: '',
        images: [
      '/img-webp/School-tools/308.4.webp',
        ],
      },
      {
        id: 'st-288-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 35,
       // oldPrice: 0,
        stock: 50,
        sku: '',
        images: [
      '/img-webp/School-tools/308.5.webp',
        ],
      },
      {
        id: 'st-288-light-green',
        name: 'أخضر فاتح',
        optionLabel: 'اللون',
        price: 35,
       // oldPrice: 0,
        stock: 50,
        sku: '',
        images: [
      '/img-webp/School-tools/308.6.webp',
        ],
      },
      {
        id: 'st-288-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 35,
       // oldPrice: 0,
        stock: 50,
        sku: '',
        images: [
      '/img-webp/School-tools/308.7.webp',
        ],
      },
    ],
  },

{
    id: 'st-289',
    name: 'قلم حبر جاف قابل للسحب من نوع I-PEN E، 0.7 مم، "تكنو"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-pens',
    brand: 'tecnowa',
    price: 100,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/309.webp',
    ],
    gallery: [
      '/img-webp/School-tools/309.webp',
      '/img-webp/School-tools/309.1.webp',
      '/img-webp/School-tools/309.2.webp',
    ],
    description: 'مقبض مريح، طرف 0.7 مم، حبر جل، طول الكتابة 800 متر.',
    specs: [
      { label: 'العدد', value: '1 قلم' },
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-289-black',
        name: 'أسود',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '5731',
        images: [
      '/img-webp/School-tools/309.1.webp',
        ],
      },
      {
        id: 'st-289-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 100,
       // oldPrice: 0,
        stock: 50,
        sku: '5730',
        images: [
      '/img-webp/School-tools/309.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-290',
    name: 'ممحاة زينوا بلس باستيل "مابيد"',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-erasers',
    brand: 'maped',
    price: 480,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/310.webp',
    ],
    gallery: [
      '/img-webp/School-tools/310.webp',
      '/img-webp/School-tools/310.1.webp',
      '/img-webp/School-tools/310.2.webp',
      '/img-webp/School-tools/310.3.webp',
    ],
    description: 'تصميم أنيق للغاية. غطاء حماية دوار: مطاط محمي بنسبة 100%.',
    specs: [
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-290-blue',
        name: 'أزرق',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 0,
        stock: 50,
        sku: '123211',
        images: [
      '/img-webp/School-tools/310.1.webp',
        ],
      },
      {
        id: 'st-290-purpel',
        name: 'بنفسجي',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 0,
        stock: 50,
        sku: '123211',
        images: [
      '/img-webp/School-tools/310.2.webp',
        ],
      },
      {
        id: 'st-290-pinck',
        name: 'وردي',
        optionLabel: 'اللون',
        price: 480,
       // oldPrice: 0,
        stock: 50,
        sku: '123211',
        images: [
      '/img-webp/School-tools/310.3.webp',
        ],
      },
    ],
  },

{
    id: 'st-291',
    name: 'ممحاة "MAPED" من سمايلينج بلانيت، معاد تدويرها من قبل مجلس رعاية الغابات (FSC)',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-erasers',
    brand: 'maped',
    price: 240,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/311.webp',
    ],
    gallery: [
      '/img-webp/School-tools/311.webp',
      '/img-webp/School-tools/311.1.webp',
      '/img-webp/School-tools/311.2.webp',
    ],
    description: 'تصميم أنيق للغاية. غطاء حماية دوار: مطاط محمي بنسبة 100%.',
    specs: [
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-291-brown',
        name: 'بني',
        optionLabel: 'اللون',
        price: 240,
       // oldPrice: 0,
        stock: 50,
        sku: '112521FM',
        images: [
      '/img-webp/School-tools/311.1.webp',
        ],
      },
      {
        id: 'st-291-green',
        name: 'أخضر',
        optionLabel: 'اللون',
        price: 240,
       // oldPrice: 0,
        stock: 50,
        sku: '112521FM',
        images: [
      '/img-webp/School-tools/311.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-292',
    name: 'ممحاة "MAPED" من سمايلينج بلانيت، معاد تدويرها من قبل مجلس رعاية الغابات (FSC)',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-erasers',
    brand: 'maped',
    price: 550,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/312.webp',
    ],
    gallery: [
      '/img-webp/School-tools/312.webp',
      '/img-webp/School-tools/312.1.webp',
      '/img-webp/School-tools/312.2.webp',
    ],
    description: 'مبراة أقلام نظيفة + ممحاة دوارة خالية من مادة PVC.',
    specs: [
    ],
    createdAt: '2024-08-20',
    variants: [
      {
        id: 'st-292-format1',
        name: ' 1 ',
        optionLabel: 'النمط',
        price: 550,
       // oldPrice: 0,
        stock: 50,
        sku: '049121',
        images: [
      '/img-webp/School-tools/312.1.webp',
        ],
      },
      {
        id: 'st-292-format2',
        name: ' 2 ',
        optionLabel: 'النمط',
        price: 550,
       // oldPrice: 0,
        stock: 50,
        sku: '049121',
        images: [
      '/img-webp/School-tools/312.2.webp',
        ],
      },
      {
        id: 'st-292-format3',
        name: ' 3 ',
        optionLabel: 'النمط',
        price: 550,
       // oldPrice: 0,
        stock: 50,
        sku: '049121',
        images: [
      '/img-webp/School-tools/312.2.webp',
        ],
      },
    ],
  },

{
    id: 'st-293',
    name: 'ممحاة تكنيك 300 "مابيد" رقم المرجع: 011301',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-erasers',
    brand: 'maped',
    price: 60,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/313.webp',
    ],
    gallery: [
      '/img-webp/School-tools/313.webp',
    ],
    description: 'ممحاة مبتكرة وممتعة تجمع بين التصميم المريح والجمال. جميع هذه الممحاة خالية من الفثالات، والعديد منها خالٍ من مادة PVC.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-294',
    name: 'ممحاة إسينشالز سوفت ميديوم "مابيد" رقم المرجع: 049411',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-erasers',
    brand: 'maped',
    price: 90,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/314.webp',
    ],
    gallery: [
      '/img-webp/School-tools/314.webp',
    ],
    description: 'ممحاة مبتكرة وممتعة تجمع بين التصميم المريح والجمال. جميع هذه الممحاة خالية من الفثالات، والعديد منها خالٍ من مادة PVC.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

{
    id: 'st-295',
    name: 'ممحاة TECHNIC 600 "MAPED" رقم المرجع: 011600',
    mainCategory: 'stationery',
    subCategory: 'sub-stat-erasers',
    brand: 'maped',
    price: 130,
    rating: 4.0,
    images: [
      '/img-webp/School-tools/315.webp',
    ],
    gallery: [
      '/img-webp/School-tools/315.webp',
    ],
    description: 'ممحاة كلاسيكية الشكل لتحقيق أقصى قدر من الكفاءة أو للاستخدامات التقنية. جميع هذه الممحاة خالية من الفثالات، والعديد منها خالٍ من مادة PVC. العرض: ٢١٫٨ مم، العمق: ١٢ مم، الارتفاع: ٦١ مم.',
    specs: [
    ],
    createdAt: '2024-08-20',
  },

















  // ── School Bags (stationery / bag collections) ────────────────────
  /* {
    id: 'bg-1',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/0.webp'],
    gallery: [
      '/img-webp/backpacks/0.1.webp',
      '/img-webp/backpacks/0.2.webp',
      '/img-webp/backpacks/0.3.webp',
      '/img-webp/backpacks/0.4.webp',
      '/img-webp/backpacks/0.5.webp',
      '/img-webp/backpacks/0.6.webp',
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
    {
    id: 'bg-2',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/1.webp'],
    gallery: [
      '/img-webp/backpacks/1.1.webp',
      '/img-webp/backpacks/1.2.webp',
      '/img-webp/backpacks/1.3.webp',
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
    {
    id: 'bg-3',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/2.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
    {
    id: 'bg-4',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/3.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
    {
    id: 'bg-5',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/4.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
      {
    id: 'bg-6',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/5.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
      {
    id: 'bg-7',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/6.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
      {
    id: 'bg-8',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/7.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
      {
    id: 'bg-9',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/8.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
      {
    id: 'bg-10',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/9.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
    {
    id: 'bg-11',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/10.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
      {
    id: 'bg-12',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/11.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
      {
    id: 'bg-13',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/12.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },
      {
    id: 'bg-14',
    name: 'حقيبة ستايل مدرسية',
    mainCategory: 'stationery',
    subCategory: 'other-stationery',
    brand: '',
    price: 120,
    oldPrice: 160,
    rating: 4.5,
    images: ['/img-webp/backpacks/13.webp'],
    gallery: [
    ],
    description: 'حقيبة ظهر أنيقة بتصميم عصري للطلاب.',
    specs: [{ label: 'المادة', value: 'بوليستر' }],
    stock: 30,
    bagCollection: 'style',
    createdAt: '2024-10-20',
  },



  // ── Books ───────────────────────────────────────────────────────
  {
    id: 'bk-1',
    name: 'كتاب التحضيري الشامل',
    mainCategory: 'books',
    subCategory: 'preschool',
    brand: 'tecnowa',
    price: 55,
    oldPrice: 75,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/8212372/pexels-photo-8212372.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'كتاب تحضيري شامل يغطي مهارات ما قبل المدرسة.',
    specs: [{ label: 'الصفحات', value: '120' }],
    createdAt: '2024-10-05',
  },
  {
    id: 'bk-2',
    name: 'حقيبة الابتدائي - الرياضيات',
    mainCategory: 'books',
    subCategory: 'primary',
    brand: 'alhilal',
    price: 40,
    rating: 4.5,
    images: [
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'كتاب الرياضيات للصف الأول الابتدائي بشرح مبسط.',
    specs: [{ label: 'الصف', value: 'الأول' }],
    createdAt: '2024-09-01',
  },
  {
    id: 'bk-3',
    name: 'مصحف Tajweed ملون',
    mainCategory: 'books',
    subCategory: 'mushafs',
    brand: 'alhilal',
    price: 65,
    oldPrice: 90,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/4308268/pexels-photo-4308268.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'مصحف ملون بأحكام التجويد واضحة.',
    specs: [{ label: 'الحجم', value: 'وسط' }],
    createdAt: '2024-10-12',
  },
  {
    id: 'bk-4',
    name: 'موسوعة العلوم للأطفال',
    mainCategory: 'books',
    subCategory: 'encyclopedias',
    brand: 'roku',
    price: 95,
    rating: 4.7,
    images: [
      '',
    ],
    description: 'موسوعة علمية مصورة للأطفال.',
    specs: [{ label: 'المجلدات', value: '1' }],
    createdAt: '2024-08-10',
  },
  {
    id: 'bk-5',
    name: 'قصص ما قبل النوم',
    mainCategory: 'books',
    subCategory: 'kids-stories',
    brand: 'roku',
    price: 35,
    oldPrice: 50,
    rating: 4.4,
    images: [
      'https://images.pexels.com/photos/8212372/pexels-photo-8212372.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'مجموعة قصص ممتعة قبل النوم.',
    specs: [{ label: 'القصص', value: '10' }],
    createdAt: '2024-09-20',
  },



  // ── Textbooks & References ───────────────────────────────────────
  {
    id: 'tb-1',
    name: 'كتاب اللغة العربية - الابتدائي',
    mainCategory: 'textbooks',
    subCategory: 'primary-textbooks',
    brand: 'alhilal',
    price: 30,
    oldPrice: 45,
    rating: 4.5,
    images: [
      '',
    ],
    description: 'كتاب اللغة العربية للسنة الأولى ابتدائي بشرح مبسط وتمارين متنوعة.',
    specs: [{ label: 'الصف', value: 'الأول ابتدائي' }],
    createdAt: '2024-09-05',
  },
  {
    id: 'tb-2',
    name: 'كتاب الرياضيات - المتوسط',
    mainCategory: 'textbooks',
    subCategory: 'middle-textbooks',
    brand: 'tecnowa',
    price: 50,
    rating: 4.7,
    images: [
      '',
    ],
    description: 'كتاب الرياضيات للسنة الأولى متوسط مع حلول التمارين.',
    specs: [{ label: 'الصف', value: 'الأول متوسط' }],
    createdAt: '2024-09-10',
  },
  {
    id: 'tb-3',
    name: 'مراجع الفيزياء - الثانوي',
    mainCategory: 'textbooks',
    subCategory: 'secondary-textbooks',
    brand: 'alhilal',
    price: 70,
    oldPrice: 95,
    rating: 4.8,
    images: [
      '',
    ],
    description: 'مرجع شامل في الفيزياء لطلاب الثانوية مع تمارين محلولة.',
    specs: [{ label: 'الصفحات', value: '320' }],
    createdAt: '2024-09-15',
  },
  {
    id: 'tb-4',
    name: 'موسوعة المراجع العامة',
    mainCategory: 'textbooks',
    subCategory: 'references',
    brand: 'roku',
    price: 120,
    rating: 4.6,
    images: [
      '',
    ],
    description: 'موسوعة مراجع عامة تغطي مختلف المواد والتخصصات.',
    specs: [{ label: 'المجلدات', value: '3' }],
    createdAt: '2024-08-25',
  },
  {
    id: 'tb-5',
    name: 'كتاب العلوم الطبيعية - المتوسط',
    mainCategory: 'textbooks',
    subCategory: 'middle-textbooks',
    brand: 'tecnowa',
    price: 45,
    oldPrice: 60,
    rating: 4.4,
    images: [
      '',
    ],
    description: 'كتاب العلوم الطبيعية للسنة الثانية متوسط بصور توضيحية.',
    specs: [{ label: 'الصف', value: 'الثاني متوسط' }],
    createdAt: '2024-09-22',
  },

  // ── Toys ────────────────────────────────────────────────────────
  {
    id: 'ty-1',
    name: 'مكعبات تعليمية ملونة',
    mainCategory: 'toys',
    subCategory: 'educational',
    brand: 'roku',
    price: 70,
    oldPrice: 95,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/3661193/pexels-photo-3661193.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'مكعبات تعليمية تنمي مهارات الطفل.',
    specs: [{ label: 'القطع', value: '50' }],
    createdAt: '2024-10-08',
  },
  {
    id: 'ty-2',
    name: 'دب محشو كبير',
    mainCategory: 'toys',
    subCategory: 'plush',
    brand: 'tecnowa',
    price: 50,
    rating: 4.5,
    images: [
      'https://images.pexels.com/photos/268840/pexels-photo-268840.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'دب محشو ناعم وحضين.',
    specs: [{ label: 'الارتفاع', value: '50 سم' }],
    createdAt: '2024-09-25',
  },
  {
    id: 'ty-3',
    name: 'سيارة تحكم عن بعد',
    mainCategory: 'toys',
    subCategory: 'remote-control',
    brand: 'tecnowa',
    price: 120,
    oldPrice: 160,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'سيارة سرعة عالية بتحكم عن بعد.',
    specs: [{ label: 'السرعة', value: '15 كم/س' }],
    createdAt: '2024-10-15',
  },

  // ── Gifts ───────────────────────────────────────────────────────
  {
    id: 'gf-1',
    name: 'علبة هدايا فاخرة',
    mainCategory: 'gifts',
    subCategory: 'boxes',
    brand: 'alhilal',
    price: 60,
    oldPrice: 80,
    rating: 4.4,
    images: [
      'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'علبة هدايا أنيقة بتصميم فاخر.',
    specs: [{ label: 'الحجم', value: 'متوسط' }],
    createdAt: '2024-10-02',
  },
  {
    id: 'gf-2',
    name: 'تحفة ديكور خشبية',
    mainCategory: 'gifts',
    subCategory: 'decor',
    brand: 'roku',
    price: 110,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'تحفة ديكور خشبية مصنوعة يدويًا.',
    specs: [{ label: 'المادة', value: 'خشب' }],
    createdAt: '2024-09-18',
  },

  // ── Electronics ─────────────────────────────────────────────────
  {
    id: 'el-1',
    name: 'هاتف ذكي 128GB',
    mainCategory: 'electronics',
    subCategory: 'phones',
    brand: 'tecnowa',
    price: 899,
    oldPrice: 1199,
    rating: 4.7,
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    gallery: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'هاتف ذكي بكاميرا عالية الدقة وشاشة AMOLED.',
    specs: [
      { label: 'التخزين', value: '128GB' },
      { label: 'الشاشة', value: '6.5 بوصة' },
    ],
    createdAt: '2024-10-10',
  },
  
  {
    id: 'el-2',
    name: 'لابتوب 15 بوصة i7',
    mainCategory: 'electronics',
    subCategory: 'laptops',
    brand: 'roku',
    price: 3499,
    oldPrice: 3999,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    gallery: [
      'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'لابتوب عالي الأداء بمعالج i7 وذاكرة 16GB.',
    specs: [
      { label: 'المعالج', value: 'i7' },
      { label: 'الذاكرة', value: '16GB' },
    ],
    createdAt: '2024-10-14',
  },
  {
    id: 'el-3',
    name: 'سماعات لاسلكية Bluetooth',
    mainCategory: 'electronics',
    subCategory: 'headphones',
    brand: 'tecnowa',
    price: 150,
    oldPrice: 200,
    rating: 4.5,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'سماعات لاسلكية بعزل ضوضاء نشط.',
    specs: [{ label: 'البطارية', value: '30 ساعة' }],
    createdAt: '2024-09-30',
  },

  // ── Aprons ──────────────────────────────────────────────────────
  
  {
    id: 'ap-1',
    name: 'مئزر أطفال مقاوم للبقع',
    mainCategory: 'aprons',
    subCategory: 'kids-aprons',
    brand: 'alhilal',
    price: 35,
    oldPrice: 50,
    rating: 4.3,
    images: [
      'https://images.pexels.com/photos/4210511/pexels-photo-4210511.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'مئزر أطفال مقاوم للبقع بألوان مبهجة.',
    specs: [{ label: 'المقاس', value: 'موحد' }],
    createdAt: '2024-10-03',
  },
  {
    id: 'ap-2',
    name: 'مئزر كبار جلد',
    mainCategory: 'aprons',
    subCategory: 'adult-aprons',
    brand: 'alhilal',
    price: 75,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    description: 'مئزر كبار من الجلد الطبيعي.',
    specs: [{ label: 'المادة', value: 'جلد' }],
    createdAt: '2024-09-12',
  },





*/

];



















































































































// ── O(1) lookup maps (built once at module load) ───────────────────

const productByIdMap = new Map<string, Product>(products.map((p) => [p.id, p]));

const variantByIdMap = new Map<string, ProductVariant>();
for (const p of products) {
  if (p.variants) {
    for (const v of p.variants) variantByIdMap.set(v.id, v);
  }
}

const productsByCategoryMap = new Map<MainCategorySlug, Product[]>();
for (const p of products) {
  const arr = productsByCategoryMap.get(p.mainCategory);
  if (arr) arr.push(p);
  else productsByCategoryMap.set(p.mainCategory, [p]);
}

let _offerProductsCache: Product[] | null = null;

// ── Derived helpers (auto-calculated, no manual edits) ─────────────

/** Discount percentage from oldPrice vs price. 0 when no oldPrice. */
export function discountPercent(p: Product): number {
  if (!p.oldPrice || p.oldPrice <= p.price) return 0;
  return Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
}

/** Products flagged as offers (highest discounts first). Cached after first call. */
export function offerProducts(): Product[] {
  if (_offerProductsCache) return _offerProductsCache;
  _offerProductsCache = products
    .filter((p) => discountPercent(p) > 0)
    .sort((a, b) => discountPercent(b) - discountPercent(a));
  return _offerProductsCache;
}

/** Products for a given main category. Uses pre-built map for O(1) lookup. */
export function productsByCategory(slug: MainCategorySlug): Product[] {
  return productsByCategoryMap.get(slug) ?? [];
}

/** Products for a given sub-category within a main category. */
export function productsBySubCategory(
  main: MainCategorySlug,
  sub: string,
): Product[] {
  return products.filter(
    (p) => p.mainCategory === main && p.subCategory === sub,
  );
}

/** Products for a given brand within a main category. */
export function productsByBrand(
  main: MainCategorySlug,
  brand: string,
): Product[] {
  return products.filter(
    (p) => p.mainCategory === main && p.brand === brand,
  );
}

/** Products for a given sub-category matching any of the given brands (multi-select). */
export function productsBySubCategoryAndBrands(
  main: MainCategorySlug,
  sub: string,
  brandSlugs: string[],
): Product[] {
  return products.filter(
    (p) =>
      p.mainCategory === main &&
      p.subCategory === sub &&
      brandSlugs.includes(p.brand),
  );
}

/** All brands that have products in a given sub-category. */
export function brandsInSubCategory(
  main: MainCategorySlug,
  sub: string,
): string[] {
  return [...new Set(
    products
      .filter((p) => p.mainCategory === main && p.subCategory === sub)
      .map((p) => p.brand),
  )];
}

/** Similar products: same main category, excluding the current product. */
/**
 * Similar products: tiered matching for best relevance, then expanded to fill.
 * 1) same sub-category (strongest match)
 * 2) same brand within the same main category
 * 3) rest of the same main category
 * The current product is always excluded. No artificial cap — all matches are
 * returned so the grid stays rich when many products qualify.
 */
export function similarProducts(product: Product): Product[] {
  // If the current product is not itself a bag-collection product, exclude
  // bag-collection products from the similar list so they never leak into
  // sub-category "similar products" sections.
  const excludeBagCollections = product.bagCollection === undefined;
  const notBagCollection = (p: Product) =>
    !excludeBagCollections || p.bagCollection === undefined;

  const sameSub = products.filter(
    (p) =>
      p.id !== product.id &&
      p.mainCategory === product.mainCategory &&
      p.subCategory === product.subCategory &&
      notBagCollection(p),
  );
  const sameBrand = products.filter(
    (p) =>
      p.id !== product.id &&
      p.mainCategory === product.mainCategory &&
      p.brand === product.brand &&
      notBagCollection(p) &&
      !sameSub.includes(p),
  );
  const rest = products.filter(
    (p) =>
      p.id !== product.id &&
      p.mainCategory === product.mainCategory &&
      notBagCollection(p) &&
      !sameSub.includes(p) &&
      !sameBrand.includes(p),
  );
  return [...sameSub, ...sameBrand, ...rest]
};

/** Lowest price across variants, or the product's own price. */
export function minVariantPrice(product: Product): number {
  if (!product.variants || product.variants.length === 0) return product.price;
  return Math.min(...product.variants.map((v) => v.price));
}

/** Highest old price across variants, or the product's own old price. */
export function maxVariantOldPrice(product: Product): number | undefined {
  if (!product.variants || product.variants.length === 0) return product.oldPrice;
  const oldPrices = product.variants.map((v) => v.oldPrice).filter(Boolean) as number[];
  if (oldPrices.length === 0) return product.oldPrice;
  return Math.max(...oldPrices);
}

/** Whether any variant is in stock (or product stock if no variants). */
export function hasVariantInStock(product: Product): boolean {
  if (!product.variants || product.variants.length === 0) {
    return product.stock === undefined || product.stock > 0;
  }
  return product.variants.some((v) => v.stock === undefined || v.stock > 0);
}

/** Display name for a main category slug (language-aware). */
export function mainCategoryName(slug: MainCategorySlug): string {
  return i18n.t(`data.mainCategory.${slug}`);
}

/** Products for a given bag collection slug. */
export function productsByBagCollection(slug: string): Product[] {
  if (slug === 'all') {
    return products.filter((p) => p.bagCollection !== undefined);
  }
  return products.filter((p) => p.bagCollection === slug);
}

/** Find a product by id. O(1) via pre-built map. */
export function getProductById(id: string): Product | undefined {
  return productByIdMap.get(id);
}

/** Find a variant by id across all products. O(1) via pre-built map. */
export function findVariant(variantId: string): ProductVariant | undefined {
  return variantByIdMap.get(variantId);
}

/** All gallery images for a product (gallery array if present, otherwise images). */
export function productGallery(product: Product, variant?: ProductVariant): string[] {
  if (variant?.images && variant.images.length > 0) return variant.images;
  return product.gallery && product.gallery.length > 0
    ? product.gallery
    : product.images;
}