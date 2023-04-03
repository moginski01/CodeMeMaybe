import React from "react";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const Map = () => {
  const position = [51.759, 19.457]; // politechnika łódzka

  return (
    <MapContainer center={position} zoom={10} className="w-full h-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Marker position={position}>
        <Popup>
          Politechnika Łódzka <br /> ul. Żeromskiego 116, 90-924 Łódź
        </Popup>
      </Marker>
    </MapContainer>
  );
};

function Contact() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col sm:flex-row divide-x hyphens-auto">
            <div className="w-1/2 flex-column">
                <Map />
            </div>
            <div className="w-1/3">
                <form>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        >
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Imię i nazwisko
                                </label>
                                <input
                                    type="text"
                                    {...register("name")}
                                    id="name"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Jan Kowalski"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Adres e-mail
                                </label>
                                <input
                                    type="email"
                                    {...register("email")}
                                    id="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="jan.kowalski@example.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Numer telefonu
                                </label>
                                <input
                                    type="tel"
                                    {...register("phone")}
                                    id="phone"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="+48 123 456 789"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Wiadomość
                                </label>
                                <textarea
                                    {...register("message")}
                                    id="message"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                                    placeholder="Wpisz swoją wiadomość..."
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="checkbox"
                                    {...register("contactAgreement")}
                                    id="contactAgreement"
                                />
                                <label
                                    htmlFor="contactAgreement"
                                    className="ml-2"
                                >
                                    Zgoda na kontakt ze strony firmy
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Wyślij wiadomość
                            </button>
                        </form>
                    </form>
                </form>
            </div>
        </div>
    );
}

export default Contact;
