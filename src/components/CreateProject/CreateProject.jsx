// CreateProject.jsx
import { useState, useRef } from "react";
import "./CreateProject.css";

const NAV_LINKS = ["Help", "Logout"];

const PROJECT_MODES = [
  { value: "empty", label: "Create an Empty Project" },
  { value: "template", label: "Create New Project from Template" },
  { value: "file", label: "Create New Project from File" },
  { value: "erp", label: "Create New Project ERP LN" },
];

export default function CreateProject() {
  const [mode, setMode] = useState("file");
  const [fileName, setFileName] = useState("No file chosen");
  const [form, setForm] = useState({
    projectName: "",
    projectStartDate: "",
    customerDueDate: "",
    requestedDueDate: "",
    additionalDetails: "",
    instance: "",
    attachCalendar: "",
    customer: "",
    projectManager: "",
    inputFormat: "Existing Project Task Format",
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { mode, form, fileName });
    alert("Project submitted successfully!");
  };

  return (
    <div className="app-wrapper">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-icon">
          <div className="hamburger-icon">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="sidebar-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="sidebar-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
      </aside>

      {/* Main */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar">
          <span className="navbar-brand">Prostream</span>
          <div className="navbar-right">
            <span>Welcome Annonymous PWC</span>
            {NAV_LINKS.map((link) => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>
        </nav>

        {/* Page body */}
        <div className="page-body">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <a href="#">Project Plan</a>
            <span className="separator">&#187;&#187;</span>
            <span className="current">Create New Plan</span>
          </div>

          {/* Mode selector */}
          <div className="radio-tabs">
            {PROJECT_MODES.map((m) => (
              <div className="radio-tab" key={m.value}>
                <input
                  type="radio"
                  id={m.value}
                  name="projectMode"
                  value={m.value}
                  checked={mode === m.value}
                  onChange={() => setMode(m.value)}
                />
                <label htmlFor={m.value}>{m.label}</label>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Row 1 */}
              <div className="form-group">
                <label>Project Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="projectName"
                  value={form.projectName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Project Start Date <span className="required">*</span></label>
                <input
                  type="text"
                  name="projectStartDate"
                  placeholder=""
                  value={form.projectStartDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 2 */}
              <div className="form-group">
                <label>Customer Due Date <span className="required">*</span></label>
                <input
                  type="text"
                  name="customerDueDate"
                  value={form.customerDueDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Requested Due Date <span className="required">*</span></label>
                <input
                  type="text"
                  name="requestedDueDate"
                  value={form.requestedDueDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 3 - full width */}
              <div className="form-group full-width">
                <label>Project Additional Details</label>
                <textarea
                  name="additionalDetails"
                  value={form.additionalDetails}
                  onChange={handleChange}
                />
              </div>

              {/* Row 4 */}
              <div className="form-group">
                <label>Instance <span className="required">*</span></label>
                <select name="instance" value={form.instance} onChange={handleChange} required>
                  <option value="">SELECT</option>
                  <option value="instance1">Instance 1</option>
                  <option value="instance2">Instance 2</option>
                </select>
              </div>
              <div className="form-group">
                <label>Attach Calendar <span className="required">*</span></label>
                <select name="attachCalendar" value={form.attachCalendar} onChange={handleChange} required>
                  <option value=""></option>
                  <option value="cal1">Calendar 1</option>
                  <option value="cal2">Calendar 2</option>
                </select>
              </div>

              {/* Row 5 */}
              <div className="form-group">
                <label>Customer <span className="required">*</span></label>
                <select name="customer" value={form.customer} onChange={handleChange} required>
                  <option value=""></option>
                  <option value="pwc">PwC</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Project Manager <span className="required">*</span></label>
                <select name="projectManager" value={form.projectManager} onChange={handleChange} required>
                  <option value=""></option>
                  <option value="prashant">Prashant Kumar</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Input Format row */}
            <div className="input-format-row" style={{ marginTop: 16 }}>
              <label>Input Format File <span className="required">*</span></label>
              <select
                name="inputFormat"
                value={form.inputFormat}
                onChange={handleChange}
                required
              >
                <option value="Existing Project Task Format">Existing Project Task Format</option>
                <option value="New Format">New Format</option>
              </select>
            </div>

            {/* Action center */}
            <div className="action-center">
              <button type="button" className="btn-download">
                Click here to download Excel format
              </button>

              <div className="file-upload-row">
                <label className="upload-label">
                  Select File to Upload <span className="required">*</span>
                </label>
                <button
                  type="button"
                  className="btn-choose-file"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Choose File
                </button>
                <span>{fileName}</span>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept=".xlsx,.xls,.csv"
                  onChange={handleFileChange}
                />
              </div>

              <button type="button" className="btn-import">
                Import from Excel
              </button>
            </div>

            {/* Submit */}
            <div className="submit-area">
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}