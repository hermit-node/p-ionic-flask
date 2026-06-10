import { executeWithSync, updateCapacitorConfig } from './scriptUtils.js';

export const buildCommand = 'npx vue-tsc --noEmit && npx vite build';

// Build commands
/**
 * Type-checks the Vue app and builds it with Vite.
 */
export const build = () => {
	executeWithSync(buildCommand);
};

/**
 * Builds the app, then syncs the iOS Capacitor platform.
 */
export const buildIos = () => {
	updateCapacitorConfig();
	executeWithSync(`${buildCommand} && npx cap sync ios`);
};

/**
 * Builds the app, then syncs the Android Capacitor platform.
 */
export const buildAndroid = () => {
	updateCapacitorConfig();
	executeWithSync(`${buildCommand} && npx cap sync android`);
};

export const buildTauri = () => {
	executeWithSync('npx tauri build');
};
