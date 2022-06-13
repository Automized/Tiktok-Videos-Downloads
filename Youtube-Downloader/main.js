const { question } = require('readline-sync');
const ytdl = require('ytdl-core');
const fs = require('fs');

const url = question('Youtube Video Url: ');

Download_Video(url)

async function Download_Video(source) {
    const videoInfo = await ytdl.getInfo(source)
    const title = videoInfo.videoDetails.title

    console.log('Downloading ' + title + '...')

    const filename = title.replace(/[\/\\\:\*\?\\<\>\|]+/g, ''); //removes blacklisted windows files characters

    ytdl(source).pipe(fs.createWriteStream(filename + '.webm'))
    .on('finish', () => {
        console.log('Download is complete.')
    })
}
