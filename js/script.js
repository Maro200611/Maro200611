const PORTFOLIO = {
  name: "Marwan Khaled Saeed Abdul Qadir",
  shortName: "Marwan",
  profileImage: "https://avatars.githubusercontent.com/u/181504618?v=4",
  bio: "Computer Science student focused on Data Science, Machine Learning and AI. I enjoy turning data and ideas into practical projects while continuously building my technical foundation.",
  about: "I'm a Computer Science student building my path toward Data Science and AI Engineering. My current learning journey combines programming, mathematics, data analysis and machine learning with hands-on projects. I care about understanding how things work and turning what I learn into something practical.",
  focusTitle: "Data Science & AI",
  focusText: "Currently developing stronger foundations in Python, data analysis, machine learning and software development.",
  focusList: ["Data Analysis & Visualization", "Machine Learning Foundations", "Python & Programming", "Algorithms & Problem Solving"],
  cvUrl: "cv.html",
  timeline: [
    {icon:"bi-mortarboard", date:"2024 — Present", title:"B.Sc. Computer Science", org:"Canada International College (CIC)", text:"Computer Science student building foundations in programming, algorithms, databases and AI."},
    {icon:"bi-cpu", date:"2026", title:"AI & Machine Learning Foundations", org:"Information Technology Institute (ITI)", text:"Completed 90 training hours covering AI, probability & statistics, linear algebra, optimization, Python, data preparation, neural networks and deep learning."},
    {icon:"bi-search", date:"2026", title:"Machine Learning Intern", org:"FlyRank", text:"Working on Applied Search Intelligence with a focus on Google Search ranking and Discoverability signals."},
    {icon:"bi-rocket-takeoff", date:"2026", title:"Data Science Track", org:"Digital Egypt Pioneers Initiative", text:"Accepted into the Data Science track to strengthen practical data science and career-ready skills."}
  ],
  stats: [
    ["03+", "Years of CS journey"],
    ["AI / ML", "Current direction"],
    ["B1", "English level"]
  ],
  socials: [
    {icon:"bi-linkedin", label:"LinkedIn", url:"https://www.linkedin.com/in/marwan-khaled-7183b4334/"},
    {icon:"bi-github", label:"GitHub", url:"https://github.com/Maro200611"},
    {icon:"bi-envelope", label:"Email", url:"mailto:marwankhaliad16@gmail.com"}
  ],
  skills: [
    {icon:"bi-filetype-py", title:"Python", desc:"Programming, data preparation and machine learning workflows.", tags:["Python","Pandas","NumPy","Matplotlib"]},
    {icon:"bi-bar-chart-line", title:"Data Science", desc:"Exploring datasets, cleaning data and extracting useful insights.", tags:["EDA","Cleaning","Visualization","Statistics"]},
    {icon:"bi-cpu", title:"Machine Learning", desc:"Learning and applying core supervised and deep learning concepts.", tags:["Regression","Classification","Neural Networks","Model Evaluation"]},
    {icon:"bi-code-slash", title:"Programming", desc:"Computer science foundations and problem solving.", tags:["C++","Java","JavaScript","OOP"]},
    {icon:"bi-database", title:"Databases", desc:"Working with relational data and database fundamentals.", tags:["SQL","MySQL","SQLite","ERD"]},
    {icon:"bi-git", title:"Tools", desc:"Modern development workflow and version control.", tags:["Git","GitHub","VS Code","Bootstrap"]}
  ],
  projects: [
    {title:"Mazboot — AI Personal Stylist", desc:"A multimodal AI concept for online shopping that combines visual, text and biometric features to support fit and styling recommendations.", image:"", tags:["ResNet-101","NLP","TF-IDF","AI"], github:"https://github.com/Maro200611/fashion-fit-app", demo:""},
    {title:"FlyRank — Search Intelligence", desc:"Machine learning internship work focused on researching Google Search ranking and Discoverability signals.", image:"", tags:["Python","Research","ML","Search"], github:"https://github.com/Maro200611/flyrank-ml-internship", demo:""},
    {title:"Steam Game Prediction", desc:"A data science project exploring Steam game datasets, merging sources, cleaning data and preparing features for copies-sold prediction.", image:"", tags:["Pandas","EDA","Feature Engineering","ML"], github:"", demo:""}
  ],
  certificates: [
    {title:"AI & Machine Learning Foundations", issuer:"Information Technology Institute (ITI)", year:"2026", image:"", icon:"bi-mortarboard", link:""},
    {title:"Computer Vision", issuer:"Kaggle", year:"2026", image:"", icon:"bi-camera", link:""},
    {title:"Intro to Deep Learning", issuer:"Kaggle", year:"2026", image:"", icon:"bi-diagram-3", link:""}
  ],
  contact: [
    {icon:"bi-envelope", label:"Email", value:"marwankhaliad16@gmail.com", url:"mailto:marwankhaliad16@gmail.com"},
    {icon:"bi-linkedin", label:"LinkedIn", value:"marwan-khaled-7183b4334", url:"https://www.linkedin.com/in/marwan-khaled-7183b4334/"},
    {icon:"bi-github", label:"GitHub", value:"github.com/Maro200611", url:"https://github.com/Maro200611"}
  ]
};

