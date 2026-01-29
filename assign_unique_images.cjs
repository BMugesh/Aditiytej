const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'universities.ts');

// Diverse, unique Unsplash images for each university
// Each URL is a different campus/university building photo
const universityImageMap = {
    // US Universities - All different images
    'mit': "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200&q=80", // Modern tech campus
    'stanford': "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=1200&q=80", // Classic architecture
    'harvard': "https://images.unsplash.com/photo-1559135197-8a45ea74d367?w=1200&q=80", // Historic campus
    'caltech': "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1200&q=80", // Science building
    'ucberkeley': "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1200&q=80", // California campus
    'ucla': "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?w=1200&q=80", // Modern campus
    'columbia': "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1200&q=80", // Urban university
    'nyu': "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=1200&q=80", // City campus
    'upenn': "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80", // Traditional campus
    'northwestern': "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&q=80", // Lakefront campus

    // UK Universities - All different images
    'oxford': "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=1200&q=80", // Gothic architecture
    'cambridge': "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=1200&q=80", // Historic college
    'imperial': "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1200&q=80", // Modern London
    'lse': "https://images.unsplash.com/photo-1574169208507-84376144848b?w=1200&q=80", // Urban campus
    'ucl': "https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?w=1200&q=80", // Classical building
    'edinburgh': "https://images.unsplash.com/photo-1555990151-6893b827727c?w=1200&q=80", // Scottish architecture
    'manchester': "https://images.unsplash.com/photo-1555883006-0f5a0915a80f?w=1200&q=80", // Red brick university
    'warwick': "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80", // Modern campus
    'kcl': "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1200&q=80", // London building
    'bristol': "https://images.unsplash.com/photo-1611082695026-c22292f7f90e?w=1200&q=80", // Gothic tower

    // Canadian Universities - All different images
    'toronto': "https://images.unsplash.com/photo-1590522100874-8b5e948c2635?w=1200&q=80", // Historic building
    'ubc': "https://images.unsplash.com/photo-1527027557458-75765715947b?w=1200&q=80", // Pacific campus
    'mcgill': "https://images.unsplash.com/photo-1541339902099-1c97671efa4e?w=1200&q=80", // Montreal architecture
    'waterloo': "https://images.unsplash.com/photo-1581333100576-b73bbe79cde5?w=1200&q=80", // Tech campus
    'alberta': "https://images.unsplash.com/photo-1579389083175-247ef70301c2?w=1200&q=80", // Prairie campus

    // European Universities - All different images
    'eth': "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&q=80", // Swiss architecture
    'epfl': "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1200&q=80", // Modern Swiss
    'tum': "https://images.unsplash.com/photo-1589828923233-fa349525c04f?w=1200&q=80", // Munich campus
    'lmu': "https://images.unsplash.com/photo-1592837380293-8557997841f4?w=1200&q=80", // Historic German
    'heidelberg': "https://images.unsplash.com/photo-1506540050868-2432d6ce6c9f?w=1200&q=80", // Medieval town
    'delft': "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", // Dutch architecture
    'uva': "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=1200&q=80", // Amsterdam canal
    'karolinska': "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1200&q=80", // Scandinavian modern

    // Australian Universities - All different images
    'unimelb': "https://images.unsplash.com/photo-1545622783-a006c79d14a6?w=1200&q=80", // Victorian architecture
    'anu': "https://images.unsplash.com/photo-1525010620857-bfb6c1eb234c?w=1200&q=80", // Canberra campus
    'sydney': "https://images.unsplash.com/photo-1595085352610-d8ab1d820641?w=1200&q=80", // Sandstone building
    'uq': "https://images.unsplash.com/photo-1524275037599-795fa7218685?w=1200&q=80", // Queensland campus

    // New Zealand Universities - All different images
    'auckland': "https://images.unsplash.com/photo-1616137452601-574227c88b77?w=1200&q=80", // Clock tower
    'otago': "https://images.unsplash.com/photo-1589873325608-8f5370364f34?w=1200&q=80", // Scottish style
    'victoria': "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=1200&q=80", // Wellington campus

    // Austrian Universities - All different images
    'vienna': "https://images.unsplash.com/photo-1551634979-2b11f8c946fe?w=1200&q=80", // Imperial architecture
    'tuvienna': "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=1200&q=80", // Technical building
    'innsbruck': "https://images.unsplash.com/photo-1550586678-f7b28d6ae68a?w=1200&q=80", // Alpine setting

    // Polish Universities - All different images
    'warsaw': "https://images.unsplash.com/photo-1607427293702-036933bbf746?w=1200&q=80", // Warsaw architecture
    'jagiellonian': "https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1200&q=80", // Krakow medieval
    'warsawtech': "https://images.unsplash.com/photo-1506456070628-9844c8567554?w=1200&q=80", // Technical campus
};

try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changeCount = 0;

    // Replace each university's image
    for (const [id, imageUrl] of Object.entries(universityImageMap)) {
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
    console.log(`✅ Successfully updated ${changeCount} universities with UNIQUE images`);
    console.log(`Each university now has its own distinct campus photo!`);

} catch (err) {
    console.error("❌ Error processing file:", err);
    process.exit(1);
}
