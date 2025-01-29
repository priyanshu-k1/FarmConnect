
class Rice {
  pic = "/assets/crops/rice.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow="खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration="100-150 दिन";
      this.Soil="चिकनी दोमट या गादयुक्त दोमट मिट्टी";
      this.WaterRequirement="पूरे बढ़ती मौसम के दौरान उच्च जल आवश्यकता। अधिकांश वृद्धि अवधि के लिए निरंतर जलभराव आवश्यक है।";
      this.Irrigation ="बाढ़ सिंचाई";
      this.Temperature="25-35°C";
      this.Fertilizers="नाइट्रोजन, फास्फोरस, और पोटेशियम का संतुलित उपयोग अत्यंत महत्वपूर्ण है।";
      this.Pests="कीट: तना कुच्चू, पत्तियाँ कूदने वाले कीट, फौजी कीड़े, लार्वा।   ";
    } 
    else if (lang == "te") {
      this.BestSeasonToGrow="ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration="100-150 రోజులు";
      this.Soil="మట్టి లోమ్స్ లేదా మట్టి తుమ్ముల మట్టి";
      this.WaterRequirement="పెరుగుదల కాలం boyunca అధిక నీటి అవసరం. పెరుగుదల సమయంలో ఎక్కువ భాగం కోసం నిరంతర వరద అవసరం.";
      this.Irrigation ="వరద నీరా సంరక్షణ";
      this.Temperature="25-35°C";
      this.Fertilizers="నైట్రోజెన్, ఫాస్ఫరస్, మరియు పొటాషియం సంతులితంగా ఉపయోగించడం అత్యంత ముఖ్యమైనది.";
      this.Pests="కీటకాలు: మెట్టు తించేవారు, ఆకు జంపర్లు, ఆర్మీ వేళ్ళు, లార్వా.";
    } 
    else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "100-150 days";
      this.Soil = "Clayey loam or silty loam soils";
      this.WaterRequirements =
        "High water requirement throughout the growing season.Continuous flooding is necessary for most of the growth period";
      this.Irrigation = "Flood irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers =
        "Balanced application of nitrogen, phosphorus, and potassium is crucial.";
        this.Pests = "Pests: Stem borers, leaf hoppers, armyworms, grubs.";
    }
  }
}

class Wheat {
  pic = "/assets/crops/wheat.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "रबी सीजन (सर्दियों का मौसम): अक्टूबर-नवंबर";
      this.Duration = "120-150 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "बाढ़ सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "एफिड्स, रस्ट और स्मट";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "రబీ సీజన్ (శీతాకాలం): అక్టోబర్-నవంబర్";
      this.Duration = "120-150 రోజులు";
      this.Soil = "లోమి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "వెళ్లిపోయే నీటి ముంపు, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "ఆఫిడ్స్, రస్ట్ మరియు స్మట్";
    } else {
      this.BestSeasonToGrow = "Rabi Season (Winter Season): October-November";
      this.Duration = "120-150 days";
      this.Soil = "Loamy soils";
      this.WaterRequirement = "Medium water requirement";
      this.Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Aphids, rust, and smut";
    }
  }
}

class Lentils {
  pic = "/assets/crops/lentils.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "रबी सीजन (सर्दियों का मौसम): अक्टूबर-नवंबर";
      this.Duration = "120-150 दिन";
      this.Soil = "अच्छी जल निकासी वाली बलुई दोमट या चिकनी दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "ड्रिप सिंचाई, फरो सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "एफिड्स, पॉड बोरर्स और वीविल्स";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "రబీ సీజన్ (శీతాకాలం): అక్టోబర్-నవంబర్";
      this.Duration = "120-150 రోజులు";
      this.Soil = "చక్కగా డ్రెయినేజ్ ఉన్న ఇసుకలోమి లేదా మట్టి లోమి నేలలు";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "డ్రిప్ నీటిపారుదల, ఫరో నీటిపారుదల";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "ఆఫిడ్స్, పాడ్ బోరర్స్ మరియు వీవిల్స్";
    } else {
      this.BestSeasonToGrow = "Rabi Season (Winter Season): October-November";
      this.Duration = "120-150 days";
      this.Soil = "Well-drained sandy loam or clay loam soils";
      this.WaterRequirement = "Medium water requirement";
      this.Irrigation = "Drip irrigation, furrow irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Aphids, pod borers, and weevils";
    }
  }
}

class Cotton {
  pic = "/assets/crops/cotton.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "150-180 दिन";
      this.Soil = "गहरी, अच्छी जल निकासी वाली बलुई दोमट मिट्टी";
      this.WaterRequirement = "उच्च जल आवश्यकता";
      this.Irrigation = "ड्रिप सिंचाई, फरो सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "गुली कीड़े, एफिड्स, और जस्सिड्स";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "150-180 రోజులు";
      this.Soil = "లోతైన, బాగా నీరు జరగే ఇసుకలోమి నేలలు";
      this.WaterRequirement = "అధిక నీటి అవసరం";
      this.Irrigation = "డ్రిప్ నీటిపారుదల, ఫరో నీటిపారుదల";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "బోల్ వర్మ్, ఆఫిడ్స్, మరియు జాస్సిడ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "150-180 days";
      this.Soil = "Deep, well-drained sandy loam soils";
      this.WaterRequirement = "High water requirement";
      this.Irrigation = "Drip irrigation, furrow irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Bollworms, aphids, and jassids";
    }
  }
}

class Maize {
  pic = "/assets/crops/maize.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "बाढ़ सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "तना कीड़े, पत्ती कूदने वाले और फौजी कीड़े";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "లోమి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "వెళ్లిపోయే నీటి ముంపు, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "స్టెమ్ బోరర్స్, లీఫ్ హాపర్స్ మరియు ఆర్మీ వర్మ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Loamy soils";
      this.WaterRequirement = "Medium water requirement";
      this.Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Stem borers, leafhoppers, and armyworms";
    }
  }
}
class SugarCane {
  pic = "/assets/crops/sugarcane.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow =
        "पूरे वर्ष, लेकिन मुख्य रूप से खरीफ और रबी सीजन में";
      this.Duration = "12-18 महीने";
      this.Soil = "उपजाऊ चिकनी दोमट मिट्टी";
      this.WaterRequirement = "उच्च जल आवश्यकता";
      this.Irrigation = "नहर सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "20-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "तना कीड़े, एफिड्स और स्केल कीड़े";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "సంవత్సరం పొడవునా, కానీ ముఖ్యంగా ఖరీఫ్ మరియు రబీ సీజన్లలో";
      this.Duration = "12-18 నెలలు";
      this.Soil = "సారవంతమైన మట్టి లోమి నేలలు";
      this.WaterRequirement = "అధిక నీటి అవసరం";
      this.Irrigation = "కాలువ నీటిపారుదల, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "20-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "బోరర్స్, ఆఫిడ్స్ మరియు స్కేల్ ఇన్సెక్ట్స్";
    } else {
      this.BestSeasonToGrow =
        "Throughout the year, but mainly in the Kharif and Rabi seasons";
      this.Duration = "12-18 months";
      this.Soil = "Fertile clay loam soils";
      this.WaterRequirement = "High water requirement";
      this.Irrigation = "Canal irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "20-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Borers, aphids, and scale insects";
    }
  }
}


