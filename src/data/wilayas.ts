// All 58 Algerian wilayas (provinces) for the checkout form, each with its own
// office-delivery and home-delivery shipping cost in Algerian Dinar. This is the
// single source of truth for wilaya delivery pricing — components read from
// here, never hardcode. To change prices, edit the numbers below only.

export type DeliveryType = 'office' | 'home';

export interface WilayaDelivery {
  name: string;
  officeDeliveryPrice: number; // office-delivery cost in DA
  homeDeliveryPrice: number; // home-delivery cost in DA
}

export const wilayaDelivery: WilayaDelivery[] = [
  { name: 'أدرار', officeDeliveryPrice: 600, homeDeliveryPrice: 1200 },
  { name: 'الشلف', officeDeliveryPrice: 450, homeDeliveryPrice: 900 },
  { name: 'الأغواط', officeDeliveryPrice: 450, homeDeliveryPrice: 900 },
  { name: 'أم البواقي', officeDeliveryPrice: 400, homeDeliveryPrice: 600 },
  { name: 'باتنة', officeDeliveryPrice: 400, homeDeliveryPrice: 650 },
  { name: 'بجاية', officeDeliveryPrice: 400, homeDeliveryPrice: 750 },
  { name: 'بسكرة', officeDeliveryPrice: 400, homeDeliveryPrice: 700 },
  { name: 'بشار', officeDeliveryPrice: 550, homeDeliveryPrice: 1150 },
  { name: 'البليدة', officeDeliveryPrice: 450, homeDeliveryPrice: 750 },
  { name: 'البويرة', officeDeliveryPrice: 450, homeDeliveryPrice: 800 },
  { name: 'تمنراست', officeDeliveryPrice: 600, homeDeliveryPrice: 1250 },
  { name: 'تبسة', officeDeliveryPrice: 400, homeDeliveryPrice: 650 },
  { name: 'تلمسان', officeDeliveryPrice: 500, homeDeliveryPrice: 950 },
  { name: 'تيارت', officeDeliveryPrice: 450, homeDeliveryPrice: 900 },
  { name: 'تيزي وزو', officeDeliveryPrice: 450, homeDeliveryPrice: 800 },
  { name: 'الجزائر', officeDeliveryPrice: 450, homeDeliveryPrice: 750 },
  { name: 'الجلفة', officeDeliveryPrice: 450, homeDeliveryPrice: 850 },
  { name: 'جيجل', officeDeliveryPrice: 400, homeDeliveryPrice: 700 },
  { name: 'سطيف', officeDeliveryPrice: 400, homeDeliveryPrice: 700 },
  { name: 'سعيدة', officeDeliveryPrice: 500, homeDeliveryPrice: 900 },
  { name: 'سكيكدة', officeDeliveryPrice: 400, homeDeliveryPrice: 650 },
  { name: 'سيدي بلعباس', officeDeliveryPrice: 500, homeDeliveryPrice: 950 },
  { name: 'عنابة', officeDeliveryPrice: 400, homeDeliveryPrice: 600 },
  { name: 'قالمة', officeDeliveryPrice: 300, homeDeliveryPrice: 450 },
  { name: 'قسنطينة', officeDeliveryPrice: 400, homeDeliveryPrice: 600 },
  { name: 'المدية', officeDeliveryPrice: 450, homeDeliveryPrice: 800 },
  { name: 'مستغانم', officeDeliveryPrice: 450, homeDeliveryPrice: 900 },
  { name: 'المسيلة', officeDeliveryPrice: 400, homeDeliveryPrice: 800 },
  { name: 'معسكر', officeDeliveryPrice: 450, homeDeliveryPrice: 900 },
  { name: 'ورقلة', officeDeliveryPrice: 500, homeDeliveryPrice: 900 },
  { name: 'وهران', officeDeliveryPrice: 450, homeDeliveryPrice: 850 },
  { name: 'البيض', officeDeliveryPrice: 500, homeDeliveryPrice: 1000 },
  { name: 'برج بوعريريج', officeDeliveryPrice: 400, homeDeliveryPrice: 750 },
  { name: 'بومرداس', officeDeliveryPrice: 450, homeDeliveryPrice: 750 },
  { name: 'الطارف', officeDeliveryPrice: 400, homeDeliveryPrice: 600 },
  { name: 'تيسمسيلت', officeDeliveryPrice: 450, homeDeliveryPrice: 850 },
  { name: 'الوادي', officeDeliveryPrice: 450, homeDeliveryPrice: 800 },
  { name: 'خنشلة', officeDeliveryPrice: 400, homeDeliveryPrice: 650 },
  { name: 'سوق أهراس', officeDeliveryPrice: 400, homeDeliveryPrice: 600 },
  { name: 'تيبازة', officeDeliveryPrice: 450, homeDeliveryPrice: 800 },
  { name: 'ميلة', officeDeliveryPrice: 400, homeDeliveryPrice: 700 },
  { name: 'عين الدفلى', officeDeliveryPrice: 450, homeDeliveryPrice: 800 },
  { name: 'النعامة', officeDeliveryPrice: 500, homeDeliveryPrice: 1000 },
  { name: 'عين تموشنت', officeDeliveryPrice: 500, homeDeliveryPrice: 950 },
  { name: 'غرداية', officeDeliveryPrice: 500, homeDeliveryPrice: 950 },
  { name: 'غليزان', officeDeliveryPrice: 450, homeDeliveryPrice: 900 },
  { name: 'تيميمون', officeDeliveryPrice: 550, homeDeliveryPrice: 1150 },
  { name: 'أولاد جلال', officeDeliveryPrice: 400, homeDeliveryPrice: 800 },
  { name: 'بني عباس', officeDeliveryPrice: 550, homeDeliveryPrice: 1150 },
  { name: 'إن صالح', officeDeliveryPrice: 550, homeDeliveryPrice: 1300 },
  { name: 'تقرت', officeDeliveryPrice: 450, homeDeliveryPrice: 850 },
  { name: 'جانت', officeDeliveryPrice: 600, homeDeliveryPrice: 1250 },
  { name: 'المغير', officeDeliveryPrice: 450, homeDeliveryPrice: 850 },
  { name: 'المنيعة', officeDeliveryPrice: 450, homeDeliveryPrice: 1050 },
];

export const algerianWilayas: string[] = wilayaDelivery.map((w) => w.name);

// Look up the delivery cost for a wilaya by name and delivery type. Returns
// undefined when the wilaya is not selected or unknown — NOT 0 — so callers can
// distinguish "unknown" from "free".
export function getWilayaShipping(
  wilaya: string | null | undefined,
  deliveryType: DeliveryType = 'office',
): number | undefined {
  if (!wilaya) return undefined;
  const entry = wilayaDelivery.find((w) => w.name === wilaya);
  if (!entry) return undefined;
  return deliveryType === 'home' ? entry.homeDeliveryPrice : entry.officeDeliveryPrice;
}
