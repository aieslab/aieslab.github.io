// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-join-us",
          title: "Join us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Team members and collaborators",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects and ongoing work at AIES Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-launching-the-aies-lab",
        
          title: "Launching the AIES Lab",
        
        description: "Introducing the Autonomous and Intelligent Energy Systems Lab",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/lab-launch/";
          
        },
      },{id: "projects-hvac-amp-industrial-cooling",
          title: 'HVAC &amp;amp; Industrial Cooling',
          description: "Model predictive control and reinforcement learning for chilled-water plants, cooling towers, and building HVAC systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hvac_mpc/";
            },},{
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
