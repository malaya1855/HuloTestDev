import NewApiService from "./vimeo-api";
import renderVideo from "./render-video";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const slideVideo = document.querySelector(".splide__list");

const newApiService = new NewApiService();
console.log(newApiService);
newApiService
  .getVideo()
  .then((video) => {
    renderVideo(video);

    new Splide(".splide", {
      perPage: 4,
      gap: 0,
      rewind: true,
      width: "1000px",
      pagination: false,
    }).mount();
    Fancybox.bind("[data-fancybox]", {
      infobar: true,
      compact: false,
      Thumbs: {
        type: "classic",
      },
      //   Carousel: {
      //     Dots: {
      //       autoStart: true,
      //       type: "dots",
      //     },
      //   },

      //   Toolbar: {
      //     display: {
      //       left: [],
      //       middle: ["prev", "thumbs", "next"],
      //       right: ["close"],
      //     },
      //   },

      Html: {
        vimeo: {
          controls: 0,
          rel: 0,
          fs: 0,
          autoplay: 1,
        },
      },
    });
  })
  .catch((error) => {
    console.log(error);
  });
