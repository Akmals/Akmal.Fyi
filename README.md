# Personal Website - Akmal Kuchkarov

A sleek, minimalist dark-themed personal portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🎨 Design Philosophy

This website follows Apple's minimalist design language with:
- Clean typography using Syne and DM Sans fonts
- Dark theme with cyan/green accent colors
- Smooth animations and transitions
- Responsive design that works on all devices

## 📁 File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling and layout
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## 🛠️ How to Customize

### 1. Update Your Personal Information

**In `index.html`:**
- Line 6: Update the page title
- Line 42-43: Change your name
- Lines 75-84: Update your About Me section
- Lines 110-167: Add/edit your projects
- Lines 222-245: Update your contact information

### 2. Change Colors

**In `styles.css` (lines 7-17):**
```css
:root {
    --bg-primary: #0a0a0a;           /* Main background */
    --accent-primary: #00ffaa;       /* Main accent color */
    --accent-secondary: #0099ff;     /* Secondary accent */
}
```

Just change these hex color codes to your preferred colors!

### 3. Add Your Projects

Find the projects section in `index.html` (around line 110) and duplicate this block:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
    </div>
    <p class="project-description">
        Description of your project goes here.
    </p>
    <div class="project-footer">
        <a href="YOUR_GITHUB_LINK" class="project-link">View Code →</a>
    </div>
</div>
```

### 4. Update Skills

In `index.html` (around line 178), edit the skill categories:

```html
<div class="skill-category">
    <h3 class="skill-category-title">Category Name</h3>
    <div class="skill-list">
        <span class="skill-item">Skill 1</span>
        <span class="skill-item">Skill 2</span>
    </div>
</div>
```

## 🚀 How to Deploy on Spaceship

### Method 1: Using cPanel File Manager
1. Log into your Spaceship Hosting Manager
2. Access cPanel
3. Open File Manager
4. Navigate to `public_html` folder
5. Upload all three files: `index.html`, `styles.css`, `script.js`
6. Your site should be live at your domain!

### Method 2: Using FTP (FileZilla)
1. Get your FTP credentials from Spaceship cPanel
2. Connect using FileZilla
3. Navigate to `public_html` folder
4. Drag and drop all files
5. Done!

## 🎯 Features Included

### Animations
- Smooth scroll navigation
- Fade-in sections as you scroll
- Staggered project card animations
- Hover effects on all interactive elements
- Custom cursor glow effect

### Responsive Design
- Mobile-first approach
- Works on phones, tablets, and desktops
- Navigation adapts to screen size

### Performance
- Vanilla JavaScript (no heavy frameworks)
- Optimized CSS with CSS variables
- Respects user's motion preferences
- Fast loading times

## 📝 Code Explanation

### HTML Structure
The site is organized into sections:
1. **Navbar** - Fixed navigation at the top
2. **Hero** - Landing section with your name and title
3. **About** - Brief introduction with highlights
4. **Projects** - Showcase of your work
5. **Skills** - Technical skills organized by category
6. **Contact** - Ways to reach you
7. **Footer** - Copyright and notes

### CSS Variables (Easy Customization)
All colors, fonts, and spacing are defined as CSS variables at the top of `styles.css`. 
Change one variable and it updates the entire site!

### JavaScript Features
- **Smooth Scrolling**: Click nav links for smooth scrolling
- **Scroll Animations**: Sections fade in as you scroll
- **Active Link Highlighting**: Current section highlights in nav
- **Custom Cursor**: Subtle glow effect follows your cursor
- **Performance**: Respects reduced-motion preferences

## 🔧 Troubleshooting

**Fonts not loading?**
- Make sure you have internet connection (fonts load from Google Fonts)

**Animations not working?**
- Check that `script.js` is properly linked in `index.html`
- Open browser console (F12) to check for errors

**Layout looks broken?**
- Clear your browser cache
- Check that `styles.css` is properly linked

## 📱 Mobile Responsiveness

The site automatically adjusts for different screen sizes:
- Desktop: Full navigation and multi-column layouts
- Tablet: Adjusted spacing and card layouts
- Mobile: Single column, stacked navigation

## 🎨 Optional Customizations

### Remove Custom Cursor
If you find the cursor effect too much, delete lines 91-127 in `script.js`

### Change Fonts
Edit the Google Fonts link in `index.html` (line 11) and update the font variables in `styles.css` (lines 20-21)

### Simplify Animations
Reduce or remove animation delays in `script.js` if you prefer instant effects

## 📧 Need Help?

If you run into issues or want to customize something specific:
1. Check the comments in the code - they explain what everything does
2. Use browser DevTools (F12) to inspect elements
3. Test changes locally before uploading to Spaceship

## 🎉 You're All Set!

Your website is ready to go. Just update the content, customize the colors, and deploy to Spaceship!

Good luck with your job search! 🚀
