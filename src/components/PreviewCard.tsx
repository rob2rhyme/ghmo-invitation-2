// src/components/PreviewCard.tsx
import React from "react";
import { FormData } from "../App";

interface Props {
  data: FormData;
}

const formatDate = (d: string) =>
  d
    ? new Date(d).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

const formatTime = (t: string) =>
  t
    ? new Date(`1970-01-01T${t}`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    : "";

const PreviewCard: React.FC<Props> = ({ data }) => {
  const {
    day,
    role,
    pujaType,
    hostName,
    address, // ← include address here
    date: rawDate,
    time: rawTime,
  } = data;

  const date = formatDate(rawDate);
  const time = formatTime(rawTime);

  return (
    <div id="invitation-preview" className="invitation-card p-4">
      <div className="header d-flex align-items-center justify-content-center">
        <img src="/logo-placeholder.png" alt="Logo" className="logo" />
        <div className="text-left">
          <h4 className="m-0">
            <span className="ghmo-text" style={{ letterSpacing: "0.65em" }}>
              ghmo
            </span>
          </h4>
          <p className="m-0">GREATER HARRISBURG MAGAR ORGANIZATION</p>
          <p className="m-0">HARRISBURG, PA | ESTD-2017</p>
        </div>
      </div>
      {/* New centered body title */}
      <h5 className="text-center mt-4">हार्दिक निमन्त्रणा</h5>
      <div className="body mt-4">
        <p>
          आउँदो <strong>{day}</strong>, <strong>{date}</strong> मा, हाम्रो
          समुदाय <strong>{role}</strong> {hostName} ज्युले आफ्नो निवासको{" "}
          <strong>{pujaType}</strong> अवसरमा भजन कार्यक्रमको लागि अनुरोध गर्नु
          भएको छ र यो शुभ अवसरलाई स्वीकार गर्दै, हामी हाम्रा सबै सदस्यहरूलाई
          निम्न जानकारी अनुसार समयमै उपस्थित हुन हार्दिक रूपमा आमन्त्रित गर्न
          चाहन्छौं।
        </p>
        <p>
          <strong>मिति:</strong> {date}, {day}
        </p>
        <p>
          <strong>समय:</strong> {time}
        </p>
        <p>
          <strong>ठेगाना:</strong> {address}
        </p>{" "}
        {/* ← render the address here */}
        <p>
          कुनै पनि प्रश्न र थप जानकारीको लागि, कृपया Nar Balampaki Magar Phone
          no..... मा सम्पर्क गर्नुहोस्।
        </p>
        <p>धन्यवाद,</p>
        <p>GREATER HARRISBURG MAGAR ORGANIZATION</p>
        <p>Harrisburg, Pennsylvania</p>
      </div>
    </div>
  );
};

export default PreviewCard;
