import { Service, Stat } from '../types';

export const services: Service[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    shortDescription: 'Drive efficiency with Intelligent Process Automation, Advanced Analytics, GenAI, and Smart Decision-Making solutions.',
    fullDescription: 'Automate processes, analyze data intelligently, and make smarter decisions—driving efficiency and innovation across every level. We integrate cutting-edge tools like GenAI assistants and predictive modeling to foster creativity and future-ready solutions. Our deployments are designed for scalability, security, and compliance, ensuring you turn raw data into actionable insights.',
    iconName: 'Cpu',
    features: [
        'Process Automation: RPA, Workflows & Human-in-the-loop',
        'Data Analytics: Predictive Modeling, Dashboards & Governance',
        'Smart Decisions: Real-time Recommendations & Scenarios',
        'AI Innovation: GenAI Assistants, Copilots & MLOps',
        'Scalable Security: RBAC, Hybrid Cloud & Compliance'
    ],
    // Image: Abstract AI/Neural Network
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'erp-solutions',
    title: 'ERP Solutions',
    // SEO Meta Description updated with key offerings
    shortDescription: 'Streamline operations with end-to-end ERP Consulting, Integration, Implementation, and Advanced Reporting & Analytics.',
    fullDescription: 'Experience smoother operations, happier customers, and accelerated business growth with ERP. We specialize in implementation, customization, and migration tailored to your unique needs. From HR and payroll to accounting, CRM, and project management, our unified solutions automate and simplify every corner of your organization. No matter your industry, our experts help you harness the full potential of this game-changing platform.',
    iconName: 'Database',
    // Updated features to match the provided text categories
    features: [
        'ERP Consulting: Strategic planning & process enhancement',
        'ERP Integration: Seamless connections with CRM & HR apps',
        'ERP Implementation: Full setup, data migration & training',
        'ERP Report & Analysis: Custom dashboards & actionable insights'
    ],
    // Image: Business Analytics/Dashboard/Logistics
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    shortDescription: 'End-to-end custom software development: Discovery, Architecture, UI/UX, Agile Engineering, DevOps, and Support for scalable systems.',
    fullDescription: 'We deliver scalable, secure, and user-centric software solutions tailored to your context. From initial discovery and clear requirements to robust architecture and intuitive UI/UX design, we ensure quality at every step. Our agile process incorporates seamless integrations, automated DevOps pipelines, and dedicated support to keep your software secure, performant, and continually improving.',
    iconName: 'Code',
    features: [
        'Discovery: Workshops, User Stories & Scope Definition',
        'Architecture: Microservices, Cloud/Hybrid & Security',
        'UI/UX: Wireframes, Prototypes & Accessibility (WCAG)',
        'Agile Dev & QA: Scrum Sprints, CI & Automated Testing',
        'Integrations: REST/GraphQL APIs, ERP & Event Buses',
        'DevOps: CI/CD Pipelines, Kubernetes & Observability',
        'Support: SLAs, Incident Response & Performance Tuning'
    ],
    // Image: Code/Development
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'business-consulting',
    title: 'Business Process Consulting',
    shortDescription: 'Optimize operations with Process Mapping, Gap Analysis, Lean Six Sigma, and Change Management strategies to drive efficiency and accountability.',
    fullDescription: 'We align your organizational structure, roles, and governance with strategic goals to drive tangible growth. Our approach visualizes current workflows (AS-IS) to reveal inefficiencies, identifies control weaknesses, and embeds a culture of continuous improvement using Lean/Six Sigma. We ensure technology adoption through structured change management, resulting in smoother operations, reduced cycle times, and clear accountability.',
    iconName: 'BarChart',
    features: [
        'Process Mapping: SIPOC, SOPs & RACI ownership',
        'Gap Analysis: Root Cause (5-Why) & Risk Mitigation',
        'Org Design: Target Operating Model (TOM) & Governance',
        'Performance Mgmt: SMART KPIs, OKRs & Benchmarking',
        'Continuous Improvement: Lean/Six Sigma, Kaizen & DMAIC',
        'Change Management: ADKAR Model, Training & Adoption'
    ],
    // Image: Strategy/Whiteboard session
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800'
  }
];

export const stats: Stat[] = [
  { value: '20+', label: 'Proven Expertises' },
  { value: '10+', label: 'Trusted by Leaders' },
  { value: '95%', label: 'On Time Delivery' },
  { value: '25+', label: 'Successful Implementations' },
];

export const contactInfo = {
  phone: '+91 999.084.9424',
  email: 'contact@lemtos.com',
  address: 'B-128, 1st Floor, Sector 2, Noida, India 201301'
};