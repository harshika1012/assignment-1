# Personal Website - Assignment 1

## Introduction
This project is a personal website built using HTML, CSS, and JavaScript as part of the "Introduction to Software Systems" course. The website is designed to showcase my background, skills, and achievements, along with interactive features such as a blog and a dark mode toggle. The site is deployed on GitHub Pages and the IIIT Web server.

## Features
- **About Me Section**: A brief introduction about myself.
- **Profile Image**: Displays my profile picture.
- **Education Background**: Lists my academic qualifications.
- **Achievements Section**: Showcases notable accomplishments.
- **Skills Section**: Highlights my technical and non-technical skills.
- **Blog Section**:
  - Contains two placeholder blogs.
  - Blog pages open in a new tab.
  - Each blog has a like counter and a comments section, both of which persist using local storage.
- **Navigation Bar**:
  - Provides easy access to different sections of the website.
  - Clicking on a tab directs users to the corresponding section.
- **Social Media Links**:
  - Includes icons linking to my GitHub, email, and other socials.
  - Email link opens the default email client using the `mailto` attribute.
- **Resume Download**: A hyperlink to download my resume.
- **Dark Mode Toggle**: Allows switching between light and dark themes for better user experience.
- **Responsive Design**: Ensures proper display on both mobile and desktop devices.
- **Flexbox Layout**: Used for efficient content organization.
- **Animations and Transforms**: Enhances user experience with smooth transitions and effects.

## Deployment
The website is deployed at:
- **GitHub Pages**: [Insert GitHub.io Page Link]
- **IIIT Web Server**: [Insert IIIT Web Link]

### Steps to Deploy on IIIT Web Server
1. Copy the website files using:
   ```sh
   scp -r * <firstname>.<lastname>@web.iiit.ac.in:~/public_html
   ```
2. SSH into the server:
   ```sh
   ssh <firstname>.<lastname>@web.iiit.ac.in
   ```
3. Set the necessary file permissions:
   ```sh
   chmod -R a+rx ~
   ```
4. Access the website at: `https://web.iiit.ac.in/~<username>/`

## Technologies Used
- **HTML**: Structure of the website.
- **CSS**: Styling and layout.
- **JavaScript**: Interactive elements, local storage, and dark mode.

## Future Enhancements
- Add more blog posts and improve the UI.
- Implement a contact form.
- Enhance animations and transitions.

---
This project was completed as an individual assignment for "Introduction to Software Systems, Spring 2024."