class Soybeans {
  pic = "/assets/crops/soyabean.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "120-150 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "बाढ़ सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "पॉड बोरर्स, कैटरपिलर्स और एफिड्स";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "120-150 రోజులు";
      this.Soil = "లోమి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "వెళ్లిపోయే నీటి ముంపు, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "పాడ్ బోరర్స్, క్రిములు మరియు ఆఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "120-150 days";
      this.Soil = "Loamy soils";
      this.WaterRequirement = "Medium water requirement";
      this.Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Pod borers, caterpillars, and aphids";
    }
  }
}


class Groundnuts {
  pic = "/assets/crops/peanuts.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "बलुई दोमट या चिकनी दोमट मिट्टी";
      this.WaterRequirement = "कम से मध्यम जल आवश्यकता";
      this.Irrigation = "ड्रिप सिंचाई, फरो सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "एफिड्स, दीमक और पत्ती कूदने वाले";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "ఇసుక లోమి లేదా మట్టి లోమి నేలలు";
      this.WaterRequirement = "తక్కువ నుండి మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "డ్రిప్ నీటిపారుదల, ఫరో నీటిపారుదల";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "ఆఫిడ్స్, పుట్టలు మరియు ఆకు జంపర్లు";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Sandy loam or clay loam soils";
      this.WaterRequirement = "Low to medium water requirement";
      this.Irrigation = "Drip irrigation, furrow irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Aphids, termites, and leafhoppers";
    }
  }
}

class Millets {
  pic = "/assets/crops/millet.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "60-90 दिन";
      this.Soil = "बलुई दोमट या चिकनी दोमट मिट्टी";
      this.WaterRequirement = "कम से मध्यम जल आवश्यकता";
      this.Irrigation = "बाढ़ सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "तना कीड़े, पत्ती कूदने वाले और फौजी कीड़े";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "60-90 రోజులు";
      this.Soil = "ఇసుకలోమి లేదా మట్టిలోమి నేలలు";
      this.WaterRequirement = "తక్కువ నుండి మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "ముంపు నీటిపారుదల, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "స్టెమ్ బోరర్స్, లీఫ్ హాపర్స్ మరియు ఆర్మీ వర్మ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "60-90 days";
      this.Soil = "Sandy loam or clay loam soils";
      this.WaterRequirement = "Low to medium water requirement";
      this.Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Stem borers, leafhoppers, and armyworms";
    }
  }
}

class Coffee {
  pic = "/assets/crops/coffee.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "पूरे वर्ष, वर्षा ऋतु में रोपण";
      this.Duration = "5-7 वर्ष व्यावसायिक उत्पादन शुरू होने तक";
      this.Soil = "अच्छी जल निकासी वाली, अम्लीय मिट्टी जिसमें उच्च जैविक पदार्थ हो";
      this.WaterRequirement = "सूखे मौसम में विशेष रूप से उच्च जल आवश्यकता";
      this.Irrigation = "ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "कॉफी बेरी बोरर्स, पत्ती के माइनर्स और थ्रिप्स";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "సంవత్సరం పొడవునా, వర్షాకాలంలో నాటడం";
      this.Duration = "5-7 సంవత్సరాలు వాణిజ్య ఉత్పత్తి ప్రారంభం వరకు";
      this.Soil = "బాగా డ్రైనేజ్ అయ్యే, ఆమ్లపు నేలలు అధిక సేంద్రియ పదార్థాలతో";
      this.WaterRequirement = "ఎండపూట ఎక్కువ నీటి అవసరం";
      this.Irrigation = "డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "కాఫీ బెర్రీ బోరర్స్, ఆకు మైనర్లు మరియు త్రిప్స్";
    } else {
      this.BestSeasonToGrow =
        "Throughout the year, with planting done during the rainy season";
      this.Duration = "5-7 years before trees start producing commercially";
      this.Soil =
        "Well-drained, acidic soils with high organic matter content";
      this.WaterRequirement =
        "High water requirement, especially during dry periods";
      this.Irrigation = "Drip irrigation, sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Coffee berry borers, leaf miners, and thrips";
    }
  }
}
// newly added 

class Barley {
  pic = "/assets/crops/barley.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम (शीतकालीन मौसम): अक्टूबर-नवंबर";
      this.Duration = "100-120 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "गर्मियों में नियमित सिंचाई की आवश्यकता होती है।";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना कुच्चू, पत्तियाँ कूदने वाले कीट, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్ (శీతాకాలం సీజన్): అక్టోబర్-నవంబర్";
      this.Duration = "100-120 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "వేసవిలో రెగ్యులర్ నీరు త్రాగుట అవసరం.";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: మెట్టు తించేవారు, ఆకు జంపర్లు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Rabi Season (Winter Season): October-November";
      this.Duration = "100-120 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Regular irrigation is required during summer.";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, leaf hoppers, aphids";
    }
  }
}
class Sorghum {
  pic = "/assets/crops/sorghum.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता कम होती है, लेकिन सूखे की स्थिति में सिंचाई की आवश्यकता होती है।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना कुच्चू, पत्तियाँ कूदने वाले कीट, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట తక్కువ అవసరం, కానీ పొడి పరిస్థితులలో నీరు త్రాగుట అవసరం.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: మెట్టు తించేవారు, ఆకు జంపర్లు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is less required, but needed during dry conditions.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, leaf hoppers, aphids";
    }
  }
}

class Oats {
  pic = "/assets/crops/oats.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम (शीतकालीन मौसम): अक्टूबर-नवंबर";
      this.Duration = "90-120 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित सिंचाई की आवश्यकता होती है, लेकिन अधिक पानी से बचना चाहिए।";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "10-20°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, थ्रिप्स, पत्ती खाने वाले कीड़े";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్ (శీతాకాలం సీజన్): అక్టోబర్-నవంబర్";
      this.Duration = "90-120 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం, కానీ అధిక నీరు త్రాగుట నివారించాలి.";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "10-20°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, త్రిప్స్, ఆకు తినే కీటకాలు";
    } else {
      this.BestSeasonToGrow = "Rabi Season (Winter Season): October-November";
      this.Duration = "90-120 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular irrigation, but avoid overwatering.";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "10-20°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Aphids, thrips, leafhoppers";
    }
  }
}

class FingerMillet {
  pic = "/assets/crops/finger_millet.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "रेतीली दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता कम होती है, लेकिन सूखे की स्थिति में सिंचाई की आवश्यकता होती है।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना कुच्चू, पत्तियाँ कूदने वाले कीट, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట తక్కువ అవసరం, కానీ పొడి పరిస్థితులలో నీరు త్రాగుట అవసరం.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: మెట్టు తించేవారు, ఆకు జంపర్లు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Sandy loam soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is less required, but needed during dry conditions.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, leaf hoppers, aphids";
    }
  }
}
class Chickpeas {
  pic = "/assets/crops/chickpeas.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "90-100 दिन";
      this.Soil = "रेतीली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता कम होती है, लेकिन सूखे की स्थिति में सिंचाई की आवश्यकता होती है।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना कुच्चू, हरी अफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-100 రోజులు";
      this.Soil = "ఇసుక మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట తక్కువ అవసరం, కానీ పొడి పరిస్థితులలో నీరు త్రాగుట అవసరం.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: మెట్టు తించేవారు, ఆకులు హాపర్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-100 days";
      this.Soil = "Sandy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is less required, but needed during dry conditions.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, leaf hoppers";
    }
  }
}

