// All 58 Algerian wilayas (provinces) for the checkout form, each with its own
// home-delivery shipping cost in Algerian Dinar. This is the single source of
// truth for wilaya delivery pricing — components read from here, never hardcode.

export interface WilayaDelivery {
  name: string;
  home: number; // home-delivery cost in DA
}

export const wilayaDelivery: WilayaDelivery[] = [
  { name: 'أدرار', home: 600 },
  { name: 'الشلف', home: 450 },
  { name: 'الأغواط', home: 450 },
  { name: 'أم البواقي', home: 400 },
  { name: 'باتنة', home: 400 },
  { name: 'بجاية', home: 400 },
  { name: 'بسكرة', home: 400 },
  { name: 'بشار', home: 550 },
  { name: 'البليدة', home: 450 },
  { name: 'البويرة', home: 450 },
  { name: 'تمنراست', home: 600 },
  { name: 'تبسة', home: 400 },
  { name: 'تلمسان', home: 500 },
  { name: 'تيارت', home: 450 },
  { name: 'تيزي وزو', home: 450 },
  { name: 'الجزائر', home: 450 },
  { name: 'الجلفة', home: 450 },
  { name: 'جيجل', home: 400 },
  { name: 'سطيف', home: 400 },
  { name: 'سعيدة', home: 500 },
  { name: 'سكيكدة', home: 400 },
  { name: 'سيدي بلعباس', home: 500 },
  { name: 'عنابة', home: 400 },
  { name: 'قالمة', home: 300 },
  { name: 'قسنطينة', home: 400 },
  { name: 'المدية', home: 450 },
  { name: 'مستغانم', home: 450 },
  { name: 'المسيلة', home: 400 },
  { name: 'معسكر', home: 450 },
  { name: 'ورقلة', home: 500 },
  { name: 'وهران', home: 450 },
  { name: 'البيض', home: 500 },
  { name: 'برج بوعريريج', home: 400 },
  { name: 'بومرداس', home: 450 },
  { name: 'الطارف', home: 400 },
  { name: 'تيسمسيلت', home: 450 },
  { name: 'الوادي', home: 450 },
  { name: 'خنشلة', home: 400 },
  { name: 'سوق أهراس', home: 400 },
  { name: 'تيبازة', home: 450 },
  { name: 'ميلة', home: 400 },
  { name: 'عين الدفلى', home: 450 },
  { name: 'النعامة', home: 500 },
  { name: 'عين تموشنت', home: 500 },
  { name: 'غرداية', home: 500 },
  { name: 'غليزان', home: 450 },
  { name: 'تيميمون', home: 550 },
  { name: 'أولاد جلال', home: 400 },
  { name: 'بني عباس', home: 550 },
  { name: 'إن صالح', home: 550 },
  { name: 'تقرت', home: 450 },
  { name: 'المغير', home: 450 },
  { name: 'المنيعة', home: 500 },
];

export const algerianWilayas: string[] = wilayaDelivery.map((w) => w.name);

// Look up the home-delivery cost for a wilaya by name. Returns undefined when
// the wilaya is not selected or unknown — NOT 0 — so callers can distinguish
// "unknown" from "free".
export function getWilayaShipping(wilaya: string | null | undefined): number | undefined {
  if (!wilaya) return undefined;
  return wilayaDelivery.find((w) => w.name === wilaya)?.home;
}
