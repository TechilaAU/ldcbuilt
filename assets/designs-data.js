/* ------------------------------------------------------------------
   LDC Built — design catalogue
   Generated from the AREI concept sets supplied 31 Aug 2026.
   23 series / 77 plan variants.

   A "design" is a SERIES (e.g. Kensington). Each series holds one or
   more VARIANTS — the size/layout options within it. Series-level
   fields (bedsMin/bedsMax, areaMinM2/areaMaxM2 ...) are pre-rolled so
   the index page can filter without walking every variant.

   Names flagged nameProposed:true are placeholders — edit the name
   here and every page that reads this file follows.

   Pricing is deliberately absent. Do not reintroduce "From $" — LDC
   quotes per site.
   ------------------------------------------------------------------ */

var LDC_FILTERS = {
  "collection": [
    {
      "value": "all",
      "label": "All collections"
    },
    {
      "value": "single-storey",
      "label": "Single Storey"
    },
    {
      "value": "double-storey",
      "label": "Double Storey"
    },
    {
      "value": "acreage",
      "label": "Acreage"
    },
    {
      "value": "split-level",
      "label": "Split Level"
    },
    {
      "value": "duplex",
      "label": "Duplex & Dual Living"
    }
  ],
  "beds": [
    {
      "value": "all",
      "label": "Any"
    },
    {
      "value": "3",
      "label": "3"
    },
    {
      "value": "4",
      "label": "4"
    },
    {
      "value": "5",
      "label": "5+"
    }
  ],
  "baths": [
    {
      "value": "all",
      "label": "Any"
    },
    {
      "value": "2",
      "label": "2"
    },
    {
      "value": "3",
      "label": "3+"
    }
  ],
  "cars": [
    {
      "value": "all",
      "label": "Any"
    },
    {
      "value": "1",
      "label": "1"
    },
    {
      "value": "2",
      "label": "2"
    },
    {
      "value": "3",
      "label": "3+"
    }
  ],
  "storeys": [
    {
      "value": "all",
      "label": "Any"
    },
    {
      "value": "1",
      "label": "Single"
    },
    {
      "value": "2",
      "label": "Double"
    }
  ],
  "size": [
    {
      "value": "all",
      "label": "Any size"
    },
    {
      "value": "under-200",
      "label": "Under 200m\u00b2"
    },
    {
      "value": "200-250",
      "label": "200\u2013250m\u00b2"
    },
    {
      "value": "250-300",
      "label": "250\u2013300m\u00b2"
    },
    {
      "value": "300-350",
      "label": "300\u2013350m\u00b2"
    },
    {
      "value": "350-plus",
      "label": "350m\u00b2+"
    }
  ],
  "lot": [
    {
      "value": "all",
      "label": "Any lot"
    },
    {
      "value": "10m",
      "label": "10m"
    },
    {
      "value": "12-5m",
      "label": "12.5m"
    },
    {
      "value": "14m",
      "label": "14m"
    },
    {
      "value": "16m",
      "label": "16m"
    },
    {
      "value": "18m",
      "label": "18m"
    },
    {
      "value": "20m",
      "label": "20m"
    },
    {
      "value": "20m-plus",
      "label": "20m+"
    }
  ]
};