class PigeonPeas {
  pic = "/assets/crops/pigeon_peas.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "120-150 दिन";
      this.Soil = "रेतीली दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सूखे के समय सिंचाई की आवश्यकता होती है।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना कुच्चू, पत्तियाँ कूदने वाले कीट";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "120-150 రోజులు";
      this.Soil = "ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "పొడి పరిస్థితుల్లో నీరు త్రాగుట అవసరం.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: మెట్టు తించేవారు, ఆకు జంపర్లు";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "120-150 days";
      this.Soil = "Sandy loam soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Required during dry conditions.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, leaf hoppers";
    }
  }
}

class MungBeans {
  pic = "/assets/crops/mung_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "60-90 दिन";
      this.Soil = "हल्की दोमट मिट्टी";
      this.WaterRequirement = "कम जल आवश्यकता";
      this.Irrigation = "बारिश के दौरान सिंचाई की आवश्यकता नहीं होती है।";
      this.Temperature = "20-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: भृंग, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "60-90 రోజులు";
      this.Soil = "హల్కు లోమ్స్ మట్టి";
      this.WaterRequirement = "తక్కువ నీటి అవసరం";
      this.Irrigation = "వర్షం సమయంలో నీరు త్రాగుట అవసరం లేదు.";
      this.Temperature = "20-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: భృంగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "60-90 days";
      this.Soil = "Light loam soil";
      this.WaterRequirement = "Low water requirement";
      this.Irrigation = "No irrigation required during rainfall.";
      this.Temperature = "20-35°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Beetles, stem borers";
    }
  }
}

class UradBeans {
  pic = "/assets/crops/urad_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "दोपद्र या दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता सूखी अवस्था में होती है।";
      this.Temperature = "25-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, पत्तियाँ कूदने वाले कीट";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "డొమట్ లేదా లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "పొడిగా ఉన్నప్పుడు నీరుతో सिंచన అవసరం.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, ఆకు జంపర్లు";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Loamy or sandy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Required during dry conditions";
      this.Temperature = "25-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, leaf hoppers";
    }
  }
}

class MoongBeans {
  pic = "/assets/crops/moong_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "60-90 दिन";
      this.Soil = "हल्की दोमट मिट्टी";
      this.WaterRequirement = "कम जल आवश्यकता";
      this.Irrigation = "बारिश के दौरान सिंचाई की आवश्यकता नहीं होती है।";
      this.Temperature = "20-35°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: भृंग, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "60-90 రోజులు";
      this.Soil = "హల్కు లోమ్స్ మట్టి";
      this.WaterRequirement = "తక్కువ నీటి అవసరం";
      this.Irrigation = "వర్షం సమయంలో నీరు త్రాగుట అవసరం లేదు.";
      this.Temperature = "20-35°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: భృంగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "60-90 days";
      this.Soil = "Light loam soil";
      this.WaterRequirement = "Low water requirement";
      this.Irrigation = "No irrigation required during rainfall.";
      this.Temperature = "20-35°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Beetles, stem borers";
    }
  }
}

class BlackGram {
  pic = "/assets/crops/black_gram.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "70-90 दिन";
      this.Soil = "काली मिट्टी";
      this.WaterRequirement = "कम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता नहीं होती है, बारिश पर्याप्त होती है।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, सफेद मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "70-90 రోజులు";
      this.Soil = "నల్ల మట్టి";
      this.WaterRequirement = "తక్కువ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం లేదు, వర్షం చాలు.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "70-90 days";
      this.Soil = "Black soil";
      this.WaterRequirement = "Low water requirement";
      this.Irrigation = "No irrigation required, rainfall is sufficient.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, whiteflies";
    }
  }
}

class Cowpeas {
  pic = "/assets/crops/cowpeas.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "75-90 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता कम होती है, लेकिन सूखे की स्थिति में सिंचाई की आवश्यकता होती है।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, हरी अफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "75-90 రోజులు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట తక్కువ అవసరం, కానీ పొడి పరిస్థితులలో నీరు త్రాగుట అవసరం.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, హరి ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "75-90 days";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is less required, but needed during dry conditions.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, green aphids";
    }
  }
}

// class Lentils {
//   pic = "/assets/crops/lentils.png";

//   constructor(lang) {
//     if (lang === "hi") {
//       this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
//       this.Duration = "60-90 दिन";
//       this.Soil = "दोमट मिट्टी";
//       this.WaterRequirement = "कम जल आवश्यकता";
//       this.Irrigation = "बारिश के दौरान सिंचाई की आवश्यकता नहीं होती है।";
//       this.Temperature = "20-30°C";
//       this.Fertilizers = "नाइट्रोजन, फास्फोरस का संतुलित उपयोग";
//       this.Pests = "कीट: तना बोरर, सफेद मच्छर";
//     } else if (lang === "te") {
//       this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
//       this.Duration = "60-90 రోజులు";
//       this.Soil = "లోమ్స్ మట్టి";
//       this.WaterRequirement = "తక్కువ నీటి అవసరం";
//       this.Irrigation = "వర్షం సమయంలో నీరు త్రాగుట అవసరం లేదు.";
//       this.Temperature = "20-30°C";
//       this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
//       this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
//     } else {
//       this.BestSeasonToGrow = "Rabi Season: October-November";
//       this.Duration = "60-90 days";
//       this.Soil = "Loamy soil";
//       this.WaterRequirement = "Low water requirement";
//       this.Irrigation = "No irrigation required during rainfall.";
//       this.Temperature = "20-30°C";
//       this.Fertilizers = "Balanced application of nitrogen and phosphorus";
//       this.Pests = "Pests: Stem borers, whiteflies";
//     }
//   }
// }
class Peas {
  pic = "/assets/crops/peas.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "60-90 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, सफेद मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "60-90 రోజులు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "60-90 days";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, whiteflies";
    }
  }
}

class BroadBeans {
  pic = "/assets/crops/broad_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "90-120 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन अधिक नहीं।";
      this.Temperature = "10-20°C";
      this.Fertilizers = "नाइट्रोजन और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, सफेद मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "90-120 రోజులు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "10-20°C";
      this.Fertilizers = "నైట్రోజన్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "90-120 days";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "10-20°C";
      this.Fertilizers = "Balanced application of nitrogen and potassium";
      this.Pests = "Pests: Stem borers, whiteflies";
    }
  }
}

class FavaBeans {
  pic = "/assets/crops/fava_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "80-100 दिन";
      this.Soil = "काली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन अधिक नहीं।";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, सफेद मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "80-100 రోజులు";
      this.Soil = "నల్ల మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "80-100 days";
      this.Soil = "Black soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, whiteflies";
    }
  }
}

