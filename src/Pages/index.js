var corpus = [
  {string:"This room, the one in which", first:"adjective", last:"pronoun"}, 
  {string:"I spend", first:"noun", last:"sob"}, 
  {string:"my sleeping hours", first:"pronoun", last:"noun"}, 
  {string:"is not the", first:"sob", last:"article"},
  {string:"safe place", first:"adjective", last:"noun"}, 
  {string:"for thought", first:"preposition", last:"noun"},
  {string: "and calm", first:"conjunction", last:"adjective"}, 
  {string:"that I once thought", first:"pronoun", last:"noun"}, 
  {string:"it was", first:"pronoun", last:"sob"},
  {string:"unfortunately, it seems", first:"adverb", last:"sob"}, 
  /*
  {string:"now that I have", first:"", last:""},
  {string:"been sharing my", first:"", last:""}, 
  {string:"quiet space", first:"", last:""}, 
  {string:"with something else", first:"", last:""}, 
  {string:"- and for quite a while", first:"", last:""}, 
  {string:"something that", first:"", last:""}, 
  {string:"something that", first:"", last:""}, 
  {string:"moves along", first:"", last:""}, 
  {string:"the ground", first:"", last:""}, 
  {string:"that waits for", first:"", last:""}, 
  {string:"the perfect moment", first:"", last:""}, 
  {string:"to lie", first:"", last:""}, 
  {string:"to me.", first:"", last:""}, 
  {string:"I don't see it,", first:"", last:""}, 
  {string:"not with my eyes,",first:"", last:""}, 
  {string:"but with something else.", first:"", last:""}, 
  {string:"I know", first:"", last:""}, 
  {string:"I’m sure", first:"", last:""}, 
  {string:"that I know,", first:"", last:""}, 
  {string:"what I don’t know",first:"", last:""}, 
  {string:"now", first:"", last:""}, 
  {string:"but it is", first:"", last:""}, 
  {string:"too late for that", first:"", last:""}, 
  {string:"for I can never",first:"", last:""}, 
  {string:"understand that what I", first:"", last:""}, 
  {string:"thought was true is false.", first:"", last:""}, 
  {string:"I could go down", first:"", last:""}, 
  {string:"the path of", first:"", last:""}, 
  {string:"attempting to understand", first:"", last:""}, 
  {string:"what is true and", first:"", last:""}, 
  {string:"what is not",first:"", last:""}, 
  {string:"but it told me not to", first:"", last:""}, 
  {string:"It threatened", first:"", last:""}, 
  {string:"to reveal", first:"", last:""}, 
  {string:"itself to me", first:"", last:""}, 
  {string:"and that is something that I fear", first:"", last:""}, 
  {string:"for while it does now",first:"", last:""}, 
  {string:"speak to me both when",first:"", last:""}, 
  {string:"I am asleep and awake,",first:"", last:""}, 
  {string:"and I am used to",first:"", last:""}, 
  {string:"its personal truths", first:"", last:""}, 
  {string:"that is something that",first:"", last:""}, 
  {string:"I have no control over",first:"", last:""}, 
  {string:"that is something that it started", first:"", last:""}, 
  {string:"doing on its own", first:"", last:""}, 
  {string:"accord",first:"", last:""}, 
  {string:"never would I", first:"", last:""}, 
  {string:"bring that upon", first:"", last:""}, 
  {string:"myself, let alone", first:"", last:""}, 
  {string:"a whole new layer", first:"", last:""}, 
  {string:"of this hell", first:"", last:""}, 
  {string:"that layer being", first:"", last:""}, 
  {string:"what the serpent", first:"", last:""}, 
  {string:"appears as in", first:"", last:""}, 
  {string:"this mortal world.",first:"", last:""}, 
  {string:"Its scales, they", first:"", last:""}, 
  {string:"shimmer, they", first:"", last:""}, 
  {string:"gleam, they", first:"", last:""}, 
  {string:"swim, just like", first:"", last:""}, 
  {string:"the green", first:"", last:""}, 
  {string:"fluorescent lights", first:"", last:""}, 
  {string:"staring back at", first:"", last:""}, 
  {string:"me in the", first:"", last:""}, 
  {string:"hospital that", first:"", last:""}, 
  {string:"I have woken up in", first:"", last:""}, 
  {string:"I have never seen", first:"", last:""}, 
  {string:"it, but", first:"", last:""}, 
  {string:"it has", first:"", last:""}, 
  {string:"told me", first:"", last:""}, 
  {string:"what it looks", first:"", last:""}, 
  {string:"like.", first:"", last:""}, 
  {string:"even here, in", first:"", last:""}, 
  {string:"the stunning brightness of", first:"", last:""}, 
  {string:"healthcare at night,", first:"", last:""}, 
  {string:"it slithers,", first:"", last:""}, 
  {string:"waiting, forever",first:"", last:""}, 
  "waiting for", "the next display of", "helplessness.",
  "I", "wish I didn’t", "know, that I am", "a shell of", "who I was,", "that to this hour I am", "shedding another", "layer of my", "soul, the", 
  "snakeskin coming off to", "reveal a whole new,", "more dangerous layer of", "who I am.", "other people,", "they think that", "the new layer was", 
  "always there, always", "hidden, but it wasn't", "it created", "it while I was", "younger, when I was", "happy, when all it did was let", "random pieces of", 
  "knowledge slip off its", "tongue. that was when",
  "it was creating", "the new me, that was", "fine, but now", "it isn’t,", "for now it is", "showing the world its", "latest creation. Or,", 
  "rather, deconstruction. For", "that is the sad truth of", "the process,", "it has made even me think that", "‘new and improved’ was", "always there, waiting to", 
  "happen, but", "it wasn't", "It is not", "my fault, not", "my fault that I have", "now taken a", "life. My", "own",
  //
  "what have", "we left? What have", "we left?", "‘Twas the", "thoughts known by", "us still above the", "depths. Not many of", "us to be found by", "those", 
  "crawling to", "the lake.", "Us, who", "cling onto", "the abstract. They", "would not", "care. No, would not", "care, they", "would give us half a", "moment and", "half a", "thought, and", "crawl on by.", "They go on down," // as I write this. I sit here, in the shallows on the lake, and they submit to what must be cold, but also true.  No enlightenment lies down there.  Yet; what feel they? Nice, I imagine.  The water me, me the water, my being supported by what is now part of my existence.  I can taste the freeness, free of air. I need not understand, only know. I can see it, the water my new medium for movement.  I can feel the others sinking alongside me, going down faster, for I imagine they don’t even think about the fall. I can even hear the experience, the flow, the bubbles. Sound moves faster underwater, k’now. Can I smell anything? That would be something I would be able to sacrifice.  But I’m not, not able. I continue being true, to myself, those souls that sunk and continue to live, and most of all, I am true to the truth. For the truth? It has some variations you should meet."
*/];


