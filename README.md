# Timer Card

[![GH-release](https://img.shields.io/github/v/release/wwwescape/timer-card.svg?style=flat-square)](https://github.com/wwwescape/timer-card/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/wwwescape/timer-card.svg?style=flat-square)](https://github.com/wwwescape/timer-card/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/wwwescape/timer-card.svg?color=red&style=flat-square)](https://github.com/wwwescape/timer-card)
[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=flat-square)](https://github.com/hacs/default)


Display a simple timer.

Based on the [Countdown card type](https://github.com/marcokreeft87/formulaone-card#countdown) from [marcokreeft87](https://github.com/marcokreeft87)'s fantastic [FormulaOne Card](https://github.com/marcokreeft87/formulaone-card).

![Example](example.png)

## Installation

> **Note for existing manual-install users:** as of v1.1.0 this card is built and released differently (see [CHANGELOG](#changelog) below). Your currently-installed copy keeps working as-is — nothing on your Home Assistant instance changes on its own. But the old direct-download link (`raw.githubusercontent.com/.../main/timer-card.js`) no longer points to a built file, so **the next time you want to update, use the new download link below** instead of re-fetching from that old URL.

### HACS install
1. Open HACS.
2. Search for 'Timer Card' and click the three dot menu besides it.
3. Click Download.
4. Finally, refresh your browser window.

### Manual install
1. Navigate to your `<config>/www/` folder inside your Home Assistant installation and create a new folder named `timer-card`.
2. Manually download [timer-card.js](https://github.com/wwwescape/timer-card/releases/latest/download/timer-card.js).
3. Place the file inside the `timer-card` folder you created in step 1.
4. Add the following to your `configuration.yaml` file:
  ```yaml
  lovelace:
    resources:
      - url: /local/timer-card/timer-card.js
        type: module
  ```
5. Alternately, go to `Settings` -> `Dashboards`. Then in the top right corner, click the 3 dots icon and click `Resources`. Click the `+ Add Resource` button in the bottom right corner. Add `/local/timer-card/timer-card.js` as the `URL` and choose `JavaScript Module` as the `Resource Type`. Click `Create`.
6. Finally, refresh your browser window.


## Configuration

| Name              | Type          | Default                               | Description                                                                                                                     |
| ----------------- | ------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| type              | string        | **Required**                          | `custom:timer-card`                                                                                                             |
| title             | string        |                                       | The header of the card (hidden when null or empty)                                                                              |
| date              | string        | **Required (if entity) not defined**  | The date to use for the timer (should be a valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date string)                |
| entity            | string        | **Required (if date) not defined**    | The entity to use for the timer (entity state should be a valid date)                                                           |
| reverse           | boolean       | `false`                               | Set to `true` to show elapsed time                                                                                              |
| translations      | dictionary    |  _[translations](#Translations)_      | Dictionary to override the default translation                                                                                  |

**Note:** If both `date` and `entity` are defined, `date` will be used.

## Example configurations

### Countdown

```yaml
type: custom:timer-card
title: Countdown
date: 2024-01-01T00:00:00Z
```

### Time elapsed

```yaml
type: custom:timer-card
title: Time Elapsed
entity: input_datetime.my_datetime
reverse: true
```

## Translations

The following texts can be translated or altered.

| Key                 | Default value         |
| ------------------- | --------------------- |
| days                | d                     |
| hours               | h                     |
| minutes             | m                     |
| seconds             | s                     |
| timer_complete      | 'Timer Completed'     |
| timer_not_started   | 'Timer Not Started'   |

Example:

```yaml
type: custom:timer-card
title: Countdown
date: 2023-01-01T00:00:00Z
translations: 
  'timer_complete' : 'Countdown Done'  
```


## Changelog

### v1.1.0
- **Build/release tooling migration** (no card behavior change): switched from webpack to Rollup, build output now lives in `dist/` instead of the repo root, and releases are now published from tagged GitHub Releases instead of on every push to `main`.
- **If you manually installed via the old raw-file link** (`raw.githubusercontent.com/.../main/timer-card.js`), that link no longer serves a built file. Your existing installation is unaffected, but grab future updates from the [latest release](https://github.com/wwwescape/timer-card/releases/latest/download/timer-card.js) instead.
- HACS-installed users are unaffected; the next update will resolve automatically through the new release process.

## TODO
- [ ] Clean up code