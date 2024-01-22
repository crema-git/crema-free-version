import { GoogleMap } from "@react-google-maps/api";

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */

const SimpleMapExampleGoogleMap = () => (
    <GoogleMap
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
            scrollwheel: false,
        }}
        center={{ lat: 47.646935, lng: -122.303763 }}
    />
);

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

const SimpleMap = ({ styleName }) => {
    if (!styleName) {
        styleName = "cr-embed-responsive-21by9";
    }
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <SimpleMapExampleGoogleMap />
        </div>
    );
};
export default SimpleMap;