class KidneyBeans {
  pic = "/assets/crops/kidney_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "काली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, सफेद मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "నల్ల మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Black soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, whiteflies";
    }
  }
}

class LimaBeans {
  pic = "/assets/crops/lima_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "मांगदारी मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, सफेद मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "మంగడారి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Clay soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, whiteflies";
    }
  }
}

class SnapBeans {
  pic = "/assets/crops/snap_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "50-60 दिन";
      this.Soil = "काली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, सफेद मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "50-60 రోజులు";
      this.Soil = "నల్ల మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "50-60 days";
      this.Soil = "Black soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, whiteflies";
    }
  }
}

class AdzukiBeans {
  pic = "/assets/crops/adzuki_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "60-90 दिन";
      this.Soil = "काली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, सफेद मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "60-90 రోజులు";
      this.Soil = "నల్ల మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "60-90 days";
      this.Soil = "Black soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, whiteflies";
    }
  }
}

class CranberryBeans {
  pic = "/assets/crops/cranberry_beans.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "75-90 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, सफेद मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "75-90 రోజులు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, తెల్ల జూన్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "75-90 days";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, whiteflies";
    }
  }
}
class Coconut {
  pic = "/assets/crops/coconut.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सदाबहार"; 
      this.Duration = "लगभग 6-7 सालों में फल देना शुरू करता है";
      this.Soil = "रेतीली दोमट या बलुई मिट्टी";
      this.WaterRequirement = "नियमित वर्षा या सिंचाई की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तेलिया कीट, गुलाबी छेदक";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శాశ్వత"; 
      this.Duration = "సుమారు 6-7 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "ఇసుక లోమ్స్ లేదా ఇసుక మట్టి";
      this.WaterRequirement = "నियमిత వర్షం లేదా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: నూనె తీయుటకు పురుగులు, గులాబీ రంధ్రాలు";
    } else {
      this.BestSeasonToGrow = "Perennial"; 
      this.Duration = "Starts fruiting in about 6-7 years";
      this.Soil = "Sandy loam or sandy soils";
      this.WaterRequirement = "Requires regular rainfall or irrigation";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Scale insects, pink borer";
    }
  }
}
class Palm {
  pic = "/assets/crops/palm.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सदाबहार"; 
      this.Duration = "लगभग 4-5 सालों में फल देना शुरू करता है";
      this.Soil = "रेतीली दोमट या बलुई मिट्टी";
      this.WaterRequirement = "नियमित वर्षा या सिंचाई की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तेलिया कीट, गुलाबी छेदक";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శాశ్వత"; 
      this.Duration = "సుమారు 4-5 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "ఇసుక లోమ్స్ లేదా ఇసుక మట్టి";
      this.WaterRequirement = "నियमిత వర్షం లేదా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: నూనె తీయుటకు పురుగులు, గులాబీ రంధ్రాలు";
    } else {
      this.BestSeasonToGrow = "Perennial"; 
      this.Duration = "Starts fruiting in about 4-5 years";
      this.Soil = "Sandy loam or sandy soils";
      this.WaterRequirement = "Requires regular rainfall or irrigation";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Scale insects, pink borer";
    }
  }
}
class Castor {
  pic = "/assets/crops/castor.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "120-150 दिन";
      this.Soil = "रेतीली दोमट या बलुई मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता कम होती है, लेकिन सूखे की स्थिति में सिंचाई की आवश्यकता होती है।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना कुच्चू, पत्तियाँ कूदने वाले कीट, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "120-150 రోజులు";
      this.Soil = "ఇసుక లోమ్స్ లేదా ఇసుక మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట తక్కువ అవసరం, కానీ పొడి పరిస్థితులలో నీరు త్రాగుట అవసరం.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: మెట్టు తించేవారు, ఆకు జంపర్లు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "120-150 days";
      this.Soil = "Sandy loam or sandy soils";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is less required, but needed during dry conditions.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, leaf hoppers, aphids";
    }
  }
}

class Linseed {
  pic = "/assets/crops/linseed.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम (शीतकालीन मौसम): अक्टूबर-नवंबर";
      this.Duration = "100-120 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित सिंचाई की आवश्यकता होती है, लेकिन अधिक पानी से बचना चाहिए।";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, थ्रिप्स, पत्ती खाने वाले कीड़े";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్ (శీతాకాలం సీజన్): అక్టోబర్-నవంబర్";
      this.Duration = "100-120 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం, కానీ అధిక నీరు త్రాగుట నివారించాలి.";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, త్రిప్స్, ఆకు తినే కీటకాలు";
    } else {
      this.BestSeasonToGrow = "Rabi Season (Winter Season): October-November";
      this.Duration = "100-120 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular irrigation, but avoid overwatering.";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Aphids, thrips, leafhoppers";
    }
  }
}

class Safflower {
  pic = "/assets/crops/safflower.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम (शीतकालीन मौसम): अक्टूबर-नवंबर";
      this.Duration = "100-120 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित सिंचाई की आवश्यकता होती है, लेकिन अधिक पानी से बचना चाहिए।";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, थ्रिप्स, पत्ती खाने वाले कीड़े";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్ (శీతాకాలం సీజన్): అక్టోబర్-నవంబర్";
      this.Duration = "100-120 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం, కానీ అధిక నీరు త్రాగుట నివారించాలి.";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, త్రిప్స్, ఆకు తినే కీటకాలు";
    } else {
      this.BestSeasonToGrow = "Rabi Season (Winter Season): October-November";
      this.Duration = "100-120 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular irrigation, but avoid overwatering.";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Aphids, thrips, leafhoppers";
    }
  }
}
class Mustard {
  pic = "/assets/crops/mustard.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "90-120 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "10-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस, और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, कीट कृमि";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "90-120 రోజులు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "10-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్, మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, కీటక జడలు";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "90-120 days";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "10-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, rootworms";
    }
  }
}

class Rapeseed {
  pic = "/assets/crops/rapeseed.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "90-120 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "10-25°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, कीट कृमि";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "90-120 రోజులు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "10-25°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, కీటక జడలు";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "90-120 days";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "10-25°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, rootworms";
    }
  }
}

class Sunflower {
  pic = "/assets/crops/sunflower.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "90-120 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, कीट कृमि";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "90-120 రోజులు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, కీటక జడలు";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "90-120 days";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen and potassium";
      this.Pests = "Pests: Stem borers, rootworms";
    }
  }
}

class Sesame {
  pic = "/assets/crops/sesame.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "काली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, कीट कृमि";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "నల్ల మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, కీటక జడలు";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Black soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen and potassium";
      this.Pests = "Pests: Stem borers, rootworms";
    }
  }
}

