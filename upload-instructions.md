# Upload Website to GitHub - Step by Step

## Prerequisites
- GitHub account (create at github.com if you don't have one)
- Git installed on your computer

## Steps:

### 1. Create a new repository on GitHub
1. Go to github.com and sign in
2. Click the "+" icon in top right corner
3. Select "New repository"
4. Name it: `maze-of-mayhem-landing` (or any name you prefer)
5. Make it Public if you want free GitHub Pages hosting
6. Don't initialize with README (since you already have files)
7. Click "Create repository"

### 2. Upload your files using command line
Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit - Maze of Mayhem landing page"

# Add GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/maze-of-mayhem-landing.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages (Free Hosting)
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at: `https://YOUR_USERNAME.github.io/maze-of-mayhem-landing`

## Alternative: Upload files directly on GitHub.com
1. Create new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all your files (index.html, styles.css, script.js, maze-of-mayhem-hero.png, README.md)
4. Add commit message: "Add Maze of Mayhem landing page"
5. Click "Commit changes"
6. Enable GitHub Pages as described above

## Your files to upload:
- index.html
- styles.css  
- script.js
- maze-of-mayhem-hero.png
- README.md (optional)

## After uploading:
- Your website will be live at the GitHub Pages URL
- Any changes you make can be updated by pushing new commits
- The site updates automatically when you push changes