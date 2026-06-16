import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import Post from '../models/Post.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: resolve(__dirname, '../.env') })

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const usedSlugs = new Set()
function uniqueSlug(base) {
  let slug = base,
    i = 1
  while (usedSlugs.has(slug)) slug = `${base}-${++i}`
  usedSlugs.add(slug)
  return slug
}
function makeSlug(title) {
  return uniqueSlug(slugify(title))
}

function coverUrl(url) {
  if (!url) return undefined
  return { type: 'url', url }
}

const BLOGS = [
  // ── PROUD ─────────────────────────────────────────────────

  {
    slug: 'india-ai-impact-summit-2026',
    sections: ['proud', 'milestone'],
    title: 'India AI Impact Summit 2026',
    date: '16 February 2026',
    readTime: '2 min read',
    featured: true,
    thumbnailImage:
      'https://india.un.org/sites/default/files/styles/hero_header_2xl_1x/public/2026-02/G9aBAoKbUAArxmY.jpg?itok=Hp6TV10K',
    coverImage:
      'https://images.architectureplusdesign.in/wp-content/uploads/2025/06/13135327/ITPO-Front-Facade-Night-View-Hero-image-template-1920-x-840-pixel-1600x700.jpg',
    certificate: 'https://www.guvi.in/verify-certificate?id=07Zn4z5687Nj9Y1h11',
    linkedin:
      'https://www.linkedin.com/posts/theshambhavipandey_the-defenders-at-the-india-ai-impact-summit-activity-7429056681998942208-T0q5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
    resources: [
      {
        heading: 'Project Details',
        url: '/post/agentic-honeypot-system',
      },
    ],
    excerpt:
      'Bharat Mandapam looks magnificent from inside, especially after being invited by the Ministry of Electronics and Information Technology, Government of India.',
    content: `<h1>Grand Finalist, Top 2% at the India AI Impact Summit 2026.</h1>

<figure style="margin: 4rem 0;">
  <img
    src="/Top2.jpeg"
    alt="India AI Impact Summit 2026 Finalists"
    style="width:100%;border-radius:14px;border:1px solid rgba(255,255,255,0.08);box-shadow:0 20px 60px rgba(0,0,0,0.45);"
  />
  <figcaption style="margin-top:14px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:rgba(243,236,224,0.52);text-align:center;">
    India AI Impact Summit 2026 · Bharat Mandapam · New Delhi
  </figcaption>
</figure>

<p>My fourth and fifth semesters were spent entirely as an intern. When you spend that long building what others define, shipping what others approve, something starts to feel hollow. So the moment my fifth-semester exams ended, I went looking for a challenge on my own terms. The India AI Impact Buildathon by HCL GUVI offered exactly that: a well-defined problem, and total freedom in how you solved it. I had my team with me, as always — <strong>The Defenders.</strong></p>

<p>The competition had two problem statements. One involved AI voice detection — a familiar territory. So naturally, we picked the other one. Problem Statement 2: an Agentic AI Honeypot for Scam Detection. We chose it precisely because none of us had any idea how to build it.</p>

<p>We don't come from an AI background. We had never worked with agents, handoffs, or multi-agent orchestration. But one thing engineering had taught me was that you don't need to already know something to build it. Engineers are chameleons — they read, adapt, and figure it out as they go. So that's what we did. We spent the first stretch just learning: agentic systems, structured data extraction, orchestration logic, edge cases.</p>

<p>Over two days, we built a system using the OpenAI SDK capable of engaging with potential scammers while extracting meaningful intelligence from conversations. We spent more time thinking about system behavior and failure modes than writing features. It was the most honest kind of engineering — nothing to hide behind, just the problem and how well you understood it.</p>

<p>When submissions closed, we were at the top of the leaderboard. We had qualified for the Grand Finale.</p>

<p>Out of more than 38,000 participants across India, <strong>The Defenders</strong> were selected among the Top 850 teams. But we didn't know yet what that actually meant — that the finale was part of the India AI Impact Summit, or that we would be standing inside Bharat Mandapam. When the invitation arrived, we didn't quite believe it.</p>

<p>Bharat Mandapam felt unreal. Walking through halls that had hosted G20 delegates, past research showcases, startup founders, policymakers, and international delegates — the scale of it settled in slowly. We listened to people shaping the future of AI globally: researchers and industry leaders whose names we had previously only seen in papers or on LinkedIn.</p>

<p>But the most meaningful part wasn't the venue or the keynotes. It was the people we met. Students, developers, researchers, and builders from across the country, each with wildly different approaches to the same class of problems. That exchange — informal, unscheduled, sometimes just a conversation between sessions — was worth more than any prize.</p>

<p>We did not win. But I'm not sure that's the right metric for what happened. We had built something real, in a domain none of us knew, in two days, on our first attempt — and then stood on a national stage to defend it. There were moments where scaling down felt like the easy choice. But we didn't take them.</p>

<p>This wouldn't have been anything without the people I built it with. <strong>Tushar Singh, Madhav Singh, and Rajan Tiwari</strong> — thank you. Everyone talks about finding the right idea or the right mentor. Far fewer people talk about how rare it is to find teammates who actually care. I got lucky. The day I found a team willing to build, break, and grow together was already a win, long before any leaderboard.</p>

<p>And a genuine thank you to the HCL GUVI team for creating something that brought together this many serious builders under one roof. That's harder to do than it looks.</p>

<p>No matter what comes next, this one stays with me.</p>`,

    gallery: [
      {
        type: 'url',
        url: '/TheDefenders_2.jpeg',
        caption: 'The Defenders, Finalists India AI Impact Summit 2026.',
      },
      {
        type: 'url',
        url: '/TheDefenders_1.jpeg',
        caption: 'The Defenders at Bharat Mandapam',
      },
      {
        type: 'url',
        url: '/TheDefenders_3.jpeg',
        caption: 'The Defenders at Bharat Mandapam',
      },
      {
        type: 'url',
        url: '/GrandFinale.jpeg',
        caption: 'Welcome to the Grand Finale',
      },
    ],
  },

  {
    slug: 'code-clash-20',
    sections: ['proud', 'milestone'],
    title: 'Code Clash 2.0',
    date: '15 April 2026',
    readTime: '2 min read',
    thumbnailImage: '/Final Poster CODE CLASH 2.0.webp',
    coverImage: '/Code Clash 2.0 Banner.png',
    linkedin:
      'https://www.linkedin.com/posts/theshambhavipandey_mgm-code-clash-20-a-truly-unforgettable-activity-7451989390685548544-Lbay?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
    excerpt:
      'Led the revival of MGM Code Clash, organizing a competitive programming competition that brought together 115+ student participants under GDG MGMCoET.',
    content: `<h1>MGM Code Clash 2.0</h1>

<div style="display:flex;gap:16px;flex-wrap:wrap;margin:48px 0;">
  <div style="flex:1;min-width:180px;padding:24px;border-left:4px solid #c67b3d;background:rgba(198,123,61,0.05);border-radius:12px;">
    <div style="font-size:2rem;font-weight:700;color:#c67b3d;">115+</div>
    <div>Student Participants</div>
  </div>
  <div style="flex:1;min-width:180px;padding:24px;border-left:4px solid #c67b3d;background:rgba(198,123,61,0.05);border-radius:12px;">
    <div style="font-size:2rem;font-weight:700;color:#c67b3d;">2</div>
    <div>Competition Tracks</div>
  </div>
</div>

<div style="margin:48px 0;border:1px solid rgba(198,123,61,0.18);border-radius:18px;overflow:hidden;background:rgba(198,123,61,0.03);">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:rgba(198,123,61,0.06);border-bottom:1px solid rgba(198,123,61,0.15);">
    <div>
      <div style="font-weight:600;color:#c67b3d;">Official Event Website</div>
      <div style="font-size:0.85rem;opacity:.7;margin-top:2px;">Designed and developed by Team GDG MGMCoET</div>
    </div>
    <a href="https://mgm-code-clash-2-0.vercel.app/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;padding:8px 12px;border-radius:10px;border:1px solid rgba(198,123,61,0.25);background:rgba(198,123,61,0.08);color:#c67b3d;font-size:0.9rem;font-weight:500;">↗ Open Site</a>
  </div>
  <iframe src="https://mgm-code-clash-2-0.vercel.app/winners" width="100%" height="650" style="border:none;display:block;"></iframe>
  <div style="padding:14px;text-align:center;border-top:1px solid rgba(198,123,61,0.12);background:rgba(198,123,61,0.03);">
    <a href="https://mgm-code-clash-2-0.vercel.app" target="_blank" rel="noopener noreferrer" style="text-decoration:none;color:#c67b3d;font-weight:500;">View Full Website ↗</a>
  </div>
</div>

<p>My journey with GDG began in my second year of engineering. During that time, I learned from senior organizers who showed me what it meant to build and sustain a developer community. Their dedication left a lasting impression on me.</p>

<p>Code Clash was the flagship event of the GDG MGMCoET 2024–25 session and one of the community's biggest successes. In 2025, I had the privilege of becoming the <strong>GDG MGMCoET Co-Organizer</strong>, taking on the responsibility of leading a community that had become deeply meaningful to me.</p>

<p>The year was far from easy. Administrative hurdles, semester examinations, scheduling conflicts, and limited resources constantly challenged our plans. Rather than slowing down, we adapted. Much of our work moved online, where we organized a wide range of technical and career-focused initiatives including a three-day JavaScript workshop, Agentic AI sessions, LinkedIn profile-building workshops, GitHub sessions, Google Cloud Jams, and more.</p>

<p>By our sixth semester, we finally found a brief window to execute larger ideas. We successfully organized a quiz competition for first-year students, which gave us confidence to aim higher. Inspired by that momentum, our team proposed something much more ambitious: bringing back Code Clash.</p>

<p>At first, the idea faced resistance. There were concerns around logistics, timelines, and funding. The proposal was pushed back multiple times before eventually receiving support from our faculty, college administration, and our sponsorship partner, <strong>Kickr Technology</strong>.</p>

<p>The weeks leading up to the event were some of the busiest of the year. Nights were spent building the event website, preparing practice materials, designing question sets, writing test cases, and troubleshooting platform issues. During the day, we promoted the competition across classrooms, coordinated with faculty members, reached out to sponsors, and conducted problem-solving sessions to help students prepare.</p>

<p>When we first visited classrooms to announce the event, the response was underwhelming. Attendance projections looked uncertain, and many of us quietly wondered whether our efforts would pay off. But as registration deadlines approached, the momentum began to shift.</p>

<p>What started with doubt eventually became one of our proudest moments. More than <strong>100 students registered</strong>, and on the day of the event, <strong>115+ participants</strong> joined us.</p>

<p>The turnout exceeded our expectations so significantly that we had to secure an additional laboratory to accommodate everyone. Walking through those rooms and seeing students immersed in solving problems made every late night worthwhile. Every solved challenge, every earned chocolate, every sticker handed out, and every conversation reflected the excitement we had hoped to create.</p>

<p>Faculty members visited throughout the competition, encouraging participants and appreciating the effort behind the event. Their support reminded us that student-led initiatives truly matter.</p>

<p>The event concluded with our Principal presenting awards to the top performers across both competition tracks, marking a fitting end to months of planning and teamwork.</p>

<p>More than anything, Code Clash 2.0 reinforced a belief I have carried throughout my engineering journey: students in tier-3 colleges possess immense potential. What they often need is not talent, but opportunity, mentorship, and a platform to showcase their abilities.</p>

<p>None of this would have been possible without the incredible team that worked tirelessly behind the scenes. Every team member, mentor, faculty member, and participant played a role in making the event a success.</p>

<p>No matter where my career takes me next, Code Clash 2.0 will remain one of the experiences I am most proud of.</p>`,

    gallery: [
      { type: 'url', url: '/CodeClash_1.jpg', caption: 'MGM Code Clash 2.0' },
      { type: 'url', url: '/CodeClash_2.jpg', caption: 'Team GDG MGMCoET' },
      { type: 'url', url: '/CodeClash_3.jpg', caption: 'Faculty Visit' },
      {
        type: 'url',
        url: '/CodeClash_4.jpg',
        caption: 'Shambhavi Pandey, Co-Organizer GDG MGMCoET',
      },
    ],
  },

  {
    slug: 'first-hackathon-win-cdac-noida',
    sections: ['proud', 'milestone'],
    title: 'First Hackathon | First Win | CDAC Noida',
    date: '7 February 2025',
    readTime: '1 min read',
    thumbnailImage:
      'https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/jobs-sentinalassam/media/media_files/2025/06/28/cdac-recruitment-2025-1-2025-06-28-07-46-55.png',
    coverImage:
      'https://www.puredome.com/hs-fs/hubfs/cover%20(3)-1.webp?width=864&height=486&name=cover%20(3)-1.webp',
    excerpt:
      'A second-year student, a cybersecurity bootcamp, and a DeepFake detection system that earned second place at CDAC Noida.',
    linkedin:
      'https://www.linkedin.com/posts/theshambhavipandey_exciting-achievement-at-cdac-noidas-cybersecurity-activity-7294348438664605696-RrFb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
    resources: [
      {
        heading: 'Project Details',
        url: '/post/realtime-deepfake-detector',
      },
    ],
    content: `<h1>Winning My First Hackathon at CDAC Noida</h1>

<p>At the end of my second semester, I was selected for the Securing Networks and Devices Bootcamp conducted by CDAC Noida. It was my first serious exposure to cybersecurity, and I knew immediately that I wanted to make the most of the opportunity.</p>

<p>The bootcamp brought together around thirty students from different institutions and academic backgrounds. Most participants were pursuing postgraduate studies or specializing in cybersecurity, while I was still a first-year engineering student trying to absorb concepts that were completely new to me.</p>

<p>Being the only girl representing my college could have felt intimidating, but CDAC created an environment that was welcoming, supportive, and deeply inspiring. Beyond the lectures and workshops, I was surrounded by people who genuinely enjoyed solving problems and building meaningful technology.</p>

<p>One session in particular left a lasting impression on me. A military cybersecurity expert shared a recent case involving criminals who used AI-generated deepfake video calls to impersonate a child and extort money from their parents. The story was unsettling, but it also highlighted how rapidly emerging technologies can be misused.</p>

<p>A few days later, participants were asked to build a cybersecurity-focused project as part of a hackathon challenge. While brainstorming ideas, that deepfake case resurfaced in our discussions. We realized that detecting manipulated video content in real time could be both technically challenging and socially impactful.</p>

<p>Our team decided to build a <strong>Real-Time DeepFake Detection System</strong>. To demonstrate the concept, we first developed a video-calling application capable of streaming live video. We then integrated a machine learning model that analyzed incoming video frames and attempted to identify deepfake content, alerting users whenever manipulation was detected.</p>

<p>The project pushed us well beyond our comfort zones. Over the course of a week, we learned new tools, experimented with different approaches, and spent long hours refining both the technical implementation and the final presentation.</p>

<p>When demonstration day arrived, the response from the judges was encouraging. They asked thoughtful technical questions, challenged our assumptions, and appreciated the practical relevance of the problem we were trying to solve. When the final results were announced, our team secured <strong>Second Place</strong>.</p>

<p>Winning was exciting, but the feedback session that followed was equally valuable. The jury explained that while our solution addressed a genuine cybersecurity concern, the competition's primary focus was network security. They helped us identify gaps in our approach and suggested ways the project could be expanded.</p>

<p>That conversation taught me an important lesson: great engineering is not only about building something impressive, but also about understanding the exact problem space and constraints you are working within.</p>

<p>Looking back, the most meaningful part of the experience was not the prize or the recognition. It was the people I met, the friendships I formed, and the confidence I gained. For the first time, I experienced what it felt like to collaborate with talented individuals who were passionate about using technology to solve real-world problems.</p>

<p>My time at CDAC Noida strengthened my interest in cybersecurity, introduced me to hackathons, and showed me the kind of engineer I wanted to become. It remains one of the defining milestones of my journey.</p>

<p>No matter how many projects I build in the future, I will always remember the experience that started it all.</p>`,

    gallery: [
      {
        type: 'url',
        url: '/CDAC_1.jpeg',
        caption: 'Presenting our Real-Time DeepFake Detection System',
      },
      {
        type: 'url',
        url: '/CDAC_2.jpeg',
        caption: 'Receiving Second Prize at CDAC Noida',
      },
      {
        type: 'url',
        url: '/CDAC_4.jpeg',
        caption: 'With the Jury and Organizing Team',
      },
      {
        type: 'url',
        url: '/CDAC_3.jpeg',
        caption: 'With Mentors and Fellow Participants',
      },
    ],
  },

  {
    slug: 'winners-at-bharat-shiksha-expo-ipec-tbi',
    sections: ['proud', 'milestone'],
    title: 'Winners at Bharat Shiksha Expo | IPEC-TBI',
    date: '24 April 2025',
    readTime: '1 min read',
    certificate:
      'https://drive.google.com/file/d/1c6GWXV2eo5n3b7s5QM432cZ2V7MVTDUX/view?usp=sharing',
    linkedin:
      'https://www.linkedin.com/posts/theshambhavipandey_thedefenders-hackathon2025-ipectbi-activity-7321934045783756800-wAL_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
    resources: [
      {
        heading: 'Project Details',
        url: '/post/realtime-deepfake-detector',
      },
    ],
    thumbnailImage: '/Bharat Siksha Expo.webp',
    excerpt:
      'A registration form, a long journey, and an unexpected podium finish.',
    content: `<h2>Winners at Bharat Shiksha Expo</h2>

<p>There are some events you spend weeks preparing for.</p>

<p>This wasn't one of them.</p>

<p>When our college announced a hackathon being organized during Bharat Shiksha Expo 2025, I honestly wasn't very interested. I filled out the registration form more out of obligation than excitement and didn't think much about it afterward.</p>

<p>Then we got selected.</p>

<p>Suddenly, what felt like a routine registration became a real opportunity.</p>

<p>Getting to the venue wasn't exactly effortless either. The event was being held at India Expo Centre, Greater Noida, and attending came with its own set of logistical challenges. Still, my team and I decided to show up and give it our best shot. Sometimes growth begins with simply saying yes to something you weren't planning to do.</p>

<p>Walking into the venue, I was immediately struck by the scale of the event. Students from different colleges across Delhi NCR had gathered to present their ideas, compete, learn, and network. The atmosphere was energetic, competitive, and filled with the kind of excitement that only exists when hundreds of ambitious students are placed in the same building.</p>

<p>Our team, The Defenders, presented our project before the judging panel. Like every team there, we believed in our idea, but believing in something and defending it under scrutiny are two very different things.</p>

<p>As we presented, answered questions, and explained our decisions, I found myself constantly wondering whether our work would stand out among the many impressive projects around us.</p>

<p>Then came the results. Third Place.</p>

<p>For a few seconds, it didn't quite register.</p>

<p>I had walked into the event hoping we might win something. Walking out with an actual podium finish felt surreal. The excitement, relief, and pride all arrived at once. Every discussion, every preparation session, and every challenge along the way suddenly felt worth it.</p>

<p>But the award wasn't the only memorable part of the day.</p>

<p>One of the things I enjoyed most was meeting other students and hearing about the projects they were building. Conversations that started with "What are you working on?" quickly turned into discussions about technology, startups, hackathons, and ideas that could become future projects. Some of the most valuable takeaways from events like these aren't found on stage but in the casual conversations happening between presentations.</p>

<p>Looking back, this experience taught me something simple but important: opportunities don't always arrive wrapped in excitement.</p>

<p>Sometimes they begin as forms you almost don't fill out.</p>

<p>Sometimes they're events you don't particularly want to attend.</p>

<p>And sometimes, those unexpected decisions end up becoming some of your favorite memories.</p>

<p>I'm grateful to my teammates, the organizers, and everyone who made the event possible.</p>

<p>Most of all, I'm glad I decided to show up.</p>

<p>Because if I hadn't, this story would never have existed.</p>`,

    gallery: [
      {
        type: 'url',
        url: '/IPEC_4.jpeg',
        caption: 'Welcome Ceremony, IPEC TBI',
      },
      { type: 'url', url: '/IPEC_5.jpeg', caption: 'Presenting on stage' },
      {
        type: 'url',
        url: '/IPEC_1.jpeg',
        caption: 'Award Ceremony, Bharat Siksha Expo 2025',
      },
      { type: 'url', url: '/IPEC_3.jpeg', caption: 'Awards and Accolades' },
    ],
  },

  // ── FAILED ────────────────────────────────────────────────

  {
    slug: 'anuvadak',
    sections: ['failed', 'experiment'],
    title: 'Anuvadak',
    readTime: '1 min read',
    date: '15 January 2026',
    thumbnailImage:
      'https://lokalise.com/uploads/medium_Google_Translate_featured_blog_post_visual_4e2ec17e12.webp',
    resources: [
      {
        heading: 'Github',
        url: 'https://github.com/The-ShambhaviPandey/Polygot',
      },
      { heading: 'LingoDev', url: 'https://lingo.dev/en' },
    ],
    excerpt:
      'An attempt to build a browser extension capable of translating entire websites in real time. The project failed, but it revealed important limitations of browser extensions and became the foundation for a better idea.',
    content: `<h2>Anuvadak - A Website Translator</h2>

<p>Anuvadak was an experiment born during a hackathon organized by Lingo.dev. The challenge was simple: build something useful using their localization platform. While exploring ideas, I became fascinated by a question:</p>

<p><i>What if any website could be translated instantly into a user's preferred language?</i></p>

<p>The vision was to create a browser extension that could scan a webpage, identify visible text, translate it, and replace the original content without requiring developers to modify their websites.</p>

<h3>The Goal</h3>

<p>I wanted Anuvadak to work on any website. A user would install the extension, select a language, and the page would automatically appear translated. At least that was the plan.</p>

<h3>What Went Wrong</h3>

<p>As development progressed, I realized I had misunderstood parts of the Lingo.dev workflow. The platform was designed primarily for localization within applications rather than translating arbitrary third-party websites through a browser extension.</p>

<p>Even when translations were generated successfully, modifying website content reliably turned out to be far more difficult than expected. Modern websites constantly update their DOM structure, load content dynamically, and use frameworks that make direct manipulation unpredictable.</p>

<p>The extension worked inconsistently across different sites and frequently broke whenever pages re-rendered themselves.</p>

<h3>Why I Stopped</h3>

<p>After several attempts, it became clear that continuing with the same approach would not solve the underlying problem. The limitation was not just in my implementation but in the assumptions behind the project itself.</p>

<p>Rather than spending more time forcing the idea to work with the wrong tool, I decided to stop development and rethink the solution from scratch.</p>

<h3>What I Learned</h3>

<ul>
<li>Not every technology is designed for every use case.</li>
<li>Browser extensions have significant limitations when interacting with complex modern websites.</li>
<li>Understanding a platform's intended workflow is just as important as understanding its API.</li>
<li>Failing early is often better than spending months chasing an architectural dead end.</li>
</ul>

<h3>The Next Step</h3>

<p>Although Anuvadak failed, the core idea never left me. Instead of abandoning website translation entirely, I started working on a new version of the concept. Polyglot explored a different technical approach and replaced Lingo.dev with Google Translate APIs. While Anuvadak never became a finished product, it served an important purpose: it exposed the flaws in my original assumptions and pointed me toward a better direction.</p>

<p>Sometimes a failed project is not a waste of time. Sometimes it is simply research disguised as failure.</p>`,
  },

  {
    slug: 'clausebuddy-enhancement',
    sections: ['failed'],
    title: 'ClauseBuddy: Lessons Beyond the Prototype',
    readTime: '1 min read',
    date: '18 December 2025',
    thumbnailImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc967P2730FV7bxC_XErvSIcSl5OhFJZ7Llg&s',
    coverImage:
      'https://sitescdn.wearevennture.co.uk/public/gleeson-recruitment/mediahub/istock-1720641220-38cf19b507f04f879b2ade0b621b7721.jpg',
    resources: [
      {
        heading: 'Github',
        url: 'https://github.com/The-ShambhaviPandey/ClauseBuddy-JS-Version',
      },
      { heading: 'Original Project', url: '/post/clausebuddy-legal-ai' },
    ],
    excerpt:
      'An attempt to evolve a legal AI prototype into a production-ready application, ultimately halted by deployment complexities and AI inference costs.',
    content: `<h2>Clausebuddy Enhancement</h2>

<p>ClauseBuddy was a Legal AI assistant originally developed during the Google Gen AI Exchange Program using TypeScript, Python, InLegalBERT, and Gemini to simplify the interpretation of legal clauses and documents.</p>

<p>After the program concluded, I decided to continue developing the project independently. My goal was to improve both the deployment architecture and the quality of the generated responses, transforming it from a hackathon-style prototype into a more production-ready application.</p>

<p>One of the first challenges was maintaining communication between multiple backend services during deployment. To simplify the architecture and streamline backend development, I migrated the codebase from TypeScript to JavaScript, refactoring the application to make it more hosting-friendly and easier to maintain.</p>

<p>Alongside these architectural improvements, I enhanced the response pipeline by introducing stricter filtering mechanisms and refining the answer-generation process to provide more reliable legal assistance.</p>

<p>Despite these improvements, the project eventually reached a significant limitation. ClauseBuddy relied heavily on the Gemini free-tier API for inference. As usage restrictions increased and the free-tier availability changed, sustaining the project became economically impractical. The rising costs associated with large language model inference highlighted an important reality of AI product development: building an effective solution is only one part of the challenge; ensuring that it remains financially sustainable is equally critical.</p>

<p>Although the enhancement phase was ultimately discontinued, the experience provided valuable lessons in microservice deployment, backend architecture decisions, AI system optimization, and the often-overlooked importance of evaluating the long-term scalability and operational costs of AI-powered applications.</p>

<p>Sometimes, projects do not fail because the technology doesn't work. They fail because the economics behind maintaining them no longer make sense. ClauseBuddy taught me that successful software engineering requires balancing innovation with sustainability.</p>`,
  },

  // ── OBSESSING ─────────────────────────────────────────────

  {
    slug: 'hypervisor',
    sections: ['obsessing'],
    title: 'Hypervisors and the Invisible Architecture of the Internet',
    readTime: '1 min read',
    date: '15 March 2026',
    thumbnailImage:
      'https://images.unsplash.com/vector-1761074483084-ec628a7624b6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    resources: [
      {
        heading: 'AWS Hypervisor Docs',
        url: 'https://aws.amazon.com/what-is/hypervisor/',
      },
    ],
    excerpt:
      'A deep dive into virtualization, cloud infrastructure, and the technology quietly powering modern computing.',
    content: `<h2>Hypervisor</h2>

<p>My journey into Cloud and DevOps started innocently enough. I wanted to understand how applications moved from "it works on my machine" to running reliably for thousands of users. Naturally, this led me into containers, virtual machines, orchestration, infrastructure, and the endless rabbit holes that engineers willingly throw themselves into.</p>

<p>One of the concepts that immediately caught my attention was the hypervisor.</p>

<p>At first glance, it seemed simple: software that allows multiple operating systems to share the same physical hardware. But the deeper I explored, the more fascinating it became. Hypervisors sit at the boundary between hardware and software, abstracting physical resources into isolated environments that power modern cloud computing.</p>

<p>I found myself diving into the differences between Type 1 (bare-metal) and Type 2 (hosted) hypervisors, understanding why cloud providers rely heavily on virtualization, and exploring how technologies like KVM, VMware ESXi, and Hyper-V make large-scale infrastructure possible.</p>

<img
  src="https://cloudification.io/wp-content/uploads/2025/03/kvm4-scaled.webp"
  alt="KVM Hypervisor Diagram"
  style="width:100%;border-radius:14px;border:1px solid rgba(255,255,255,0.08);box-shadow:0 20px 60px rgba(0,0,0,0.45);"
/>

<p>The deeper I went, the more I realized that cloud computing is built upon layers of abstraction. Applications run inside containers. Containers run on operating systems. Operating systems run inside virtual machines. Virtual machines are managed by hypervisors. Hypervisors ultimately depend on physical hardware hidden away in data centers around the world.</p>

<p>Understanding hypervisors fundamentally changed how I think about infrastructure. It transformed cloud platforms from magical black boxes into carefully engineered systems designed to maximize efficiency, isolation, and scalability.</p>

<p>This remains one of those topics I continuously revisit. Every new concept in DevOps eventually seems to trace back to virtualization in some form. What began as curiosity about deployment evolved into a deeper appreciation for the invisible layers that make modern software possible.</p>

<p>Sometimes, the most interesting part of technology isn't the application users interact with. It's the infrastructure quietly ensuring that everything keeps running.</p>`,
  },

  {
    slug: 'thunder-client',
    sections: ['obsessing'],
    title: 'Thunder Client',
    readTime: '1 min read',
    date: '22 April 2026',
    thumbnailImage:
      'https://files.cdn-files-a.com/uploads/11310197/800_68f5d1d44fa75.png',
    resources: [
      {
        heading: 'Thunder Client Docs',
        url: 'https://docs.thunderclient.com/',
      },
    ],
    excerpt:
      "Exploring whether Thunder Client's lightweight, VS Code-first approach is changing how I test APIs.",
    content: `<h1>Has Thunder Client Replaced Postman?</h1>

<p>For the longest time, API testing and Postman felt inseparable. It was simply the default recommendation whenever someone mentioned backend development. Need to test an endpoint? Use Postman. Need authentication workflows? Postman. Need collections? Also Postman.</p>

<p>Then I discovered Thunder Client.</p>

<p>Initially, I installed it because I wanted a lightweight alternative that lived directly inside VS Code. I expected convenience. What I didn't expect was how much it would streamline my development workflow.</p>

<p>The appeal was immediate. No separate application to launch. No switching between windows. No waiting for another Electron application to consume enough memory to question my life choices. Everything existed alongside my codebase.</p>

<p>As I worked on backend projects, Thunder Client became my preferred way to test APIs during development. Creating requests, managing environments, testing authentication flows, and organizing collections felt surprisingly straightforward. For individual projects and rapid iteration, the integration with VS Code removed just enough friction to noticeably improve the development experience.</p>

<p>This led me to a bigger question: <strong>Has Thunder Client actually replaced Postman?</strong></p>

<p>I don't think the answer is universal.</p>

<p>For enterprise collaboration, extensive API documentation, automated testing pipelines, and large teams sharing complex collections, Postman still offers a more mature ecosystem. It has evolved far beyond being just an API client.</p>

<p>However, for solo developers, students, and developers focused primarily on building and debugging APIs during active development, Thunder Client presents a compelling alternative. It embraces simplicity without sacrificing the features most developers use daily.</p>

<p>What fascinated me wasn't just the tool itself, but how much developer experience matters. Two applications can solve the exact same problem, yet small differences in workflow can dramatically influence productivity and enjoyment.</p>

<p>Thunder Client reminded me that choosing tools isn't about finding the objectively "best" option. It's about reducing friction between ideas and execution.</p>

<p>At the moment, Thunder Client hasn't completely replaced Postman for the industry.</p>

<p>But for me? It replaced the habit of opening another application just to send a GET request.</p>

<p>Sometimes, obsession isn't about discovering revolutionary technology. Sometimes it's appreciating tools that quietly make building software a little more enjoyable.</p>`,
  },

  {
    slug: 'stranger-things',
    sections: ['obsessing'],
    title: 'Stranger Things',
    readTime: '1 min read',
    date: '27 December 2025',
    thumbnailImage:
      'https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTWGrLjDUXHyZZwVT2_kjTXOq8nF8IBgEL5Gp3i97xghSCY3z5nsAKDRMm5qmQ9KNUFFnbWufml7YIz9hVHDoBxpqsrKS_S-VS_5.jpg?r=94b',
    coverImage:
      'https://www.ilm.com/wp-content/uploads/2025/09/StrangerThings-5_KeyArt-aspect-ratio-2.7-1.jpg',
    excerpt:
      'My friends made me watch the first season forcefully. I binge-watched the rest in 24 hours.',
    content: `<h1>Stranger Things</h1>

<p>For the longest time, I resisted watching Stranger Things.</p>

<p>My friends had been recommending it for years. They insisted I would love it. I insisted they were wrong. This delicate balance of stubbornness continued until they collectively decided that my opinion no longer mattered and practically forced me to watch the first season.</p>

<p>Unfortunately for my dignity, they were right.</p>

<p>What started as "I'll just watch one season so everyone stops bothering me" quickly transformed into "one more episode" syndrome. Before I knew it, I had somehow consumed the remaining seasons within the next 24 hours, sacrificing sleep, productivity, and any illusion that I had self-control.</p>

<p>What surprised me wasn't just the supernatural mystery or the nostalgia of the 1980s setting. It was the characters.</p>

<p>At its core, Stranger Things is a story about friendship. About ordinary people trying to protect each other despite fear, uncertainty, and circumstances far beyond their understanding. Whether it was the loyalty between the original friend group, the evolving dynamics between the older characters, or the chaotic energy of characters who somehow became fan favorites overnight, the relationships carried the show.</p>

<p>The series also mastered something difficult: balancing genres. Horror existed alongside humor. High-stakes action coexisted with awkward teenage moments. The story could be emotionally devastating in one episode and completely absurd in the next.</p>

<p>Most importantly, it reminded me why recommendations from friends matter.</p>

<p>Sometimes the people around us understand our tastes better than we do. Sometimes they know exactly which stories will resonate with us, even when we stubbornly refuse to believe them.</p>

<p>I went into Stranger Things expecting to prove everyone wrong.</p>

<p>Instead, I emerged sleep-deprived, emotionally invested, and impatiently waiting for more. 😭📺</p>

<p>I also developed the completely normal habit of becoming emotionally attached to fictional characters while constantly fearing the writers would ruin my mental stability. Which, to be fair, seems to be the intended viewing experience. 🤡</p>

<p>No spoilers, but Steve Harrington's character development deserves its own academic paper. 👑🛹</p>

<p>This isn't me promoting Stranger Things or insisting everyone should watch it. I spent years resisting it purely out of stubbornness, so I would be a massive hypocrite.</p>

<p>But if you've been putting it off because "it's probably overhyped," maybe give the first few episodes a chance. Worst case scenario, you prove me wrong. Best case scenario, you accidentally binge multiple seasons while wondering where your sleep schedule went.</p>

<p>Humanity may never solve the problem of people refusing genuinely good recommendations from their friends. In my case, peer pressure happened to be remarkably effective. 💀</p>

<hr />

<h2>Trailer</h2>

<p>If you're still undecided, here's the trailer that started millions of people down the path of becoming emotionally invested in a group of kids fighting interdimensional horrors while somehow still dealing with homework.</p>

<div style="margin-top:2rem;border-radius:1rem;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06);">
  <iframe
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/b9EkMc79ZSU"
    title="Stranger Things Official Trailer"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="display:block;border:none;min-height:300px;"
  ></iframe>
</div>

<p style="margin-top:1rem;text-align:center;font-style:italic;">Warning: Side effects may include intense emotional investment, irrational attachment to fictional characters, and an inexplicable desire to protect Dustin Henderson at all costs.</p>`,
  },

  // ── MILESTONES ────────────────────────────────────────────

  {
    slug: 'google-gen-ai-exchange',
    sections: ['milestone'],
    title: 'Google Gen AI Exchange',
    date: '22 September 2025',
    readTime: '1 min read',
    thumbnailImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeK2rwhwxWHAB0yHwoYY2zvnPFG9yhMNcPEw&s',
    coverImage:
      'https://h2svision.github.io/publicAssets/genai_exchange/banner-desktop.png',
    excerpt:
      'My journey with Google Cloud, Generative AI frameworks, and building practical AI-first solutions.',
    resources: [{ heading: 'ClauseBuddy', url: '/post/clausebuddy-legal-ai' }],
    content: `<h1>Google Gen AI Exchange</h1>

<p>The Google Gen AI Exchange Program marked one of my first opportunities to explore Generative AI beyond tutorials and theoretical concepts.</p>

<p>Until then, much of my experience with AI had been observational. I understood the excitement surrounding large language models and emerging frameworks, but I wanted to understand what it actually meant to build AI-powered applications that solved real problems.</p>

<p>This program became that opportunity.</p>

<p>Throughout the experience, I explored the foundations of Google Cloud services, Generative AI workflows, and the practical challenges involved in integrating large language models into software products. More importantly, it shifted my perspective from simply consuming AI tools to actively building with them.</p>

<p>One of the most rewarding outcomes of the program was developing ClauseBuddy, a Legal AI assistant designed to simplify the interpretation of legal clauses and documents. The project combined traditional software engineering principles with modern AI capabilities, requiring careful consideration of prompt engineering, response quality, backend architecture, and user experience.</p>

<p>Building ClauseBuddy taught me that developing AI applications extends far beyond connecting an API to a user interface. Effective AI products require thoughtful system design, evaluation mechanisms, cost considerations, and continuous iteration to deliver meaningful value.</p>

<p>The program also introduced me to a community of learners and builders who were equally curious about the rapidly evolving AI landscape. Being surrounded by individuals experimenting with new ideas reinforced the importance of staying adaptable in a field that changes almost daily.</p>

<p>Looking back, the Google Gen AI Exchange Program represented more than just a learning experience or an addition to my resume.</p>

<p>It was the point where AI transformed from an interesting technology trend into a domain I genuinely wanted to explore further.</p>

<p>The experience strengthened my confidence in building AI-first solutions and encouraged me to approach emerging technologies with both curiosity and practicality. It reminded me that the most valuable skill in technology is not mastering a single tool, but developing the ability to continuously learn, adapt, and create.</p>

<p>This milestone ultimately became the foundation for many of my later explorations in AI engineering, cloud technologies, and the intersection between intelligent systems and real-world problem solving.</p>

<p>Sometimes, a single opportunity doesn't just teach you new skills. It changes the direction of what you choose to build next.</p>

<h3>Certificate</h3>

<p>
Completing the Google Gen AI Exchange Program was an important milestone in my transition from learning about AI to actively building AI-powered solutions. Here's the LinkedIn post where I shared about the journey:
</p>

<div style="
  display: flex;
  justify-content: center;
  margin: 4rem 0;
">
  <div style="
    width: 100%;
    max-width: 550px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.08);
  ">
    <iframe
      src="https://www.linkedin.com/embed/feed/update/urn:li:share:7417604415194497025?collapsed=1"
      height="700"
      width="100%"
      frameborder="0"
      allowfullscreen
      title="Google Gen AI Exchange Program LinkedIn Post"
      style="
        display: block;
        width: 100%;
        border: none;
      "
    ></iframe>
  </div>
</div>`,
  },

  {
    slug: 'how-many-hackathons-are-enough',
    sections: ['milestone', 'obsessing'],
    title: 'How Many Hackathons Are Enough?',
    date: '2 May 2026',
    readTime: '3 min read',
    thumbnailImage:
      'https://s3.in-west2.purestore.io/uptoskills/blog/images/1765904191853-332328269-hackathon.jpg',
    excerpt:
      'Hackathons taught me to build under pressure, solve real problems, and ship within constraints. Every single one changed me.',
    content: `<h2>How Many Hackathons Are Enough?</h2>

<p>My first hackathon taught me something I hadn't experienced in a classroom setting: ideas only matter when you build them.</p>

<p>Since then, I've participated in dozens of hackathons. Different themes, different teammates, different levels of sleep deprivation. Yet every single one taught me something new.</p>

<p>Hackathons force you to think differently.</p>

<p>You don't have weeks to perfect an architecture diagram or endlessly debate technology choices. You have limited time, limited resources, and a problem that needs solving. Eventually, you stop chasing perfection and start focusing on execution.</p>

<p>That mindset has shaped the way I approach software engineering.</p>

<p>Hackathons taught me how to <strong>build under pressure</strong>. They taught me how to identify the core of a problem, eliminate unnecessary complexity, and ship solutions within a bounded timeframe. More importantly, they taught me that learning happens fastest when you're actively creating.</p>

<p>Every hackathon introduces something unfamiliar.</p>

<p>Sometimes it's a new technology stack. Sometimes it's working with people from completely different backgrounds. Sometimes it's understanding a problem domain you've never explored before. Regardless of the outcome, you walk away with new perspectives and experiences that extend far beyond winning.</p>

<p>People often ask, <em>"How many hackathons are enough?"</em></p>

<p>For me, the answer is simple: <strong>there isn't one.</strong></p>

<p>As long as there are interesting problems to solve, people to collaborate with, and opportunities to build something meaningful in a short period of time, there will always be another hackathon worth participating in.</p>

<p>Hackathons have genuinely changed my life.</p>

<p>They pushed me outside my comfort zone. They introduced me to incredible communities of builders. They transformed my confidence from <em>"I think I can do this"</em> into <em>"I can figure it out."</em> They taught me that shipping imperfect solutions teaches you more than endlessly planning perfect ones.</p>

<p>Not every hackathon ended with a prize.</p>

<p><strong>But every hackathon ended with growth.</strong></p>

<p>So if you're hesitant about participating because you don't feel experienced enough, don't wait. You don't join hackathons because you already know everything. You join them because they accelerate the process of learning.</p>

<ul>
  <li><strong>Build under pressure.</strong></li>
  <li><strong>Solve real problems.</strong></li>
  <li><strong>Ship within constraints.</strong></li>
  <li><strong>Repeat.</strong></li>
</ul>

<p>Because sometimes, the best way to grow as an engineer isn't another tutorial or another course.</p>

<p>It's 36 hours, a team of determined people, too much caffeine, and the stubborn belief that you can build something that matters.</p>`,

    gallery: [
      { type: 'url', url: '/SAM_1.jpeg' },
      { type: 'url', url: '/SAM_2.jpeg' },
      { type: 'url', url: '/IPEC_5.jpeg' },
      { type: 'url', url: '/IPEC_1.jpeg' },
    ],
  },

  // ── EXPERIMENTS ───────────────────────────────────────────

  {
    slug: 'agentic-honeypot-system',
    sections: ['experiment'],
    title: 'Agentic Honeypot System',
    date: '16 February 2026',
    readTime: '4 min read',
    thumbnailImage:
      'https://india.un.org/sites/default/files/styles/hero_header_2xl_1x/public/2026-02/G9aBAoKbUAArxmY.jpg?itok=Hp6TV10K',
    coverImage:
      'https://images.architectureplusdesign.in/wp-content/uploads/2025/06/13135327/ITPO-Front-Facade-Night-View-Hero-image-template-1920-x-840-pixel-1600x700.jpg',
    excerpt:
      'Building an AI-powered honeypot that engages scammers, extracts intelligence, and transforms wasted conversations into actionable insights.',
    certificate: 'https://www.guvi.in/verify-certificate?id=07Zn4z5687Nj9Y1h11',
    linkedin:
      'https://www.linkedin.com/posts/theshambhavipandey_the-defenders-at-the-india-ai-impact-summit-activity-7429056681998942208-T0q5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
    resources: [
      {
        heading: 'Github',
        url: 'https://github.com/The-ShambhaviPandey/Agentic-HoneyPot',
      },
      { heading: 'Live', url: 'https://agentic-honeypot-xvzd.onrender.com' },
      {
        heading: 'Tester',
        url: 'https://agentic-honeypot-web-tester.onrender.com',
      },
      { heading: 'Summit Post', url: '/post/india-ai-impact-summit-2026' },
    ],
    content: `<h2>Can AI Waste a Scammer's Time Better Than Humans Can?</h2>

<p>That question became the starting point for <strong>Agentic Honeypot</strong>.</p>

<p>Traditional approaches to scam prevention are largely defensive. Block suspicious numbers. Warn users. Filter messages. But scammers continuously adapt, making reactive solutions increasingly ineffective.</p>

<p>We wondered if there was another approach.</p>

<p>Instead of immediately terminating scam interactions, what if an AI system could engage scammers autonomously, behave like a genuine victim, extract actionable intelligence, and ultimately reduce the time scammers spend targeting real people?</p>

<p>That idea evolved into Agentic Honeypot, an autonomous multi-agent system designed to detect scams, sustain believable conversations, and collect forensic intelligence in real time.</p>

<h3>Designing Beyond Detection</h3>

<p>Building the system required solving two very different problems simultaneously:</p>

<ul>
  <li>Accurately identifying scam attempts.</li>
  <li>Maintaining natural conversations that encouraged scammers to reveal useful information.</li>
</ul>

<p>We divided these responsibilities across specialized agents.</p>

<p>The <strong>Lookup Agent</strong> focused exclusively on detection. Using GPT-4o-mini, it classified incoming conversations based on indicators such as urgency tactics, OTP requests, impersonation attempts, suspicious payment requests, and fraudulent investment offers.</p>

<p>Once a scam was detected, the <strong>Handler Agent</strong> assumed control of the interaction.</p>

<p>This agent became one of the most interesting engineering challenges of the project. It needed to sound believable without becoming repetitive, ask investigative follow-up questions naturally, adapt its strategy as conversations progressed, and maximize intelligence gathering without prematurely ending the interaction.</p>

<figure style="margin:4rem 0;">
  <img
    src="/Architecture Flow.png"
    alt="Architecture of the Agentic Honeypot System"
    style="width:100%;border-radius:14px;border:1px solid rgba(255,255,255,0.08);box-shadow:0 20px 60px rgba(0,0,0,0.45);"
  />
  <figcaption style="margin-top:14px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:rgba(243,236,224,0.52);text-align:center;">
    Architecture of the Agentic Honeypot System
  </figcaption>
</figure>

<h3>Turning Conversations Into Intelligence</h3>

<p>The system also needed to transform unstructured conversations into structured intelligence. To achieve this, we developed an extraction pipeline capable of identifying and deduplicating:</p>

<ul>
  <li>Phone numbers</li>
  <li>Bank account details</li>
  <li>UPI IDs</li>
  <li>Phishing URLs</li>
  <li>Email addresses</li>
  <li>Reference and employee identifiers</li>
</ul>

<p>This information was continuously stored within session memory, allowing the system to monitor progress toward intelligence collection objectives while preserving conversational context.</p>

<h3>Building Under Constraints</h3>

<p>Like most hackathon projects, Agentic Honeypot was built within strict time constraints. We implemented schema validation using Zod, secured endpoints using API key authentication, maintained session state in memory, and introduced webhook-based reporting to generate structured outputs that could integrate with downstream systems.</p>

<p>Every decision balanced speed of execution against long-term maintainability.</p>

<h3>Recognition Beyond The Prototype</h3>

<p>The project ultimately became a <strong>Grand Finalist</strong>, placing within the <strong>Top 2% nationally</strong> at the <strong>AI Impact Buildathon</strong> organized by HCL and GUVI, with presentations taking place at the India AI Summit 2026 held at Bharat Mandapam.</p>

<h3>What This Experiment Taught Me</h3>

<p>Agentic Honeypot fundamentally changed how I think about AI systems. I learned that building with large language models extends far beyond prompting. Effective AI applications require thoughtful orchestration, robust validation layers, careful session management, and mechanisms for transforming generated outputs into actionable information.</p>

<p>More importantly, I realized that some of the most interesting applications of AI are not about replacing humans. They're about amplifying our ability to respond to increasingly sophisticated problems.</p>

<p>Sometimes experimentation isn't about proving that something will work perfectly. Sometimes it's about discovering what becomes possible when you ask a different question.</p>`,
  },

  {
    slug: 'agentic-honeypot-tester',
    sections: ['experiment'],
    title: 'Agentic Honeypot Tester',
    date: '16 February 2026',
    readTime: '4 min read',
    thumbnailImage:
      'https://india.un.org/sites/default/files/styles/hero_header_2xl_1x/public/2026-02/G9aBAoKbUAArxmY.jpg?itok=Hp6TV10K',
    excerpt:
      'Building a benchmarking suite to answer the hardest question in AI systems: Does it actually work consistently?',
    certificate: 'https://www.guvi.in/verify-certificate?id=07Zn4z5687Nj9Y1h11',
    linkedin:
      'https://www.linkedin.com/posts/theshambhavipandey_the-defenders-at-the-india-ai-impact-summit-activity-7429056681998942208-T0q5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
    resources: [
      {
        heading: 'Github',
        url: 'https://github.com/The-ShambhaviPandey/Agentic-HoneyPot-Tester',
      },
      {
        heading: 'Live',
        url: 'https://agentic-honeypot-web-tester.onrender.com',
      },
      { heading: 'Honeypot System', url: '/post/agentic-honeypot-system' },
    ],
    content: `<h2>Who Tests The AI Designed To Catch Scammers?</h2>

<p>Building the Agentic Honeypot system was only half the challenge. The bigger question emerged shortly afterward:</p>

<p><strong>How do we know if it actually works?</strong></p>

<p>Traditional software testing relies on predictable inputs and deterministic outputs. Agentic systems operate differently. Responses vary between interactions, conversational paths evolve naturally, and success depends on multiple dimensions beyond simple correctness.</p>

<p>I realized that building an AI system without an evaluation framework meant operating entirely on assumptions. That realization led to the creation of the <strong>Agentic Honeypot Tester</strong>, an automated benchmarking suite designed to systematically evaluate honeypot APIs across realistic scam scenarios.</p>

<h3>Moving Beyond "It Works On My Machine"</h3>

<p>The tester was designed to simulate scam interactions, validate responses, monitor callbacks, measure engagement quality, and generate structured performance scores automatically.</p>

<h3>Designing For Repeatability</h3>

<p>The system introduced nine standardized scam scenarios, including:</p>

<ul>
  <li>Bank fraud</li>
  <li>UPI scams</li>
  <li>Job scams</li>
  <li>Crypto investment fraud</li>
  <li>Utility disconnection threats</li>
  <li>Refund scams</li>
  <li>Loan fraud</li>
  <li>Tech support impersonation</li>
  <li>Delivery phishing attacks</li>
</ul>

<h3>Two Interfaces, One Evaluation Philosophy</h3>

<p>The <strong>CLI Tester</strong> focused on local development and automation workflows. The <strong>Web Tester</strong> emphasized accessibility and visualization through a browser-based dashboard.</p>

<h3>Defining Success For Agentic Systems</h3>

<ul>
  <li><strong>Detection Accuracy:</strong> Did the system correctly identify scams?</li>
  <li><strong>Intelligence Collection:</strong> Did it extract actionable forensic indicators?</li>
  <li><strong>Engagement Quality:</strong> Did conversations remain believable and useful?</li>
  <li><strong>Structural Reliability:</strong> Did outputs conform to expected contracts?</li>
</ul>

<hr />

<h3>Interactive Web Tester</h3>

<p>To make evaluation more accessible, I developed a browser-based interface that allows users to simulate scam scenarios, monitor honeypot interactions, review callbacks, and analyze benchmarking results without requiring command-line expertise.</p>

<div style="margin-top:2rem;border-radius:1rem;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06);">
  <iframe
    src="https://agentic-honeypot-web-tester.onrender.com"
    title="Agentic Honeypot Tester Live Demo"
    loading="lazy"
    style="width:100%;height:min(800px,85vh);min-height:600px;border:none;display:block;"
  ></iframe>
</div>

<p style="margin-top:1rem;text-align:center;">
  <a href="https://agentic-honeypot-web-tester.onrender.com" target="_blank" rel="noopener noreferrer" style="font-weight:600;">
    Open Live Demo in New Tab →
  </a>
</p>

<h3>What This Experiment Taught Me</h3>

<p>Developing intelligent systems is exciting. Evaluating intelligent systems is essential.</p>

<p>Without rigorous benchmarking, it becomes impossible to distinguish genuine improvements from anecdotal successes.</p>

<p><strong>If you can't evaluate it, you probably don't understand it well enough to improve it.</strong></p>`,
  },

  {
    slug: 'clausebuddy-legal-ai',
    sections: ['experiment'],
    title: 'ClauseBuddy - Legal AI',
    date: '18 October 2025',
    readTime: '4 min read',
    thumbnailImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc967P2730FV7bxC_XErvSIcSl5OhFJZ7Llg&s',
    coverImage:
      'https://sitescdn.wearevennture.co.uk/public/gleeson-recruitment/mediahub/istock-1720641220-38cf19b507f04f879b2ade0b621b7721.jpg',
    excerpt:
      'Exploring how domain-specific embeddings and retrieval systems can make legal documents more accessible and understandable.',
    resources: [
      {
        heading: 'Github',
        url: 'https://github.com/The-ShambhaviPandey/ClauseBuddy',
      },
      { heading: 'Enhancement Journey', url: '/post/clausebuddy-enhancement' },
      {
        heading: 'Certificate',
        url: 'https://certificate.hack2skill.com/legacy/2025H2S08GH-P801947',
      },
      { heading: 'Presentation', url: '/pdf/Prompt_Pirates.pdf' },
    ],
    content: `<h2>Can Legal Documents Be Made Easier To Understand?</h2>

<p>Legal documents are designed to be precise. Unfortunately, precision often comes at the expense of accessibility.</p>

<p>Contracts, policies, agreements, and legal notices are frequently dense, lengthy, and difficult to navigate, especially for individuals without legal training. Finding specific clauses or understanding the implications of certain provisions can become both time-consuming and overwhelming.</p>

<p>I wanted to explore whether recent advances in Generative AI and retrieval systems could help bridge this gap. That exploration became <strong>ClauseBuddy</strong>.</p>

<h3>Moving Beyond Generic Chatbots</h3>

<p>One of the earliest realizations during development was that general-purpose language models alone were insufficient for this problem. Legal language contains domain-specific terminology, nuanced interpretations, and contextual dependencies that demand greater precision than traditional conversational use cases.</p>

<p>Instead of relying solely on prompting, I designed ClauseBuddy around a retrieval-augmented workflow combining semantic search with large language models.</p>

<p>The goal: <strong>Allow users to upload legal documents, ask natural language questions, and receive responses grounded in the source material.</strong></p>

<h3>Building The Retrieval Pipeline</h3>

<p>For vector representation, I utilized <strong>InLegalBERT</strong>, a domain-specific transformer model trained on legal corpora. Generated embeddings were stored and indexed using <strong>FAISS</strong>, enabling efficient similarity searches across document sections.</p>

<div style="margin:3rem 0;text-align:center;">
  <img
    src="/Prompt Pirates.png"
    alt="ClauseBuddy Process Flow Diagram"
    style="width:100%;max-width:900px;height:auto;object-fit:contain;"
  />
  <p style="margin-top:1rem;font-size:0.9rem;font-style:italic;">
    ClauseBuddy's retrieval-augmented generation pipeline combining document processing, semantic search, and LLM-powered reasoning.
  </p>
</div>

<h3>Combining Retrieval With Generation</h3>

<p>Once relevant clauses were retrieved, <strong>Google Gemini</strong> was used for downstream reasoning tasks including document summarization, clause interpretation, question answering, and context-aware explanations.</p>

<h3>Engineering Across Multiple Technologies</h3>

<p>ClauseBuddy evolved into a multi-service application spanning TypeScript, JavaScript, Python, React, Node.js, FAISS, MongoDB, Gemini, and InLegalBERT. While technically rewarding, coordinating these components introduced challenges involving deployment complexity, service communication, and operational overhead. Those challenges ultimately became some of the most valuable lessons of the project.</p>

<h3>What This Experiment Taught Me</h3>

<p>Model selection matters. Retrieval quality matters. Architecture decisions matter. User trust matters.</p>

<p>Building reliable AI applications requires much more than integrating an API endpoint. It requires thoughtful engineering decisions that balance accuracy, usability, scalability, and cost.</p>

<p>Sometimes the most impactful applications of AI aren't about generating something entirely new. Sometimes they're about helping people better understand what already exists.</p>

<hr />

<h3>Project Presentation</h3>

<div style="margin-top:2rem;border-radius:1rem;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06);">
  <iframe
    src="/pdf/Prompt_Pirates.pdf#toolbar=0"
    title="ClauseBuddy Presentation"
    style="width:100%;height:min(700px,80vh);min-height:500px;border:none;display:block;"
  ></iframe>
</div>

<p style="margin-top:1rem;text-align:center;">
  <a href="/pdf/Prompt_Pirates.pdf" target="_blank" rel="noopener noreferrer" style="font-weight:600;">
    View Presentation in Full Screen →
  </a>
</p>`,
  },

  {
    slug: 'realtime-deepfake-detector',
    sections: ['experiment'],
    title: 'Realtime Deepfake Detector',
    date: '10 February 2025',
    readTime: '5 min read',
    thumbnailImage:
      'https://www.ofcom.org.uk/siteassets/resources/images/-news-centre/thumbnail-images/misc/abstract/deepfake-web.jpg?width=1920&height=577&quality=80',
    coverImage:
      'https://www.ofcom.org.uk/siteassets/resources/images/-news-centre/thumbnail-images/misc/abstract/deepfake-web.jpg?width=1920&height=577&quality=80',
    excerpt:
      'Exploring whether deepfakes can be identified during live video calls before trust is compromised.',
    resources: [
      {
        heading: 'Github',
        url: 'https://github.com/The-ShambhaviPandey/Realtime-DeepFake-Detection-Project',
      },
      { heading: 'CDAC Win', url: '/post/first-hackathon-win-cdac-noida' },
    ],
    content: `<h2>Can We Detect Deepfakes Before The Call Ends?</h2>

<p>As deepfake generation techniques continue to improve, distinguishing between authentic and manipulated video content is becoming increasingly difficult.</p>

<p>Most existing solutions approach this problem retrospectively. Videos are recorded, uploaded, analyzed, and eventually classified after the interaction has already occurred.</p>

<p>I wanted to explore a different question: <strong>Can deepfakes be detected while the conversation is still happening?</strong></p>

<p>That question became the foundation of our Real-Time Deepfake Detection System developed during the CDAC Noida Cybersecurity Hackathon 2025.</p>

<h3>Moving Detection Into The Communication Pipeline</h3>

<p>Instead of analyzing pre-recorded content, we aimed to integrate detection capabilities directly into a live video calling pipeline without disrupting the user experience. The system continuously analyzed video frames during active calls, classifying visible faces as either <strong>Real</strong> or <strong>Deepfake</strong>, all while the conversation remained ongoing.</p>

<h3>Designing The Real-Time Pipeline</h3>

<div style="margin:3rem 0;text-align:center;">
  <img
    src="/Working Process.png"
    alt="Realtime Deepfake Detection System Architecture"
    style="width:100%;max-width:900px;height:auto;object-fit:contain;"
  />
  <p style="margin-top:1rem;font-size:0.9rem;font-style:italic;">
    End-to-end architecture of the real-time deepfake detection pipeline.
  </p>
</div>

<p>A Node.js backend handled video communication using WebSockets, enabling low-latency frame transmission between participants. Individual frames were forwarded to a Flask-based inference server. The deepfake detection model, developed using PyTorch, performed binary classification to determine whether the observed facial content appeared authentic or synthetically manipulated.</p>

<h3>Research Beyond The Hackathon</h3>

<p>Our work was developed further into a research paper that has been accepted for publication and is currently progressing through the publishing pipeline.</p>

<p>Some projects answer immediate technical questions. Others uncover larger questions worth investigating further. This project became both.</p>

<h3>What This Experiment Taught Me</h3>

<p>Model performance alone is never sufficient. Latency matters. Infrastructure matters. Adversarial robustness matters. Real-world constraints often determine whether an otherwise impressive model becomes practically useful.</p>

<p>Sometimes the most important security systems are not the ones that react after damage has occurred. They're the ones capable of responding while trust is still intact.</p>

<hr />

<h3>Project Presentation</h3>

<div style="margin-top:2rem;border-radius:1rem;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06);">
  <iframe
    src="/pdf/REAL_TIME_DEEPFAKE_DETECTOR.pdf#toolbar=0"
    title="Realtime Deepfake Detector Presentation"
    style="width:100%;height:min(700px,80vh);min-height:500px;border:none;display:block;"
  ></iframe>
</div>

<p style="margin-top:1rem;text-align:center;">
  <a href="/pdf/REAL_TIME_DEEPFAKE_DETECTOR.pdf" target="_blank" rel="noopener noreferrer" style="font-weight:600;">
    View Presentation in Full Screen →
  </a>
</p>`,
  },

  {
    slug: 'mausam-weather-forecasting-app',
    sections: ['experiment'],
    title: 'Mausam - Weather Forecasting App',
    date: '22 March 2023',
    readTime: '4 min read',
    thumbnailImage:
      'https://wmo.int/sites/default/files/styles/hero_image_desktop_1x/public/2023-02/50732578156_938448bb41_k.jpg?h=7c0b8785&itok=RCyO5VfM',
    coverImage:
      'https://wmo.int/sites/default/files/styles/hero_image_desktop_1x/public/2023-02/50732578156_938448bb41_k.jpg?h=7c0b8785&itok=RCyO5VfM',
    excerpt:
      'Exploring how weather applications can move beyond utility and become immersive experiences.',
    resources: [
      { heading: 'Live Demo', url: 'https://mausam-4b8j.onrender.com/' },
      {
        heading: 'Github',
        url: 'https://github.com/The-ShambhaviPandey/Mausam',
      },
      { heading: 'OpenWeather API', url: 'https://openweathermap.org/api' },
    ],
    content: `<h2>What If Weather Apps Felt Like Weather?</h2>

<p>Most weather applications are designed around efficiency. Open the app. Check the temperature. See if you need an umbrella. Close the app. They provide information effectively, but rarely create an experience.</p>

<p>I wanted to explore a different approach: <strong>What if a weather application could capture not only what the weather is, but also how it feels?</strong></p>

<p>That question became the foundation of <strong>Mausam</strong>, a responsive weather forecasting application designed to blend real-time meteorological data with immersive visual storytelling.</p>

<h3>Designing Beyond Utility</h3>

<p>The application dynamically transforms its visual identity based on current weather conditions, time of day, and user location. Clear skies bring brighter environments. Rain introduces entirely different moods. Day and night transitions reshape the interface to better reflect the world outside the screen.</p>

<h3>Building Around Real-Time Data</h3>

<p>The application aggregates current weather conditions, air quality metrics, and multi-day forecast information to provide a comprehensive overview of environmental conditions. Users can explore temperature, humidity, wind speed, UV index, air quality, hourly forecasts, and seven-day predictions.</p>

<h3>Creating Frictionless Interactions</h3>

<p>The application supports browser-based geolocation to automatically retrieve local weather information. For manual searches, a city suggestion engine powered by OpenWeather's geocoding services provides responsive recommendations as users type. Debouncing strategies minimize redundant API requests.</p>

<h3>What This Experiment Taught Me</h3>

<p>Mausam fundamentally changed how I think about frontend development. Technical correctness matters. Performance matters. Accessibility matters. But delight matters too.</p>

<p>Sometimes the difference between a functional product and a memorable one lies in the small decisions that prioritize user experience alongside technical implementation.</p>

<p>Because sometimes software shouldn't just tell you that it's raining outside. Sometimes it should help you feel the rain too.</p>`,
  },

  // ── EXPERIENCES ───────────────────────────────────────────

  {
    slug: 'business-curative-internship',
    sections: ['experience'],
    title: 'Software Development Engineer Intern — Business Curative',
    date: 'May 2025 – December 2025',
    readTime: '3 min read',
    excerpt:
      'Progressed from Frontend Developer Intern to SDE 1, building production-grade MERN applications and owning seller-facing platform features.',
    resources: [
      { heading: 'Live Platform', url: 'https://aestheticommerce.com/' },
      {
        heading: 'Promotion Announcement',
        url: 'https://www.linkedin.com/posts/theshambhavipandey_sde-1-certification-activity-7416507274761764865-Toiy',
      },
    ],
    content: `<h2>From Frontend Intern To Software Development Engineer</h2>

<p>In May 2025, I joined Business Curative as a Frontend Developer Intern, focusing primarily on building intuitive and responsive user experiences for the company's eCommerce platform.</p>

<p>At the time, my goal was straightforward: write clean code, learn from experienced developers, and contribute wherever I could. What I didn't anticipate was how quickly this opportunity would accelerate my growth as an engineer.</p>

<h3>Building User Experiences That Matter</h3>

<p>During the early stages of the internship, I worked extensively on frontend development, translating business requirements into functional and user-friendly interfaces. This involved creating responsive components, improving user workflows, and ensuring a seamless experience across different sections of the platform.</p>

<blockquote>Good engineering isn't just about making systems work. It's about making them usable.</blockquote>

<h3>Growing Into Full Stack Ownership</h3>

<p>In August 2025, I was promoted to <strong>Software Development Engineer (SDE 1)</strong>, expanding my responsibilities into full stack ownership.</p>

<p>One of my most significant contributions was developing the <strong>Seller Panel</strong> from scratch:</p>

<ul>
  <li>Designing seller onboarding and account management workflows.</li>
  <li>Building product listing and inventory management systems.</li>
  <li>Developing dashboards with analytics and operational insights.</li>
  <li>Creating seller profile management features.</li>
  <li>Implementing tools that streamlined seller operations.</li>
</ul>

<p>Alongside this, I contributed extensively to the <strong>Admin Panel</strong>, building interfaces and functionality that enabled efficient management of users, products, and platform operations.</p>

<h3>Learning Through Production Systems</h3>

<p>As the platform moved closer to launch, my involvement expanded beyond feature development. I participated in deployment processes, supported CI/CD workflows, assisted during production releases, and helped resolve post-launch issues.</p>

<p>Following the internship, I was offered a part-time Software Development role, which I continued through December 2025. Supporting software used by real customers introduced challenges that tutorials and personal projects rarely simulate.</p>

<h3>Key Milestones</h3>

<ul>
  <li>My first professional software engineering experience.</li>
  <li>My first promotion based on demonstrated impact and ownership.</li>
  <li>My first exposure to end-to-end product development.</li>
  <li>My first experience working with production deployments and CI/CD processes.</li>
  <li>My first opportunity to support software used by real customers.</li>
  <li>And, admittedly, my first salary as a software engineer.</li>
</ul>

<blockquote>Growth in engineering often begins when you're willing to take responsibility for problems beyond your job description.</blockquote>

<p>Business Curative wasn't simply my first internship. It was where I began evolving from someone who builds features into someone learning how to build products.</p>`,

    gallery: [
      {
        type: 'url',
        url: '/SDE_3.jpeg',
        caption: 'Presenting AesthetiCommerce at JMI E-Cell',
      },
      {
        type: 'url',
        url: '/SDE_2.jpeg',
        caption: 'Team Tree Plantation Initiative at Business Curative',
      },
      { type: 'url', url: '/SDE_1.jpeg', caption: 'Business Curative Team' },
    ],
  },

  {
    slug: 'women-techmakers-ambassador',
    sections: ['experience', 'proud'],
    title: 'Ambassador — Google Women Techmakers',
    date: 'December 2025 – Present',
    readTime: '3 min read',
    thumbnailImage: 'https://miro.medium.com/1*-_zVpHOYFZgtzasKTJF8Pw.jpeg',
    coverImage:
      'https://media.licdn.com/dms/image/v2/C511BAQET1gQldLlKug/company-background_10000/company-background_10000/0/1583930998127/women_techmakers_islamabad_cover?e=2147483647&v=beta&t=OntL15aiPP-xfNWyScAQZvnUM9Cd3qQGN0N7Mi2IUgo',
    excerpt:
      'From attending DevFest as a curious learner to mentoring young innovators through Technovation Girls and Women Techmakers initiatives.',
    resources: [
      {
        heading: "International Women's Day 2026",
        url: 'https://www.linkedin.com/posts/theshambhavipandey_iwd2026-breakthepattern-womenintech-activity-7435691796070010880-8Znf',
      },
    ],
    content: `<h2>Discovering A Community That Inspires Change</h2>

<p>Before becoming a Women Techmakers Ambassador, I was simply a student attending community events, trying to understand where I fit within the larger technology ecosystem.</p>

<p>One of those experiences was attending GDG DevFest Noida. Listening to developers, community leaders, and speakers share their journeys introduced me to something I hadn't fully appreciated before: the power of communities built around encouragement, mentorship, and representation.</p>

<p>Through those experiences, I discovered Women Techmakers and became increasingly curious about the impact the initiative was creating around the world.</p>

<h3>Choosing To Become An Ambassador</h3>

<p>Rather than applying immediately, I wanted to understand what the program truly represented. I spoke with existing Women Techmakers Ambassadors, connected with GDG organizers, and learned about the experiences of individuals involved within the community.</p>

<p>Across every conversation, certain themes remained constant: mentorship, advocacy, leadership, and creating opportunities for others to grow. Those values strongly resonated with me.</p>

<h3>Mentoring Through Technovation Girls</h3>

<p>I had the opportunity to mentor more than five teams across both Junior and Senior divisions. These students weren't simply building applications. They were identifying problems within their communities and designing solutions they believed could create meaningful impact.</p>

<p>As a mentor, I supported teams with problem identification, project planning, technical guidance, presentation preparation, and building confidence throughout the journey.</p>

<p>The experience taught me that mentorship is rarely about having every answer. More often, it's about helping others realize that they are capable of finding those answers themselves.</p>

<h3>Celebrating International Women's Day 2026</h3>

<p>Through Women Techmakers initiatives, I also had the opportunity to participate in International Women's Day 2026 celebrations alongside ambassadors, community organizers, and women leaders from diverse backgrounds.</p>

<p>Meeting women who are leading teams, conducting research, building companies, and driving community initiatives has been one of the most inspiring aspects of this journey.</p>

<h3>What This Experience Has Taught Me</h3>

<p>Women Techmakers has expanded my understanding of leadership and mentorship. It has shown me that creating impact isn't always about large-scale achievements. Sometimes, impact begins with encouraging someone to ask questions, supporting them through challenges, or helping them believe they belong in spaces they once found intimidating.</p>

<p>Most importantly, it has reinforced that representation matters. Seeing someone with experiences similar to your own succeed can fundamentally change what you believe is possible for yourself.</p>

<p>I joined Women Techmakers hoping to learn from inspiring individuals. Becoming an Ambassador gave me the opportunity to contribute toward ensuring that more aspiring innovators have access to the same encouragement, mentorship, and community that inspired me.</p>`,

    gallery: [
      {
        type: 'url',
        url: '/WTM_4.jpeg',
        caption: 'IWD 2026-Break The Pattern',
      },
      { type: 'url', url: '/WTM_1.jpeg', caption: 'WTM Season Begins' },
      {
        type: 'url',
        url: '/WTM_2.jpeg',
        caption: 'My Technovation Team in Judging Round',
      },
      { type: 'url', url: '/WTM_3.jpeg', caption: 'IWD 2026-GDG Brussels' },
    ],
  },

  {
    slug: 'gdg-mgmcoet-community-work',
    sections: ['experience'],
    title: 'Co-Organizer — GDG MGMCoET',
    date: 'August 2025 – Present',
    readTime: '3 min read',
    thumbnailImage:
      'https://media.licdn.com/dms/image/v2/D563DAQEJmi6MCukCig/image-scale_191_1128/image-scale_191_1128/0/1727971457588/gdg_mgmcoet_cover?e=1782021600&v=beta&t=WxJwdZNENCgAhIdYOmrpfNriX7AsCHQrx6rT3cREsQw',
    coverImage:
      'https://media.licdn.com/dms/image/v2/D563DAQEJmi6MCukCig/image-scale_191_1128/image-scale_191_1128/0/1727971457588/gdg_mgmcoet_cover?e=1782021600&v=beta&t=WxJwdZNENCgAhIdYOmrpfNriX7AsCHQrx6rT3cREsQw',
    linkedin:
      'https://www.linkedin.com/posts/theshambhavipandey_mgm-code-clash-20-a-truly-unforgettable-activity-7451989390685548544-Lbay?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
    excerpt:
      'From Creative Team member to Co-Organizer, mentoring students and organizing technical events that fostered learning, collaboration, and community growth.',
    resources: [
      {
        heading: 'LinkedIn & GitHub Workshop',
        url: 'https://www.linkedin.com/posts/theshambhavipandey_your-story-isnt-just-in-your-resume-it-activity-7376905377931567105-1L9P?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
      },
      {
        heading: 'JavaScript Workshop',
        url: 'https://www.linkedin.com/posts/theshambhavipandey_gdg-gdgmgmcoet-javascriptworkshop-activity-7391709857159999488-FgN3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
      },
      {
        heading: 'Agentic AI Session',
        url: 'https://www.linkedin.com/posts/gdg-mgmcoet_gdg-agenticai-openai-ugcPost-7435014745545666560-GNys?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
      },
      {
        heading: 'Quizzardry',
        url: 'https://www.linkedin.com/posts/gdg-mgmcoet_gdg-mgmcoet-quizzardary-ugcPost-7441214096269635584-01WX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
      },
      {
        heading: 'DSA Mentorship',
        url: 'https://www.linkedin.com/posts/gdg-mgmcoet_codeclash2-gdg-codingcontest-activity-7448809497114062848-O7SX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
      },
      {
        heading: 'Code Clash 2.0',
        url: 'https://www.linkedin.com/posts/theshambhavipandey_mgm-code-clash-20-a-truly-unforgettable-activity-7451989390685548544-Lbay?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRIFukBCFaOaC2NULJmw1zuifk0xVWTcMw',
      },
    ],
    content: `<h2>From Creative Team Member To Co-Organizer</h2>

<p>My journey with Google Developer Groups began long before I became a Co-Organizer.</p>

<p>I joined GDG MGMCoET as part of the Core Team, contributing as a Creative Team member. Working alongside seniors who were passionate about technology, mentorship, and community building introduced me to what a strong developer community could truly look like.</p>

<p>What stood out wasn't just the technical knowledge being shared. It was the atmosphere they created. Students learned together, supported one another, celebrated each other's achievements, and formed friendships that extended beyond classrooms and coding assignments. I genuinely loved being part of that environment. It shaped my own growth as a student and inspired me to contribute more meaningfully to the community.</p>

<h3>Stepping Into Leadership</h3>

<p>After contributing within the Core Team, I was selected to serve as Co-Organizer for GDG MGMCoET. The transition brought new responsibilities beyond event execution. It meant mentoring students, coordinating with teams, planning initiatives, and ensuring that the supportive culture that had impacted me continued to grow.</p>

<h3>Adapting Through Challenges</h3>

<p>Balancing community initiatives alongside academics came with its own challenges. Administrative procedures, examinations, scheduling conflicts, and resource limitations frequently tested our plans. Instead of slowing down, we adapted.</p>

<blockquote>Communities thrive because of consistency, not convenience.</blockquote>

<h3>Highlights From The Journey</h3>

<h4><a href="https://www.linkedin.com/posts/theshambhavipandey_your-story-isnt-just-in-your-resume-it-activity-7376905377931567105-1L9P" target="_blank" rel="noopener noreferrer">LinkedIn & GitHub Workshop</a></h4>

<p>One of our earliest sessions focused on helping students understand the importance of building their professional presence online. We guided participants through GitHub collaboration practices and LinkedIn profile optimization, helping them showcase their work more effectively.</p>

<h4><a href="https://www.linkedin.com/posts/theshambhavipandey_gdg-gdgmgmcoet-javascriptworkshop-activity-7391709857159999488-FgN3" target="_blank" rel="noopener noreferrer">JavaScript Workshop Series</a></h4>

<p>We organized a three-day JavaScript workshop designed to help students build strong foundations in web development. The sessions emphasized practical understanding, enabling participants to move beyond theory and appreciate how JavaScript powers modern applications.</p>

<h4><a href="https://www.linkedin.com/posts/gdg-mgmcoet_gdg-agenticai-openai-ugcPost-7435014745545666560-GNys" target="_blank" rel="noopener noreferrer">Agentic AI Workshops</a></h4>

<p>As interest in AI systems continued to grow, we organized workshops introducing students to Agentic AI concepts and emerging AI development workflows. The objective was to encourage exploration of how intelligent systems can be designed to solve meaningful problems.</p>

<h4><a href="https://www.linkedin.com/posts/gdg-mgmcoet_gdg-mgmcoet-quizzardary-ugcPost-7441214096269635584-01WX" target="_blank" rel="noopener noreferrer">Quizzardry</a></h4>

<p>Quizzardry brought together learning and competition in an engaging format. The event encouraged participants to test their technical knowledge while fostering interaction and healthy competition within the community.</p>

<h4><a href="https://www.linkedin.com/posts/gdg-mgmcoet_codeclash2-gdg-codingcontest-activity-7448809497114062848-O7SX" target="_blank" rel="noopener noreferrer">DSA Mentorship Sessions</a></h4>

<p>Through DSA mentorship sessions, we focused on making problem-solving more approachable by discussing strategies, patterns, and the importance of consistent practice.</p>

<h4><a href="https://www.linkedin.com/posts/theshambhavipandey_mgm-code-clash-20-a-truly-unforgettable-activity-7451989390685548544-Lbay" target="_blank" rel="noopener noreferrer">Code Clash 2.0</a></h4>

<p>Among all our initiatives, Code Clash 2.0 remains one of my favorite experiences. With over 115 participants, the event created an environment where students challenged themselves through competitive programming while celebrating the joy of problem-solving together.</p>

<h3>What This Experience Taught Me</h3>

<p>Leadership isn't about being the most knowledgeable person in the room. It's about creating spaces where others feel empowered to learn, contribute, and succeed.</p>

<p>Every workshop organized, every participant encouraged, and every student supported contributes to something much larger than a single event.</p>

<h3>Looking Ahead</h3>

<p>I joined GDG hoping to learn from people I admired within the community. Becoming a Co-Organizer gave me the opportunity to help create those same experiences for students who are just beginning their own journeys. Always Grateful.</p>

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DOdBjH2ieIA/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">

<div style="padding:16px;">

<a href="https://www.instagram.com/p/DOdBjH2ieIA/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">

<div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"> </div>

<div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> 
<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"> </div> 
<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div>

<div style="padding: 19% 0;"></div> 

<div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">

<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">

<g transform="translate(-511.000000, -20.000000)" fill="#000000">
<g>
<path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631">
</path>
</g>
</g>
</g>
</svg>
</div>

<div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Not available on your Browser. <br> View this post on Instagram</div>

</div><div style="padding: 12.5% 0;"></div> 

<div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> 

<div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DOdBjH2ieIA/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by GDG MGM COET On Campus (@gdg_mgmcoet)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>`,
  },

  {
    slug: 'oscode-manager',
    sections: ['experience'],
    title: 'Community Manager, Delhi NCR — OSCode',
    date: 'March 2026 – Present',
    readTime: '3 min read',
    thumbnailImage:
      'https://media.licdn.com/dms/image/v2/D563DAQGEDr5mrJZ6Mg/image-scale_191_1128/B56ZwIt2L1K4Ac-/0/1769672762574/oscode_mgmcoet_cover?e=1782028800&v=beta&t=2H0ZOkL1X_0qbCCoyxvKc_u75sQsLHnrxGGCMon-p2I',
    coverImage:
      'https://media.licdn.com/dms/image/v2/D563DAQGEDr5mrJZ6Mg/image-scale_191_1128/B56ZwIt2L1K4Ac-/0/1769672762574/oscode_mgmcoet_cover?e=1782028800&v=beta&t=2H0ZOkL1X_0qbCCoyxvKc_u75sQsLHnrxGGCMon-p2I',
    excerpt:
      'Founded the OSCode MGMCoET chapter, facilitated at Microsoft Gurugram, and now support developer communities across Delhi NCR.',
    resources: [
      {
        heading: 'Social',
        url: 'https://www.instagram.com/p/DUoCrkGAf1K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      },
    ],
    content: `<h2>Building Communities Beyond Code</h2>

<p>My journey with OSCode began with an opportunity to establish the <strong>OSCode chapter at MGMCoET</strong>.</p>

<p>What initially seemed like organizing a student community quickly evolved into one of the most rewarding leadership experiences of my journey. Building a chapter from the ground up meant creating something sustainable, fostering collaboration, and helping students discover opportunities within open source.</p>

<h2>Founding OSCode MGMCoET</h2>

<p>Together, we built the foundation of the OSCode community within our college by:</p>

<ul>
  <li>Recruiting and mentoring a dedicated core team.</li>
  <li>Organizing technical events and open-source initiatives.</li>
  <li>Creating opportunities for students to learn, collaborate, and contribute.</li>
  <li>Promoting a culture of curiosity, experimentation, and peer learning.</li>
</ul>

<h2>Recognition Beyond Campus</h2>

<p>One of the most memorable moments of this journey was being invited to attend the <strong>Open Source AI Conclave hosted at Microsoft Gurugram</strong>.</p>

<p>I was recognized and facilitated for my contributions to community building through OSCode. The experience gave me the opportunity to engage with developers, community leaders, and professionals who are actively contributing to the open-source ecosystem and advancing conversations around artificial intelligence.</p>

<h2>Growing Into Regional Leadership</h2>

<p>Based on my contributions and involvement within the ecosystem, I was promoted to the role of <strong>Community Manager for the Delhi NCR region</strong>. This transition expanded my focus beyond a single institution and allowed me to contribute to broader community initiatives across the region.</p>

<h2>Lessons Beyond Technology</h2>

<p>OSCode taught me that leadership is less about directing people and more about creating environments where others feel empowered to learn, contribute, and grow.</p>

<p>The most meaningful part of this journey has been seeing members of our community become confident contributors and leaders themselves.</p>

<h2>Looking Ahead</h2>

<p>Open source has always been built on collaboration. Community building follows the same principle: the greatest impact comes not only from what we build ourselves, but from enabling others to build alongside us.</p>

<div style="
  margin: 4rem auto;
  max-width: 550px;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
">

  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:share:7433734120599638016?collapsed=1"
    title="LinkedIn Post"
    width="100%"
    height="500"
    frameborder="0"
    allowfullscreen
    style="
      display: block;
      width: 100%;
      border: none;
      background: white;
    "
  ></iframe>

</div>`,

    gallery: [
      {
        type: 'url',
        url: '/OSCode.jpeg',
        caption:
          'Recognized and facilitated at the Open Source AI Conclave hosted at Microsoft Gurugram.',
      },
    ],
  },

  // ── LEARNINGS ─────────────────────────────────────────────

  {
    slug: 'devops-and-cloud',
    sections: ['learning'],
    title: 'DevOps & Cloud',
    date: 'April 2026 – Present',
    readTime: '3 min read',
    thumbnailImage:
      'https://images.unsplash.com/vector-1761074483084-ec628a7624b6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    excerpt:
      'Exploring Linux systems, cloud platforms, containerization, and deployment workflows to understand how software operates at scale.',
    resources: [
      {
        heading: 'Abhishek Veeramalla - DevOps Zero to Hero',
        url: 'https://www.youtube.com/playlist?list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa',
      },
      {
        heading: 'GitHub Profile',
        url: 'https://github.com/The-ShambhaviPandey',
      },
    ],
    content: `<h2>Why I Started Learning DevOps</h2>

<p>As I built more full-stack applications, I realized that writing code was only one part of delivering software. Questions such as <em>"How does this application reach users?"</em>, <em>"How are updates deployed safely?"</em>, and <em>"What happens when systems fail?"</em> led me toward DevOps and Cloud technologies.</p>

<h2>Building the Foundation</h2>

<ul>
  <li><strong>Linux:</strong> Navigating file systems, managing permissions, handling processes, and working confidently within command-line environments.</li>
  <li><strong>Shell Scripting:</strong> Writing scripts to automate repetitive tasks and improve development workflows.</li>
  <li><strong>Git & GitHub:</strong> Version control workflows, collaboration practices, branching strategies, and repository management.</li>
  <li><strong>AWS:</strong> Exploring core cloud concepts and services to understand how applications are hosted and managed in production environments.</li>
  <li><strong>EC2:</strong> Launching and configuring virtual servers, managing instances, and understanding compute infrastructure in the cloud.</li>
  <li><strong>AWS CLI:</strong> Interacting with AWS services programmatically through command-line tools.</li>
  <li><strong>Docker:</strong> Understanding containerization concepts including images, containers, volumes, and networking.</li>
  <li><strong>CI/CD:</strong> Learning how automated build, testing, and deployment pipelines improve software delivery.</li>
  <li><strong>Virtualization & Hypervisors:</strong> Exploring the underlying technologies that enable scalable cloud infrastructure.</li>
</ul>

<h2>Current Focus</h2>

<p>I am currently learning through <strong>Abhishek Veeramalla's DevOps Zero to Hero series</strong> while reinforcing concepts through hands-on experimentation and project deployments.</p>

<h2>Still Exploring</h2>

<p>DevOps is an extensive field, and I am still at the beginning of this journey. The more I learn, the more I appreciate that great software engineering extends beyond writing code. It also involves ensuring that applications can be deployed, monitored, and operated reliably in the real world.</p>`,
  },

  {
    slug: 'data-structures-and-algorithms',
    sections: ['learning'],
    title: 'Data Structures & Algorithms',
    date: 'March 2026 – Present',
    readTime: '3 min read',
    thumbnailImage:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
    excerpt:
      'Practicing problem solving, algorithmic thinking, and interview-focused DSA using Java.',
    resources: [
      {
        heading: 'Striver SDE Sheet',
        url: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/',
      },
      {
        heading: 'DSA Repository',
        url: 'https://github.com/The-ShambhaviPandey/DSA',
      },
    ],
    content: `<h2>The Beginning</h2>

<p>Data Structures and Algorithms initially felt intimidating. Unlike building projects where progress is immediately visible, DSA required patience, consistency, and a willingness to struggle through problems without obvious solutions.</p>

<h2>Choosing Java</h2>

<p>I chose Java as my primary language for DSA because of its strong object-oriented foundations, extensive standard library, and widespread use in technical interviews.</p>

<h2>My Current Approach</h2>

<p>I am currently following the <strong>Striver SDE Sheet</strong>, having practiced over <strong>150 problems</strong> covering:</p>

<ul>
  <li>Arrays and Array Manipulation</li>
  <li>Java Collections Framework</li>
  <li>Searching and Sorting Algorithms</li>
  <li>Binary Search and its variations</li>
  <li>Bit Manipulation techniques</li>
  <li>String-based problem solving</li>
</ul>

<p>Instead of memorizing solutions, I focus on recognizing patterns, understanding trade-offs, analyzing time and space complexity, and selecting appropriate data structures.</p>

<h2>What DSA Has Taught Me</h2>

<p>DSA has changed the way I approach problems beyond coding interviews. It has taught me to break down complex challenges into smaller parts, think critically about efficiency, and remain persistent when solutions are not immediately obvious.</p>

<h2>Current Progress</h2>

<p>I am currently working through the <strong>Strings</strong> section of the Striver SDE Sheet, focusing on improving pattern recognition and developing stronger problem-solving intuition.</p>

<p>I view DSA as a long-term investment in becoming a stronger software engineer. The objective extends beyond interview preparation to developing analytical thinking and structured problem-solving skills that apply to real-world software development.</p>`,
  },

  {
    slug: 'agentic-ai-openai-sdk',
    sections: ['learning'],
    title: 'Agentic AI & OpenAI SDK',
    date: '20 December 2025',
    readTime: '3 min read',
    thumbnailImage:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80',
    excerpt:
      'Exploring Agentic AI systems using OpenAI SDK after attending GDG DevFest, eventually applying these concepts to build an AI-powered honeypot system that reached the India AI Impact Summit 2026 Grand Finale.',
    resources: [
      {
        heading: 'LinkedIn Post',
        url: 'https://www.linkedin.com/posts/theshambhavipandey_agenticai-artificialintelligence-aiengineering-activity-7407743434146353152-d5Zi',
      },
      {
        heading: 'Piyush Garg - OpenAI SDK',
        url: 'https://www.youtube.com/results?search_query=Piyush+Garg+OpenAI+SDK',
      },
      {
        heading: 'OpenAI SDK Docs',
        url: 'https://developers.openai.com/api/docs/guides/agents',
      },
      {
        heading: 'Agentic Honeypot Project',
        url: '/post/agentic-honeypot-system',
      },
    ],
    content: `<h2>Discovering Agentic AI</h2>

<p>My introduction to Agentic AI began during <strong>GDG DevFest 2025</strong>. While attending sessions on autonomous AI systems and emerging AI engineering workflows, I became fascinated by the idea that AI could move beyond simple prompt-response interactions and actively reason, plan, and perform tasks using tools.</p>

<h2>Learning Through Building</h2>

<p>To deepen my understanding, I began learning about Agentic AI architectures and the <strong>OpenAI SDK</strong>, primarily through hands-on experimentation and educational resources from creators like <strong>Piyush Garg</strong>.</p>

<p>Some of the areas I explored included:</p>

<ul>
  <li>Building AI agents capable of reasoning through multi-step tasks.</li>
  <li>Integrating tools and APIs within agent workflows.</li>
  <li>Designing prompt architectures for reliable agent behavior.</li>
  <li>Understanding agent orchestration and decision-making patterns.</li>
  <li>Working with the OpenAI SDK to develop practical applications.</li>
</ul>

<h2>From Learning To Real-World Application</h2>

<p>I applied these concepts while contributing to the development of an <strong>Agentic AI-powered Honeypot System</strong>, designed to improve cybersecurity threat detection and response.</p>

<h2>A Defining Milestone</h2>

<p>Our project was selected as a <strong>Grand Finalist at the India AI Impact Summit 2026</strong>. Reaching this stage reinforced an important lesson: the most valuable opportunities often emerge from following genuine curiosity and being willing to explore technologies beyond formal coursework.</p>

<h2>What Agentic AI Taught Me</h2>

<p>Learning about Agentic AI fundamentally changed how I think about software systems. It showed me that modern applications are increasingly shifting from deterministic workflows toward systems capable of reasoning, adaptation, and autonomous decision-making.</p>

<p>Sometimes, the sessions you attend out of curiosity end up shaping your entire trajectory.</p>`,
  },

  {
    slug: 'backend-development',
    sections: ['learning'],
    title: 'Backend Development',
    date: 'June 2024 – Present',
    readTime: '3 min read',
    thumbnailImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
    excerpt:
      'My journey into building scalable backend systems using Node.js, Express, MongoDB, and modern API architectures.',
    resources: [
      {
        heading: 'GitHub Profile',
        url: 'https://github.com/The-ShambhaviPandey',
      },
      {
        heading: 'Piyush Garg - Backend Playlist',
        url: 'https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo',
      },
    ],
    content: `<h2>The Beginning</h2>

<p>While frontend development taught me how to build interfaces users interact with, backend development helped me understand everything happening behind the scenes. As I worked on increasingly complex projects, I became curious about how authentication systems worked, how data was stored and retrieved efficiently, and how applications handled thousands of requests reliably.</p>

<h2>Building the Foundation</h2>

<ul>
  <li><strong>Node.js:</strong> Server-side JavaScript and asynchronous programming patterns.</li>
  <li><strong>Express.js:</strong> RESTful API development, middleware architecture, routing, and request handling.</li>
  <li><strong>MongoDB:</strong> Schema design, CRUD operations, indexing, aggregation pipelines, and efficient data modelling.</li>
  <li><strong>Authentication & Authorization:</strong> JWT-based authentication, protected routes, role-based access control, and session management.</li>
  <li><strong>API Design:</strong> Building scalable and maintainable backend architectures.</li>
  <li><strong>State Management:</strong> Managing frontend-backend interactions effectively using Redux.</li>
</ul>

<h2>Applying Backend Development in Real Projects</h2>

<p>During my internship, I was responsible for implementing several core backend features, including authentication systems, product management workflows, and user profile management functionalities.</p>

<p>I also worked on a patent-oriented project focused on real-time deepfake detection, where I contributed to building a real-time video calling application and integrating backend services with machine learning workflows.</p>

<h2>Lessons Beyond APIs</h2>

<p>Backend development fundamentally changed how I think about software systems. I learned that backend engineering extends far beyond creating endpoints. It involves designing systems that remain reliable and efficient as complexity and usage grow.</p>

<h2>Reflection</h2>

<p>Whether implementing authentication systems, managing application data, or contributing to real-time applications, each project has reinforced my belief that robust backend engineering is essential to creating meaningful user experiences.</p>`,
  },

  {
    slug: 'ui-ux-fundamentals',
    sections: ['learning'],
    title: 'UI/UX Fundamentals',
    date: '20 March 2024',
    readTime: '2 min read',
    thumbnailImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    excerpt:
      'Exploring user-centered design principles and applying them to real-world product development using Figma.',
    resources: [
      { heading: 'UI/UX Notes', url: '/pdf/UI-UX Notes.pdf' },
      {
        heading: 'Aestheticommerce Figma Prototype',
        url: 'https://www.figma.com/design/dTsaoX3FBfltAyEkFeTYjZ/AESTHETICOMMERCE?node-id=0-1&t=Eo2ilJxo11iRL9DS-1',
      },
    ],
    content: `<h2>The Beginning</h2>

<p>As I spent more time building frontend applications, I realized that writing functional code was only one part of creating meaningful products. The best digital experiences are not only technically sound. They are intuitive, accessible, and enjoyable to use.</p>

<h2>Discovering Figma</h2>

<p>During this learning journey, I discovered Figma and quickly appreciated how effectively it bridged the gap between ideas and implementation. I began experimenting with wireframing user journeys, creating high-fidelity mockups and prototypes, understanding visual hierarchy and layout principles, working with typography, spacing, and color systems, designing responsive experiences across different devices, and applying accessibility considerations to interface design.</p>

<h2>Applying Design in Practice</h2>

<p>During my internship, I designed the complete interface for the company's platform using Figma and subsequently translated those designs into production-ready frontend components. Owning both the design and implementation process gave me a deeper understanding of how design decisions influence technical architecture, usability, accessibility, and performance.</p>

<h2>How UI/UX Changed My Perspective</h2>

<p>Instead of focusing solely on whether a feature works, I began asking whether it feels intuitive and accessible to the people using it. The intersection of design and engineering remains one of the aspects of software development I enjoy most.</p>`,

    gallery: [
      {
        type: 'url',
        url: '/Design_1.png',
        caption: 'Contact Us Page, Aestheticommerce',
      },
      {
        type: 'url',
        url: '/Design_2.jpeg',
        caption: 'Sales Dashboard, Aestheticommerce',
      },
      {
        type: 'url',
        url: '/Design_3.jpeg',
        caption: 'Analytics Interface, Aestheticommerce',
      },
      {
        type: 'url',
        url: '/Design_4.jpeg',
        caption: 'Inventory Dashboard, Aestheticommerce',
      },
      {
        type: 'url',
        url: '/Design_5.jpeg',
        caption: 'Inventory Dashboard, Aestheticommerce',
      },
    ],
  },

  {
    slug: 'frontend-development',
    sections: ['learning'],
    title: 'Frontend Development',
    date: '19 January 2024',
    readTime: '3 min read',
    thumbnailImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    excerpt:
      'My journey into building responsive, accessible, and interactive experiences for the web.',
    resources: [
      { heading: 'GitHub', url: 'https://github.com/The-ShambhaviPandey' },
    ],
    content: `<h2>The Beginning</h2>

<p>Frontend development was my introduction to building things people could actually interact with. Seeing a webpage transform from plain text into a responsive, interactive experience made programming feel tangible and creative.</p>

<h2>Core Concepts I Focused On</h2>

<ul>
  <li><strong>HTML:</strong> Semantic structure, forms, accessibility, and organizing content effectively.</li>
  <li><strong>CSS:</strong> Flexbox, Grid, positioning, animations, media queries, and building responsive layouts.</li>
  <li><strong>JavaScript:</strong> Variables, functions, arrays, objects, DOM manipulation, events, asynchronous programming, and working with APIs.</li>
  <li><strong>Responsive Design:</strong> Following a mobile-first approach and ensuring interfaces adapt seamlessly across different screen sizes.</li>
</ul>

<h2>What Frontend Development Taught Me</h2>

<p>Frontend development showed me that software engineering is not solely about solving technical problems. It is equally about understanding users and designing experiences that feel intuitive, accessible, and meaningful.</p>

<h2>Notes</h2>

<details style="margin-top:2rem;">
  <summary style="cursor:pointer;font-size:1.2rem;font-weight:600;margin-bottom:1rem;">HTML Notes</summary>
  <iframe src="/pdf/HTML.pdf" width="100%" height="700" style="border:none;border-radius:12px;margin-top:1rem;"></iframe>
</details>

<details style="margin-top:2rem;">
  <summary style="cursor:pointer;font-size:1.2rem;font-weight:600;margin-bottom:1rem;">CSS Notes</summary>
  <iframe src="/pdf/CSS.pdf" width="100%" height="700" style="border:none;border-radius:12px;margin-top:1rem;"></iframe>
</details>`,
  },

  {
    slug: 'java-programming',
    sections: ['learning'],
    title: 'Java Programming',
    date: '27 December 2023',
    readTime: '2 min read',
    thumbnailImage:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
    excerpt:
      'From understanding programming fundamentals to solving Data Structures and Algorithms problems, Java became my introduction to structured problem-solving and software development.',
    resources: [
      {
        heading: 'DSA with Java Repository',
        url: 'https://github.com/The-ShambhaviPandey/DSA',
      },
    ],
    content: `<h2>The Beginning</h2>

<p>Java was one of the first programming languages I committed to learning seriously during my engineering journey. I began with Apna College, where I developed a foundation in programming concepts including variables, control structures, functions, arrays, object-oriented programming, and exception handling.</p>

<h2>Strengthening Fundamentals Through NPTEL</h2>

<p>To formalize my understanding, I enrolled in the NPTEL course on <strong>Data Structures and Algorithms using Java</strong>, earning an <strong>Elite Certification</strong>.</p>

<p>The program strengthened my understanding of:</p>

<ul>
  <li>Object-Oriented Programming principles</li>
  <li>Java Collections Framework</li>
  <li>Recursion and Backtracking</li>
  <li>Searching and Sorting Algorithms</li>
  <li>Stacks, Queues, Trees, and Graphs</li>
  <li>Algorithmic problem-solving techniques</li>
</ul>

<h2>Current Focus</h2>

<p>I currently use Java to solve Data Structures and Algorithms problems, focusing on strengthening problem-solving skills and preparing for software engineering interviews.</p>

<h2>Reflection</h2>

<p>Beyond syntax and frameworks, Java helped me develop a structured approach to problem-solving and provided a strong foundation for tackling increasingly complex algorithmic challenges.</p>

<h2>Certification</h2>

<iframe
  src="/pdf/NPTEL25CS148S106560112410234879.pdf"
  width="100%"
  height="500px"
  style="border:none;border-radius:12px;"
></iframe>`,
  },
]

