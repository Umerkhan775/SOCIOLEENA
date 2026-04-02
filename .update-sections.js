const fs = require('fs');
const path = require('path');

const dir = 'd:/socioleena---digital-marketing-expert/src/pages';
const files = ['Home.tsx', 'Brands.tsx', 'Certifications.tsx', 'Contact.tsx', 'Services.tsx', 'Story.tsx'];

const animationProps = `initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease: "easeOut" }} `;

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if we already modified it (to prevent double replacing)
  if (content.includes('initial={{ opacity: 0, y: 30 }}')) {
     console.log('Skipping ' + file + ' (already updated)');
     return;
  }

  // Add framer-motion import if it doesn't exist
  if (!content.includes('import { motion') && !content.includes('import {motion')) {
    const importMatch = content.match(/import\s+.*?;?\r?\n/);
    if (importMatch) {
      content = content.replace(importMatch[0], importMatch[0] + "import { motion } from 'motion/react';\n");
    } else {
      content = "import { motion } from 'motion/react';\n" + content;
    }
  }

  // Handle case where motion is already imported, we'll just replace section tags
  content = content.replace(/<section\b/g, '<motion.section ' + animationProps);
  content = content.replace(/<\/section>/g, '</motion.section>');

  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Update complete.');
