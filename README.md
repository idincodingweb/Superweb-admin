# PostPalace - Modern Content Management Platform

![PostPalace Banner]

PostPalace is a modern, responsive content management platform built with React and Supabase. It provides a seamless experience for both readers and administrators to manage and consume content.

## Developer
**Idin Iskandar, S.Kom**
- Full Stack Developer
- Content Management System Specialist
- UI/UX Designer

## Features

### For Readers
- **Modern Blog Interface**: Clean and intuitive design for optimal reading experience
- **Category Filtering**: Easy navigation through different content categories
- **Comment System**: Interactive comment section with admin reply capability
- **Responsive Design**: Perfect viewing experience across all devices
- **Related Posts**: Smart content recommendation system
- **Real-time Updates**: Instant content and comment updates

### For Administrators
- **Secure Admin Dashboard**: Protected admin area with authentication
- **Content Management**: 
  - Create, edit, and delete posts
  - Manage categories
  - Upload images
  - Track post views
- **Comment Management**: 
  - View all comments
  - Reply to comments
  - Moderate discussions
- **Analytics**: 
  - View post performance
  - Track user engagement
  - Monitor view statistics

## Technology Stack

### Frontend
- **React 18**: Modern UI development with hooks and functional components
- **TypeScript**: Type-safe development environment
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Modern icon library
- **Date-fns**: Modern date utility library
- **React Hot Toast**: Elegant notifications
- **Recharts**: Composable charting library

### Backend
- **Supabase**: Open source Firebase alternative
  - Authentication
  - PostgreSQL Database
  - Real-time subscriptions
  - Row Level Security
  - Storage

## Project Structure
```
postpalace/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── Navbar.tsx
│   ├── lib/            # Utility functions and configurations
│   │   └── supabase.ts
│   ├── pages/          # Application pages
│   │   ├── AboutPage.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── AdminLogin.tsx
│   │   ├── DisclaimersPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── PostDetail.tsx
│   │   └── PrivacyPolicyPage.tsx
│   ├── App.tsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Design Philosophy

PostPalace follows a modern, minimalist design approach inspired by popular platforms like Linear and Notion. Key design elements include:

- **Typography**: Clean, readable fonts with Inter as the primary typeface
- **Color Scheme**: Professional blue-based palette with careful use of white space
- **Components**: Modern, shadow-based card designs with smooth hover effects
- **Animations**: Subtle transitions and micro-interactions for better UX
- **Layout**: Responsive grid system with consistent spacing
- **Accessibility**: High contrast ratios and semantic HTML

## Database Schema

The application uses three main tables in Supabase:

1. **posts**
   - id (PK)
   - title
   - content
   - category
   - image_url
   - created_at
   - views

2. **comments**
   - id (PK)
   - post_id (FK)
   - author
   - content
   - created_at
   - admin_reply

3. **post_views**
   - id (PK)
   - post_id (FK)
   - date
   - views

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/postpalace.git
```

2. Install dependencies
```bash
cd postpalace
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Add your Supabase credentials
```

4. Run the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## Security Features

- **Authentication**: Secure admin login system
- **Row Level Security**: Database-level access control
- **Protected Routes**: Client-side route protection
- **Input Validation**: Comprehensive form validation
- **XSS Prevention**: Automatic escaping of user input
- **CORS Configuration**: Controlled API access

## Contributing

While this is a personal project by Idin Iskandar, S.Kom, contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries about this project, please contact:

**Idin Iskandar, S.Kom**  
Full Stack Developer  
Kontak : idincode@gmail.com

---

© 2024 PostPalace. Developed by Idin Iskandar, S.Kom. All rights reserved.