var wordcount = 3;
function generateWords(){ 
  var lastindex = null;
  var correctLanguage = "";
  var join = " ";
  for (i = 0; i < wordcount; i++) {
    index = Math.floor(Math.random() * corpus.length);
    if(lastindex != null){
      if(corpus[lastindex].last == "conjunction"){
        while(corpus[index].first != "conjunction"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "noun"){
        while(corpus[index].first == "adjective" || corpus[index].first == "verb" || corpus[index].first == "conjunction" && corpus[index].first != "pronoun"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "pronoun"){
        while(corpus[index].first != "noun"  || corpus[index].first == "adjective" || corpus[index].first == "verb"  && corpus[index].first != "conjunction"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "article"){
        while(corpus[index].first == "noun" || corpus[index].first == "pronoun"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      if(corpus[lastindex].last == "sob"){
        while(corpus[index].first == "noun" || corpus[index].first == "adjective" || corpus[index].first == "conjunction"){
          index = Math.floor(Math.random() * corpus.length);
        }
      }
      //adverb,preposition,adjective

      if(i == wordcount && corpus[index].last == "conjunction" || corpus[index].last == "article"){
        i--;
      }

      if(index == lastindex){
        join = ", ";
      }
    } 

    correctLanguage = correctLanguage + join + corpus[index].string;
    lastindex = index;
    join = " ";
  }
  document.getElementById('PoemDisplay').textContent = correctLanguage;
}
