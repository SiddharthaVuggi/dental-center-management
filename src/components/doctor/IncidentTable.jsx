import React, { useEffect, useState } from 'react';

const demoIncidents = [
  {
    id: 'i1',
    patientId: 'p1',
    title: 'Toothache',
    description: 'Upper molar pain',
    appointmentDate: '2025-07-01T10:00',
    cost: 80,
    status: 'Completed',
    comments: 'Sensitive to cold',
    files: [
      { name: 'invoice.pdf', url: 'data:application/pdf;base64,example-invoice' },
      { name: 'xray.png', url: 'data:image/png;base64,example-xray' }
    ]
  },
  {
    id: 'i2',
    patientId: 'p2',
    title: 'Root Canal',
    description: 'Severe decay in lower tooth',
    appointmentDate: '2025-07-05T11:30',
    cost: 4000,
    status: 'Pending',
    comments: '',
    files: []
  },
  {
    id: 'i3',
    patientId: 'p3',
    title: 'Braces Consultation',
    description: 'Crooked front teeth',
    appointmentDate: '2025-07-10T09:00',
    cost: 1500,
    status: 'Cancelled',
    comments: '',
    files: []
  },

  {
    id: 'i4',
    patientId: 'p4',
    title: 'Teeth Cleaning',
    description: 'Routine cleaning and scaling',
    appointmentDate: '2025-07-02T14:00',
    cost: 600,
    status: 'Completed',
    comments: 'Mild plaque found',
    files: [{ name: 'report.pdf', url: 'data:application/pdf;base64,cleaning-report' }]
  },
  {
    id: 'i5',
    patientId: 'p5',
    title: 'Cavity Filling',
    description: 'Left upper cavity',
    appointmentDate: '2025-07-04T10:30',
    cost: 1000,
    status: 'Pending',
    comments: '',
    files: []
  },
  {
    id: 'i6',
    patientId: 'p6',
    title: 'Wisdom Tooth Removal',
    description: 'Pain in lower jaw',
    appointmentDate: '2025-07-06T16:00',
    cost: 2500,
    status: 'Completed',
    comments: 'Required stitches',
    files: [{ name: 'surgery-notes.pdf', url: 'data:application/pdf;base64,surgery-notes' }]
  },
  {
    id: 'i7',
    patientId: 'p7',
    title: 'Tooth Whitening',
    description: 'Stained front teeth',
    appointmentDate: '2025-07-08T12:00',
    cost: 1800,
    status: 'Cancelled',
    comments: 'Rescheduled due to fever',
    files: []
  },
  {
    id: 'i8',
    patientId: 'p8',
    title: 'Orthodontic Follow-up',
    description: 'Check brace adjustments',
    appointmentDate: '2025-07-09T09:30',
    cost: 500,
    status: 'Completed',
    comments: '',
    files: []
  },
  {
    id: 'i9',
    patientId: 'p9',
    title: 'Dental Implant',
    description: 'Lower jaw implant placement',
    appointmentDate: '2025-07-11T15:00',
    cost: 10000,
    status: 'Pending',
    comments: '',
    files: []
  },
  {
    id: 'i10',
    patientId: 'p10',
    title: 'Gum Bleeding',
    description: 'Bleeding while brushing',
    appointmentDate: '2025-07-13T11:00',
    cost: 750,
    status: 'Completed',
    comments: 'Gingivitis suspected',
    files: [{ name: 'lab-test.pdf', url: 'data:application/pdf;base64=lab-report' }]
  },
  {
    id: 'i11',
    patientId: 'p11',
    title: 'Tooth Extraction',
    description: 'Milk tooth retained',
    appointmentDate: '2025-07-14T13:30',
    cost: 300,
    status: 'Completed',
    comments: '',
    files: []
  },
  {
    id: 'i12',
    patientId: 'p12',
    title: 'Jaw Pain',
    description: 'Pain while chewing',
    appointmentDate: '2025-07-15T10:15',
    cost: 900,
    status: 'Pending',
    comments: '',
    files: []
  },
  {
    id: 'i13',
    patientId: 'p13',
    title: 'Retainer Check',
    description: 'Check tightness',
    appointmentDate: '2025-07-16T17:00',
    cost: 400,
    status: 'Completed',
    comments: 'Adjustment required',
    files: []
  },
  {
    id: 'i14',
    patientId: 'p14',
    title: 'Mouth Ulcers',
    description: 'Recurring ulcers',
    appointmentDate: '2025-07-17T14:45',
    cost: 200,
    status: 'Cancelled',
    comments: 'Patient no-show',
    files: []
  },
  {
    id: 'i15',
    patientId: 'p15',
    title: 'Routine Check-up',
    description: 'First time dental visit',
    appointmentDate: '2025-07-18T10:00',
    cost: 500,
    status: 'Completed',
    comments: 'Advised cleaning',
    files: []
  },
  {
    id: 'i16',
    patientId: 'p1',
    title: 'Braces Installation',
    description: 'Overbite correction',
    appointmentDate: '2025-07-19T09:00',
    cost: 5000,
    status: 'Pending',
    comments: '',
    files: []
  },
  {
    id: 'i17',
    patientId: 'p2',
    title: 'Filling Replacement',
    description: 'Old filling worn out',
    appointmentDate: '2025-07-20T12:15',
    cost: 1200,
    status: 'Completed',
    comments: '',
    files: []
  },
  {
    id: 'i18',
    patientId: 'p3',
    title: 'X-ray Diagnosis',
    description: 'Injury after accident',
    appointmentDate: '2025-07-21T11:00',
    cost: 850,
    status: 'Completed',
    comments: '',
    files: [{ name: 'injury-xray.png', url: 'data:image/png;base64,xrayimg' }]
  },

  {
    id: 'i19',
    patientId: 'p1',
    title: 'Checkup',
    description: 'Upper molar pain',
    appointmentDate: '2025-05-06T12:00',
    cost: 399,
    status: 'Completed',
    comments: 'Sensitive to cold',
    files: [
      { name: 'invoice.pdf', url: 'data:application/pdf;base64,example-invoice' },
      { name: 'xray.png', url: 'data:image/png;base64,example-xray' }
    ]
  },
  {
    id: 'i20',
    patientId: 'p1',
    title: 'Checkup',
    description: 'Filling Replacement',
    appointmentDate: '2025-07-07T11:30',
    cost: 599,
    status: 'Completed',
    comments: 'Sensitive to cold',
    files: [
      { name: 'invoice.pdf', url: 'data:application/pdf;base64,example-invoice' },
      { name: 'xray.png', url: 'data:image/png;base64,example-xray' }
    ]
  }
];

