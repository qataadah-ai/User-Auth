import { useAuth } from '../context/AuthContext';
import '../App.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="profile-card">
        <img src={user?.image} alt="Profile" className="profile-img" />
        <h1>Hi, {user?.firstName}! </h1>
        <p style={{ color: '#666' }}>Welcome back to your e-commerce portal</p>
        
        <div className="user-info">
          <p><strong>Full Name:</strong> {user?.firstName} {user?.lastName}</p>
          <p><strong>Username:</strong> {user?.username}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Security:</strong> <span style={{color: '#38a169'}}>● JWT Verified</span></p>
        </div>

        <button onClick={logout} className="btn-danger">
          Logout Session
        </button>
      </div>
    </div>
  );
};

export default Dashboard;