var LDC_DESIGNS = [
  {
    "slug": "kensington",
    "name": "Kensington",
    "nameProposed": false,
    "seriesCode": "SERIES 1 ASA",
    "collection": "single-storey",
    "collectionLabel": "Single Storey",
    "storeys": 1,
    "variantCount": 5,
    "areaMinM2": 212.0,
    "areaMaxM2": 282.6,
    "bedsMin": 3,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 3,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 16.5,
    "facades": [
      {
        "name": "Standard",
        "slug": "standard",
        "src": "assets/designs/kensington/facades/standard.webp"
      },
      {
        "name": "Knockwood",
        "slug": "knockwood",
        "src": "assets/designs/kensington/facades/knockwood.webp"
      },
      {
        "name": "Rock",
        "slug": "rock",
        "src": "assets/designs/kensington/facades/rock.webp"
      }
    ],
    "heroImage": "assets/designs/kensington/facades/standard.webp",
    "heroType": "render",
    "filters": {
      "collection": "single-storey",
      "storeys": [
        1
      ],
      "beds": [
        3,
        4
      ],
      "baths": [
        2,
        3
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "200-250",
        "250-300"
      ],
      "lotBands": [
        "18m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 1 ASA1",
        "slug": "kensington-212",
        "name": "Kensington 212",
        "totalM2": 212.0,
        "livingM2": 155.0,
        "garageM2": 40.1,
        "alfrescoM2": 13.3,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.53,
        "depthM": 18.65,
        "minLotWidthM": 16.5,
        "lotWidthVerified": false,
        "rooms": [
          "ACTIVITY",
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "RETREAT",
          "WIR"
        ],
        "planPdf": "assets/plans/kensington/kensington-212-concept-set.pdf",
        "planImages": [
          "assets/designs/kensington/kensington-212-floor.webp"
        ],
        "view3d": "assets/designs/kensington/kensington-212-3d.webp"
      },
      {
        "code": "SERIES 1 ASA2",
        "slug": "kensington-219",
        "name": "Kensington 219",
        "totalM2": 219.4,
        "livingM2": 152.7,
        "garageM2": 39.7,
        "alfrescoM2": 23.5,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.83,
        "depthM": 19.32,
        "minLotWidthM": 16.5,
        "lotWidthVerified": false,
        "rooms": [
          "ACTIVITY",
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "STUDY",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/kensington/kensington-219-concept-set.pdf",
        "planImages": [
          "assets/designs/kensington/kensington-219-floor.webp"
        ],
        "view3d": "assets/designs/kensington/kensington-219-3d.webp"
      },
      {
        "code": "SERIES 1 ASA3",
        "slug": "kensington-220",
        "name": "Kensington 220",
        "totalM2": 220.1,
        "livingM2": 161.9,
        "garageM2": 39.6,
        "alfrescoM2": 15.1,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.95,
        "depthM": 19.72,
        "minLotWidthM": 16.5,
        "lotWidthVerified": false,
        "rooms": [
          "ACTIVITY",
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "STUDY",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/kensington/kensington-220-concept-set.pdf",
        "planImages": [
          "assets/designs/kensington/kensington-220-floor.webp"
        ],
        "view3d": "assets/designs/kensington/kensington-220-3d.webp"
      },
      {
        "code": "SERIES 1 ASA4",
        "slug": "kensington-256",
        "name": "Kensington 256",
        "totalM2": 256.0,
        "livingM2": 189.6,
        "garageM2": 40.9,
        "alfrescoM2": 22.0,
        "beds": 4,
        "baths": 3,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 15.24,
        "depthM": 20.32,
        "minLotWidthM": 17.0,
        "lotWidthVerified": false,
        "rooms": [
          "ACTIVITY",
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "STUDY",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/kensington/kensington-256-concept-set.pdf",
        "planImages": [
          "assets/designs/kensington/kensington-256-floor.webp"
        ],
        "view3d": "assets/designs/kensington/kensington-256-3d.webp"
      },
      {
        "code": "SERIES 1 ASA5",
        "slug": "kensington-283",
        "name": "Kensington 283",
        "totalM2": 282.6,
        "livingM2": 213.6,
        "garageM2": 41.4,
        "alfrescoM2": 24.1,
        "beds": 4,
        "baths": 3,
        "powder": 0,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 15.34,
        "depthM": 22.69,
        "minLotWidthM": 17.0,
        "lotWidthVerified": false,
        "rooms": [
          "ACTIVITY",
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "STUDY",
          "THEATRE",
          "WIR"
        ],
        "planPdf": "assets/plans/kensington/kensington-283-concept-set.pdf",
        "planImages": [
          "assets/designs/kensington/kensington-283-floor.webp"
        ],
        "view3d": "assets/designs/kensington/kensington-283-3d.webp"
      }
    ]
  },
  {
    "slug": "oakely",
    "name": "Oakely",
    "nameProposed": false,
    "seriesCode": "SERIES 9 ASG",
    "collection": "single-storey",
    "collectionLabel": "Single Storey",
    "storeys": 1,
    "variantCount": 6,
    "areaMinM2": 190.6,
    "areaMaxM2": 311.7,
    "bedsMin": 3,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 3,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 14.0,
    "facades": [
      {
        "name": "Rock",
        "slug": "rock",
        "src": "assets/designs/oakely/facades/rock.webp"
      }
    ],
    "heroImage": "assets/designs/oakely/facades/rock.webp",
    "heroType": "render",
    "filters": {
      "collection": "single-storey",
      "storeys": [
        1
      ],
      "beds": [
        3,
        4
      ],
      "baths": [
        2,
        3
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "200-250",
        "300-350",
        "under-200"
      ],
      "lotBands": [
        "14m",
        "16m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 9 ASG6",
        "slug": "oakely-191",
        "name": "Oakely 191",
        "totalM2": 190.6,
        "livingM2": 135.0,
        "garageM2": 41.4,
        "alfrescoM2": 12.0,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.09,
        "depthM": 18.68,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "RETREAT",
          "STORE",
          "WIR"
        ],
        "planPdf": "assets/plans/oakely/oakely-191-concept-set.pdf",
        "planImages": [
          "assets/designs/oakely/oakely-191-floor.webp"
        ],
        "view3d": "assets/designs/oakely/oakely-191-3d.webp"
      },
      {
        "code": "SERIES 9 ASG1",
        "slug": "oakely-229",
        "name": "Oakely 229",
        "totalM2": 229.2,
        "livingM2": 166.5,
        "garageM2": 41.9,
        "alfrescoM2": 18.7,
        "beds": 3,
        "baths": 3,
        "powder": 2,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 12.36,
        "depthM": 23.19,
        "minLotWidthM": 14.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "RETREAT",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/oakely/oakely-229-concept-set.pdf",
        "planImages": [
          "assets/designs/oakely/oakely-229-floor.webp"
        ],
        "view3d": "assets/designs/oakely/oakely-229-3d.webp"
      },
      {
        "code": "SERIES 9 ASG2",
        "slug": "oakely-234",
        "name": "Oakely 234",
        "totalM2": 233.9,
        "livingM2": 163.9,
        "garageM2": 43.9,
        "alfrescoM2": 23.9,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.09,
        "depthM": 21.24,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/oakely/oakely-234-concept-set.pdf",
        "planImages": [
          "assets/designs/oakely/oakely-234-floor.webp"
        ],
        "view3d": "assets/designs/oakely/oakely-234-3d.webp"
      },
      {
        "code": "SERIES 9 ASG3",
        "slug": "oakely-246",
        "name": "Oakely 246",
        "totalM2": 245.5,
        "livingM2": 183.3,
        "garageM2": 41.9,
        "alfrescoM2": 18.2,
        "beds": 4,
        "baths": 3,
        "powder": 2,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.09,
        "depthM": 23.79,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/oakely/oakely-246-concept-set.pdf",
        "planImages": [
          "assets/designs/oakely/oakely-246-floor.webp"
        ],
        "view3d": "assets/designs/oakely/oakely-246-3d.webp"
      },
      {
        "code": "SERIES 9 ASG4",
        "slug": "oakely-306",
        "name": "Oakely 306",
        "totalM2": 305.9,
        "livingM2": 223.1,
        "garageM2": 43.9,
        "alfrescoM2": 36.7,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.09,
        "depthM": 26.66,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/oakely/oakely-306-concept-set.pdf",
        "planImages": [
          "assets/designs/oakely/oakely-306-floor.webp"
        ],
        "view3d": "assets/designs/oakely/oakely-306-3d.webp"
      },
      {
        "code": "SERIES 9 ASG5",
        "slug": "oakely-312",
        "name": "Oakely 312",
        "totalM2": 311.7,
        "livingM2": 238.9,
        "garageM2": 43.9,
        "alfrescoM2": 26.7,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.09,
        "depthM": 26.66,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LINEN",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/oakely/oakely-312-concept-set.pdf",
        "planImages": [
          "assets/designs/oakely/oakely-312-floor.webp"
        ],
        "view3d": "assets/designs/oakely/oakely-312-3d.webp"
      }
    ]
  },
  {
    "slug": "middleton",
    "name": "Middleton",
    "nameProposed": false,
    "seriesCode": "SERIES 14 ASL",
    "collection": "single-storey",
    "collectionLabel": "Single Storey",
    "storeys": 1,
    "variantCount": 5,
    "areaMinM2": 227.2,
    "areaMaxM2": 312.0,
    "bedsMin": 3,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 15.5,
    "facades": [
      {
        "name": "Standard",
        "slug": "standard",
        "src": "assets/designs/middleton/facades/standard.webp"
      },
      {
        "name": "Knockwood",
        "slug": "knockwood",
        "src": "assets/designs/middleton/facades/knockwood.webp"
      },
      {
        "name": "Rock",
        "slug": "rock",
        "src": "assets/designs/middleton/facades/rock.webp"
      }
    ],
    "heroImage": "assets/designs/middleton/facades/standard.webp",
    "heroType": "render",
    "filters": {
      "collection": "single-storey",
      "storeys": [
        1
      ],
      "beds": [
        3,
        4
      ],
      "baths": [
        2
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "200-250",
        "250-300",
        "300-350"
      ],
      "lotBands": [
        "16m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 14 ASL1",
        "slug": "middleton-227",
        "name": "Middleton 227",
        "totalM2": 227.2,
        "livingM2": 164.9,
        "garageM2": 40.0,
        "alfrescoM2": 15.1,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 13.8,
        "depthM": 20.11,
        "minLotWidthM": 15.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DECK",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/middleton/middleton-227-concept-set.pdf",
        "planImages": [
          "assets/designs/middleton/middleton-227-floor.webp"
        ],
        "view3d": "assets/designs/middleton/middleton-227-3d.webp"
      },
      {
        "code": "SERIES 14 ASL2",
        "slug": "middleton-231",
        "name": "Middleton 231",
        "totalM2": 231.3,
        "livingM2": 176.4,
        "garageM2": 39.5,
        "alfrescoM2": 12.5,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.0,
        "depthM": 23.86,
        "minLotWidthM": 15.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "THEATRE",
          "WIR"
        ],
        "planPdf": "assets/plans/middleton/middleton-231-concept-set.pdf",
        "planImages": [
          "assets/designs/middleton/middleton-231-floor.webp"
        ],
        "view3d": "assets/designs/middleton/middleton-231-3d.webp"
      },
      {
        "code": "SERIES 14 ASL3",
        "slug": "middleton-284",
        "name": "Middleton 284",
        "totalM2": 284.2,
        "livingM2": 221.7,
        "garageM2": 40.2,
        "alfrescoM2": 15.1,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 13.8,
        "depthM": 22.23,
        "minLotWidthM": 15.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DECK",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "GUEST",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "STUDY",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/middleton/middleton-284-concept-set.pdf",
        "planImages": [
          "assets/designs/middleton/middleton-284-floor.webp"
        ],
        "view3d": "assets/designs/middleton/middleton-284-3d.webp"
      },
      {
        "code": "SERIES 14 ASL5",
        "slug": "middleton-290",
        "name": "Middleton 290",
        "totalM2": 290.1,
        "livingM2": 224.7,
        "garageM2": 40.9,
        "alfrescoM2": 17.0,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.0,
        "depthM": 28.64,
        "minLotWidthM": 15.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DECK",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "THEATRE",
          "WIR"
        ],
        "planPdf": "assets/plans/middleton/middleton-290-concept-set.pdf",
        "planImages": [
          "assets/designs/middleton/middleton-290-floor.webp"
        ],
        "view3d": "assets/designs/middleton/middleton-290-3d.webp"
      },
      {
        "code": "SERIES 14 ASL4",
        "slug": "middleton-312",
        "name": "Middleton 312",
        "totalM2": 312.0,
        "livingM2": 239.4,
        "garageM2": 40.2,
        "alfrescoM2": 25.2,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 13.8,
        "depthM": 24.52,
        "minLotWidthM": 15.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DECK",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "STUDY",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/middleton/middleton-312-concept-set.pdf",
        "planImages": [
          "assets/designs/middleton/middleton-312-floor.webp"
        ],
        "view3d": "assets/designs/middleton/middleton-312-3d.webp"
      }
    ]
  },
  {
    "slug": "claremont",
    "name": "Claremont",
    "nameProposed": false,
    "seriesCode": "SERIES 33 BSB",
    "collection": "single-storey",
    "collectionLabel": "Single Storey",
    "storeys": 1,
    "variantCount": 5,
    "areaMinM2": 233.2,
    "areaMaxM2": 275.9,
    "bedsMin": 4,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 0,
    "carsMax": 2,
    "minLotWidthM": 16.0,
    "facades": [
      {
        "name": "Standard",
        "slug": "standard",
        "src": "assets/designs/claremont/facades/standard.webp"
      },
      {
        "name": "Knockwood",
        "slug": "knockwood",
        "src": "assets/designs/claremont/facades/knockwood.webp"
      },
      {
        "name": "Rock",
        "slug": "rock",
        "src": "assets/designs/claremont/facades/rock.webp"
      }
    ],
    "heroImage": "assets/designs/claremont/facades/standard.webp",
    "heroType": "render",
    "filters": {
      "collection": "single-storey",
      "storeys": [
        1
      ],
      "beds": [
        4
      ],
      "baths": [
        2
      ],
      "cars": [
        0,
        2
      ],
      "sizeBands": [
        "200-250",
        "250-300"
      ],
      "lotBands": [
        "16m",
        "18m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 33 BSB1",
        "slug": "claremont-233",
        "name": "Claremont 233",
        "totalM2": 233.2,
        "livingM2": 174.3,
        "garageM2": 36.8,
        "alfrescoM2": 19.4,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.55,
        "depthM": 18.6,
        "minLotWidthM": 16.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/claremont/claremont-233-concept-set.pdf",
        "planImages": [
          "assets/designs/claremont/claremont-233-floor.webp"
        ],
        "view3d": "assets/designs/claremont/claremont-233-3d.webp"
      },
      {
        "code": "SERIES 33 BSB2",
        "slug": "claremont-244",
        "name": "Claremont 244",
        "totalM2": 244.4,
        "livingM2": 183.4,
        "garageM2": 36.7,
        "alfrescoM2": 19.4,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.4,
        "depthM": 19.24,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/claremont/claremont-244-concept-set.pdf",
        "planImages": [
          "assets/designs/claremont/claremont-244-floor.webp"
        ],
        "view3d": "assets/designs/claremont/claremont-244-3d.webp"
      },
      {
        "code": "SERIES 33 BSB3",
        "slug": "claremont-245",
        "name": "Claremont 245",
        "totalM2": 245.0,
        "livingM2": 186.0,
        "garageM2": 36.8,
        "alfrescoM2": 19.4,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.55,
        "depthM": 20.1,
        "minLotWidthM": 16.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/claremont/claremont-245-concept-set.pdf",
        "planImages": [
          "assets/designs/claremont/claremont-245-floor.webp"
        ],
        "view3d": "assets/designs/claremont/claremont-245-3d.webp"
      },
      {
        "code": "SERIES 33 BSB4",
        "slug": "claremont-272",
        "name": "Claremont 272",
        "totalM2": 272.5,
        "livingM2": 202.1,
        "garageM2": null,
        "alfrescoM2": 4.9,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 0,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.75,
        "depthM": 24.28,
        "minLotWidthM": 16.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "RUMPUS",
          "STUDY",
          "WIR"
        ],
        "planPdf": "assets/plans/claremont/claremont-272-concept-set.pdf",
        "planImages": [
          "assets/designs/claremont/claremont-272-floor.webp"
        ],
        "view3d": "assets/designs/claremont/claremont-272-3d.webp"
      },
      {
        "code": "SERIES 33 BSB5",
        "slug": "claremont-276",
        "name": "Claremont 276",
        "totalM2": 275.9,
        "livingM2": 206.7,
        "garageM2": 37.8,
        "alfrescoM2": 20.6,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.4,
        "depthM": 23.69,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "RETREAT",
          "STUDY",
          "WIR"
        ],
        "planPdf": "assets/plans/claremont/claremont-276-concept-set.pdf",
        "planImages": [
          "assets/designs/claremont/claremont-276-floor.webp"
        ],
        "view3d": "assets/designs/claremont/claremont-276-3d.webp"
      }
    ]
  },
  {
    "slug": "everly",
    "name": "Everly",
    "nameProposed": false,
    "seriesCode": "SERIES 37 BSF",
    "collection": "single-storey",
    "collectionLabel": "Single Storey",
    "storeys": 1,
    "variantCount": 5,
    "areaMinM2": 205.0,
    "areaMaxM2": 271.7,
    "bedsMin": 3,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 13.0,
    "facades": [
      {
        "name": "Standard",
        "slug": "standard",
        "src": "assets/designs/everly/facades/standard.webp"
      },
      {
        "name": "Cottage",
        "slug": "cottage",
        "src": "assets/designs/everly/facades/cottage.webp"
      },
      {
        "name": "Urban",
        "slug": "urban",
        "src": "assets/designs/everly/facades/urban.webp"
      }
    ],
    "heroImage": "assets/designs/everly/facades/standard.webp",
    "heroType": "render",
    "filters": {
      "collection": "single-storey",
      "storeys": [
        1
      ],
      "beds": [
        3,
        4
      ],
      "baths": [
        2
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "200-250",
        "250-300"
      ],
      "lotBands": [
        "14m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 37 BSF3",
        "slug": "everly-205",
        "name": "Everly 205",
        "totalM2": 205.0,
        "livingM2": 145.8,
        "garageM2": 40.3,
        "alfrescoM2": 13.5,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 11.3,
        "depthM": 21.85,
        "minLotWidthM": 13.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LINEN",
          "LIVING",
          "MASTER",
          "PORCH",
          "THEATRE",
          "WIR"
        ],
        "planPdf": "assets/plans/everly/everly-205-concept-set.pdf",
        "planImages": [
          "assets/designs/everly/everly-205-floor.webp"
        ],
        "view3d": "assets/designs/everly/everly-205-3d.webp"
      },
      {
        "code": "SERIES 37 BSF1",
        "slug": "everly-205",
        "name": "Everly 205",
        "totalM2": 205.4,
        "livingM2": 144.0,
        "garageM2": 39.7,
        "alfrescoM2": 16.1,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 11.6,
        "depthM": 22.08,
        "minLotWidthM": 13.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/everly/everly-205-concept-set.pdf",
        "planImages": [
          "assets/designs/everly/everly-205-floor.webp"
        ],
        "view3d": "assets/designs/everly/everly-205-3d.webp"
      },
      {
        "code": "SERIES 37 BSF2",
        "slug": "everly-214",
        "name": "Everly 214",
        "totalM2": 213.8,
        "livingM2": 155.5,
        "garageM2": 38.3,
        "alfrescoM2": 13.9,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 11.62,
        "depthM": 21.4,
        "minLotWidthM": 13.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/everly/everly-214-concept-set.pdf",
        "planImages": [
          "assets/designs/everly/everly-214-floor.webp"
        ],
        "view3d": "assets/designs/everly/everly-214-3d.webp"
      },
      {
        "code": "SERIES 37 BSF4",
        "slug": "everly-238",
        "name": "Everly 238",
        "totalM2": 237.9,
        "livingM2": 173.9,
        "garageM2": 39.5,
        "alfrescoM2": 19.5,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 11.6,
        "depthM": 23.63,
        "minLotWidthM": 13.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/everly/everly-238-concept-set.pdf",
        "planImages": [
          "assets/designs/everly/everly-238-floor.webp"
        ],
        "view3d": "assets/designs/everly/everly-238-3d.webp"
      },
      {
        "code": "SERIES 37 BSF5",
        "slug": "everly-272",
        "name": "Everly 272",
        "totalM2": 271.7,
        "livingM2": 198.6,
        "garageM2": 37.9,
        "alfrescoM2": 29.9,
        "beds": 4,
        "baths": 2,
        "powder": 2,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 12.05,
        "depthM": 23.97,
        "minLotWidthM": 14.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/everly/everly-272-concept-set.pdf",
        "planImages": [
          "assets/designs/everly/everly-272-floor.webp"
        ],
        "view3d": "assets/designs/everly/everly-272-3d.webp"
      }
    ]
  },
  {
    "slug": "ashford",
    "name": "Ashford",
    "nameProposed": false,
    "seriesCode": "SERIES 46 BSK",
    "collection": "single-storey",
    "collectionLabel": "Single Storey",
    "storeys": 1,
    "variantCount": 5,
    "areaMinM2": 163.3,
    "areaMaxM2": 198.0,
    "bedsMin": 3,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 1,
    "carsMax": 2,
    "minLotWidthM": 8.0,
    "facades": [
      {
        "name": "Standard",
        "slug": "standard",
        "src": "assets/designs/ashford/facades/standard.webp"
      },
      {
        "name": "Knockwood",
        "slug": "knockwood",
        "src": "assets/designs/ashford/facades/knockwood.webp"
      },
      {
        "name": "Rock",
        "slug": "rock",
        "src": "assets/designs/ashford/facades/rock.webp"
      }
    ],
    "heroImage": "assets/designs/ashford/facades/standard.webp",
    "heroType": "render",
    "filters": {
      "collection": "single-storey",
      "storeys": [
        1
      ],
      "beds": [
        3,
        4
      ],
      "baths": [
        2
      ],
      "cars": [
        1,
        2
      ],
      "sizeBands": [
        "under-200"
      ],
      "lotBands": [
        "10m",
        "14m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 46 BSK1",
        "slug": "ashford-163",
        "name": "Ashford 163",
        "totalM2": 163.3,
        "livingM2": 127.6,
        "garageM2": 23.2,
        "alfrescoM2": 10.8,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 1,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 11.48,
        "depthM": 19.92,
        "minLotWidthM": 13.0,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH"
        ],
        "planPdf": "assets/plans/ashford/ashford-163-concept-set.pdf",
        "planImages": [
          "assets/designs/ashford/ashford-163-floor.webp"
        ],
        "view3d": "assets/designs/ashford/ashford-163-3d.webp"
      },
      {
        "code": "SERIES 46 BSK2",
        "slug": "ashford-166",
        "name": "Ashford 166",
        "totalM2": 165.8,
        "livingM2": 126.3,
        "garageM2": 24.0,
        "alfrescoM2": 11.9,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 1,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 8.98,
        "depthM": 20.08,
        "minLotWidthM": 10.5,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH"
        ],
        "planPdf": "assets/plans/ashford/ashford-166-concept-set.pdf",
        "planImages": [
          "assets/designs/ashford/ashford-166-floor.webp"
        ],
        "view3d": "assets/designs/ashford/ashford-166-3d.webp"
      },
      {
        "code": "SERIES 46 BSK3",
        "slug": "ashford-188",
        "name": "Ashford 188",
        "totalM2": 187.5,
        "livingM2": 134.9,
        "garageM2": 39.9,
        "alfrescoM2": 11.0,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 6.02,
        "depthM": 20.65,
        "minLotWidthM": 8.0,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "RETREAT",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/ashford/ashford-188-concept-set.pdf",
        "planImages": [
          "assets/designs/ashford/ashford-188-floor.webp"
        ],
        "view3d": "assets/designs/ashford/ashford-188-3d.webp"
      },
      {
        "code": "SERIES 46 BSK4",
        "slug": "ashford-196",
        "name": "Ashford 196",
        "totalM2": 195.5,
        "livingM2": 155.2,
        "garageM2": 22.4,
        "alfrescoM2": 16.3,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 1,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 11.48,
        "depthM": 24.06,
        "minLotWidthM": 13.0,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "RETREAT",
          "SITTING",
          "WIR"
        ],
        "planPdf": "assets/plans/ashford/ashford-196-concept-set.pdf",
        "planImages": [
          "assets/designs/ashford/ashford-196-floor.webp"
        ],
        "view3d": "assets/designs/ashford/ashford-196-3d.webp"
      },
      {
        "code": "SERIES 46 BSK5",
        "slug": "ashford-198",
        "name": "Ashford 198",
        "totalM2": 198.0,
        "livingM2": 158.2,
        "garageM2": 22.6,
        "alfrescoM2": 13.2,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 1,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 8.98,
        "depthM": 22.85,
        "minLotWidthM": 10.5,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "THEATRE",
          "WIR"
        ],
        "planPdf": "assets/plans/ashford/ashford-198-concept-set.pdf",
        "planImages": [
          "assets/designs/ashford/ashford-198-floor.webp"
        ],
        "view3d": "assets/designs/ashford/ashford-198-3d.webp"
      }
    ]
  },
  {
    "slug": "brighton",
    "name": "Brighton",
    "nameProposed": true,
    "seriesCode": "SERIES 4 DSA",
    "collection": "double-storey",
    "collectionLabel": "Double Storey",
    "storeys": 2,
    "variantCount": 3,
    "areaMinM2": 250.6,
    "areaMaxM2": 282.6,
    "bedsMin": 3,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 10.5,
    "facades": [],
    "heroImage": "assets/designs/brighton/brighton-251-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "double-storey",
      "storeys": [
        2
      ],
      "beds": [
        3,
        4
      ],
      "baths": [
        2
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "250-300"
      ],
      "lotBands": [
        "10m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 4 DSA1",
        "slug": "brighton-251",
        "name": "Brighton 251",
        "totalM2": 250.6,
        "livingM2": 189.4,
        "garageM2": 43.1,
        "alfrescoM2": 12.4,
        "beds": 4,
        "baths": 2,
        "powder": 2,
        "cars": 2,
        "storeys": 2,
        "perDwelling": false,
        "frontageM": 9.0,
        "depthM": 21.41,
        "minLotWidthM": 10.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "COURTYARD",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "STUDY",
          "VOID",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/brighton/brighton-251-concept-set.pdf",
        "planImages": [
          "assets/designs/brighton/brighton-251-lower.webp",
          "assets/designs/brighton/brighton-251-upper.webp"
        ],
        "view3d": "assets/designs/brighton/brighton-251-3d.webp"
      },
      {
        "code": "SERIES 4 DSA3",
        "slug": "brighton-256",
        "name": "Brighton 256",
        "totalM2": 256.3,
        "livingM2": 193.5,
        "garageM2": 43.1,
        "alfrescoM2": 14.0,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 2,
        "perDwelling": false,
        "frontageM": 9.0,
        "depthM": 21.41,
        "minLotWidthM": 10.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "COURTYARD",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "MEDIA",
          "PDR",
          "PORCH",
          "VOID",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/brighton/brighton-256-concept-set.pdf",
        "planImages": [
          "assets/designs/brighton/brighton-256-lower.webp",
          "assets/designs/brighton/brighton-256-upper.webp"
        ],
        "view3d": "assets/designs/brighton/brighton-256-3d.webp"
      },
      {
        "code": "SERIES 4 DSA2",
        "slug": "brighton-283",
        "name": "Brighton 283",
        "totalM2": 282.6,
        "livingM2": 196.6,
        "garageM2": 43.1,
        "alfrescoM2": 7.7,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 2,
        "perDwelling": false,
        "frontageM": 9.0,
        "depthM": 18.82,
        "minLotWidthM": 10.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BALCONY",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "COURTYARD",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "RUMPUS",
          "VOID",
          "WIR"
        ],
        "planPdf": "assets/plans/brighton/brighton-283-concept-set.pdf",
        "planImages": [
          "assets/designs/brighton/brighton-283-lower.webp",
          "assets/designs/brighton/brighton-283-upper.webp"
        ],
        "view3d": "assets/designs/brighton/brighton-283-3d.webp"
      }
    ]
  },
  {
    "slug": "hampton",
    "name": "Hampton",
    "nameProposed": true,
    "seriesCode": "SERIES 21 DSC",
    "collection": "double-storey",
    "collectionLabel": "Double Storey",
    "storeys": 2,
    "variantCount": 1,
    "areaMinM2": 294.9,
    "areaMaxM2": 294.9,
    "bedsMin": 4,
    "bedsMax": 4,
    "bathsMin": 3,
    "bathsMax": 3,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 10.5,
    "facades": [],
    "heroImage": "assets/designs/hampton/hampton-295-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "double-storey",
      "storeys": [
        2
      ],
      "beds": [
        4
      ],
      "baths": [
        3
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "250-300"
      ],
      "lotBands": [
        "10m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 21 DSC1",
        "slug": "hampton-295",
        "name": "Hampton 295",
        "totalM2": 294.9,
        "livingM2": 236.3,
        "garageM2": 26.7,
        "alfrescoM2": 19.9,
        "beds": 4,
        "baths": 3,
        "powder": 1,
        "cars": 2,
        "storeys": 2,
        "perDwelling": false,
        "frontageM": 8.8,
        "depthM": 23.66,
        "minLotWidthM": 10.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "OFFICE",
          "PATIO",
          "PORCH",
          "SITTING",
          "VOID",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/hampton/hampton-295-concept-set.pdf",
        "planImages": [
          "assets/designs/hampton/hampton-295-lower.webp",
          "assets/designs/hampton/hampton-295-upper.webp"
        ],
        "view3d": "assets/designs/hampton/hampton-295-3d.webp"
      }
    ]
  },
  {
    "slug": "wentworth",
    "name": "Wentworth",
    "nameProposed": true,
    "seriesCode": "SERIES 54 ADJ",
    "collection": "double-storey",
    "collectionLabel": "Double Storey",
    "storeys": 2,
    "variantCount": 3,
    "areaMinM2": 323.9,
    "areaMaxM2": 363.3,
    "bedsMin": 4,
    "bedsMax": 5,
    "bathsMin": 2,
    "bathsMax": 3,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 14.5,
    "facades": [],
    "heroImage": "assets/designs/wentworth/wentworth-324-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "double-storey",
      "storeys": [
        2
      ],
      "beds": [
        4,
        5
      ],
      "baths": [
        2,
        3
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "300-350",
        "350-plus"
      ],
      "lotBands": [
        "16m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 54 ADJ1",
        "slug": "wentworth-324",
        "name": "Wentworth 324",
        "totalM2": 323.9,
        "livingM2": 246.1,
        "garageM2": 39.2,
        "alfrescoM2": 28.3,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 2,
        "perDwelling": false,
        "frontageM": 12.86,
        "depthM": 21.32,
        "minLotWidthM": 14.5,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "MEDIA",
          "PATIO",
          "PDR",
          "PORCH",
          "VOID",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/wentworth/wentworth-324-concept-set.pdf",
        "planImages": [
          "assets/designs/wentworth/wentworth-324-lower.webp",
          "assets/designs/wentworth/wentworth-324-upper.webp"
        ],
        "view3d": "assets/designs/wentworth/wentworth-324-3d.webp"
      },
      {
        "code": "SERIES 54 ADJ2",
        "slug": "wentworth-360",
        "name": "Wentworth 360",
        "totalM2": 359.9,
        "livingM2": 281.6,
        "garageM2": 39.4,
        "alfrescoM2": 29.0,
        "beds": 5,
        "baths": 3,
        "powder": 1,
        "cars": 2,
        "storeys": 2,
        "perDwelling": false,
        "frontageM": 14.06,
        "depthM": 23.04,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "BED 5",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "LOUNGE",
          "MASTER",
          "PATIO",
          "PORCH",
          "SITTING",
          "VOID",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/wentworth/wentworth-360-concept-set.pdf",
        "planImages": [
          "assets/designs/wentworth/wentworth-360-lower.webp",
          "assets/designs/wentworth/wentworth-360-upper.webp"
        ],
        "view3d": "assets/designs/wentworth/wentworth-360-3d.webp"
      },
      {
        "code": "SERIES 54 ADJ3",
        "slug": "wentworth-363",
        "name": "Wentworth 363",
        "totalM2": 363.3,
        "livingM2": 287.9,
        "garageM2": 39.3,
        "alfrescoM2": 26.2,
        "beds": 4,
        "baths": 3,
        "powder": 1,
        "cars": 2,
        "storeys": 2,
        "perDwelling": false,
        "frontageM": 14.06,
        "depthM": 23.04,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "LOUNGE",
          "MASTER",
          "PATIO",
          "PORCH",
          "VOID",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/wentworth/wentworth-363-concept-set.pdf",
        "planImages": [
          "assets/designs/wentworth/wentworth-363-lower.webp",
          "assets/designs/wentworth/wentworth-363-upper.webp"
        ],
        "view3d": "assets/designs/wentworth/wentworth-363-3d.webp"
      }
    ]
  },
  {
    "slug": "carlisle",
    "name": "Carlisle",
    "nameProposed": true,
    "seriesCode": "SERIES 55 ADK",
    "collection": "double-storey",
    "collectionLabel": "Double Storey",
    "storeys": 2,
    "variantCount": 1,
    "areaMinM2": 390.3,
    "areaMaxM2": 390.3,
    "bedsMin": 4,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 13.5,
    "facades": [],
    "heroImage": "assets/designs/carlisle/carlisle-390-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "double-storey",
      "storeys": [
        2
      ],
      "beds": [
        4
      ],
      "baths": [
        2
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "350-plus"
      ],
      "lotBands": [
        "14m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 55 ADK1",
        "slug": "carlisle-390",
        "name": "Carlisle 390",
        "totalM2": 390.3,
        "livingM2": 309.1,
        "garageM2": 34.0,
        "alfrescoM2": 28.0,
        "beds": 4,
        "baths": 2,
        "powder": 2,
        "cars": 2,
        "storeys": 2,
        "perDwelling": false,
        "frontageM": 11.8,
        "depthM": 21.75,
        "minLotWidthM": 13.5,
        "lotWidthVerified": false,
        "rooms": [
          "BALCONY",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "THEATRE",
          "VOID",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/carlisle/carlisle-390-concept-set.pdf",
        "planImages": [
          "assets/designs/carlisle/carlisle-390-lower.webp",
          "assets/designs/carlisle/carlisle-390-upper.webp"
        ],
        "view3d": "assets/designs/carlisle/carlisle-390-3d.webp"
      }
    ]
  },
  {
    "slug": "bellwood",
    "name": "Bellwood",
    "nameProposed": true,
    "seriesCode": "SERIES 8 ASF",
    "collection": "acreage",
    "collectionLabel": "Acreage",
    "storeys": 1,
    "variantCount": 5,
    "areaMinM2": 223.6,
    "areaMaxM2": 330.8,
    "bedsMin": 4,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 3,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 14.5,
    "facades": [],
    "heroImage": "assets/designs/bellwood/bellwood-224-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "acreage",
      "storeys": [
        1
      ],
      "beds": [
        4
      ],
      "baths": [
        2,
        3
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "200-250",
        "250-300",
        "300-350"
      ],
      "lotBands": [
        "16m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 8 ASF1",
        "slug": "bellwood-224",
        "name": "Bellwood 224",
        "totalM2": 223.6,
        "livingM2": 158.4,
        "garageM2": 38.9,
        "alfrescoM2": 19.3,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 12.82,
        "depthM": 23.42,
        "minLotWidthM": 14.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/bellwood/bellwood-224-concept-set.pdf",
        "planImages": [
          "assets/designs/bellwood/bellwood-224-floor.webp"
        ],
        "view3d": "assets/designs/bellwood/bellwood-224-3d.webp"
      },
      {
        "code": "SERIES 8 ASF2",
        "slug": "bellwood-236",
        "name": "Bellwood 236",
        "totalM2": 236.0,
        "livingM2": 170.8,
        "garageM2": 39.7,
        "alfrescoM2": 18.6,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 13.15,
        "depthM": 23.08,
        "minLotWidthM": 15.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "STORE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/bellwood/bellwood-236-concept-set.pdf",
        "planImages": [
          "assets/designs/bellwood/bellwood-236-floor.webp"
        ],
        "view3d": "assets/designs/bellwood/bellwood-236-3d.webp"
      },
      {
        "code": "SERIES 8 ASF4",
        "slug": "bellwood-268",
        "name": "Bellwood 268",
        "totalM2": 267.6,
        "livingM2": 202.7,
        "garageM2": 38.2,
        "alfrescoM2": 20.2,
        "beds": 4,
        "baths": 3,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 13.8,
        "depthM": 23.02,
        "minLotWidthM": 15.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "GUEST",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "STORE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/bellwood/bellwood-268-concept-set.pdf",
        "planImages": [
          "assets/designs/bellwood/bellwood-268-floor.webp"
        ],
        "view3d": "assets/designs/bellwood/bellwood-268-3d.webp"
      },
      {
        "code": "SERIES 8 ASF3",
        "slug": "bellwood-270",
        "name": "Bellwood 270",
        "totalM2": 269.6,
        "livingM2": 194.5,
        "garageM2": 39.5,
        "alfrescoM2": 28.7,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 13.77,
        "depthM": 23.82,
        "minLotWidthM": 15.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "THEATRE",
          "WIR"
        ],
        "planPdf": "assets/plans/bellwood/bellwood-270-concept-set.pdf",
        "planImages": [
          "assets/designs/bellwood/bellwood-270-floor.webp"
        ],
        "view3d": "assets/designs/bellwood/bellwood-270-3d.webp"
      },
      {
        "code": "SERIES 8 ASF5",
        "slug": "bellwood-331",
        "name": "Bellwood 331",
        "totalM2": 330.8,
        "livingM2": 249.3,
        "garageM2": 43.8,
        "alfrescoM2": 28.2,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.15,
        "depthM": 24.79,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "STUDY",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/bellwood/bellwood-331-concept-set.pdf",
        "planImages": [
          "assets/designs/bellwood/bellwood-331-floor.webp"
        ],
        "view3d": "assets/designs/bellwood/bellwood-331-3d.webp"
      }
    ]
  },
  {
    "slug": "fairmont",
    "name": "Fairmont",
    "nameProposed": true,
    "seriesCode": "SERIES 13 ASK",
    "collection": "acreage",
    "collectionLabel": "Acreage",
    "storeys": 1,
    "variantCount": 5,
    "areaMinM2": 275.8,
    "areaMaxM2": 356.5,
    "bedsMin": 4,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 3,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 19.5,
    "facades": [],
    "heroImage": "assets/designs/fairmont/fairmont-276-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "acreage",
      "storeys": [
        1
      ],
      "beds": [
        4
      ],
      "baths": [
        2,
        3
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "250-300",
        "300-350",
        "350-plus"
      ],
      "lotBands": [
        "20m",
        "20m-plus"
      ]
    },
    "variants": [
      {
        "code": "SERIES 13 ASK1",
        "slug": "fairmont-276",
        "name": "Fairmont 276",
        "totalM2": 275.8,
        "livingM2": 203.4,
        "garageM2": 40.0,
        "alfrescoM2": 24.0,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 18.3,
        "depthM": 21.42,
        "minLotWidthM": 20.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/fairmont/fairmont-276-concept-set.pdf",
        "planImages": [
          "assets/designs/fairmont/fairmont-276-floor.webp"
        ],
        "view3d": "assets/designs/fairmont/fairmont-276-3d.webp"
      },
      {
        "code": "SERIES 13 ASK2",
        "slug": "fairmont-284",
        "name": "Fairmont 284",
        "totalM2": 284.5,
        "livingM2": 207.3,
        "garageM2": 45.3,
        "alfrescoM2": 23.5,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 17.89,
        "depthM": 22.13,
        "minLotWidthM": 19.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/fairmont/fairmont-284-concept-set.pdf",
        "planImages": [
          "assets/designs/fairmont/fairmont-284-floor.webp"
        ],
        "view3d": "assets/designs/fairmont/fairmont-284-3d.webp"
      },
      {
        "code": "SERIES 13 ASK3",
        "slug": "fairmont-324",
        "name": "Fairmont 324",
        "totalM2": 323.7,
        "livingM2": 243.7,
        "garageM2": 39.3,
        "alfrescoM2": 25.8,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 19.23,
        "depthM": 20.67,
        "minLotWidthM": 21.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/fairmont/fairmont-324-concept-set.pdf",
        "planImages": [
          "assets/designs/fairmont/fairmont-324-floor.webp"
        ],
        "view3d": "assets/designs/fairmont/fairmont-324-3d.webp"
      },
      {
        "code": "SERIES 13 ASK4",
        "slug": "fairmont-335",
        "name": "Fairmont 335",
        "totalM2": 335.4,
        "livingM2": 244.2,
        "garageM2": 45.2,
        "alfrescoM2": 25.8,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 19.28,
        "depthM": 22.17,
        "minLotWidthM": 21.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/fairmont/fairmont-335-concept-set.pdf",
        "planImages": [
          "assets/designs/fairmont/fairmont-335-floor.webp"
        ],
        "view3d": "assets/designs/fairmont/fairmont-335-3d.webp"
      },
      {
        "code": "SERIES 13 ASK5",
        "slug": "fairmont-356",
        "name": "Fairmont 356",
        "totalM2": 356.5,
        "livingM2": 256.5,
        "garageM2": 42.8,
        "alfrescoM2": 24.4,
        "beds": 4,
        "baths": 3,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 19.23,
        "depthM": 22.33,
        "minLotWidthM": 21.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "GUEST",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/fairmont/fairmont-356-concept-set.pdf",
        "planImages": [
          "assets/designs/fairmont/fairmont-356-floor.webp"
        ],
        "view3d": "assets/designs/fairmont/fairmont-356-3d.webp"
      }
    ]
  },
  {
    "slug": "harrington",
    "name": "Harrington",
    "nameProposed": true,
    "seriesCode": "SERIES 18 ASP",
    "collection": "acreage",
    "collectionLabel": "Acreage",
    "storeys": 1,
    "variantCount": 6,
    "areaMinM2": 213.6,
    "areaMaxM2": 359.4,
    "bedsMin": 3,
    "bedsMax": 5,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 18.5,
    "facades": [],
    "heroImage": "assets/designs/harrington/harrington-214-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "acreage",
      "storeys": [
        1
      ],
      "beds": [
        3,
        4,
        5
      ],
      "baths": [
        2
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "200-250",
        "250-300",
        "300-350",
        "350-plus"
      ],
      "lotBands": [
        "20m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 18 ASP1",
        "slug": "harrington-214",
        "name": "Harrington 214",
        "totalM2": 213.6,
        "livingM2": 150.0,
        "garageM2": 39.3,
        "alfrescoM2": 20.7,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 16.7,
        "depthM": 17.34,
        "minLotWidthM": 18.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "STUDY",
          "WIR"
        ],
        "planPdf": "assets/plans/harrington/harrington-214-concept-set.pdf",
        "planImages": [
          "assets/designs/harrington/harrington-214-floor.webp"
        ],
        "view3d": "assets/designs/harrington/harrington-214-3d.webp"
      },
      {
        "code": "SERIES 18 ASP2",
        "slug": "harrington-233",
        "name": "Harrington 233",
        "totalM2": 233.3,
        "livingM2": 172.2,
        "garageM2": 39.6,
        "alfrescoM2": 17.6,
        "beds": 3,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 16.7,
        "depthM": 17.84,
        "minLotWidthM": 18.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "STUDY",
          "THEATRE",
          "WIR"
        ],
        "planPdf": "assets/plans/harrington/harrington-233-concept-set.pdf",
        "planImages": [
          "assets/designs/harrington/harrington-233-floor.webp"
        ],
        "view3d": "assets/designs/harrington/harrington-233-3d.webp"
      },
      {
        "code": "SERIES 18 ASP3",
        "slug": "harrington-234",
        "name": "Harrington 234",
        "totalM2": 234.2,
        "livingM2": 170.3,
        "garageM2": 39.3,
        "alfrescoM2": 20.7,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 16.7,
        "depthM": 19.05,
        "minLotWidthM": 18.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/harrington/harrington-234-concept-set.pdf",
        "planImages": [
          "assets/designs/harrington/harrington-234-floor.webp"
        ],
        "view3d": "assets/designs/harrington/harrington-234-3d.webp"
      },
      {
        "code": "SERIES 18 ASP4",
        "slug": "harrington-251",
        "name": "Harrington 251",
        "totalM2": 250.9,
        "livingM2": 184.0,
        "garageM2": 39.4,
        "alfrescoM2": 23.0,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 16.7,
        "depthM": 17.68,
        "minLotWidthM": 18.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "STUDY",
          "WIR"
        ],
        "planPdf": "assets/plans/harrington/harrington-251-concept-set.pdf",
        "planImages": [
          "assets/designs/harrington/harrington-251-floor.webp"
        ],
        "view3d": "assets/designs/harrington/harrington-251-3d.webp"
      },
      {
        "code": "SERIES 18 ASP5",
        "slug": "harrington-312",
        "name": "Harrington 312",
        "totalM2": 311.7,
        "livingM2": 229.4,
        "garageM2": 39.2,
        "alfrescoM2": 39.8,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 16.7,
        "depthM": 23.79,
        "minLotWidthM": 18.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/harrington/harrington-312-concept-set.pdf",
        "planImages": [
          "assets/designs/harrington/harrington-312-floor.webp"
        ],
        "view3d": "assets/designs/harrington/harrington-312-3d.webp"
      },
      {
        "code": "SERIES 18 ASP6",
        "slug": "harrington-359",
        "name": "Harrington 359",
        "totalM2": 359.4,
        "livingM2": 267.5,
        "garageM2": 39.3,
        "alfrescoM2": 49.2,
        "beds": 5,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 16.7,
        "depthM": 28.93,
        "minLotWidthM": 18.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "BED 5",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "RETREAT",
          "STUDY",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/harrington/harrington-359-concept-set.pdf",
        "planImages": [
          "assets/designs/harrington/harrington-359-floor.webp"
        ],
        "view3d": "assets/designs/harrington/harrington-359-3d.webp"
      }
    ]
  },
  {
    "slug": "thornbury",
    "name": "Thornbury",
    "nameProposed": true,
    "seriesCode": "SERIES 28 ASX",
    "collection": "acreage",
    "collectionLabel": "Acreage",
    "storeys": 1,
    "variantCount": 5,
    "areaMinM2": 240.1,
    "areaMaxM2": 340.8,
    "bedsMin": 4,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 17.0,
    "facades": [],
    "heroImage": "assets/designs/thornbury/thornbury-240-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "acreage",
      "storeys": [
        1
      ],
      "beds": [
        4
      ],
      "baths": [
        2
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "200-250",
        "250-300",
        "300-350"
      ],
      "lotBands": [
        "18m",
        "20m",
        "20m-plus"
      ]
    },
    "variants": [
      {
        "code": "SERIES 28 ASX1",
        "slug": "thornbury-240",
        "name": "Thornbury 240",
        "totalM2": 240.1,
        "livingM2": 160.1,
        "garageM2": 42.2,
        "alfrescoM2": 24.7,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 15.23,
        "depthM": 24.79,
        "minLotWidthM": 17.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/thornbury/thornbury-240-concept-set.pdf",
        "planImages": [
          "assets/designs/thornbury/thornbury-240-floor.webp"
        ],
        "view3d": "assets/designs/thornbury/thornbury-240-3d.webp"
      },
      {
        "code": "SERIES 28 ASX2",
        "slug": "thornbury-272",
        "name": "Thornbury 272",
        "totalM2": 272.5,
        "livingM2": 191.6,
        "garageM2": 40.7,
        "alfrescoM2": 29.2,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 16.01,
        "depthM": 25.26,
        "minLotWidthM": 18.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/thornbury/thornbury-272-concept-set.pdf",
        "planImages": [
          "assets/designs/thornbury/thornbury-272-floor.webp"
        ],
        "view3d": "assets/designs/thornbury/thornbury-272-3d.webp"
      },
      {
        "code": "SERIES 28 ASX3",
        "slug": "thornbury-308",
        "name": "Thornbury 308",
        "totalM2": 308.3,
        "livingM2": 224.3,
        "garageM2": 49.1,
        "alfrescoM2": 23.0,
        "beds": 4,
        "baths": 2,
        "powder": 0,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 19.84,
        "depthM": 24.76,
        "minLotWidthM": 21.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "THEATRE",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/thornbury/thornbury-308-concept-set.pdf",
        "planImages": [
          "assets/designs/thornbury/thornbury-308-floor.webp"
        ],
        "view3d": "assets/designs/thornbury/thornbury-308-3d.webp"
      },
      {
        "code": "SERIES 28 ASX4",
        "slug": "thornbury-334",
        "name": "Thornbury 334",
        "totalM2": 334.3,
        "livingM2": 247.5,
        "garageM2": 42.8,
        "alfrescoM2": 31.1,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 16.13,
        "depthM": 25.26,
        "minLotWidthM": 18.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "FAMILY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/thornbury/thornbury-334-concept-set.pdf",
        "planImages": [
          "assets/designs/thornbury/thornbury-334-floor.webp"
        ],
        "view3d": "assets/designs/thornbury/thornbury-334-3d.webp"
      },
      {
        "code": "SERIES 28 ASX5",
        "slug": "thornbury-341",
        "name": "Thornbury 341",
        "totalM2": 340.8,
        "livingM2": 254.0,
        "garageM2": 42.8,
        "alfrescoM2": 31.1,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 18.43,
        "depthM": 25.26,
        "minLotWidthM": 20.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "WIR"
        ],
        "planPdf": "assets/plans/thornbury/thornbury-341-concept-set.pdf",
        "planImages": [
          "assets/designs/thornbury/thornbury-341-floor.webp"
        ],
        "view3d": "assets/designs/thornbury/thornbury-341-3d.webp"
      }
    ]
  },
  {
    "slug": "braxton",
    "name": "Braxton",
    "nameProposed": true,
    "seriesCode": "SERIES 40 BSI",
    "collection": "acreage",
    "collectionLabel": "Acreage",
    "storeys": 1,
    "variantCount": 5,
    "areaMinM2": 232.7,
    "areaMaxM2": 379.6,
    "bedsMin": 3,
    "bedsMax": 5,
    "bathsMin": 2,
    "bathsMax": 3,
    "carsMin": 2,
    "carsMax": 3,
    "minLotWidthM": 16.0,
    "facades": [],
    "heroImage": "assets/designs/braxton/braxton-233-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "acreage",
      "storeys": [
        1
      ],
      "beds": [
        3,
        4,
        5
      ],
      "baths": [
        2,
        3
      ],
      "cars": [
        2,
        3
      ],
      "sizeBands": [
        "200-250",
        "250-300",
        "300-350",
        "350-plus"
      ],
      "lotBands": [
        "16m",
        "18m",
        "20m",
        "20m-plus"
      ]
    },
    "variants": [
      {
        "code": "SERIES 40 BSI1",
        "slug": "braxton-233",
        "name": "Braxton 233",
        "totalM2": 232.7,
        "livingM2": 172.5,
        "garageM2": 39.8,
        "alfrescoM2": 17.4,
        "beds": 3,
        "baths": 2,
        "powder": 2,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 14.24,
        "depthM": 29.17,
        "minLotWidthM": 16.0,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/braxton/braxton-233-concept-set.pdf",
        "planImages": [
          "assets/designs/braxton/braxton-233-floor.webp"
        ],
        "view3d": "assets/designs/braxton/braxton-233-3d.webp"
      },
      {
        "code": "SERIES 40 BSI2",
        "slug": "braxton-267",
        "name": "Braxton 267",
        "totalM2": 267.1,
        "livingM2": 204.3,
        "garageM2": 39.8,
        "alfrescoM2": 20.0,
        "beds": 4,
        "baths": 2,
        "powder": 2,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 15.06,
        "depthM": 30.78,
        "minLotWidthM": 17.0,
        "lotWidthVerified": false,
        "rooms": [
          "ACTIVITY",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "WIR"
        ],
        "planPdf": "assets/plans/braxton/braxton-267-concept-set.pdf",
        "planImages": [
          "assets/designs/braxton/braxton-267-floor.webp"
        ],
        "view3d": "assets/designs/braxton/braxton-267-3d.webp"
      },
      {
        "code": "SERIES 40 BSI3",
        "slug": "braxton-300",
        "name": "Braxton 300",
        "totalM2": 300.0,
        "livingM2": 237.3,
        "garageM2": 39.8,
        "alfrescoM2": 20.0,
        "beds": 5,
        "baths": 2,
        "powder": 2,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 17.26,
        "depthM": 30.78,
        "minLotWidthM": 19.0,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "BED 5",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "WIR"
        ],
        "planPdf": "assets/plans/braxton/braxton-300-concept-set.pdf",
        "planImages": [
          "assets/designs/braxton/braxton-300-floor.webp"
        ],
        "view3d": "assets/designs/braxton/braxton-300-3d.webp"
      },
      {
        "code": "SERIES 40 BSI4",
        "slug": "braxton-379",
        "name": "Braxton 379",
        "totalM2": 378.7,
        "livingM2": 289.4,
        "garageM2": 62.2,
        "alfrescoM2": 23.0,
        "beds": 5,
        "baths": 3,
        "powder": 1,
        "cars": 3,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 22.88,
        "depthM": 33.68,
        "minLotWidthM": 24.5,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "BED 5",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "RETREAT",
          "STUDY",
          "WIR"
        ],
        "planPdf": "assets/plans/braxton/braxton-379-concept-set.pdf",
        "planImages": [
          "assets/designs/braxton/braxton-379-floor.webp"
        ],
        "view3d": "assets/designs/braxton/braxton-379-3d.webp"
      },
      {
        "code": "SERIES 40 BSI5",
        "slug": "braxton-380",
        "name": "Braxton 380",
        "totalM2": 379.6,
        "livingM2": 292.8,
        "garageM2": 43.7,
        "alfrescoM2": 40.2,
        "beds": 5,
        "baths": 2,
        "powder": 2,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 19.1,
        "depthM": 32.34,
        "minLotWidthM": 21.0,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "BED 5",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PDR",
          "PORCH",
          "STUDY",
          "THEATRE",
          "WIR"
        ],
        "planPdf": "assets/plans/braxton/braxton-380-concept-set.pdf",
        "planImages": [
          "assets/designs/braxton/braxton-380-floor.webp"
        ],
        "view3d": "assets/designs/braxton/braxton-380-3d.webp"
      }
    ]
  },
  {
    "slug": "ellsworth",
    "name": "Ellsworth",
    "nameProposed": true,
    "seriesCode": "SERIES 101 CSG",
    "collection": "acreage",
    "collectionLabel": "Acreage",
    "storeys": 1,
    "variantCount": 1,
    "areaMinM2": 319.5,
    "areaMaxM2": 319.5,
    "bedsMin": 4,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 17.5,
    "facades": [],
    "heroImage": "assets/designs/ellsworth/ellsworth-320-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "acreage",
      "storeys": [
        1
      ],
      "beds": [
        4
      ],
      "baths": [
        2
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "300-350"
      ],
      "lotBands": [
        "18m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 101 CSG",
        "slug": "ellsworth-320",
        "name": "Ellsworth 320",
        "totalM2": 319.5,
        "livingM2": 228.5,
        "garageM2": 41.9,
        "alfrescoM2": 13.1,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": false,
        "frontageM": 15.54,
        "depthM": 24.88,
        "minLotWidthM": 17.5,
        "lotWidthVerified": false,
        "rooms": [
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LINEN",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "RUMPUS",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/ellsworth/ellsworth-320-concept-set.pdf",
        "planImages": [
          "assets/designs/ellsworth/ellsworth-320-floor.webp"
        ],
        "view3d": "assets/designs/ellsworth/ellsworth-320-3d.webp"
      }
    ]
  },
  {
    "slug": "halstead",
    "name": "Halstead",
    "nameProposed": true,
    "seriesCode": "SERIES 52 HDD",
    "collection": "split-level",
    "collectionLabel": "Split Level",
    "storeys": 2,
    "variantCount": 1,
    "areaMinM2": 438.3,
    "areaMaxM2": 438.3,
    "bedsMin": 4,
    "bedsMax": 4,
    "bathsMin": 2,
    "bathsMax": 2,
    "carsMin": 3,
    "carsMax": 3,
    "minLotWidthM": 23.5,
    "facades": [],
    "heroImage": "assets/designs/halstead/halstead-438-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "split-level",
      "storeys": [
        2
      ],
      "beds": [
        4
      ],
      "baths": [
        2
      ],
      "cars": [
        3
      ],
      "sizeBands": [
        "350-plus"
      ],
      "lotBands": [
        "20m-plus"
      ]
    },
    "variants": [
      {
        "code": "SERIES 52 HDD1",
        "slug": "halstead-438",
        "name": "Halstead 438",
        "totalM2": 438.3,
        "livingM2": 281.0,
        "garageM2": 76.4,
        "alfrescoM2": null,
        "beds": 4,
        "baths": 2,
        "powder": 1,
        "cars": 3,
        "storeys": 2,
        "perDwelling": false,
        "frontageM": 21.54,
        "depthM": 23.57,
        "minLotWidthM": 23.5,
        "lotWidthVerified": false,
        "rooms": [
          "BALCONY",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DECK",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "LOUNGE",
          "MASTER",
          "PDR",
          "PORCH",
          "RETREAT",
          "RUMPUS",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/halstead/halstead-438-concept-set.pdf",
        "planImages": [
          "assets/designs/halstead/halstead-438-lower.webp",
          "assets/designs/halstead/halstead-438-upper.webp"
        ],
        "view3d": "assets/designs/halstead/halstead-438-3d.webp"
      }
    ]
  },
  {
    "slug": "marlow",
    "name": "Marlow",
    "nameProposed": true,
    "seriesCode": "SERIES 49 DDA",
    "collection": "duplex",
    "collectionLabel": "Duplex & Dual Living",
    "storeys": 1,
    "variantCount": 1,
    "areaMinM2": 226.6,
    "areaMaxM2": 226.6,
    "bedsMin": 5,
    "bedsMax": 5,
    "bathsMin": 3,
    "bathsMax": 3,
    "carsMin": 1,
    "carsMax": 1,
    "minLotWidthM": 14.5,
    "facades": [],
    "heroImage": "assets/designs/marlow/marlow-227-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "duplex",
      "storeys": [
        1
      ],
      "beds": [
        5
      ],
      "baths": [
        3
      ],
      "cars": [
        1
      ],
      "sizeBands": [
        "200-250"
      ],
      "lotBands": [
        "16m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 49 DDA1",
        "slug": "marlow-227",
        "name": "Marlow 227",
        "totalM2": 226.6,
        "livingM2": 107.3,
        "garageM2": 22.4,
        "alfrescoM2": 10.2,
        "beds": 5,
        "baths": 3,
        "powder": 0,
        "cars": 1,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 12.77,
        "depthM": 19.55,
        "minLotWidthM": 14.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "BED 5",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH"
        ],
        "planPdf": "assets/plans/marlow/marlow-227-concept-set.pdf",
        "planImages": [
          "assets/designs/marlow/marlow-227-floor.webp"
        ],
        "view3d": "assets/designs/marlow/marlow-227-3d.webp"
      }
    ]
  },
  {
    "slug": "norwood",
    "name": "Norwood",
    "nameProposed": true,
    "seriesCode": "SERIES 56 DDC",
    "collection": "duplex",
    "collectionLabel": "Duplex & Dual Living",
    "storeys": 1,
    "variantCount": 1,
    "areaMinM2": 290.6,
    "areaMaxM2": 290.6,
    "bedsMin": 3,
    "bedsMax": 3,
    "bathsMin": 4,
    "bathsMax": 4,
    "carsMin": 1,
    "carsMax": 1,
    "minLotWidthM": 13.5,
    "facades": [],
    "heroImage": "assets/designs/norwood/norwood-291-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "duplex",
      "storeys": [
        1
      ],
      "beds": [
        3
      ],
      "baths": [
        4
      ],
      "cars": [
        1
      ],
      "sizeBands": [
        "250-300"
      ],
      "lotBands": [
        "14m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 56 DDC1",
        "slug": "norwood-291",
        "name": "Norwood 291",
        "totalM2": 290.6,
        "livingM2": 113.3,
        "garageM2": 20.6,
        "alfrescoM2": 9.8,
        "beds": 3,
        "baths": 4,
        "powder": 2,
        "cars": 1,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 11.52,
        "depthM": 26.55,
        "minLotWidthM": 13.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PATIO",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/norwood/norwood-291-concept-set.pdf",
        "planImages": [
          "assets/designs/norwood/norwood-291-floor.webp"
        ],
        "view3d": "assets/designs/norwood/norwood-291-3d.webp"
      }
    ]
  },
  {
    "slug": "aylesbury",
    "name": "Aylesbury",
    "nameProposed": true,
    "seriesCode": "SERIES 58 DDD",
    "collection": "duplex",
    "collectionLabel": "Duplex & Dual Living",
    "storeys": 1,
    "variantCount": 2,
    "areaMinM2": 286.8,
    "areaMaxM2": 304.7,
    "bedsMin": 3,
    "bedsMax": 4,
    "bathsMin": 4,
    "bathsMax": 4,
    "carsMin": 2,
    "carsMax": 2,
    "minLotWidthM": 16.5,
    "facades": [],
    "heroImage": "assets/designs/aylesbury/aylesbury-287-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "duplex",
      "storeys": [
        1
      ],
      "beds": [
        3,
        4
      ],
      "baths": [
        4
      ],
      "cars": [
        2
      ],
      "sizeBands": [
        "250-300",
        "300-350"
      ],
      "lotBands": [
        "18m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 58 DDD1",
        "slug": "aylesbury-287",
        "name": "Aylesbury 287",
        "totalM2": 286.8,
        "livingM2": 124.9,
        "garageM2": 39.6,
        "alfrescoM2": 13.4,
        "beds": 3,
        "baths": 4,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 14.8,
        "depthM": 21.59,
        "minLotWidthM": 16.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/aylesbury/aylesbury-287-concept-set.pdf",
        "planImages": [
          "assets/designs/aylesbury/aylesbury-287-floor.webp"
        ],
        "view3d": "assets/designs/aylesbury/aylesbury-287-3d.webp"
      },
      {
        "code": "SERIES 58 DDD2",
        "slug": "aylesbury-305",
        "name": "Aylesbury 305",
        "totalM2": 304.7,
        "livingM2": 144.8,
        "garageM2": 39.6,
        "alfrescoM2": 10.8,
        "beds": 4,
        "baths": 4,
        "powder": 1,
        "cars": 2,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 14.8,
        "depthM": 23.88,
        "minLotWidthM": 16.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/aylesbury/aylesbury-305-concept-set.pdf",
        "planImages": [
          "assets/designs/aylesbury/aylesbury-305-floor.webp"
        ],
        "view3d": "assets/designs/aylesbury/aylesbury-305-3d.webp"
      }
    ]
  },
  {
    "slug": "stanmore",
    "name": "Stanmore",
    "nameProposed": true,
    "seriesCode": "SERIES 63 DDE",
    "collection": "duplex",
    "collectionLabel": "Duplex & Dual Living",
    "storeys": 1,
    "variantCount": 3,
    "areaMinM2": 285.5,
    "areaMaxM2": 319.1,
    "bedsMin": 3,
    "bedsMax": 4,
    "bathsMin": 4,
    "bathsMax": 4,
    "carsMin": 1,
    "carsMax": 1,
    "minLotWidthM": 17.5,
    "facades": [],
    "heroImage": "assets/designs/stanmore/stanmore-286-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "duplex",
      "storeys": [
        1
      ],
      "beds": [
        3,
        4
      ],
      "baths": [
        4
      ],
      "cars": [
        1
      ],
      "sizeBands": [
        "250-300",
        "300-350"
      ],
      "lotBands": [
        "18m",
        "20m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 63 DDE2",
        "slug": "stanmore-286",
        "name": "Stanmore 286",
        "totalM2": 285.5,
        "livingM2": 107.9,
        "garageM2": 19.0,
        "alfrescoM2": 12.8,
        "beds": 3,
        "baths": 4,
        "powder": 0,
        "cars": 1,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 15.93,
        "depthM": 18.61,
        "minLotWidthM": 17.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "STUDY"
        ],
        "planPdf": "assets/plans/stanmore/stanmore-286-concept-set.pdf",
        "planImages": [
          "assets/designs/stanmore/stanmore-286-floor.webp"
        ],
        "view3d": "assets/designs/stanmore/stanmore-286-3d.webp"
      },
      {
        "code": "SERIES 63 DDE1",
        "slug": "stanmore-304",
        "name": "Stanmore 304",
        "totalM2": 304.2,
        "livingM2": 117.5,
        "garageM2": 19.0,
        "alfrescoM2": 11.6,
        "beds": 3,
        "baths": 4,
        "powder": 2,
        "cars": 1,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 17.89,
        "depthM": 18.63,
        "minLotWidthM": 19.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/stanmore/stanmore-304-concept-set.pdf",
        "planImages": [
          "assets/designs/stanmore/stanmore-304-floor.webp"
        ],
        "view3d": "assets/designs/stanmore/stanmore-304-3d.webp"
      },
      {
        "code": "SERIES 63 DDE3",
        "slug": "stanmore-319",
        "name": "Stanmore 319",
        "totalM2": 319.1,
        "livingM2": 126.9,
        "garageM2": 19.0,
        "alfrescoM2": 9.7,
        "beds": 4,
        "baths": 4,
        "powder": 2,
        "cars": 1,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 17.73,
        "depthM": 18.61,
        "minLotWidthM": 19.5,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PDR",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/stanmore/stanmore-319-concept-set.pdf",
        "planImages": [
          "assets/designs/stanmore/stanmore-319-floor.webp"
        ],
        "view3d": "assets/designs/stanmore/stanmore-319-3d.webp"
      }
    ]
  },
  {
    "slug": "whitfield",
    "name": "Whitfield",
    "nameProposed": true,
    "seriesCode": "SERIES 68 DDH",
    "collection": "duplex",
    "collectionLabel": "Duplex & Dual Living",
    "storeys": 1,
    "variantCount": 2,
    "areaMinM2": 286.6,
    "areaMaxM2": 306.4,
    "bedsMin": 3,
    "bedsMax": 3,
    "bathsMin": 4,
    "bathsMax": 4,
    "carsMin": 1,
    "carsMax": 1,
    "minLotWidthM": 18.0,
    "facades": [],
    "heroImage": "assets/designs/whitfield/whitfield-287-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "duplex",
      "storeys": [
        1
      ],
      "beds": [
        3
      ],
      "baths": [
        4
      ],
      "cars": [
        1
      ],
      "sizeBands": [
        "250-300",
        "300-350"
      ],
      "lotBands": [
        "18m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 68 DDH2",
        "slug": "whitfield-287",
        "name": "Whitfield 287",
        "totalM2": 286.6,
        "livingM2": 108.9,
        "garageM2": 22.0,
        "alfrescoM2": 10.3,
        "beds": 3,
        "baths": 4,
        "powder": 2,
        "cars": 1,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 16.01,
        "depthM": 21.69,
        "minLotWidthM": 18.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "DINING",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH"
        ],
        "planPdf": "assets/plans/whitfield/whitfield-287-concept-set.pdf",
        "planImages": [
          "assets/designs/whitfield/whitfield-287-floor.webp"
        ],
        "view3d": "assets/designs/whitfield/whitfield-287-3d.webp"
      },
      {
        "code": "SERIES 68 DDH1",
        "slug": "whitfield-306",
        "name": "Whitfield 306",
        "totalM2": 306.4,
        "livingM2": 118.8,
        "garageM2": 22.0,
        "alfrescoM2": 10.3,
        "beds": 3,
        "baths": 4,
        "powder": 2,
        "cars": 1,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 16.01,
        "depthM": 21.69,
        "minLotWidthM": 18.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "ENS",
          "ENTRY",
          "GARAGE",
          "KITCHEN",
          "LDRY",
          "LIVING",
          "MASTER",
          "PORCH",
          "WIP",
          "WIR"
        ],
        "planPdf": "assets/plans/whitfield/whitfield-306-concept-set.pdf",
        "planImages": [
          "assets/designs/whitfield/whitfield-306-floor.webp"
        ],
        "view3d": "assets/designs/whitfield/whitfield-306-3d.webp"
      }
    ]
  },
  {
    "slug": "ashcombe",
    "name": "Ashcombe",
    "nameProposed": true,
    "seriesCode": "SERIES 65 DDF",
    "collection": "duplex",
    "collectionLabel": "Duplex & Dual Living",
    "storeys": 1,
    "variantCount": 1,
    "areaMinM2": 587.2,
    "areaMaxM2": 587.2,
    "bedsMin": 4,
    "bedsMax": 4,
    "bathsMin": 4,
    "bathsMax": 4,
    "carsMin": 1,
    "carsMax": 1,
    "minLotWidthM": 14.0,
    "facades": [],
    "heroImage": "assets/designs/ashcombe/ashcombe-587-3d.webp",
    "heroType": "3d-view",
    "filters": {
      "collection": "duplex",
      "storeys": [
        1
      ],
      "beds": [
        4
      ],
      "baths": [
        4
      ],
      "cars": [
        1
      ],
      "sizeBands": [
        "350-plus"
      ],
      "lotBands": [
        "14m"
      ]
    },
    "variants": [
      {
        "code": "SERIES 65 DDF",
        "slug": "ashcombe-587",
        "name": "Ashcombe 587",
        "totalM2": 587.2,
        "livingM2": 245.4,
        "garageM2": 22.2,
        "alfrescoM2": 21.1,
        "beds": 4,
        "baths": 4,
        "powder": 2,
        "cars": 1,
        "storeys": 1,
        "perDwelling": true,
        "frontageM": 12.09,
        "depthM": 19.07,
        "minLotWidthM": 14.0,
        "lotWidthVerified": false,
        "rooms": [
          "ALFRESCO",
          "BATH",
          "BED 2",
          "BED 3",
          "BED 4",
          "ENS",
          "FAMILY",
          "GARAGE",
          "MASTER",
          "PDR",
          "PORCH",
          "WIR"
        ],
        "planPdf": "assets/plans/ashcombe/ashcombe-587-concept-set.pdf",
        "planImages": [
          "assets/designs/ashcombe/ashcombe-587-floor.webp"
        ],
        "view3d": "assets/designs/ashcombe/ashcombe-587-3d.webp"
      }
    ]
  }
];

