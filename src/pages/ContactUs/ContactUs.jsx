import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdCall, MdEmail } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "./ContactUs.css";

const ContactUs = () => {
  const position = [51.505, -0.09];
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_service_id,
        process.env.REACT_APP_template_id,
        form.current,
        process.env.REACT_APP_public_key
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Message Sent!");
          }
        },
        (error) => {
          console.log(error.text);
          toast.error("Something Went Wrong!");
        }
      );
  };

  return (
    <div>
      <Helmet>
        <title>ToriTorkari Bazar - Contact</title>
        <meta
          name="description"
          content="Contact information of the authority."
        />
      </Helmet>

      {/* Map */}
      <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{position}</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Contact form */}
      <div className="lg:flex lg:px-10 lg:py-14 py-5 gap-5">
        <div className="lg:w-[50%] gap-5 text-gray-800 text-[17px] flex justify-center items-center rounded-md bg-secondary">
          <div className="p-5 flex flex-col gap-5">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <p>
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram anteposuerit litterarum formas human.
            </p>
            <div>
              <h5 className="text-base font-bold flex gap-1 items-center">
                {" "}
                <GoLocation />
                Address
              </h5>
              <p>123 Main Street, Anytown, CA 12345 - USA</p>
            </div>
            <div>
              <h5 className="text-base font-bold  flex gap-1 items-center">
                <MdCall></MdCall>
                Phone
              </h5>
              <p>Mobile: 01571763498</p>
            </div>
            <div>
              <h5 className="text-base font-bold  flex gap-1 items-center">
                <MdEmail></MdEmail> Email
              </h5>
              <p>dabasishdasjoy92@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[50%] text-gray-700">
          <h1 className="text-xl font-bold lg:my-0 mt-5 lg:text-left text-center">
            Tell Us Your Message
          </h1>
          <div className="flex lg:flex-row flex-col gap-5 lg:px-0 px-2">
            <form
              ref={form}
              onSubmit={sendEmail}
              data-aos="fade-left"
              data-aos-duration="600"
              className="flex flex-col w-full my-5"
            >
              <div className="grid grid-cols-6 gap-5 text-white">
                <div className="col-span-full sm:col-span-3">
                  <input
                    id="Name"
                    name="user_name"
                    type="text"
                    placeholder="Name"
                    className="tori-input"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="tori-input"
                  />
                </div>
                <div className="col-span-full">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="tori-input"
                  />
                </div>
                <div className="col-span-full">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="tori-input"
                    rows={8}
                  ></textarea>
                </div>
              </div>
              <div className="mt-5">
                <button type="submit" className="tori-btn-secondary">
                  <FiSend /> Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