const IncidentTable = () => {
  const [incidents, setIncidents] = useState([]);
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    patientId: '',
    title: '',
    description: '',
    appointmentDate: '',
    files: []
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    const storedIncidents = JSON.parse(localStorage.getItem('incidents'));

    setPatients(storedPatients);

    if (storedIncidents && storedIncidents.length > 0) {
      setIncidents(storedIncidents);
    } else {
      localStorage.setItem('incidents', JSON.stringify(demoIncidents));
      setIncidents(demoIncidents);
    }
  }, []);

  const saveIncidents = (data) => {
    localStorage.setItem('incidents', JSON.stringify(data));
    setIncidents(data);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const fileReaders = selectedFiles.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({ name: file.name, url: reader.result });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(fileReaders).then((fileData) => {
      setForm((prevForm) => ({ ...prevForm, files: fileData }));
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const newList = editingId
      ? incidents.map(i => i.id === editingId ? { ...i, ...form } : i)
      : [...incidents, {
          id: Date.now().toString(),
          ...form,
          comments: '',
          cost: '',
          status: 'Pending'
        }];

    saveIncidents(newList);

    setForm({
      patientId: '',
      title: '',
      description: '',
      appointmentDate: '',
      files: []
    });
    setEditingId(null);
  };

  const handleDelete = (id) => {
    const filtered = incidents.filter(i => i.id !== id);
    saveIncidents(filtered);
  };

  const handleEdit = (incident) => {
    setForm({
      patientId: incident.patientId,
      title: incident.title,
      description: incident.description,
      appointmentDate: incident.appointmentDate,
      files: incident.files || []
    });
    setEditingId(incident.id);
  };

  const getPatientName = (id) => {
    const patient = patients.find(p => p.id === id);
    return patient ? patient.name : 'Unknown';
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = incidents.map(i =>
      i.id === id ? { ...i, status: newStatus } : i
    );
    saveIncidents(updated);
  };

  const handleCostChange = (id, cost) => {
    const updated = incidents.map(i =>
      i.id === id ? { ...i, cost } : i
    );
    saveIncidents(updated);
  };

  return (
    <div className="incident">
       <h2>Appointments</h2>
       <form onSubmit={handleAdd}>
        <select value={form.patientId} onChange={e => setForm({ ...form, patientId: e.target.value })} required >
          <option value="">Select Patient</option>
           {patients.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
        <input type="datetime-local" value={form.appointmentDate} onChange={e => setForm({ ...form, appointmentDate: e.target.value })} required />
        <input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" multiple onChange={handleFileChange} />
        <button type="submit">{editingId ? 'Update Appointment' : 'Add Appointment'}</button>
      </form>

      <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Patient</th>
            <th>Date</th>
            <th>Status</th>
            <th>Cost</th>
            <th>Files</th>
            <th>Upload</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((i, idx) => (
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>{getPatientName(i.patientId)}</td>
              <td>{new Date(i.appointmentDate).toLocaleString()}</td>
              <td>
                <select value={i.status} onChange={e => handleStatusChange(i.id, e.target.value)}>
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </td>
              <td>
                <input type="number" value={i.cost} placeholder="Cost" onChange={e => handleCostChange(i.id, e.target.value)} style={{ width: '80px' }} />
              </td>
              <td>
                {i.files?.length > 0 ? (
                  i.files.map((file, fIdx) => (
                    <div key={fIdx} style={{ marginBottom: '6px' }}>
                      <a href={file.url} target="_blank" rel="noreferrer">{file.name}</a>
                      <button
                        onClick={() => {
                          const updatedFiles = i.files.filter((_, j) => j !== fIdx);
                          const updated = incidents.map((item, index) =>
                            index === idx ? { ...item, files: updatedFiles } : item
                          );
                          saveIncidents(updated);
                        }}
                        style={{ marginLeft: '5px',background: 'red',color: 'white',border: 'none',padding: '2px 6px',borderRadius: '4px',cursor: 'pointer'
                        }}>x
                      </button>
                      <label style={{ marginLeft: '10px', color: '#007bff', cursor: 'pointer' }}>
                        Replace File
                        <input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" style={{ display: 'none' }}
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (!file) return;
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              const updatedFiles = i.files.map((existing, j) =>
                                j === fIdx ? { name: file.name, url: reader.result } : existing
                              );
                              const updated = incidents.map((item, index) =>
                                index === idx ? { ...item, files: updatedFiles } : item
                              );
                              saveIncidents(updated);
                            };
                            reader.readAsDataURL(file);
                          }}
                        />
                      </label>
                    </div>
                  ))
                ) : (
                  <em>No files</em>
                )}
              </td>
              <td>
                {(i.status === 'Pending' || i.status === 'Completed') && (
                  <input type="file" multiple accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    onChange={async (e) => {
                      const selectedFiles = Array.from(e.target.files);
                      const fileData = await Promise.all(
                        selectedFiles.map(file =>
                          new Promise(resolve => {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              resolve({ name: file.name, url: reader.result });
                            };
                            reader.readAsDataURL(file);
                          })
                        )
                      );
                      const updated = incidents.map((item, index) =>
                        index === idx
                          ? { ...item, files: [...(item.files || []), ...fileData] }
                          : item
                      );
                      saveIncidents(updated);
                    }}
                  />
                )}
              </td>
              <td>
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                  <button
                    onClick={() => handleEdit(i)}
                    style={{ backgroundColor: '#ffc107', color: 'black',border: 'none',padding: '4px 8px',borderRadius: '4px', cursor:'pointer'}}
                  >Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i.id)}
                    style={{ backgroundColor: '#dc3545',color: 'white', border: 'none',padding: '4px 8px',borderRadius: '4px',cursor: 'pointer'}}
                  >Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncidentTable;