const data = {
  heroMetrics: [
    {
      value: "NTU",
      label: "区块链技术硕士"
    },
    {
      value: "BUPT",
      label: "计算机科学与技术学士"
    },
    {
      value: "亚军",
      label: "NTU x BASE Web3 Hackathon · 2025-08-26"
    }
  ],
  signalList: [
    "大数据开发与数仓建设",
    "智能合约开发",
    "AI赋能智能合约安全研究",
    "AI agent与区块链产品建设"
  ],
  aboutParagraphs: [
    "瞿嘉辰，NTU计算机科学与技术区块链方向硕士在读，BUPT 计算机科学与技术本科。",
    "掌握Python/Golang/Solidity 等多语言；掌握智能合约、全栈开发、分布式数据处理；英语工作可通。",
    "曾任职字节跳动大数据开发，参与广告数仓与实时数据流建设；Alpha Ladder全栈开发实习，参与NFDT-RWA平台全栈开发，主导合约与协议设计。北航研究阶段聚焦AI赋能智能合约漏洞检测，参与国际会议论文撰写；Seth公链生态联合创始人。",
    "科研成果：第一作者发表大数据领域论文（CONF-CDS 2024），参与智能合约安全相关论文投递。"
  ],
  aboutFacts: [
    {
      label: "当前方向",
      value: " 大数据开发 / 后端开发 / 智能合约开发与安全研究/ 全栈开发"
    },
    {
      label: "教育路径",
      value: "BUPT 本科 + NTU 硕士"
    },
    {
      label: "实践形式",
      value: "Hackathon / 实习 / 科研"
    },
    {
      label: "编程语言",
      value: "Python / Golang / Solidity/ SQL/ JavaScript"
    }
  ],
  education: [
    {
      period: "2025.08 - 2027.01",
      title: "南洋理工大学",
      meta: "Blockchain Technology 硕士 <br> Centre in Computational Technologies for Finance <br> 新加坡",
      note: "延续区块链技术与金融科技方向的学习与实践，把比赛、原型和研究经历继续串联起来。"
    },
    {
      period: "2021.09 - 2025.06",
      title: "北京邮电大学",
      meta: "计算机科学与技术本科 <br> 计算机学院（国家示范性软件学院）",
      note: "GPA 86/100；机器学习 97，大数据技术基础 100，网络存储技术 95。"
    }
  ],
  focus: [
    {
      title: "产品结构化表达",
      detail: "把复杂需求拆成页面模块、交互流程和可展示的叙事顺序。"
    },
    {
      title: "Web3 场景理解",
      detail: "持续关注支付、Agent、内容激励和链上应用的产品化路径。"
    },
    {
      title: "视觉与原型呈现",
      detail: "偏好高识别度的暗色视觉，把作品从截图变成有整体性的展示。"
    },
    {
      title: "短周期协作",
      detail: "适应比赛和原型冲刺节奏，能兼顾思路、界面和输出材料。"
    }
  ],
  internships: [
    {
      title: "量化交易系统研发",
      organization: "NTU 研究助理 · 新加坡",
      period: "2026.01 - 至今",
      tag: "Research Assistant",
      image: "asset/experience/ntu-snz.png",
      summary:
        "参与 SNZ Capital 投资的核心团队，负责量化交易系统的开发工作，完成高并发交易系统的全流程构建。",
      details: [
        "参与系统架构设计、核心模块开发及性能优化，推动 Funding Rate Arbitrage 量化策略的工程化落地。",
        "重点优化高并发交易场景下的系统延迟与执行效率，提升交易系统的稳定性与实时性。"
      ]
    },
    {
      title: "全栈开发实习生",
      organization: "Alpha Ladder Group（前新加坡MVGX科技集团） · 新加坡",
      period: "2025.10 - 至今",
      tag: "Full Stack Developer",
      image: "asset/experience/alpha-ladder.png",
      summary:
        "深度参与 NFDT-RWA 资产通证化平台的全生命周期开发，负责前端、后端、数据库设计以及服务器部署与运维等全栈模块的实现。",
      details: [
        "主导 NFDT 底层协议设计，并使用 Solidity 开发链上智能合约。",
        "实现真实世界资产（RWA）的链上通证发行与管理逻辑，为平台的资产数字化和链上管理提供核心技术支持。"
      ]
    },
    {
      title: "研究助理 - MartrixLab区块链",
      organization: "北京航空航天大学未来区块链与隐私计算高精尖创新中心",
      period: "2025.07 - 2025.12",
      tag: "Research",
      image: "asset/experience/buaa.png",
      summary:
        "方向：AI 赋能智能合约漏洞检测。参与论文 SmartAuditor 实验设计与撰写，已投递国际会议。",
      details: [
        "基于 Solidity 构建 AST 抽象语法树、CFG 控制流图多模态数据集。",
        "使用 GNN、BiGRU-Attention 优化合约语义理解与漏洞特征提取能力。"
      ]
    },
    {
      title: "大数据开发实习生",
      organization: "北京字节跳动科技有限公司 · 商业数据平台-数据应用与工程",
      period: "2024.01 - 2024.06",
      tag: "Data Engineer",
      image: "asset/experience/bytedance.png",
      summary:
        "参与广告业务离线数据仓库建设与实时数据流字段迭代，负责数据清洗与任务调度，保障广告数据链路的稳定运行。",
      details: [
        "支持 AD2.0 巨量引擎的广告策略产品的大数据存储、计算、分析与查询服务，提升数据可用性与分析效率。",
        "在实践中熟练掌握企业级大数据技术栈，包括离线与实时计算框架、数据仓库架构及调度系统（Apache Hive, Apache Spark 等）。"
      ]
    }
  ],
  competitions: [
    {
      badge: "Runner-up",
      title: "NTU x BASE Web3 Hackathon",
      meta: "赛事视角 · DND Character Generator · 2025-08-26",
      summary:
        "在 NTU x BASE Web3 Hackathon 中，以 DND Character Generator 原型完成主题化 Demo 展示，并于 2025 年 8 月 26 日获得 Runner-up。",
      details: [
        "证书、领奖现场与项目界面均已接入本页，能直接组成完整赛事回顾。",
        "从项目画面可以看出完整的奇幻主题视觉与生成结果展示。",
        "这是典型的短周期比赛作品，重点在于快速做出能讲清楚的原型。"
      ],
      images: [
        {
          src: "asset/hackathon/ntu-x-base/dnd-generator.png",
          alt: "NTU x BASE Web3 Hackathon 项目界面"
        },
        {
          src: "asset/hackathon/ntu-x-base/certificate.png",
          alt: "NTU x BASE Web3 Hackathon 获奖证书"
        },
        {
          src: "asset/hackathon/ntu-x-base/award-photo.jpg",
          alt: "NTU x BASE Web3 Hackathon 现场领奖照片"
        }
      ]
    },
    {
      badge: "BGA Reward Pool",
      title: "Solana Solar Mini Hacker House",
      meta: "赛事视角 · Fracted Payment Flow",
      summary:
        "围绕 Fracted 的支付体验制作 Payment Link Generator、支付页和用户流程展示，并保留了奖励池发放通知等比赛材料。",
      details: [
        "团队介绍页明确展示了成员分工与个人背景。",
        "已经完成支付参数生成、merchant order、支付成功回执等关键页面画面。",
        "聊天截图作为 reward pool 发放通知材料一并保留。"
      ],
      images: [
        {
          src: "asset/hackathon/solana-solar-mini-hacker-house/payment-link.png",
          alt: "Fracted Payment Link Generator 页面"
        },
        {
          src: "asset/hackathon/solana-solar-mini-hacker-house/merchant-order.png",
          alt: "Fracted Merchant Order 页面"
        },
        {
          src: "asset/hackathon/solana-solar-mini-hacker-house/payment-success.png",
          alt: "Fracted 支付成功用户流程页"
        },
        {
          src: "asset/hackathon/solana-solar-mini-hacker-house/team-slide.png",
          alt: "Fracted 技术团队介绍页"
        },
        {
          src: "asset/hackathon/solana-solar-mini-hacker-house/reward-message.jpg",
          alt: "Solana Solar 比赛奖励池通知聊天截图"
        }
      ]
    },
    {
      badge: "Concept Design",
      title: "TOKEN2049 Tokenization Proposal",
      meta: "文档视角 · web3Joeypouch",
      summary:
        "围绕高价值内容平台的 tokenization 方案，提出 web3Joeypouch：通过 Joey Token 激励内容创作、筛选和分发，把社交平台从 attention-driven 推向 value-driven。",
      details: [
        "提案围绕信息过载、创作者变现和优质内容激励三个核心问题展开。",
        "方案包含 ERC20 utility token、Base chain 选择与 tokenomics 设计。",
        "提案原文已经保存在 asset/hackathon/token2049 目录。"
      ],
      images: [
        {
          src: "asset/hackathon/token2049/image.png",
          alt: "web3Joeypouch 产品界面截图"
        },
        {
          src: "asset/hackathon/token2049/268dedd5f0bf9a7f0364ce2593d4d569.jpg",
          alt: "TOKEN2049 现场照片 1"
        },
        {
          src: "asset/hackathon/token2049/2894e7b4a69c84c14674cd3099793292.jpg",
          alt: "TOKEN2049 现场照片 2"
        }
      ],
      links: [
        {
          label: "查看提案文档",
          href: "asset/hackathon/token2049/web3Joeypouch Tokenization Project Proposal.md"
        }
      ]
    }
  ],
  projects: [
    {
      badge: "Product UI",
      title: "SETH Ecosystem Interface Suite",
      meta: "项目视角 · Dashboard / Explorer / Wallet / Agent Center",
      summary:
        "围绕 SETH 生态做了一组统一视觉的界面探索，覆盖 mint、explorer、mobile wallet 和 AI agent 管理页面，强调高识别度的暗色荧光语言。",
      details: [
        "5 张界面图全部接入页面，完整展示桌面端与移动端风格。",
        "统一 mint、账户、区块浏览器和 agent center 的组件语言。",
        "项目演示 PPT 已保存在 asset 根目录，可直接打开。"
      ],
      images: [
        {
          src: "asset/project/seth-export/agent-center.png",
          alt: "SETH Agent Center 页面"
        },
        {
          src: "asset/project/seth-export/mint-page.png",
          alt: "SETH Mint 页面"
        },
        {
          src: "asset/project/seth-export/telegram-setup.png",
          alt: "SETH Telegram Bot 配置页面"
        },
        {
          src: "asset/project/seth-export/explorer.png",
          alt: "SETH Explorer 页面"
        },
        {
          src: "asset/project/seth-export/mobile-wallet.png",
          alt: "SETH Mobile Wallet 界面"
        }
      ],
      links: [
        {
          label: "查看演示稿",
          href: "asset/seth-pitch-deck.pptx"
        }
      ]
    },
    {
      badge: "Payment UX",
      title: "Fracted Cross-chain Payment Flow",
      meta: "项目视角 · Payment Link Generator / Merchant Order / Receipt",
      summary:
        "把跨链支付流程拆成生成支付链接、填写 merchant order、完成支付回执三段式界面，适合在比赛或路演中快速解释产品逻辑。",
      details: [
        "界面从参数生成到交易完成形成闭环，降低展示成本。",
        "支付页和成功回执适合 demo 阶段讲清楚关键信息反馈。",
        "项目材料同时承担了团队介绍和用户流程解释两种任务。"
      ],
      images: [
        {
          src: "asset/hackathon/solana-solar-mini-hacker-house/payment-link.png",
          alt: "Fracted 支付链接生成器"
        },
        {
          src: "asset/hackathon/solana-solar-mini-hacker-house/merchant-order.png",
          alt: "Fracted 商户订单页面"
        },
        {
          src: "asset/hackathon/solana-solar-mini-hacker-house/payment-success.png",
          alt: "Fracted 支付成功页"
        },
        {
          src: "asset/hackathon/solana-solar-mini-hacker-house/team-slide.png",
          alt: "Fracted 技术团队介绍"
        }
      ]
    },
    {
      badge: "Web3 Product",
      title: "web3Joeypouch",
      meta: "项目视角 · Tokenized Social Platform Concept",
      summary:
        "尝试把内容平台做成 value-first 的社交产品：高价值内容创作者、筛选者和普通用户都能通过 Joey Token 获得直接激励。",
      details: [
        "产品叙事从问题定义、使用场景到 token utility 设计较完整。",
        "适合用作文档型项目与产品思考展示，不依赖单一界面截图支撑。",
        "界面截图和提案文档共同构成了概念验证材料。"
      ],
      images: [
        {
          src: "asset/hackathon/token2049/image.png",
          alt: "web3Joeypouch 产品截图"
        }
      ],
      links: [
        {
          label: "打开提案文档",
          href: "asset/hackathon/token2049/web3Joeypouch Tokenization Project Proposal.md"
        }
      ]
    }
  ],
  closingTags: [
    "关于我",
    "实习经历",
    "参与比赛",
    "项目经历",
    "Asset 已接入",
    "Dark Portfolio",
    "Hackathon Ready"
  ]
};

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

