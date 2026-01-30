@extends('template.maintemplate')

@push('googleMapJS')
    <script src="{{ asset('/js/earthquake.js') }}"></script>
    <script>
        function initMap() {
            initEarthquakeMap(
                '{{ $mapId ?? "map-container" }}',
                '{{ $geoJsonUrl }}',
                '{{ $geoJsonpUrl ?? "" }}'
            );
        }
    </script>
@endpush

@section('content')
    <div class="container-fluid">
        <h2 class="mt-3 mb-3">{{ $title ?? 'Earthquake Map' }}</h2>
        
        <div class="row">
            @include('includes.showdata')
        </div>

        <div class="row mt-4">
            <div id="map-wrapper" class="card w-100" style="height: 600px;">
                <div id="{{ $mapId ?? 'map-container' }}" class="card-body h-100">
                </div>
            </div>
        </div>
    </div>
@endsection
