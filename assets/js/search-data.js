// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/goswami-13/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/goswami-13/cv/";
          },
        },{id: "nav-guides",
          title: "Guides",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/goswami-13/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/goswami-13/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/goswami-13/teaching/";
          },
        },{id: "post-tabulating-6-dof-motion-kinematics-in-openfoam-using-python",
        
          title: "Tabulating 6-DOF Motion Kinematics in OpenFOAM using Python",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/06/blog-post-54/";
          
        },
      },{id: "post-setting-up-overset-mesh-cases-in-openfoam-made-easy",
        
          title: "Setting Up Overset Mesh Cases in OpenFOAM Made Easy",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/06/blog-post-53/";
          
        },
      },{id: "post-an-introduction-to-overset-mesh-in-openfoam",
        
          title: "An Introduction to Overset Mesh in OpenFOAM",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/06/blog-post-52/";
          
        },
      },{id: "post-python-tools-for-analyzing-and-visualizing-mesh-motion-simulations",
        
          title: "Python Tools for Analyzing and Visualizing Mesh Motion Simulations",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/05/blog-post-51/";
          
        },
      },{id: "post-simulating-pure-pitching-and-heaving-motions-in-openfoam",
        
          title: "Simulating Pure Pitching and Heaving Motions in OpenFOAM",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/03/blog-post-50/";
          
        },
      },{id: "post-dynamic-meshes-in-openfoam-a-deep-dive-into-prescribed-mesh-motion",
        
          title: "Dynamic Meshes in OpenFOAM: A Deep Dive into Prescribed Mesh Motion",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/03/blog-post-49/";
          
        },
      },{id: "post-meshes-in-motion-making-openfoam-go-with-the-flow",
        
          title: "Meshes in Motion: Making OpenFOAM Go with the Flow",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/03/blog-post-48/";
          
        },
      },{id: "post-3d-dmd-and-visualization-with-openfoam-and-python",
        
          title: "3D DMD and Visualization with OpenFOAM and Python",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/02/blog-post-47/";
          
        },
      },{id: "post-3d-pod-and-visualization-with-openfoam-and-python",
        
          title: "3D POD and Visualization with OpenFOAM and Python",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/02/blog-post-46/";
          
        },
      },{id: "post-optimizing-outputs-with-openfoam-39-s-writeobjects",
        
          title: "Optimizing Outputs with OpenFOAM&#39;s writeObjects",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/01/blog-post-45/";
          
        },
      },{id: "post-efficiently-extracting-sub-domains-from-openfoam-simulations",
        
          title: "Efficiently Extracting Sub-Domains from OpenFOAM Simulations",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/01/blog-post-44/";
          
        },
      },{id: "post-extracting-3d-snapshots-from-openfoam-for-modal-decomposition-analysis",
        
          title: "Extracting 3D Snapshots from OpenFOAM for Modal Decomposition Analysis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2025/01/blog-post-43/";
          
        },
      },{id: "post-building-your-python-toolbox-for-cfd",
        
          title: "Building Your Python Toolbox for CFD",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/12/blog-post-42/";
          
        },
      },{id: "post-data-driven-modal-analysis-with-modulo-and-openfoam",
        
          title: "Data-Driven Modal Analysis with MODULO and OpenFOAM",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/12/blog-post-41/";
          
        },
      },{id: "post-revealing-complex-dynamics-with-multi-resolution-dynamic-mode-decomposition",
        
          title: "Revealing Complex Dynamics with Multi-Resolution Dynamic Mode Decomposition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/11/blog-post-40/";
          
        },
      },{id: "post-compressed-sensing-reconstructing-the-whole-from-the-sparse",
        
          title: "Compressed Sensing: Reconstructing the Whole from the Sparse",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/11/blog-post-39/";
          
        },
      },{id: "post-the-role-of-l1-and-l2-norms-in-compressed-sensing",
        
          title: "The Role of L1 and L2 Norms in Compressed Sensing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/11/blog-post-38/";
          
        },
      },{id: "post-sparsity-promoting-dynamic-mode-decomposition-a-game-changer-in-data-driven-analysis",
        
          title: "Sparsity Promoting Dynamic Mode Decomposition: A Game Changer in Data-Driven Analysis",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/10/blog-post-37/";
          
        },
      },{id: "post-automatic-dimensionality-reduction-exploring-the-power-of-optimal-singular-value-hard-threshold-osvht",
        
          title: "Automatic Dimensionality Reduction: Exploring the Power of Optimal Singular Value Hard Threshold (OSVHT)...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/10/blog-post-36/";
          
        },
      },{id: "post-capturing-a-spatio-temporal-phenomenon-using-spectral-proper-orthogonal-decomposition-spod-and-openfoam",
        
          title: "Capturing a spatio-temporal phenomenon using Spectral Proper Orthogonal Decomposition (SPOD) and OpenFOAM",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/10/blog-post-35/";
          
        },
      },{id: "post-implementing-spectral-proper-orthogonal-decomposition-in-python",
        
          title: "Implementing Spectral Proper Orthogonal Decomposition in Python",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/10/blog-post-34/";
          
        },
      },{id: "post-beyond-pod-the-power-of-spectral-proper-orthogonal-decomposition",
        
          title: "Beyond POD: The Power of Spectral Proper Orthogonal Decomposition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/09/blog-post-33/";
          
        },
      },{id: "post-exploring-the-limitations-of-dynamic-mode-decomposition-dmd",
        
          title: "Exploring the Limitations of Dynamic Mode Decomposition (DMD)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/08/blog-post-32/";
          
        },
      },{id: "post-dynamic-mode-decomposition-using-openfoam-and-python",
        
          title: "Dynamic Mode Decomposition using OpenFOAM and Python",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/08/blog-post-31/";
          
        },
      },{id: "post-explore-dynamic-mode-decomposition-dmd-with-openfoam-simulation-data",
        
          title: "Explore Dynamic Mode Decomposition (DMD) with OpenFOAM Simulation Data",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/04/blog-post-30/";
          
        },
      },{id: "post-demystify-fluid-flow-with-dynamic-mode-decomposition-dmd",
        
          title: "Demystify Fluid Flow with Dynamic Mode Decomposition (DMD)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/05/blog-post-29/";
          
        },
      },{id: "post-beyond-complex-data-understanding-systems-with-dynamic-mode-decomposition",
        
          title: "Beyond Complex Data: Understanding Systems with Dynamic Mode Decomposition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/04/blog-post-28/";
          
        },
      },{id: "post-decoding-dynamics-the-mathematical-heart-of-dynamic-mode-decomposition-dmd",
        
          title: "Decoding Dynamics: The Mathematical Heart of Dynamic Mode Decomposition (DMD)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/07/blog-post-27/";
          
        },
      },{id: "post-taming-complexity-how-dynamic-mode-decomposition-is-revolutionizing-data-driven-modeling",
        
          title: "Taming Complexity: How Dynamic Mode Decomposition is Revolutionizing Data-Driven Modeling",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/07/blog-post-26/";
          
        },
      },{id: "post-extracting-the-essence-of-flow-pod-with-python-for-2d-openfoam-slices",
        
          title: "Extracting the Essence of Flow: POD with Python for 2D OpenFOAM Slices",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/04/blog-post-25/";
          
        },
      },{id: "post-exploring-proper-orthogonal-decomposition-pod-with-openfoam-simulation-data",
        
          title: "Exploring Proper Orthogonal Decomposition (POD) with OpenFOAM Simulation Data",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/04/blog-post-24/";
          
        },
      },{id: "post-capturing-dynamics-in-motion-unveiling-proper-orthogonal-decomposition-through-the-method-of-snapshots",
        
          title: "Capturing Dynamics in Motion: Unveiling Proper Orthogonal Decomposition through the Method of Snapshots...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/06/blog-post-23/";
          
        },
      },{id: "post-unveiling-the-secrets-of-flow-a-mathematical-introduction-to-proper-orthogonal-decomposition",
        
          title: "Unveiling the Secrets of Flow: A Mathematical Introduction to Proper Orthogonal Decomposition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/06/blog-post-22/";
          
        },
      },{id: "post-a-guide-to-prepping-your-openfoam-case-for-modal-decompositions",
        
          title: "A Guide to Prepping Your OpenFOAM Case for Modal Decompositions",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/06/blog-post-21/";
          
        },
      },{id: "post-from-pixels-to-personalities-the-power-of-eigenfaces-in-facial-recognition-using-svd-and-pca",
        
          title: "From Pixels to Personalities: The Power of Eigenfaces in Facial Recognition using SVD...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/05/blog-post-20/";
          
        },
      },{id: "post-the-art-of-data-reduction-how-pca-makes-sense-of-large-datasets",
        
          title: "The Art of Data Reduction: How PCA Makes Sense of Large Datasets",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/05/blog-post-19/";
          
        },
      },{id: "post-unlocking-insights-exploring-singular-value-decomposition-svd-and-its-dynamic-applications",
        
          title: "Unlocking Insights: Exploring Singular Value Decomposition (SVD) and its Dynamic Applications",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/05/blog-post-18/";
          
        },
      },{id: "post-from-swirling-fluids-to-hidden-patterns-unveiling-insights-with-singular-value-decomposition",
        
          title: "From Swirling Fluids to Hidden Patterns: Unveiling Insights with Singular Value Decomposition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/05/blog-post-17/";
          
        },
      },{id: "post-beyond-pretty-pictures-trusting-your-results-with-cfd-verification-and-validation-part-2",
        
          title: "Beyond Pretty Pictures: Trusting Your Results with CFD Verification and Validation (Part 2)...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/04/blog-post-16/";
          
        },
      },{id: "post-beyond-pretty-pictures-trusting-your-results-with-cfd-verification-and-validation-part-1",
        
          title: "Beyond Pretty Pictures: Trusting Your Results with CFD Verification and Validation (Part 1)...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/04/blog-post-15/";
          
        },
      },{id: "post-zero-to-hero-kickstarting-your-openfoam-journey",
        
          title: "Zero to Hero: Kickstarting Your OpenFOAM Journey",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/03/blog-post-14/";
          
        },
      },{id: "post-why-i-love-wsl-for-cfd-a-cfd-researcher-39-s-workflow-revealed",
        
          title: "Why I Love WSL for CFD: A CFD Researcher&#39;s Workflow Revealed",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/03/blog-post-13/";
          
        },
      },{id: "post-installing-foam-extend-on-ubuntu-and-windows-wsl",
        
          title: "Installing foam-extend on Ubuntu and Windows WSL",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/03/blog-post-12/";
          
        },
      },{id: "post-installing-openfoam-on-macos-with-docker",
        
          title: "Installing OpenFOAM on MacOS with Docker",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/03/blog-post-11/";
          
        },
      },{id: "post-the-final-frontier-conquering-openfoam-post-processing-with-command-line-power",
        
          title: "The Final Frontier: Conquering OpenFOAM Post-Processing with Command-Line Power",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/03/blog-post-10/";
          
        },
      },{id: "post-dive-deeper-with-fluidfoam-advanced-techniques-for-extracting-amp-analyzing-openfoam-data",
        
          title: "Dive Deeper with fluidfoam: Advanced Techniques for Extracting &amp; Analyzing OpenFOAM Data",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/03/blog-post-9/";
          
        },
      },{id: "post-conquer-openfoam-post-processing-with-the-power-of-function-objects-and-python",
        
          title: "Conquer OpenFOAM post-processing with the power of Function-objects and Python!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/02/blog-post-8/";
          
        },
      },{id: "post-the-openfoam-game-changer-why-you-need-mpi-and-how-to-use-it",
        
          title: "The OpenFOAM Game Changer: Why You Need MPI (and How to Use It)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/02/blog-post-7/";
          
        },
      },{id: "post-4-tutorials-to-rule-them-all-part-2",
        
          title: "4 Tutorials to Rule Them All!!! (Part 2)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/02/blog-post-6/";
          
        },
      },{id: "post-4-tutorials-to-rule-them-all-part-1",
        
          title: "4 Tutorials to Rule Them All!!! (Part 1)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/02/blog-post-5/";
          
        },
      },{id: "post-setting-up-petsc-in-openfoam",
        
          title: "Setting up PETSc in OpenFOAM",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/01/blog-post-4/";
          
        },
      },{id: "post-first-steps-setting-up-your-first-case-in-openfoam",
        
          title: "First Steps : Setting up your first case in OpenFOAM",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/01/blog-post-3/";
          
        },
      },{id: "post-installing-openfoam-on-ubuntu-and-windows-wsl",
        
          title: "Installing OpenFOAM on Ubuntu and Windows WSL",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/01/blog-post-2/";
          
        },
      },{id: "post-introduction-to-cfd",
        
          title: "Introduction to CFD",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/goswami-13/posts/2024/01/blog-post-1/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/goswami-13/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/goswami-13/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/goswami-13/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/goswami-13/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/goswami-13/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/goswami-13/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/goswami-13/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/goswami-13/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/goswami-13/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/goswami-13/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/goswami-13/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%75%62%68%61%6D.%67%6F%73%77%61%6D%69%31@%75%63%61%6C%67%61%72%79.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/goswami-13", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/goswami-shubham", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@goswami13", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9363-3429", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Shubham-Goswami-6/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=cgFq9IYAAAAJ", "_blank");
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
