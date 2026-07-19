maptilersdk.config.apiKey = mapKey;

const map = new maptilersdk.Map({
  container: "map",
  style: maptilersdk.MapStyle.STREETS,
  center: listing.geometry.coordinates,
  zoom: 12,
});

new maptilersdk.Marker({ color: "#fe424d" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({offset : 25}).setHTML(
      `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
    ),
  )
  .addTo(map);
