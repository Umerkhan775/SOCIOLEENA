import fs from 'fs';

const filesToProcess = [
  'src/pages/Services.tsx',
  'src/pages/Story.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Brands.tsx',
  'src/pages/Certifications.tsx'
];

let globalCounter = 100;

filesToProcess.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    const images = new Map();

    const regexLiteral = /src\s*=\s*(["'])\/?(images\/[^"']+)\1/g;
    content = content.replace(regexLiteral, (match, quote, p1) => {
        let varName;
        if (images.has(p1)) {
            varName = images.get(p1);
        } else {
            varName = `mediaImg${globalCounter++}`;
            images.set(p1, varName);
        }
        return `src={${varName}}`;
    });

    const regexObject = /:\s*(["'])\/?(images\/[^"']+)\1/g;
    content = content.replace(regexObject, (match, quote, p1) => {
        if (!p1.match(/\.(webp|png|jpg|jpeg|mp4)$/i)) return match;
        let varName;
        if (images.has(p1)) {
            varName = images.get(p1);
        } else {
            varName = `mediaImg${globalCounter++}`;
            images.set(p1, varName);
        }
        return `: ${varName}`;
    });

    const regexBg = /backgroundImage:\s*(["'])url\(\/?(images\/[^)]+)\)\1/g;
    content = content.replace(regexBg, (match, quote, p1) => {
        let varName;
        if (images.has(p1)) {
            varName = images.get(p1);
        } else {
            varName = `mediaImg${globalCounter++}`;
            images.set(p1, varName);
        }
        return `backgroundImage: \`url(\$\{${varName}\})\``; // evaluates to: backgroundImage: `url(${varName})`
    });

    let imports = '';
    for (const [path, varName] of images.entries()) {
        imports += `import ${varName} from '../assets/${path}';\n`;
    }

    if (imports) {
        content = content.replace(/(import .*;\n)+/, (match) => {
            return match + '\n' + imports;
        });
        fs.writeFileSync(filePath, content);
        console.log(`Fixed ${filePath}`);
    }
});