let revealObserver;
let sectionObserver;

function renderHeroMetrics(items) {
  heroMetrics.innerHTML = items
    .map(
      (item) => `
        <div class="metric-card">
          <span class="metric-value">${item.value}</span>
          <span class="metric-label">${item.label}</span>
        </div>
      `
    )
    .join("");
}

function renderSignalList(items) {
  signalList.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderParagraphs(items) {
  aboutParagraphs.innerHTML = items.map((item) => `<p>${item}</p>`).join("");
}

function renderFacts(items) {
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

function renderEducation(items) {
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

function renderFocus(items) {
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

function renderInternships(items) {
  internshipList.innerHTML = items
    .map(
      (item) => `
        <article class="experience-card reveal ${item.image ? "has-image" : ""}">
          ${
            item.image
              ? `
            <div class="experience-visual">
              <img src="${item.image}" alt="${item.title} 封面" loading="lazy">
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

function renderShowcases(container, items, options = {}) {
  const { autoplay = false } = options;

  container.innerHTML = items
    .map(
      (item, index) => `
        <article
          class="showcase-card reveal"
          data-gallery-card="${index}"
          data-gallery-autoplay="${autoplay}"
        >
          <div class="showcase-gallery">
            <div class="showcase-main">
              <img
                src="${item.images[0].src}"
                alt="${item.images[0].alt}"
                loading="lazy"
                data-gallery-main
              >
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
                      aria-label="切换到图片 ${imageIndex + 1}"
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

function renderClosingTags(items) {
  if (!closingTags) {
    return;
  }

  closingTags.innerHTML = items.map((item) => `<span class="tag">${item}</span>`).join("");
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

  const fullText = introName.dataset.text || "\u77BF\u5609\u8FB0";

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

function attachGalleryEvents() {
  const cards = document.querySelectorAll("[data-gallery-card]");
  
  cards.forEach((card) => {
    const mainImage = card.querySelector("[data-gallery-main]");
    const thumbButtons = [...card.querySelectorAll("[data-gallery-thumb]")];
    
    if (thumbButtons.length <= 1) return;

    let currentIndex = 0;
    let autoSlideInterval = null;
    let isUserInteracted = false;

    function goToSlide(index) {
      if (currentIndex === index && !mainImage.classList.contains("is-animating")) return;
      
      mainImage.classList.add("is-animating");
      
      setTimeout(() => {
        currentIndex = index;
        const button = thumbButtons[currentIndex];
        if (!button) return;

        mainImage.src = button.dataset.src;
        mainImage.alt = button.dataset.alt;

        thumbButtons.forEach((thumb) => thumb.classList.remove("is-active"));
        button.classList.add("is-active");

        mainImage.classList.remove("is-animating");
      }, 300);
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % thumbButtons.length;
      goToSlide(currentIndex);
    }

    function startAutoSlide() {
      if (isUserInteracted) return;
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(nextSlide, 2000);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    thumbButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        isUserInteracted = true;
        stopAutoSlide();
        goToSlide(index);
      });
    });

    card.addEventListener("mouseenter", stopAutoSlide);
    card.addEventListener("mouseleave", () => {
      if (!isUserInteracted) startAutoSlide();
    });

    // 初始启动
    startAutoSlide();
  });
}

function attachShowcaseGalleryEvents() {
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

    function nextSlide() {
      goToSlide((currentIndex + 1) % thumbButtons.length);
    }

    function startAutoSlide() {
      if (!shouldAutoplay) {
        return;
      }

      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }

      autoSlideInterval = setInterval(nextSlide, 2400);
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
  const sections = [...document.querySelectorAll("main section[id]")];

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

function init() {
  createParticleField();
  attachIntroSequence();
  renderHeroMetrics(
    data.heroMetrics.map((item) => ({
      ...item,
      value: item.value === "Runner-up" ? "亚军" : item.value,
      label:
        item.label === "Blockchain Technology MSc"
          ? "区块链技术硕士"
          : item.label === "Computer Science BSc"
            ? "计算机科学与技术学士"
            : item.label === "NTU x BASE Web3 Hackathon 路 2025-08-26"
              ? "NTU x BASE Web3 黑客松 · 2025-08-26"
              : item.label
    }))
  );
  renderSignalList(data.signalList);
  renderParagraphs(data.aboutParagraphs);
  renderFacts(data.aboutFacts);
  renderEducation(data.education);
  renderFocus(data.focus);
  renderInternships(data.internships);
  renderShowcases(competitionList, data.competitions, { autoplay: true });
  renderShowcases(
    projectList,
    data.projects.slice(0, 1).map((item) => ({
      ...item,
      links: []
    }))
  );
  renderClosingTags(data.closingTags);
  attachShowcaseGalleryEvents();
  attachRevealObserver();
  attachSectionObserver();
}

init();