class Flax {
  pic = "/assets/crops/flax.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "रबी मौसम: अक्टूबर-नवम्बर";
      this.Duration = "80-100 दिन";
      this.Soil = "काली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, लेकिन ज्यादा नहीं।";
      this.Temperature = "10-20°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना बोरर, कीट कृमि";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "రబీ సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "80-100 రోజులు";
      this.Soil = "నల్ల మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, కానీ ఎక్కువగా కాదు.";
      this.Temperature = "10-20°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను బోరర్, కీటక జడలు";
    } else {
      this.BestSeasonToGrow = "Rabi Season: October-November";
      this.Duration = "80-100 days";
      this.Soil = "Black soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, but not too much.";
      this.Temperature = "10-20°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, rootworms";
    }
  }
}
class Tea {
  pic = "/assets/crops/tea.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सदाबहार";
      this.Duration = "लगभग 3-4 सालों में पौधे उत्पादन शुरू करते हैं";
      this.Soil = "अम्लीय मिट्टी";
      this.WaterRequirement = "नियमित वर्षा या सिंचाई की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तेलिया कीट, गुलाबी छेदक";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శాశ్వత";
      this.Duration = "సుమారు 3-4 సంవత్సరాలలో మొక్కలు ఉత్పత్తి ప్రారంభిస్తాయి";
      this.Soil = "ఆమ్లయుతమైన మట్టి";
      this.WaterRequirement = "నियमిత వర్షం లేదా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: నూనె తీయుటకు పురుగులు, గులాబీ రంధ్రాలు";
    } else {
      this.BestSeasonToGrow = "Perennial";
      this.Duration = "Plants start producing in about 3-4 years";
      this.Soil = "Acidic soil";
      this.WaterRequirement = "Requires regular rainfall or irrigation";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Scale insects, pink borer";
    }
  }
}

class Rubber {
  pic = "/assets/crops/rubber.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सदाबहार";
      this.Duration = "लगभग 5-6 सालों में रबर का उत्पादन शुरू होता है";
      this.Soil = "गहरी, अच्छी जल निकासी वाली मिट्टी";
      this.WaterRequirement = "नियमित वर्षा या सिंचाई की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तेलिया कीट, गुलाबी छेदक";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శాశ్వత";
      this.Duration = "సుమారు 5-6 సంవత్సరాలలో రబ్బరు ఉత్పత్తి ప్రారంభమవుతుంది";
      this.Soil = "లోతైన, మంచి నీటి పారుదల ఉన్న నేల";
      this.WaterRequirement = "నियमిత వర్షం లేదా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: నూనె తీయుటకు పురుగులు, గులాబీ రంధ్రాలు";
    } else {
      this.BestSeasonToGrow = "Perennial";
      this.Duration = "Rubber production starts in about 5-6 years";
      this.Soil = "Deep, well-drained soil";
      this.WaterRequirement = "Requires regular rainfall or irrigation";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Scale insects, pink borer";
    }
  }
}

class Guava {
  pic = "/assets/crops/guava.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सदाबहार";
      this.Duration = "लगभग 1-2 सालों में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శాశ్వత";
      this.Duration = "సుమారు 1-2 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Perennial";
      this.Duration = "Starts fruiting in about 1-2 years";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids";
    }
  }
}
class Papaya {
  pic = "/assets/crops/papaya.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सदाबहार";
      this.Duration = "लगभग 9-12 महीनों में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శాశ్వత";
      this.Duration = "సుమారు 9-12 నెలల్లో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Perennial";
      this.Duration = "Starts fruiting in about 9-12 months";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids";
    }
  }
}
class Pineapple {
  pic = "/assets/crops/pineapple.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सदाबहार";
      this.Duration = "लगभग 18-24 महीनों में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శాశ్వత";
      this.Duration = "సుమారు 18-24 నెలల్లో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Perennial";
      this.Duration = "Starts fruiting in about 18-24 months";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids";
    }
  }
}

class Watermelon {
  pic = "/assets/crops/watermelon.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम";
      this.Duration = "लगभग 80-100 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित और पर्याप्त पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్";
      this.Duration = "సుమారు 80-100 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా మరియు సరిపడా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Summer Season";
      this.Duration = "Approximately 80-100 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular and adequate water";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}
class Mango {
  pic = "/assets/crops/mango.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: फरवरी-मार्च";
      this.Duration = "3-4 साल";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "उच्च जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "25-30°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस, और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: आम कीड़ा, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్: ఫిబ్రవరి-మార్చి";
      this.Duration = "3-4 సంవత్సరాలు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "ఉత్తమ నీటి అవసరం";
      this.Irrigation = "నీటి అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్, మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: మామిడి పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Summer Season: February-March";
      this.Duration = "3-4 years";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "High water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Mango weevil, stem borers";
    }
  }
}

class Banana {
  pic = "/assets/crops/banana.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: मार्च-अप्रैल";
      this.Duration = "9-12 महीने";
      this.Soil = "पोषक तत्वों से भरपूर मिट्टी";
      this.WaterRequirement = "उच्च जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "25-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: केले का सड़ेगा कीट, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్: మార్చి-ఎప్రిల్";
      this.Duration = "9-12 నెలలు";
      this.Soil = "పోషకాలతో నిండిన మట్టి";
      this.WaterRequirement = "ఉత్తమ నీటి అవసరం";
      this.Irrigation = "నీటి అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: అరటి దురద, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Summer Season: March-April";
      this.Duration = "9-12 months";
      this.Soil = "Nutrient-rich soil";
      this.WaterRequirement = "High water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Banana weevil, stem borers";
    }
  }
}

class Apple {
  pic = "/assets/crops/apple.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दी का मौसम: अक्टूबर-नवम्बर";
      this.Duration = "3-4 साल";
      this.Soil = "पौष्टिक और जलनिकासी वाली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस, और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: सेब का कीड़ा, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "3-4 సంవత్సరాలు";
      this.Soil = "పోషకాలతో కూడిన మరియు నీటి నికరించు మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీటి అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్, మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఆపిల్ పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Winter Season: October-November";
      this.Duration = "3-4 years";
      this.Soil = "Nutrient-rich and well-draining soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Apple maggot, stem borers";
    }
  }
}

class Grapes {
  pic = "/assets/crops/grapes.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "खरीफ मौसम: जून-जुलाई";
      this.Duration = "2-3 साल";
      this.Soil = "दोमट या रेतीली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस, और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: अंगूर का कीड़ा, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్: జూన్-జూలై";
      this.Duration = "2-3 సంవత్సరాలు";
      this.Soil = "లోమ్స్ లేదా ఎరుపు మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్, మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ద్రాక్ష పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Kharif Season: June-July";
      this.Duration = "2-3 years";
      this.Soil = "Loamy or sandy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Grape weevil, stem borers";
    }
  }
}

class Orange {
  pic = "/assets/crops/orange.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: फरवरी-मार्च";
      this.Duration = "2-3 साल";
      this.Soil = "काली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस, और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: संतरा कीट, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్: ఫిబ్రవరి-మార్చి";
      this.Duration = "2-3 సంవత్సరాలు";
      this.Soil = "నల్ల మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్, మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: నారింజ పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Summer Season: February-March";
      this.Duration = "2-3 years";
      this.Soil = "Black soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Orange weevil, stem borers";
    }
  }
}

