---
title: "Home"
layout: "base.njk"
permalink: /
---

<section id="hero">
<!--
  <h1>Benvenuto nel mio studio</h1>
  <p>Uno spazio sicuro per il tuo benessere mentale e emotivo</p>
  <a href="/contatti/" id="btn btn-primary" class="max-w-7xl">Prenota una consulenza</a>
  -->
  <div class="swiper myHeroSlider h-[600px] md:h-[700px] w-full overflow-hidden relative px-4" parallax="true">
    <div class="swiper-wrapper">
    
      <div class="swiper-slide relative flex mx-auto bg-brand-beige">
        <img src="/assets/img/studio-template.webp" class="absolute inset-0 w-full h-full object-cover opacity-90" data-swiper-parallax="-20%" alt="">
        <div class="relative z-10 text-center px-4 pt-8">
          <h2 class="text-4xl md:text-6xl font-bold mb-4 text-brand-beige-dark" data-swiper-parallax="-300">Benvenuti nel mio studio</h2>
          <p class="text-xl md:text-2xl mb-8 text-brand-beige-dark" data-swiper-parallax="-200">Uno spazio sicuro per il tuo benessere psicologico.</p>
          <a href="/chi-sono/" class="bg-brand-sage hover:bg-brand-forest hover:shadow-xl text-sm md:text-xl text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-700 transform hover:scale-105 relative z-10" data-swiper-parallax="-100">Scopri di più</a>
        </div>
      </div>

      <div class="swiper-slide relative flex items-center justify-center bg-brand-beige bg-gradient-to-t from-black/70 via-black/20 to-transparent">
        <img src="/assets/img/supporto-genitoriale.jpg" class="absolute inset-0 w-full h-full object-cover opacity-90" data-swiper-parallax="-20%" alt="">
        <div class="relative z-10 text-center text-brand-beige px-4 pt-8">
          <h2 class="text-4xl md:text-6xl font-bold mb-4 text-brand-beige-dark" data-swiper-parallax="-300">Sostegno alla genitorialità</h2>
          <p class="text-xl md:text-2xl mb-8 text-brand-beige-dark" data-swiper-parallax="-200">Ritrovare l'equilibrio e la comunicazione.</p>
          <a href="/servizi/" class="bg-brand-sage hover:bg-brand-forest text-sm md:text-xl text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-700 transform hover:scale-105 relative z-10"  data-swiper-parallax="-100">I miei servizi</a>
        </div>
      </div>

  </div>
  
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev !text-white"></div>
  <div class="swiper-button-next !text-white"></div>
</div>
</section>

<section class="w-full pt-20" id="services-preview">
  <h2 class="text-4xl md:text-6xl font-bold mb-4 mx-auto text-center text-brand-forest pb-10">I miei servizi</h2>
  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-brand-light-beige">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog">
          <div class="p-6">
            <h1 class="title-font font-semibold text-center text-lg text-brand-forest mb-3">Psicoterapia Individuale</h1>
            <p class="text-center leading-relaxed mb-3">Percorsi personalizzati per affrontare difficoltà emotive e psicologiche.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Scopri di più
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-brand-light-beige">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog">
          <div class="p-6">
            <h1 class="title-font font-semibold text-center text-lg text-brand-forest mb-3">Valutazione Psicologica</h1>
            <p class="text-center leading-relaxed mb-3">Test e valutazioni per una migliore comprensione di sé.</p>
            <div class="flex items-center flex-wrap">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Scopri di più
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-brand-light-beige">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog">
          <div class="p-6">
            <h1 class="title-font font-semibold text-center text-lg text-brand-forest mb-3">Supporto Genitoriale</h1>
            <p class="text-center leading-relaxed mb-3">Sostegno ai genitori.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Scopri di più
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
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

<section class="py-16 px-6 max-w-6xl mx-auto">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    <div class="overflow-hidden rounded-2xl shadow-xl bg-red-200">
      <img 
        src="/assets/img/dottoressa-studio.jpg" 
        alt="Dottoressa Sara Martini sorridente nel suo studio a Lucca" 
        class="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
      >
    </div>

    <div class="space-y-6 bg-blue-200" style="transition-delay: 200ms;">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-brand-forest">
        Mi presento, sono Sara
      </h2>
      
      <p class="text-lg text-brand-forest leading-relaxed">
        Sono un'amante degli animali e dei viaggi, nata e cresciuta nel mondo della natura e dello sport.
        Mi descriverei come una persona gioiosa, laboriosa e motivata.
        Credo profondamente nel potere delle relazioni umane e nella ricchezza della cultura.Il mio approccio si basa sull'ascolto empatico e sulla creazione di uno spazio sicuro dove esplorare le proprie difficoltà. Insieme, lavoreremo per ritrovare il tuo equilibrio psicologico.
      </p>

      <p class="text-lg text-brand-forest leading-relaxed">
        Specializzata in psicoterapia cognitiva, aiuto adulti e adolescenti a gestire ansia, stress e momenti di crisi personale.
      </p>

      <div class="pt-4">
        <a href="/chi-sono/" class="inline-block border-2 border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
          Scopri di più su di me
        </a>
      </div>
    </div>

  </div>
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
