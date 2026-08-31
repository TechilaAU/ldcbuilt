#!/usr/bin/env python3
"""Copy the AREI concept-set PDFs out of the supplied LDC pack and into the
repo under assets/plans/<series>/, using the site's slugs.

    python3 scripts/sync-plan-pdfs.py /path/to/unzipped/LDC

~120 MB total. If that is too heavy for the repo, point PLANS_BASE at a
CDN/S3 bucket instead and change the planPdf values in designs-data.js.
"""
import os, shutil, sys

PAIRS = [
 [
  "Residential Homes/Single Storey/Kensington Series ASA/SERIES 1 ASA1 -  CONCEPT SET.pdf",
  "assets/plans/kensington/kensington-212-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Kensington Series ASA/SERIES 1 ASA2 -  CONCEPT SET.pdf",
  "assets/plans/kensington/kensington-219-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Kensington Series ASA/SERIES 1 ASA3 -  CONCEPT SET.pdf",
  "assets/plans/kensington/kensington-220-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Kensington Series ASA/SERIES 1 ASA4 -  CONCEPT SET.pdf",
  "assets/plans/kensington/kensington-256-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Kensington Series ASA/SERIES 1 ASA5  -  CONCEPT SET.pdf",
  "assets/plans/kensington/kensington-283-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Oakely Series ASG/SERIES 9 ASG6 -  CONCEPT SET.pdf",
  "assets/plans/oakely/oakely-191-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Oakely Series ASG/SERIES 9 ASG1 - CONCEPT SET.pdf",
  "assets/plans/oakely/oakely-229-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Oakely Series ASG/SERIES 9 ASG2 -  CONCEPT SET.pdf",
  "assets/plans/oakely/oakely-234-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Oakely Series ASG/SERIES 9 ASG3 -  CONCEPT SET.pdf",
  "assets/plans/oakely/oakely-246-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Oakely Series ASG/SERIES 9 ASG4 -  CONCEPT SET.pdf",
  "assets/plans/oakely/oakely-306-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Oakely Series ASG/SERIES 9 ASG5 -  CONCEPT SET.pdf",
  "assets/plans/oakely/oakely-312-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Middleton Series ASL/SERIES 14 ASL1 - CONCEPT SET.pdf",
  "assets/plans/middleton/middleton-227-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Middleton Series ASL/SERIES 14 ASL2 - CONCEPT SET.pdf",
  "assets/plans/middleton/middleton-231-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Middleton Series ASL/SERIES 14 ASL3 - CONCEPT SET.pdf",
  "assets/plans/middleton/middleton-284-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Middleton Series ASL/SERIES 14 ASL5 - CONCEPT SET.pdf",
  "assets/plans/middleton/middleton-290-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Middleton Series ASL/SERIES 14 ASL4 - CONCEPT SET.pdf",
  "assets/plans/middleton/middleton-312-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Claremont Series BSB/SERIES 33 BSB1 - CONCEPT SET.pdf",
  "assets/plans/claremont/claremont-233-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Claremont Series BSB/SERIES 33 BSB2 - CONCEPT SET.pdf",
  "assets/plans/claremont/claremont-244-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Claremont Series BSB/SERIES 33 BSB3 - CONCEPT SET.pdf",
  "assets/plans/claremont/claremont-245-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Claremont Series BSB/SERIES 33 BSB4 - CONCEPT SET.pdf",
  "assets/plans/claremont/claremont-272-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Claremont Series BSB/SERIES 33 BSB5 - CONCEPT SET.pdf",
  "assets/plans/claremont/claremont-276-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Everly Series BSF/SERIES 37 BSF3 - CONCEPT SET.pdf",
  "assets/plans/everly/everly-205-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Everly Series BSF/SERIES 37 BSF1 - CONCEPT SET.pdf",
  "assets/plans/everly/everly-205-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Everly Series BSF/SERIES 37 BSF2 - CONCEPT SET.pdf",
  "assets/plans/everly/everly-214-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Everly Series BSF/SERIES 37 BSF4 - CONCEPT SET.pdf",
  "assets/plans/everly/everly-238-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Everly Series BSF/SERIES 37 BSF5 - CONCEPT SET.pdf",
  "assets/plans/everly/everly-272-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Ashford Series BSK/SERIES 46 BSK1 - CONCEPT SET.pdf",
  "assets/plans/ashford/ashford-163-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Ashford Series BSK/SERIES 46 BSK2 - CONCEPT SET.pdf",
  "assets/plans/ashford/ashford-166-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Ashford Series BSK/SERIES 46 BSK3 - CONCEPT SET.pdf",
  "assets/plans/ashford/ashford-188-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Ashford Series BSK/SERIES 46 BSK4  - CONCEPT SET.pdf",
  "assets/plans/ashford/ashford-196-concept-set.pdf"
 ],
 [
  "Residential Homes/Single Storey/Ashford Series BSK/SERIES 46 BSK5 - CONCEPT SET.pdf",
  "assets/plans/ashford/ashford-198-concept-set.pdf"
 ],
 [
  "Residential Homes/Double Storey/SERIES 4 DSA/SERIES 4 DSA1 -  CONCEPT SET.pdf",
  "assets/plans/brighton/brighton-251-concept-set.pdf"
 ],
 [
  "Residential Homes/Double Storey/SERIES 4 DSA/SERIES 4 DSA3 -  CONCEPT SET.pdf",
  "assets/plans/brighton/brighton-256-concept-set.pdf"
 ],
 [
  "Residential Homes/Double Storey/SERIES 4 DSA/SERIES 4 DSA2 -  CONCEPT SET.pdf",
  "assets/plans/brighton/brighton-283-concept-set.pdf"
 ],
 [
  "Residential Homes/Double Storey/SERIES 21 DSC/SERIES 21 DSC1 - CONCEPT SET.pdf",
  "assets/plans/hampton/hampton-295-concept-set.pdf"
 ],
 [
  "Residential Homes/Double Storey/SERIES 54 ADJ/SERIES 54 ADJ1 - CONCEPT SET.pdf",
  "assets/plans/wentworth/wentworth-324-concept-set.pdf"
 ],
 [
  "Residential Homes/Double Storey/SERIES 54 ADJ/SERIES 54 ADJ2 - CONCEPT SET.pdf",
  "assets/plans/wentworth/wentworth-360-concept-set.pdf"
 ],
 [
  "Residential Homes/Double Storey/SERIES 54 ADJ/SERIES 54 ADJ3 - CONCEPT SET.pdf",
  "assets/plans/wentworth/wentworth-363-concept-set.pdf"
 ],
 [
  "Residential Homes/Double Storey/SERIES 55 ADK/SERIES 55 ADK1 - CONCEPT SET.pdf",
  "assets/plans/carlisle/carlisle-390-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 8 ASF/SERIES 8 ASF1 -  CONCEPT SET.pdf",
  "assets/plans/bellwood/bellwood-224-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 8 ASF/SERIES 8 ASF2 -  CONCEPT SET.pdf",
  "assets/plans/bellwood/bellwood-236-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 8 ASF/SERIES 8 ASF4 -  CONCEPT SET.pdf",
  "assets/plans/bellwood/bellwood-268-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 8 ASF/SERIES 8 ASF3 -  CONCEPT SET.pdf",
  "assets/plans/bellwood/bellwood-270-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 8 ASF/SERIES 8 ASF5 -  CONCEPT SET.pdf",
  "assets/plans/bellwood/bellwood-331-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 13 ASK/SERIES 13 ASK1 - CONCEPT SET.pdf",
  "assets/plans/fairmont/fairmont-276-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 13 ASK/SERIES 13 ASK2 - CONCEPT SET.pdf",
  "assets/plans/fairmont/fairmont-284-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 13 ASK/SERIES 13 ASK3 - CONCEPT SET.pdf",
  "assets/plans/fairmont/fairmont-324-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 13 ASK/SERIES 13 ASK4 - CONCEPT SET.pdf",
  "assets/plans/fairmont/fairmont-335-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 13 ASK/SERIES 13 ASK5 - CONCEPT SET.pdf",
  "assets/plans/fairmont/fairmont-356-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 18 ASP/SERIES 18 ASP1 - CONCEPT SET.pdf",
  "assets/plans/harrington/harrington-214-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 18 ASP/SERIES 18 ASP2 - CONCEPT SET.pdf",
  "assets/plans/harrington/harrington-233-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 18 ASP/SERIES 18 ASP3 - CONCEPT SET.pdf",
  "assets/plans/harrington/harrington-234-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 18 ASP/SERIES 18 ASP4 - CONCEPT SET.pdf",
  "assets/plans/harrington/harrington-251-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 18 ASP/SERIES 18 ASP5 - CONCEPT SET.pdf",
  "assets/plans/harrington/harrington-312-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 18 ASP/SERIES 18 ASP6 - CONCEPT SET.pdf",
  "assets/plans/harrington/harrington-359-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 28 ASX/SERIES 28 ASX1 - CONCEPT SET.pdf",
  "assets/plans/thornbury/thornbury-240-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 28 ASX/SERIES 28 ASX2 - CONCEPT SET.pdf",
  "assets/plans/thornbury/thornbury-272-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 28 ASX/SERIES 28 ASX3 - CONCEPT SET.pdf",
  "assets/plans/thornbury/thornbury-308-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 28 ASX/SERIES 28 ASX4 - CONCEPT SET.pdf",
  "assets/plans/thornbury/thornbury-334-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 28 ASX/SERIES 28 ASX5 - CONCEPT SET.pdf",
  "assets/plans/thornbury/thornbury-341-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 40 BSI/SERIES 40 BSI1 - CONCEPT SET.pdf",
  "assets/plans/braxton/braxton-233-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 40 BSI/SERIES 40 BSI2 - CONCEPT SET.pdf",
  "assets/plans/braxton/braxton-267-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 40 BSI/SERIES 40 BSI3 - CONCEPT SET.pdf",
  "assets/plans/braxton/braxton-300-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 40 BSI/SERIES 40 BSI4 - CONCEPT SET.pdf",
  "assets/plans/braxton/braxton-379-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 40 BSI/SERIES 40 BSI5 - CONCEPT SET.pdf",
  "assets/plans/braxton/braxton-380-concept-set.pdf"
 ],
 [
  "Acreage Homes/SERIES 101 CSG/SERIES 101 CSG - CONCEPT SET.pdf",
  "assets/plans/ellsworth/ellsworth-320-concept-set.pdf"
 ],
 [
  "Split Level Homes/SERIES 52 HDD1/SERIES 52 HDD1 - CONCEPT SET.pdf",
  "assets/plans/halstead/halstead-438-concept-set.pdf"
 ],
 [
  "Duplex Homes/Single Storey/SERIES 49 DDA/SERIES 49 DDA1 - CONCEPT SET.pdf",
  "assets/plans/marlow/marlow-227-concept-set.pdf"
 ],
 [
  "Duplex Homes/Single Storey/SERIES 56 DDC/SERIES 56 DDC1 - CONCEPT SET.pdf",
  "assets/plans/norwood/norwood-291-concept-set.pdf"
 ],
 [
  "Duplex Homes/Single Storey/SERIES 58 DDD/SERIES 58 DDD1 - CONCEPT SET.pdf",
  "assets/plans/aylesbury/aylesbury-287-concept-set.pdf"
 ],
 [
  "Duplex Homes/Single Storey/SERIES 58 DDD/SERIES 58 DDD2 - CONCEPT SET.pdf",
  "assets/plans/aylesbury/aylesbury-305-concept-set.pdf"
 ],
 [
  "Duplex Homes/Single Storey/SERIES 63 DDE/SERIES 63 DDE2 - CONCEPT SET.pdf",
  "assets/plans/stanmore/stanmore-286-concept-set.pdf"
 ],
 [
  "Duplex Homes/Single Storey/SERIES 63 DDE/SERIES 63 DDE1 - CONCEPT SET.pdf",
  "assets/plans/stanmore/stanmore-304-concept-set.pdf"
 ],
 [
  "Duplex Homes/Single Storey/SERIES 63 DDE/SERIES 63 DDE3 - CONCEPT SET.pdf",
  "assets/plans/stanmore/stanmore-319-concept-set.pdf"
 ],
 [
  "Duplex Homes/Single Storey/SERIES 68 DDH/SERIES 68 DDH2 - CONCEPT SET.pdf",
  "assets/plans/whitfield/whitfield-287-concept-set.pdf"
 ],
 [
  "Duplex Homes/Single Storey/SERIES 68 DDH/SERIES 68 DDH1 - CONCEPT SET.pdf",
  "assets/plans/whitfield/whitfield-306-concept-set.pdf"
 ],
 [
  "Duplex Homes/Double Storey/SERIES 65 DDF/SERIES 65 DDF - CONCEPT SET.pdf",
  "assets/plans/ashcombe/ashcombe-587-concept-set.pdf"
 ]
]

def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src_root = sys.argv[1]
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    missing = 0
    for src, dest in PAIRS:
        s = os.path.join(src_root, src)
        d = os.path.join(repo, dest)
        if not os.path.exists(s):
            print("MISSING:", src); missing += 1; continue
        os.makedirs(os.path.dirname(d), exist_ok=True)
        shutil.copy2(s, d)
    print(f"{len(PAIRS) - missing}/{len(PAIRS)} plans copied")

if __name__ == "__main__":
    main()
