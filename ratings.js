const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  if(typeof process.argv[2] !== 'undefined' && process.argv[2]){

    await page.goto(`https://www.codechef.com/users/${process.argv[2]}`, {waitUntil: 'domcontentloaded'});

    const CodeChefRating = await page.evaluate( () => {
      let ratingList = document.querySelectorAll(".rating-number");
      const b = [...ratingList];
      if(typeof b[0]!=='undefined' && b[0]){
        return `CodeChef Rating: ${b[0].innerText}`;
      }
      else{
        return "Sorry, Cannot Get CodeChef Rating at this moment. Please try again later!!!";
        }
    });
    console.log(CodeChefRating); 
}
else{
    console.log("Provide your CodeChef Handle!!!");
}

//   Hackerearth
if(typeof process.argv[3] !== 'undefined' && process.argv[3]){
  const page2 = await browser.newPage();
  await page2.goto(`https://www.hackerearth.com/@${process.argv[3]}`, {waitUntil: 'domcontentloaded'});
  
  const HackerearthRating = await page2.evaluate( () => {
    let ratingList = document.querySelectorAll(".large.darker.float-right.weight-600");
    const b = [...ratingList];
    if(typeof b[2]!=='undefined' && b[2]){
        return `HackerEarth Rating: ${b[2].innerText}`;
      }
      else{
        return "Sorry, Cannot Get HackerEarth Rating at this moment. Please try again later!!!";
        }
  });
  console.log(HackerearthRating);
}
else{
    console.log("Provide your HackerEarth Handle!!!");
}
//   CodeForces
if(typeof process.argv[4] !== 'undefined' && process.argv[4]){
const page3 = await browser.newPage();
await page3.goto(`https://codeforces.com/profile/${process.argv[4]}`, {waitUntil: 'domcontentloaded'});

const CodeforcesRating = await page3.evaluate( () => {
  let ratingList = document.querySelectorAll(".user-gray");
  const b = [...ratingList];
<<<<<<< HEAD
  for(var i=0;i<b.length;i++){
    var x = + b[i].textContent
    if(x){
      rating = + b[i].textContent
      break
    }
  }
  if(rating){
    return `Codeforces Rating: ${rating}`;
=======
  if(typeof b[4]!=='undefined' && b[4]){
    return `Codeforces Rating: ${b[4].innerText}`;
>>>>>>> 7c9e431d3ef4a8e0bbeac10f53fe3c5afb43db91
  }
  else{
    return "Sorry, Cannot Get Codeforces Rating at this moment. Please try again later!!!";
    }
});
console.log(CodeforcesRating);
}
else{
    console.log("Provide your Codeforces Handle!!!");
} 
  await browser.close();
})();
