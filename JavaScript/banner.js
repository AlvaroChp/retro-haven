window.addEventListener('load', () => {
  const sliderTrack = document.getElementById('sliderTrack');

  if (!sliderTrack) {
    return;
  }

  const isNestedPage = window.location.pathname.includes('/html/');
  const basePath = isNestedPage ? '..' : '.';
  const asset = (relativePath) => `${basePath}/${relativePath.replace(/^\/+/, '')}`;

  const consolasHTML = `
    <figure><img src="${asset('img/consolas/odyssey.png')}" alt="Magnavox Odyssey"><figcaption>Magnavox Odyssey (1972)</figcaption></figure>
    <figure><img src="${asset('img/consolas/channelf.png')}" alt="Fairchild Channel F"><figcaption>Fairchild Channel F (1976)</figcaption></figure>
    <figure><img src="${asset('img/consolas/2600.png')}" alt="Atari 2600"><figcaption>Atari 2600 (1977)</figcaption></figure>
    <figure><img src="${asset('img/consolas/videopacg7000.png')}" alt="Philips Videopac G7000"><figcaption>Philips Videopac G7000 (1978)</figcaption></figure>
    <figure><img src="${asset('img/consolas/odyssey2.png')}" alt="Magnavox Odyssey 2"><figcaption>Magnavox Odyssey 2 (1978)</figcaption></figure>
    <figure><img src="${asset('img/consolas/intellivision.png')}" alt="Mattel Intellivision"><figcaption>Mattel Intellivision (1979)</figcaption></figure>
    <figure><img src="${asset('img/consolas/5200.png')}" alt="Atari 5200"><figcaption>Atari 5200 (1982)</figcaption></figure>
    <figure><img src="${asset('img/consolas/colecovision.png')}" alt="ColecoVision"><figcaption>ColecoVision (1982)</figcaption></figure>
    <figure><img src="${asset('img/consolas/videopacg7400.png')}" alt="Philips Videopac G7400"><figcaption>Philips Videopac G7400 (1983)</figcaption></figure>
    <figure><img src="${asset('img/consolas/famicom.png')}" alt="Nintendo Famicom"><figcaption>Nintendo Family Computer (1983)</figcaption></figure>
    <figure><img src="${asset('img/consolas/sg1000.png')}" alt="Sega SG-1000"><figcaption>Sega SG-1000 (1983)</figcaption></figure>
    <figure><img src="${asset('img/consolas/nes.png')}" alt="Nintendo NES"><figcaption>Nintendo NES (1985)</figcaption></figure>
    <figure><img src="${asset('img/consolas/mastersystem.png')}" alt="Sega Master System"><figcaption>Sega Master System (1985)</figcaption></figure>
    <figure><img src="${asset('img/consolas/7800.png')}" alt="Atari 7800"><figcaption>Atari 7800 (1986)</figcaption></figure>
    <figure><img src="${asset('img/consolas/pcengine.png')}" alt="NEC PC Engine"><figcaption>NEC PC Engine (1987)</figcaption></figure>
    <figure><img src="${asset('img/consolas/megadrive.png')}" alt="Sega Mega Drive"><figcaption>Sega Mega Drive / Genesis (1988)</figcaption></figure>
    <figure><img src="${asset('img/consolas/turbografx16.png')}" alt="TurboGrafx-16"><figcaption>TurboGrafx-16 (1989)</figcaption></figure>
    <figure><img src="${asset('img/consolas/neogeo.png')}" alt="Neo Geo AES"><figcaption>Neo Geo AES (1990)</figcaption></figure>
    <figure><img src="${asset('img/consolas/superfamicom.png')}" alt="Nintendo Super Famicom"><figcaption>Nintendo Super Famicom (1990)</figcaption></figure>
    <figure><img src="${asset('img/consolas/snes.png')}" alt="Nintendo SNES (Norteamérica)"><figcaption>Nintendo SNES (1991)</figcaption></figure>
    <figure><img src="${asset('img/consolas/cdi.png')}" alt="Philips CD-i"><figcaption>Philips CD-i (1991)</figcaption></figure>
    <figure><img src="${asset('img/consolas/supernintendo.png')}" alt="Nintendo Super Nintendo (Europa)"><figcaption>Nintendo Super Nintendo PAL (1992)</figcaption></figure>
    <figure><img src="${asset('img/consolas/jaguar.png')}" alt="Atari Jaguar"><figcaption>Atari Jaguar (1993)</figcaption></figure>
    <figure><img src="${asset('img/consolas/neogeocd.png')}" alt="Neo Geo CD"><figcaption>Neo Geo CD (1994)</figcaption></figure>
    <figure><img src="${asset('img/consolas/saturn.png')}" alt="Sega Saturn"><figcaption>Sega Saturn (1994)</figcaption></figure>
    <figure><img src="${asset('img/consolas/ps1.png')}" alt="Sony PlayStation"><figcaption>Sony PlayStation (1994)</figcaption></figure>
    <figure><img src="${asset('img/consolas/n64.png')}" alt="Nintendo 64"><figcaption>Nintendo 64 (1996)</figcaption></figure>
    <figure><img src="${asset('img/consolas/dreamcast.png')}" alt="Sega Dreamcast"><figcaption>Sega Dreamcast (1998)</figcaption></figure>
    <figure><img src="${asset('img/consolas/ps2.png')}" alt="Sony PlayStation 2"><figcaption>Sony PlayStation 2 (2000)</figcaption></figure>
    <figure><img src="${asset('img/consolas/psone.png')}" alt="Sony PS One"><figcaption>Sony PS One (2000)</figcaption></figure>
    <figure><img src="${asset('img/consolas/gamecube.png')}" alt="Nintendo GameCube"><figcaption>Nintendo GameCube (2001)</figcaption></figure>
    <figure><img src="${asset('img/consolas/xbox.png')}" alt="Microsoft Xbox"><figcaption>Microsoft Xbox (2001)</figcaption></figure>
    <figure><img src="${asset('img/consolas/xbox360.png')}" alt="Microsoft Xbox 360"><figcaption>Microsoft Xbox 360 (2005)</figcaption></figure>
    <figure><img src="${asset('img/consolas/hyperscan.png')}" alt="Mattel HyperScan"><figcaption>Mattel HyperScan (2006)</figcaption></figure>
    <figure><img src="${asset('img/consolas/ps3.png')}" alt="Sony PlayStation 3"><figcaption>Sony PlayStation 3 (2006)</figcaption></figure>
    <figure><img src="${asset('img/consolas/wii.png')}" alt="Nintendo Wii"><figcaption>Nintendo Wii (2006)</figcaption></figure>
    <figure><img src="${asset('img/consolas/wiiu.png')}" alt="Nintendo Wii U"><figcaption>Nintendo Wii U (2012)</figcaption></figure>
    <figure><img src="${asset('img/consolas/ps4.png')}" alt="Sony PlayStation 4"><figcaption>Sony PlayStation 4 (2013)</figcaption></figure>
    <figure><img src="${asset('img/consolas/xboxone.png')}" alt="Microsoft Xbox One"><figcaption>Microsoft Xbox One (2013)</figcaption></figure>
    <figure><img src="${asset('img/consolas/switch.png')}" alt="Nintendo Switch"><figcaption>Nintendo Switch (2017)</figcaption></figure>
    <figure><img src="${asset('img/consolas/ps5.png')}" alt="Sony PlayStation 5"><figcaption>Sony PlayStation 5 (2020)</figcaption></figure>
    <figure><img src="${asset('img/consolas/xboxseriess.png')}" alt="Xbox Series S"><figcaption>Xbox Series S (2020)</figcaption></figure>
    <figure><img src="${asset('img/consolas/xboxseriesx.png')}" alt="Xbox Series X"><figcaption>Xbox Series X (2020)</figcaption></figure>
    <figure><img src="${asset('img/consolas/switch2.png')}" alt="Nintendo Switch 2"><figcaption>Nintendo Switch (2025)</figcaption></figure>
  `;

  sliderTrack.innerHTML = consolasHTML + consolasHTML;

  const slideWidth = 220;
  let position = 0;
  const totalSlides = sliderTrack.getElementsByTagName('figure').length;

  function moveSlider() {
    position -= 1;

    if (position <= -slideWidth * (totalSlides / 2)) {
      position = 0;
    }

    sliderTrack.style.left = `${position}px`;
    requestAnimationFrame(moveSlider);
  }

  requestAnimationFrame(moveSlider);
});
