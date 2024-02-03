class Page404{
    head(){
        return`<head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="/css/main.css">
                    <title>Document</title>
                </head>`
    }
    header(){
        return `<header>
                    Header
                </header>`
    }
    footer(){
        return `<footer>
                    Footer
                </footer>
        `
    }

    render(){
    return `<!DOCTYPE html>
        <html lang="en">
        ${this.head()}
        <body>
            ${this.header()}
            <main>
                <h1>404</h1>
            </main>
            ${this.footer()}
            <script src="/js/main.js" type="module" defer />
        </body>
        </html>` ;
    };
};
export default Page404;