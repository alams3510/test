import { Container, Toolbar } from "@mui/material";
import React, { useEffect } from "react";
import Charts from "./Charts";
import { useDispatch } from "react-redux";
import { fetchCases } from "../redux/Action";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ChartMap = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCases());
  }, []);
  const position = [51.505, -0.09];
  return (
    <Container>
      <Toolbar />
      <div>
        <Charts />
      </div>
      <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}></Marker>
        </MapContainer>
      </div>
    </Container>
  );
};

export default ChartMap;
