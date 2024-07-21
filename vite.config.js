import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '/var/www/CL/MODUŁ_SPECJALISTYCZNY/PROJEKT';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
