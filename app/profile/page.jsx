import ProfileDetails from "./ProfileDetails";
import ProfileHeader from "./ProfileHeader";
import ProfileOrders from "./ProfileOrders";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header */}
        <ProfileHeader />

        {/* Details */}
        <ProfileDetails />

        {/* Orders */}
        <ProfileOrders />

      </div>
    </div>
  );
}