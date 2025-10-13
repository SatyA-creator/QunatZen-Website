# Team Member Photo Setup Instructions

## Quick Setup Guide

### 1. Replace Placeholder Images
To use actual team member photos instead of the current Unsplash placeholders:

1. **Add photos to**: `public/team/` folder
2. **Required file names**:
   - `sarah-chen.jpg` - Dr. Sarah Chen (CEO & Co‑Founder)
   - `marcus-rodriguez.jpg` - Marcus Rodriguez (CTO & Co‑Founder)
   - `yuki-tanaka.jpg` - Dr. Yuki Tanaka (Head of Research)
   - `elena-petrov.jpg` - Elena Petrov (VP of Engineering)
   - `james-park.jpg` - James Park (Head of Business Development)
   - `amira-hassan.jpg` - Dr. Amira Hassan (Security Architect)

### 2. Update Code (Optional)
If you want to use the local images as primary instead of Unsplash:

In `src/pages/About.tsx`, swap the `image` and `fallbackImage` properties:
```tsx
// Change from:
image: "/team/sarah-chen.jpg",
fallbackImage: "https://images.unsplash.com/..."

// To:
image: "https://images.unsplash.com/...",
fallbackImage: "/team/sarah-chen.jpg"
```

### 3. Current Behavior
- **Primary**: High-quality Unsplash professional headshots
- **Fallback**: Local team photos (when available)
- **Default**: Gradient avatar with user icon

### 4. Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: 300x300px minimum (square aspect ratio)
- **Quality**: High resolution professional headshots
- **Style**: Consistent lighting and background preferred

### 5. Features Included
- ✅ Responsive design (mobile to desktop)
- ✅ Smooth hover animations
- ✅ Loading states with skeleton
- ✅ Error handling with fallbacks
- ✅ Professional card layout
- ✅ Social media links
- ✅ Expertise badges
- ✅ Image optimization