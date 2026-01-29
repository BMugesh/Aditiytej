const https = require('https');
const crypto = require('crypto');

// Specific candidates for iconic buildings
const candidates = {
    // Poland
    "Warsaw": [
        "Brama_Główna_Uniwersytetu_Warszawskiego.jpg", // Main Gate
        "Pałac_Kazimierzowski_w_Warszawie.jpg", // Kazimierzowski Palace
        "University_of_Warsaw_library.jpg"
    ],
    "Jagiellonian": [
        "Collegium_Maius_courtyard.jpg", // Historic courtyard
        "Jagiellonian_University_Collegium_Novum.jpg"
    ],
    "WUT": [
        "Politechnika_Warszawska_Gmach_Glowny.jpg", // Main Building
        "Warsaw_University_of_Technology_Main_Building_2012.jpg"
    ],

    // Europe
    "ETH": [
        "ETH_Zurich_Hauptgebaeude.jpg", // Main Building
        "ETH_Zürich_Hauptgebäude_2011.jpg"
    ],
    "EPFL": [
        "Rolex_Learning_Center_EPFL_01.jpg",
        "EPFL_Rolex_Learning_Center.jpg"
    ],
    "TUM": [
        "TUM_Innenhof.jpg", // Main campus
        "Technische_Universität_München_-_Entrance.jpg"
    ],
    "LMU": [
        "LMU_Muenchen_Hauptgebaeude_Innenhof.jpg", // Main building courtyard
        "Geschwister-Scholl-Platz_LMU_München.jpg"
    ],
    "Heidelberg": [
        "Alte_Universität_Heidelberg.jpg",
        "Heidelberg_University_Library.jpg"
    ],
    "Delft": [
        "TU_Delft_Library.jpg", // Iconic library with grass roof
        "Aula_TU_Delft.jpg"
    ],
    "UvA": [
        "Maagdenhuis_Amsterdam.jpg",
        "Oudemanhuispoort_Amsterdam.jpg"
    ],
    "Karolinska": [
        "Aula_Medica_Karolinska_Institutet.jpg",
        "Karolinska_Institute_Entrance.jpg"
    ],

    // United Kingdom (Re-verifying exact names)
    "Cambridge": ["King's_College_Chapel_from_the_Backs.jpg"],
    "Imperial": ["The_Queen's_Tower_London.jpg"],
    "LSE": ["London_School_of_Economics_Old_Building.jpg"],
    "UCL": ["UCL_Main_Building_Portico_01.jpg"],
    "Edinburgh": ["University_of_Edinburgh_-_Old_College_-_2015.jpg"],
    "Manchester": ["Whitworth_Hall,_University_of_Manchester.jpg"], // Specific
    "Warwick": ["The_Piazza,_University_of_Warwick.jpg"],
    "Kings": ["Somerset_House_East_Wing.jpg"],
    "Bristol": ["Wills_Memorial_Building,_Bristol_University.jpg"],

    // Australia
    "Melbourne": ["The_Old_Arts_Building,_University_of_Melbourne.jpg", "University_of_Melbourne_Clocktower.jpg"],
    "ANU": ["JCSMR_ANU_Entrance.jpg"],
    "Sydney": ["Sydney_University_Main_Quadrangle.jpg"],
    "UQ": ["The_Great_Court,_University_of_Queensland.jpg"]
};

function getMd5(string) {
    return crypto.createHash('md5').update(string).digest('hex');
}

function checkImage(university, filename) {
    return new Promise((resolve) => {
        const encoded = encodeURIComponent(filename);
        // We use the direct Special:FilePath URL pattern which wsrv.nl handles well usually,
        // BUT for verification we want to know the direct link exists.
        // Direct link logic: https://upload.wikimedia.org/wikipedia/commons/a/ab/Filename.jpg
        const hash = getMd5(filename);
        const a = hash.substring(0, 1);
        const ab = hash.substring(0, 2);
        const directUrl = `https://upload.wikimedia.org/wikipedia/commons/${a}/${ab}/${encoded}`;

        const req = https.request(directUrl, {
            method: 'HEAD',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        }, (res) => {
            if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
                console.log(`[SUCCESS] ${university}: https://wsrv.nl/?url=${directUrl}&w=1200&q=80`);
                resolve(true);
            } else {
                console.log(`[FAIL] ${university}: ${filename} (${res.statusCode})`);
                resolve(false);
            }
        });

        req.on('error', () => resolve(false));
        req.end();
    });
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function verify() {
    console.log("Searching for verified Real-World images...");
    for (const [uni, files] of Object.entries(candidates)) {
        let found = false;
        for (const file of files) {
            await wait(1000); // 1 second delay between requests
            if (await checkImage(uni, file)) {
                found = true;
                break;
            }
        }
        if (!found) console.log(`[FAILED] ${uni} - No working specific image found.`);
    }
}

verify();
