const QUIZ_SETS = [
  {
    "title": "พื้นฐานโรคติดเชื้อและเชื้อก่อโรค",
    "en": "Infectious Diseases & Pathogens",
    "questions": [
      {
        "q": "ตามเอกสาร Infection หมายถึงข้อใด",
        "o": [
          "การมีเชื้ออยู่ในสิ่งแวดล้อมเท่านั้น",
          "ภาวะที่เชื้อก่อโรคเกาะ/ผ่านแนวกั้น เข้าสู่เนื้อเยื่อ และเพิ่มจำนวน",
          "การตอบสนองของภูมิคุ้มกันทุกชนิด",
          "การมีไข้โดยไม่มีเชื้อ"
        ],
        "a": 1,
        "e": "เอกสารอธิบาย infection ว่าเป็นภาวะที่ pathogenic microorganisms adhere, penetrate host defenses, invade tissues และ multiply",
        "p": "หน้า 8"
      },
      {
        "q": "Infectious disease เกิดขึ้นเมื่อใด",
        "o": [
          "เมื่อ host เปลี่ยนจากภาวะปกติเป็นโรคจากการติดเชื้อ",
          "เมื่อพบ normal microbiota ทุกครั้ง",
          "เมื่อมี antibody ในเลือด",
          "เมื่อไม่มีอาการ"
        ],
        "a": 0,
        "e": "Infectious disease คือโรคที่เกิดจาก pathogenic microorganisms เข้าสู่ host และทำให้เซลล์ เนื้อเยื่อ หรืออวัยวะเปลี่ยนจากภาวะปกติเป็นโรค",
        "p": "หน้า 9"
      },
      {
        "q": "ข้อใดเป็นตัวอย่างของ true pathogen ตามเอกสาร",
        "o": [
          "<i>Candida albicans</i>",
          "<i>Staphylococcus aureus</i>",
          "<i>Yersinia pestis</i>",
          "normal microbiota"
        ],
        "a": 2,
        "e": "เอกสารยก <i>Yersinia pestis</i> เป็น true pathogen และก่อ plague",
        "p": "หน้า 11"
      },
      {
        "q": "ข้อใดเป็น opportunistic pathogen ตามเอกสาร",
        "o": [
          "<i>Yersinia pestis</i>",
          "<i>Plasmodium</i> spp.",
          "<i>Candida albicans</i>",
          "ทุกข้อ"
        ],
        "a": 2,
        "e": "เอกสารยก pseudomembranous candidiasis จาก <i>Candida albicans</i> เป็น opportunistic infection",
        "p": "หน้า 11"
      },
      {
        "q": "Pseudomembranous colitis จาก <i>Clostridioides difficile</i> เกี่ยวข้องกับกลไกใด",
        "o": [
          "host defenses ถูกเพิ่มขึ้น",
          "altered normal microbiota",
          "vertical transmission เท่านั้น",
          "neural spread"
        ],
        "a": 1,
        "e": "เอกสารระบุว่า pseudomembranous colitis เกิดหลัง normal microbiota เปลี่ยนแปลง โดยเฉพาะหลังการใช้ยาปฏิชีวนะ",
        "p": "หน้า 11"
      },
      {
        "q": "การที่ normal microbiota ไปเจริญในตำแหน่งที่ไม่ใช่ตำแหน่งตามธรรมชาติ อาจทำให้เกิดโรคใดตามเอกสาร",
        "o": [
          "Prosthetic valve endocarditis",
          "Malaria",
          "Rabies",
          "Amoebic liver abscess"
        ],
        "a": 0,
        "e": "เอกสารยก prosthetic valve endocarditis จาก <i>Staphylococcus aureus</i> เป็นตัวอย่าง",
        "p": "หน้า 11"
      },
      {
        "q": "ข้อใดอธิบาย facultative intracellular microorganism ได้ตรงที่สุด",
        "o": [
          "อยู่ภายนอกเซลล์เท่านั้น",
          "อยู่ในเซลล์ได้แต่ไม่จำเป็นต้องอยู่ในเซลล์ตลอดเวลา",
          "อยู่ในเซลล์เท่านั้นเสมอ",
          "เป็นไวรัสเท่านั้น"
        ],
        "a": 1,
        "e": "เอกสารแบ่งการสิงอยู่ใน host เป็น extracellular, facultative intracellular และ obligate intracellular",
        "p": "หน้า 9"
      },
      {
        "q": "ข้อใดเป็นตัวอย่างของ obligate intracellular microorganism ตามแนวคิดในเอกสาร",
        "o": [
          "Virus",
          "<i>Staphylococcus aureus</i>",
          "<i>Ascaris lumbricoides</i>",
          "<i>Candida</i> spp."
        ],
        "a": 0,
        "e": "เอกสารอธิบายไวรัสว่าเป็น obligate intracellular host cell เพื่อ survival และ replication",
        "p": "หน้า 46"
      },
      {
        "q": "Pathogenesis of infection หมายถึงอะไร",
        "o": [
          "จุดเริ่มต้นของกระบวนการติดเชื้อจนไปสู่โรคติดเชื้อ",
          "การรักษาโรคติดเชื้อ",
          "การตรวจ antibody",
          "การสร้างวัคซีน"
        ],
        "a": 0,
        "e": "เอกสารนิยาม pathogenesis of infection ว่าเป็นจุดเริ่มต้นของกระบวนการติดเชื้อจนไปสู่การเกิดโรคติดเชื้อ",
        "p": "หน้า 10"
      },
      {
        "q": "ข้อใดเป็นกลุ่มเชื้อก่อโรคที่สรุปไว้ในเอกสาร",
        "o": [
          "Viruses, bacteria, fungi และ parasites",
          "เฉพาะ bacteria และ viruses",
          "เฉพาะ fungi และ parasites",
          "เฉพาะ protozoa"
        ],
        "a": 0,
        "e": "สรุปท้ายเอกสารแบ่ง infectious agents เป็น viruses, bacteria Gram+/−, fungi และ parasites ได้แก่ protozoa และ helminths",
        "p": "หน้า 91"
      }
    ]
  },
  {
    "title": "การแพร่กระจายและทางเข้าสู่ร่างกาย",
    "en": "Transmission & Portals of Entry",
    "questions": [
      {
        "q": "การติดเชื้อผ่าน respiratory tract มักเกิดจากวิธีใด",
        "o": [
          "Inhalation",
          "กินอาหารปนเปื้อน",
          "sexual contact เท่านั้น",
          "แมลงกัดเท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารระบุ respiratory tract เป็น portal of entry โดยการ inhalation และยก influenza/pneumonia เป็นตัวอย่าง",
        "p": "หน้า 15"
      },
      {
        "q": "อาหารหรือน้ำที่ปนเปื้อน fecal material สัมพันธ์กับ portal of entry ใด",
        "o": [
          "Skin",
          "Respiratory tract",
          "Gastrointestinal tract",
          "Urogenital tract"
        ],
        "a": 2,
        "e": "Gastrointestinal tract รับเชื้อผ่าน food or drink ที่ปนเปื้อน fecal material",
        "p": "หน้า 15"
      },
      {
        "q": "HBV, HCV และ HIV ในเอกสารเป็นตัวอย่างของการเข้าสู่ร่างกายทางใด",
        "o": [
          "Parenteral",
          "Respiratory",
          "Gastrointestinal",
          "Neural"
        ],
        "a": 0,
        "e": "Parenteral route ผ่านทางเลือด เช่น injection, bite หรือ sexual intercourse ตามเอกสาร",
        "p": "หน้า 15"
      },
      {
        "q": "Vertical transmission สามารถเกิดจากทางใดตามเอกสาร",
        "o": [
          "Placental-fetal, ระหว่างคลอด และ maternal milk",
          "เฉพาะการไอ",
          "เฉพาะการกินอาหาร",
          "เฉพาะแมลงกัด"
        ],
        "a": 0,
        "e": "เอกสารแบ่ง vertical transmission เป็น placental-fetal, during birth และ maternal milk",
        "p": "หน้า 15"
      },
      {
        "q": "Hematogenous spread หมายถึงอะไร",
        "o": [
          "การแพร่ไปตามน้ำเหลือง",
          "การแพร่ไปตามกระแสเลือด",
          "การแพร่ตามเส้นประสาท",
          "การแพร่โดยการสัมผัส"
        ],
        "a": 1,
        "e": "Hematogenous spread คือการแพร่ไปตามกระแสโลหิต",
        "p": "หน้า 16"
      },
      {
        "q": "เชื้อใดในเอกสารเป็นตัวอย่างของ neural spread",
        "o": [
          "<i>Rabies virus</i>",
          "<i>Plasmodium</i> spp.",
          "<i>Helicobacter pylori</i>",
          "<i>Candida</i> spp."
        ],
        "a": 0,
        "e": "เอกสารยก rabies virus และ varicella zoster virus เป็นตัวอย่างของ neural spread",
        "p": "หน้า 16"
      },
      {
        "q": "ข้อใดเป็นตัวอย่างของ placental-fetal route ตามเอกสาร",
        "o": [
          "<i>Treponema pallidum</i> และ <i>Toxoplasma gondii</i>",
          "<i>Staphylococcus aureus</i> เท่านั้น",
          "<i>Clostridium botulinum</i> เท่านั้น",
          "<i>Ascaris lumbricoides</i> เท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารยก HIV, hepatitis B virus, <i>Treponema pallidum</i> และ <i>Toxoplasma gondii</i> เป็นตัวอย่าง",
        "p": "หน้า 16"
      },
      {
        "q": "ข้อใดเป็น direct extension",
        "o": [
          "เชื้อแพร่โดยตรงไปยังอวัยวะข้างเคียง",
          "เชื้อแพร่ผ่านรก",
          "เชื้อแพร่ทางเส้นประสาท",
          "เชื้อแพร่ทางอาหาร"
        ],
        "a": 0,
        "e": "Direct extension คือการแพร่กระจายโดยตรงไปยังอวัยวะข้างเคียง",
        "p": "หน้า 16"
      },
      {
        "q": "การแพร่เชื้อที่ทำให้โรคเป็น communicable/contagious disease เรียกว่าอะไร",
        "o": [
          "Mode of transmission",
          "Incubation period",
          "Convalescent period",
          "Toxemia"
        ],
        "a": 0,
        "e": "เอกสารระบุ mode of transmission เป็นการแพร่กระจายของเชื้อที่ทำให้โรคติดเชื้อเป็นโรคติดต่อ",
        "p": "หน้า 34"
      },
      {
        "q": "ข้อใดเป็นองค์ประกอบหนึ่งของ virulence factors ในแผนภาพการแพร่เชื้อ",
        "o": [
          "Attachment/Adherence",
          "Convalescence",
          "Antibody titer เท่านั้น",
          "CBC เท่านั้น"
        ],
        "a": 0,
        "e": "แผนภาพระบุการเกาะติด/ยึดเกาะเป็นส่วนหนึ่งของกระบวนการ และ virulence factors ช่วยให้เชื้อก่อโรคได้",
        "p": "หน้า 14, 33"
      }
    ]
  },
  {
    "title": "กลไกการเกิดโรคจากการติดเชื้อ",
    "en": "Mechanisms of Infection",
    "questions": [
      {
        "q": "กลไกใดเป็นหนึ่งใน 4 กลไกที่เชื้อก่อโรคได้ตามเอกสาร",
        "o": [
          "Enter host cells and cause cell death",
          "สร้าง RBC",
          "เพิ่ม platelet",
          "ยับยั้งทุก immune response"
        ],
        "a": 0,
        "e": "เอกสารสรุป 4 กลไก ได้แก่ cell death, toxic products, induce host immune responses และ transformation",
        "p": "หน้า 17"
      },
      {
        "q": "HIV ทำลายเซลล์เป้าหมายสำคัญใดในกลไก cell death",
        "o": [
          "CD4+ T-lymphocytes",
          "RBC",
          "Platelets",
          "Hepatocytes เท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารยก HIV และ CD4+ T-lymphocytes เป็นตัวอย่างของ lytic replication/cell death",
        "p": "หน้า 18"
      },
      {
        "q": "CD4+ T-cell ต่ำกว่าเท่าใดในเอกสารที่สัมพันธ์กับ AIDS",
        "o": [
          "<50 cells/µL",
          "<100 cells/µL",
          "<200 cells/µL",
          ">1,000 cells/µL"
        ],
        "a": 2,
        "e": "เอกสารระบุ HIV หาก CD4 T-cells น้อยกว่า 200 cells/µL → AIDS",
        "p": "หน้า 18"
      },
      {
        "q": "Endotoxin คืออะไร",
        "o": [
          "LPS ใน outer membrane ของ gram-negative bacteria",
          "protein toxin จากไวรัส",
          "capsid ของ virus",
          "ergosterol ของ fungus"
        ],
        "a": 0,
        "e": "Endotoxin คือ LPS ใน outer membrane ของ gram-negative bacteria และ lipid A เป็นส่วนที่รับผิดชอบต่อพิษ",
        "p": "หน้า 19"
      },
      {
        "q": "ส่วนใดของ LPS รับผิดชอบ toxic properties ตามเอกสาร",
        "o": [
          "Lipid A",
          "Capsule",
          "Peptidoglycan",
          "Ergosterol"
        ],
        "a": 0,
        "e": "เอกสารระบุว่า lipid A component รับผิดชอบ toxic properties ของ LPS",
        "p": "หน้า 19"
      },
      {
        "q": "ข้อใดเป็นตัวอย่างของ exotoxin ที่ทำให้ flaccid paralysis",
        "o": [
          "Botulinum toxin",
          "Tetanus toxin",
          "Endotoxin",
          "Hyaluronidase"
        ],
        "a": 0,
        "e": "<i>Clostridium botulinum</i> สร้าง botulinum toxin ทำให้ flaccid paralysis",
        "p": "หน้า 19"
      },
      {
        "q": "Tetanus toxin ทำให้เกิดลักษณะใด",
        "o": [
          "Flaccid paralysis",
          "Spastic paralysis/muscle spasm",
          "Jaundice",
          "Flask-shaped ulcer"
        ],
        "a": 1,
        "e": "<i>Clostridium tetani</i> สร้าง tetanospasmin ซึ่งทำให้ muscle contraction และ spastic paralysis",
        "p": "หน้า 19"
      },
      {
        "q": "Hyaluronidase ส่งเสริมกระบวนการใด",
        "o": [
          "การ invasion และ spreading ของ microbes ไปยังเนื้อเยื่อลึก",
          "การสร้าง antibody",
          "การสร้าง hemoglobin",
          "การสร้าง viral capsid"
        ],
        "a": 0,
        "e": "เอกสารระบุ hyaluronidase ช่วย invasion และ spreading ของ microbes ไปยัง deeper regions และเป็น virulence factor",
        "p": "หน้า 20"
      },
      {
        "q": "Granulomatous inflammation ตามเอกสารสัมพันธ์กับเชื้อกลุ่มใด",
        "o": [
          "Mycobacteria และ fungi",
          "เฉพาะ viruses",
          "เฉพาะ helminths",
          "เฉพาะ Staphylococci"
        ],
        "a": 0,
        "e": "ตารางชนิด inflammation ระบุ granulomatous inflammation พบกับ mycobacteria และ fungi",
        "p": "หน้า 21"
      },
      {
        "q": "M protein ของ <i>Streptococcus pyogenes</i> ที่เลียนแบบ heart tissue เกี่ยวข้องกับกลไกใด",
        "o": [
          "Molecular mimicry (type II)",
          "Immune complex (type III)",
          "Direct cytolysis",
          "Endotoxin"
        ],
        "a": 0,
        "e": "เอกสารอธิบาย M protein molecular mimicry/cross-reacting antigen → rheumatic fever",
        "p": "หน้า 22"
      }
    ]
  },
  {
    "title": "Pattern of disease และ Sepsis",
    "en": "Disease Pattern & Sepsis",
    "questions": [
      {
        "q": "Incubation period คือช่วงใด",
        "o": [
          "จาก initial contact จนปรากฏ first symptoms",
          "ช่วงที่อาการรุนแรงที่สุดเท่านั้น",
          "ช่วงพักฟื้น",
          "ช่วงหลังหายโรค"
        ],
        "a": 0,
        "e": "Incubation period คือช่วงจาก initial contact with infectious agent ถึง appearance of first symptoms",
        "p": "หน้า 26"
      },
      {
        "q": "Prodromal stage มีลักษณะอย่างไร",
        "o": [
          "อาการพัฒนาแต่ไม่จำเพาะและค่อนข้าง vague",
          "ไม่มีอาการใด ๆ",
          "เป็นช่วงที่เชื้อหยุดแบ่งตัว",
          "เป็นช่วงพักฟื้น"
        ],
        "a": 0,
        "e": "Prodromal stage มีอาการไม่จำเพาะ เช่น ปวดศีรษะ ปวดกล้ามเนื้อ fatigue และ malaise",
        "p": "หน้า 27"
      },
      {
        "q": "Period of invasion มีลักษณะใด",
        "o": [
          "เชื้อรุกราน tissue อื่น ๆ และมีระดับเชื้อสูง/พิษสูง",
          "เป็นช่วงไม่มีอาการ",
          "เป็นช่วงที่ antibody หายหมด",
          "เป็นช่วง latent เสมอ"
        ],
        "a": 0,
        "e": "Period of invasion คือเชื้อรุกรานไปยัง tissue อื่น ๆ มี multiplication สูงและเกิด fever กับอาการจำเพาะมากขึ้น",
        "p": "หน้า 28"
      },
      {
        "q": "Convalescent period คืออะไร",
        "o": [
          "ช่วงที่ผู้ป่วยค่อย ๆ ฟื้น strength และ health",
          "ช่วงแรกหลัง exposure",
          "ช่วงที่เชื้อเพิ่มจำนวนสูงสุด",
          "ช่วงที่เชื้อเข้าร่างกาย"
        ],
        "a": 0,
        "e": "Convalescent period คือช่วงที่ผู้ป่วยฟื้นกำลังและสุขภาพค่อย ๆ กลับมา",
        "p": "หน้า 29"
      },
      {
        "q": "โรคแบบ latent ตามเอกสารหมายถึงอะไร",
        "o": [
          "เชื้อยัง inactive อยู่ระยะหนึ่งแล้วกลับ active ทำให้เกิดอาการ",
          "โรคที่เกิดเร็วและหายเร็ว",
          "โรคที่เกิดเฉพาะในโรงพยาบาล",
          "โรคที่ไม่มีเชื้อ"
        ],
        "a": 0,
        "e": "Latent infection มี causative agent remain inactive แล้วกลับ active เช่น varicella zoster และ herpes simplex",
        "p": "หน้า 30"
      },
      {
        "q": "Bacteremia หมายถึงอะไร",
        "o": [
          "มี bacteria ใน bloodstream ซึ่งอาจ transient",
          "มี virus ใน bloodstream",
          "มี toxin ใน bloodstream",
          "มี fungi ใน tissue เท่านั้น"
        ],
        "a": 0,
        "e": "Bacteremia คือ presence of bacteria in bloodstream และอาจเป็น transient",
        "p": "หน้า 31"
      },
      {
        "q": "Septicemia ในเอกสารหมายถึงอะไร",
        "o": [
          "bacteria กำลังเพิ่มจำนวนใน bloodstream",
          "มี virus ใน bloodstream",
          "มี toxin ใน bloodstream",
          "การมี parasite ในลำไส้"
        ],
        "a": 0,
        "e": "Septicemia คือ bacteria (พบบ่อยที่สุด) multiplying in bloodstream",
        "p": "หน้า 31"
      },
      {
        "q": "Viremia หมายถึงอะไร",
        "o": [
          "Presence of viruses in bloodstream",
          "Presence of bacteria in bloodstream",
          "Presence of toxins in bloodstream",
          "Presence of fungi in skin"
        ],
        "a": 0,
        "e": "Viremia คือ presence of viruses in bloodstream",
        "p": "หน้า 31"
      },
      {
        "q": "Toxemia หมายถึงอะไร",
        "o": [
          "Presence of toxins in bloodstream",
          "Presence of bacteria in stool",
          "Presence of viruses in nerve",
          "Presence of fungi in lung"
        ],
        "a": 0,
        "e": "Toxemia คือ presence of toxins in bloodstream",
        "p": "หน้า 31"
      },
      {
        "q": "Sepsis ตามเอกสารประกอบด้วยอะไร",
        "o": [
          "Whole-body inflammatory state/SIRS และ presence of infection",
          "ไข้เพียงอย่างเดียว",
          "bacteremia เท่านั้น",
          "leukocytosis เท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารระบุ sepsis เป็น serious medical condition ที่มี whole-body inflammatory state (SIRS) และ presence of infection",
        "p": "หน้า 31"
      }
    ]
  },
  {
    "title": "การวินิจฉัยโรคติดเชื้อ",
    "en": "Diagnosis of Infectious Diseases",
    "questions": [
      {
        "q": "Gram stain ในเอกสารใช้เป็นหลักสำหรับอะไร",
        "o": [
          "Bacteria",
          "Fungi เท่านั้น",
          "Virus เท่านั้น",
          "Helminths"
        ],
        "a": 0,
        "e": "เอกสารระบุ Gram เป็นวิธีสำคัญสำหรับ bacteria",
        "p": "หน้า 39"
      },
      {
        "q": "AFB stain ใช้ช่วยตรวจหาเชื้อใดตามเอกสาร",
        "o": [
          "<i>Mycobacterium tuberculosis</i>",
          "<i>Candida albicans</i>",
          "<i>Plasmodium</i> spp.",
          "<i>Entamoeba histolytica</i>"
        ],
        "a": 0,
        "e": "เอกสารระบุ AFB สำหรับ TB",
        "p": "หน้า 39"
      },
      {
        "q": "Giemsa stain ในเอกสารใช้กับโรค/เชื้อใด",
        "o": [
          "Malaria และ <i>Leishmania</i> spp.",
          "เฉพาะ Candida",
          "เฉพาะ TB",
          "เฉพาะ helminths"
        ],
        "a": 0,
        "e": "เอกสารยก Giemsa สำหรับ malaria, <i>Campylobacter</i> spp. และ <i>Leishmania</i> spp.",
        "p": "หน้า 39"
      },
      {
        "q": "Silver stain ตามเอกสารช่วยตรวจอะไร",
        "o": [
          "Fungus และ Amoeba",
          "เฉพาะ bacteria",
          "เฉพาะ viruses",
          "เฉพาะ helminths"
        ],
        "a": 0,
        "e": "เอกสารระบุ Silver stain สำหรับ fungus และ amoeba",
        "p": "หน้า 39"
      },
      {
        "q": "Mucicarmine stain ตามเอกสารสัมพันธ์กับเชื้อใด",
        "o": [
          "Cryptococci",
          "<i>Plasmodium</i>",
          "<i>Mycobacterium</i>",
          "<i>Staphylococcus</i>"
        ],
        "a": 0,
        "e": "เอกสารระบุ Mucicarmine สำหรับ Cryptococci",
        "p": "หน้า 39"
      },
      {
        "q": "PAS stain ในเอกสารใช้ช่วยตรวจอะไร",
        "o": [
          "Fungi และ Amebae",
          "เฉพาะ viruses",
          "เฉพาะ bacteria",
          "เฉพาะ helminths"
        ],
        "a": 0,
        "e": "เอกสารระบุ PAS สำหรับ fungi และ amebae",
        "p": "หน้า 39"
      },
      {
        "q": "Culture ตามเอกสารถูกระบุว่าเป็นอย่างไร",
        "o": [
          "Gold standard และสามารถทำ drug sensitivity ได้",
          "ใช้ได้เฉพาะไวรัส",
          "ไม่ใช้เพื่อ identification",
          "ใช้เฉพาะใน pathology"
        ],
        "a": 0,
        "e": "เอกสารระบุ cultures เป็น gold standard และสามารถทำ drug sensitivity",
        "p": "หน้า 40"
      },
      {
        "q": "การตรวจ antigen/antibody จัดอยู่ในกลุ่มใดตามเอกสาร",
        "o": [
          "Immunologic studies",
          "Light microscopy เท่านั้น",
          "Culture เท่านั้น",
          "Mass spectrometry เท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารจัด antigen/antibody เช่น ATK COVID-19 ไว้ใน immunologic studies",
        "p": "หน้า 40"
      },
      {
        "q": "PCR ในการวินิจฉัยโรคติดเชื้อใช้ตรวจสิ่งใด",
        "o": [
          "DNA หรือ RNA",
          "เฉพาะ glucose",
          "เฉพาะ lipid",
          "เฉพาะ RBC"
        ],
        "a": 0,
        "e": "เอกสารระบุ PCR สำหรับ DNA, RNA",
        "p": "หน้า 40"
      },
      {
        "q": "MALDI-TOF mass spectrometry มีประโยชน์เด่นด้านใด",
        "o": [
          "ระบุชนิดของเชื้ออย่างรวดเร็วจาก protein/องค์ประกอบของเชื้อ",
          "วัด platelet count",
          "ตรวจ antibody เท่านั้น",
          "รักษาเชื้อโดยตรง"
        ],
        "a": 0,
        "e": "เอกสารอธิบาย mass spectrometry โดยเฉพาะ MALDI-TOF ว่าช่วยระบุชนิดเชื้อได้รวดเร็วและแม่นยำ",
        "p": "หน้า 41"
      }
    ]
  },
  {
    "title": "Prion และ Viruses",
    "en": "Prions & Viruses",
    "questions": [
      {
        "q": "Prion disease เกิดจากกลไกใด",
        "o": [
          "Aggregation และ intercellular spread ของ misfolded prion protein",
          "การเพิ่มจำนวนของ bacteria",
          "การสร้าง fungal hyphae",
          "การติดเชื้อ helminth"
        ],
        "a": 0,
        "e": "เอกสารอธิบาย prion disease จากการ aggregation และ intercellular spread ของ misfolded prion protein",
        "p": "หน้า 44"
      },
      {
        "q": "Creutzfeldt-Jakob disease (CJD) เป็นโรคของเชื้อชนิดใด",
        "o": [
          "Prion",
          "Virus",
          "Bacteria",
          "Fungus"
        ],
        "a": 0,
        "e": "CJD เป็น prion disease และเป็น prion disease ที่พบบ่อยที่สุดในมนุษย์ตามเอกสาร",
        "p": "หน้า 44"
      },
      {
        "q": "ลักษณะเด่นทางพยาธิสัณฐานของ prion disease คืออะไร",
        "o": [
          "Spongiform change",
          "Caseous necrosis",
          "Flask-shaped ulcer",
          "Pseudohyphae"
        ],
        "a": 0,
        "e": "เอกสารระบุ rapid progressive neurodegenerative disorders และ spongiform change",
        "p": "หน้า 44"
      },
      {
        "q": "ไวรัสประกอบด้วยสารพันธุกรรมชนิดใดตามเอกสาร",
        "o": [
          "RNA หรือ DNA",
          "เฉพาะ RNA",
          "เฉพาะ DNA",
          "Protein อย่างเดียว"
        ],
        "a": 0,
        "e": "Virus มี RNA หรือ DNA หุ้มด้วย protein capsid และอาจมี envelope",
        "p": "หน้า 46"
      },
      {
        "q": "ไวรัสต้องอาศัยอะไรเพื่อ survival และ replication",
        "o": [
          "Obligate intracellular host cell",
          "ดินเท่านั้น",
          "เลือดเท่านั้น",
          "น้ำดีเท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารระบุไวรัสเป็น obligate intracellular host cell เพื่อ survival และ replication",
        "p": "หน้า 46"
      },
      {
        "q": "Tropism ของไวรัสสัมพันธ์สำคัญกับอะไร",
        "o": [
          "การมี receptor ที่เหมาะสมบน host cell",
          "ขนาดของ RBC",
          "ระดับ platelet",
          "ชนิดของ antibody เท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารอธิบาย tissue tropism ว่าขึ้นกับการมี receptor ที่ไวรัสจับได้บน host cell",
        "p": "หน้า 47"
      },
      {
        "q": "SARS-CoV-2 ใช้ receptor ใดตามเอกสาร",
        "o": [
          "ACE2",
          "CD4",
          "M protein",
          "Lipid A"
        ],
        "a": 0,
        "e": "เอกสารระบุ SARS-CoV-2 ใช้ ACE2 receptor ของ host cell ซึ่งพบมากในเนื้อเยื่อปอด",
        "p": "หน้า 47"
      },
      {
        "q": "Coronavirus เป็นไวรัสชนิดใดตามเอกสาร",
        "o": [
          "RNA virus",
          "DNA virus",
          "Prion",
          "Bacterium"
        ],
        "a": 0,
        "e": "เอกสารระบุ coronavirus เป็น RNA virus",
        "p": "หน้า 48"
      },
      {
        "q": "Herpes simplex virus type 1/2 มีลักษณะใดตามเอกสาร",
        "o": [
          "สามารถหลบซ่อนในปมประสาทและ reactivation ได้",
          "สร้าง LPS",
          "เป็น helminth",
          "ทำให้ flask-shaped ulcer"
        ],
        "a": 0,
        "e": "เอกสารระบุ HSV เข้าไปหลบซ่อนใน ganglia และ reactivation ทำให้เกิด vesicles/ulcers",
        "p": "หน้า 53"
      },
      {
        "q": "HPV types 16 และ 18 ตามเอกสารสัมพันธ์กับโรคใด",
        "o": [
          "Cervical cancer",
          "Malaria",
          "Tuberculosis",
          "Amoebic colitis"
        ],
        "a": 0,
        "e": "เอกสารระบุ HPV 16, 18 และบางสายพันธุ์อื่นสัมพันธ์กับ cervical cancer",
        "p": "หน้า 55"
      }
    ]
  },
  {
    "title": "Bacterial infections",
    "en": "Bacterial Infections",
    "questions": [
      {
        "q": "ลักษณะของ bacteria ตามเอกสารคือข้อใด",
        "o": [
          "Prokaryotic cell ไม่มี nucleus ที่แท้จริง",
          "Eukaryotic cell มี nucleus",
          "ไม่มี cell membrane",
          "เป็น obligate intracellular ทุกชนิด"
        ],
        "a": 0,
        "e": "เอกสารอธิบาย bacteria เป็น prokaryotic cell ไม่มี nucleus, mitochondria และ ER",
        "p": "หน้า 60"
      },
      {
        "q": "Staphylococci มีการเรียงตัวอย่างไรในการย้อม Gram",
        "o": [
          "Clusters",
          "Chains",
          "Pairs เท่านั้น",
          "Helical"
        ],
        "a": 0,
        "e": "เอกสารสรุป streptococci เป็น chains, diplococci เป็น pairs และ staphylococci เป็น clusters",
        "p": "หน้า 60"
      },
      {
        "q": "<i>Staphylococcus aureus</i> เป็น Gram-positive และมีรูปร่าง/การเรียงตัวอย่างไร",
        "o": [
          "Grape-like clusters",
          "Long chains",
          "Diplococci only",
          "Spiral rods"
        ],
        "a": 0,
        "e": "เอกสารระบุ <i>S. aureus</i> เป็น gram-positive bacteria และเห็นเป็น grape-like clusters",
        "p": "หน้า 61"
      },
      {
        "q": "Exfoliative toxins ของ <i>Staphylococcus aureus</i> ทำให้เกิดโรคใด",
        "o": [
          "Scalded Skin Syndrome",
          "Tetanus",
          "Malaria",
          "PSGN"
        ],
        "a": 0,
        "e": "Epidermolytic toxins A/B หรือ exfoliatins เกี่ยวข้องกับ scalded skin syndrome",
        "p": "หน้า 61"
      },
      {
        "q": "<i>Streptococcus pyogenes</i> สัมพันธ์กับโรคใด",
        "o": [
          "Streptococcal pharyngitis",
          "Rabies",
          "Cholera",
          "Candidiasis"
        ],
        "a": 0,
        "e": "เอกสารระบุ streptococcal pharyngitis/tonsillitis และ fever",
        "p": "หน้า 62"
      },
      {
        "q": "ภาวะแทรกซ้อนของ <i>Streptococcus pyogenes</i> ที่เกิดจาก molecular mimicry คืออะไร",
        "o": [
          "Rheumatic fever",
          "Malaria",
          "Amoebic liver abscess",
          "Cysticercosis"
        ],
        "a": 0,
        "e": "M protein molecular mimicry เป็นกลไกที่สัมพันธ์กับ rheumatic fever",
        "p": "หน้า 62"
      },
      {
        "q": "<i>Streptococcus pneumoniae</i> มีลักษณะเด่นใด",
        "o": [
          "Diplococci และมี capsule",
          "Grape-like clusters ไม่มี capsule",
          "Acid-fast bacilli",
          "Yeast with capsule"
        ],
        "a": 0,
        "e": "เอกสารระบุ diplococci มี capsule และก่อ pneumonia/bacteremia",
        "p": "หน้า 64"
      },
      {
        "q": "<i>Helicobacter pylori</i> สัมพันธ์กับโรคใด",
        "o": [
          "Gastritis และ peptic ulcer และสัมพันธ์กับ gastric cancer",
          "Tetanus",
          "Tuberculosis",
          "Candidiasis"
        ],
        "a": 0,
        "e": "เอกสารระบุจับ mucosa กระเพาะ/ลำไส้ ทำ gastritis/duodenitis, peptic ulcer และสัมพันธ์ gastric cancer",
        "p": "หน้า 65"
      },
      {
        "q": "ลักษณะสำคัญของ <i>Mycobacterium tuberculosis</i> คือข้อใด",
        "o": [
          "Acid-fast bacilli และ granulomatous inflammation with caseous necrosis",
          "Gram-positive cocci",
          "Yeast with wide capsule",
          "Flask-shaped ulcer"
        ],
        "a": 0,
        "e": "TB เป็น AFB-positive และทำ granulomatous inflammation แบบ caseous necrosis",
        "p": "หน้า 67"
      },
      {
        "q": "Syphilis เกิดจากเชื้อใดตามเอกสาร",
        "o": [
          "<i>Treponema pallidum</i>",
          "<i>Streptococcus pneumoniae</i>",
          "<i>Mycobacterium leprae</i>",
          "<i>Helicobacter pylori</i>"
        ],
        "a": 0,
        "e": "เอกสารระบุ syphilis เกิดจาก <i>Treponema pallidum</i> และแบ่ง primary, secondary, tertiary/late stages",
        "p": "หน้า 70"
      }
    ]
  },
  {
    "title": "Fungal infections",
    "en": "Fungal Infections",
    "questions": [
      {
        "q": "Fungi ตามเอกสารเป็นเซลล์แบบใด",
        "o": [
          "Eukaryotic cell",
          "Prokaryotic cell",
          "ไม่มี cell wall",
          "เป็น virus"
        ],
        "a": 0,
        "e": "เอกสารระบุ fungi เป็น eukaryotic cells ที่มี nucleus และ cell wall",
        "p": "หน้า 72"
      },
      {
        "q": "รูปร่างของ fungi ที่กล่าวถึงในเอกสารมีอะไรบ้าง",
        "o": [
          "Yeast, hyphae และ pseudohyphae",
          "Cocci และ bacilli เท่านั้น",
          "Capsid และ envelope",
          "Trophozoite เท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารสรุปรูปร่าง fungi เป็น yeast, hyphae และ pseudohyphae",
        "p": "หน้า 72"
      },
      {
        "q": "องค์ประกอบสำคัญใน fungal cell wall/membrane ตามเอกสารคืออะไร",
        "o": [
          "Ergosterol และ polysaccharide",
          "LPS และ lipid A",
          "Peptidoglycan เท่านั้น",
          "Capsid"
        ],
        "a": 0,
        "e": "เอกสารระบุผนัง/โครงสร้างของ fungi เกี่ยวข้องกับ ergosterol และ polysaccharide",
        "p": "หน้า 72"
      },
      {
        "q": "<i>Candida</i> spp. มักก่อ infection ใน host แบบใด",
        "o": [
          "Immunocompromised host",
          "เฉพาะ healthy host เท่านั้น",
          "เฉพาะสัตว์",
          "เฉพาะพืช"
        ],
        "a": 0,
        "e": "เอกสารจัด candidiasis เป็น opportunistic infection ใน immunocompromised host",
        "p": "หน้า 74"
      },
      {
        "q": "ลักษณะของ <i>Candida</i> ที่ระบุในเอกสารคืออะไร",
        "o": [
          "Nonbranching pseudohyphae และ yeast forms",
          "Acid-fast rods",
          "Grape-like cocci",
          "Flask-shaped trophozoites"
        ],
        "a": 0,
        "e": "เอกสารระบุ nonbranching pseudohyphae + yeast forms",
        "p": "หน้า 74"
      },
      {
        "q": "Oral thrush ตามเอกสารสัมพันธ์กับเชื้อใด",
        "o": [
          "<i>Candida</i>",
          "<i>Mycobacterium tuberculosis</i>",
          "<i>Plasmodium</i>",
          "<i>Treponema pallidum</i>"
        ],
        "a": 0,
        "e": "Oral thrush เป็น candidiasis ในช่องปาก",
        "p": "หน้า 74"
      },
      {
        "q": "ลักษณะ hyphae ของเชื้อราในภาพรวมตามเอกสารเป็นแบบใด",
        "o": [
          "Narrow, septated hyphae with 45° angle dichotomous branching",
          "Acid-fast bacilli",
          "Diplococci",
          "Grape-like clusters"
        ],
        "a": 0,
        "e": "เอกสารยก narrow, septated hyphae with 45° dichotomous branching เป็นลักษณะหนึ่งของ fungal morphology",
        "p": "หน้า 75"
      },
      {
        "q": "<i>Cryptococcus</i> ตามเอกสารมีลักษณะใด",
        "o": [
          "Yeast with wide capsular halo",
          "Flask-shaped ulcer",
          "Grape-like clusters",
          "Acid-fast bacilli"
        ],
        "a": 0,
        "e": "เอกสารระบุ <i>Cryptococcus</i> เป็น yeast with wide capsular halo",
        "p": "หน้า 75"
      },
      {
        "q": "<i>Histoplasma</i> ตามเอกสารมีลักษณะใด",
        "o": [
          "Yeast form ขนาด 2–5 µm และ unequal budding",
          "Large helminth",
          "Gram-negative diplococcus",
          "Flask-shaped amoeba"
        ],
        "a": 0,
        "e": "เอกสารระบุ Histoplasma 2–5 µm, yeast form, unequal budding",
        "p": "หน้า 75"
      },
      {
        "q": "เชื้อราใดต่อไปนี้อยู่ในกลุ่มตัวอย่างที่เอกสารกล่าวถึง",
        "o": [
          "<i>Aspergillus</i>",
          "<i>Plasmodium</i>",
          "<i>Taenia solium</i>",
          "<i>Treponema pallidum</i>"
        ],
        "a": 0,
        "e": "เอกสารยก histoplasmosis, coccidioidomycosis, aspergillosis, candidiasis และ cryptococcosis",
        "p": "หน้า 75"
      }
    ]
  },
  {
    "title": "Protozoal infections",
    "en": "Protozoa",
    "questions": [
      {
        "q": "Protozoa ตามเอกสารมีลักษณะทั่วไปอย่างไร",
        "o": [
          "Unicellular และไม่สังเคราะห์แสง",
          "Multicellular 3–10 mm",
          "Prokaryotic",
          "เป็น virus"
        ],
        "a": 0,
        "e": "เอกสารระบุ protozoa เป็น unicellular, no photosynthetic และขนาดประมาณ 1–50 µm",
        "p": "หน้า 77"
      },
      {
        "q": "Amoebic colitis เกิดจากเชื้อใด",
        "o": [
          "<i>Entamoeba histolytica</i>",
          "<i>Trichomonas vaginalis</i>",
          "<i>Plasmodium</i> spp.",
          "<i>Giardia lamblia</i>"
        ],
        "a": 0,
        "e": "Amoebic colitis/amebic dysentery เกิดจาก <i>Entamoeba histolytica</i>",
        "p": "หน้า 79"
      },
      {
        "q": "การติดต่อของ amoebic colitis ตามเอกสารเป็นทางใด",
        "o": [
          "Fecal-oral route จากอาหารปนเปื้อน cyst",
          "Neural spread",
          "Sexual contact เท่านั้น",
          "Mosquito bite"
        ],
        "a": 0,
        "e": "เอกสารระบุรับประทานอาหารที่ปนเปื้อน cyst และเป็น fecal-oral route",
        "p": "หน้า 79"
      },
      {
        "q": "แผลในลำไส้ของ amoebic colitis มีลักษณะใด",
        "o": [
          "Flask-shaped ulcer",
          "Caseous necrosis",
          "Pseudomembrane เท่านั้น",
          "Scalded skin"
        ],
        "a": 0,
        "e": "<i>E. histolytica</i> ทำลายเยื่อบุและลุกลามเป็นแผลรูป flask",
        "p": "หน้า 79"
      },
      {
        "q": "Amoebic liver abscess เกิดจากการแพร่ของเชื้อไปยังอวัยวะใด",
        "o": [
          "Liver",
          "Heart เท่านั้น",
          "Skin เท่านั้น",
          "Kidney เท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารระบุ amoeba แพร่ผ่าน lymph/blood ไปตับและทำ amoebic liver abscess",
        "p": "หน้า 79"
      },
      {
        "q": "Trichomoniasis เกิดจากเชื้อใด",
        "o": [
          "<i>Trichomonas vaginalis</i>",
          "<i>Entamoeba histolytica</i>",
          "<i>Plasmodium</i> spp.",
          "<i>Giardia lamblia</i>"
        ],
        "a": 0,
        "e": "Trichomoniasis เกิดจาก <i>Trichomonas vaginalis</i>",
        "p": "หน้า 80"
      },
      {
        "q": "ลักษณะเด่นของ trichomoniasis ตามเอกสารคือข้อใด",
        "o": [
          "Yellow-green frothy discharge",
          "Flask-shaped ulcer",
          "Night anal itching",
          "Hemolytic anemia"
        ],
        "a": 0,
        "e": "เอกสารระบุ yellow-green and frothy discharge และ painful intercourse/urination",
        "p": "หน้า 80"
      },
      {
        "q": "Malaria เกิดจากเชื้อกลุ่มใด",
        "o": [
          "<i>Plasmodium</i> spp.",
          "<i>Entamoeba</i> spp.",
          "<i>Candida</i> spp.",
          "<i>Treponema</i> spp."
        ],
        "a": 0,
        "e": "เอกสารระบุ <i>Plasmodium</i> spp. ก่อ malaria",
        "p": "หน้า 81"
      },
      {
        "q": "พาหะของ malaria ตามเอกสารคืออะไร",
        "o": [
          "Female <i>Anopheles</i> mosquito",
          "Male mosquito เท่านั้น",
          "Dog",
          "Freshwater snail"
        ],
        "a": 0,
        "e": "เอกสารระบุ malaria ถ่ายทอดผ่านการกัดของยุงก้นปล่องเพศเมียที่ติดเชื้อ",
        "p": "หน้า 81"
      },
      {
        "q": "การวินิจฉัย malaria ที่กล่าวในเอกสารคือวิธีใด",
        "o": [
          "ตรวจเลือดด้วยกล้องจุลทรรศน์",
          "Gram stain เท่านั้น",
          "Mucicarmine เท่านั้น",
          "Chest X-ray เท่านั้น"
        ],
        "a": 0,
        "e": "เอกสารระบุการวินิจฉัย malaria ด้วยการตรวจเลือดด้วยกล้องจุลทรรศน์ เป็นต้น",
        "p": "หน้า 81"
      }
    ]
  },
  {
    "title": "Helminthic infections & Review",
    "en": "Helminths & Review",
    "questions": [
      {
        "q": "Helminths ตามเอกสารเป็นสิ่งมีชีวิตแบบใด",
        "o": [
          "Multicellular organism",
          "Unicellular organism",
          "Virus",
          "Prion"
        ],
        "a": 0,
        "e": "เอกสารระบุ helminths เป็น multicellular organisms และ adults ขนาด 3–10 mm",
        "p": "หน้า 82"
      },
      {
        "q": "Helminth infection มีแนวโน้มทำให้เกิดการเปลี่ยนแปลงของเม็ดเลือดขาวใด",
        "o": [
          "Eosinophilia",
          "Neutropenia เท่านั้น",
          "Basopenia",
          "Thrombocytosis เสมอ"
        ],
        "a": 0,
        "e": "เอกสารระบุ helminths induce eosinophilia in infected tissues",
        "p": "หน้า 82"
      },
      {
        "q": "เชื้อใดเป็น pinworm",
        "o": [
          "<i>Enterobius vermicularis</i>",
          "<i>Ascaris lumbricoides</i>",
          "<i>Opisthorchis viverrini</i>",
          "<i>Taenia solium</i>"
        ],
        "a": 0,
        "e": "<i>Enterobius vermicularis</i> คือ pinworm/pinworm disease",
        "p": "หน้า 83"
      },
      {
        "q": "อาการเด่นของ <i>Enterobius vermicularis</i> คืออะไร",
        "o": [
          "คันทวารหนัก โดยเฉพาะกลางคืน",
          "Hemoptysis",
          "Flaccid paralysis",
          "Jaundice เสมอ"
        ],
        "a": 0,
        "e": "เอกสารระบุ pruritus ani โดยเฉพาะกลางคืนเมื่อพยาธิออกมาวางไข่",
        "p": "หน้า 84"
      },
      {
        "q": "Hookworm ติดต่อเข้าสู่ร่างกายตามวงจรที่อธิบายอย่างไร",
        "o": [
          "Larvae ในดินไชผ่านผิวหนัง",
          "กิน cyst ในน้ำเท่านั้น",
          "ยุงกัด",
          "sexual contact"
        ],
        "a": 0,
        "e": "ไข่ผ่านอุจจาระ → larvae ในดิน → ไชผ่านผิวหนัง → ผ่านเลือดไปปอด",
        "p": "หน้า 85"
      },
      {
        "q": "<i>Gnathostoma spinigerum</i> ติดต่อจากสิ่งใดตามเอกสาร",
        "o": [
          "การกิน 3rd larva ที่ encyst ในปลาน้ำจืด/สัตว์น้ำบางชนิดแบบดิบ",
          "ยุงกัด",
          "การหายใจ",
          "การสัมผัสผู้ป่วยโดยตรง"
        ],
        "a": 0,
        "e": "เอกสารระบุคนเป็น accidental host และติดเชื้อจากการรับประทาน 3rd larva ที่ encyst ในปลาน้ำจืด เช่น ปลาช่อน ปลาดุก ปลาไหล กบดิบ",
        "p": "หน้า 87"
      },
      {
        "q": "Internal/visceral gnathostomiasis อาจทำให้เกิดภาวะแทรกซ้อนใด",
        "o": [
          "Encephalitis และ cerebral hemorrhage",
          "Peptic ulcer",
          "Scalded skin syndrome",
          "PSGN"
        ],
        "a": 0,
        "e": "เอกสารระบุ internal/visceral gnathostomiasis อาจทำให้ encephalitis และ cerebral hemorrhage",
        "p": "หน้า 87"
      },
      {
        "q": "ตัวแก่ของ <i>Opisthorchis viverrini</i> อยู่บริเวณใด",
        "o": [
          "ท่อน้ำดี",
          "ลำไส้ใหญ่เท่านั้น",
          "ปอดเท่านั้น",
          "ผิวหนัง"
        ],
        "a": 0,
        "e": "เอกสารระบุ adult worm เกาะดูดผนังของ bile duct",
        "p": "หน้า 88"
      },
      {
        "q": "<i>Taenia solium</i> คือพยาธิชนิดใด",
        "o": [
          "พยาธิตืดหมู",
          "พยาธิตืดวัว",
          "พยาธิปากขอ",
          "พยาธิเข็มหมุด"
        ],
        "a": 0,
        "e": "เอกสารระบุ <i>T. solium</i> = pork tapeworm",
        "p": "หน้า 89"
      },
      {
        "q": "<i>Taenia saginata</i> คือพยาธิชนิดใด",
        "o": [
          "พยาธิตืดวัว",
          "พยาธิตืดหมู",
          "พยาธิใบไม้ตับ",
          "พยาธิตัวจี๊ด"
        ],
        "a": 0,
        "e": "เอกสารระบุ <i>T. saginata</i> = beef tapeworm",
        "p": "หน้า 89"
      }
    ]
  }
];

const state = { setIndex: 0, questionIndex: 0, score: 0, answered: false, timer: null, timeLeft: 30 };
const $ = (id) => document.getElementById(id);

function renderSets() {
  const grid = $("setGrid");
  grid.innerHTML = QUIZ_SETS.map((s, i) => `
    <button class="set-card" data-set="${i}">
      <span class="set-number">${i+1}</span>
      <span class="set-title">${s.title}</span>
      <span class="set-meta">10 ข้อ · ข้อละ 30 วินาที</span>
    </button>`).join("");
  grid.querySelectorAll(".set-card").forEach(btn => btn.addEventListener("click", () => startSet(Number(btn.dataset.set))));
}

function startSet(i) {
  state.setIndex=i; state.questionIndex=0; state.score=0; state.answered=false;
  show("quizScreen"); hide("homeScreen"); hide("resultScreen");
  renderQuestion();
}

function renderQuestion() {
  clearInterval(state.timer);
  const set=QUIZ_SETS[state.setIndex], item=set.questions[state.questionIndex];
  state.answered=false; state.timeLeft=30;
  $("setLabel").textContent=`ชุดที่ ${state.setIndex+1} — ${set.title}`;
  $("questionCount").textContent=`ข้อ ${state.questionIndex+1} / 10`;
  $("questionText").innerHTML=item.q;
  $("progressFill").style.width=`${(state.questionIndex/10)*100}%`;
  $("answers").innerHTML=item.o.map((o,i)=>`<button class="answer-btn" data-index="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("");
  $("answers").querySelectorAll(".answer-btn").forEach(btn=>btn.addEventListener("click",()=>answer(Number(btn.dataset.index))));
  $("explanation").classList.add("hidden");
  $("nextBtn").classList.add("hidden");
  $("timeoutNote").classList.add("hidden");
  updateTimer();
  state.timer=setInterval(()=>{ state.timeLeft--; updateTimer(); if(state.timeLeft<=0){ clearInterval(state.timer); answer(-1,true); } },1000);
}

function updateTimer() {
  $("timer").textContent=state.timeLeft;
  $("timerBar").style.width=`${(state.timeLeft/30)*100}%`;
  $("timerWrap").classList.toggle("urgent",state.timeLeft<=10);
}

function answer(index, timedOut=false) {
  if(state.answered) return;
  state.answered=true; clearInterval(state.timer);
  const item=QUIZ_SETS[state.setIndex].questions[state.questionIndex];
  const buttons=[...$("answers").querySelectorAll(".answer-btn")];
  buttons.forEach(b=>b.disabled=true);
  if(index===item.a) { state.score++; buttons[index].classList.add("correct"); $("resultIcon").textContent="✓"; $("resultTitle").textContent="ตอบถูก"; }
  else { if(index>=0) buttons[index].classList.add("wrong"); buttons[item.a].classList.add("correct"); $("resultIcon").textContent="✕"; $("resultTitle").textContent=timedOut?"หมดเวลา":"ตอบไม่ถูก"; }
  if(timedOut) $("timeoutNote").classList.remove("hidden");
  $("explanationText").innerHTML=item.e;
  $("pageRef").textContent=item.p;
  $("explanation").classList.remove("hidden");
  $("nextBtn").classList.remove("hidden");
  $("nextBtn").textContent=state.questionIndex===9?"ดู Feedback":"ข้อถัดไป";
  $("progressFill").style.width=`${((state.questionIndex+1)/10)*100}%`;
}

function nextQuestion() {
  if(!state.answered) return;
  if(state.questionIndex<9) { state.questionIndex++; renderQuestion(); } else showResult();
}

function feedbackText(score) {
  if(score>=9) return {title:"ทำได้ดีมาก",body:"ความเข้าใจภาพรวมของชุดนี้อยู่ในระดับดีมาก ลองทบทวนรายละเอียดของตัวอย่างเชื้อและจุดวินิจฉัยที่แตกต่างกันเพื่อเพิ่มความแม่นยำ",level:"excellent"};
  if(score>=7) return {title:"พื้นฐานค่อนข้างดี",body:"ควรทบทวนข้อที่ตอบผิด โดยเน้นคำสำคัญ กลไกการเกิดโรค และความสัมพันธ์ระหว่างเชื้อกับลักษณะทางคลินิก/พยาธิวิทยา",level:"good"};
  if(score>=5) return {title:"ควรทบทวนเพิ่มเติม",body:"แนะนำกลับไปอ่านหัวข้อของชุดนี้อีกครั้ง โดยเฉพาะคำจำกัดความ ลักษณะจำเพาะของเชื้อ และกลไกการเกิดโรค แล้วลองทำชุดนี้ซ้ำ",level:"review"};
  return {title:"ควรทบทวนหัวข้อนี้อย่างเป็นระบบ",body:"แนะนำอ่านเนื้อหาของชุดนี้ตั้งแต่ต้น โดยเน้นคำศัพท์สำคัญ กลไก การแพร่เชื้อ การวินิจฉัย และตัวอย่างโรค แล้วจึงกลับมาทำแบบทดสอบอีกครั้ง",level:"needs"};
}

function showResult() {
  const fb=feedbackText(state.score), set=QUIZ_SETS[state.setIndex];
  clearInterval(state.timer); hide("quizScreen"); show("resultScreen");
  $("resultSet").textContent=`ชุดที่ ${state.setIndex+1} — ${set.title}`;
  $("scoreNumber").textContent=state.score;
  $("feedbackTitle").textContent=fb.title;
  $("feedbackBody").textContent=fb.body;
  $("feedbackCard").className=`feedback-card ${fb.level}`;
  $("scoreBar").style.width=`${state.score*10}%`;
}

function show(id) { $(id).classList.remove("hidden"); }
function hide(id) { $(id).classList.add("hidden"); }

$("nextBtn").addEventListener("click",nextQuestion);
$("retryBtn").addEventListener("click",()=>startSet(state.setIndex));
$("otherBtn").addEventListener("click",()=>{ hide("resultScreen"); show("homeScreen"); window.scrollTo({top:0,behavior:"smooth"}); });
$("homeBtn").addEventListener("click",()=>{ clearInterval(state.timer); hide("quizScreen"); hide("resultScreen"); show("homeScreen"); });
renderSets();
