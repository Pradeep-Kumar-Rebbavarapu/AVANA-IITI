const { AllEventsData } = require('./data/EventsPageData/AllEventsData');
const { AllProjectsData } = require('./data/ProjectsPageData/AllProjectsData');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const paths = [];
    
    AllEventsData?.forEach(event => {
      paths.push(`/Events/${event.id}`);
    });
    
    AllProjectsData?.forEach(project => {
      paths.push(`/Projects/${project.id}`);
    });
    
    return paths.map(path => ({
      loc: path,
	  changefreq: 'daily',
      priority: 0.7,
    }));
  }
};
