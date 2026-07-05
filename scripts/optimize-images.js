const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, '../public/img/upscayl_png_upscayl-standard-4x_5x');
const OUTPUT_DIR = path.join(__dirname, '../public/img/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Map the unnamed files to categories and beautiful titles/descriptions
const imageMetadata = {
  'unnamed': {
    title: 'Royal Rajasthani Bridal Henna',
    category: 'Bridal Mehndi',
    description: 'Intricate traditional full-hand bridal mehndi featuring royal court motifs, peacocks, and floral mesh details.'
  },
  'unnamed (1)': {
    title: 'Elegant Arabic Bel Pattern',
    category: 'Arabic Mehndi',
    description: 'Bold outlines and delicate fillings in a flowing diagonal pattern, perfect for bridesmaids.'
  },
  'unnamed (2)': {
    title: 'Modern Indo-Arabic Fusion',
    category: 'Indo Arabic',
    description: 'A blend of traditional Indian structure with bold Arabic negative spaces and geometric symmetry.'
  },
  'unnamed (3)': {
    title: 'Custom Couple Portrait Henna',
    category: 'Portrait Mehndi',
    description: 'Stunning hand-drawn couple portraits depicting wedding rituals, customized for the bride.'
  },
  'unnamed (4)': {
    title: 'Classic Indian Traditional Mehndi',
    category: 'Traditional',
    description: 'Full coverage hand mehndi featuring classic paisley, lotus, and net designs.'
  },
  'unnamed (5)': {
    title: 'Delicate Engagement Design',
    category: 'Engagement',
    description: 'Graceful and light back-hand mehndi, designed to complement the engagement ring.'
  },
  'unnamed (6)': {
    title: 'Festive Karwa Chauth Special',
    category: 'Festival',
    description: 'Traditional motifs representing love and celebration for the festive season.'
  },
  'unnamed (7)': {
    title: 'Cute Minimalist Henna for Kids',
    category: 'Kids',
    description: 'Simple and adorable flowers and butterflies, crafted with organic safe henna for little hands.'
  },
  'unnamed (8)': {
    title: 'Chic Minimalist Mandala',
    category: 'Minimal',
    description: 'A modern, clean circular mandala on the palm with neat finger caps, perfect for minimalist styling.'
  },
  'unnamed (9)': {
    title: 'Radiant Royal Bridal Makeup',
    category: 'Makeup',
    description: 'Flawless glowing base with subtle bronze eyes and rich crimson lips, customized for the big day.'
  },
  'unnamed (10)': {
    title: 'Glamorous Evening Party Makeup',
    category: 'Makeup',
    description: 'Dramatic smoky eyes paired with a nude lip, perfect for receptions and cocktail parties.'
  },
  'unnamed (11)': {
    title: 'Academy Professional Training Class',
    category: 'Classes',
    description: 'Sangeeta guiding students on cone holding, pressure control, and basic line work.'
  },
  'unnamed (12)': {
    title: 'Dulhan Full Hand Mehndi Detail',
    category: 'Bridal Mehndi',
    description: 'Exquisite detailing up to the elbows, capturing traditional doli and shehnai motifs.'
  },
  'unnamed (13)': {
    title: 'Bold Leafy Arabic Mehndi',
    category: 'Arabic Mehndi',
    description: 'Shaded floral trail featuring bold leafy structures and modern negative spaces.'
  },
  'unnamed (14)': {
    title: 'Contemporary Indo-Arabic Grid',
    category: 'Indo Arabic',
    description: 'Symmetrical checkers mixed with delicate vines, covering both front and back hands.'
  },
  'unnamed (15)': {
    title: 'Groom & Bride Portrait Close-up',
    category: 'Portrait Mehndi',
    description: 'A highly detailed close-up of a portrait mehndi, showcasing Sangeeta’s fine-line artistry.'
  },
  'unnamed (16)': {
    title: 'Traditional Maharashtrian Bridal Makeup',
    category: 'Makeup',
    description: 'Classic Nauvari saree styling with a glowing base, traditional crescent bindi, and heavy gold jewelry makeup.'
  },
  'unnamed (17)': {
    title: 'Advanced Stroke & Shading Practice',
    category: 'Classes',
    description: 'Hands-on practice on acrylic hands, focusing on shading techniques, thick-and-thin lines, and speed.'
  }
};

async function optimizeImages() {
  console.log('Starting image optimization process...');
  const files = fs.readdirSync(INPUT_DIR).filter(file => file.endsWith('.png'));
  console.log(`Found ${files.length} images to process.`);

  const galleryData = [];

  for (const file of files) {
    const filenameWithoutExt = path.parse(file).name;
    const metadata = imageMetadata[filenameWithoutExt] || {
      title: filenameWithoutExt,
      category: 'Minimal',
      description: 'Beautiful mehndi artwork by Sangeeta.'
    };

    const inputPath = path.join(INPUT_DIR, file);
    
    const thumbName = `thumbnail-${filenameWithoutExt}.webp`;
    const fullName = `full-${filenameWithoutExt}.webp`;
    
    const thumbPath = path.join(OUTPUT_DIR, thumbName);
    const fullPath = path.join(OUTPUT_DIR, fullName);

    console.log(`Processing: ${file}...`);

    try {
      // 1. Generate thumbnail: Max-width 600px, 75% quality webp
      await sharp(inputPath)
        .resize({ width: 600, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(thumbPath);

      // 2. Generate full: Max-width 1600px, 80% quality webp
      await sharp(inputPath)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(fullPath);

      console.log(`Optimized ${file} -> Generated WebP images successfully.`);

      galleryData.push({
        id: filenameWithoutExt.replace(/\\s+/g, '_').toLowerCase(),
        title: metadata.title,
        category: metadata.category,
        description: metadata.description,
        thumbnail: `/img/optimized/${thumbName}`,
        full: `/img/optimized/${fullName}`
      });
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  // Ensure data folder exists
  const dataDir = path.join(__dirname, '../src/data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Output TS code file
  const tsContent = `// Auto-generated by scripts/optimize-images.js
export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  full: string;
}

export const galleryItems: GalleryItem[] = ${JSON.stringify(galleryData, null, 2)};
`;

  fs.writeFileSync(path.join(dataDir, 'gallery-data.ts'), tsContent);
  console.log('Gallery metadata saved to src/data/gallery-data.ts');
  console.log('Image optimization complete!');
}

optimizeImages();
