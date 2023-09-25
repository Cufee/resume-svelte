import puppeteer from 'puppeteer';
import express from 'express';

async function exportWebsiteAsPdf(url, outputPath) {
    // Create a browser instance
    const browser = await puppeteer.launch({
        headless: 'new'
    });
    // Create a new page
    const page = await browser.newPage();
    await page.goto(url)
    await page.waitForSelector('body');
    // To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');
    // Download the PDF
    const PDF = await page.pdf({
        scale: 0.7,
        landscape: false,
        path: outputPath,
        margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
        printBackground: true,
        format: 'A4',
    });
    // Close the browser instance
    await browser.close();
    return PDF;
}

const app = express();
app.use(express.static("build"));
const server = app.listen(0, async () => {
    const url = `http://0.0.0.0:${server.address().port}/resume.html`
    try {
        const pdf = await exportWebsiteAsPdf(url, 'static/resume.pdf')
        if (!pdf) throw new Error('PDF not generated');
        console.log('Saved PDF to static/resume.pdf');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
    process.exit(0);
});
