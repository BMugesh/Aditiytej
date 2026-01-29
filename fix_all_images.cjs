const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'universities.ts');

// Verified working Unsplash image URLs for different types of universities
const workingImages = {
    // Modern campus/tech universities
    modern: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",

    // Classic/historic universities  
    classic: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200&q=80",

    // European universities
    european: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&q=80",

    // UK universities
    uk: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=1200&q=80",

    // Canadian universities
    canadian: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=1200&q=80",

    // Australian universities
    australian: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80",

    // General campus
    campus1: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80",
    campus2: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1200&q=80",
    campus3: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=80",
};

// Map universities to appropriate images
const universityImageMap = {
    // US Universities
    'mit': workingImages.modern,
    'stanford': workingImages.classic,
    'harvard': workingImages.classic,
    'caltech': workingImages.campus2,
    'ucberkeley': workingImages.campus3,
    'ucla': workingImages.campus1,
    'columbia': workingImages.campus1,
    'nyu': workingImages.modern,
    'upenn': workingImages.campus1,
    'northwestern': workingImages.campus2,

    // UK Universities
    'oxford': workingImages.uk,
    'cambridge': workingImages.uk,
    'imperial': workingImages.uk,
    'lse': workingImages.uk,
    'ucl': workingImages.uk,
    'edinburgh': workingImages.uk,
    'manchester': workingImages.uk,
    'warwick': workingImages.uk,
    'kcl': workingImages.uk,
    'bristol': workingImages.uk,

    // Canadian Universities
    'toronto': workingImages.canadian,
    'ubc': workingImages.canadian,
    'mcgill': workingImages.canadian,
    'waterloo': workingImages.canadian,
    'alberta': workingImages.canadian,

    // European Universities
    'eth': workingImages.european,
    'epfl': workingImages.european,
    'tum': workingImages.european,
    'lmu': workingImages.european,
    'heidelberg': workingImages.european,
    'delft': workingImages.european,
    'uva': workingImages.european,
    'karolinska': workingImages.european,

    // Australian Universities
    'unimelb': workingImages.australian,
    'anu': workingImages.australian,
    'sydney': workingImages.australian,
    'uq': workingImages.australian,

    // New Zealand Universities
    'auckland': workingImages.australian,
    'otago': workingImages.australian,
    'victoria': workingImages.australian,

    // Austrian Universities
    'vienna': workingImages.european,
    'tuvienna': workingImages.european,
    'innsbruck': workingImages.european,

    // Polish Universities
    'warsaw': workingImages.european,
    'jagiellonian': workingImages.european,
    'warsawtech': workingImages.european,
};

try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changeCount = 0;

    // Replace each university's image
    for (const [id, imageUrl] of Object.entries(universityImageMap)) {
        // Match the university block and replace its image line
        const regex = new RegExp(
            `(id: "${id}"[\\s\\S]*?image: )"[^"]*"`,
            'g'
        );

        const newContent = content.replace(regex, (match, prefix) => {
            changeCount++;
            return prefix + `"${imageUrl}"`;
        });

        if (newContent !== content) {
            content = newContent;
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Successfully updated ${changeCount} university images with verified URLs`);

} catch (err) {
    console.error("❌ Error processing file:", err);
    process.exit(1);
}
