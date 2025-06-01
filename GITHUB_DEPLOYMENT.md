# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages for free hosting.

## Prerequisites

- GitHub account
- Git installed on your computer
- The portfolio files from the zip package

## Step-by-Step Deployment Instructions

### Step 1: Create a New GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository `portfolio` (or any name you prefer)
5. Make sure it's set to **Public** (required for free GitHub Pages)
6. ✅ Check "Add a README file"
7. Click "Create repository"

### Step 2: Prepare Your Local Files

1. Extract the portfolio zip file to a folder on your computer
2. Navigate to the `portfolio-website` folder
3. Open a terminal/command prompt in this folder

### Step 3: Initialize Git and Connect to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under "Source", select **GitHub Actions**
5. The deployment will start automatically

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be available at:
   `https://YOUR_USERNAME.github.io/portfolio/`

## Important Notes

### Repository Name Matters
- If you name your repository `YOUR_USERNAME.github.io`, your site will be at `https://YOUR_USERNAME.github.io/`
- If you use any other name (like `portfolio`), your site will be at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

### Custom Domain (Optional)
If you have a custom domain:
1. Go to repository Settings > Pages
2. Add your custom domain in the "Custom domain" field
3. Create a CNAME file in your repository root with your domain

### Updating Your Portfolio
To update your portfolio:
1. Make changes to your local files
2. Commit and push:
```bash
git add .
git commit -m "Update portfolio"
git push
```
3. GitHub Actions will automatically redeploy your site

## Troubleshooting

### Build Fails
- Check the Actions tab for error details
- Ensure all dependencies are in package.json
- Make sure the base path in vite.config.js matches your repository name

### Site Not Loading
- Wait 5-10 minutes after first deployment
- Check that GitHub Pages is enabled in Settings
- Verify the correct URL format

### Images Not Showing
- Ensure all image paths are relative
- Check that images are in the src/assets folder
- Verify the build includes all assets

## Alternative: Using GitHub Desktop

If you prefer a GUI:
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your repository
3. Copy portfolio files to the cloned folder
4. Commit and push through the GUI

## Support

If you encounter issues:
1. Check the GitHub Actions logs in the Actions tab
2. Verify your repository settings
3. Ensure your repository is public
4. Check that the workflow file is in `.github/workflows/deploy.yml`

Your portfolio will be live and accessible worldwide once deployed! 🚀

