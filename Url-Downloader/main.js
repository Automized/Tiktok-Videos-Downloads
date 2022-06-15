const axios = require('axios');
const fs = require('fs');
const { question } = require('readline-sync');

const source = question('Source Url: ')

Download(source)

async function Download(source) {
    const filename = source.split('/')[source.split(new RegExp('/', 'g')).length - 1]

    console.log(`Downloading ${filename}`)

    const req = await axios({ method: 'GET', url: source, responseType: 'stream' })

    if(req && req.data) {
        const writer = fs.createWriteStream(filename)
        req.data.pipe(writer)

        writer.on('close', () => {
            console.log('Successfully downloaded file')
        })
    }
}
