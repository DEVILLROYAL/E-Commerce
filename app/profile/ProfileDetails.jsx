export default function ProfileDetails() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Personal Info</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="input" placeholder="Full Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Phone" />
        <input className="input" placeholder="Address" />
      </div>

      <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
        Save Changes
      </button>
    </div>
  );
}