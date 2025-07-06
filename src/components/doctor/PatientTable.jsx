import React, { useEffect, useState } from 'react';
const demoData = [
  { id: "p1", name: "Ananya", dob: "2000-05-12", contact: "9876543210", healthInfo: "Allergic to Penicillin" },
  { id: "p2", name: "Rahul", dob: "1998-09-20", contact: "9123456780", healthInfo: "Diabetic" },
  { id: "p3", name: "Sneha", dob: "2002-03-01", contact: "9012345678", healthInfo: "No known issues" },
  { id: "p4", name: "Aman", dob: "1995-12-11", contact: "9988776655", healthInfo: "Hypertension" },
  { id: "p5", name: "Priya", dob: "1999-07-23", contact: "8899776655", healthInfo: "Asthma" },
  { id: "p6", name: "Karan", dob: "2001-04-19", contact: "7788665544", healthInfo: "Lactose Intolerant" },
  { id: "p7", name: "Divya", dob: "2003-10-05", contact: "9988001122", healthInfo: "Thyroid issues" },
  { id: "p8", name: "Arjun", dob: "1997-01-30", contact: "9900112233", healthInfo: "No known issues" },
  { id: "p9", name: "Meera", dob: "2000-08-14", contact: "9877002211", healthInfo: "Gluten allergy" },
  { id: "p10", name: "Rohan", dob: "1996-11-03", contact: "8765432109", healthInfo: "Heart condition" },
  { id: "p11", name: "Ishita", dob: "2001-06-26", contact: "9112233445", healthInfo: "Anemia" },
  { id: "p12", name: "Nikhil", dob: "1998-04-17", contact: "9556677889", healthInfo: "No known issues" },
  { id: "p13", name: "Tanvi", dob: "2002-12-22", contact: "9445566778", healthInfo: "Chronic migraine" },
  { id: "p14", name: "Siddharth", dob: "1999-09-09", contact: "9334455667", healthInfo: "High cholesterol" },
  { id: "p15", name: "Neha", dob: "2000-01-08", contact: "9223344556", healthInfo: "No known issues" }
];

const PatientTable = () => {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ name: '', dob: '', contact: '', healthInfo: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients'));
    if (storedPatients?.length) {
      setPatients(storedPatients);
    } else {
      localStorage.setItem('patients', JSON.stringify(demoData));
      setPatients(demoData);
    }
  }, []);

  const savePatients = (updatedList) => {
    localStorage.setItem('patients', JSON.stringify(updatedList));
    setPatients(updatedList);
  };

  const handleAddOrUpdate = (e) => {
    e.preventDefault();

    if (editingId) {
      const updated = patients.map(p => p.id === editingId ? { ...p, ...form } : p);
      savePatients(updated);
      setEditingId(null);
    } else {
      const newPatient = {
        id: Date.now().toString(),
        ...form,
      };
      savePatients([...patients, newPatient]);
    }

    setForm({ name: '', dob: '', contact: '', healthInfo: '' });
  };

  const handleDelete = (id) => {
    const filtered = patients.filter(p => p.id !== id);
    savePatients(filtered);
  };

  const handleEdit = (p) => {
    setForm({ name: p.name, dob: p.dob, contact: p.contact, healthInfo: p.healthInfo });
    setEditingId(p.id);
  };

  return (
    <div className='patient-add'>
      <h1>Patient Dashboard</h1>
      <h3>{editingId ? 'Edit Patient' : 'Add Patient'} Details</h3>
      <form onSubmit={handleAddOrUpdate}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="DOB" type="date" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} required />
        <input placeholder="Contact" value={form.contact} onChange={e => setForm({ ...form, contact: e.target.value })} required />
        <input placeholder="Health Info" value={form.healthInfo} onChange={e => setForm({ ...form, healthInfo: e.target.value })} required />
        <button type="submit">{editingId ? 'Update Patient' : 'Add Patient'}</button>
      </form>

      <ul>
        {patients.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> | {p.contact}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '4px' }}>
              <button
                onClick={() => handleEdit(p)}
                style={{ backgroundColor: '#ffc107', color: 'black', padding: '4px 10px', border: 'none', borderRadius: '4px' }}
              >Edit</button>
              <button
                onClick={() => handleDelete(p.id)}
                style={{ backgroundColor: '#dc3545', color: 'white', padding: '4px 10px', border: 'none', borderRadius: '4px' }}
              >Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientTable;