export default function ProfileOrders() {
  const orders = [
    { id: 1, product: "T-Shirt", status: "Delivered" },
    { id: 2, product: "Shoes", status: "Pending" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">My Orders</h3>

      <div className="space-y-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex justify-between border p-3 rounded-lg"
          >
            <span>{order.product}</span>
            <span className="text-sm text-gray-500">{order.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}