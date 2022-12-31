const express = require('express');
const app = express();
const port = 3000;


// file static
app.use(express.static('public'));

// datas
const bundleMateri = require('./utils/db');

// local modul function
const folderDatas = require('./utils/folder-create');
(async function () {
    const { datas } = await bundleMateri;
    folderDatas(datas);
})()
const { render } = require('./utils/render')

// setup templating engine
const expressLayout = require('express-ejs-layouts')
app.set('view engine', 'ejs');
app.use(expressLayout);

// home
app.get('/home', (req, res) => {
    render(res, 'main-pages/home', 'home', 'main-ejs/layout')
})

// about
app.get('/about', (req, res) => {
    render(res, 'main-pages/about', 'about', 'main-ejs/layout')
})

// services
app.get('/services', (req, res) => {
    render(res, 'main-pages/services', 'services', 'main-ejs/layout');
    // folderDatas(datas)
})

// services pages
app.get('/services/bahasa-arab', async (req, res) => {
    render(res, 'moduls-pages/materi-pages/subjects', 'bahasa arab', 'moduls-pages/layout');
})

// links materi
app.get('/services/bahasa-arab/:url', (req, res) => {
    render(res, `moduls-pages/materi-pages/bahasa-arab/content-materi`, 'bahasa arab', 'moduls-pages/layout', req.params.url)
});

app.use('/', (req, res) => {
    render(res, 'main-pages/home', 'home', 'main-ejs/layout');
});

app.listen(port, () => {
    console.log(`app is already running on port ${port}`)
});