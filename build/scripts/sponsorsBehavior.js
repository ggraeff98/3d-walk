const SPONSORS = [
  {
    company: "Safeweb",
    logo: "../assets/logos/SAFEWEB-300px.png",
    link: "https://safeweb.com.br/"
  },
  {
    company: "Banrisul",
    logo: "../assets/logos/BANRISUL-300PX.png",
    link: "https://www.banrisul.com.br/"
  },
  {
    company: "Chevrolet",
    logo: "../assets/logos/CHEVROLET-300PX.png",
    link: "https://www.chevrolet.com.br/"
  }
];

const HIDE_SPONSOR_TIMER_SYNC_TRANSITION_EFFECT_MILLISECONDS = 4500;

const CHANGE_SPONSOR_TIMER_AFTER_TRANSITION_EFFECT_MILLISECONDS = 5000;

const FIRS_SPONSOR_TO_SHOW = 0;

const LAST_SPONSOR_TO_SHOW_INDEX = SPONSORS.length - 1;

let currentSponsor = FIRS_SPONSOR_TO_SHOW;

function showSponsor(link, logo) {
  jQuery(".sponsors").find(".link").attr("href", link);
  jQuery(".sponsors").find(".logo").attr("src", logo);

  jQuery(".sponsors").find(".link").css({ opacity: "1" });
}

function changeShowingSponsor() {
  if (currentSponsor === LAST_SPONSOR_TO_SHOW_INDEX) {
    currentSponsor = FIRS_SPONSOR_TO_SHOW;
    return;
  }

  currentSponsor++;
}

function hideSponsorLogo() {
  setTimeout(() => {
    jQuery(".sponsors").find(".link").css({ opacity: "0" });
  }, HIDE_SPONSOR_TIMER_SYNC_TRANSITION_EFFECT_MILLISECONDS);
}

function initSponsorShowing() {
  showSponsor(SPONSORS[currentSponsor].link, SPONSORS[currentSponsor].logo);

  hideSponsorLogo();

  setInterval(() => {
    hideSponsorLogo();

    changeShowingSponsor();

    showSponsor(SPONSORS[currentSponsor].link, SPONSORS[currentSponsor].logo);
  }, CHANGE_SPONSOR_TIMER_AFTER_TRANSITION_EFFECT_MILLISECONDS);
}