class Lemon {
  pic = "/assets/crops/lemon.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: फरवरी-मार्च";
      this.Duration = "1-2 साल";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "25-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: नींबू कीट, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్: ఫిబ్రవరి-మార్చి";
      this.Duration = "1-2 సంవత్సరాలు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: నిమ్మకాయ పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Summer Season: February-March";
      this.Duration = "1-2 years";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Lemon weevil, stem borers";
    }
  }
}

class Pomegranate {
  pic = "/assets/crops/pomegranate.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: फरवरी-मार्च";
      this.Duration = "3-4 साल";
      this.Soil = "रेतीली दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस, और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: अनार कीट, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్: ఫిబ్రవరి-మార్చి";
      this.Duration = "3-4 సంవత్సరాలు";
      this.Soil = "ఎరుపు లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్, మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: దానిమ్మ పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Summer Season: February-March";
      this.Duration = "3-4 years";
      this.Soil = "Sandy loam soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Pomegranate weevil, stem borers";
    }
  }
}
class Muskmelon {
  pic = "/assets/crops/muskmelon.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम";
      this.Duration = "लगभग 70-90 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित और पर्याप्त पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్";
      this.Duration = "సుమారు 70-90 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా మరియు సరిపడా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Summer Season";
      this.Duration = "Approximately 70-90 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular and adequate water";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}

class Lychee {
  pic = "/assets/crops/lychee.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सदाबहार";
      this.Duration = "लगभग 3-4 सालों में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శాశ్వత";
      this.Duration = "సుమారు 3-4 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Perennial";
      this.Duration = "Starts fruiting in about 3-4 years";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}
class Peach {
  pic = "/assets/crops/peach.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 2-3 सालों में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 2-3 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Starts fruiting in about 2-3 years";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}

class Plum {
  pic = "/assets/crops/plum.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 2-3 सालों में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 2-3 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Starts fruiting in about 2-3 years";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}

class Cherry {
  pic = "/assets/crops/cherry.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 3-4 सालों में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 3-4 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Starts fruiting in about 3-4 years";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}
class Jackfruit {
  pic = "/assets/crops/jackfruit.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: मार्च-अप्रैल";
      this.Duration = "3-4 साल";
      this.Soil = "दोमट या बलुई मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस, और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: कट्टा कीट, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్: మార్చి-ఎప్రిల్";
      this.Duration = "3-4 సంవత్సరాలు";
      this.Soil = "లోమ్స్ లేదా బలుకి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీటి అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్, మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: కత్త పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Summer Season: March-April";
      this.Duration = "3-4 years";
      this.Soil = "Loamy or sandy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Kattha weevil, stem borers";
    }
  }
}

class Fig {
  pic = "/assets/crops/fig.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: अप्रैल-मई";
      this.Duration = "2-3 साल";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: अंजीर का कीड़ा, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్: ఏప్రిల్-మే";
      this.Duration = "2-3 సంవత్సరాలు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: అंजीర పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Summer Season: April-May";
      this.Duration = "2-3 years";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Fig weevil, stem borers";
    }
  }
}

class Date {
  pic = "/assets/crops/date.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: मार्च-अप्रैल";
      this.Duration = "2-3 साल";
      this.Soil = "रेतीली और दोमट मिट्टी";
      this.WaterRequirement = "कम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "30-40°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: खजूर कीट, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్: మార్చి-ఎప్రిల్";
      this.Duration = "2-3 సంవత్సరాలు";
      this.Soil = "ఎరుపు మరియు లోమ్స్ మట్టి";
      this.WaterRequirement = "తక్కువ నీటి అవసరం";
      this.Irrigation = "నీటి అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "30-40°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఖజూర్ పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Summer Season: March-April";
      this.Duration = "2-3 years";
      this.Soil = "Sandy and loamy soil";
      this.WaterRequirement = "Low water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "30-40°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Date weevil, stem borers";
    }
  }
}

class Apricot {
  pic = "/assets/crops/apricot.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: मार्च-अप्रैल";
      this.Duration = "2-3 साल";
      this.Soil = "दोमट और जलनिकासी वाली मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: खुबानी कीट, तना बोरर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్: మార్చి-ఎప్రిల్";
      this.Duration = "2-3 సంవత్సరాలు";
      this.Soil = "లోమ్స్ మరియు నీటి తొలగింపు చేసే మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఆప్రికాట్ పురుగు, తను బోరర్";
    } else {
      this.BestSeasonToGrow = "Summer Season: March-April";
      this.Duration = "2-3 years";
      this.Soil = "Loamy and well-draining soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Apricot weevil, stem borers";
    }
  }
}
class Strawberry {
  pic = "/assets/crops/strawberry.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 6-8 महीने में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 6-8 నెలల్లో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Starts fruiting in about 6-8 months";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}

class Raspberry {
  pic = "/assets/crops/raspberry.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 1-2 सालों में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 1-2 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Starts fruiting in about 1-2 years";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}

class Blueberry {
  pic = "/assets/crops/blueberry.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 2-3 सालों में फल देना शुरू करता है";
      this.Soil = "अम्लीय मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 2-3 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "ఆమ్లయుతమైన మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Starts fruiting in about 2-3 years";
      this.Soil = "Acidic soil";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}
class Avocado {
  pic = "/assets/crops/avocado.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सदाबहार";
      this.Duration = "लगभग 3-4 सालों में फल देना शुरू करता है";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "20-30°C"; 
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శాశ్వత";
      this.Duration = "సుమారు 3-4 సంవత్సరాలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "20-30°C"; 
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Perennial";
      this.Duration = "Starts fruiting in about 3-4 years";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "20-30°C"; 
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}

class Tomato {
  pic = "/assets/crops/tomato.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मियों में";
      this.Duration = "लगभग 60-90 दिनों में फल देना शुरू करता है";
      this.Soil = "उपजाऊ मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "20-25°C"; 
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవిలో";
      this.Duration = "సుమారు 60-90 రోజులలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "సారవంతమైన నేల";
      this.WaterRequirement = "నిరంతరం నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "20-25°C"; 
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Summer";
      this.Duration = "Starts fruiting in about 60-90 days";
      this.Soil = "Well-drained fertile soil";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "20-25°C"; 
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}
class Carrot {
  pic = "/assets/crops/carrot.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दी का मौसम: अक्टूबर-नवंबर";
      this.Duration = "3-4 महीने";
      this.Soil = "रेतीली या बलुई मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "15-20°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: मच्छर, कीट के तंतू";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "3-4 నెలలు";
      this.Soil = "ఎరుపు లేదా బలుకి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: మిడతలు, కీటకాలు";
    } else {
      this.BestSeasonToGrow = "Winter Season: October-November";
      this.Duration = "3-4 months";
      this.Soil = "Sandy or loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Aphids, root maggots";
    }
  }
}

class Cabbage {
  pic = "/assets/crops/cabbage.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दी का मौसम: अक्टूबर-नवंबर";
      this.Duration = "3-4 महीने";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "15-20°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: तना कीट, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "3-4 నెలలు";
      this.Soil = "లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను కీటకాలు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Winter Season: October-November";
      this.Duration = "3-4 months";
      this.Soil = "Loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Stem borers, aphids";
    }
  }
}

