const drugData = [
    {
        code: "0025-2911",
        name: "Paracetamol",
        usage: "Pain reliever, fever reducer",
        sideEffects: "Liver damage (overdose), allergic reactions, rash, nausea",
        composition: {
            "C": 8,
            "H": 9,
            "N": 1,
            "O": 2
        }
    },
    {
        code: "0031-8310",
        name: "Ibuprofen",
        usage: "Anti-inflammatory, pain relief, fever reducer",
        sideEffects: "Upset stomach, nausea, dizziness, kidney damage, heart risks",
        composition: {
            "C": 13,
            "H": 18,
            "O": 2
        }
    },
    {
        code: "0040-2045",
        name: "Amoxicillin",
        usage: "Antibiotic for bacterial infections",
        sideEffects: "Diarrhea, allergic reactions, rash, nausea, yeast infections",
        composition: {
            "C": 16,
            "H": 19,
            "N": 3,
            "O": 5,
            "S": 1
        }
    },
    {
        code: "0069-0365",
        name: "Metformin",
        usage: "Type 2 diabetes treatment",
        sideEffects: "Nausea, diarrhea, abdominal pain, lactic acidosis (rare)",
        composition: {
            "C": 4,
            "H": 11,
            "N": 5
        }
    },
    {
        code: "0094-2986",
        name: "Atorvastatin",
        usage: "Cholesterol-lowering medication",
        sideEffects: "Muscle pain, liver enzyme changes, headache, digestive issues",
        composition: {
            "C": 33,
            "H": 35,
            "F": 1,
            "N": 2,
            "O": 5
        }
    },
    {
        code: "43598-0573",
        name: "Azithromycin",
        usage: "Antibiotic for bacterial infections",
        sideEffects: "Diarrhea, nausea, abdominal pain, liver enzyme increase",
        composition: {
            "C": 38,
            "H": 72,
            "N": 2,
            "O": 12
        }
    },
    {
        code: "31722-0720",
        name: "Losartan",
        usage: "Blood pressure control, heart failure treatment",
        sideEffects: "Dizziness, headache, low blood pressure, high potassium",
        composition: {
            "C": 22,
            "H": 23,
            "Cl": 1,
            "N": 6,
            "O": 1
        }
    },
    {
        code: "68180-988",
        name: "Amlodipine",
        usage: "Blood pressure control, chest pain treatment",
        sideEffects: "Swelling, dizziness, fatigue, heart palpitations",
        composition: {
            "C": 20,
            "H": 25,
            "Cl": 1,
            "N": 2,
            "O": 5
        }
    },
    {
        code: "00378-6685",
        name: "Omeprazole",
        usage: "Acid reflux, GERD treatment",
        sideEffects: "Headache, stomach pain, diarrhea, nausea, vitamin B12 deficiency",
        composition: {
            "C": 17,
            "H": 19,
            "N": 3,
            "O": 3,
            "S": 1
        }
    },
    {
        code: "0002-6160",
        name: "Furosemide",
        usage: "Diuretic (water pill) for edema, high blood pressure",
        sideEffects: "Dehydration, dizziness, low potassium, kidney damage",
        composition: {
            "C": 12,
            "H": 11,
            "Cl": 1,
            "N": 2,
            "O": 5,
            "S": 1
        }
    },
    {
        code: "0046-2789",
        name: "Lisinopril",
        usage: "Blood pressure control, heart failure treatment",
        sideEffects: "Dizziness, headache, cough, high potassium",
        composition: {
            "C": 21,
            "H": 31,
            "N": 3,
            "O": 5
        }
    },
    {
        code: "0071-0623",
        name: "Hydrochlorothiazide",
        usage: "Diuretic (water pill) for high blood pressure",
        sideEffects: "Dizziness, dehydration, low potassium, increased urination",
        composition: {
            "C": 7,
            "H": 8,
            "Cl": 1,
            "N": 3,
            "O": 4,
            "S": 2
        }
    },
    {
        code: "0115-0989",
        name: "Levothyroxine",
        usage: "Hypothyroidism treatment",
        sideEffects: "Weight changes, hair loss, palpitations, sweating, fatigue",
        composition: {
            "C": 15,
            "H": 11,
            "I": 4,
            "N": 1,
            "O": 4
        }
    },
    {
        code: "0054-0572",
        name: "Prednisone",
        usage: "Steroid for inflammation, autoimmune diseases",
        sideEffects: "Weight gain, insomnia, mood swings, high blood pressure",
        composition: {
            "C": 21,
            "H": 26,
            "O": 5
        }
    },
    {
        code: "0116-0266",
        name: "Diazepam",
        usage: "Anxiety, muscle relaxation, seizure control",
        sideEffects: "Drowsiness, dizziness, addiction, fatigue, memory issues",
        composition: {
            "C": 16,
            "H": 13,
            "Cl": 1,
            "N": 2,
            "O": 1
        }
    },
    {
        code: "0603-4483",
        name: "Clopidogrel",
        usage: "Blood thinner to prevent clots",
        sideEffects: "Bleeding, bruising, rash, abdominal pain",
        composition: {
            "C": 16,
            "H": 16,
            "Cl": 1,
            "N": 1,
            "O": 2,
            "S": 1
        }
    },
    {
        code: "64764-1159",
        name: "Alprazolam",
        usage: "Anxiety, panic disorders",
        sideEffects: "Drowsiness, dizziness, memory problems, fatigue, addiction risk",
        composition: {
            "C": 17,
            "H": 13,
            "Cl": 1,
            "N": 4
        }
    },
    {
        code: "0409-0600",
        name: "Ranitidine",
        usage: "Acid reflux, GERD treatment",
        sideEffects: "Headache, constipation, diarrhea, abdominal pain",
        composition: {
            "C": 13,
            "H": 22,
            "N": 4,
            "O": 3,
            "S": 1
        }
    },
    {
        code: "0022-0600",
        name: "Simvastatin",
        usage: "Cholesterol-lowering medication",
        sideEffects: "Muscle pain, liver damage, headache, digestive issues",
        composition: {
            "C": 25,
            "H": 38,
            "O": 5
        }
    },
    {
        code: "0039-1035",
        name: "Diphenhydramine",
        usage: "Antihistamine for allergies, sleep aid",
        sideEffects: "Drowsiness, dry mouth, dizziness, constipation",
        composition: {
            "C": 17,
            "H": 21,
            "N": 1,
            "O": 1
        }
    },
    {
        code: "0025-1407",
        name: "Tramadol",
        usage: "Pain relief",
        sideEffects: "Dizziness, nausea, constipation, addiction risk",
        composition: {
            "C": 16,
            "H": 25,
            "N": 2,
            "O": 2
        }
    },
    {
        code: "0063-1243",
        name: "Paroxetine",
        usage: "Depression, anxiety, OCD treatment",
        sideEffects: "Nausea, dizziness, insomnia, sexual dysfunction",
        composition: {
            "C": 19,
            "H": 20,
            "F": 1,
            "N": 1,
            "O": 3
        }
    },
    {
        code: "0052-4642",
        name: "Citalopram",
        usage: "Depression, anxiety treatment",
        sideEffects: "Nausea, dizziness, dry mouth, sexual dysfunction",
        composition: {
            "C": 20,
            "H": 21,
            "F": 1,
            "N": 3,
            "O": 1
        }
    },
    {
        code: "0033-0513",
        name: "Gabapentin",
        usage: "Nerve pain, seizures treatment",
        sideEffects: "Dizziness, drowsiness, fatigue, weight gain",
        composition: {
            "C": 9,
            "H": 17,
            "N": 1,
            "O": 2
        }
    },
    {
        code: "0009-4331",
        name: "Sertraline",
        usage: "Depression, anxiety treatment",
        sideEffects: "Nausea, insomnia, sexual dysfunction, dizziness",
        composition: {
            "C": 17,
            "H": 17,
            "Cl": 2,
            "N": 1
        }
    },
    {
        code: "0034-8762",
        name: "Amiodarone",
        usage: "Arrhythmia (heart rhythm issues)",
        sideEffects: "Lung damage, liver damage, thyroid problems, dizziness",
        composition: {
            "C": 25,
            "H": 29,
            "I": 2,
            "N": 2,
            "O": 3
        }
    },
    {
        code: "0045-0522",
        name: "Metoprolol",
        usage: "Blood pressure control, heart conditions",
        sideEffects: "Fatigue, dizziness, low blood pressure, slow heart rate",
        composition: {
            "C": 15,
            "H": 25,
            "N": 1,
            "O": 3
        }
    },
    {
        code: "0052-4637",
        name: "Venlafaxine",
        usage: "Depression, anxiety treatment",
        sideEffects: "Nausea, headache, dizziness, sexual dysfunction",
        composition: {
            "C": 17,
            "H": 27,
            "N": 2,
            "O": 2
        }
    },
    {
        code: "0069-0812",
        name: "Prednisolone",
        usage: "Inflammation, autoimmune diseases",
        sideEffects: "Weight gain, mood swings, insomnia, high blood pressure",
        composition: {
            "C": 21,
            "H": 28,
            "O": 5
        }
    },
    {
        code: "0084-0160",
        name: "Chloroquine",
        usage: "Malaria treatment",
        sideEffects: "Skin rashes, nausea, headache, vision changes",
        composition: {
            "C": 18,
            "H": 26,
            "Cl": 1,
            "N": 3
        }
    },
    {
        code: "0143-9244",
        name: "Folic Acid",
        usage: "Vitamin supplement",
        sideEffects: "Rare allergic reactions, stomach upset",
        composition: {
            "C": 19,
            "H": 19,
            "N": 7,
            "O": 6
        }
    },
    {
        code: "0591-1266",
        name: "Insulin Glargine",
        usage: "Long-acting insulin for diabetes management",
        sideEffects: "Low blood sugar, weight gain, allergic reactions",
        composition: {
            "C": 267,
            "H": 404,
            "N": 72,
            "O": 78,
            "S": 6
        }
    },
    {
        code: "0781-1841",
        name: "Levocetirizine",
        usage: "Allergy relief",
        sideEffects: "Drowsiness, dry mouth, dizziness",
        composition: {
            "C": 21,
            "H": 25,
            "Cl": 1,
            "N": 2,
            "O": 3
        }
    },
    {
        code: "0904-5456",
        name: "Clonazepam",
        usage: "Seizures, anxiety treatment",
        sideEffects: "Drowsiness, dizziness, memory problems, fatigue",
        composition: {
            "C": 15,
            "H": 10,
            "Cl": 1,
            "N": 3,
            "O": 3
        }
    },
    {
        code: "50580-1677",
        name: "Duloxetine",
        usage: "Depression, anxiety treatment",
        sideEffects: "Nausea, dizziness, fatigue, dry mouth, insomnia",
        composition: {
            "C": 18,
            "H": 19,
            "N": 1,
            "O": 2,
            "S": 1
        }
    },
    {
        code: "0527-0189",
        name: "Ciprofloxacin",
        usage: "Antibiotic for infections",
        sideEffects: "Diarrhea, nausea, headache, dizziness",
        composition: {
            "C": 17,
            "H": 18,
            "F": 1,
            "N": 3,
            "O": 3
        }
    },
    {
        code: "13668-0709",
        name: "Baclofen",
        usage: "Muscle spasms treatment",
        sideEffects: "Drowsiness, dizziness, weakness, fatigue",
        composition: {
            "C": 10,
            "H": 12,
            "Cl": 1,
            "N": 1,
            "O": 2
        }
    },
    {
        code: "11008-3222",
        name: "Trifluoperazine",
        usage: "Antipsychotic treatment",
        sideEffects: "Drowsiness, dizziness, weight gain, tremors",
        composition: {
            "C": 21,
            "H": 24,
            "F": 3,
            "N": 3,
            "S": 1
        }
    },
    {
        code: "0071-0599",
        name: "Spironolactone",
        usage: "Diuretic, heart failure treatment",
        sideEffects: "Dizziness, high potassium, fatigue, breast tenderness",
        composition: {
            "C": 24,
            "H": 32,
            "O": 4,
            "S": 1
        }
    },
    {
        code: "54868-2100",
        name: "Hydroxyzine",
        usage: "Anti-anxiety, antihistamine",
        sideEffects: "Drowsiness, dizziness, dry mouth, blurred vision",
        composition: {
            "C": 21,
            "H": 27,
            "Cl": 1,
            "N": 2,
            "O": 2
        }
    }
];