import {
  DEFAULT_DAILY_NOTE_FORMAT,
  // DEFAULT_MONTHLY_NOTE_FORMAT,
  DEFAULT_WEEKLY_NOTE_FORMAT,
  // DEFAULT_QUARTERLY_NOTE_FORMAT,
  // DEFAULT_YEARLY_NOTE_FORMAT,
} from "./constants";
import { IPeriodicNoteSettings } from "./types";

export function shouldUsePeriodicNotesSettings(
  periodicity: "day" | "week" | "month" | "quarter" | "year"
): boolean {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const periodicNotes = (<any>window.app).plugins.getPlugin("periodic-notes");
  return periodicNotes && periodicNotes.options?.calendarSets[0]?.[periodicity]?.enabled;
}

/**
 * Read the user settings for the `daily-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
export function getDailyNoteSettings(): IPeriodicNoteSettings {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { internalPlugins, plugins } = <any>window.app;

    if (shouldUsePeriodicNotesSettings("day")) {
      const { format, folder, template } =
        plugins.getPlugin("periodic-notes")?.options?.calendarSets[0]?.day || {};
        console.info(plugins.getPlugin("periodic-notes"))
        console.info(plugins.getPlugin("periodic-notes")?.options)
      return {
        format: format || DEFAULT_DAILY_NOTE_FORMAT,
        folder: folder?.trim() || "",
        template: template?.trim() || "",
      };
    }

    const { folder, format, template } =
      internalPlugins.getPluginById("daily-notes")?.instance?.options || {};
    return {
      format: format || DEFAULT_DAILY_NOTE_FORMAT,
      folder: folder?.trim() || "",
      template: template?.trim() || "",
    };
  } catch (err) {
    console.info("No custom daily note settings found!", err);
  }
}

/**
 * Read the user settings for the `weekly-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
export function getWeeklyNoteSettings(): IPeriodicNoteSettings {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { internalPlugins, plugins } = <any>window.app;

    if (shouldUsePeriodicNotesSettings("week")) {
      const { format, folder, template } =
        plugins.getPlugin("periodic-notes")?.options?.calendarSets[0]?.week || {};
        console.info(plugins.getPlugin("periodic-notes"));
        console.info(plugins.getPlugin("periodic-notes")?.options);
      return {
        format: format || DEFAULT_WEEKLY_NOTE_FORMAT,
        folder: folder?.trim() || "",
        template: template?.trim() || "",
      };
    }

    const { folder, format, template } =
      internalPlugins.getPluginById("weekly-notes")?.instance?.options || {};
    return {
      format: format || DEFAULT_WEEKLY_NOTE_FORMAT,
      folder: folder?.trim() || "",
      template: template?.trim() || "",
    };
  } catch (err) {
    console.info("No custom weekly note settings found!", err);
  }
}

/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
export function getMonthlyNoteSettings(): IPeriodicNoteSettings {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pluginManager = (<any>window.app).plugins;

  try {
    const settings =
      (shouldUsePeriodicNotesSettings("month") &&
        pluginManager.getPlugin("periodic-notes")?.options?.calendarSets[0]?.month) ||
      {};

    return {
      // format: settings.format || DEFAULT_MONTHLY_NOTE_FORMAT,
      folder: settings.folder?.trim() || "",
      template: settings.template?.trim() || "",
    };
  } catch (err) {
    console.info("No custom monthly note settings found!", err);
  }
}

/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
export function getQuarterlyNoteSettings(): IPeriodicNoteSettings {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pluginManager = (<any>window.app).plugins;

  try {
    const settings =
      (shouldUsePeriodicNotesSettings("quarter") &&
        pluginManager.getPlugin("periodic-notes")?.options?.calendarSets[0]?.quarter) ||
      {};

    return {
      // format: settings.format || DEFAULT_QUARTERLY_NOTE_FORMAT,
      folder: settings.folder?.trim() || "",
      template: settings.template?.trim() || "",
    };
  } catch (err) {
    console.info("No custom quarterly note settings found!", err);
  }
}

/**
 * Read the user settings for the `periodic-notes` plugin
 * to keep behavior of creating a new note in-sync.
 */
export function getYearlyNoteSettings(): IPeriodicNoteSettings {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pluginManager = (<any>window.app).plugins;

  try {
    const settings =
      (shouldUsePeriodicNotesSettings("year") &&
        pluginManager.getPlugin("periodic-notes")?.options?.calendarSets[0]?.year) ||
      {};

    return {
      // format: settings.format || DEFAULT_YEARLY_NOTE_FORMAT,
      folder: settings.folder?.trim() || "",
      template: settings.template?.trim() || "",
    };
  } catch (err) {
    console.info("No custom yearly note settings found!", err);
  }
}
