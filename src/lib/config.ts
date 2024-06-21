export const pretender = true;

/**
 * The configuration inteface for the site
 */
export interface SiteConfig {
  color_mode: "light" | "dark";
}

/// The site configuration
export let site_config: SiteConfig;

/**
 * Initialize the site configurationS
 */
export function initConfig() {
  site_config = loadSiteConfig();

  window.addEventListener("beforeunload", () => {
    saveSiteConfig(site_config);
  });
}

/**
 * Get the current site configuration when there is no configuration in the local storage
 * @returns The initial site configuration
 */
export function initialSiteConfig(): SiteConfig {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    color_mode: prefersDark ? "dark" : "light",
  };
}

/**
 * Load the site configuration from the local storage
 * @returns The site configuration
 * @throws If the configuration is invalid
 */
export function loadSiteConfig(): SiteConfig {
  const config = localStorage.getItem("site_config");
  console.log(config);
  if (!config) {
    return initialSiteConfig();
  }
  try {
    return JSON.parse(config);
  } catch (e) {
    throw new Error("Invalid site configuration");
  }
}

/**
 * Save the site configuration to the local storage
 * @param config The site configuration
 */
export function saveSiteConfig(config: SiteConfig): void {
  localStorage.setItem("site_config", JSON.stringify(config));
}
