/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FiBook,
  FiUsers,
  FiEye,
  FiHeart,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";

const StatsCards = () => {
  const statsData = [
    {
      title: "Total Recipes",
      value: "1,248",
      change: "+12%",
      icon: <FiBook className="text-orange-500" size={24} />,
      color: "bg-orange-100",
    },
    {
      title: "Active Users",
      value: "3,456",
      change: "+5.2%",
      icon: <FiUsers className="text-blue-500" size={24} />,
      color: "bg-blue-100",
    },
    {
      title: "Monthly Views",
      value: "28.7K",
      change: "+23%",
      icon: <FiEye className="text-green-500" size={24} />,
      color: "bg-green-100",
    },
    {
      title: "Recipe Likes",
      value: "5,623",
      change: "+8.1%",
      icon: <FiHeart className="text-red-500" size={24} />,
      color: "bg-red-100",
    },
    {
      title: "Avg. Prep Time",
      value: "32 mins",
      change: "-2%",
      icon: <FiClock className="text-purple-500" size={24} />,
      color: "bg-purple-100",
    },
    {
      title: "Engagement Rate",
      value: "68%",
      change: "+4.3%",
      icon: <FiTrendingUp className="text-yellow-500" size={24} />,
      color: "bg-yellow-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-10">
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className={`p-6 rounded-xl shadow-sm border ${stat.color} bg-opacity-50`}
        >
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p
                className={`text-sm mt-2 flex items-center ${
                  stat.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change} from last month
              </p>
            </div>
            <div
              className={`p-3 rounded-full ${stat.color.replace("bg-", "bg-")}`}
            >
              {stat.icon}
            </div>
          </div>

          {/* Mini progress bar (optional) */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min(parseInt(stat.change) * 10, 100)}%`,
                }}
                transition={{ delay: 0.3 }}
                className={`h-1.5 rounded-full ${
                  stat.change.startsWith("+") ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;
