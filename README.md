# VoteGuide - AI-Powered Civic Education Assistant

VoteGuide is an interactive web application that helps users understand the election process, timelines, and voting steps in an engaging, easy-to-follow way. Built with React, Tailwind CSS, and AI-powered assistance.

## 🚀 Features

- **Election Timeline**: Interactive vertical timeline showing key phases from candidate registration to inauguration
- **Step-by-Step Voter Guide**: Multi-step interactive checklist to prepare for voting
- **AI Assistant**: Chat interface powered by Google Gemini API for personalized civic education
- **FAQ Section**: Searchable accordion with common election questions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Editorial/civic design with patriotic color scheme and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **AI Integration**: Google Gemini API (gemini-flash-latest)
- **Icons**: Emoji and SVG icons
- **Typography**: Playfair Display & Source Serif 4

## 🎨 Design System

### Colors
- Navy: `#0D1B2A` (primary)
- Ivory: `#F5F0E8` (background)
- Accent Red: `#C0392B` (highlights)
- Gold: `#D4A843` (accents)

### Typography
- Headings: Playfair Display (serif)
- Body: Source Serif 4 (serif)
- Editorial/civic aesthetic with paper texture overlays

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── TimelineStep.jsx
│   ├── ChecklistStep.jsx
│   ├── ChatBubble.jsx
│   ├── TypingIndicator.jsx
│   ├── SuggestedQuestion.jsx
│   ├── FAQAccordion.jsx
│   └── ProgressBar.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Timeline.jsx
│   ├── Guide.jsx
│   ├── Assistant.jsx
│   └── FAQ.jsx
├── data/               # Static data
│   ├── timelineData.js
│   ├── guideSteps.js
│   └── faqData.js
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd voteguide
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration in `tailwind.config.js`:
- Custom color palette
- Font family definitions
- Responsive breakpoints

### Gemini API Integration
To enable the AI assistant functionality:

1. Get your free API key from [Google AI Studio](https://aistudio.google.com/)
2. Replace `YOUR_GEMINI_API_KEY` in `src/pages/Assistant.jsx` with your actual API key
3. The app is pre-configured to use the free `gemini-flash-latest` model

⚠️ **Important**: In production, API keys should be handled securely using environment variables or a backend service.

## 📱 Pages & Features

### Home Page (`/`)
- Hero section with animated headline
- Feature cards for main sections
- Call-to-action buttons

### Timeline Page (`/timeline`)
- Interactive vertical timeline with 7 election phases
- Expandable cards with detailed information
- Scroll-triggered animations
- Voter action items for each phase

### Voter Guide (`/guide`)
- 6-step interactive checklist
- Progress tracking
- Tips, action items, and resources for each step
- Completion celebration

### AI Assistant (`/assistant`)
- Chat interface with "Lex" AI assistant
- Suggested starter questions
- Typing indicators and smooth animations
- Conversation history management

### FAQ Page (`/faq`)
- 18+ pre-written Q&A pairs
- Real-time search functionality
- Topic-based browsing
- Smooth accordion animations

## 🎯 Key Components

### TimelineStep
Expandable timeline component with:
- Phase icon and date range
- Click to expand details
- Voter action recommendations
- Smooth animations

### ChecklistStep
Interactive guide step with:
- Completion tracking
- Tips and resources
- Action items
- Visual progress indicators

### ChatBubble
Message component with:
- User/assistant differentiation
- Timestamps
- Tail design
- Smooth animations

### FAQAccordion
Searchable FAQ component with:
- Real-time filtering
- Smooth expand/collapse
- Search highlighting
- Topic categorization

## 🌟 Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance
- Responsive design

## 📊 Performance

- Optimized bundle size with Vite
- Lazy loading of components
- Efficient animations with Framer Motion
- Minimal external dependencies
- Optimized images and assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google for the Gemini API
- Vite for the build tool
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation

## 📞 Support

For questions or support, please open an issue on the GitHub repository or contact the development team.

---

**VoteGuide** - Making democracy accessible, one step at a time. 🗳️
