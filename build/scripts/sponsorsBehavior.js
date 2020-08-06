const SPONSORS = [
  {
    company: "Safeweb",
    logo: "assets/logos/SAFEWEB-300px.png",
    link: "https://safeweb.com.br/"
  },
  {
    company: "Banrisul",
    logo: "assets/logos/BANRISUL-100PX.png",
    link: "https://www.banrisul.com.br/"
  },
  {
    company: "Chevrolet",
    logo: "assets/logos/CHEVROLET-300PX.png",
    link: "https://www.chevrolet.com.br/"
  }
];

const FIRS_SPONSOR_TO_SHOW = 0;

const LAST_SPONSOR_TO_SHOW_INDEX = SPONSORS.length - 1;

let currentSponsor = FIRS_SPONSOR_TO_SHOW;

function showSponsor(link, logo) {
  jQuery(".sponsors").find(".link").attr("href", link);
  jQuery(".sponsors").find(".logo").attr("src", logo);
  jQuery(".sponsors").fadeIn();

  setTimeout(() => {
    jQuery(".sponsors").fadeOut();
    changeShowingSponsor();
  }, 4600);
}

function changeShowingSponsor() {
  if (currentSponsor === LAST_SPONSOR_TO_SHOW_INDEX) {
    currentSponsor = FIRS_SPONSOR_TO_SHOW;
  } else {
    currentSponsor++;
  }

  setTimeout(() => {
    const banrisulLogo = 1;
    if (currentSponsor === banrisulLogo) {
      jQuery(".sponsors").find(".logo").addClass("banrisul-logo");
    } else {
      jQuery(".sponsors").find(".logo").removeClass("banrisul-logo");
    }
    showSponsor(SPONSORS[currentSponsor].link, SPONSORS[currentSponsor].logo);
  }, 400);
}

function initSponsorShowing() {
  showSponsor(SPONSORS[currentSponsor].link, SPONSORS[currentSponsor].logo);
}
