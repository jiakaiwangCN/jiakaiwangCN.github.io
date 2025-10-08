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
        },{id: "nav-people",
          title: "People",
          description: "members of our group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
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
        },{id: "post-三五七言",
        
          title: "三五七言",
        
        description: "伤春悲秋",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/357yan/";
          
        },
      },{id: "post-猛猛睡",
        
          title: "猛猛睡",
        
        description: "打熊油诗",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/xiongyoushi/";
          
        },
      },{id: "post-不如梦令-二",
        
          title: "不如梦令（二）",
        
        description: "自我反思",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rumengling2/";
          
        },
      },{id: "post-不如梦令-一",
        
          title: "不如梦令（一）",
        
        description: "自我反思",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/rumengling1/";
          
        },
      },{id: "post-临江仙-赠小熊",
        
          title: "临江仙(赠小熊)",
        
        description: "玩笑",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/linjiangxian/";
          
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
        
        description: "作于中秋",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/midAug/";
          
        },
      },{id: "post-敕勒感怀",
        
          title: "敕勒感怀",
        
        description: "作于《敕勒歌》播放时",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chile/";
          
        },
      },{id: "post-清平乐",
        
          title: "清平乐",
        
        description: "作于周末",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/fo/";
          
        },
      },{id: "post-菩萨蛮",
        
          title: "菩萨蛮",
        
        description: "NA",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/wen/";
          
        },
      },{id: "post-金缕曲",
        
          title: "金缕曲",
        
        description: "作于仲夏",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/midAug-copy/";
          
        },
      },{id: "post-春日",
        
          title: "春日",
        
        description: "作于某春天",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/spring/";
          
        },
      },{id: "post-冬夜见雪",
        
          title: "冬夜见雪",
        
        description: "作于某雪夜",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/snow/";
          
        },
      },{id: "post-随意想",
        
          title: "随意想",
        
        description: "作于半夜",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/random/";
          
        },
      },{id: "post-慎",
        
          title: "慎",
        
        description: "作于发癫的夜晚",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/forget/";
          
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
          section: "News",},{id: "news-our-textbook-人工智能安全导论-introduction-to-ai-security-has-been-published-available-on-jd-and-taobao",
          title: 'Our textbook 人工智能安全导论 (Introduction to AI Security) has been published. Available on JD...',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-the-iclr-2025-and-the-web-conference-www-2025-oral",
          title: 'Two papers are accepted by the ICLR 2025 and The Web Conference(WWW) 2025...',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-the-ieee-tmm-and-ieee-tifs",
          title: 'Two papers are accepted by the IEEE TMM and IEEE TIFS.',
          description: "",
          section: "News",},{id: "news-i-serve-as-the-organizer-of-the-5th-workshop-of-adversarial-machine-learning-on-computer-vision-foundation-models-x-please-submit-your-papers-and-participate-the-challenge-to-win-prizes",
          title: 'I serve as the Organizer of the 5th Workshop of Adversarial Machine Learning...',
          description: "",
          section: "News",},{id: "news-i-am-invited-as-the-area-chair-of-neurips-a-new-exciting-experience-for-me",
          title: 'I am invited as the Area Chair of NeurIPS! A new, exciting experience...',
          description: "",
          section: "News",},{id: "news-i-serve-as-the-organizer-of-the-4th-workshop-on-practical-deep-learning-practical-dl-2025-please-submit-your-papers",
          title: 'I serve as the Organizer of the 4th Workshop on Practical Deep Learning...',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-ijcai-2025",
          title: 'One paper is accepted by IJCAI 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-acl-2025",
          title: 'One paper is accepted by ACL 2025.',
          description: "",
          section: "News",},{id: "news-i-was-hired-as-a-doctoral-supervisor-at-harbin-institute-of-technology",
          title: 'I was hired as a Doctoral Supervisor at Harbin Institute of Technology.',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-by-neural-networks-and-ieee-tifs",
          title: 'Two papers are accepted by Neural Networks and IEEE TIFS.',
          description: "",
          section: "News",},{id: "news-three-papers-are-accepted-by-acm-mm-acm-mm-demo-track-icml-mas-outstanding-paper-award",
          title: 'Three papers are accepted by ACM MM, ACM MM Demo Track, ICML-MAS (Outstanding...',
          description: "",
          section: "News",},{id: "news-we-won-the-winner-award-in-generative-large-model-security-track-on-workshop-amp-amp-challenge-on-deepfake-detection-localization-and-interpretability-ijcai-2025",
          title: 'We won the Winner Award in Generative Large Model Security Track on Workshop...',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-emnlp",
          title: 'One paper is accepted by EMNLP.',
          description: "",
          section: "News",},{id: "news-i-was-invited-as-an-editorial-board-member-of-journal-of-artificial-intelligence-virtual-reality-and-human-centered-computing-i-will-try-my-best-to-contribute-to-this-publication",
          title: 'I was invited as an Editorial Board Member of Journal of Artificial Intelligence,...',
          description: "",
          section: "News",},{id: "news-i-am-invited-as-the-area-chair-of-iclr-i-will-try-my-best-for-the-success-of-the-conference",
          title: 'I am invited as the Area Chair of ICLR! I will try my...',
          description: "",
          section: "News",},{id: "news-i-organize-the-special-issue-about-advanced-ai-techniques-for-trustworthy-and-practical-unmanned-vehicles-on-electronics-please-submit-your-manuscripts",
          title: 'I organize the special issue about ‘‘Advanced AI Techniques for Trustworthy and Practical...',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-neurips-congrats-to-jin-hu",
          title: 'One paper is accepted by NeurIPS, congrats to Jin Hu! 🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-i-was-selected-as-one-of-the-top-2-scientists-single-year-which-is-verifed-and-sourced-from-elsevier-and-stanford-university",
          title: 'I was selected as one of the Top 2% Scientists (Single Year), which...',
          description: "",
          section: "News",},{id: "news-i-was-informed-as-a-reviewing-editor-of-springer-nature",
          title: 'I was informed as a Reviewing Editor of Springer Nature. 🎉🎉🎉',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-ieee-tifs-congrats-to-tong-chen",
          title: 'One paper is accepted by IEEE TIFS, congrats to Tong Chen!🎉🎉🎉',
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
