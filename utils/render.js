const bundleMateri = require('./db');

// function to get data for materi pages
const dataMateriPages = async (url) => {
    const { komponen } = await bundleMateri;
    const materials = komponen.filter((item) => item['judul-file'] === url)[0];
    const judul = materials['judul-materi'];
    const linkVidio = materials['link-vidio'];
    const isi = materials.isi;
    return {
        materials,
        judul,
        linkVidio,
        isi,
    };
};

// render function
const render = async (res, path, title, layout, url) => {
    const { komponen, linkMateri, fileName } = await bundleMateri;
    if (!url) {
        res.render(path, {
            title,
            layout,
            komponen,
            linkMateri,
            fileName,
        });
    } else {
        const { materials, judul, isi, linkVidio } = await dataMateriPages(url);
        res.render(path, {
            title,
            layout,
            komponen,
            linkMateri,
            fileName,
            materials,
            linkVidio,
            judul,
            isi,
        });
    };
};

module.exports = { render };