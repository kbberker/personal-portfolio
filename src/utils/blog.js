import { marked } from 'marked';

// Blog posts data (in a real app, this would be dynamic)
export const blogPosts = [
    {
        slug: 'welcome-to-my-blog',
        title: 'Welcome to My Blog',
        date: '2024-01-15',
        category: 'Personal',
        excerpt: 'Starting my journey of sharing thoughts and experiences through writing...',
        content: `# Welcome to My Blog

Hello and welcome to my personal blog! I'm excited to start sharing my thoughts, experiences, and insights with you.

## Why I'm Starting This Blog

I've been working in technology for several years now, and I've learned so much along the way. I believe that sharing knowledge is one of the best ways to learn and grow, both for myself and for others.

## What You Can Expect

On this blog, you'll find:

- **Technical Tutorials**: Step-by-step guides on various programming topics
- **Personal Reflections**: Thoughts on career development and life lessons
- **Project Showcases**: Updates on my side projects and experiments
- **Industry Insights**: My take on trends and best practices

## Getting Started

This blog is built with simplicity in mind - just HTML, CSS, and JavaScript. No complex frameworks or build tools. I wanted to create something that I could easily maintain and that loads quickly.

Feel free to explore the site and let me know what you'd like to see more of!

---

*Thanks for reading! If you have any questions or suggestions, feel free to reach out.*`
    },
    {
        slug: 'learning-web-development',
        title: 'My Journey Learning Web Development',
        date: '2024-01-10',
        category: 'Technology',
        excerpt: 'Reflecting on my path from beginner to building this website...',
        content: `# My Journey Learning Web Development

Like many developers, my journey into web development started with curiosity and a desire to build things. Here's my story and some lessons learned along the way.

## The Beginning

It all started when I wanted to create a simple website for a side project. I had no prior experience with web development, but I was determined to learn.

I began with the basics:
- HTML for structure
- CSS for styling
- JavaScript for interactivity

## The Learning Process

### Online Resources
I relied heavily on free online resources:
- **MDN Web Docs**: Comprehensive documentation for HTML, CSS, and JavaScript
- **freeCodeCamp**: Interactive tutorials and projects
- **YouTube**: Countless tutorials and explanations

### Building Projects
The best way to learn was by building actual projects:
- A personal portfolio website
- A simple blog
- Interactive web applications

## Challenges Faced

### CSS Positioning
CSS positioning was one of the most frustrating concepts initially. Understanding the box model, flexbox, and grid took time and practice.

### JavaScript Fundamentals
JavaScript's asynchronous nature and callback hell were confusing at first. Learning about promises and async/await made things much clearer.

### Responsive Design
Making websites work on all screen sizes required a different way of thinking about layout and design.

## Tools and Technologies

Over time, I expanded my toolkit:

\`\`\`javascript
// Example of modern JavaScript features I learned
const fetchData = async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
\`\`\`

## Current Focus

Now I'm focusing on:
- Modern JavaScript frameworks (React, Vue)
- Backend development with Node.js
- Database design and management
- DevOps and deployment

## Advice for Beginners

1. **Start Small**: Don't try to learn everything at once
2. **Build Projects**: Apply what you learn immediately
3. **Don't Fear Failure**: Every bug is a learning opportunity
4. **Join Communities**: Connect with other developers
5. **Keep Learning**: Technology evolves constantly

## What's Next

I'm excited to continue this journey and share more about what I learn. Web development is a field that constantly evolves, and there's always something new to discover.

---

*What about you? What's your web development journey been like? I'd love to hear your story!*`
    }
];

export async function getBlogPosts() {
    // Sort by date (newest first)
    return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getBlogPostBySlug(slug) {
    const post = blogPosts.find(post => post.slug === slug);
    if (post) {
        return {
            ...post,
            htmlContent: marked.parse(post.content)
        };
    }
    return null;
}