function buildPosts() {
  return BLOGS.map((blog) => {
    const [primarySection, ...crossSections] = blog.sections
    const {
      sections,
      coverImage,
      resources,
      gallery,
      thumbnailImage,
      content,
      slug: explicitSlug,
      ...rest
    } = blog
    const meta = { ...rest }

    return {
      slug: explicitSlug || makeSlug(blog.title),
      section: primarySection,
      crossSections,
      title: blog.title,
      certificate: blog.certificate || '',
      linkedin: blog.linkedin || '',
      date: blog.date || '',
      readTime: blog.readTime || '',
      featured: blog.featured || false,
      excerpt: blog.excerpt || '',
      resources: resources || [],
      thumbnailImage: coverUrl(thumbnailImage || coverImage),
      coverImage: coverUrl(coverImage),
      gallery: gallery || [],
      meta,
      published: true,
      contentReady: !!(content && content.trim()),
      content: content || '',
    }
  })
}

async function seed() {
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI is not set. Check your .env file.')
    process.exit(1)
  }

  await mongoose.connect(process.env.MONGODB_URI)
  console.log('✅ Connected to MongoDB\n')

  await Post.deleteMany({})
  console.log('\n🗑️  Cleared Posts')

  const posts = buildPosts()
  await Post.insertMany(posts)
  console.log(`\n✅ Seeded ${posts.length} posts:\n`)

  const bySection = {}
  for (const p of posts) {
    bySection[p.section] = bySection[p.section] || []
    bySection[p.section].push({ slug: p.slug, cross: p.crossSections })
  }
  for (const [section, items] of Object.entries(bySection)) {
    console.log(`  [${section}]`)
    items.forEach(({ slug, cross }) => {
      const crossNote = cross.length ? `  ↪ also in: ${cross.join(', ')}` : ''
      console.log(`    /post/${slug}${crossNote}`)
    })
  }

  console.log('\n🎉 Seed complete!')
  await mongoose.disconnect()
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err.message)
  process.exit(1)
})
