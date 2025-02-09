import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

// Update module.exports to show warnings instead of errors
module.exports = {
  rules: {
    "@typescript-eslint/no-explicit-any": "warn", // Changed "off" to "warn" for warnings instead of errors
  },
};
