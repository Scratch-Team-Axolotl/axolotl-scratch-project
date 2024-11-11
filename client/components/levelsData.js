export const levels = [
  {
    level: 1,
    images: [
      '/assets/titantic_1_ai.png',
      '/assets/titantic_2_real.png',
      // paths to the static image files here (4 images)
      // must edit server file to add assets route so we can access images
    ],
    aiIndex: 0, // 0 is just a stand-in, change to the index of the correct answer in the above images array
  },
  {
    level: 2,
    images: [
      '/assets/Geisha_real.jpg',
      '/assets/Geisha_ai_1.webp',
      // paths to the static image files
    ],
    aiIndex: 1, // change to the index of the correct answer in the images array
  },
  {
    level: 3,
    images: [
      '/assets/launch_1_real.jpg',
      '/assets/launch_2_ai.jpg',
      // paths to the static image files
    ],
    aiIndex: 1, // change to the index of the correct answer in the images array
  },
  {
    level: 4,
    images: [
      '/assets/Pangolin_1_ai.jpg',
      '/assets/Pangolin_2_real.jpg',
      // paths to the static image files
    ],
    aiIndex: 0, // change to the index of the correct answer in the images array
  },
  {
    level: 5,
    images: [
      '/assets/manai.png',
      '/assets/manreal.png',
      // paths to the static image files
    ],
    aiIndex: 0, // change to the index of the correct answer in the images array
  },
  {
    level: 6,
    images: [
      '/assets/MtFuji_2_real.png',
      '/assets/MtFuji_1_ai.png',
      // paths to the static image files
    ],
    aiIndex: 1, // change to the index of the correct answer in the images array
  },
  {
    level: 7,
    images: [
      '/assets/frog_1_ai.png',
      '/assets/frog_2_real.png',
      // paths to the static image files
    ],
    aiIndex: 0, // change to the index of the correct answer in the images array
  },
  {
    level: 8,
    images: [
      '/assets/northern_lights_2_real.png',
      '/assets/northern_lights_1_ai.png',
      // paths to the static image files
    ],
    aiIndex: 1, // change to the index of the correct answer in the images array
  },
  {
    level: 9,
    type: 'video',
    sources: [
      'https://videos.pexels.com/video-files/8784040/8784040-hd_1080_1920_24fps.mp4',
      'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8f40d070-1bae-47ad-a29d-22e6e83cb249/transcode=true,original=true,quality=90/b92aad3c8e02424c84e28d082603ee3f.webm',
    ],
    aiIndex: 1,
  },
  {
    level: 10,
    images: [
      '/assets/hongkong_1_real.png',
      '/assets/hongkong_2_ai.png',
      // paths to the static image files
    ],
    aiIndex: 1, // change to the index of the correct answer in the images array
  },
];
