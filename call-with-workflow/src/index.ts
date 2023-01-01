import {showHUD, LaunchProps, Detail} from "@raycast/api";
const {exec, spawn} = require('child_process');


export default async function main(props : LaunchProps < {
    arguments : Arguments

} >) {

    var {
        number
    } = props.arguments;

    number = number.replace("/-/g", "")

    exec("open tel://" + number);

    await showHUD("Calling " + number);
}
