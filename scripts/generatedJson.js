// Datos para el archivo JSON
import fs from "fs";
import path from "path";

const languages = [
  {
    lang: "en",
  },
  {
    lang: "es",
  },
  {
    lang: "fr",
  },
  {
    lang: "de",
  },
  {
    lang: "it",
  },
  {
    lang: "ja",
  },
  {
    lang: "pt",
  },
];

const getTranslations = async () => {
  try {
    const responses = await Promise.all(
      languages.map(async ({ lang }) => {
        const response = await fetch(
          `https://whale-app-oshx6.ondigitalocean.app/Translations/holaflycenter?language=${lang}`
        );

        if (response.status === 200) {
          const result = await response.json();
          console.log(result);
          return { lang, result };
        } else {
          return { lang, result: {} };
        }
      })
    );

    return responses;
  } catch (error) {
    console.error("Error fetching translations:", error);
    return {};
  }
};

getTranslations().then((responses) => {
  // Limpiar y generar archivos JSON
  responses.forEach(({ lang, result }) => {
    const directoryPath = path.join(baseDirectory, lang);
    const filePath = path.join(directoryPath, "global.json");

    // Asegurarse de que el directorio exista
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    // Convertir datos a formato JSON
    const jsonData = JSON.stringify(result, null, 2);

    // Escribir datos en el archivo JSON
    fs.writeFileSync(filePath, jsonData);

    console.log(`Archivo JSON generado para ${lang} en: ${filePath}`);
  });
});

const baseDirectory = "src/translations";
