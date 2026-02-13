# Ryze AI - UI Component Generator

Generate beautiful, production-ready React UI components from natural language descriptions using Groq AI's free API. Perfect for rapid prototyping and UI development.

## Features
✨ **AI-Powered Code Generation**
- Generate React components from simple text descriptions
- Uses Groq's free API with `mixtral-8x7b-32768` model
- Production-ready, responsive design code
- Inline styling with CSS-in-JS

📝 **Development Experience**
- Live preview with Sandpack
- Monaco code editor with syntax highlighting
- Version history and rollback capability
- Copy/download generated code
- Real-time code generation

🔒 **Security & Reliability**
- Input validation with Zod
- Error handling with fallback mock generator
- CORS enabled for secure API communication
- Environment variable configuration

## Tech Stack

**Frontend:**
- React 18
- Monaco Editor (VS Code editor)
- Sandpack (live preview)
- Axios (HTTP client)
- React Router v6
- Zustand/Redux state management

**Backend:**
- Node.js & Express.js
- Groq SDK (free AI API)
- MongoDB (version history)
- Zod (validation)
- CORS middleware

## Folder Structure
```
ryze-ai/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   └── App.jsx
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── services/      # Groq API service
│   │   ├── controllers/   # Request handling
│   │   ├── routes/        # API routes
│   │   └── server.js
│   └── package.json
├── shared/                # Shared utilities & types
├── ui-library/            # UI component templates
├── prompts/               # AI prompt templates
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Groq API key (free from [console.groq.com](https://console.groq.com))
- MongoDB (local or Atlas)

### 1. Clone & Install Dependencies

```bash
# Clone repository
git clone <repository-url>
cd ryze-ai

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Configure Environment Variables

**Server (.env)**
```env
MONGO_URI=mongodb://localhost:27017/ai-ui-generator
PORT=5000
GROQ_API_KEY=your_groq_api_key_here
NODE_ENV=development
```

**Client (.env)**
```env
REACT_APP_API_URL=http://localhost:5000
```

### 3. Run the Application

**Terminal 1 - Start Backend:**
```bash
cd server
npm start
# or for development with auto-reload
npm run dev
```

**Terminal 2 - Start Frontend:**
```bash
cd client
npm start
```

The frontend opens at `http://localhost:3000`

## Usage

1. **Enter a UI Description** - Type what component you want to create:
   - "Login form with gradient background"
   - "E-commerce product card"
   - "Dashboard with charts"
   - "FAQ accordion"

2. **Click Generate** - Groq AI generates React code

3. **Live Preview** - See the component render in real-time

4. **Copy/Edit** - Use the code in your projects or edit it further

5. **Version History** - Access previously generated versions

## Examples

### Login Form
```
"Beautiful login page with email/password inputs and sign-up link"
```

### Dashboard
```
"Admin dashboard with card layout showing stats and charts"
```

### E-Commerce
```
"Product card component with image, rating, price, and add-to-cart button"
```

## What Can It Generate?

Ryze AI can create virtually **any React component** you can describe! Here's what's possible:

### Forms & Authentication
- Login pages
- Sign-up forms
- Forgot password pages
- Contact forms
- Survey forms
- Multi-step forms
- OTP verification screens

### Dashboards
- Analytics dashboards
- Data visualization layouts
- Admin panels
- User profiles
- Settings pages
- Statistics cards
- Progress indicators

### E-Commerce
- Product listings/grids
- Shopping carts
- Checkout pages
- Product detail pages
- Category filters
- Search results
- Customer reviews section
- Wishlist pages
- Order tracking

### Content
- Blog layouts
- News feeds
- Social media feeds
- Comment sections
- Review sections
- Article cards
- Content galleries

### Navigation
- Header/navbar designs
- Sidebars
- Breadcrumbs
- Pagination
- Tab systems
- Dropdown menus
- Mobile navigation

### Business
- Pricing tables
- Team member cards
- Service cards
- Feature showcase
- Call-to-action sections
- Testimonials
- Client logos grid

### Additional Components
- Modals & dialogs
- Alerts & notifications
- Loading states
- Error pages (404, 500)
- Empty states
- Accordions & collapsible content
- Sliders & carousels
- Image galleries
- Video players
- Timelines
- Charts & graphs
- Tables & data grids
- Buttons & button groups
- Input fields (text, email, password, etc.)
- Checkboxes & radio buttons
- Toggles & switches
- Date pickers
- Dropdowns & select menus
- Tags & badges
- Progress bars
- Spinners & loaders
- Tooltips & popovers
- Spinners
- Ratings & stars

### Live Preview
✨ **See components render in real-time** as you describe them!
- Live preview with Sandpack
- Instant visual feedback
- Edit generated code and see changes immediately
- Copy production-ready code to your project

## API Endpoints

### Generate UI Code
```
POST /api/ui/generate
Body: { "prompt": "your description here" }
Response: { "success": true, "code": "React component code" }
```

## Getting Your Groq API Key

1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for free
3. Create an API key
4. Add it to your `.env` file

**Why Groq?**
- ✅ Completely free
- ✅ Fast inference (50+ tokens/sec)
- ✅ No rate limits on free tier
- ✅ Great for code generation
- ✅ Supports multiple AI models

## Development

### Project Scripts

**Server:**
```bash
npm start      # Production mode
npm run dev    # Development with nodemon
```

**Client:**
```bash
npm start      # Development server
npm run build  # Production build
npm test       # Run tests
```

## Project Structure Details

- **Components**: Reusable React UI components (Header, Footer, CodeEditor, LivePreview)
- **Services**: Groq API integration for UI generation
- **Controllers**: API request handlers
- **Routes**: Express route definitions
- **Utilities**: Helper functions and validations

## Error Handling

- Graceful fallback to mock generator if API fails
- Input validation on all API endpoints
- CORS error handling
- MongoDB connection error logging

## Performance Optimizations

- Monaco Editor lazy loading
- Code splitting with React Router
- Efficient state management with Zustand
- Optimized re-renders

## Security Considerations

- Environment variables for sensitive config
- CORS middleware configured
- Input sanitization with Zod
- No external UI library injection (pure React)

## License

MIT License - Feel free to use for personal and commercial projects

## Contributing

Feel free to fork, submit issues, or create pull requests!

## Support

For issues or questions:
1. Check the project structure
2. Verify API keys are configured
3. Ensure MongoDB is running
4. Check console logs for error messages

---

**Made with ❤️ using Groq AI's free API**
