import React, { useState } from "react";

const UserInterface = () => {
    /*const [username, setUsername] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [enabled, setEnabled] = useState(false);*/
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        userame: "",
        displayName: "",
        phone: "",
        email: "",
        role: "",
        enabled: "",
        disabledUser:true
    });
    const handleChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
        const name = event.target.name

        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };
    const handleFilter = () => {
        setUsers(prevUsers => prevUsers.filter(user => !form.disabledUser || user.enabled))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsers([ ...users, { id: users.length + 1, username: form.username, email: form.email, enabled: form.enabled, disabledUser: form.disabledUser }, ]);
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ background: "#f2f2f2", width: "20%", display: "flex", flexDirection: "column" }}>
                <div style={{ background: "#333", color: "#fff", padding: "10px" }}>
                    <h3 style={{ margin: 0 }}>Users App</h3>
                </div>
                <button style={{ margin: "20px" , position: "relative"}} onClick={() => setShowForm(true)}>+ New User</button>
            </div>
            {showForm && (
                <div style={{ flex: 1, padding: "20px" }}>
                    <form onSubmit={handleSubmit}
                          style={{
                              position: "absolute",
                              bottom: "0",
                              width: "500px",
                              height: "300px",
                              backgroundColor:"#f2f2f2",
                              padding: "20px"
                    }}>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                placeholder="User Name"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Display Name:</label>
                            <input
                                type="text"
                                placeholder="Display Name"
                                name="displayName"
                                value={form.displayName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input
                                type="number"
                                placeholder="Number"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Role:</label>
                            <select
                                placeholder="Role"
                                name="role"
                                value={form.role}
                                onChange={handleChange}>
                                <option value="">--Select Role--</option>
                                <option value="guest">Guest</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                        <div>
                            <label>Enabled:</label>
                            <input
                                type="checkbox"
                                name="enabled"
                                checked={form.enabled}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Save User</button>
                        <button onClick={() => setShowForm(false)}>Close</button>
                    </form>
                </div>
            )}
            {!showForm && (
                <div style={{ background: "#f2f2f2", width: "80%", display: "flex", flexDirection: "column" }}>
                    <div style={{ background: "#333", color: "#fff", padding: "10px" }}>
                        <h3 style={{ margin: 0, display: 'inline-block' }}>User List</h3>
                            <div style={{ marginRight: "auto" }}>
                                <label htmlFor="disabledUser">
                                    Hide Disabled User
                                    <input
                                        type="checkbox"
                                        name="disabledUser"
                                        checked={form.disabledUser}
                                        onChange={handleChange}
                                        onClick={handleFilter}
                                    />

                                </label>
                            </div>

                    </div>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                        <tr>
                            <th style={{ border: "1px solid #333", padding: "10px" }}>User Id</th>
                            <th style={{ border: "1px solid #333", padding: "10px" }}>Username</th>
                            <th style={{ border: "1px solid #333", padding: "10px" }}>Email</th>
                            <th style={{ border: "1px solid #333", padding: "10px" }}>Enabled</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <th style={{ border: "1px solid #333", padding: "10px" }}>{user.id}</th>
                                <td style={{ border: "1px solid #333", padding: "10px" }}>{user.username}</td>
                                <td style={{ border: "1px solid #333", padding: "10px" }}>{user.email}</td>
                                <td style={{ border: "1px solid #333", padding: "10px" }}>{user.enabled ? "True" : "False"}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
export default UserInterface;

