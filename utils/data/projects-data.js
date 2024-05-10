import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Gym Website Frontend',
        description: "Led the frontend development efforts for a dynamic gym website aimed at enhancing user experience and engagement. Collaborated closely with design and backend teams to translate wireframes and mockups into responsive and visually appealing web interfaces. Implemented modern web technologies including HTML5, CSS3, and JavaScript to create intuitive and interactive features such as class schedules, membership registration, and trainer profiles. Ensured cross-browser compatibility and optimized performance for seamless navigation. Employed responsive design principles to guarantee consistent functionality across desktop and mobile devices",
        
        tools: ["Html","Css","Javascript"],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Flipkart Clone',
        description: "Played a pivotal role in developing the frontend of a Flipkart clone project, replicating the renowned e-commerce platform's user interface and functionalities. Leveraged expertise in HTML, CSS, and JavaScript to craft a visually stunning and intuitive web interface that closely mimicked Flipkart's design aesthetics. Collaborated closely with the design team to ensure pixel-perfect implementation of mockups and wireframes. Implemented dynamic features such as product listings, search functionality, cart management, and checkout process to provide users with a seamless shopping experience",

        tools: ["Html","Css","Javascript","React.js","Tailwind Css"],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'News Website Clone',
        description: "Led the frontend development efforts for a news website clone project, aimed at replicating the user interface and functionalities of a leading news platform. Collaborated closely with the design and backend teams to ensure seamless integration of frontend components with backend systems. Utilized HTML, CSS, and JavaScript to create a visually appealing and intuitive web interface that mirrored the design aesthetics of the original news website. Implemented features such as article listings, search functionality, category navigation, and multimedia content presentation to enhance user engagement",
        tools: ["Html","Css","Javascript","React.js","Tailwind Css","News Api","Material UI"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Leave Management System',
        description: "Led the development of a comprehensive Leave Management System utilizing the MERN (MongoDB, Express.js, React.js, Node.js) stack.  Designed and implemented a user-friendly web interface using React.js, ensuring seamless navigation and intuitive user experience. Integrated backend functionality using Node.js and Express.js to handle leave requests, approvals, and employee data management. Leveraged MongoDB to create a robust database schema for efficient data storage and retrieval. Implemented authentication and authorization mechanisms using JWT (JSON Web Tokens) to ensure secure access to the system. Utilized RESTful APIs for seamless communication between the frontend and backend components. " ,
        tools: ['NextJS', 'Material UI', 'React.js','Redux','Node.js','Mongodb','JWT auth'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];
