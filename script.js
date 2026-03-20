const STORAGE_KEY = "qjc-language";
const DEFAULT_LANGUAGE = "zh";
const VISIT_COUNTER_NAMESPACE = "qjcportfolio";
const VISIT_COUNTER_KEY = "homeviews";
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);
const pageType = document.body.dataset.page || (document.body.classList.contains("resume-page") ? "resume" : "home");
const isHomePage = pageType === "home";

const localizedPageContent = window.localizedPageContent || {};
const localizedHomeData = window.localizedHomeData || {};

const descriptionMeta = document.querySelector('meta[name="description"]');
const heroMetrics = document.getElementById("hero-metrics");
const signalList = document.getElementById("signal-list");
const aboutParagraphs = document.getElementById("about-paragraphs");
const aboutFacts = document.getElementById("about-facts");
const educationList = document.getElementById("education-list");
const focusList = document.getElementById("focus-list");
const internshipList = document.getElementById("internship-list");
const competitionList = document.getElementById("competition-list");
const projectList = document.getElementById("project-list");
const closingTags = document.getElementById("closing-tags");
const navLinks = [...document.querySelectorAll("#site-nav a")];
const siteHeader = document.querySelector(".site-header");
const languageToggleButtons = [...document.querySelectorAll("[data-lang-toggle]")];

let currentLanguage = resolveInitialLanguage();
let revealObserver;
let sectionObserver;
let headerResizeObserver;
let showcaseCleanups = [];
let visitCounterState = {
  status: isHomePage ? "loading" : "idle",
  value: null
};

function resolveInitialLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

    if (storedLanguage === "zh" || storedLanguage === "en") {
      return storedLanguage;
    }
  } catch {}

  return DEFAULT_LANGUAGE;
}

function persistLanguage(language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {}
}

function normalizeLanguage(language) {
  return language === "en" ? "en" : "zh";
}

function getTranslationValue(root, key) {
  return key.split(".").reduce((value, segment) => value?.[segment], root);
}

function getPageContent(language = currentLanguage) {
  return localizedPageContent?.[language]?.[pageType] || {};
}

function getHomeContent(language = currentLanguage) {
  return localizedPageContent?.[language]?.home || {};
}

function getHomeData(language = currentLanguage) {
  return localizedHomeData?.[language] || {};
}

function applyTranslationAttribute(attributeName, update) {
  const dictionary = localizedPageContent?.[currentLanguage];

  document.querySelectorAll(`[${attributeName}]`).forEach((element) => {
    const key = element.getAttribute(attributeName);
    const value = getTranslationValue(dictionary, key);

    if (typeof value === "string") {
      update(element, value);
    }
  });
}

function applyStaticTranslations() {
  applyTranslationAttribute("data-i18n", (element, value) => {
    element.textContent = value;
  });
  applyTranslationAttribute("data-i18n-html", (element, value) => {
    element.innerHTML = value;
  });
  applyTranslationAttribute("data-i18n-aria-label", (element, value) => {
    element.setAttribute("aria-label", value);
  });
  applyTranslationAttribute("data-i18n-alt", (element, value) => {
    element.setAttribute("alt", value);
  });
  applyTranslationAttribute("data-i18n-title", (element, value) => {
    element.setAttribute("title", value);
  });
  applyTranslationAttribute("data-i18n-data-text", (element, value) => {
    element.setAttribute("data-text", value);
  });
}

function updateDocumentMeta() {
  const pageContent = getPageContent();

  if (pageContent.meta?.title) {
    document.title = pageContent.meta.title;
  }

  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  if (descriptionMeta && pageContent.meta?.description) {
    descriptionMeta.setAttribute("content", pageContent.meta.description);
  }
}

function updateLanguageToggle() {
  const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
  const toggleText = nextLanguage === "en" ? "EN" : "中文";
  const ariaLabel = localizedPageContent?.[currentLanguage]?.common?.switchLanguageAriaLabel || "Switch language";

  languageToggleButtons.forEach((button) => {
    button.textContent = toggleText;
    button.setAttribute("aria-label", ariaLabel);
    button.setAttribute("title", ariaLabel);
    button.setAttribute("lang", nextLanguage === "zh" ? "zh-CN" : "en");
  });
}

function attachLanguageToggle() {
  languageToggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(currentLanguage === "zh" ? "en" : "zh");
    });
  });
}

function updateScrollOffset() {
  if (!siteHeader) {
    return;
  }

  const offset = Math.ceil(siteHeader.getBoundingClientRect().height + 16);
  document.documentElement.style.setProperty("--header-offset", `${offset}px`);
}

