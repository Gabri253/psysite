---
title: "Home"
layout: "base.njk"
permalink: /
---

<section class="w-full h-screen" id="hero">
  <h1>Benvenuto nel mio studio</h1>
  <p>Uno spazio sicuro per il tuo benessere mentale e emotivo</p>
  <a href="/contatti/" id="btn btn-primary" class="max-w-7xl">Prenota una consulenza</a>
  <div class="swiper myHeroSlider h-[500px] md:h-[600px] w-full">
    <div class="swiper-wrapper">
    
      <div class="swiper-slide relative flex items-center justify-center bg-brand-forest">
        <img src="/assets/img/studio-pomeriggio.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60" alt="">
        <div class="relative z-10 text-center text-white px-4">
          <h2 class="text-4xl md:text-6xl font-bold mb-4">Benvenuti nel mio studio</h2>
          <p class="text-lg md:text-xl mb-8">Uno spazio sicuro per il tuo benessere psicologico.</p>
          <a href="/chi-sono/" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition">Scopri di più</a>
        </div>
      </div>

      <div class="swiper-slide relative flex items-center justify-center bg-brand-sage">
        <img src="/assets/img/supporto-genitoriale.jpg" class="absolute inset-0 w-full h-full object-cover opacity-50" alt="">
        <div class="relative z-10 text-center text-white px-4">
          <h2 class="text-4xl md:text-6xl font-bold mb-4 text-brand-beige">Sostegno alla genitorialità</h2>
          <p class="text-lg md:text-xl mb-8 text-brand-beige">Ritrovare l'equilibrio e la comunicazione.</p>
          <a href="/servizi/" class="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold transition">I miei servizi</a>
        </div>
      </div>

  </div>
  
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev !text-white"></div>
  <div class="swiper-button-next !text-white"></div>
</div>
</section>

<section class="max-w-6xl" id="services-preview">
  <h2>I miei servizi</h2>
  <div class="services-grid">
    <div class="service-card">
      <h3>Psicoterapia Individuale</h3>
      <p>Percorsi personalizzati per affrontare difficoltà emotive e psicologiche.</p>
    </div>
    <div class="service-card">
      <h3>Consulenza Psicologica</h3>
      <p>Supporto e orientamento per decisioni importanti nella vita.</p>
    </div>
    <div class="service-card">
      <h3>Valutazione Psicologica</h3>
      <p>Test e valutazioni per una migliore comprensione di sé.</p>
    </div>
        <div class="service-card">
      <h3>Supporto Genitoriale</h3>
      <p>Sostegno ai genitori.</p>
    </div>
  </div>
  <a href="/servizi/" class="btn btn-secondary">Scopri tutti i servizi</a>
</section>

<section class="max-w-3xl" id="social-proof">
  <h1>Mi presento</h1>
  <p>Sono un'amante degli animali e dei viaggi, nata e cresciuta nel mondo della natura e dello sport.
Mi descriverei come una persona gioiosa, laboriosa e motivata.
Credo profondamente nel potere delle relazioni umane e nella ricchezza della cultura.
</p>
  <a href="/chi-sono/" class="btn btn-primary">Scopri di più su di me</a>
</section>

<section class="cta">
  <h2>Come posso aiutarti?</h2>
  <p>Se senti il bisogno di supporto, sono qui per te.</p>
  <a href="/chi-sono/" class="btn btn-primary">Scopri di più su di me</a>
</section>