class Cauliflower {
  pic = "/assets/crops/cauliflower.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दी का मौसम: अक्टूबर-नवंबर";
      this.Duration = "3-4 महीने";
      this.Soil = "दोमट या बलुई मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "15-20°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना कीट, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "3-4 నెలలు";
      this.Soil = "లోమ్స్ లేదా బలుకి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను కీటకాలు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Winter Season: October-November";
      this.Duration = "3-4 months";
      this.Soil = "Sandy or loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, aphids";
    }
  }
}

class Broccoli {
  pic = "/assets/crops/broccoli.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दी का मौसम: अक्टूबर-नवंबर";
      this.Duration = "3-4 महीने";
      this.Soil = "दोमट या बलुई मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "15-20°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: तना कीट, एफिड्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "3-4 నెలలు";
      this.Soil = "లోమ్స్ లేదా బలుకి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: తను కీటకాలు, ఎఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Winter Season: October-November";
      this.Duration = "3-4 months";
      this.Soil = "Sandy or loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Stem borers, aphids";
    }
  }
}

class Spinach {
  pic = "/assets/crops/spinach.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दी का मौसम: अक्टूबर-नवंबर";
      this.Duration = "1-2 महीने";
      this.Soil = "दोमट या बलुई मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "15-20°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, मच्छर";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్: అక్టోబర్-నవంబర్";
      this.Duration = "1-2 నెలలు";
      this.Soil = "లోమ్స్ లేదా బలుకి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, మిడతలు";
    } else {
      this.BestSeasonToGrow = "Winter Season: October-November";
      this.Duration = "1-2 months";
      this.Soil = "Loamy or sandy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "15-20°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Aphids, mosquitoes";
    }
  }
}
class Lettuce {
  pic = "/assets/crops/lettuce.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 45-60 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, लीफ होपर, स्लग्स"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 45-60 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, ఆకు దూలములు, స్లగ్స్"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Approximately 45-60 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Aphids, leafhoppers, slugs"; 
    }
  }
}

class Cucumber {
  pic = "/assets/crops/cucumber.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम";
      this.Duration = "लगभग 50-60 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित और पर्याप्त पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, लीफ होपर, माइट्स"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్";
      this.Duration = "సుమారు 50-60 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా మరియు సరిపడా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, ఆకు దూలములు, మైట్స్"; 
    } else {
      this.BestSeasonToGrow = "Summer Season";
      this.Duration = "Approximately 50-60 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular and adequate water";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Aphids, leafhoppers, mites"; 
    }
  }
}

class Radish {
  pic = "/assets/crops/radish.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 25-35 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, लीफ होपर, स्लग्स"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 25-35 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, ఆకు దూలములు, స్లగ్స్"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Approximately 25-35 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Aphids, leafhoppers, slugs"; 
    }
  }
}
class Potato {
  pic = "/assets/crops/potato.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों में";
      this.Duration = "लगभग 70-100 दिनों में फल देना शुरू करता है";
      this.Soil = "भारी मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-20°C"; 
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: आलू के कीट, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలంలో";
      this.Duration = "సుమారు 70-100 రోజులలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "భారీ నేల";
      this.WaterRequirement = "నిరంతరం నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-20°C"; 
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఆలూ కీటకాలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Winter";
      this.Duration = "Starts fruiting in about 70-100 days";
      this.Soil = "Heavy soil";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-20°C"; 
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Potato beetles, aphids, leafhoppers"; 
    }
  }
}
class Okra {
  pic = "/assets/crops/okra.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: अप्रैल-जून";
      this.Duration = "2-3 महीने";
      this.Soil = "रेतीली दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, तना कीट";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవీ సీజన్: ఏప్రిల్-జూన్";
      this.Duration = "2-3 నెలలు";
      this.Soil = "ఎరుపు లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, తను కీటకాలు";
    } else {
      this.BestSeasonToGrow = "Summer Season: April-June";
      this.Duration = "2-3 months";
      this.Soil = "Sandy loam soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Aphids, stem borers";
    }
  }
}

class ChiliPeppers {
  pic = "/assets/crops/chili_peppers.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: मार्च-मई";
      this.Duration = "2-3 महीने";
      this.Soil = "संचारी और हल्की दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "25-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, थ्रिप्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవీ సీజన్: మార్చి-మే";
      this.Duration = "2-3 నెలలు";
      this.Soil = "సంచార మరియు తేలికపాటి లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, థ్రిప్స్";
    } else {
      this.BestSeasonToGrow = "Summer Season: March-May";
      this.Duration = "2-3 months";
      this.Soil = "Well-drained, light loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Aphids, thrips";
    }
  }
}

class Capsicum {
  pic = "/assets/crops/capsicum.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: मार्च-जून";
      this.Duration = "2-3 महीने";
      this.Soil = "हल्की दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, थ्रिप्स";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవీ సీజన్: మార్చి-జూన్";
      this.Duration = "2-3 నెలలు";
      this.Soil = "తేలికపాటి లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, థ్రిప్స్";
    } else {
      this.BestSeasonToGrow = "Summer Season: March-June";
      this.Duration = "2-3 months";
      this.Soil = "Light loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Aphids, thrips";
    }
  }
}

class Pumpkin {
  pic = "/assets/crops/pumpkin.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: मार्च-जून";
      this.Duration = "4-5 महीने";
      this.Soil = "संतुलित दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "25-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, तना कीट";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవీ సీజన్: మార్చి-జూన్";
      this.Duration = "4-5 నెలలు";
      this.Soil = "సమతుల్య లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, తను కీటకాలు";
    } else {
      this.BestSeasonToGrow = "Summer Season: March-June";
      this.Duration = "4-5 months";
      this.Soil = "Balanced loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Aphids, stem borers";
    }
  }
}
class Turnip {
  pic = "/assets/crops/turnip.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 45-60 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, लीफ होपर, स्लग्स"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 45-60 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, ఆకు దూలములు, స్లగ్స్"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Approximately 45-60 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Aphids, leafhoppers, slugs"; 
    }
  }
}

class Beetroot {
  pic = "/assets/crops/beetroot.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों का मौसम";
      this.Duration = "लगभग 60-80 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, लीफ होपर, स्लग्स"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలం సీజన్";
      this.Duration = "సుమారు 60-80 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, ఆకు దూలములు, స్లగ్స్"; 
    } else {
      this.BestSeasonToGrow = "Winter Season";
      this.Duration = "Approximately 60-80 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Aphids, leafhoppers, slugs"; 
    }
  }
}