function attachScrollOffsetSync() {
  updateScrollOffset();
  window.addEventListener("resize", updateScrollOffset, { passive: true });

  if ("ResizeObserver" in window && siteHeader) {
    headerResizeObserver = new ResizeObserver(() => {
      updateScrollOffset();
    });
    headerResizeObserver.observe(siteHeader);
  }

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      updateScrollOffset();
    });
  }
}

function getVisitCounterCopy() {
  return getHomeContent().labels?.visitCounter || {};
}

function formatVisitCounterValue(value) {
  return new Intl.NumberFormat(currentLanguage === "zh" ? "zh-CN" : "en-US").format(value);
}

function buildVisitCounterMetric() {
  const copy = getVisitCounterCopy();
  const label = copy.label || "Page Views";

  if (visitCounterState.status === "ready" && Number.isFinite(visitCounterState.value)) {
    return {
      value: formatVisitCounterValue(visitCounterState.value),
      label,
      note: copy.note || ""
    };
  }

  if (visitCounterState.status === "local") {
    return {
      value: "--",
      label,
      note: copy.local || "Local preview only"
    };
  }

  if (visitCounterState.status === "error") {
    return {
      value: "--",
      label,
      note: copy.unavailable || "Counter unavailable"
    };
  }

  return {
    value: "...",
    label,
    note: copy.loading || "Loading"
  };
}

function getHeroMetricsWithVisitCounter(items = []) {
  return [...items, buildVisitCounterMetric()];
}

function renderHeroMetrics(items = []) {
  if (!heroMetrics) {
    return;
  }

  heroMetrics.innerHTML = items
    .map(
      (item) => `
        <div class="metric-card">
          <span class="metric-value">${item.value}</span>
          <span class="metric-label">${item.label}</span>
          ${item.note ? `<span class="metric-note">${item.note}</span>` : ""}
        </div>
      `
    )
    .join("");
}

