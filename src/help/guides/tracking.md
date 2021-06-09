---
title: Tracking
description: How to automatically track read chapters on supported trackers
lang: en-US
---
# Tracking

## What is tracking?

**Tracking** helps you automatically send read manga chapters to supported trackers, so you can keep track of what and when you read it online.

Tracking is currently supported on [MyAnimeList](https://myanimelist.net), [Anilist](https://anilist.co), [Kitsu](https://kitsu.io), [Shikimori](https://shikimori.one), and [Bangumi](https://bangumi.tv/)

- Tracking must be done **manually** for every manga.
- You must read the last page of a chapter to mark the chapter as read and track it.
- You can manually set the chapter by tapping on the number and then entering the number in or dragging the ticker up or down.
- After being offline, the tracker will not sync the last read chapter, even after going back online.
- Tracking is one-way. Meaning updating status in Tachiyomi will update the tracker, but updating status in the tracker will not update Tachiyomi.

## How do I login into trackers? <MaterialIcon icon="sync" />

:::: guide Guide
::: videolink
[<MaterialIcon icon="videocam"/> Click for video guide](/assets/guides_login-to-tracker.mp4)
:::

1. Go to <Navigation item="more"/> → <Navigation item="settings"/> → <Navigation item="settings_tracking"/> to Login
2. Tap the tracker you would like to login to. It will automatically open the browser and lead you through the login process.

::::
### How do I set up tracking for each manga?


:::: guide Guide
::: videolink
[<MaterialIcon icon="videocam"/> Click for video guide](/assets/guides_add-to-tracker.mp4)
:::

1. Tap the manga
2. Tap the <MaterialIcon icon="sync" />
3. Tap "Add tracking" to add the manga to the tracker
    <ul>
        <li>Optional: You can change the search query</li>
    </ul>

::::

### How do I log in with Kitsu?
To log in with Kitsu, you need to use your email address as your username.

### Why am I unable to find a manga in MAL's search results?
If you cannot find a manga by name, you can look it up on MAL and then search for it in Tachiyomi using the following format: `id:<id from manga URL>`. You can also search for a manga on your MAL profile list by searching in the following format: `my:<manga name>`. 
::: note
Related GitHub issue: [#65](https://github.com/tachiyomiorg/tachiyomi/issues/65)
:::

### How do I see which manga I have or have not tracked in my library?
Go to <Navigation item="library"/> → Tap <Navigation item="filter"/> on the top right → Go to the Filter tab and toggle Tracked. If you are logged into more than one tracker, toggle the tracker you want to include or exclude. 
