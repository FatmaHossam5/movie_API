# Movie API Web Application

A responsive movie database application that allows users to browse, search, and discover movies using The Movie Database (TMDB) API.

## 🎬 Features

- **Movie Categories**: Browse movies by different categories:
  - Now Playing
  - Popular
  - Top Rated
  - Trending
  - Upcoming

- **Search Functionality**: 
  - Search movies by keyword using TMDB API
  - Real-time filtering of displayed results

- **Responsive Design**: 
  - Mobile-friendly interface
  - Collapsible sidebar navigation
  - Bootstrap-powered responsive grid

- **Movie Information Display**:
  - Movie posters
  - Titles and descriptions
  - Release dates
  - User ratings

- **Contact Form**: 
  - User registration/contact form with validation
  - Real-time form validation for all fields

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Frameworks**: Bootstrap 5
- **Libraries**: 
  - jQuery 3.6.0
  - Font Awesome icons
- **API**: The Movie Database (TMDB) API
- **Responsive Design**: CSS Grid and Flexbox

## 📁 Project Structure

```
movie_API/
├── index.html          # Main HTML file
├── css/
│   ├── all.min.css     # Font Awesome styles
│   ├── bootstrap.min.css # Bootstrap framework
│   └── style.css       # Custom styles
├── js/
│   ├── main.js         # Main application logic
│   ├── jquery-3.6.0.min.js
│   ├── bootstrap.bundle.min.js
│   └── popper.min.js
├── img/
│   └── logo.png        # Application logo
├── webfonts/           # Font files
└── README.md           # Project documentation
```

## 🛠️ Setup and Installation

1. **Clone or download** the project files to your local machine.

2. **API Key Setup**:
   - The application uses TMDB API with a pre-configured API key
   - For production use, replace the API key in `js/main.js` with your own TMDB API key
   - Get your API key from: https://www.themoviedb.org/settings/api

3. **Run the Application**:
   - Open `index.html` in your web browser
   - Or serve the files using a local server (recommended for development)

## 🎯 Usage

### Browsing Movies
1. Use the sidebar navigation to select different movie categories
2. Click the hamburger menu (☰) to toggle the sidebar
3. Movies will be displayed in a responsive grid layout

### Searching Movies
1. Use the first search input to search movies via TMDB API
2. Use the second search input to filter the currently displayed results
3. Search results update in real-time as you type

### Contact Form
1. Click "Contact Us" in the sidebar to scroll to the contact form
2. Fill out all required fields with valid information:
   - **Name**: Must start with uppercase letter, minimum 4 characters
   - **Email**: Must be a valid Gmail or Hotmail address
   - **Phone**: Egyptian phone number format (01XXXXXXXXX)
   - **Age**: Must be between 20-80 years
   - **Password**: 8-10 characters, letters and numbers
   - **Confirm Password**: Must match the password
3. Submit button becomes enabled only when all fields are valid

## 🔧 API Integration

The application integrates with TMDB API endpoints:

- **Movie Categories**: `https://api.themoviedb.org/3/{category}?api_key={key}`
- **Search Movies**: `https://api.themoviedb.org/3/search/movie?api_key={key}&query={term}`
- **Movie Images**: `https://image.tmdb.org/t/p/w500{poster_path}`

## 📱 Responsive Features

- **Mobile Navigation**: Collapsible sidebar with smooth animations
- **Responsive Grid**: Movies display in different column layouts based on screen size
- **Touch-Friendly**: Optimized for mobile and tablet interactions

## 🎨 Styling

- **Dark Theme**: Modern dark background with white text
- **Bootstrap Integration**: Utilizes Bootstrap classes for rapid development
- **Custom Animations**: Smooth sidebar transitions and hover effects
- **Font Awesome Icons**: Social media and navigation icons

## 🔒 Form Validation

The contact form includes comprehensive client-side validation:

- **Real-time validation**: Immediate feedback as users type
- **Visual indicators**: Green/red borders and alerts for valid/invalid fields
- **Regex patterns**: Strict validation for email, phone, and other fields
- **Progressive enhancement**: Submit button only enabled when all fields are valid






**Note**: This application requires an active internet connection to fetch movie data from TMDB API.
