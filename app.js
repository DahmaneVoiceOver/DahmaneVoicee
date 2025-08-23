particlesJS("particles-js", {
  particles: {
    number: {
      value: 12, // number of microphones floating
      density: { enable: true, value_area: 800 }
    },
    shape: {
      type: "image",
      image: {
        src: "microphone.png", // your microphone image
        width: 40,
        height: 40
      }
    },
    opacity: {
      value: 0.9,
      random: false
    },
    size: {
      value: 25,
      random: true
    },
    move: {
      enable: true,
      speed: 0.8, // very slow floating
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
