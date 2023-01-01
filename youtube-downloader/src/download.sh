#! /bin/bash

cd /Users/chris/Desktop

if [ $1 = "audio" ]; then
    /opt/homebrew/bin/yt-dlp -f 'bestaudio' --ffmpeg-location /opt/homebrew/bin/ffmpeg -x --audio-format m4a $2
elif [ $1 = "video" ]; then
    /opt/homebrew/bin/yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]' --merge-output-format mp4 --ffmpeg-location /opt/homebrew/bin/ffmpeg $2
fi
