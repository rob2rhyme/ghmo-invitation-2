// src/App.tsx
import React, { useState } from "react";
import InvitationForm from "./components/InvitationForm";
import PreviewCard from "./components/PreviewCard";
import { exportAsPdf, exportAsJpg } from "./utils/generateExport";
import "bootstrap/dist/css/bootstrap.min.css";

export interface FormData {
  day: string;
  role: string;
  pujaType: string;
  hostName: string;
  address: string;
  date: string;
  time: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    day: "",
    role: "",
    pujaType: "",
    hostName: "",
    address: "",
    date: "",
    time: "",
  });

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6 order-md-1">
          <InvitationForm data={formData} setData={setFormData} />
          <div className="d-flex gap-2 mt-3">
            <button
              className="btn btn-primary flex-fill"
              onClick={() => exportAsPdf("invitation-preview")}
            >
              Download PDF
            </button>
            <button
              className="btn btn-secondary flex-fill"
              onClick={() => exportAsJpg("invitation-preview")}
            >
              Download JPG
            </button>
          </div>
        </div>
        <div className="col-md-6 order-md-2 mt-4 mt-md-0">
          <PreviewCard data={formData} />
        </div>
      </div>
    </div>
  );
};

export default App;
