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
  },{id: "nav-projects",
          title: "Projects",
          description: "Research projects and ongoing work at AIES Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Team members and collaborators",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-join-us",
          title: "Join us",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/join/";
          },
        },{id: "post-launching-the-aies-lab",
        
          title: "Launching the AIES Lab",
        
        description: "Introducing the Autonomous and Intelligent Energy Systems Lab",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/lab-launch/";
          
        },
      },{id: "projects-ai-driven-grid-flexible-data-centre-control",
          title: 'AI-Driven Grid-Flexible Data Centre Control',
          description: "Data centres usually run as inflexible loads. This project looks at how to coordinate IT workload scheduling with cooling operation so the site can respond to grid conditions without breaking thermal or SLA limits. We use RL and predictive models to test demand response strategies, peak shaving, and carbon-aware scheduling in simulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai_grid_flexible_datacentre/";
            },},{id: "projects-coordinated-air-side-and-water-side-control-in-high-rise-hotels",
          title: 'Coordinated Air-Side and Water-Side Control in High-Rise Hotels',
          description: "Large hotels have hundreds of FCUs running independently from the central chiller plant. We&#39;re developing a control architecture that links the two by predicting how much load flexibility exists across 441 rooms, feeding that into a plant-level MPC, and then mapping the results back to room-level setpoints. This lets the system treat cooling load as a controllable variable, improving overall efficiency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coordinated_airside_waterside_hotel/";
            },},{id: "projects-llm-based-autonomous-agents-for-facility-operations",
          title: 'LLM-Based Autonomous Agents for Facility Operations',
          description: "We&#39;re exploring how LLMs can help with building operations by combining a building ontology (Haystack-style), real-time BMS data, and tool execution for diagnostics. The agent can answer questions, interpret sensor trends, look up manuals, and run simple checks. Deployments include commercial offices, hotels, and retail properties in Southeast Asia.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm_autonomous_agents/";
            },},{id: "projects-fine-tuning-llms-for-hvac-diagnostics-and-building-operations",
          title: 'Fine-Tuning LLMs for HVAC Diagnostics and Building Operations',
          description: "General LLMs don&#39;t understand HVAC systems well enough for operational use. We&#39;re creating a domain-specific dataset (12,000+ examples) and an 800-question benchmark that covers equipment behavior, control logic, and fault interpretation. Fine-tuned models are evaluated against this benchmark to measure real improvements over off-the-shelf LLMs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm_finetuning_hvac/";
            },},{id: "projects-autonomous-agents-for-24-7-facility-operations",
          title: 'Autonomous Agents for 24/7 Facility Operations',
          description: "Building AI agents that can autonomously operate buildings with reliable reasoning and safe control actions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opportunity_autonomous_agents/";
            },},{id: "projects-automated-building-digitization-with-llm-pipelines",
          title: 'Automated Building Digitization with LLM Pipelines',
          description: "Automating metadata creation using LLMs to extract information from BIM files and building documentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opportunity_building_digitization/";
            },},{id: "projects-building-ontology-for-llm-based-reasoning",
          title: 'Building Ontology for LLM-Based Reasoning',
          description: "Developing richer ontologies using Brick Schema and graph databases to support LLM reasoning about building systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opportunity_building_ontology/";
            },},{id: "projects-grid-flexible-data-centre-control",
          title: 'Grid-Flexible Data Centre Control',
          description: "Coordinating IT workload scheduling with cooling operations to enable demand response and carbon-aware computing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opportunity_grid_datacentre/";
            },},{id: "projects-fine-tuning-llms-for-hvac-diagnostics",
          title: 'Fine-Tuning LLMs for HVAC Diagnostics',
          description: "Building domain-specialized LLMs that understand HVAC systems through fine-tuning and benchmark development.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opportunity_llm_finetuning/";
            },},{id: "projects-physics-informed-mpc-for-chiller-plants",
          title: 'Physics-Informed MPC for Chiller Plants',
          description: "Building MPC controllers that combine physics-based chiller models with data-driven load forecasts for optimal plant operation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opportunity_mpc_chiller/";
            },},{id: "projects-multi-ahu-coordination-and-adaptive-control-for-large-retail-spaces",
          title: 'Multi-AHU Coordination and Adaptive Control for Large Retail Spaces',
          description: "Coordinated control for multiple AHUs cooling the same retail floor space with adaptive setpoints and VSD adjustment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opportunity_multi_ahu/";
            },},{id: "projects-pmv-based-air-side-optimization-for-vav-systems",
          title: 'PMV-Based Air-Side Optimization for VAV Systems',
          description: "We&#39;re developing a coordinated control scheme for AHUs and VAV boxes using PMV as the feedback variable.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/opportunity_pmv_vav/";
            },},{id: "projects-physics-informed-model-predictive-control-for-industrial-chiller-plants",
          title: 'Physics-Informed Model Predictive Control for Industrial Chiller Plants',
          description: "We&#39;re building an MPC controller for chiller plants that combines simple physics-based performance models with data-driven cooling-load forecasts. The goal is to choose the best chiller staging, setpoints, and part-load distribution so the plant runs efficiently while still meeting cooling demand and equipment limits.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/physics_informed_mpc_chiller/";
            },},{id: "projects-pmv-constrained-solar-pre-cooling-control-in-retail-buildings",
          title: 'PMV-Constrained Solar Pre-Cooling Control in Retail Buildings',
          description: "In large retail sites with rooftop solar, pre-cooling can reduce peak demand but risks discomfort. We&#39;re designing control logic that uses PMV as the comfort metric, pre-cools only when solar surplus is available, and limits grid demand during peak hours. This targets better comfort, better solar use, and lower grid stress.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pmv_solar_precooling/";
            },},{id: "projects-pmv-based-air-side-optimization-for-vav-systems",
          title: 'PMV-Based Air-Side Optimization for VAV Systems',
          description: "We&#39;re developing a coordinated control scheme for AHUs and VAV boxes using PMV as the feedback variable. The controller adjusts supply air temperature, pressure, and zone-level dampers/reheat to keep occupants comfortable while cutting cooling and fan energy in office and retail buildings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pmv_vav_optimization/";
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
