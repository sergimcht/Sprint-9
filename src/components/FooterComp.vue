<template>
    <div class="footer">
      <div class="follow-container">
        <div class="follow-gp">FOLLOW GAME PLAY:</div>
        <div class="icons">
          <font-awesome-icon icon="fa-brands fa-discord" />
          <font-awesome-icon icon="fa-brands fa-twitter" />
          <font-awesome-icon icon="fa-brands fa-instagram" />
          <font-awesome-icon icon="fa-brands fa-tiktok" />
          <font-awesome-icon icon="fa-brands fa-vk" />
        </div>
        <div class="copyright">
          <sup>© 2023 Game Play</sup>
        </div>
      </div>
      <div class="about-container">
        <div class="logo-gp">
          <img alt="footer_logo" src="../assets/logo_footer.png" style="height: 5rem"/>
        </div>
        <div class="links">
          <a href="#">About</a> | <a href="#">Privacy Policy</a> | <a href="#">FAQ</a> |
          <a href="#">Contact</a>
        </div>
      </div>
      <div class="data-provider-container">
        <span>Data Provider:<br></span>
        <img alt="RAWG_logo" src="../assets/RAWG_logo.png" style="height: 1.5rem"/>
        <div class="copyright">
          <sup>https://rawg.io/</sup>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  </script>
  
  <style>
  .footer {
    background-color: var(--clr-2);
    padding: .8rem 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: flex-end;
    min-width: 90vw;
  }

  .icons {
    font-size: 140%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 0 .8rem;
  }
  </style>
  