function renderSignalList(items = []) {
  if (!signalList) {
    return;
  }

  signalList.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderParagraphs(items = []) {
  if (!aboutParagraphs) {
    return;
  }

  aboutParagraphs.innerHTML = items.map((item) => `<p>${item}</p>`).join("");
}

function renderFacts(items = []) {
  if (!aboutFacts) {
    return;
  }

  aboutFacts.innerHTML = items
    .map(
      (item) => `
        <div class="fact-item">
          <span class="fact-label">${item.label}</span>
          <span class="fact-value">${item.value}</span>
        </div>
      `
    )
    .join("");
}

function renderEducation(items = []) {
  if (!educationList) {
    return;
  }

  educationList.innerHTML = items
    .map(
      (item) => `
        <article class="education-item reveal">
          <span class="education-period">${item.period}</span>
          <h4>${item.title}</h4>
          <p class="education-meta">${item.meta}</p>
          <p class="education-note">${item.note}</p>
        </article>
      `
    )
    .join("");
}

function renderFocus(items = []) {
  if (!focusList) {
    return;
  }

  focusList.innerHTML = items
    .map(
      (item) => `
        <article class="focus-item reveal">
          <h4>${item.title}</h4>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
}

function renderInternships(items = []) {
  if (!internshipList) {
    return;
  }

  const coverSuffix = getHomeContent().labels?.internshipCoverSuffix || "cover";

  internshipList.innerHTML = items
    .map(
      (item) => `
        <article class="experience-card reveal ${item.image ? "has-image" : ""}">
          ${
            item.image
              ? `
            <div class="experience-visual">
              <img src="${item.image}" alt="${item.title} ${coverSuffix}" loading="lazy">
            </div>
          `
              : ""
          }
          <div class="experience-content">
            <div class="experience-top">
              <div>
                <h3>${item.title}</h3>
                <div class="experience-meta">${item.organization} · ${item.period}</div>
              </div>
              <span class="experience-tag">${item.tag}</span>
            </div>
            <p class="experience-summary">${item.summary}</p>
            <ul class="experience-details">
              ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderLinks(links = []) {
  if (!links.length) {
    return "";
  }

  return `
    <div class="showcase-links">
      ${links
        .map(
          (link) => `
            <a class="inline-link" href="${link.href}" target="_blank" rel="noreferrer">
              ${link.label}
            </a>
          `
        )
        .join("")}
    </div>
  `;
}

function renderShowcases(container, items = [], options = {}) {
  if (!container || !items.length) {
    if (container) {
      container.innerHTML = "";
    }
    return;
  }

  const { autoplay = false } = options;
  const thumbLabel = getHomeContent().labels?.galleryThumbLabel || "Switch to image";

  container.innerHTML = items
    .map(
      (item, index) => `
        <article class="showcase-card reveal" data-gallery-card="${index}" data-gallery-autoplay="${autoplay}">
          <div class="showcase-gallery">
            <div class="showcase-main">
              <img src="${item.images[0].src}" alt="${item.images[0].alt}" loading="lazy" data-gallery-main>
            </div>
            <div class="showcase-thumbs">
              ${item.images
                .map(
                  (image, imageIndex) => `
                    <button
                      class="thumb-button ${imageIndex === 0 ? "is-active" : ""}"
                      type="button"
                      data-gallery-thumb
                      data-src="${image.src}"
                      data-alt="${image.alt}"
                      aria-label="${thumbLabel} ${imageIndex + 1}"
                    >
                      <img src="${image.src}" alt="${image.alt}" loading="lazy">
                    </button>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="showcase-copy">
            <div class="showcase-head">
              <div class="showcase-top">
                <div>
                  <div class="showcase-pills">
                    <span class="showcase-badge">${item.badge}</span>
                  </div>
                  <h3>${item.title}</h3>
                </div>
              </div>
              <p class="showcase-meta">${item.meta}</p>
            </div>
            <p class="showcase-summary">${item.summary}</p>
            <ul class="showcase-details">
              ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
            ${renderLinks(item.links)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderClosingTags(items = []) {
  if (!closingTags) {
    return;
  }

  closingTags.innerHTML = items.map((item) => `<span class="tag">${item}</span>`).join("");
}

function renderHomePage() {
  const data = getHomeData();

  renderHeroMetrics(getHeroMetricsWithVisitCounter(data.heroMetrics));
  renderSignalList(data.signalList);
  renderParagraphs(data.aboutParagraphs);
  renderFacts(data.aboutFacts);
  renderEducation(data.education);
  renderFocus(data.focus);
  renderInternships(data.internships);
  renderShowcases(competitionList, data.competitions, { autoplay: true });
  renderShowcases(
    projectList,
    (data.projects || []).slice(0, 1).map((item) => ({
      ...item,
      links: []
    }))
  );
  renderClosingTags(data.closingTags);
  attachShowcaseGalleryEvents();
  attachRevealObserver();
}

function createParticleField() {
  const field = document.getElementById("particle-field");

  if (!field || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const particleCount = window.innerWidth < 720 ? 14 : 24;
  field.innerHTML = Array.from({ length: particleCount }, (_, index) => {
    const x = Math.round((index / particleCount) * 100 + Math.random() * 8);
    const y = Math.round(Math.random() * 100);
    const size = (Math.random() * 3.4 + 2.2).toFixed(2);
    const delay = (Math.random() * 10).toFixed(2);
    const duration = (Math.random() * 5 + 4.5).toFixed(2);

    return `
      <span
        class="particle"
        style="--x:${Math.min(x, 100)}; --y:${y}; --size:${size}; --delay:${delay}; --duration:${duration};"
      ></span>
    `;
  }).join("");
}

function attachIntroSequence() {
  const introScreen = document.getElementById("intro-screen");
  const introName = document.getElementById("intro-name");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const introTotalDuration = 3000;
  const introFadeDuration = 760;
  const introTypeStartDelay = 240;

  if (!introScreen || !introName) {
    document.body.classList.remove("is-intro-active");
    return;
  }

  const fullText = introName.dataset.text || localizedPageContent?.[currentLanguage]?.common?.name || "";

  if (prefersReducedMotion) {
    introName.textContent = fullText;
    introScreen.remove();
    document.body.classList.remove("is-intro-active");
    return;
  }

  introName.textContent = "";
  const typingWindow = Math.max(introTotalDuration - introFadeDuration - introTypeStartDelay - 540, 900);
  const stepDuration = fullText.length > 1 ? Math.floor(typingWindow / (fullText.length - 1)) : typingWindow;

  [...fullText].forEach((character, index) => {
    window.setTimeout(() => {
      introName.textContent += character;
    }, introTypeStartDelay + index * stepDuration);
  });

  window.setTimeout(() => {
    introScreen.classList.add("is-hidden");
    document.body.classList.remove("is-intro-active");
    window.setTimeout(() => {
      introScreen.remove();
    }, introFadeDuration);
  }, introTotalDuration - introFadeDuration);
}

function attachShowcaseGalleryEvents() {
  showcaseCleanups.forEach((cleanup) => cleanup());
  showcaseCleanups = [];

  const cards = document.querySelectorAll("[data-gallery-card]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  cards.forEach((card) => {
    const mainImage = card.querySelector("[data-gallery-main]");
    const thumbButtons = [...card.querySelectorAll("[data-gallery-thumb]")];
    const shouldAutoplay =
      card.dataset.galleryAutoplay === "true" &&
      thumbButtons.length > 1 &&
      !prefersReducedMotion;

    if (!mainImage || thumbButtons.length <= 1) {
      return;
    }

    let currentIndex = 0;
    let autoSlideInterval = null;
    let animationTimeout = null;

    function goToSlide(index) {
      const button = thumbButtons[index];

      if (!button || index === currentIndex || mainImage.classList.contains("is-animating")) {
        return;
      }

      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }

      mainImage.classList.add("is-animating");
      animationTimeout = setTimeout(() => {
        currentIndex = index;
        mainImage.src = button.dataset.src || "";
        mainImage.alt = button.dataset.alt || "";
        thumbButtons.forEach((thumb) => thumb.classList.remove("is-active"));
        button.classList.add("is-active");
        mainImage.classList.remove("is-animating");
      }, 300);
    }

    function startAutoSlide() {
      if (!shouldAutoplay) {
        return;
      }

      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }

      autoSlideInterval = setInterval(() => {
        goToSlide((currentIndex + 1) % thumbButtons.length);
      }, 2400);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    thumbButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        goToSlide(index);
        startAutoSlide();
      });
    });

    card.addEventListener("mouseenter", stopAutoSlide);
    card.addEventListener("mouseleave", startAutoSlide);
    card.addEventListener("focusin", stopAutoSlide);
    card.addEventListener("focusout", (event) => {
      if (!card.contains(event.relatedTarget)) {
        startAutoSlide();
      }
    });

    showcaseCleanups.push(() => {
      stopAutoSlide();

      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    });

    startAutoSlide();
  });
}

function attachRevealObserver() {
  const targets = document.querySelectorAll(".reveal");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  targets.forEach((target, index) => {
    target.style.transitionDelay = `${Math.min(index * 55, 280)}ms`;
    revealObserver.observe(target);
  });
}

function attachSectionObserver() {
  if (!navLinks.length) {
    return;
  }

  const sections = [...document.querySelectorAll("main section[id]")];

  if (!sections.length) {
    return;
  }

  if (sectionObserver) {
    sectionObserver.disconnect();
  }

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const href = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === href);
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-20% 0px -35% 0px"
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function shouldCountPageView() {
  return window.location.protocol !== "file:" && !LOCAL_HOSTS.has(window.location.hostname);
}

function updateVisitCounterState(nextState) {
  visitCounterState = {
    ...visitCounterState,
    ...nextState
  };

  if (isHomePage) {
    renderHeroMetrics(getHeroMetricsWithVisitCounter(getHomeData().heroMetrics));
  }
}

async function initVisitCounter() {
  if (!isHomePage || !heroMetrics) {
    return;
  }

  if (!shouldCountPageView()) {
    updateVisitCounterState({ status: "local", value: null });
    return;
  }

  try {
    const response = await window.fetch(
      `https://api.counterapi.dev/v1/${encodeURIComponent(VISIT_COUNTER_NAMESPACE)}/${encodeURIComponent(VISIT_COUNTER_KEY)}/up`,
      {
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(`Visit counter request failed: ${response.status}`);
    }

    const payload = await response.json();
    const nextValue = Number(payload?.value);

    if (!Number.isFinite(nextValue)) {
      throw new Error("Visit counter returned an invalid value");
    }

    updateVisitCounterState({
      status: "ready",
      value: nextValue
    });
  } catch (error) {
    console.warn("Failed to update homepage visit counter.", error);
    updateVisitCounterState({ status: "error", value: null });
  }
}

function applyLanguage(language, options = {}) {
  currentLanguage = normalizeLanguage(language);

  if (options.persist !== false) {
    persistLanguage(currentLanguage);
  }

  updateDocumentMeta();
  applyStaticTranslations();
  updateLanguageToggle();

  if (isHomePage) {
    renderHomePage();
  }

  updateScrollOffset();
}

function init() {
  attachScrollOffsetSync();
  attachLanguageToggle();
  applyLanguage(currentLanguage, { persist: false });

  if (isHomePage) {
    createParticleField();
    attachIntroSequence();
    attachSectionObserver();
    initVisitCounter();
  }
}

init();
