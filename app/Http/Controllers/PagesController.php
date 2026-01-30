<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function homePage(){
        return $this->renderMap('All Earthquakes (Past Hour)', 'all_hour');
    }

    public function pastDayPage(){
        return $this->renderMap('All Earthquakes (Past Day)', 'all_day');
    }

    public function pastWeekPage(){
        return $this->renderMap('All Earthquakes (Past Week)', 'all_week');
    }

    public function pastMonthPage(){
        return $this->renderMap('All Earthquakes (Past Month)', 'all_month');
    }

    private function renderMap($title, $timeframe) {
        return view('pages.earthquake_map', [
            'title' => $title,
            'mapId' => 'map-' . $timeframe,
            'geoJsonUrl' => "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/{$timeframe}.geojson",
            'geoJsonpUrl' => "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/{$timeframe}.geojsonp"
        ]);
    }

    public function kmlPage(){
        return view('pages.kml');
    }

    public function infoPage(){
        return view('pages.infopenting');
    } 

    public function aboutPage(){
        return view('pages.about');
    }  
}
