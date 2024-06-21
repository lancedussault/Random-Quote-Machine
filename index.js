const quoteBank = [
 {
   quote: "Boy, have you lost your mind, 'cause I'll help you find it!",
   author: "Stanley Hudson"
 },
 {
   quote: "I love inside jokes. I'd love to be a part of one someday.",
   author: "Michael Scott"
 },
 {
   quote: "Identity theft is not a joke, Jim!",
   author: "Dwight Schrute"
 },
 {
   quote: "I just want to lie on the beach and eat hot dogs. That's all I've ever wanted.",
   author: "Kevin Malone"
 },
 {
   quote: "I'm not superstitious, but I am a little stitious.",
   author: "Michael Scott"
 },
  {
   quote: "I am running away from my responsibilities, and it feels good.",
   author: "Michael Scott"
 },
 {
   quote: "I have a lot of questions. Number one: How dare you?",
   author: "Kelly Kapoor"
 },
 {
   quote: "Did I Stutter?!",
   author: "Stanley Hudson"
 },
  {
   quote: "I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
   author: "Michael Scott"
 },
  {
   quote: "I talk a lot, so I've learned to just tune myself out.",
   author: "Kelly Kapoor"
 },
 {
   quote: "That's what she said.",
   author: "Michael Scott"
 }
];



const generateQuote = () => {
 let randomIndex = Math.floor(Math.random() * quoteBank.length);
 let quoteGenerated = quoteBank[randomIndex];
 let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=";
 let quoteInAPIFormat = quoteGenerated.quote.replace(/ /g, "%20");
 console.log(quoteInAPIFormat);
 twitterLink += quoteInAPIFormat;
 let authorInAPIFormat = quoteGenerated.author.replace(/ /g, "%20");
 twitterLink += authorInAPIFormat;

 document.getElementById("text").innerText = `"${quoteGenerated.quote}"`; 
 document.getElementById("author").innerText = `- ${quoteGenerated.author}`;
 document.getElementById("tweet-quote").href = twitterLink;
}

const init = () => {
 generateQuote();
};

window.onload = init;