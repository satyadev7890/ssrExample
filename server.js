import 'babel-polyfill';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build'));

app.get('*', (req, res) => {
    const content = ReactDOMServer.renderToString(
        <App />
    )
    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">
                    ${content}
                </div>
            </body>
        </html>
    `;
    res.send(html);
})

app.listen(PORT, () => {
    console.log(`App is running ${PORT}`);
})