const $ = (s) => document.querySelector(s);
document.addEventListener("DOMContentLoaded", () => {
  $("#heroName").textContent = PORTFOLIO.shortName;
  $("#heroBio").textContent = PORTFOLIO.bio;
  $("#aboutText").textContent = PORTFOLIO.about;
  $("#focusTitle").textContent = PORTFOLIO.focusTitle;
  $("#focusText").textContent = PORTFOLIO.focusText;
  $("#profileImage").src = PORTFOLIO.profileImage;
  $("#year").textContent = new Date().getFullYear();
  const cvBtn = $("#cvBtn"); if(cvBtn) cvBtn.href = PORTFOLIO.cvUrl;
  $("#timeline").innerHTML = PORTFOLIO.timeline.map((x,i)=>`<div class="timeline-item" data-aos="fade-up" data-aos-delay="${i*70}"><div class="timeline-icon"><i class="bi ${x.icon}"></i></div><div class="timeline-content"><span>${x.date}</span><h3>${x.title}</h3><strong>${x.org}</strong><p>${x.text}</p></div></div>`).join("");

  $("#stats").innerHTML = PORTFOLIO.stats.map(s => `<div class="col-4"><div class="mini-stat"><strong>${s[0]}</strong><small>${s[1]}</small></div></div>`).join("");
  $("#focusList").innerHTML = PORTFOLIO.focusList.map(x => `<div><i class="bi bi-check2-circle"></i><span>${x}</span></div>`).join("");
  $("#heroSocials").innerHTML = PORTFOLIO.socials.map(x => `<a href="${x.url}" target="_blank" rel="noopener" aria-label="${x.label}"><i class="bi ${x.icon}"></i></a>`).join("");

  $("#skillsGrid").innerHTML = PORTFOLIO.skills.map((s,i) => `
    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${i*60}">
      <div class="skill-card"><div class="skill-icon"><i class="bi ${s.icon}"></i></div><h4>${s.title}</h4><p>${s.desc}</p>
      <div class="skill-tags">${s.tags.map(t=>`<span>${t}</span>`).join("")}</div></div>
    </div>`).join("");

  $("#projectsGrid").innerHTML = PORTFOLIO.projects.map((p,i) => `
    <div class="col-lg-4" data-aos="fade-up" data-aos-delay="${i*80}">
      <article class="project-card">
        <div class="project-top">
          ${p.image ? `<img src="${p.image}" alt="${p.title}">` : `<div class="h-100 d-flex align-items-center justify-content-center"><i class="bi bi-braces fs-1 text-white opacity-50"></i></div>`}
          <span class="project-number">0${i+1}</span>
        </div>
        <div class="project-body"><h3>${p.title}</h3><p>${p.desc}</p>
        <div class="tech-stack">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>
        <div class="project-links">${p.github ? `<a href="${p.github}" target="_blank"><i class="bi bi-github"></i> Code</a>` : ""}${p.demo ? `<a href="${p.demo}" target="_blank"><i class="bi bi-box-arrow-up-right"></i> Demo</a>` : ""}</div></div>
      </article>
    </div>`).join("");

  $("#certificatesGrid").innerHTML = PORTFOLIO.certificates.map((c,i) => `
    <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="${i*80}">
      <article class="certificate-card">
        <div class="certificate-img">${c.image ? `<img src="${c.image}" alt="${c.title}">` : `<i class="bi ${c.icon || "bi-award"} certificate-placeholder"></i>`}</div>
        <div class="certificate-body"><h3>${c.title}</h3><p>${c.issuer}</p><div class="cert-meta"><strong>${c.year}</strong>${c.link ? `<a href="${c.link}" target="_blank">View certificate <i class="bi bi-arrow-up-right"></i></a>` : `<span>Certificate</span>`}</div></div>
      </article>
    </div>`).join("");

  $("#contactLinks").innerHTML = PORTFOLIO.contact.map(c => `<a class="contact-link" href="${c.url}" target="_blank" rel="noopener"><i class="bi ${c.icon}"></i><div><small>${c.label}</small><span>${c.value}</span></div><i class="bi bi-arrow-up-right ms-auto"></i></a>`).join("");

  AOS.init({duration:750, once:true, offset:70});
  setupUI();
});

function setupUI(){
  const nav = $("#mainNav"), top = $("#backTop"), theme = $("#themeToggle");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", scrollY > 20);
    top.classList.toggle("show", scrollY > 500);
  });
  top.onclick = () => scrollTo({top:0, behavior:"smooth"});
  theme.onclick = () => {
    document.body.classList.toggle("light");
    const light = document.body.classList.contains("light");
    theme.innerHTML = light ? '<i class="bi bi-sun"></i>' : '<i class="bi bi-moon-stars"></i>';
    localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  };
  if(localStorage.getItem("portfolio-theme")==="light") theme.click();
  document.querySelectorAll(".nav-link").forEach(a => a.addEventListener("click",()=>document.querySelector(".navbar-collapse").classList.remove("show")));
  window.addEventListener("load",()=>setTimeout(()=>{$("#loader").style.opacity="0";setTimeout(()=>$("#loader").remove(),500)},250));
}
