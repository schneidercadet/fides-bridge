import { NextResponse } from 'next/server';

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  logo?: string;
  category: string;
}

// Job data - this would typically come from a database
const jobs: Job[] = [
  // Healthcare
  {
    id: 1,
    title: "Registered Nurse",
    company: "HealthCare Plus",
    location: "Boston",
    type: "Full Time",
    salary: "$75k",
    description: "Provide high-quality patient care in a dynamic hospital environment, collaborating with interdisciplinary teams.",
    logo: "/images/job-logos/colored.svg",
    category: "healthcare"
  },
  {
    id: 2,
    title: "Medical Doctor",
    company: "CityMed Hospital",
    location: "New York",
    type: "Full Time",
    salary: "$180k",
    description: "Diagnose and treat patients, coordinate care with specialists, and maintain comprehensive medical records.",
    logo: "/images/job-logos/fintechy.svg",
    category: "healthcare"
  },
  {
    id: 3,
    title: "Clinical Pharmacist",
    company: "PharmaCorp",
    location: "Chicago",
    type: "Remote",
    salary: "$110k",
    description: "Oversee medication therapy, conduct drug utilization reviews, and provide clinical consultations for healthcare teams.",
    logo: "/images/job-logos/gradient.svg",
    category: "healthcare"
  },
  
  // Science
  {
    id: 4,
    title: "Research Scientist",
    company: "BioGen Labs",
    location: "San Diego",
    type: "Full Time",
    salary: "$95k",
    description: "Conduct innovative research in biotechnology, design experiments, and analyze complex data sets.",
    logo: "/images/job-logos/greenly.svg",
    category: "science"
  },
  {
    id: 5,
    title: "Lab Technician",
    company: "MolecularSci",
    location: "Boston",
    type: "Full Time",
    salary: "$65k",
    description: "Perform laboratory tests, maintain equipment, and ensure quality control of experimental procedures.",
    logo: "/images/job-logos/colored.svg",
    category: "science"
  },
  {
    id: 6,
    title: "Environmental Scientist",
    company: "EcoSolutions",
    location: "Portland",
    type: "Hybrid",
    salary: "$78k",
    description: "Analyze environmental data, conduct field research, and prepare reports on environmental impact studies.",
    category: "science"
  },
  
  // Engineering
  {
    id: 7,
    title: "Mechanical Engineer",
    company: "EngineTech",
    location: "Detroit",
    type: "Full Time",
    salary: "$92k",
    description: "Design and develop mechanical components and systems for automotive applications.",
    logo: "/images/job-logos/fintechy.svg",
    category: "engineering"
  },
  {
    id: 8,
    title: "Civil Engineer",
    company: "BuildWorks",
    location: "Denver",
    type: "Full Time",
    salary: "$88k",
    description: "Design and oversee construction of infrastructure projects including roads, buildings, and water systems.",
    logo: "/images/job-logos/gradient.svg",
    category: "engineering"
  },
  {
    id: 9,
    title: "Electrical Engineer",
    company: "PowerGrid",
    location: "Austin",
    type: "Remote",
    salary: "$95k",
    description: "Design and develop electrical systems, test equipment, and solve complex electrical engineering problems.",
    category: "engineering"
  },
  
  // Development
  {
    id: 10,
    title: "Full Stack Developer",
    company: "TechNova",
    location: "Seattle",
    type: "Remote",
    salary: "$120k",
    description: "Build and maintain web applications using modern JavaScript frameworks and backend technologies.",
    logo: "/images/job-logos/greenly.svg",
    category: "development"
  },
  {
    id: 11,
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "San Francisco",
    type: "Hybrid",
    salary: "$125k",
    description: "Design and develop mobile applications for iOS and Android platforms using React Native.",
    logo: "/images/job-logos/colored.svg",
    category: "development"
  },
  {
    id: 12,
    title: "DevOps Engineer",
    company: "CloudNative",
    location: "Austin",
    type: "Remote",
    salary: "$130k",
    description: "Build and maintain CI/CD pipelines, containerization solutions, and cloud infrastructure.",
    category: "development"
  },
  
  // Management
  {
    id: 13,
    title: "Project Manager",
    company: "Innovate Inc",
    location: "Chicago",
    type: "Full Time",
    salary: "$105k",
    description: "Lead cross-functional teams to deliver projects on time and within budget, managing resources effectively.",
    logo: "/images/job-logos/fintechy.svg",
    category: "management"
  },
  {
    id: 14,
    title: "Product Manager",
    company: "TechVision",
    location: "Seattle",
    type: "Remote",
    salary: "$115k",
    description: "Drive product development from concept to launch, working with engineering, design, and marketing teams.",
    logo: "/images/job-logos/gradient.svg",
    category: "management"
  },
  {
    id: 15,
    title: "Healthcare Administrator",
    company: "MedCare Systems",
    location: "Houston",
    type: "Full Time",
    salary: "$98k",
    description: "Oversee healthcare facility operations, manage staff, and ensure compliance with healthcare regulations.",
    category: "management"
  },
  
  // Digital
  {
    id: 16,
    title: "Digital Marketing Specialist",
    company: "BrandBoost",
    location: "Toronto",
    type: "Hybrid",
    salary: "$72k",
    description: "Develop and implement digital marketing strategies across multiple channels to drive brand awareness and lead generation.",
    logo: "/images/job-logos/greenly.svg",
    category: "digital"
  },
  {
    id: 17,
    title: "UX/UI Designer",
    company: "Design Studios",
    location: "London",
    type: "Remote",
    salary: "$85k",
    description: "Create user-centered designs by understanding business requirements, user feedback, and usability principles.",
    category: "digital"
  },
  {
    id: 18,
    title: "Data Scientist",
    company: "DataMind",
    location: "San Francisco",
    type: "Full Time",
    salary: "$135k",
    description: "Analyze complex data sets to identify patterns, build predictive models, and extract actionable insights.",
    logo: "/images/job-logos/colored.svg",
    category: "digital"
  }
];

// GET handler for /api/jobs
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
  
  let filteredJobs = [...jobs];
  
  // Filter by category if provided
  if (category && category !== 'all') {
    filteredJobs = filteredJobs.filter(job => job.category === category);
  }
  
  // Filter by search term if provided
  if (search) {
    const searchLower = search.toLowerCase();
    filteredJobs = filteredJobs.filter(job => 
      job.title.toLowerCase().includes(searchLower) || 
      job.company.toLowerCase().includes(searchLower) || 
      job.description.toLowerCase().includes(searchLower)
    );
  }
  
  // Apply limit if provided
  if (limit) {
    filteredJobs = filteredJobs.slice(0, limit);
  }
  
  return NextResponse.json(filteredJobs);
}

// POST handler for future use (e.g., adding new jobs)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would typically validate the data and save to a database
    // For now, we'll just return the data that would be saved
    
    return NextResponse.json({ 
      message: 'Job created successfully',
      job: body 
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to create job' 
    }, { status: 400 });
  }
} 