class Brinjal {
  pic = "/assets/crops/brinjal.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम";
      this.Duration = "लगभग 80-100 दिन";
      this.Soil = "दोमट या बलुई दोमट मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: फल मक्खी, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవి సీజన్";
      this.Duration = "సుమారు 80-100 రోజులు";
      this.Soil = "లోమ్స్ లేదా ఇసుక లోమ్స్ మట్టి";
      this.WaterRequirement = "నियमితంగా నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: పండు ఈగలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Summer Season";
      this.Duration = "Approximately 80-100 days";
      this.Soil = "Loam or sandy loam soils";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Fruit flies, aphids, leafhoppers"; 
    }
  }
}
class Onion {
  pic = "/assets/crops/onion.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों में";
      this.Duration = "लगभग 120-150 दिनों में फल देना शुरू करता है";
      this.Soil = "भारी मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-20°C"; 
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: प्याज के कीट, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలంలో";
      this.Duration = "సుమారు 120-150 రోజులలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "భారీ నేల";
      this.WaterRequirement = "నిరంతరం నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-20°C"; 
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఉల్లిపాయ కీటకాలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Winter";
      this.Duration = "Starts fruiting in about 120-150 days";
      this.Soil = "Heavy soil";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-20°C"; 
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Onion thrips, aphids, leafminers"; 
    }
  }
}
class Squash {
  pic = "/assets/crops/squash.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: मार्च-जून";
      this.Duration = "3-4 महीने";
      this.Soil = "हल्की दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "25-30°C";
      this.Fertilizers = "नाइट्रोजन और फास्फोरस का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, तना कीट";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవీ సీజన్: మార్చి-జూన్";
      this.Duration = "3-4 నెలలు";
      this.Soil = "తేలికపాటి లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "నైట్రోజన్ మరియు ఫాస్ఫరస్ సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, తను కీటకాలు";
    } else {
      this.BestSeasonToGrow = "Summer Season: March-June";
      this.Duration = "3-4 months";
      this.Soil = "Light loamy soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "Balanced application of nitrogen and phosphorus";
      this.Pests = "Pests: Aphids, stem borers";
    }
  }
}

class SweetPotato {
  pic = "/assets/crops/sweet_potato.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "गर्मी का मौसम: मार्च-मई";
      this.Duration = "4-5 महीने";
      this.Soil = "रेतीली दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "सिंचाई की आवश्यकता होती है, विशेष रूप से गर्मियों में।";
      this.Temperature = "25-30°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: एफिड्स, तना कीट";
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వేసవీ సీజన్: మార్చి-మే";
      this.Duration = "4-5 నెలలు";
      this.Soil = "ఎరుపు లోమ్స్ మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "నీరు త్రాగుట అవసరం ఉంటుంది, ముఖ్యంగా వేసవిలో.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: ఎఫిడ్స్, తను కీటకాలు";
    } else {
      this.BestSeasonToGrow = "Summer Season: March-May";
      this.Duration = "4-5 months";
      this.Soil = "Sandy loam soil";
      this.WaterRequirement = "Moderate water requirement";
      this.Irrigation = "Irrigation is required, especially in the summer.";
      this.Temperature = "25-30°C";
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Aphids, stem borers";
    }
  }
}
class Ginger {
  pic = "/assets/crops/ginger.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "वर्षा ऋतु में";
      this.Duration = "लगभग 8-10 महीनों में फल देना शुरू करता है";
      this.Soil = "भारी मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "20-30°C"; 
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: अदरक के कीट, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "వర్షాకాలంలో";
      this.Duration = "సుమారు 8-10 నెలలలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "భారీ నేల";
      this.WaterRequirement = "నిరంతరం నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "20-30°C"; 
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: అల్లం కీటకాలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Monsoon";
      this.Duration = "Starts fruiting in about 8-10 months";
      this.Soil = "Heavy soil";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "20-30°C"; 
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Ginger beetles, aphids, leafminers"; 
    }
  }
}
class Garlic {
  pic = "/assets/crops/garlic.png";

  constructor(lang) {
    if (lang === "hi") {
      this.BestSeasonToGrow = "सर्दियों में";
      this.Duration = "लगभग 90-120 दिनों में फल देना शुरू करता है";
      this.Soil = "भारी मिट्टी";
      this.WaterRequirement = "नियमित पानी की आवश्यकता होती है";
      this.Irrigation = "ड्रिप या स्प्रिंकलर सिंचाई";
      this.Temperature = "15-20°C"; 
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटेशियम का संतुलित उपयोग";
      this.Pests = "कीट: लहसुन के कीट, एफिड्स, लीफ होपर"; 
    } else if (lang === "te") {
      this.BestSeasonToGrow = "శీతాకాలంలో";
      this.Duration = "సుమారు 90-120 రోజులలో ఫలాలు ఇవ్వడం ప్రారంభిస్తుంది";
      this.Soil = "భారీ నేల";
      this.WaterRequirement = "నిరంతరం నీరు త్రాగుట అవసరం";
      this.Irrigation = "డ్రిప్ లేదా స్ప్రింక్లర్ నీరు త్రాగుట";
      this.Temperature = "15-20°C"; 
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం సమతుల్య ఉపయోగం";
      this.Pests = "కీటకాలు: వెల్లుల్లి కీటకాలు, ఎఫిడ్స్, ఆకు దూలములు"; 
    } else {
      this.BestSeasonToGrow = "Winter";
      this.Duration = "Starts fruiting in about 90-120 days";
      this.Soil = "Heavy soil";
      this.WaterRequirement = "Requires regular watering";
      this.Irrigation = "Drip or sprinkler irrigation";
      this.Temperature = "15-20°C"; 
      this.Fertilizers = "Balanced application of nitrogen, phosphorus, and potassium";
      this.Pests = "Pests: Garlic beetles, aphids, leafminers"; 
    }
  }
}

module.exports = {
  Rice,
  Wheat,
  Lentils,
  Cotton,
  Maize,
  SugarCane,
  Soybeans,
  Groundnuts,
  Millets,
  Coffee,
  Barley,
  Sorghum,
  Oats,
  FingerMillet,
  Chickpeas,
  PigeonPeas,
  MungBeans,
  UradBeans,
  MoongBeans,
  BlackGram,
  Cowpeas,
  Peas,
  BroadBeans,
  FavaBeans,
  KidneyBeans,
  LimaBeans,
  SnapBeans,
  AdzukiBeans,
  CranberryBeans,
  Coconut,
  Palm,
  Castor,
  Linseed,
  Safflower,
  Mustard,
  Rapeseed,
  Sunflower,
  Sesame,
  Flax,
  Tea,
  Rubber,
  Guava,
  Papaya,
  Pineapple,
  Watermelon,
  Mango,
  Banana,
  Apple,
  Grapes,
  Orange,
  Lemon,
  Pomegranate,
  Muskmelon,
  Lychee,
  Peach,
  // finished till plum go upwards
  Plum,
  Cherry,
  Jackfruit,
  Fig,
  Date,
  Apricot,
  Strawberry,
  Raspberry,
  Blueberry,
  Avocado,
  Tomato,
  Carrot,
  Cabbage,
  Cauliflower,
  Capsicum,
  Lettuce,
  Spinach,
  Broccoli,
  Cucumber,
  Radish,
  Potato,
  Okra,
  ChiliPeppers,
  Pumpkin,
  Turnip,
  Beetroot,
  Brinjal,
  Onion,
  Squash,
  SweetPotato,
  Ginger,
  Garlic,







};
