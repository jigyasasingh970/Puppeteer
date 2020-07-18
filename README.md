# Puppeteer
Puppeteer is a Node library which provides us with a high level API to run Chrome in a headless mode over DevTools protocol, meaning running Chrome without Chrome. Puppeteer is an open source libary developed by google that was built in purpose of automating and simplifying frontend tests and development. It is based on Chromium, and can be 100% remotely controlled, allowing web developers to write and maintain fully automated tests.

Browsing in headless mode is the way machines use the internet. It is operating a full browser but rendering and displaying none of the data.

A headless browser is a great tool for automated testing and server environmemts where we don't need a visible UI shell.
For more information, visit https://github.com/puppeteer/puppeteer
# Puppeteer Cluster

Puppeteer Cluster is another high level API which provides us with concurrency models so that we have multiple codes running simultaneously in multiple pages.
For more information, visit https://github.com/thomasdondorf/puppeteer-cluster

## puppeteerCluster.js
Here, I have used puppeteer-cluster to execute my scripts in four pages simultaneously in a particular browsing session. In this manner, a developer can choose to perform multiple tests in parallel assing different scripts to different pages.
Here, I have attached a sample script. Four other scripts containing different tasks can be created and must be specified in the 'path' for a particular page to use.
Also, more pages can be added.
```bash
$ node puppeteerCluster.js

```
## puppeteerUserInput.js

Implementation of an express server which allows user to store their code in MySQL database and further execute it in a puppeteer instance.

# Use Cases of Puppeteer

Pupeteer is mainly used for the following:
1. Web scraping
2. Automating tasks on web pages
3. Automated web testing
4. Taking screenshots, creating PDFs of web pages 


