const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'universities.ts');

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to match conflict blocks and capture HEAD content
    // Matches <<<<<<< HEAD ... ======= ... >>>>>>> hash
    // We want to keep the content before =======
    const regex = /<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n[\s\S]*?>>>>>>> [a-f0-9]+/g;

    let matchCount = 0;
    const newContent = content.replace(regex, (match, headContent) => {
        matchCount++;
        return headContent.trim(); // Trim might remove indentation too aggressively if not careful?
        // Actually, headContent will capture the newlines.
        // Let's be careful. The markers usually are on their own lines.
        // If I use trim(), I might lose indentation. 
        // Let's just return headContent but I need to check if the regex captures the newline after HEAD or not.
        // My regex: <<<<<<< HEAD\r?\n
        // So headContent starts at the beginning of the next line.
        // It ends right before =======
        // So it should be fine.
        return headContent;
    });

    // Also handle possible trailing conflict markers if any weirdness
    // But the regex looks standard.

    if (matchCount > 0) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Successfully resolved ${matchCount} conflicts.`);
    } else {
        console.log("No conflicts found matching the pattern.");
    }

} catch (err) {
    console.error("Error processing file:", err);
    process.exit(1);
}
