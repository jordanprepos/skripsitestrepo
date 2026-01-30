# Earthquake Map Visualizer

A real-time earthquake monitoring website built with **Laravel 5.7** and **Google Maps API**. This project visualizes seismic data from the **USGS (United States Geological Survey)** GeoJSON feeds to provide users with an interactive map of global earthquake activity.

## 🌏 Features

- **Real-time Data Visualization**: Fetches live earthquake data directly from USGS GeoJSONP/GeoJSON feeds.
- **Interactive Map**: Built with Google Maps API, featuring custom terrain and satellite views.
- **Dynamic Magnitude Scaling**: Earthquake markers (circles) are dynamically sized based on their magnitude.
- **Detailed Information**:
    - Hover over markers to see specific details: Title, Magnitude, Type, Status, Significance, and Intensity.
    - Sidebar/Overlay display for the selected earthquake's properties.
- **Timeframe Filtering**:
    - Past Day Map
    - Past Week Map
    - Past Month Map
- **Auto-Refresh**: The map automatically refreshes its data every 30 seconds to stay up-to-date without reloading the page.
- **KML Support**: Additional mapping capabilities using KML files.

## 🛠️ Tech Stack

- **Backend**: Laravel 5.7 (PHP 7.1+)
- **Frontend**:
    - JavaScript (Vanilla + jQuery)
    - Google Maps JavaScript API
    - Bootstrap 4.2
    - Vue.js (for reactive data display components)
- **Data Source**: [USGS Earthquake Hazards Program](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

## 🚀 Getting Started

### Prerequisites

- PHP >= 7.1.3
- Composer
- Node.js & NPM
- MySQL or any supported database (optional, for Laravel base)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/skripsitestrepo.git
    cd skripsitestrepo
    ```

2. **Install Dependencies**

    ```bash
    composer install
    npm install
    ```

3. **Environment Setup**

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. **Run the Application**
    ```bash
    php artisan serve
    ```
    The website will be accessible at `http://127.0.0.1:8000`.

## ⚙️ Configuration

- **Google Maps API Key**: The project currently uses a hardcoded API key in `resources/views/includes/scripts.blade.php`. For production, it is recommended to move this to the `.env` file.
- **Data Refresh Rate**: The refresh interval can be adjusted in the JavaScript files located in `public/js/maps/`.

## 📂 Project Structure

- `public/js/maps/`: Contains the JavaScript logic for individual map views (past day, week, month).
- `resources/views/pages/`: Blade templates for the different map pages.
- `routes/web.php`: Defines the routes for navigating between maps.

## 📜 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 📊 Data Source

Data used in this website is provided by the Real-Time Feed created by **USGS**.
For more information, visit the [USGS GeoJSON Feed page](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).
