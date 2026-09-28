<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=190&section=header&text=Furqan%20Ahmad&fontSize=54&fontAlignY=36&desc=Full-Stack%20%26%20AI%20Engineer&descAlignY=58&descSize=18&fontColor=ffffff&animation=fadeIn" width="100%" />

<a href="https://furqan3.vercel.app/"><img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=20&duration=2600&pause=900&color=27AE60&center=true&vCenter=true&width=720&lines=I+ship+production+web+apps+and+the+AI+inside+them.;Next.js+%E2%80%A2+FastAPI+%E2%80%A2+PyTorch+%E2%80%A2+vLLM;RAG+%E2%80%A2+Object+Detection+%E2%80%A2+Voice+Agents;ML+Engineer+%40+Vision+Tech+360" alt="Typing intro" /></a>

<p>
<a href="https://furqan3.vercel.app/"><img src="https://img.shields.io/badge/Portfolio-furqan3.vercel.app-111?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" /></a>
<a href="https://www.linkedin.com/in/furqan-ktk/"><img src="https://img.shields.io/badge/LinkedIn-furqan--ktk-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="mailto:fahmad.ktk@gmail.com"><img src="https://img.shields.io/badge/Email-fahmad.ktk-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
<a href="https://furqan3.vercel.app/resume"><img src="https://img.shields.io/badge/Resume-View-27AE60?style=for-the-badge&logo=readdotcv&logoColor=white" alt="Resume" /></a>
</p>

<img src="https://komarev.com/ghpvc/?username=Furqan3&style=flat-square&color=27AE60&label=profile+views" alt="Profile views" />
<img src="https://img.shields.io/github/followers/Furqan3?style=flat-square&color=27AE60&labelColor=111&logo=github" alt="Followers" />

</div>

## 👋 About me

I'm a **Computer Engineer (NUST, Islamabad)** who builds complete products: the Next.js front end, the FastAPI back end, and the machine-learning models behind them.

