// Datos para el archivo JSON
import fs from "fs";
import path from "path";

const translationsArray = [
  {
    language: "en",
    name: "Example",
    description: "JSON file generated from a React script for English",
    welcome: "React + Vite + i18N NEXT Test#2 223",
    buttonNext: "next",
  },
  {
    language: "es",
    name: "Ejemplo",
    description: "Archivo JSON generado desde un script en React para español",
    welcome: "React + Vite + i18N",
    buttonNext: "siguiente",
  },
  {
    language: "gr",
    name: "Beispiel",
    description: "JSON-Datei aus einem React-Skript für Deutsch",
    welcome: "React + Vite + i18N",
    buttonNext: "siguiente adssad",
  },
  // Agrega los objetos que quieras
];

const getTranslations = async () => {
  const response = await fetch("https://api-i18n.vercel.app/translations");

  if (response.status === 200) {
    const result = await response.json();

    return result;
  }
  return [];
};

getTranslations().then((resp) => {
  // Limpiar y generar archivos JSON
  resp.data.forEach((translation) => {
    const { language } = translation;
    const directoryPath = path.join(baseDirectory, language);
    const filePath = path.join(directoryPath, "global.json");

    // Asegurarse de que el directorio exista
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    // Escribir un objeto JSON vacío en el archivo
    fs.writeFileSync(filePath, "{}", "utf-8");

    console.log(`Archivo JSON limpiado para ${language} en: ${filePath}`);
  });

  // Crear carpetas para cada idioma y generar archivos JSON
  resp.data.forEach((translation) => {
    const { language, ...rest } = translation;
    const directoryPath = path.join(baseDirectory, language);
    const filePath = path.join(directoryPath, "global.json");

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    // Convertir datos a formato JSON
    const jsonData = JSON.stringify({ ...rest }, null, 2);

    // Escribir datos en el archivo JSON
    fs.writeFileSync(filePath, jsonData);

    console.log(`Archivo JSON generado para ${language} en: ${filePath}`);
  });
});

const baseDirectory = "src/translations";
