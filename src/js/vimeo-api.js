import axios from "axios";

export default class NewApiService {
  constructor() {
    this.BASE_URL = "https://api.vimeo.com/videos/";
    this.videoId = "824804225";
    this.headers = {
      Authorization: "Bearer 14773007b0f5c2819432235c1794612b",
    };
  }
  async getVideo() {
    try {
      const response = await axios.get(`${this.BASE_URL}${this.videoId}`, {
        headers: this.headers,
      });
      const video = response.data;
      return video;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