- 🧠 **Machine Learning Engineer at [Vision Tech 360](https://furqan3.vercel.app/about):** RAG chatbots, real-time facial recognition across 50+ cameras, automated voice agents, and ML models served over FastAPI.
- 🛠️ **Freelance full-stack engineer:** e-commerce, healthcare, fintech and ed-tech sites that are live in production (see [shipped client work](#-shipped-client-work)).
- 🔬 **Research:** Ethereum L2 finality benchmarking for **Mitacs Globalink 2026**; hyperspectral object detection on Kaggle.
- 🏆 Six competition awards, including **two gold medals** and an **Indonesia Inventor Day special award**.

```yaml
llm_systems:      [RAG, hybrid retrieval, agentic workflows, local inference with vLLM]
computer_vision:  [object detection (YOLO, D-FINE, RT-DETR), face recognition, medical imaging]
voice:            [Whisper ASR, NLP, TTS, real-time dialogue]
web:              [Next.js, React, FastAPI, Node.js, WebSockets, Postgres, MongoDB, Redis]
ops:              [Docker, CI/CD, Nginx, PM2, DigitalOcean, Vercel]
```

## 🚀 Featured projects

<table>
<tr>
<td width="50%" valign="top">
<a href="https://furqan3.vercel.app/projects/dsdoctor"><img src="public/image/content/projects/dsdoctor/thumb.webp" alt="dsdoctor" width="100%" /></a>

### [dsdoctor](https://github.com/Furqan3/dsdoctor)
**Is this detection dataset safe to train on?** Finds train/val leakage, zero-area boxes, unnormalised coordinates and starved classes before you waste a GPU-day, then returns a verdict and an ordered fix plan. Findings come from deterministic detectors, not an LLM. Ships with 218 offline tests.

`Python` `Object Detection` `LLM Agents` `vLLM`
</td>
<td width="50%" valign="top">
<a href="https://furqan3.vercel.app/projects/ilm"><img src="public/image/content/projects/ilm/thumb.webp" alt="ilm" width="100%" /></a>

### [ilm](https://furqan3.vercel.app/projects/ilm)
**Ask all your data, and get the exact evidence.** A local multimodal knowledge engine over PDFs, slides, images, audio and video. Every answer cites the exact page, image or second of video it came from. Uses BM25, BGE-M3 and SigLIP 2 retrieval fused by rank, plus a multi-step query planner.

`FastAPI` `Next.js` `RAG` `SigLIP 2` `Whisper`
</td>
</tr>
<tr>
<td width="50%" valign="top">
<a href="https://furqan3.vercel.app/projects/hyperspectral-object-detection"><img src="public/image/content/projects/hyperspectral-object-detection/thumb.webp" alt="Hyperspectral object detection" width="100%" /></a>

### [Hyperspectral Object Detection 2026](https://furqan3.vercel.app/projects/hyperspectral-object-detection)
Detecting 18 classes in **16-band hyperspectral** night and street imagery on Kaggle, with a single model and no ensembles allowed. Adapted COCO-pretrained YOLO, RT-DETR, D-FINE, DINO and Co-DETR to 16 channels. D-FINE-S scored **0.710 mAP** on my own validation split and **0.658** on the public leaderboard.

`PyTorch` `D-FINE` `RT-DETR` `MMDetection`
</td>
<td width="50%" valign="top">
<a href="https://furqan3.vercel.app/projects/l2-finality-benchmark"><img src="public/image/content/projects/l2-finality-benchmark/thumb.webp" alt="L2 finality benchmark" width="100%" /></a>

### [Ethereum L2 Finality Benchmark](https://github.com/Furqan3/L2_benchmarking)
**Mitacs Globalink 2026** research. Measures when an L2 transaction is *really* final at three trust levels: sequencer receipt, batch posted to Ethereum, and proof or challenge window. **2,485 transactions** across 60 runs on zkSync and OP Stack, with an audit of every measurement.

`Python` `Ethereum` `zkSync` `Optimism`
</td>
</tr>
</table>

## 🌐 Shipped client work

| | Project | What I built | Stack |
|:-:|---|---|---|
| <img src="public/image/content/projects/athlix/thumb.webp" width="120" alt="Athlix" /> | **[Athlix](https://www.athlix.fit/)** | SaaS that generates AI recovery and injury-prevention plans for athletes, with Stripe billing | Next.js · FastAPI · GPT API · Stripe |
| <img src="public/image/content/projects/accountant-app/thumb.webp" width="120" alt="FilingHub" /> | **[FilingHub](https://filinghub.co.uk/)** | Dual-portal app connecting UK businesses with accountants, with real-time messaging | Next.js · TypeScript · Socket.io · PostgreSQL |
| <img src="public/image/content/projects/peptora-labs/thumb.webp" width="120" alt="Peptora Labs" /> | **[Peptora Labs](https://www.peptoralabs.com/)** | Headless e-commerce storefront with CMS-driven content and email flows | Next.js · Medusa.js · Storyblok · Klaviyo |
| <img src="public/image/content/projects/x-finance-bull/thumb.webp" width="120" alt="X Finance Bull" /> | **[X Finance Bull](https://xfinancebull.com/)** | Web3 and DeFi learning academy with courses, expert profiles and a leaderboard | Next.js · Storyblok · Supabase |
| <img src="public/image/content/projects/pulmonology-sleep-services/thumb.webp" width="120" alt="Pulmonology & Sleep" /> | **[Pulmonology & Sleep Services](https://www.pulmonologysleep.com/)** | Modern site for a board-certified medical practice in San Antonio | Next.js · Strapi · Supabase |

<details>
<summary><b>More projects</b> (ML, computer vision, blockchain)</summary>
<br/>

| Project | Summary | Stack |
|---|---|---|
| [Santander Transaction Prediction](https://github.com/Furqan3/santander-customer-transaction-prediction) | Kaggle binary classification on 200 anonymised features | LightGBM · XGBoost |
| [Multiclass CNN Classifier](https://github.com/Furqan3/ai_project) | Custom 6.3M-parameter CNN image classifier | TensorFlow · Keras |
| [Anomaly Detection System](https://github.com/Furqan3/Anomalies-detection) | Real-time network-security dashboard backed by an ML API | Flask · scikit-learn |
| [CBDC with FPGA](https://github.com/Furqan3/cbdc) | Central-bank digital currency on Hyperledger Fabric with FPGA crypto | Go · Hyperledger Fabric |
| [Histopathological Image Analysis](https://github.com/Furqan3/Histopathological-Images-Analysis) | U-Net segmentation of histopathology slides | TensorFlow · U-Net |
| [Braille Language Decoding](https://github.com/Furqan3/Braille-Language-Decoding) | Braille-to-English decoding with connected-component analysis | OpenCV |
| [Skin Lesion Classification](https://github.com/Furqan3/Skin-Lesion-Classification) | Melanoma detection with classical ML, 83% accuracy | OpenCV · scikit-learn |

All projects, with write-ups and screenshots, are on **[furqan3.vercel.app/projects](https://furqan3.vercel.app/projects)**.

</details>

## 💼 Experience

| Role | Company | When |
|---|---|---|
| **Machine Learning Engineer** | Vision Tech 360 · Islamabad | Jun 2024 – present |
| **Full-Stack & AI Engineer** | Freelance | Jan 2023 – present |
| Software Engineer Intern | IMAGE INC · Remote | Jun 2023 – Sep 2023 |
| IoT / Embedded Systems Intern | AIRLIFT Technologies · Islamabad | Feb 2022 – May 2022 |

## 🏆 Achievements

- 🥇 **1st Place, Gold Medal:** Fesmaro IT Business Competition (2025)
- 🥇 **1st Place, Gold Medal:** Tech & Trade Expo (2024)
- 🌟 **Special Award, Gold Medal and incubation offer:** Indonesia Inventor Day (2024)
- 🥈 **2nd Place, Silver Medal:** IdeaFest (2024)
- 🥉 **3rd Place, Bronze Medal:** Faculty of Engineering Most Outstanding Student (2025)
- 🚀 **Finalist:** Hackfest Build to Billion (2025)

## 🧰 Tech stack

<div align="center">

<img src="https://skillicons.dev/icons?i=python,typescript,javascript,cpp,go,bash&theme=dark" alt="Languages" /><br/>
<img src="https://skillicons.dev/icons?i=nextjs,react,tailwind,nodejs,fastapi,flask&theme=dark" alt="Web" /><br/>
<img src="https://skillicons.dev/icons?i=pytorch,tensorflow,opencv,sklearn&theme=dark" alt="AI and ML" /><br/>
<img src="https://skillicons.dev/icons?i=postgres,mongodb,redis,mysql,sqlite&theme=dark" alt="Databases" /><br/>
<img src="https://skillicons.dev/icons?i=docker,linux,nginx,githubactions,aws,vercel&theme=dark" alt="DevOps" />

</div>

## 📊 GitHub activity

<div align="center">

<img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Furqan3&theme=github_dark" height="160" alt="GitHub stats" />
<img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Furqan3&theme=github_dark" height="160" alt="Top languages" />

<img src="https://streak-stats.demolab.com?user=Furqan3&theme=dark&hide_border=true&ring=27AE60&fire=27AE60&currStreakLabel=27AE60" height="160" alt="Contribution streak" />

</div>

---

<details>
<summary><b>📁 About this repository</b>: the source of my portfolio site</summary>
<br/>

This repo powers **[furqan3.vercel.app](https://furqan3.vercel.app/)**, which is built with Next.js 15, Tailwind CSS 4 and Framer Motion.

- **Fully static:** every page, all project pages and the resume PDF are prerendered at build time, with no CMS or runtime data fetching.
- **Content lives in code:** projects, experience, achievements and bio are in [`data/content.js`](data/content.js). Images are in `public/image/content/`, and the resume is in [`app/resume/data.js`](app/resume/data.js).
- **Also includes** an AI chat widget, a Spotify "now playing" card on the About page, and a downloadable PDF resume at `/api/resume`.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static production build
```

To add a project, append an entry to `projects` in `data/content.js`, put its images in `public/image/content/projects/<slug>/`, and rebuild.

Based on the open-source [Alvalens portfolio template](https://github.com/Alvalens/Alvalens-porto-2-nextJs) · GPL-3.0.

</details>

<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12&height=100&section=footer" width="100%" />
</div>
