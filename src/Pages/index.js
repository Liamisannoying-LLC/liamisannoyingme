var corpus = [
  "This room, the one in which", "I spend", "my sleeping hours", "is not the", "safe place", "for thought", "and calm", "that I once thought", "it was",
  "unfortunately, it seems", "now that I have", "been sharing my", "quiet space", "with something else", "- and for quite a while", "something that", 
  "something that", "moves along", "the ground", "that waits for", "the perfect moment", "to lie", "to me.", "I don't see it,", "not with my eyes,",
  "but with something else.", "I know", "I’m sure", "that I know,", "what I don’t know", "now", "but it is", "too late for that", "for I can never",
  "understand that what I", "thought was true is false.", "I could go down", "the path of", "attempting to understand", "what is true and", "what is not",
  "but it told me not to", "It threatened", "to reveal", "itself to me", "and that is something that I fear", "for while it does now",
  "speak to me both when", "I am asleep and awake,", "and I am used to", "its personal truths", 
  "that is something that", "I have no control over", "that is something that it started", "doing on its own", "accord",
  "never would I", "bring that upon", "myself, let alone", "a whole new layer", "of this hell", 
  "that layer being", "what the serpent", "appears as in", "this mortal world.",
  "Its scales, they", "shimmer, they", "gleam, they", "swim, just like", "the green", "fluorescent lights", "staring back at", 
  "me in the", "hospital that", "I have woken up in", "I have never seen", "it, but", "it has", "told me", 
  "what it looks", "like.", "even here, in", "the stunning brightness of", "healthcare at night,", "it slithers,", 
  "waiting, forever", "waiting for", "the next display of", "helplessness.",
  "I", "wish I didn’t", "know, that I am", "a shell of", "who I was,", "that to this hour I am", "shedding another", "layer of my", "soul, the", 
  "snakeskin coming off to", "reveal a whole new,", "more dangerous layer of", "who I am.", "other people,", "they think that", "the new layer was", 
  "always there, always", "hidden, but it wasn't", "it created", "it while I was", "younger, when I was", "happy, when all it did was let", "random pieces of", 
  "knowledge slip off its", "tongue. that was when",
  "it was creating", "the new me, that was", "fine, but now", "it isn’t,", "for now it is", "showing the world its", "latest creation. Or,", 
  "rather, deconstruction. For", "that is the sad truth of", "the process,", "it has made even me think that", "‘new and improved’ was", "always there, waiting to", 
  "happen, but", "it wasn't", "It is not", "my fault, not", "my fault that I have", "now taken a", "life. My", "own",
  //
  "what have", "we left? What have", "we left?", "‘Twas the", "thoughts known by", "us still above the", "depths. Not many of", "us to be found by", "those", 
  "crawling to", "the lake.", "Us, who", "cling onto", "the abstract. They", "would not", "care. No, would not", "care, they", "would give us half a", "moment and", "half a", "thought, and", "crawl on by.", "They go on down,", as I write this. I sit here, in the shallows on the lake, and they submit to what must be cold, but also true.  No enlightenment lies down there.  Yet; what feel they? Nice, I imagine.  The water me, me the water, my being supported by what is now part of my existence.  I can taste the freeness, free of air. I need not understand, only know. I can see it, the water my new medium for movement.  I can feel the others sinking alongside me, going down faster, for I imagine they don’t even think about the fall. I can even hear the experience, the flow, the bubbles. Sound moves faster underwater, k’now. Can I smell anything? That would be something I would be able to sacrifice.  But I’m not, not able. I continue being true, to myself, those souls that sunk and continue to live, and most of all, I am true to the truth. For the truth? It has some variations you should meet."
];

function generateWords(){ 
  var correctLanguage = "";
  for (i = 0; i < 32; i++) {
    index = Math.floor(Math.random() * corpus.length);
    correctLanguage = correctLanguage + " " + corpus[index];}
  document.getElementById('PoemDisplay').textContent = correctLanguage;}