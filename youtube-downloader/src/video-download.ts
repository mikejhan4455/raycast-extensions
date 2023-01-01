import {showHUD, LaunchProps, Detail} from "@raycast/api";

const {exec, spawn} = require('child_process');


// Create a format function for string
interface String {
    format(...replacements : string[]): string;
}

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

// parameters
interface Arguments {
    url: string;
}

export default async function main(props : LaunchProps < {
    arguments : Arguments

} >) {

    var {
        url
    } = props.arguments;

    const shellScriptPath = '/Users/chris/Desktop/04-Develop/raycasst-extensions/youtube-downloader/src/download.sh';

    spawn(shellScriptPath, [
        "video", url
    ], {
        stdio: 'ignore', // piping all stdio to /dev/null
        detached: true
    }).unref();

    await showHUD("Downloading video...");
}
