// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "†Equal Contribution, *Corresponding Author.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-academic-service",
          title: "Academic Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academic_service/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-朝阳",
        
          title: "朝阳",
        
        description: "作于打工路上",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/sunrise/";
          
        },
      },{id: "post-调笑令",
        
          title: "调笑令",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/midAug/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-one-paper-is-accepted-by-ieee-tpami",
          title: 'One paper is accepted by IEEE TPAMI.',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-ijcai-2023-glow-and-人工智能-ai-view",
          title: 'Two papers are accepted by IJCAI-2023 GLOW and 人工智能(AI-View).',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-ieee-symposium-on-security-and-privacy-ieee-s-amp-amp-p",
          title: 'One paper is accepted by IEEE Symposium on Security and Privacy (IEEE S&amp;amp;amp;P)....',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-网络空间安全科学学报",
          title: 'One paper is accepted by 网络空间安全科学学报.',
          description: "",
          section: "News",},{id: "news-three-papers-are-accepted-by-计算机研究与发展-journal-of-computer-research-and-development-ieee-tmm-and-iclr-2024",
          title: 'Three papers are accepted by 计算机研究与发展(Journal of Computer Research and Development), IEEE TMM,...',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-cvpr-2024",
          title: 'One paper is accepted by CVPR 2024.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-ieee-tip",
          title: 'One paper is accepted by IEEE TIP.',
          description: "",
          section: "News",},{id: "news-i-organize-the-special-issue-about-trustworthy-deep-learning-in-practice-on-electronics",
          title: 'I organize the special issue about ‘‘Trustworthy Deep Learning in Practice’’ on Electronics....',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-ijcai-2024-and-ijcv",
          title: 'Two papers are accepted by IJCAI 2024 and IJCV.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-transactions-on-information-forensics-amp-amp-security-tifs",
          title: 'One paper is accepted by Transactions on Information Forensics &amp;amp;amp; Security (TIFS).',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-the-annual-conference-on-neural-information-processing-systems-neurips-2024",
          title: 'One paper is accepted by the Annual Conference on Neural Information Processing Systems...',
          description: "",
          section: "News",},{id: "news-i-was-invited-as-an-editorial-board-member-of-computing-and-artificial-intelligence-cai-i-will-try-my-best-to-contribute-to-this-publication",
          title: 'I was invited as an Editorial Board Member of Computing and Artificial Intelligence...',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-the-ijcv-and-icassp-2025",
          title: 'Two papers are accepted by the IJCV and ICASSP 2025.',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-the-iclr-2025-and-the-web-conference-www-2025-oral",
          title: 'Two papers are accepted by the ICLR 2025 and The Web Conference(WWW) 2025...',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-the-ieee-tmm-and-ieee-tifs",
          title: 'Two papers are accepted by the IEEE TMM and IEEE TIFS.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%61%6E%67%6A%6B@%7A%67%63%6C%61%62.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-5884-3412", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RoFr1qcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
