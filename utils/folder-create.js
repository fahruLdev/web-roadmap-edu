const fs = require('fs');
// folder datas
const folderDatas = (datas) => {
    const dirDatas = `./views/moduls-pages/materi-pages/${datas['judul-folder']}`;
    if (!fs.existsSync(dirDatas)) {
        fs.mkdirSync(dirDatas);
    }
};

module.exports = folderDatas;