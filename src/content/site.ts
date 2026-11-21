// Everything personal on the site lives here. Empty strings are hidden.
export const site = {
  name: 'Ethan McGee',
  // TODO: adjust once you know which roles you're targeting.
  tagline:
    'Software engineer who builds complete systems: firmware, backend services, optimization, and the screens people use.',
  // TODO: add your school, degree and graduation date.
  about: [
    "I'm a computer science student who likes taking a messy real-world problem all the way to production. As a freelancer I've designed and built two systems for WaterFlex, a water-treatment company: a technician scheduling platform with route optimization, and an IoT fleet monitor that runs from an ESP32 sensor up to a staff console.",
    "I'm graduating soon and looking for a full-time software engineering role.",
  ],
  links: {
    github: 'https://github.com/ethan-mcgee',
    linkedin: '', // TODO: e.g. https://www.linkedin.com/in/your-handle
    email: '', // TODO: the address you want recruiters to use
    resume: '', // TODO: put resume.pdf in /public and set this to '/resume.pdf'
  },
  skills: [
    { group: 'Languages', items: ['Java', 'TypeScript', 'C#', 'Python', 'C / C++', 'SQL'] },
    { group: 'Frameworks', items: ['Spring Boot', 'ASP.NET Core', 'React', 'Next.js', 'FastAPI', 'EF Core', 'Prisma'] },
    { group: 'Infrastructure', items: ['PostgreSQL', 'Docker', 'GitHub Actions', 'AWS', 'Nginx', 'Prometheus'] },
    { group: 'Other', items: ['Timefold and OR-Tools', 'GraphHopper and OpenStreetMap', 'ESP32 / PlatformIO', 'PyTorch'] },
  ],
}
