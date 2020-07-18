const { Cluster } = require('puppeteer-cluster');
//let start= new Date;

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT, // use one browser per worker
    maxConcurrency: 4, // cluster with four workers
    timeout:600000000
  });
  cluster.on('taskerror', (err, data) => {
    console.log(`Error crawling ${data}: ${err.message}`);
});

  cluster.queue(async ({ page }) => {
    //await page.goto('http://www.wikipedia.org');
   // await page.screenshot({path: 'wikipedia.png'});
 //  await page.setDefaultNavigationTimeout(60000); 
   page.on('console', msg => {
    for (let i = 0; i < msg._args.length; ++i)
    console.log(`${i}: ${msg._args[i]}`);
});
  await page.addScriptTag({
    path: './script.js' 
  }).catch(err=>console.log(err));
  });


  cluster.queue(async ({ page }) => {
   // await page.goto('https://www.google.com/');
    //const pageTitle = await page.evaluate(() => document.title);
    // ...
    //await page.setDefaultNavigationTimeout(60000); 
    page.on('console', msg => {
        for (let i = 0; i < msg._args.length; ++i)
        console.log(`${i}: ${msg._args[i]}`);
    });
      await page.addScriptTag({
        path: './script.js' 
      }).catch(err=>console.log(err));
  });


  cluster.queue(async ({ page }) => {
    // await page.goto('https://www.google.com/');
     //const pageTitle = await page.evaluate(() => document.title);
     // ...
     page.on('console', msg => {
         for (let i = 0; i < msg._args.length; ++i)
         console.log(`${i}: ${msg._args[i]}`);
     });
     //await page.setDefaultNavigationTimeout(60000); 
       await page.addScriptTag({
         path: './script.js' 
       }).catch(err=>console.log(err));
   });
   
   cluster.queue(async ({ page }) => {
    // await page.goto('https://www.google.com/');
     //const pageTitle = await page.evaluate(() => document.title);
     // ...

     
     //await page.setDefaultNavigationTimeout(60000); 
     page.on('console', msg => {
         for (let i = 0; i < msg._args.length; ++i)
         console.log(`${i}: ${msg._args[i]}`);
     });
       await page.addScriptTag({
         path: './script.js' 
       }).catch(err=>console.log(err));
   });
   //console.log("Executed in"+(Date.now()-start)+' ms');

  await cluster.idle();
  await cluster.close();
})();