// Datos para el archivo JSON
import fs from "fs";
import path from "path";

// const data = {
//   name: "Ejemplo",
//   description: "Archivo JSON generado desde un script en React",
// };

// // Ruta del directorio y del archivo JSON
// const directoryPath = "src/translations/en";
// const filePath = path.join(directoryPath, "generated-data.json");

// // Asegurarse de que el directorio exista
// if (!fs.existsSync(directoryPath)) {
//   fs.mkdirSync(directoryPath, { recursive: true });
// }

// // Convertir datos a formato JSON
// const jsonData = JSON.stringify(data, null, 2);

// // Escribir datos en el archivo JSON
// fs.writeFileSync(filePath, jsonData);

// console.log(`Archivo JSON generado en: ${filePath}`);

const translationsArray = [
  {
    language: "en",
    name: "Example",
    description: "JSON file generated from a React script for English",
    welcome: "React + Vite + i18N",
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

const baseDirectory = "src/translations";

// Limpiar y generar archivos JSON
translationsArray.forEach((translation) => {
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
translationsArray.forEach((translation) => {
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
