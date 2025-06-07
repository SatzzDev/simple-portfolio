import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('Building frontend...');
try {
  execSync('npm run build', { 
    stdio: 'inherit',
    cwd: __dirname 
  });
  console.log('Frontend build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}