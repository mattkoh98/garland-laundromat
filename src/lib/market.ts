export type MarketKey = "san-antonio" | "garland";

type MarketConfig = {
  key: MarketKey;
  name: string;
  cityState: string;
  addressLine1: string;
  addressLine2: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneHref: string;
  mapQuery: string;
};

export const markets: Record<MarketKey, MarketConfig> = {
  "san-antonio": {
    key: "san-antonio",
    name: "San Antonio",
    cityState: "San Antonio, TX",
    addressLine1: "107 Latch Dr #110",
    addressLine2: "San Antonio, TX 78213",
    fullAddress: "107 Latch Dr #110, San Antonio, TX 78213",
    phoneDisplay: "(210) 257-9402",
    phoneHref: "+12102579402",
    mapQuery: "107+Latch+Dr+%23110,+San+Antonio,+TX+78213",
  },
  garland: {
    key: "garland",
    name: "Garland",
    cityState: "Garland, TX",
    addressLine1: "2006 W Buckingham Rd",
    addressLine2: "Garland, TX 75042",
    fullAddress: "2006 W Buckingham Rd, Garland, TX 75042",
    phoneDisplay: "(469) 304-0278",
    phoneHref: "+14693040278",
    mapQuery: "2006+W+Buckingham+Rd,+Garland,+TX+75042",
  },
};

export const getMarketConfig = (market?: string): MarketConfig => {
  if (market === "garland") return markets.garland;
  return markets["san-antonio"];
};

