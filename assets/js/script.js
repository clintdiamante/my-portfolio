// ParticleJS
  particlesJS("particles-js", {"particles":{"number":{"value":219,"density":{"enable":true,"value_area":476.48544336970497}},"color":{"value":"#D3D3D3"},"shape":{"type":["circle","edge","polygon"],"stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":true,"distance":95.29708867394099,"color":"#000","opacity":0.08735566461777924,"width":0.9529708867394099},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

// Show

  // Contact
  $('#main-nav-contact').on('click', function ()
    {
      $('.main-home-contact').fadeIn();
      $('.my-name').hide();
      $('.my-title').hide();
      $('.main-home-nav').hide();
    }
  );

  // About
  $('#main-nav-about').on('click', function ()
    {
      $('.main-home').hide();
      $('.my-name').hide();
      $('.my-title').hide();
      $('.main-home-nav').hide();

      $('.main-about').fadeIn();
    }
  );

  // Works
  $('#show-work').on('click', function ()
    {
      $('.main-about').hide();
      $('.main-work').show();
      $('.works').fadeIn();
    }
  );

// Return

  // Contact - Home
  $('#contact-return').on('click', function ()
    {
      $('.main-home-contact').hide();
      $('.my-name').show();
      $('.my-title').show();
      $('.main-home-nav').show();
    }
  );

  // About - Home
  $('#about-return').on('click', function ()
    {
      $('.main-about').hide();
      $('.main-home').fadeIn();

      $('.my-name').show();
      $('.my-title').show();
      $('.main-home-nav').show();
    }
  );

  // Work - About
  $('#work-return').on('click', function ()
    {
      $('.main-work').hide();
      $('.works').hide();
      $('.main-about').show();
    }
  );

  // Work - Home
  $('#work-return-home').on('click', function ()
    {
      $('.main-work').hide();
      $('.works').hide();
      $('.main-home').fadeIn();
      
      $('.my-name').show();
      $('.my-title').show();
      $('.main-home-nav').show();
    }
  );
