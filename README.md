<h1 align="center">Timer Card</h1>

<p align="center">
  A simple Home Assistant dashboard card that counts down to a date, or shows the time elapsed
  since one. Based on the <a href="https://github.com/marcokreeft87/formulaone-card#countdown">Countdown card</a>
  from <a href="https://github.com/marcokreeft87">marcokreeft87</a>'s FormulaOne Card.
</p>

<p align="center">
  <a href="https://github.com/wwwescape/timer-card/releases"><img src="https://img.shields.io/github/v/release/wwwescape/timer-card.svg?style=flat-square" alt="GitHub release" /></a>
  <a href="https://github.com/wwwescape/timer-card/commits/main"><img src="https://img.shields.io/github/last-commit/wwwescape/timer-card.svg?style=flat-square" alt="GitHub last commit" /></a>
  <a href="https://github.com/wwwescape/timer-card"><img src="https://img.shields.io/github/languages/code-size/wwwescape/timer-card.svg?color=red&style=flat-square" alt="GitHub code size" /></a>
  <a href="https://hacs.xyz/docs/faq/custom_repositories/"><img src="https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=flat-square" alt="HACS Custom" /></a>
</p>

## Screenshots

![Timer Card](example.png)

## Features

- **Countdown** — days, hours, minutes, and seconds left until a date.
- **Time elapsed** — set `reverse: true` to count up from a date instead.
- **Fixed date or entity** — use an ISO 8601 date, or any entity whose state is a date (e.g. an
  `input_datetime`).
- **Custom text** — override every label, including the "Timer Completed" and "Timer Not
  Started" messages.
- **Visual editor** — set the title, date, entity, and direction without writing YAML.

## Installation

### HACS (recommended)

1. Open HACS, click the ⋮ menu in the top right corner, and choose **Custom repositories**.
2. Paste `https://github.com/wwwescape/timer-card`, choose **Dashboard** as the type, and click
   **Add**.
3. Search for **Timer Card**, click the ⋮ menu next to it, and choose **Download**.
4. Refresh your browser.

### Manual

1. Download [timer-card.js](https://github.com/wwwescape/timer-card/releases/latest/download/timer-card.js)
   and place it in `<config>/www/timer-card/`.
2. Add it as a dashboard resource: go to **Settings → Dashboards → ⋮ → Resources → Add
   Resource**, enter `/local/timer-card/timer-card.js` as the URL, and choose **JavaScript
   Module**. Or, in YAML mode, add it to `configuration.yaml`:

   ```yaml
   lovelace:
     resources:
       - url: /local/timer-card/timer-card.js
         type: module
   ```

3. Refresh your browser.

> **Upgrading a manual install from before v1.1.0?** The old `raw.githubusercontent.com/.../main/timer-card.js`
> link no longer serves a built file. Your installed copy keeps working, but get future updates
> from the [latest release](https://github.com/wwwescape/timer-card/releases/latest/download/timer-card.js) instead.

## Configuration

| Name           | Type       | Default                   | Description                                                                                          |
| -------------- | ---------- | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`         | string     | **Required**              | `custom:timer-card`                                                                                  |
| `title`        | string     |                           | Card header (hidden when empty)                                                                      |
| `date`         | string     | **Required** if no entity | Date to count from or to, as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string           |
| `entity`       | string     | **Required** if no date   | Entity whose state is a valid date                                                                   |
| `reverse`      | boolean    | `false`                   | Show the time elapsed since the date instead of a countdown                                          |
| `translations` | dictionary |                           | Overrides for the card's text — see [Translations](#translations)                                    |

If both `date` and `entity` are set, `date` is used.

### Examples

Countdown:

```yaml
type: custom:timer-card
title: Countdown
date: 2027-01-01T00:00:00Z
```

Time elapsed:

```yaml
type: custom:timer-card
title: Time Elapsed
entity: input_datetime.my_datetime
reverse: true
```

### Translations

| Key                 | Default             |
| ------------------- | ------------------- |
| `days`              | `d`                 |
| `hours`             | `h`                 |
| `minutes`           | `m`                 |
| `seconds`           | `s`                 |
| `timer_complete`    | `Timer Completed`   |
| `timer_not_started` | `Timer Not Started` |

```yaml
type: custom:timer-card
title: Countdown
date: 2027-01-01T00:00:00Z
translations:
  timer_complete: Countdown Done
```

## Development

```bash
git clone https://github.com/wwwescape/timer-card.git
cd timer-card
npm ci
npm run build
```

The build writes `dist/timer-card.js` (`npm run watch` rebuilds on every change). Pushing a
version tag (e.g. `git tag v1.2.0 && git push origin v1.2.0`) builds the card and publishes it
to a new GitHub Release.

## License

MIT — see [LICENSE](LICENSE).

## Support

If you find Timer Card useful, consider buying me a coffee:

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="40" />](https://buymeacoffee.com/wwwescape)
