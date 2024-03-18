import anime from 'animejs';

// Animação de rotação
let circle1Anim = anime({
  targets: '.circle-1',
  loop: true,
  rotate: {
    value: -360,
    duration: 750,
    easing: 'linear',
  }
});

let circle2Anim = anime({
  targets: '.circle-2',
  loop: true,
  rotate: {
    value: 360,
    duration: 750,
    easing: 'linear',
  }
});

let circle3Anim = anime({
  targets: '.circle-3',
  loop: true,
  rotate: {
    value: -360,
    duration: 750,
    easing: 'linear',
  }
});

let circle4Anim = anime({
  targets: '.circle-4',
  loop: true,
  rotate: {
    value: 360,
    duration: 750,
    easing: 'linear',
  }
});

let circle5Anim = anime({
  targets: '.circle-5',
  loop: true,
  rotate: {
    value: -360,
    duration: 750,
    easing: 'linear',
  }
});

let circle6Anim = anime({
  targets: '.circle-6',
  loop: true,
  rotate: {
    value: 360,
    duration: 750,
    easing: 'linear',
  }
});

let circle7Anim = anime({
  targets: '.circle-7',
  loop: true,
  rotate: {
    value: -360,
    duration: 750,
    easing: 'linear',
  }
});

setTimeout(() => {
  circle1Anim.pause();
  anime({
    targets: '.circle-1',
    rotate: {
      value: -320,
      easing: 'linear',
    }
  })
}, 1000);


setTimeout(() => {
  circle2Anim.pause();
  anime({
    targets: '.circle-2',
    rotate: {
      value: 370,
      easing: 'linear',
    }
  })
}, 1500);

setTimeout(() => {
  circle3Anim.pause();
  anime({
    targets: '.circle-3',
    rotate: {
      value: -380,
      easing: 'linear',
    }
  })
}, 2000);

setTimeout(() => {
  circle4Anim.pause();
  anime({
    targets: '.circle-4',
    rotate: {
      value: 305,
      easing: 'linear',
    }
  })
}, 2500);

setTimeout(() => {
  circle5Anim.pause();
  anime({
    targets: '.circle-5',
    rotate: {
      value: -440,
      easing: 'linear',
    }
  })
}, 3000);

setTimeout(() => {
  circle6Anim.pause();
  anime({
    targets: '.circle-6',
    rotate: {
      value: 250,
      easing: 'linear',
    }
  })
}, 3500);

setTimeout(() => {
  circle7Anim.pause();
  anime({
    targets: '.circle-7',
    rotate: {
      value: -130,
      easing: 'linear',
    }
  })
}, 4000);

setTimeout(() => {
  anime({
    targets:'.container',
    translateX: [0, '-290px'],
    easing:"easeOutExpo",
    duration: 2000,
  })

  anime({
    targets:'.title',
    opacity: [0, 1],
    translateX: ['-290px', 0],
    easing: "easeOutExpo",
    duration: 2000,
  })
}, 5000);