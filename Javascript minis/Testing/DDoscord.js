"use strict";

doFetch();

async function doFetch() {
    return await fetch("https://support.discord.com/hc/en-us/requests/new");
}