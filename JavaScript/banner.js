window.addEventListener('load', () => {
  const sliderTrack = document.getElementById('sliderTrack');

  if (!sliderTrack) {
    return;
  }

  const isNestedPage = window.location.pathname.includes('/html/');
  const basePath = isNestedPage ? '..' : '.';
  const asset = (relativePath) => `${basePath}/${relativePath.replace(/^\/+/, '')}`;

  const consolasHTML = `
  <figure><img src="${asset('img/consolas/odyssey.png')}" alt="Magnavox Odyssey"><figcaption>Magnavox Odyssey</figcaption></figure>
  <figure><img src="${asset('img/consolas/2600.png')}" alt="Atari 2600"><figcaption>Atari 2600</figcaption></figure>
  <figure><img src="${asset('img/consolas/intellivision.png')}" alt="Mattel Intellivision"><figcaption>Mattel Intellivision</figcaption></figure>
  <figure><img src="${asset('img/consolas/5200.png')}" alt="Atari 5200"><figcaption>Atari 5200</figcaption></figure>
  <figure><img src="${asset('img/consolas/colecovision.png')}" alt="ColecoVision"><figcaption>ColecoVision</figcaption></figure>
  <figure><img src="${asset('img/consolas/famicom.png')}" alt="Nintendo Famicom"><figcaption>Nintendo Famicom</figcaption></figure>
  <figure><img src="${asset('img/consolas/sg1000.png')}" alt="Sega SG-1000"><figcaption>Sega SG-1000</figcaption></figure>
  <figure><img src="${asset('img/consolas/nes.png')}" alt="Nintendo NES"><figcaption>Nintendo NES</figcaption></figure>
  <figure><img src="${asset('img/consolas/mastersystem.png')}" alt="Sega Master System"><figcaption>Sega Master System</figcaption></figure>
  <figure><img src="${asset('img/consolas/7800.png')}" alt="Atari 7800"><figcaption>Atari 7800</figcaption></figure>
  <figure><img src="${asset('img/consolas/pcengine.png')}" alt="NEC PC Engine"><figcaption>NEC PC Engine</figcaption></figure>
  <figure><img src="${asset('img/consolas/megadrive.png')}" alt="Sega Mega Drive"><figcaption>Sega Mega Drive</figcaption></figure>
  <figure><img src="${asset('img/consolas/turbografx16.png')}" alt="TurboGrafx-16"><figcaption>TurboGrafx-16</figcaption></figure>
  <figure><img src="${asset('img/consolas/neogeo.png')}" alt="Neo Geo AES"><figcaption>Neo Geo AES</figcaption></figure>
  <figure><img src="${asset('img/consolas/superfamicom.png')}" alt="Nintendo Super Famicom"><figcaption>Nintendo Super Famicom</figcaption></figure>
  <figure><img src="${asset('img/consolas/snes.png')}" alt="Nintendo SNES"><figcaption>Nintendo SNES</figcaption></figure>
  <figure><img src="${asset('img/consolas/jaguar.png')}" alt="Atari Jaguar"><figcaption>Atari Jaguar</figcaption></figure>
  <figure><img src="${asset('img/consolas/saturn.png')}" alt="Sega Saturn"><figcaption>Sega Saturn</figcaption></figure>
  <figure><img src="${asset('img/consolas/ps1.png')}" alt="Sony PlayStation"><figcaption>Sony PlayStation</figcaption></figure>
  <figure><img src="${asset('img/consolas/n64.png')}" alt="Nintendo 64"><figcaption>Nintendo 64</figcaption></figure>
  <figure><img src="${asset('img/consolas/dreamcast.png')}" alt="Sega Dreamcast"><figcaption>Sega Dreamcast</figcaption></figure>
  <figure><img src="${asset('img/consolas/ps2.png')}" alt="Sony PlayStation 2"><figcaption>Sony PlayStation 2</figcaption></figure>
  <figure><img src="${asset('img/consolas/gamecube.png')}" alt="Nintendo GameCube"><figcaption>Nintendo GameCube</figcaption></figure>
  <figure><img src="${asset('img/consolas/xbox.png')}" alt="Microsoft Xbox"><figcaption>Microsoft Xbox</figcaption></figure>
  <figure><img src="${asset('img/consolas/xbox360.png')}" alt="Microsoft Xbox 360"><figcaption>Microsoft Xbox 360</figcaption></figure>
  <figure><img src="${asset('img/consolas/ps3.png')}" alt="Sony PlayStation 3"><figcaption>Sony PlayStation 3</figcaption></figure>
  <figure><img src="${asset('img/consolas/wii.png')}" alt="Nintendo Wii"><figcaption>Nintendo Wii</figcaption></figure>
  <figure><img src="${asset('img/consolas/wiiu.png')}" alt="Nintendo Wii U"><figcaption>Nintendo Wii U</figcaption></figure>
  <figure><img src="${asset('img/consolas/ps4.png')}" alt="Sony PlayStation 4"><figcaption>Sony PlayStation 4</figcaption></figure>
  <figure><img src="${asset('img/consolas/xboxone.png')}" alt="Microsoft Xbox One"><figcaption>Microsoft Xbox One</figcaption></figure>
  <figure><img src="${asset('img/consolas/switch.png')}" alt="Nintendo Switch"><figcaption>Nintendo Switch</figcaption></figure>
  <figure><img src="${asset('img/consolas/ps5.png')}" alt="Sony PlayStation 5"><figcaption>Sony PlayStation 5</figcaption></figure>
  <figure><img src="${asset('img/consolas/xboxseriess.png')}" alt="Xbox Series S"><figcaption>Xbox Series S</figcaption></figure>
  <figure><img src="${asset('img/consolas/xboxseriesx.png')}" alt="Xbox Series X"><figcaption>Xbox Series X</figcaption></figure>
  <figure><img src="${asset('img/consolas/switch2.png')}" alt="Nintendo Switch 2"><figcaption>Nintendo Switch 2</figcaption></figure>
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
