class Story {
  constructor(topStory) {
    this.id = topStory.id;
    this.title = topStory.title;
    this.author = topStory.by;
    this.descendants = topStory.descendants;
    this.score = topStory.score;
    this.kids = topStory.kids;
  }
}

export default Story;
