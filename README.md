# Marwan Khaled — Portfolio

Modern responsive portfolio for **Marwan Khaled Saeed Abdul Qadir**, built with Bootstrap 5, Bootstrap Icons, AOS animations and vanilla JavaScript.

## Features
- Responsive Bootstrap layout
- Animated hero and scroll reveal effects
- Dark / light mode
- About, Skills, Projects, Certificates and Contact sections
- GitHub / LinkedIn / Email links
- Easy content editing from one file: `js/script.js`
- Certificate and project image support
- Ready for GitHub Pages

## How to edit

Open **`js/script.js`** and update the `PORTFOLIO` object.

### Change profile image
Set:
```js
profileImage: "assets/profile.jpg"
```
Then upload your image to `assets/profile.jpg`.

### Add a certificate
Add an object to the `certificates` array:
```js
{
  title: "Certificate Name",
  issuer: "Organization",
  year: "2026",
  image: "assets/certificates/my-certificate.jpg",
  icon: "bi-award",
  link: ""
}
```

### Add a project
Add an object to the `projects` array with title, description, image, tags and GitHub/demo links.

## Tech
Bootstrap 5.3 • Bootstrap Icons • AOS • JavaScript • HTML5 • CSS3
