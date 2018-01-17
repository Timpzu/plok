$('#serviceInput').keypress(function(e) {
  if (e.which == 13) {
    var answer = this.value;
    $('#service-menu ul').append('<li class="oikea appended">' + answer + '</li>');
    e.currentTarget.value = "";

    // aloita demo
    if (answer == "Aloita demo") {
      alert("Aloita demo -komento ei toimi demossa!")
    }
    /* if (answer == "Aloita demo") {
      if ($('#service-menu').is(':visible')) {
        $('#service-menu').fadeOut(300, function() {
          $('#program-menu').fadeIn(300);
          $('#service-menu ul').empty();
          e.currentTarget.value = "";
        });
      }
      if ($('.page').hasClass('shown')) { $('.page').removeClass('shown') }
      if ($('.menu_button a').hasClass('active')) { $('.menu_button a').removeClass('active') }
      $('#page1').addClass('shown');
      $('#pg1 a').addClass('active');
      $('#pointter1').addClass('shown');

      if ($('#pointter1').hasClass('shown')) {
        $('#pg5').on('click', function() {
          $('#pointter1').removeClass('shown');
          $('#pointter2').addClass('shown');
        });
      }
    }*/


    else if (answer == "Avaa kotisivu") {
      setTimeout(function() {
        $('#service-menu ul').append('<li class="appended">Avataan verkkosivu</li>');
        window.location = 'http://www.haaga-helia.fi/en/frontpage';
      }, 500);
    } else if (answer == "Ketkä ovat Innocraft?") {
      setTimeout(function() {
        $('#service-menu ul').append('<li class="appended">Vuosi 2016, innovaatiokenttä kuohuu, uusi tulokas Innocraft vyöryy ryminällä markkinoille. Haaga-Helian ensimmäisen vuoden tietojenkäsittelijä-opiskelijoista koostuva ryhmä toteuttaa projektityön osana innovaation ja projektityö –kurssia. </li>');
        responsiveVoice.speak("Vuosi 2016, innovaatiokenttä kuohuu, uusi tulokas Innocraft vyöryy ryminällä markkinoille. Haaga-Helian ensimmäisen vuoden tietojenkäsittelijä-opiskelijoista koostuva ryhmä toteuttaa projektityön osana innovaation ja projektityö –kurssia.","Finnish Female");
      }, 500);
    } else if (answer == "Avaa Digian nettisivu") {
      setTimeout(function() {
        window.location = 'http://digia.fi/';
      }, 500);
    } else if (answer == "Mikä tämä on?") {
      setTimeout(function() {
        $('#service-menu ul').append('<li class="appended"> Plok-alusta auttaa valitsemaan yrityksen toimintoihin sopivat rakennuspalikat ja  kasaamaan niistä sopivimman järjestelmän. Yksinkertaisuudessaan Plok vähentää konsultoinnin tarvetta asiakkaan ja alustan tarjoajan välillä.  </li>');
        responsiveVoice.speak(" Plok-alusta auttaa valitsemaan yrityksen toimintoihin sopivat rakennuspalikat ja  kasaamaan niistä sopivimman järjestelmän. Yksinkertaisuudessaan Plok vähentää konsultoinnin tarvetta asiakkaan ja alustan tarjoajan välillä.  ","Finnish Female");
      }, 500);
    }
    else {
      setTimeout(function() {
        $('#service-menu ul').append('<li class="appended">En tiedä mitä tarkoittaa' + ' \"' + answer +'\"!</li>');
        responsiveVoice.speak("En tiedä mitä tarkoittaa" + answer, "Finnish Female");
      }, 500);
    }
  }
});
