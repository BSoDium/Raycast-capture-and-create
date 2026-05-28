/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Anthropic API Key - Your Anthropic API key — stored securely in Keychain */
  "anthropicApiKey": string,
  /** Default Calendar - Name of the macOS Calendar to add events to by default (must match exactly) */
  "calendarName": string,
  /** Google OAuth Client ID - OAuth 2.0 Client ID from Google Cloud Console (Web application type). Authorized redirect URI must be: https://raycast.com/redirect?packageName=Extension */
  "gcpClientId": string,
  /** Google OAuth Client Secret - OAuth 2.0 Client Secret shown on the same GCP credentials page as the Client ID */
  "gcpClientSecret": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `capture-to-task` command */
  export type CaptureToTask = ExtensionPreferences & {}
  /** Preferences accessible in the `capture-to-calendar` command */
  export type CaptureToCalendar = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `capture-to-task` command */
  export type CaptureToTask = {}
  /** Arguments passed to the `capture-to-calendar` command */
  export type CaptureToCalendar = {
  /** Calendar */
  "calendarName": string
}
}

