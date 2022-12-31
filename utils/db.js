const fs = require('fs');
const { resolve } = require('path');

async function readFile(path) {
    try {
        const data = await fs.promises.readFile(path);
        const datas = await JSON.parse(data);
        const komponen = datas.komponen;
        const fileName = mapping(komponen, 'judul-file');
        const linkMateri = mapping(komponen, 'judul-materi');
        return {
            datas,
            komponen,
            fileName,
            linkMateri,
        }
    } catch (err) {
        console.error(err);
    }
};

// ekstrak data
function mapping(datas, data) {
    if (data === 'judul-materi') {
        return datas.map(item => {
            return [
                item['judul-materi'],
                `/services/bahasa-arab/${item['judul-file']}`,
            ]
        })
    }
    return datas.map(item => item[data]);
};

const bundleMateri = readFile('data/bahasa-arab.json');

module.exports = bundleMateri;