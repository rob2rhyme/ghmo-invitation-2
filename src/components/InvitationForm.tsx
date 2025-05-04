// src/components/InvitationForm.tsx
import React from "react";
import { FormData } from "../App";

interface Props {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
}

const dayOptions = [
  "शनिबार",
  "आइतबार",
  "सोमबार",
  "मङ्गलबार",
  "बुधबार",
  "बिहीबार",
  "शुक्रबार",
];
const roleOptions = ["अध्यक्ष", "महासचिव", "सचिव", "कोषाध्यक्ष", "सदस्य"];
const pujaOptions = ["घर पूजा", "परिवारको सदस्यको जन्मदिन", "सुधाई"];

const InvitationForm: React.FC<Props> = ({ data, setData }) => {
  const handleSelect =
    (field: keyof Pick<FormData, "day" | "role" | "pujaType">) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleChange =
    (field: keyof Pick<FormData, "hostName" | "address" | "date" | "time">) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <>
      {/* Header with logo and gradient background */}
      <div
        className="mb-4"
        style={{
          background: "linear-gradient(to right, purple, blue)",
          padding: "1.5rem",
          borderRadius: "0.5rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <img
          src="/logo-placeholder.png"
          alt="GHMO Logo"
          style={{ width: "100px", height: "100px", objectFit: "contain" }}
        />
        <h2 className="mt-3 mb-0">GHMO भजन कार्यक्रम Invitation Generator</h2>
      </div>

      <form>
        <div className="mb-3">
          <label className="form-label">दिन</label>
          <select
            className="form-select"
            value={data.day}
            onChange={handleSelect("day")}
          >
            <option value="" disabled>
              चयन गर्नुहोस्
            </option>
            {dayOptions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">भूमिका</label>
          <select
            className="form-select"
            value={data.role}
            onChange={handleSelect("role")}
          >
            <option value="" disabled>
              चयन गर्नुहोस्
            </option>
            {roleOptions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">पूजा प्रकार</label>
          <select
            className="form-select"
            value={data.pujaType}
            onChange={handleSelect("pujaType")}
          >
            <option value="" disabled>
              चयन गर्नुहोस्
            </option>
            {pujaOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">आयोजकको नाम</label>
          <input
            type="text"
            className="form-control"
            placeholder="भजन कार्यक्रम अनुरोधकर्ताको नाम"
            value={data.hostName}
            onChange={handleChange("hostName")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">ठेगाना</label>
          <input
            type="text"
            className="form-control"
            placeholder="123 Street Name, City, State, Zip-code"
            value={data.address}
            onChange={handleChange("address")}
          />
        </div>

        <div className="row">
          <div className="col-6 mb-3">
            <label className="form-label">मिति</label>
            <div className="input-group">
              <span className="input-group-text">📅</span>
              <input
                type="date"
                className="form-control"
                value={data.date}
                onChange={handleChange("date")}
              />
            </div>
          </div>
          <div className="col-6 mb-3">
            <label className="form-label">समय</label>
            <div className="input-group">
              <span className="input-group-text">⏰</span>
              <input
                type="time"
                className="form-control"
                value={data.time}
                onChange={handleChange("time")}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default InvitationForm;
