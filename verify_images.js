
import crypto from 'crypto';
import https from 'https';

const candidates = {
    "Manchester": [
        "Whitworth_Hall.jpg",
        "The_University_of_Manchester_Whitworth_Hall.jpg",
        "The_University_of_Manchester_Whitworth_Hall_2.jpg",
        "University_of_Manchester_Whitworth_Hall.jpg",
        "Whitworth_Hall_Interior.jpg"
    ],
    "Oxford": [
        "Radcliffe_Camera_Oxford.jpg",
        "Radcliffe_Camera.jpg",
        "Radcliffe_Camera,_Oxford.jpg"
    ],
    "Cambridge": [
        "King's_College_Chapel_from_the_Backs.jpg",
        "King's_College_Chapel,_Cambridge.jpg"
    ],
    "MIT": [
        "MIT_Great_Dome.jpg",
        "MIT_Building_10_and_the_Great_Dome,_Cambridge_MA.jpg"
    ],
    "Imperial": [
        "Imperial_College_London_Queen's_Tower.jpg",
        "Queen's_Tower_Imperial_College.jpg",
        "Queen's_Tower_(Imperial_College_London).jpg",
        "Imperial_College_London_Entrance.jpg"
    ],
    "LSE": [
        "LSE_Old_Building.jpg",
        "London_School_of_Economics_Old_Building.jpg",
        "LSE_New_Academic_Building.jpg"
    ],
    "UCL": [
        "UCL_Portico.jpg",
        "UCL_Main_Building.jpg",
        "University_College_London_Portico.jpg",
        "UCL_Main_Building_Front_Quad.jpg"
    ],
    "Edinburgh": [
        "University_of_Edinburgh_Old_College.jpg",
        "Old_College_Edinburgh.jpg",
        "University_of_Edinburgh_Old_College_Quad.jpg"
    ],
    "Warwick": [
        "University_of_Warwick_-_Koan.jpg",
        "University_of_Warwick_Campus.jpg"
    ],
    "Kings": [
        "King's_College_London_Strand_Campus.jpg",
        "King's_College_London_Maughan_Library.jpg"
    ]
};

function getMd5Url(filename) {
    const name = filename.replace(/ /g, '_');
    const hash = crypto.createHash('md5').update(name).digest('hex');
    const a = hash.substring(0, 1);
    const ab = hash.substring(0, 2);
    return `https://upload.wikimedia.org/wikipedia/commons/${a}/${ab}/${encodeURIComponent(name)}`;
}

async function checkUrl(url) {
    return new Promise((resolve) => {
        const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'NodeBot/1.0' } }, (res) => {
            resolve(res.statusCode);
        });
        req.on('error', () => resolve(0));
        req.end();
    });
}

async function findWorking() {
    for (const uni in candidates) {
        console.log(`Checking ${uni}...`);
        let found = false;
        for (const filename of candidates[uni]) {
            const url = getMd5Url(filename);
            const status = await checkUrl(url);
            if (status === 200) {
                console.log(`[SUCCESS] ${uni}: ${url}`);
                found = true;
                break;
            }
        }
        if (!found) console.log(`[FAILED] ${uni} - No working URL found`);
    }
}

findWorking();
