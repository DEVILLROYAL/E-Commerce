export default function ProfileHeader() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
      <img
        src="https://i.pravatar.cc/100"
        alt="User"
        className="w-20 h-20 rounded-full"
      />

      <div>
        <h2 className="text-xl font-semibold">Deepak Yadav</h2>
        <p className="text-gray-500">deepak@email.com</p>
      </div>
    </div>
  );
}