import fs from 'fs';

const filePath = 'src/pages/Home.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const images = new Map();
let importCounter = 1;

// Replace encoded URI stuff manually first
content = content.replace(/`\/images\/work\/\$\{encodeURIComponent\('shopify 1\.mp4'\)\}`/g, "'/images/work/shopify 1.mp4'");
content = content.replace(/`\/images\/work\/\$\{encodeURIComponent\('Lure website hompage desktop\.png'\)\}`/g, "'/images/work/Lure website hompage desktop.png'");
content = content.replace(/`\/images\/work\/\$\{encodeURIComponent\('footer dektop\.png'\)\}`/g, "'/images/work/footer dektop.png'");

const regexLiteral = /src\s*=\s*(["'])\/?(images\/[^"']+)\1/g;
content = content.replace(regexLiteral, (match, quote, p1) => {
    let varName;
    if (images.has(p1)) {
        varName = images.get(p1);
    } else {
        varName = `mediaImg${importCounter++}`;
        images.set(p1, varName);
    }
    return `src={${varName}}`;
});

const regexObject = /:\s*(["'])\/?(images\/[^"']+)\1/g;
content = content.replace(regexObject, (match, quote, p1) => {
    // Only replace if it ends in webp|png|jpg|mp4
    if (!p1.match(/\.(webp|png|jpg|jpeg|mp4)$/i)) {
        return match;
    }
    let varName;
    if (images.has(p1)) {
        varName = images.get(p1);
    } else {
        varName = `mediaImg${importCounter++}`;
        images.set(p1, varName);
    }
    return `: ${varName}`;
});

let imports = '';
for (const [path, varName] of images.entries()) {
    imports += `import ${varName} from '../assets/${path}';\n`;
}

// Add imports after React imports
content = content.replace(/(import .*;\n)+/, (match) => {
    return match + '\n' + imports;
});

fs.writeFileSync(filePath, content);
console.log('Fixed Home.tsx images successfully');