/* Flat variant list — handy for search, sitemaps and the compare tool. */
var LDC_VARIANTS = LDC_DESIGNS.flatMap(function (s) {
  return s.variants.map(function (v) {
    return Object.assign({}, v, {
      series: s.name,
      seriesSlug: s.slug,
      collection: s.collection,
      collectionLabel: s.collectionLabel
    });
  });
});

/* Does a series survive the current filter state? */
function ldcMatchesFilters(series, state) {
  return series.variants.some(function (v) {
    if (state.collection !== 'all' && series.collection !== state.collection) return false;
    if (state.storeys !== 'all' && String(v.storeys) !== state.storeys) return false;
    if (state.beds !== 'all') {
      var n = parseInt(state.beds, 10);
      if (n === 5 ? v.beds < 5 : v.beds !== n) return false;
    }
    if (state.baths !== 'all') {
      var b = parseInt(state.baths, 10);
      if (b === 3 ? v.baths < 3 : v.baths !== b) return false;
    }
    if (state.cars !== 'all') {
      var c = parseInt(state.cars, 10);
      if (c === 3 ? v.cars < 3 : v.cars !== c) return false;
    }
    if (state.size !== 'all' && ldcSizeBand(v.totalM2) !== state.size) return false;
    if (state.lot !== 'all' && ldcLotBand(v.minLotWidthM) !== state.lot) return false;
    return true;
  });
}

