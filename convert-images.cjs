const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "public", "img-webp", "sliders");

fs.readdirSync(folder).forEach(async (file) => {
    const input = path.join(folder, file);
    const ext = path.extname(file).toLowerCase();

    if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        const output = path.join(
            folder,
            path.basename(file, ext) + ".webp"
        );

        try {
            await sharp(input)
                .webp({ quality: 90 })
                .toFile(output);

            console.log(`تم التحويل: ${file} → ${path.basename(output)}`);
        } catch (error) {
            console.error(`خطأ في ${file}:, error.message`);
        }
    }
});