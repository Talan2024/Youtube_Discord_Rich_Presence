
const socket = new WebSocket("ws://localhost:8080");




let lastSentDuration = "";

setInterval(() => {
    const durationEl = document.querySelector(".ytp-time-duration");
    if (!durationEl) return;

    const duration = durationEl.textContent.trim();
    if (duration !== lastSentDuration) {
        console.log("Sent duration:", duration);
        lastSentDuration = duration;

        socket.send(JSON.stringify({
            type: "total_time",
            value: duration
        }));
    }
}, 1000);


let lastThumb = "";

setInterval(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get("v");

    if (!videoId) return;

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    if (thumbnailUrl !== lastThumb) {
        lastThumb = thumbnailUrl;
        console.log("Thumbnail URL:", thumbnailUrl);

        socket.send(JSON.stringify({
            type: "thumb",
            value: thumbnailUrl
        }));
    }
}, 1000);


let lastSentTitle = "";

setInterval(() => {
    let el = document.querySelector('h1.ytd-watch-metadata yt-formatted-string');
    if (!el) return;

    let title = el.getAttribute("title") || el.textContent.trim();
    if (title && title !== lastSentTitle) {
        
        lastSentTitle = title;

        socket.send(JSON.stringify({
            type: "name_video",
            value: title
        }));
    }
}, 1000);

let lastLoggedTime = "";

setInterval(() => {
    const video = document.querySelector("video");
    if (!video) return;

    const totalSeconds = Math.floor(video.currentTime);
    if (totalSeconds !== lastLoggedTime) {
        lastLoggedTime = totalSeconds;

        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        const formattedTime =
            `${hrs.toString().padStart(2, '0')}:` +
            `${mins.toString().padStart(2, '0')}:` +
            `${secs.toString().padStart(2, '0')}`;

        console.log(formattedTime);

        socket.send(JSON.stringify({
            type: "current_time",
            value: formattedTime
        }));
    }
}, 1000);



