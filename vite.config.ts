import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin';
import path from 'path';

export default defineConfig(({ mode }) => {
  // Загружаем `.env.{mode}` файл
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          exportType: 'default',
          ref: true,
          svgo: false,
          titleProp: true,
          svgProps: { role: 'img' },
        },
        include: '**/icons/**/*.svg',
      }),
      viteImagemin({
        mozjpeg: { quality: 80 },
        optipng: { optimizationLevel: 7 },
        pngquant: { quality: [0.65, 0.8] },
        svgo: {
          plugins: [{ name: 'removeViewBox' }, { name: 'removeEmptyAttrs', active: true }],
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets/'),
        '@entities': path.resolve(__dirname, 'src/entities'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@shared': path.resolve(__dirname, 'src/shared/'),
        '@widgets': path.resolve(__dirname, 'src/widgets/'),
        '@store': path.resolve(__dirname, 'src/app/store/'),
        '@colors': path.resolve(__dirname, 'src/shared/constants/colors/'),
        '@navigation': path.resolve(__dirname, 'src/shared/constants/navigation/'),
        '@api': path.resolve(__dirname, 'src/shared/api/'),
      },
    },
    define: {
      'process.env': env,
    },
  };
});
