---
title: Backups
description: Backups can save you a lot of headache in case something happens to your installation or device.
lang: en-US
---

# Backups

Backups are inter-compatible between **Tachiyomi** versions, with a few exceptions listed under [forks information](#forks-information).

Backups can hold the following information:
1. **Titles**
1. **Categories**
1. **Read chapters**
1. **Tracking settings**
1. **Reading history**
1. **Manga information** such as Author, Artist, Date Added to Library, Selected Viewer, etc.

::: guide
You can do this by going to <NavigationText item="more"/> → <NavigationText item="settings_backup"/> and then selecting **Create backup** and select a location to save it.
:::

## How do I restore a backup?

Restoring is done from the <NavigationText item="settings_backup"/> settings.

To restore a backup without issues be sure to:

* Log into the <NavigationText item="settings_tracking"/> services that you previously used.

To restore a legacy backup without issues be sure to:

* Install all the <NavigationText item="tab_extensions"/> that were installed at the time of the backup.
* Log into the <NavigationText item="settings_tracking"/> services that you previously used.
* You're able to access all the sources through the **WebView**.
* Be on a consistent internet connection.

## How can I make my new install of Tachiyomi detect my old downloads?

You can transfer downloaded manga chapters from one version of **Tachiyomi** to another.

::: guide
You can do this by going to <NavigationText item="more"/> → <NavigationText item="settings"/> → <NavigationText item="settings_downloads"/> and then set the download directory to that of the download folder of your old **Tachiyomi**, then restore the backup.
:::

## How do I make Tachiyomi automatically backup?

It is highly recommended you turn on auto backups, this will ensure you can recover if need be.

::: guide
You can do this by going to <NavigationText item="more"/> → <NavigationText item="settings_backup"/> and then setting a **backup frequency**. In the case of a catastrophic failure, at least you will be able to recover.
:::

## Forks information

### <img class="forkIconBefore" src="/assets/forks_logo-neko.webp" width="24" height="24" /> [Neko](/forks/Neko)

This fork can only restore **MangaDex** entries in a backup. If there are entries from other sources that are a part of that backup then they will not transfer.

### <img class="forkIconBefore" src="/assets/forks_logo-az.webp" width="24" height="24" /> [TachiyomiAZ](/forks/TachiyomiAZ) and <img class="forkIconBefore" src="/assets/forks_logo-sy.webp" width="24" height="24" />  [TachiyomiSY](/forks/TachiyomiSY)

These forks have some built-in extensions, namely: **E-Hentai**, **Hitomi.la**, and **nHentai** for <NavigationText item="tachiyomiaz" /> while <NavigationText item="tachiyomisy" /> only has **E-Hentai**.

Titles from said extensions will not be restored when restoring a backup made by these forks to standard Tachiyomi. It is possible to restore titles to these forks, but it is not possible to back them up out of these forks.
