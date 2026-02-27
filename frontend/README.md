# LearnHub Frontend (Web + Android)

This app is configured with Capacitor for Android.

## Prerequisites

- Node.js + npm
- Java 17 (installed)
- Android SDK command-line tools (no Android Studio required)
  - Set `ANDROID_SDK_ROOT` (or `ANDROID_HOME`)
  - Install at least: `platform-tools`, `platforms;android-35`, `build-tools;35.0.0`

## Commands

- Web dev: `npm run dev`
- Build web: `npm run build`
- Sync web -> Android: `npm run build:android`
- Build debug APK: `npm run apk:debug`
- Build release APK: `npm run apk:release`
- Open native project in Android Studio (optional): `npm run cap:open`

## APK Output

- Debug APK path:
  `android/app/build/outputs/apk/debug/app-debug.apk`

## Backend URL for Android

Set `VITE_BACKEND_URL` in `env.production` (or your active env) to a reachable URL.

- Android emulator to local backend: `http://10.0.2.2:5000`
- Real device to local backend: `http://<your-computer-lan-ip>:5000`
