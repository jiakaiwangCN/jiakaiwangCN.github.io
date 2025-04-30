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
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-statement-renshuai-tao",
        
          title: 'Statement | Renshuai Tao <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Materials for courses you taught. Replace this text with your description.",
        section: "Posts",
        handler: () => {
          
            window.open("https://rstao-bjtu.github.io/Statement/", "_blank");
          
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
      },{id: "post-vscode安装指南-csdn博客",
        
          title: 'VSCode安装指南-CSDN博客 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "文章浏览阅读758次。VSCode安装指南这是一篇傻瓜式的VSCode安装指南，还包括如何安装Python扩展工具，使其可以运行Python，多图预警！~~VSCode简介VSCode全称是Visual Studio Code，是由Microsoft出品的新一代编辑器，同时丰富的扩展使得VSCode可以做到IDE能做的事情。下载VSCode安装包点击这个VSCode下载安装文件，如下图：下载的安装包文件如下图：安装VSCode按照下图的流程安装这里可以选择自定义安装位置注意，这里的最好选上，对新手友",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.csdn.net/buaa1406/article/details/106125011?spm=1001.2014.3001.5502", "_blank");
          
        },
      },{id: "post-慎",
        
          title: "慎",
        
        description: "作于发癫的夜晚",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/forget/";
          
        },
      },{id: "post-win10环境下安装pytorch踩坑实录-csdn博客",
        
          title: 'Win10环境下安装pytorch踩坑实录-CSDN博客 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "文章浏览阅读2.1w次，点赞5次，收藏24次。本文详述了在Windows 10环境下使用pip安装PyTorch及遇到的常见问题，包括错误的pip指令、pip版本过低、安装失败等，并分享了手动下载whl文件的成功安装经验。",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.csdn.net/buaa1406/article/details/83104158?spm=1001.2014.3001.5502", "_blank");
          
        },
      },{id: "post-基于扩展c0文法的编译器设计-part3-csdn博客",
        
          title: '基于扩展C0文法的编译器设计（Part3）-CSDN博客 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "文章浏览阅读5.5k次，点赞3次，收藏2次。代码main.cpp#include #include #include #include #include #include &quot;asm.cpp&quot;#define after_switch 1using namespace std ;int main(){    string fileNam",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.csdn.net/buaa1406/article/details/56667985?spm=1001.2014.3001.5502", "_blank");
          
        },
      },{id: "post-基于扩展c0文法的编译器设计-part2-csdn博客",
        
          title: '基于扩展C0文法的编译器设计（Part2）-CSDN博客 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "文章浏览阅读4.2k次。2．类/方法/函数功能词法分析部分：                    函数名            功能                    Int isSpace（）等            判断相关字符种类                             void getch（）            读取一个字符",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.csdn.net/buaa1406/article/details/56666397?spm=1001.2014.3001.5502", "_blank");
          
        },
      },{id: "post-基于扩展c0文法的编译器设计-part1-csdn博客",
        
          title: '基于扩展C0文法的编译器设计（Part1）-CSDN博客 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "文章浏览阅读4.4k次。本文档详细介绍了基于扩展C0文法的编译器设计，涵盖了文法说明、目标代码解释及初步的优化方案。内容包括文法规则，如加法、乘法和关系运算符，标识符、数字和字符定义，以及程序结构。此外，还涉及到常量和变量声明，函数定义，以及表达式和语句的解析。目标代码以MIPS指令形式表示，并进行了窥孔优化和全局变量替换等基础优化。",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.csdn.net/buaa1406/article/details/56666239?spm=1001.2014.3001.5502", "_blank");
          
        },
      },{id: "post-词法分析程序实践-csdn博客",
        
          title: '词法分析程序实践-CSDN博客 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "文章浏览阅读1.9k次，点赞2次，收藏7次。这是笔者按照课本中的思路实现的词法分析程序，具体细节和意义请参考 《编译技术》张莉等著.–北京：高等教育出版社,2016.9.ISBN: 978-7-04-046317-0 注：本程序使用文件读入的方法进行字符的读取，每次识别一个词，返回值一个词的类型，类型码在注释中给出。 代码如下：#include #include #include",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.csdn.net/buaa1406/article/details/52749906?spm=1001.2014.3001.5502", "_blank");
          
        },
      },{id: "post-关于关系代数中除法的理解以及如何用基本运算表示除法-关系代数除法怎么理解-csdn博客",
        
          title: '关于关系代数中除法的理解以及如何用基本运算表示除法_关系代数除法怎么理解-CSDN博客 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "文章浏览阅读2.2w次，点赞22次，收藏36次。本文详细解析了关系代数中的除法运算，并通过基本运算推导出除法的具体步骤。介绍了除法的定义及如何利用投影、笛卡尔积等操作实现除法运算。",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.csdn.net/buaa1406/article/details/52614461?spm=1001.2014.3001.5502", "_blank");
          
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
