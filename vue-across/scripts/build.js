import { executeWithSync, updateCapacitorConfig } from './scriptUtils.js';

export const buildCommand = 'npx vue-tsc --noEmit && npx vite build';

// Build commands
/**
 * It runs the vue-tsc compiler with the --noEmit flag, which means it will only type-check the code,
 * and then it runs the vite build command.
 *
 * Use sync execution here so Docker/npm does not finish before the build process exits.
 */
export const build = () => executeWithSync(buildCommand);

/**
 * It builds the app, then copies the iOS platform files to the `ios` directory.
 */
export const buildIos = () => {
	updateCapacitorConfig();
	return executeWithSync(`${buildCommand} && npx cap sync ios`);
};

/**
 * `buildAndroid` builds the app, then copies the Android platform to the `android` directory.
 */
export const buildAndroid = () => {
	updateCapacitorConfig();
	return executeWithSync(`${buildCommand} && npx cap sync android`);
};

export const buildTauri = () => executeWithSync('npx tauri build');