function ldcSizeBand(m2) {
  if (m2 < 200) return 'under-200';
  if (m2 < 250) return '200-250';
  if (m2 < 300) return '250-300';
  if (m2 < 350) return '300-350';
  return '350-plus';
}

function ldcLotBand(w) {
  if (w == null) return null;
  if (w <= 10.5) return '10m';
  if (w <= 12.5) return '12-5m';
  if (w <= 14) return '14m';
  if (w <= 16) return '16m';
  if (w <= 18) return '18m';
  if (w <= 20) return '20m';
  return '20m-plus';
}

/* Range label helpers — used on cards instead of the old price line. */
function ldcAreaLabel(s) {
  return s.areaMinM2 === s.areaMaxM2
    ? Math.round(s.areaMinM2) + 'm²'
    : Math.round(s.areaMinM2) + '–' + Math.round(s.areaMaxM2) + 'm²';
}

function ldcBedLabel(s) {
  return s.bedsMin === s.bedsMax ? s.bedsMin + ' bed' : s.bedsMin + '–' + s.bedsMax + ' bed';
}

/* Expose on window for pages that reference them explicitly. */
if (typeof window !== 'undefined') {
  window.LDC_DESIGNS = LDC_DESIGNS;
  window.LDC_VARIANTS = LDC_VARIANTS;
  window.LDC_FILTERS = LDC_FILTERS;
  window.ldcMatchesFilters = ldcMatchesFilters;
  window.ldcAreaLabel = ldcAreaLabel;
  window.ldcBedLabel = ldcBedLabel;
  window.ldcSizeBand = ldcSizeBand;
  window.ldcLotBand = ldcLotBand;
}
if (typeof module !== 'undefined') {
  module.exports = { LDC_DESIGNS: LDC_DESIGNS, LDC_VARIANTS: LDC_VARIANTS, LDC_FILTERS: LDC_FILTERS };
}
