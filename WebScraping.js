// Downloads all the crawlable files of example.com.
// The files are saved in the same structure as the structure of the website, by using the `bySiteStructure` filenameGenerator.
// Links to other websites are filtered out by the urlFilter
const scrape = require('website-scraper');
const websiteUrl = "https://nodeschool.io/tabasco/";

scrape({
    urls: [websiteUrl],
    urlFilter: function (url) {
        return url.indexOf(websiteUrl) === 0;
    },
    recursive: true,
    maxDepth: 50,
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    directory: './NodeSchoolTabasco'
}).then((data) => {
    console.log("El Sitio Web ha sido descargado exitosamente");
}).catch((err) => {
    console.log("Ah ocurrido un error", err);
});