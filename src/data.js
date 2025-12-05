// src/data.js

export const blogInfo = {
  name: "My Professional Blog",
  description: "Insights on technology, design, and life.",
  copyright: "© 2024 My Name. All rights reserved."
};

export const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    category: "Tech",
    date: "Oct 12, 2023",
    author: "Alex Dev",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    summary: "Why React and Tailwind are changing the way we build websites forever.",
    content: `
      <p>Web development is evolving rapidly. Gone are the days of clunky tables and float-based layouts.</p>
      <br/>
      <h3 class="text-xl font-bold mb-2">Why Components Matter</h3>
      <p>React allow us to break down complex UIs into bite-sized, reusable pieces. This modularity is key to scaling applications.</p>
      <br/>
      <p>Combined with utility-first CSS frameworks like Tailwind, we can prototype faster than ever before.</p>
    `
  },
  {
    id: 2,
    title: "Mastering Minimalist Design",
    category: "Design",
    date: "Oct 15, 2023",
    author: "Sarah Design",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
    summary: "Less is more. How to create clean, effective user interfaces.",
    content: `
      <p>Minimalism isn't just about using white space; it's about removing distractions.</p>
      <br/>
      <p>When you focus on the essential elements, you guide the user's eye exactly where you want it to go. Typography plays a huge role here.</p>
    `
  },
  {
    id: 3,
    title: "10 Tips for Productivity",
    category: "Lifestyle",
    date: "Nov 01, 2023",
    author: "Mike Productive",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    summary: "How to get more done in less time without burning out.",
    content: `
      <p>Productivity is a marathon, not a sprint. Here are my top tips:</p>
      <ul class="list-disc ml-5 mt-4">
        <li>Wake up early</li>
        <li>Time block your schedule</li>
        <li>Take regular breaks</li>
      </ul>
    `
  }
];