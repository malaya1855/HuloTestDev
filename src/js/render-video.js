import { slideVideo } from "./index";

export default function renderVideo(videoData) {
  const videoLink = videoData.player_embed_url;
  const videoCover = videoData.pictures.base_link;
  const videoCard = `
  <a href=${videoLink} data-fancybox="video-gallery" data-type="iframe" style="display: block; height: 100%" data-format="video">
  <img alt="" width="250" src=${videoCover}>
  </a>`;

  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  data.map(() => {
    const li = document.createElement("li");
    li.classList.add("splide__slide");
    li.innerHTML = videoCard;
    slideVideo.appendChild(li);
  });
}
